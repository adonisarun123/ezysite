import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import {
  SERVICE_CLOSE_MINUTES,
  SERVICE_OPEN_MINUTES,
  endMinutesForSlot,
  getAvailableSlotStarts,
  getAvailableSlotStartsIst,
  maxStartMinutesForDuration,
  minSelectableDateIst,
  minSelectableDateLocal,
  todayYmdInIst,
} from '../onDemandHelpSlots'
import { istInstantMs } from '../istDateTime'

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

  describe('getAvailableSlotStartsIst (Bangalore pilot — fixes server UTC vs IST)', () => {
    it('includes 9:00 on a future IST date regardless of machine TZ', () => {
      const slots = getAvailableSlotStartsIst('2030-01-15', 2, new Date('2030-01-10T12:00:00Z'))
      expect(slots[0]).toBe(SERVICE_OPEN_MINUTES)
    })

    it('on “today” in IST filters slots before now+60m using IST wall clock', () => {
      const now = new Date('2030-06-01T02:45:00.000Z')
      expect(todayYmdInIst(now)).toBe('2030-06-01')
      const earliestMs = now.getTime() + 60 * 60 * 1000
      const slots = getAvailableSlotStartsIst('2030-06-01', 2, now)
      expect(slots[0]).toBe(9 * 60 + 30)
      for (const sm of slots) {
        expect(istInstantMs('2030-06-01', sm)).toBeGreaterThanOrEqual(earliestMs)
      }
    })
  })

  describe('getAvailableSlotStarts (browser-local — legacy)', () => {
    const prevTz = process.env.TZ

    beforeAll(() => {
      process.env.TZ = 'Asia/Kolkata'
    })

    afterAll(() => {
      process.env.TZ = prevTz
    })

    it('includes 9:00 on a future date when TZ is Kolkata', () => {
      const future = '2030-01-15'
      const slots = getAvailableSlotStarts(future, 2, new Date('2030-01-10T12:00:00+05:30'))
      expect(slots[0]).toBe(SERVICE_OPEN_MINUTES)
    })
  })

  describe('minSelectableDateLocal / ISt', () => {
    it('returns YYYY-MM-DD for provided instant', () => {
      const d = new Date('2031-07-04T18:00:00+05:30')
      expect(minSelectableDateLocal(d)).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    })

    it('minSelectableDateIst follows Asia/Kolkata calendar', () => {
      const d = new Date('2031-07-04T18:00:00+05:30')
      expect(minSelectableDateIst(d)).toBe('2031-07-04')
    })
  })
})
