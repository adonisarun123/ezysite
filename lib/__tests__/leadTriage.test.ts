import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { triageLeadForEmail } from '@/lib/leadTriage'

const anthropicReply = (text: string) => ({
  ok: true,
  json: async () => ({ content: [{ type: 'text', text }] }),
})

const validTriageJson = JSON.stringify({
  urgency: 'hot',
  reasons: ['needs maid this week', 'complete contact details'],
  summary: 'Family in Whitefield needs a live-in maid starting this week.',
  suggested_reply: 'Hi Arun, calling about the live-in maid you need in Whitefield.',
})

describe('triageLeadForEmail', () => {
  beforeEach(() => {
    vi.stubEnv('ANTHROPIC_API_KEY', 'test-key')
    vi.stubEnv('LEAD_TRIAGE_DISABLED', '')
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
  })

  it('returns a tagged banner for a hot lead', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(anthropicReply(validTriageJson)))
    const r = await triageLeadForEmail('hire_helper', { name: 'Arun', phone: '9845860005' })
    expect(r).not.toBeNull()
    expect(r!.subjectTag).toBe('[HOT] ')
    expect(r!.htmlBlock).toContain('HOT LEAD')
    expect(r!.htmlBlock).toContain('Family in Whitefield')
    expect(r!.htmlBlock).toContain('Suggested opener')
  })

  it('skips non-customer lead types without calling the API', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    expect(await triageLeadForEmail('careers_apm', {})).toBeNull()
    expect(await triageLeadForEmail('helper_registration', {})).toBeNull()
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('returns null when no API key is configured', async () => {
    vi.stubEnv('ANTHROPIC_API_KEY', '')
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    expect(await triageLeadForEmail('general', { name: 'x' })).toBeNull()
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('returns null when disabled via LEAD_TRIAGE_DISABLED', async () => {
    vi.stubEnv('LEAD_TRIAGE_DISABLED', 'true')
    expect(await triageLeadForEmail('general', { name: 'x' })).toBeNull()
  })

  it('never throws: API errors, malformed JSON and network failures yield null', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }))
    expect(await triageLeadForEmail('general', { name: 'x' })).toBeNull()

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(anthropicReply('not json at all')))
    expect(await triageLeadForEmail('general', { name: 'x' })).toBeNull()

    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down')))
    expect(await triageLeadForEmail('general', { name: 'x' })).toBeNull()
  })

  it('escapes HTML in model output (XSS guard for the email body)', async () => {
    const malicious = JSON.stringify({
      urgency: 'warm',
      reasons: ['<img src=x onerror=alert(1)>'],
      summary: '<script>alert("xss")</script> needs a cook',
      suggested_reply: 'Hello "friend" <b>now</b>',
    })
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(anthropicReply(malicious)))
    const r = await triageLeadForEmail('general', { name: 'x' })
    expect(r).not.toBeNull()
    expect(r!.htmlBlock).not.toContain('<script>')
    expect(r!.htmlBlock).not.toContain('<img src=x')
    expect(r!.htmlBlock).toContain('&lt;script&gt;')
    expect(r!.subjectTag).toBe('[WARM] ')
  })

  it('falls back to warm and tolerates missing fields', async () => {
    const partial = JSON.stringify({ urgency: 'bogus', summary: 'A lead.' })
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(anthropicReply(partial)))
    const r = await triageLeadForEmail('general', { name: 'x' })
    expect(r).not.toBeNull()
    expect(r!.subjectTag).toBe('[WARM] ')
  })

  it('returns null when the model gives no usable summary', async () => {
    const empty = JSON.stringify({ urgency: 'hot', summary: '' })
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(anthropicReply(empty)))
    expect(await triageLeadForEmail('general', { name: 'x' })).toBeNull()
  })
})
