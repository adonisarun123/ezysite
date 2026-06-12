import { describe, it, expect } from 'vitest'
import { buildRecipientList } from '@/lib/emailService'

// The four addresses guaranteed on every outbound lead/notification email
// (ALWAYS_CC_EMAILS in lib/emailService.ts, June 2026).
const CORE = [
  'contact@ezyhelpers.com',
  'priyanka@ezyhelpers.com',
  'arun@ezyhelpers.com',
  'suraj@ezyhelpers.com',
]

describe('buildRecipientList', () => {
  it('returns exactly the core team when env is empty', () => {
    expect(buildRecipientList('').split(', ')).toEqual(CORE)
  })

  it('always appends the core team to env-configured recipients', () => {
    const out = buildRecipientList('saritha@ezyhelpers.com').split(', ')
    expect(out[0]).toBe('saritha@ezyhelpers.com')
    for (const addr of CORE) expect(out).toContain(addr)
  })

  it('never duplicates a core member already present in env (case-insensitive)', () => {
    const out = buildRecipientList('ARUN@ezyhelpers.com, laxmi@ezyhelpers.com').split(', ')
    expect(out.filter((e) => e.toLowerCase() === 'arun@ezyhelpers.com')).toHaveLength(1)
    expect(out).toContain('laxmi@ezyhelpers.com')
  })

  it('ignores empty segments and whitespace', () => {
    const out = buildRecipientList(' , ,x@y.com, ').split(', ')
    expect(out).toEqual(['x@y.com', ...CORE])
  })
})
