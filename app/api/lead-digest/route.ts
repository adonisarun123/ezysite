// Daily lead digest — GET /api/lead-digest
// Triggered by Vercel Cron at 23:30 UTC (= 5:00 AM IST) daily; see vercel.json.
// Auth: Vercel Cron sends "Authorization: Bearer ${CRON_SECRET}". Manual runs
// can use the existing x-api-key (API_SECRET_KEY) header instead.

import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseAdmin } from '@/lib/supabaseAdmin'
import { createTransporter } from '@/lib/emails/transport'
import { validateApiKey } from '@/lib/auth'
import {
  computePeriods,
  summarize,
  buildDigestEmail,
  type LeadRow,
  type ChatbotStats,
} from '@/lib/leadDigest'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 60

const DIGEST_RECIPIENTS = [
  'contact@ezyhelpers.com',
  'priyanka@ezyhelpers.com',
  'arun@ezyhelpers.com',
  'suraj@ezyhelpers.com',
  'ankit@ezyhelpers.com',
]

function isAuthorized(req: NextRequest): boolean {
  const cronSecret = process.env.CRON_SECRET
  const auth = req.headers.get('authorization') || ''
  if (cronSecret && auth === `Bearer ${cronSecret}`) return true
  return validateApiKey(req).isValid
}

/** Best-effort 2–3 sentence narrative from Haiku. Null on any failure. */
async function aiInsight(stats: Record<string, unknown>): Promise<string | null> {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) return null
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 250,
        messages: [
          {
            role: 'user',
            content: `You write the 2-3 sentence executive insight at the top of a daily lead digest for EzyHelpers (domestic help placement, India). Be specific and actionable: call out the most notable change, concentration or gap in this data. Plain text only, no preamble.\n\n${JSON.stringify(stats).slice(0, 4000)}`,
          },
        ],
      }),
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) return null
    const data = (await res.json()) as { content?: Array<{ type: string; text?: string }> }
    const text = data.content?.find((b) => b.type === 'text')?.text?.trim()
    return text ? text.slice(0, 600) : null
  } catch {
    return null
  }
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createSupabaseAdmin()
  if (!supabase) {
    return NextResponse.json(
      { error: 'supabase_not_configured', detail: 'NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY missing' },
      { status: 503 }
    )
  }

  const periods = computePeriods(Date.now())
  const fetchFromIso = new Date(periods.fetchFromMs).toISOString()
  let dataNote: string | null = null

  // ── Leads ──
  let leads: LeadRow[] = []
  {
    const { data, error } = await supabase
      .from('leads')
      .select('service, city, created_at')
      .gte('created_at', fetchFromIso)
      .limit(10000)
    if (error) {
      // Most likely cause: no created_at column. Fall back to a capped
      // unfiltered fetch so the digest still goes out, with a note.
      const fallback = await supabase.from('leads').select('*').limit(10000)
      if (fallback.error) {
        return NextResponse.json(
          { error: 'leads_query_failed', detail: error.message },
          { status: 500 }
        )
      }
      leads = (fallback.data || []) as LeadRow[]
      dataNote = `leads.created_at not queryable (${error.message}) — date filtering may be incomplete.`
    } else {
      leads = (data || []) as LeadRow[]
    }
  }

  const yesterday = summarize(leads, periods.yesterday)
  const prevDay = summarize(leads, periods.prevDay)
  const weekSoFar = summarize(leads, periods.weekSoFar)
  const prevWeekSamePoint = summarize(leads, periods.prevWeekSamePoint)
  const monthSoFar = summarize(leads, periods.monthSoFar)
  const prevMonthSamePoint = summarize(leads, periods.prevMonthSamePoint)

  // ── Chatbot stats (best-effort) ──
  let chatbot: ChatbotStats | null = null
  try {
    const { data, error } = await supabase
      .from('chatbot_sessions')
      .select('last_message_at, lead, lead_complete, feedback, unanswered')
      .gte('last_message_at', new Date(periods.yesterday.start).toISOString())
      .lt('last_message_at', new Date(periods.yesterday.end).toISOString())
      .limit(2000)
    if (!error && data) {
      const rows = data as Array<{
        lead?: { booking_ref?: string | null } | null
        lead_complete?: boolean | null
        feedback?: string | null
        unanswered?: string | null
      }>
      chatbot = {
        sessions: rows.length,
        leadsCaptured: rows.filter((r) => r.lead_complete).length,
        bookings: rows.filter((r) => r.lead?.booking_ref).length,
        thumbsUp: rows.filter((r) => r.feedback === 'up').length,
        thumbsDown: rows.filter((r) => r.feedback === 'down').length,
        unanswered: rows.map((r) => r.unanswered).filter((q): q is string => !!q),
      }
    }
  } catch {
    chatbot = null
  }

  const insight = await aiInsight({
    yesterday,
    prevDay: prevDay.total,
    weekSoFar: { total: weekSoFar.total, prevWeekSamePoint: prevWeekSamePoint.total },
    monthSoFar: { total: monthSoFar.total, prevMonthSamePoint: prevMonthSamePoint.total },
    chatbot,
  })

  const email = buildDigestEmail({
    periods,
    yesterday,
    prevDay,
    weekSoFar,
    prevWeekSamePoint,
    monthSoFar,
    prevMonthSamePoint,
    chatbot,
    aiInsight: insight,
    dataNote,
  })

  const to =
    (process.env.LEAD_DIGEST_RECIPIENTS || '').trim() || DIGEST_RECIPIENTS.join(', ')

  // Dry-run health check (?dry=1): runs the full pipeline — auth, Supabase,
  // leads query, summaries, email assembly — but does NOT send. Lets a watchdog
  // verify the digest is healthy each day without emailing the team a second
  // copy. Returns ok:true only if everything up to the send succeeded.
  const isDryRun = req.nextUrl.searchParams.get('dry') === '1'
  if (isDryRun) {
    return NextResponse.json({
      ok: true,
      dryRun: true,
      wouldSendTo: to,
      yesterday: yesterday.total,
      weekSoFar: weekSoFar.total,
      monthSoFar: monthSoFar.total,
      chatbotSessions: chatbot?.sessions ?? null,
      dataNote,
    })
  }

  try {
    const transporter = createTransporter()
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject: email.subject,
      text: email.text,
      html: email.html,
    })
  } catch (e) {
    console.error('Lead digest email failed:', e)
    return NextResponse.json(
      { error: 'email_failed', summary: { yesterday: yesterday.total, week: weekSoFar.total, month: monthSoFar.total } },
      { status: 500 }
    )
  }

  return NextResponse.json({
    ok: true,
    sentTo: to,
    yesterday: yesterday.total,
    weekSoFar: weekSoFar.total,
    monthSoFar: monthSoFar.total,
    chatbotSessions: chatbot?.sessions ?? null,
    dataNote,
  })
}
