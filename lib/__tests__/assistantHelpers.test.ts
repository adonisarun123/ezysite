import { describe, it, expect } from 'vitest'
import {
  isServedArea,
  isValidIndianMobile,
  generateBookingRef,
  buildTo,
} from '@/lib/assistantHelpers'

describe('isValidIndianMobile', () => {
  it('accepts a normal 10-digit mobile starting 6-9', () => {
    expect(isValidIndianMobile('9845860005')).toBe(true)
    expect(isValidIndianMobile('6300000001')).toBe(true)
  })

  it('accepts numbers with +91 / spaces / dashes (uses last 10 digits)', () => {
    expect(isValidIndianMobile('+91 98458 60005')).toBe(true)
    expect(isValidIndianMobile('091-9845860005')).toBe(true)
  })

  it('rejects numbers not starting 6-9', () => {
    expect(isValidIndianMobile('1234567890')).toBe(false)
    expect(isValidIndianMobile('5845860005')).toBe(false)
  })

  it('rejects obvious fakes', () => {
    expect(isValidIndianMobile('9999999999')).toBe(false)
    expect(isValidIndianMobile('9876543210')).toBe(false)
  })

  it('rejects short, empty and null inputs', () => {
    expect(isValidIndianMobile('98458')).toBe(false)
    expect(isValidIndianMobile('')).toBe(false)
    expect(isValidIndianMobile(null)).toBe(false)
  })
})

describe('isServedArea', () => {
  it('matches served localities case-insensitively', () => {
    expect(isServedArea('Whitefield')).toBe(true)
    expect(isServedArea('HSR Layout')).toBe(true)
    expect(isServedArea('  bengaluru ')).toBe(true)
    expect(isServedArea('Bareilly')).toBe(true)
  })

  it('matches when the locality is part of a longer phrase', () => {
    expect(isServedArea('near Koramangala 4th block')).toBe(true)
  })

  it('rejects unserved cities', () => {
    expect(isServedArea('Pune')).toBe(false)
    expect(isServedArea('Chennai')).toBe(false)
  })
})

describe('generateBookingRef', () => {
  it('matches the EZY-XXXXXX format without confusable characters', () => {
    for (let i = 0; i < 50; i++) {
      const ref = generateBookingRef()
      expect(ref).toMatch(/^EZY-[A-HJ-NP-Z2-9]{6}$/)
      expect(ref).not.toMatch(/[01IOL]/) // no 0/1/I/O/L after the prefix
    }
  })
})

describe('buildTo', () => {
  const CORE = ['contact@ezyhelpers.com', 'arun@ezyhelpers.com']

  it('always includes the guaranteed recipients', () => {
    expect(buildTo(undefined, CORE)).toBe('contact@ezyhelpers.com, arun@ezyhelpers.com')
    expect(buildTo('', CORE)).toBe('contact@ezyhelpers.com, arun@ezyhelpers.com')
  })

  it('merges env recipients ahead of guaranteed ones', () => {
    const out = buildTo('x@y.com', CORE)
    expect(out.split(', ')).toEqual(['x@y.com', 'contact@ezyhelpers.com', 'arun@ezyhelpers.com'])
  })

  it('de-duplicates case-insensitively and trims whitespace', () => {
    const out = buildTo(' Contact@EzyHelpers.com ,x@y.com,, x@y.com ', CORE)
    const list = out.split(', ')
    expect(list).toHaveLength(3) // Contact@…, x@y.com, arun@…
    expect(list.filter((e) => e.toLowerCase() === 'contact@ezyhelpers.com')).toHaveLength(1)
    expect(list.filter((e) => e === 'x@y.com')).toHaveLength(1)
  })
})
