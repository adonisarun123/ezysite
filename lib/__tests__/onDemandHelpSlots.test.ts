import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import {
  SERVICE_CLOSE_MINUTES,
  SERVICE_OPEN_MINUTES,
  endMinutesForSlot,
  getAvailableSlotStarts,
  maxStartMinutesForDuration,
  minSelectableDateLocal,
} from '../onDemandHelpSlots'

describe('onDemandHelpSlots', () => {
  describe('constants & pure helpers', () => {
    it('closes service at 19:30 (1170 minutes)', () => {
      expect(SERVICE_CLOSE_MINUTES).toBe(19 * 60 + 30)
    })

    it('opens at 09:00', () => {
      expect(SERVICE_OPEN_MINUTES).toBe(9 * 60)
    })

    it('maxStart for 8h ends at 19:30 → latest start 11:30', () => {
      expect(maxStartMinutesForDuration(8)).toBe(11 * 60 + 30)
    })

    it('maxStart for 2h allows start until 17:30', () => {
      expect(maxStartMinutesForDuration(2)).toBe(17 * 60 + 30)
    })

    it('endMinutesForSlot adds duration hours in minutes', () => {
      expect(endMinutesForSlot(9 * 60, 2)).toBe(11 * 60)
    })
  })

  describe('getAvailableSlotStarts (TZ Asia/Kolkata)', () => {
    const prevTz = process.env.TZ

    beforeAll(() => {
      process.env.TZ = 'Asia/Kolkata'
    })

    afterAll(() => {
      process.env.TZ = prevTz
    })

    it('includes 9:00 on a future date regardless of now', () => {
      const future = '2030-01-15'
      const slots = getAvailableSlotStarts(future, 2, new Date('2030-01-10T12:00:00+05:30'))
      expect(slots[0]).toBe(SERVICE_OPEN_MINUTES)
    })

    it('on same day filters slots before now+60m', () => {
      const dateStr = '2030-06-01'
      const now = new Date('2030-06-01T08:15:00+05:30')
      const slots = getAvailableSlotStarts(dateStr, 2, now)
      const earliestAllowed = new Date(now.getTime() + 60 * 60 * 1000)
      for (const sm of slots) {
        const [y, m, d] = dateStr.split('-').map(Number)
        const slotStart = new Date(y, m - 1, d, Math.floor(sm / 60), sm % 60, 0, 0)
        expect(slotStart.getTime()).toBeGreaterThanOrEqual(earliestAllowed.getTime())
      }
    })
  })

  describe('minSelectableDateLocal', () => {
    it('returns YYYY-MM-DD for provided instant', () => {
      const d = new Date('2031-07-04T18:00:00+05:30')
      expect(minSelectableDateLocal(d)).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    })
  })
})
