/**
 * Standalone sanity checks for on-demand-help scheduling helpers.
 * Run: npx tsx scripts/verify-on-demand-help-logic.ts
 */
import assert from 'node:assert/strict'
import {
  rangesOverlapHalfOpenMs,
  istInstantMs,
  istVisitRangeUtcIso,
  nextCalendarDateIst,
} from '../lib/istDateTime'
import {
  maxStartMinutesForDuration,
  getAvailableSlotStartsIst,
  SERVICE_CLOSE_MINUTES,
} from '../lib/onDemandHelpSlots'
import {
  buildOnDemandHelpTimingSummary,
  buildOnDemandHelpSpecificRequirements,
} from '../lib/onDemandHelpLeadText'

function main() {
  let a0 = istInstantMs('2026-06-01', 9 * 60)
  let a1 = istInstantMs('2026-06-01', 11 * 60)
  let b0 = istInstantMs('2026-06-01', 11 * 60)
  let b1 = istInstantMs('2026-06-01', 13 * 60)
  assert.equal(rangesOverlapHalfOpenMs(a0, a1, b0, b1), false)

  a0 = istInstantMs('2026-06-01', 10 * 60)
  a1 = istInstantMs('2026-06-01', 14 * 60)
  b0 = istInstantMs('2026-06-01', 13 * 60)
  b1 = istInstantMs('2026-06-01', 15 * 60)
  assert.equal(rangesOverlapHalfOpenMs(a0, a1, b0, b1), true)

  const r = istVisitRangeUtcIso('2026-06-01', 9 * 60, 4)
  assert.equal(r.endMs - r.startMs, 4 * 3600000)

  assert.equal(nextCalendarDateIst('2026-04-30'), '2026-05-01')

  assert.equal(maxStartMinutesForDuration(8), 11 * 60 + 30)
  assert.equal(SERVICE_CLOSE_MINUTES, 19 * 60 + 30)

  const timing = buildOnDemandHelpTimingSummary('2026-08-01', 10 * 60 + 30, 4)
  assert.ok(timing.includes('2026-08-01'))
  const body = buildOnDemandHelpSpecificRequirements({
    taskIds: ['floors-sweep-mop'],
    area: 'HSR Layout',
    serviceDate: '2026-08-01',
    slotMinutes: 9 * 60,
    durationHours: 2,
    apartmentOrSocietyName: 'Green Valley',
    flatUnitDetails: 'T1, 201',
  })
  assert.ok(body.includes('Green Valley'))

  const slots = getAvailableSlotStartsIst('2030-01-15', 2, new Date('2030-01-10T12:00:00+05:30'))
  assert.equal(slots[0], 9 * 60)

  console.log('verify-on-demand-help-logic: all checks passed.')
}

main()
