import { describe, it, expect } from 'vitest'
import {
  computePeriods,
  classifyJobType,
  classifyLocation,
  summarize,
  formatDelta,
  buildDigestEmail,
} from '@/lib/leadDigest'

// 2026-06-12 05:00 IST == 2026-06-11 23:30 UTC (the cron fire time)
const CRON_FIRE_MS = Date.UTC(2026, 5, 11, 23, 30)

describe('computePeriods (IST date math)', () => {
  const p = computePeriods(CRON_FIRE_MS)

  it('yesterday = previous full IST calendar day (11 Jun 2026 IST)', () => {
    // 11 Jun 00:00 IST == 10 Jun 18:30 UTC
    expect(new Date(p.yesterday.start).toISOString()).toBe('2026-06-10T18:30:00.000Z')
    expect(new Date(p.yesterday.end).toISOString()).toBe('2026-06-11T18:30:00.000Z')
    expect(p.yesterdayLabel).toContain('11 Jun')
  })

  it('week starts on Monday IST (8 Jun 2026 was a Monday)', () => {
    expect(new Date(p.weekSoFar.start).toISOString()).toBe('2026-06-07T18:30:00.000Z')
    expect(p.weekSoFar.end).toBe(CRON_FIRE_MS)
  })

  it('month starts on the 1st IST', () => {
    expect(new Date(p.monthSoFar.start).toISOString()).toBe('2026-05-31T18:30:00.000Z')
  })

  it('comparison ranges shift by exactly 7 days / 1 month', () => {
    expect(p.prevWeekSamePoint.start).toBe(p.weekSoFar.start - 7 * 86400000)
    expect(p.prevWeekSamePoint.end).toBe(p.weekSoFar.end - 7 * 86400000)
    expect(p.prevMonthSamePoint.end - p.prevMonthSamePoint.start).toBe(
      p.monthSoFar.end - p.monthSoFar.start
    )
  })

  it('fetch window reaches back to the previous month start', () => {
    expect(p.fetchFromMs).toBeLessThanOrEqual(p.prevMonthSamePoint.start)
  })
})

describe('classifyJobType', () => {
  it('classifies the service strings the forms and chatbot produce', () => {
    expect(classifyJobType('Live-in Maid')).toBe('live-in')
    expect(classifyJobType('live in maid (live-in)')).toBe('live-in')
    expect(classifyJobType('Full-time Maid')).toBe('full-time')
    expect(classifyJobType('Part-time Maid')).toBe('part-time')
    expect(classifyJobType('On-demand Helper')).toBe('on-demand')
    expect(classifyJobType('maid - one-time cleaning (on-demand)')).toBe('on-demand')
    expect(classifyJobType('Cook')).toBe('other')
    expect(classifyJobType(null)).toBe('other')
  })
})

describe('classifyLocation', () => {
  it('maps known cities', () => {
    expect(classifyLocation('Bangalore')).toEqual({ city: 'Bangalore', locality: null })
    expect(classifyLocation('bengaluru')).toEqual({ city: 'Bangalore', locality: null })
    expect(classifyLocation('Bareilly')).toEqual({ city: 'Bareilly', locality: null })
  })

  it('maps Bangalore localities to Bangalore with the locality kept', () => {
    expect(classifyLocation('Whitefield')).toEqual({ city: 'Bangalore', locality: 'Whitefield' })
    expect(classifyLocation('HSR Layout')).toEqual({ city: 'Bangalore', locality: 'Hsr Layout' })
  })

  it('keeps locality when value contains both', () => {
    const r = classifyLocation('Whitefield, Bangalore')
    expect(r.city).toBe('Bangalore')
    expect(r.locality).toBe('Whitefield')
  })

  it('buckets unknown values under Other and handles empties', () => {
    expect(classifyLocation('Pune').city).toBe('Other')
    expect(classifyLocation('')).toEqual({ city: 'Unknown', locality: null })
    expect(classifyLocation(null)).toEqual({ city: 'Unknown', locality: null })
  })
})

describe('summarize', () => {
  const day = { start: Date.UTC(2026, 5, 10, 18, 30), end: Date.UTC(2026, 5, 11, 18, 30) }
  const inDay = '2026-06-11T10:00:00.000Z'
  const outOfDay = '2026-06-09T10:00:00.000Z'

  it('counts only rows inside the range and buckets correctly', () => {
    const s = summarize(
      [
        { service: 'Live-in Maid', city: 'Whitefield', created_at: inDay },
        { service: 'maid - one-time cleaning (on-demand)', city: 'Bareilly', created_at: inDay },
        { service: 'Full-time Maid', city: 'Mumbai', created_at: outOfDay },
        { service: 'Cook', city: 'Bangalore', created_at: inDay },
        { service: 'Part-time Maid', city: 'HSR Layout', created_at: null },
      ],
      day
    )
    expect(s.total).toBe(3)
    expect(s.byType['live-in']).toBe(1)
    expect(s.byType['on-demand']).toBe(1)
    expect(s.byType.other).toBe(1)
    expect(s.byCity.Bangalore).toBe(2) // Whitefield + Bangalore
    expect(s.byCity.Bareilly).toBe(1)
    expect(s.byLocality.Whitefield).toBe(1)
  })
})

describe('formatDelta', () => {
  it('formats up/down/flat', () => {
    expect(formatDelta(5, 3)).toBe('▲ +2')
    expect(formatDelta(3, 5)).toBe('▼ -2')
    expect(formatDelta(4, 4)).toBe('→ ±0')
  })
})

describe('buildDigestEmail', () => {
  it('produces a subject with totals and escapes AI insight HTML', () => {
    const p = computePeriods(CRON_FIRE_MS)
    const empty = summarize([], p.yesterday)
    const email = buildDigestEmail({
      periods: p,
      yesterday: empty,
      prevDay: empty,
      weekSoFar: empty,
      prevWeekSamePoint: empty,
      monthSoFar: empty,
      prevMonthSamePoint: empty,
      chatbot: null,
      aiInsight: '<script>alert(1)</script> Leads dipped.',
      dataNote: null,
    })
    expect(email.subject).toContain('Lead Digest')
    expect(email.subject).toContain('0 leads')
    expect(email.html).not.toContain('<script>')
    expect(email.html).toContain('&lt;script&gt;')
    expect(email.text).toContain('YESTERDAY: 0 leads')
  })
})
