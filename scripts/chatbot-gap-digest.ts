/**
 * Chatbot ("Asha") weekly gap digest.
 *
 * Pulls chatbot_sessions from Supabase, mines the conversations for knowledge
 * gaps and drop-off, and writes a dated Markdown digest to docs/. Built so the
 * loop between "the bot couldn't answer X" and "a human fixes the SYSTEM prompt"
 * is days, not whenever someone remembers to look. See companion analysis:
 * docs/chatbot-sessions-analysis-2026-06-14.md.
 *
 * Requires env: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 * (service-role key bypasses RLS — keep it in your local .env, never commit it).
 *
 * Run (env auto-loaded, Node >= 20.6):
 *   node --env-file=.env.development scripts/chatbot-gap-digest.ts
 * or, with tsx:
 *   npx tsx --env-file=.env.development scripts/chatbot-gap-digest.ts
 *
 * Optional: --days=N   (look-back window; default 7)
 *           --out=path (override output file)
 */
import { createClient } from '@supabase/supabase-js'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

type Msg = { role?: string; content?: string }
interface SessionRow {
  session_id: string
  started_at: string | null
  message_count: number | null
  lead_type: string | null
  job_role: string | null
  area: string | null
  lead_complete: boolean | null
  area_served: boolean | null
  sentiment: string | null
  unanswered: string | null
  page: string | null
  messages: Msg[] | string | null
}

function arg(name: string, fallback: string): string {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.split('=')[1] : fallback
}

function parseMessages(m: SessionRow['messages']): Msg[] {
  if (Array.isArray(m)) return m
  if (typeof m === 'string') {
    try {
      const p = JSON.parse(m)
      return Array.isArray(p) ? p : []
    } catch {
      return []
    }
  }
  return []
}

/** Crude but useful theme bucketing for unanswered/gap questions. */
const THEMES: Record<string, RegExp> = {
  pricing: /\b(price|cost|charge|fee|rate|how much|kitna|kitne|salary)\b/i,
  gardener: /\bgarden|gardener|mali\b/i,
  repairs_trades: /\b(electric|plumb|carpent|paint|pest|ac repair|appliance|repair)\b/i,
  cleaning: /\b(deep clean|cleaning|mop|sweep|utensil|dishwash)\b/i,
  care_medical: /\b(nurse|nursing|physio|icu|ventilator|patient|injection|wound|catheter|oxygen|wheelchair|palliative|cancer|dementia|parkinson|stroke|diabetes|attendant|caretaker)\b/i,
  house_shifting: /\b(shift|relocat|move|packers|movers)\b/i,
  availability_timing: /\b(available|availability|how soon|when can|start|timing|today|tomorrow)\b/i,
  area_coverage: /\b(area|serve|pincode|pin code|location|do you cover)\b/i,
  guarantee_refund: /\b(refund|replace|guarantee|trial|cancel|cooling)\b/i,
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key || url.includes('your-project')) {
    console.error(
      'ERROR: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (real values) in your env file.\n' +
        'Run: node --env-file=.env.development scripts/chatbot-gap-digest.ts'
    )
    process.exit(1)
  }

  const days = parseInt(arg('days', '7'), 10)
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const { data, error } = await supabase
    .from('chatbot_sessions')
    .select(
      'session_id,started_at,message_count,lead_type,job_role,area,lead_complete,area_served,sentiment,unanswered,page,messages'
    )
    .gte('started_at', since)
    .order('started_at', { ascending: false })

  if (error) {
    console.error('Supabase query failed:', error.message)
    process.exit(1)
  }

  const rows = (data ?? []) as SessionRow[]
  const n = rows.length
  const pct = (x: number) => (n ? Math.round((100 * x) / n) : 0)

  // ── Aggregates ──────────────────────────────────────────────
  const complete = rows.filter((r) => r.lead_complete).length
  const bounced = rows.filter((r) => (r.message_count ?? 0) <= 2).length
  const negative = rows.filter((r) => r.sentiment === 'negative').length
  const jobSeekers = rows.filter((r) => r.lead_type === 'job_seeker').length

  // ── Explicit unanswered flags ───────────────────────────────
  const unanswered = rows
    .filter((r) => (r.unanswered ?? '').trim())
    .map((r) => (r.unanswered as string).trim())

  // ── Mine transcripts: collect user messages that look like gaps ──
  const themeHits: Record<string, string[]> = {}
  const areaDeclined: Record<string, number> = {}
  for (const r of rows) {
    const msgs = parseMessages(r.messages)
    const users = msgs.filter((m) => m.role === 'user').map((m) => m.content ?? '')
    // area-not-served responses
    for (const m of msgs) {
      if (m.role === 'assistant' && /don't serve/i.test(m.content ?? '')) {
        const mt = /don't serve ([^,]+?) (?:just yet|for)/i.exec(m.content ?? '')
        const a = mt ? mt[1].trim() : r.area || 'unknown'
        areaDeclined[a] = (areaDeclined[a] ?? 0) + 1
        break
      }
    }
    // theme bucketing on first user message (the opener — strongest intent signal)
    const opener = users[0] ?? ''
    for (const [theme, re] of Object.entries(THEMES)) {
      if (re.test(opener)) {
        ;(themeHits[theme] ??= []).push(opener.slice(0, 90))
      }
    }
  }

  const sortByCount = (o: Record<string, unknown[] | number>) =>
    Object.entries(o).sort((a, b) => {
      const av = Array.isArray(a[1]) ? a[1].length : (a[1] as number)
      const bv = Array.isArray(b[1]) ? b[1].length : (b[1] as number)
      return bv - av
    })

  // ── Build the digest ────────────────────────────────────────
  const today = new Date().toISOString().slice(0, 10)
  const L: string[] = []
  L.push(`# Chatbot Weekly Gap Digest — ${today}`)
  L.push('')
  L.push(`Window: last ${days} days (since ${since.slice(0, 10)}). Sessions: ${n}.`)
  L.push('')
  if (n === 0) {
    L.push('No sessions in this window. Nothing to report.')
  } else {
    L.push('## Snapshot')
    L.push('')
    L.push(`- Complete leads: ${complete} (${pct(complete)}%)`)
    L.push(`- Bounced (<=2 msgs): ${bounced} (${pct(bounced)}%)`)
    L.push(`- Job seekers: ${jobSeekers}`)
    L.push(`- Negative sentiment: ${negative}`)
    L.push('')

    L.push('## Explicit unanswered questions (bot could not answer)')
    L.push('')
    if (unanswered.length === 0) {
      L.push('_None flagged. Good sign — knowledge base is keeping up._')
    } else {
      for (const u of unanswered) L.push(`- ${u}`)
    }
    L.push('')

    L.push('## Opener themes (what visitors lead with)')
    L.push('')
    L.push('High-volume themes point to where the bot most needs to be sharp.')
    L.push('')
    for (const [theme, hits] of sortByCount(themeHits)) {
      const arr = hits as string[]
      L.push(`### ${theme} — ${arr.length}`)
      for (const ex of arr.slice(0, 5)) L.push(`- "${ex}"`)
      L.push('')
    }

    L.push('## Areas declined ("we don\'t serve that yet")')
    L.push('')
    const ad = sortByCount(areaDeclined)
    if (ad.length === 0) {
      L.push('_None._')
    } else {
      for (const [a, c] of ad) L.push(`- ${a}: ${c as number}`)
      L.push('')
      L.push(
        '_If any of these are actually served now, add them to SERVED_AREAS ' +
          '(lib/assistantHelpers.ts) and the area lists in the SYSTEM prompt._'
      )
    }
    L.push('')

    L.push('## Suggested actions')
    L.push('')
    L.push(
      '- Any explicit unanswered question that recurs → add the fact to the ' +
        '`SYSTEM` knowledge base in `app/api/assistant/route.ts`.'
    )
    L.push(
      '- A high-volume opener theme the bot handles weakly → tighten that ' +
        'section of the prompt.'
    )
    L.push(
      '- Repeated declined areas that are now served → update `SERVED_AREAS`.'
    )
  }

  const outPath = arg('out', join('docs', `chatbot-gap-digest-${today}.md`))
  mkdirSync(join(process.cwd(), 'docs'), { recursive: true })
  writeFileSync(join(process.cwd(), outPath), L.join('\n'), 'utf8')
  console.log(`Digest written: ${outPath}  (${n} sessions, ${unanswered.length} unanswered)`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
