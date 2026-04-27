import { describe, it, expect } from 'vitest'
import {
  istInstantMs,
  istVisitRangeUtcIso,
  nextCalendarDateIst,
  rangesOverlapHalfOpenMs,
  istDayBoundsIso,
} from '../istDateTime'

describe('istDateTime', () => {
  describe('rangesOverlapHalfOpenMs', () => {
    it('does not treat adjacent intervals as overlapping ([9–11) and [11–13))', () => {
      const a0 = istInstantMs('2026-06-01', 9 * 60)
      const a1 = istInstantMs('2026-06-01', 11 * 60)
      const b0 = istInstantMs('2026-06-01', 11 * 60)
      const b1 = istInstantMs('2026-06-01', 13 * 60)
      expect(rangesOverlapHalfOpenMs(a0, a1, b0, b1)).toBe(false)
    })

    it('detects overlap when one interval straddles another', () => {
      const a0 = istInstantMs('2026-06-01', 10 * 60)
      const a1 = istInstantMs('2026-06-01', 14 * 60)
      const b0 = istInstantMs('2026-06-01', 13 * 60)
      const b1 = istInstantMs('2026-06-01', 15 * 60)
      expect(rangesOverlapHalfOpenMs(a0, a1, b0, b1)).toBe(true)
    })

    it('detects overlap when intervals are identical', () => {
      const a0 = istInstantMs('2026-06-01', 9 * 60)
      const a1 = istInstantMs('2026-06-01', 11 * 60)
      expect(rangesOverlapHalfOpenMs(a0, a1, a0, a1)).toBe(true)
    })
  })

  describe('istVisitRangeUtcIso', () => {
    it('returns end exactly duration hours after start', () => {
      const { startIso, endIso, startMs, endMs } = istVisitRangeUtcIso('2026-06-01', 9 * 60, 4)
      expect(endMs - startMs).toBe(4 * 60 * 60 * 1000)
      expect(startIso).toMatch(/^\d{4}-\d{2}-\d{2}T/)
      expect(endIso).toMatch(/^\d{4}-\d{2}-\d{2}T/)
    })
  })

  describe('nextCalendarDateIst', () => {
    it('rolls from Apr 30 to May 1', () => {
      expect(nextCalendarDateIst('2026-04-30')).toBe('2026-05-01')
    })
  })

  describe('istDayBoundsIso', () => {
    it('returns midnight boundaries in IST offset', () => {
      const { dayStartIso, dayEndIso } = istDayBoundsIso('2026-06-15')
      expect(dayStartIso).toContain('2026-06-15')
      expect(dayStartIso).toContain('+05:30')
      expect(dayEndIso).not.toBe(dayStartIso)
    })
  })
})
