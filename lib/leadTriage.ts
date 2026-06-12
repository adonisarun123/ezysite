// AI lead triage (June 2026).
//
// Enriches outbound lead-notification emails with a short AI analysis:
// urgency classification, intent signals, a 2-line summary, and a suggested
// first response for the team.
//
// Design rules:
// - NEVER blocks a lead email: any failure (no API key, timeout, bad JSON)
//   returns null and the email is sent exactly as before.
// - Hard 6-second timeout so emails aren't delayed noticeably.
// - Uses Haiku (fast/cheap); cost per lead is a fraction of a paisa.
// - Only runs for customer lead types — careers/registrations are skipped.

const MODEL = 'claude-haiku-4-5-20251001'
const TIMEOUT_MS = 6000

// Lead types that represent potential customers (worth triaging).
const TRIAGED_LEAD_TYPES = new Set([
  'contact',
  'hire_helper',
  'hire_helper_partial',
  'general',
  'requirement',
  'customer_requirement',
  'care_services',
])

export interface LeadTriageResult {
  /** e.g. "[HOT] " — prepended to the email subject. Empty for cold leads. */
  subjectTag: string
  /** Sanitised HTML banner prepended to the email body. */
  htmlBlock: string
}

const escapeHtml = (x: unknown): string =>
  String(x ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

interface TriageJson {
  urgency: 'hot' | 'warm' | 'cold'
  reasons: string[]
  summary: string
  suggested_reply: string
}

const URGENCY_STYLES: Record<TriageJson['urgency'], { bg: string; border: string; label: string }> = {
  hot: { bg: '#fef2f2', border: '#dc2626', label: '🔥 HOT LEAD' },
  warm: { bg: '#fffbeb', border: '#d97706', label: '⚡ WARM LEAD' },
  cold: { bg: '#f9fafb', border: '#9ca3af', label: 'ℹ️ LEAD' },
}

export async function triageLeadForEmail(
  leadType: string,
  formData: Record<string, unknown>
): Promise<LeadTriageResult | null> {
  try {
    if (!TRIAGED_LEAD_TYPES.has(leadType)) return null
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) return null
    if (process.env.LEAD_TRIAGE_DISABLED === 'true') return null

    // Compact, bounded view of the form (strings only, truncated) — keeps the
    // prompt small and avoids accidentally shipping huge fields to the API.
    const compact: Record<string, string> = {}
    for (const [k, v] of Object.entries(formData)) {
      if (v === null || v === undefined) continue
      const s = typeof v === 'string' ? v : JSON.stringify(v)
      if (!s) continue
      compact[k] = s.slice(0, 300)
      if (Object.keys(compact).length >= 25) break
    }

    const prompt = `You are a lead-triage assistant for EzyHelpers, an Indian domestic-help placement company (maids, cooks, nannies, elderly care, drivers; home services). Analyse this inbound website lead and respond with ONLY a JSON object, no other text:

{"urgency":"hot|warm|cold","reasons":["short signal 1","short signal 2"],"summary":"max 2 sentences: who, what service, where, when","suggested_reply":"1-2 sentence suggested opening line for our telecaller's first call/WhatsApp, warm and specific to this lead"}

Urgency guide: hot = needs service within days, urgent language, complete contact info, specific requirement. warm = clear intent but flexible timing or incomplete details. cold = vague, exploratory, or likely spam/test.

Lead type: ${leadType}
Lead data: ${JSON.stringify(compact)}`

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 400,
        messages: [{ role: 'user', content: prompt }],
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
    if (!res.ok) return null

    const data = (await res.json()) as { content?: Array<{ type: string; text?: string }> }
    const text = data.content?.find((b) => b.type === 'text')?.text ?? ''
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) return null

    const parsed = JSON.parse(jsonMatch[0]) as Partial<TriageJson>
    const urgency: TriageJson['urgency'] =
      parsed.urgency === 'hot' || parsed.urgency === 'warm' || parsed.urgency === 'cold'
        ? parsed.urgency
        : 'warm'
    const reasons = Array.isArray(parsed.reasons) ? parsed.reasons.slice(0, 4).map(String) : []
    const summary = String(parsed.summary ?? '').slice(0, 400)
    const suggestedReply = String(parsed.suggested_reply ?? '').slice(0, 400)
    if (!summary) return null

    const style = URGENCY_STYLES[urgency]
    const reasonsHtml = reasons.length
      ? `<p style="margin:6px 0 0;font-size:13px;color:#374151;">${reasons
          .map((r) => `• ${escapeHtml(r)}`)
          .join('&nbsp;&nbsp;')}</p>`
      : ''
    const replyHtml = suggestedReply
      ? `<p style="margin:8px 0 0;font-size:13px;color:#374151;"><strong>Suggested opener:</strong> “${escapeHtml(suggestedReply)}”</p>`
      : ''

    const htmlBlock = `
      <div style="background:${style.bg};border-left:4px solid ${style.border};border-radius:6px;padding:12px 16px;margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;">
        <p style="margin:0;font-size:14px;font-weight:bold;color:#111827;">${style.label} <span style="font-weight:normal;color:#6b7280;font-size:12px;">— AI triage</span></p>
        <p style="margin:6px 0 0;font-size:14px;color:#111827;">${escapeHtml(summary)}</p>
        ${reasonsHtml}
        ${replyHtml}
      </div>`

    return {
      subjectTag: urgency === 'hot' ? '[HOT] ' : urgency === 'warm' ? '[WARM] ' : '',
      htmlBlock,
    }
  } catch {
    // Triage is best-effort decoration; the lead email always goes out.
    return null
  }
}
