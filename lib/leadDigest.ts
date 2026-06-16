// Daily lead digest (June 2026) — pure computation + email building.
// Used by app/api/lead-digest/route.ts (Vercel Cron, 5:00 AM IST daily).
// All date math is IST (UTC+5:30, no DST).

const IST_MS = 5.5 * 60 * 60 * 1000
const DAY_MS = 24 * 60 * 60 * 1000

export type JobType = 'live-in' | 'full-time' | 'part-time' | 'on-demand' | 'other'

export interface LeadRow {
  service?: string | null
  city?: string | null
  created_at?: string | null
}

export interface Range {
  start: number
  end: number
}

export interface Periods {
  /** Previous IST calendar day (the digest's headline period). */
  yesterday: Range
  /** Day before yesterday (for daily trend). */
  prevDay: Range
  /** Monday 00:00 IST of current week → now. */
  weekSoFar: Range
  /** Same span, previous week (for weekly trend). */
  prevWeekSamePoint: Range
  /** 1st 00:00 IST of current month → now. */
  monthSoFar: Range
  /** Same span, previous month (for monthly trend). */
  prevMonthSamePoint: Range
  /** Earliest instant any query needs (fetch window start). */
  fetchFromMs: number
  /** Pretty IST date label for "yesterday", e.g. "Thu, 12 Jun 2026". */
  yesterdayLabel: string
}

export function computePeriods(nowMs: number): Periods {
  const ist = new Date(nowMs + IST_MS)
  const y = ist.getUTCFullYear()
  const m = ist.getUTCMonth()
  const d = ist.getUTCDate()
  const todayStart = Date.UTC(y, m, d) - IST_MS

  const yesterday: Range = { start: todayStart - DAY_MS, end: todayStart }
  const prevDay: Range = { start: todayStart - 2 * DAY_MS, end: todayStart - DAY_MS }

  const daysSinceMonday = (ist.getUTCDay() + 6) % 7
  const weekStart = todayStart - daysSinceMonday * DAY_MS
  const weekSoFar: Range = { start: weekStart, end: nowMs }
  const prevWeekSamePoint: Range = { start: weekStart - 7 * DAY_MS, end: nowMs - 7 * DAY_MS }

  const monthStart = Date.UTC(y, m, 1) - IST_MS
  const prevMonthStart = Date.UTC(y, m - 1, 1) - IST_MS
  const monthSoFar: Range = { start: monthStart, end: nowMs }
  const prevMonthSamePoint: Range = {
    start: prevMonthStart,
    end: Math.min(prevMonthStart + (nowMs - monthStart), monthStart),
  }

  const yLabel = new Date(yesterday.start + IST_MS)
  const yesterdayLabel = yLabel.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC', // already shifted to IST above
  })

  return {
    yesterday,
    prevDay,
    weekSoFar,
    prevWeekSamePoint,
    monthSoFar,
    prevMonthSamePoint,
    fetchFromMs: Math.min(prevMonthStart, prevWeekSamePoint.start, prevDay.start),
    yesterdayLabel,
  }
}

export function classifyJobType(service: string | null | undefined): JobType {
  const s = (service || '').toLowerCase()
  if (/live[\s-]?in/.test(s)) return 'live-in'
  if (/on[\s-]?demand|one[\s-]?time/.test(s)) return 'on-demand'
  if (/part[\s-]?time/.test(s)) return 'part-time'
  if (/full[\s-]?time/.test(s)) return 'full-time'
  return 'other'
}

const CITIES = [
  'bangalore', 'bengaluru', 'mumbai', 'delhi', 'noida', 'hyderabad',
  'lucknow', 'kanpur', 'meerut', 'nagpur', 'bareilly',
]

// Bangalore localities the chatbot/forms commonly produce in the city field.
const BLR_LOCALITIES = [
  'whitefield', 'hsr', 'koramangala', 'bellandur', 'sarjapur',
  'electronic city', 'jp nagar', 'jayanagar', 'marathahalli', 'varthur',
  'btm', 'indiranagar', 'hebbal', 'yelahanka', 'rajajinagar', 'malleshwaram',
  'bannerghatta',
]

const titleCase = (s: string) =>
  s.replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase())

export function classifyLocation(raw: string | null | undefined): {
  city: string
  locality: string | null
} {
  const lower = (raw || '').toLowerCase().trim()
  if (!lower) return { city: 'Unknown', locality: null }
  const cityHit = CITIES.find((c) => lower.includes(c))
  if (cityHit) {
    const city = cityHit === 'bengaluru' ? 'Bangalore' : titleCase(cityHit)
    // "Whitefield, Bangalore" style values still carry a locality
    const locHit = BLR_LOCALITIES.find((l) => lower.includes(l))
    return { city, locality: locHit ? titleCase(locHit) : null }
  }
  const locHit = BLR_LOCALITIES.find((l) => lower.includes(l))
  if (locHit) return { city: 'Bangalore', locality: titleCase(raw!.trim()) }
  return { city: 'Other', locality: titleCase(raw!.trim()) }
}

export interface Summary {
  total: number
  byType: Record<JobType, number>
  byCity: Record<string, number>
  byLocality: Record<string, number>
}

const rowMs = (r: LeadRow): number => {
  const t = r.created_at ? Date.parse(r.created_at) : NaN
  return Number.isFinite(t) ? t : NaN
}

export function summarize(rows: LeadRow[], range: Range): Summary {
  const byType: Record<JobType, number> = {
    'live-in': 0, 'full-time': 0, 'part-time': 0, 'on-demand': 0, other: 0,
  }
  const byCity: Record<string, number> = {}
  const byLocality: Record<string, number> = {}
  let total = 0
  for (const r of rows) {
    const t = rowMs(r)
    if (!Number.isFinite(t) || t < range.start || t >= range.end) continue
    total++
    byType[classifyJobType(r.service)]++
    const { city, locality } = classifyLocation(r.city)
    byCity[city] = (byCity[city] || 0) + 1
    if (locality) byLocality[locality] = (byLocality[locality] || 0) + 1
  }
  return { total, byType, byCity, byLocality }
}

export function formatDelta(current: number, previous: number): string {
  const diff = current - previous
  if (diff > 0) return `▲ +${diff}`
  if (diff < 0) return `▼ ${diff}`
  return '→ ±0'
}

const sortDesc = (rec: Record<string, number>) =>
  Object.entries(rec).sort((a, b) => b[1] - a[1])

const esc = (x: unknown): string =>
  String(x ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const TYPE_LABELS: Record<JobType, string> = {
  'live-in': 'Live-in',
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  'on-demand': 'On-demand',
  other: 'Other',
}

function typeTable(cur: Summary, prev?: Summary): string {
  const rows = (Object.keys(TYPE_LABELS) as JobType[])
    .map((t) => {
      const delta = prev ? ` <span style="color:#6b7280;font-size:12px">${esc(formatDelta(cur.byType[t], prev.byType[t]))}</span>` : ''
      return `<tr><td style="padding:3px 16px 3px 0;color:#5F716B">${TYPE_LABELS[t]}</td><td style="padding:3px 0;font-weight:600">${cur.byType[t]}${delta}</td></tr>`
    })
    .join('')
  return `<table style="border-collapse:collapse;font-size:14px">${rows}</table>`
}

function countTable(rec: Record<string, number>, max = 12): string {
  const entries = sortDesc(rec).slice(0, max)
  if (entries.length === 0) return `<p style="color:#9ca3af;font-size:13px;margin:4px 0">none</p>`
  const rows = entries
    .map(
      ([k, v]) =>
        `<tr><td style="padding:3px 16px 3px 0;color:#5F716B">${esc(k)}</td><td style="padding:3px 0;font-weight:600">${v}</td></tr>`
    )
    .join('')
  return `<table style="border-collapse:collapse;font-size:14px">${rows}</table>`
}

function sectionHeader(title: string, sub: string): string {
  return `<h3 style="margin:20px 0 4px;color:#0E7C66">${esc(title)}</h3><p style="margin:0 0 8px;color:#9ca3af;font-size:12px">${esc(sub)}</p>`
}

export interface ChatbotStats {
  sessions: number
  leadsCaptured: number
  bookings: number
  thumbsUp: number
  thumbsDown: number
  unanswered: string[]
}

export function buildDigestEmail(args: {
  periods: Periods
  yesterday: Summary
  prevDay: Summary
  weekSoFar: Summary
  prevWeekSamePoint: Summary
  monthSoFar: Summary
  prevMonthSamePoint: Summary
  chatbot: ChatbotStats | null
  aiInsight: string | null
  dataNote?: string | null
}): { subject: string; html: string; text: string } {
  const { periods: p, yesterday: yd, prevDay, weekSoFar, prevWeekSamePoint, monthSoFar, prevMonthSamePoint, chatbot, aiInsight, dataNote } = args

  const subject = `Lead Digest — ${p.yesterdayLabel}: ${yd.total} lead${yd.total === 1 ? '' : 's'} ${formatDelta(yd.total, prevDay.total)} | Week ${weekSoFar.total} | Month ${monthSoFar.total}`

  const insightHtml = aiInsight
    ? `<div style="background:#f0fdf4;border-left:4px solid #0E7C66;border-radius:6px;padding:12px 16px;margin:0 0 16px"><p style="margin:0;font-size:14px;color:#14532d">${esc(aiInsight)}</p></div>`
    : ''

  const noteHtml = dataNote
    ? `<p style="color:#b45309;font-size:12px;background:#fffbeb;padding:8px 12px;border-radius:6px">⚠️ ${esc(dataNote)}</p>`
    : ''

  const chatbotHtml = chatbot
    ? `${sectionHeader('Chatbot (Asha) — yesterday', 'from chatbot_sessions')}
       <table style="border-collapse:collapse;font-size:14px">
         <tr><td style="padding:3px 16px 3px 0;color:#5F716B">Conversations</td><td style="font-weight:600">${chatbot.sessions}</td></tr>
         <tr><td style="padding:3px 16px 3px 0;color:#5F716B">Leads captured</td><td style="font-weight:600">${chatbot.leadsCaptured}</td></tr>
         <tr><td style="padding:3px 16px 3px 0;color:#5F716B">Bookings confirmed</td><td style="font-weight:600">${chatbot.bookings}</td></tr>
         <tr><td style="padding:3px 16px 3px 0;color:#5F716B">Feedback</td><td style="font-weight:600">👍 ${chatbot.thumbsUp} · 👎 ${chatbot.thumbsDown}</td></tr>
       </table>
       ${chatbot.unanswered.length ? `<p style="margin:10px 0 4px;font-size:13px;color:#5F716B"><strong>Questions Asha couldn't answer</strong> (add to FAQ/content):</p><ul style="margin:0;padding-left:18px;font-size:13px;color:#374151">${chatbot.unanswered.slice(0, 6).map((q) => `<li>${esc(q)}</li>`).join('')}</ul>` : ''}`
    : `<p style="color:#9ca3af;font-size:13px">Chatbot stats unavailable (chatbot_sessions not readable).</p>`

  const html = `
  <div style="font-family:Inter,Arial,sans-serif;color:#16241F;max-width:640px">
    <h2 style="color:#0E7C66;margin:0 0 4px">Daily Lead Digest</h2>
    <p style="margin:0 0 16px;color:#5F716B;font-size:13px">Covering ${esc(p.yesterdayLabel)} (IST) · sent 5:00 AM IST</p>
    ${insightHtml}
    ${noteHtml}

    ${sectionHeader(`Yesterday — ${yd.total} leads ${formatDelta(yd.total, prevDay.total)}`, `vs ${prevDay.total} the day before`)}
    ${typeTable(yd, prevDay)}
    <p style="margin:10px 0 2px;font-size:13px;color:#5F716B"><strong>By city</strong></p>
    ${countTable(yd.byCity)}
    <p style="margin:10px 0 2px;font-size:13px;color:#5F716B"><strong>By locality</strong></p>
    ${countTable(yd.byLocality)}

    ${sectionHeader(`This week so far — ${weekSoFar.total} leads ${formatDelta(weekSoFar.total, prevWeekSamePoint.total)}`, `since Monday · vs ${prevWeekSamePoint.total} at the same point last week`)}
    ${typeTable(weekSoFar, prevWeekSamePoint)}
    <p style="margin:10px 0 2px;font-size:13px;color:#5F716B"><strong>By city</strong></p>
    ${countTable(weekSoFar.byCity)}

    ${sectionHeader(`This month so far — ${monthSoFar.total} leads ${formatDelta(monthSoFar.total, prevMonthSamePoint.total)}`, `since the 1st · vs ${prevMonthSamePoint.total} at the same point last month`)}
    ${typeTable(monthSoFar, prevMonthSamePoint)}
    <p style="margin:10px 0 2px;font-size:13px;color:#5F716B"><strong>By city</strong></p>
    ${countTable(monthSoFar.byCity)}

    ${chatbotHtml}

    <p style="color:#9ca3af;font-size:11px;margin-top:24px">Automated digest from the EzyHelpers website · data: Supabase leads + chatbot_sessions</p>
  </div>`

  const textLines = [
    `Daily Lead Digest — ${p.yesterdayLabel} (IST)`,
    ...(aiInsight ? ['', aiInsight] : []),
    ...(dataNote ? ['', `NOTE: ${dataNote}`] : []),
    '',
    `YESTERDAY: ${yd.total} leads (${formatDelta(yd.total, prevDay.total)} vs day before)`,
    ...(Object.keys(TYPE_LABELS) as JobType[]).map((t) => `  ${TYPE_LABELS[t]}: ${yd.byType[t]}`),
    `  By city: ${sortDesc(yd.byCity).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'}`,
    `  By locality: ${sortDesc(yd.byLocality).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'}`,
    '',
    `WEEK SO FAR: ${weekSoFar.total} (${formatDelta(weekSoFar.total, prevWeekSamePoint.total)} vs same point last week)`,
    `MONTH SO FAR: ${monthSoFar.total} (${formatDelta(monthSoFar.total, prevMonthSamePoint.total)} vs same point last month)`,
    ...(chatbot
      ? [
          '',
          `CHATBOT: ${chatbot.sessions} conversations, ${chatbot.leadsCaptured} leads, ${chatbot.bookings} bookings, 👍${chatbot.thumbsUp}/👎${chatbot.thumbsDown}`,
          ...(chatbot.unanswered.length ? [`Unanswered: ${chatbot.unanswered.slice(0, 6).join(' | ')}`] : []),
        ]
      : []),
  ]

  return { subject, html, text: textLines.join('\n') }
}
