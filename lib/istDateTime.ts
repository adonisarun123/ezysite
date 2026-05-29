/** Helpers for Asia/Kolkata wall-clock dates used by /on-demand-help scheduling. */

const IST_OFFSET = '+05:30'

function pad2(n: number): string {
  return String(n).padStart(2, '0')
}

/** Millisecond instant for a calendar date + minutes-from-midnight in IST. */
export function istInstantMs(dateStr: string, minutesFromMidnight: number): number {
  const h = Math.floor(minutesFromMidnight / 60)
  const m = minutesFromMidnight % 60
  const iso = `${dateStr}T${pad2(h)}:${pad2(m)}:00${IST_OFFSET}`
  return new Date(iso).getTime()
}

/** UTC ISO strings for [start, end) visit window in IST. */
export function istVisitRangeUtcIso(
  dateStr: string,
  startMinutes: number,
  durationHours: number
): { startIso: string; endIso: string; startMs: number; endMs: number } {
  const startMs = istInstantMs(dateStr, startMinutes)
  const endMs = startMs + durationHours * 60 * 60 * 1000
  return {
    startIso: new Date(startMs).toISOString(),
    endIso: new Date(endMs).toISOString(),
    startMs,
    endMs,
  }
}

/** Next calendar date (YYYY-MM-DD) in Asia/Kolkata after `dateStr`. */
export function nextCalendarDateIst(dateStr: string): string {
  const ms = istInstantMs(dateStr, 12 * 60) + 24 * 60 * 60 * 1000
  return new Date(ms).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' })
}

/** IST midnight boundaries as ISO strings with offset (for DB range queries). */
export function istDayBoundsIso(dateStr: string): { dayStartIso: string; dayEndIso: string } {
  const nextDay = nextCalendarDateIst(dateStr)
  return {
    dayStartIso: `${dateStr}T00:00:00${IST_OFFSET}`,
    dayEndIso: `${nextDay}T00:00:00${IST_OFFSET}`,
  }
}

/** Half-open interval overlap in epoch ms: [a0,a1) overlaps [b0,b1) iff a0 < b1 && b0 < a1 */
export function rangesOverlapHalfOpenMs(a0: number, a1: number, b0: number, b1: number): boolean {
  return a0 < b1 && b0 < a1
}
