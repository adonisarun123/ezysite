import { describe, it, expect } from 'vitest'
import { isSpamOrGibberish } from '@/components/EzyHelpersAssistant'

describe('isSpamOrGibberish (chat widget input filter)', () => {
  it('lets phone-number attempts through — even fake ones (regression: 9999999999)', () => {
    // Invalid numbers must reach the assistant so Asha can respond in context
    // instead of the canned "I didn't quite catch that" derailing the lead flow.
    expect(isSpamOrGibberish('9999999999')).toBeNull()
    expect(isSpamOrGibberish('9876543210')).toBeNull()
    expect(isSpamOrGibberish('+91 99999 99999')).toBeNull()
    expect(isSpamOrGibberish('98458-60005')).toBeNull()
    expect(isSpamOrGibberish('(080) 31411776')).toBeNull()
  })

  it('still lets normal messages through', () => {
    expect(isSpamOrGibberish('I need a maid in Whitefield')).toBeNull()
    expect(isSpamOrGibberish('ok')).toBeNull()
    expect(isSpamOrGibberish('9')).toBeNull() // single digit is a valid quick reply
  })

  it('still flags repeated-character gibberish that is not a phone', () => {
    expect(isSpamOrGibberish('aaaaaaaaaa')).toBe('gibberish')
    expect(isSpamOrGibberish('!!!!!!!!!!')).toBe('gibberish')
  })

  it('still flags consonant-mash gibberish', () => {
    expect(isSpamOrGibberish('xkcdqwrtpz')).toBe('gibberish')
  })

  it('still flags too-short and too-long input', () => {
    expect(isSpamOrGibberish('x')).toBe('too_short')
    expect(isSpamOrGibberish('a'.repeat(2000))).toBe('too_long')
  })
})
