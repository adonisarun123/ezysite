import type { OnDemandHelpDurationHours } from './onDemandHelp'

/** Service window: visits must finish by this minute-of-day (local). 19:30 */
export const SERVICE_CLOSE_MINUTES = 19 * 60 + 30

/** Earliest visit start (local). 9:00 */
export const SERVICE_OPEN_MINUTES = 9 * 60

const SLOT_STEP_MINUTES = 30

/** Latest allowed start time for a duration so work ends by SERVICE_CLOSE_MINUTES */
export function maxStartMinutesForDuration(durationHours: OnDemandHelpDurationHours): number {
  return SERVICE_CLOSE_MINUTES - durationHours * 60
}

function parseLocalDateParts(dateStr: string): { y: number; m: number; d: number } {
  const [y, m, d] = dateStr.split('-').map(Number)
  return { y, m, d }
}

function startOfLocalDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

function localYmd(d: Date): string {
  const y = d.getFullYear()
  const mo = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${mo}-${day}`
}

/**
 * Slots as minutes-from-midnight for the chosen calendar day (browser local TZ).
 * Same-day slots respect a minimum 60-minute advance booking rule.
 */
export function getAvailableSlotStarts(
  dateStr: string,
  durationHours: OnDemandHelpDurationHours,
  now: Date = new Date()
): number[] {
  const { y, m, d } = parseLocalDateParts(dateStr)
  const selectedDayStart = startOfLocalDay(new Date(y, m - 1, d))
  const todayStart = startOfLocalDay(now)
  const isToday = selectedDayStart.getTime() === todayStart.getTime()

  const maxStart = maxStartMinutesForDuration(durationHours)
  const slots: number[] = []

  const earliestEligible = new Date(now.getTime() + 60 * 60 * 1000)

  for (let startMin = SERVICE_OPEN_MINUTES; startMin <= maxStart; startMin += SLOT_STEP_MINUTES) {
    const slotStart = new Date(y, m - 1, d, Math.floor(startMin / 60), startMin % 60, 0, 0)
    if (isToday && slotStart.getTime() < earliestEligible.getTime()) continue
    slots.push(startMin)
  }

  return slots
}

export function formatMinutesAsClock(startMinutes: number): string {
  const h = Math.floor(startMinutes / 60)
  const min = startMinutes % 60
  return `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`
}

export function formatMinutesDisplay(startMinutes: number): string {
  const h24 = Math.floor(startMinutes / 60)
  const min = startMinutes % 60
  const period = h24 >= 12 ? 'PM' : 'AM'
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12
  const mm = min === 0 ? '' : `:${String(min).padStart(2, '0')}`
  return `${h12}${mm} ${period}`
}

export function endMinutesForSlot(startMinutes: number, durationHours: OnDemandHelpDurationHours): number {
  return startMinutes + durationHours * 60
}

export function minSelectableDateLocal(now: Date = new Date()): string {
  return localYmd(now)
}
