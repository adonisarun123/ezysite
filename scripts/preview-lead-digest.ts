// Preview the daily lead digest email with sample data — no Supabase needed.
// Run: npx tsx scripts/preview-lead-digest.ts > /tmp/digest-preview.html
// Uses the real buildDigestEmail template, so the preview matches production.

import {
  computePeriods,
  summarize,
  buildDigestEmail,
  type LeadRow,
} from '../lib/leadDigest'

const now = Date.now()
const p = computePeriods(now)

// Helper: ISO timestamp inside a given range, offset by hours from its start
const at = (rangeStart: number, hours: number) =>
  new Date(rangeStart + hours * 3600 * 1000).toISOString()

const y = p.yesterday.start
const d2 = p.prevDay.start
const wk = p.weekSoFar.start
const mo = p.monthSoFar.start

// Representative sample rows (shapes match real website/chatbot inserts)
const leads: LeadRow[] = [
  // ── yesterday ──
  { service: 'Live-in Maid', city: 'Whitefield', created_at: at(y, 9) },
  { service: 'Live-in Maid', city: 'Bangalore', created_at: at(y, 11) },
  { service: 'Full-time Maid', city: 'HSR Layout', created_at: at(y, 10) },
  { service: 'Full-time Maid', city: 'Koramangala', created_at: at(y, 13) },
  { service: 'Full-time Maid', city: 'Mumbai', created_at: at(y, 15) },
  { service: 'Part-time Maid', city: 'Bellandur', created_at: at(y, 8) },
  { service: 'Part-time Maid', city: 'Noida', created_at: at(y, 17) },
  { service: 'maid - one-time cleaning (on-demand)', city: 'Bareilly', created_at: at(y, 12) },
  { service: 'On-demand Helper', city: 'Bangalore', created_at: at(y, 18) },
  { service: 'driver (on-demand)', city: 'HSR Layout', created_at: at(y, 19) },
  { service: 'Cook', city: 'Jayanagar', created_at: at(y, 14) },
  { service: 'Elderly Care', city: 'Whitefield', created_at: at(y, 16) },
  // ── day before (for trend) ──
  { service: 'Live-in Maid', city: 'Bangalore', created_at: at(d2, 10) },
  { service: 'Full-time Maid', city: 'Delhi', created_at: at(d2, 11) },
  { service: 'Part-time Maid', city: 'Marathahalli', created_at: at(d2, 12) },
  { service: 'On-demand Helper', city: 'Bareilly', created_at: at(d2, 14) },
  { service: 'Nanny', city: 'Bangalore', created_at: at(d2, 15) },
  { service: 'Full-time Maid', city: 'Lucknow', created_at: at(d2, 16) },
  { service: 'Live-in Maid', city: 'Electronic City', created_at: at(d2, 17) },
  { service: 'Cook', city: 'Mumbai', created_at: at(d2, 18) },
  { service: 'Part-time Maid', city: 'Noida', created_at: at(d2, 19) },
  // ── earlier this week (before the day-before-yesterday, to keep daily trend clean) ──
  ...Array.from({ length: 14 }, (_, i) => {
    const maxH = Math.max(2, Math.floor((p.prevDay.start - wk) / 3600000) - 2)
    return {
      service: ['Live-in Maid', 'Full-time Maid', 'Part-time Maid', 'On-demand Helper', 'Cook'][i % 5],
      city: ['Bangalore', 'Whitefield', 'Bareilly', 'Mumbai', 'HSR Layout', 'Noida', 'Meerut'][i % 7],
      created_at: at(wk, 2 + ((i * 5) % maxH)),
    }
  }),
  // ── earlier this month ──
  ...Array.from({ length: 38 }, (_, i) => ({
    service: ['Live-in Maid', 'Full-time Maid', 'Part-time Maid', 'On-demand Helper', 'Elderly Care', 'Driver'][i % 6],
    city: ['Bangalore', 'Koramangala', 'Bareilly', 'Mumbai', 'Delhi', 'Whitefield', 'Kanpur', 'Nagpur'][i % 8],
    created_at: at(mo, 8 + i * 4),
  })),
  // ── last week / last month (comparison baselines) ──
  ...Array.from({ length: 19 }, (_, i) => ({
    service: ['Live-in Maid', 'Full-time Maid', 'Part-time Maid', 'On-demand Helper'][i % 4],
    city: ['Bangalore', 'Bareilly', 'Mumbai', 'Whitefield'][i % 4],
    created_at: at(p.prevWeekSamePoint.start, 4 + i * 6),
  })),
  ...Array.from({ length: 41 }, (_, i) => ({
    service: ['Live-in Maid', 'Full-time Maid', 'Part-time Maid', 'On-demand Helper', 'Cook'][i % 5],
    city: ['Bangalore', 'Bareilly', 'Mumbai', 'Noida', 'HSR Layout'][i % 5],
    created_at: at(p.prevMonthSamePoint.start, 6 + i * 5),
  })),
]

const email = buildDigestEmail({
  periods: p,
  yesterday: summarize(leads, p.yesterday),
  prevDay: summarize(leads, p.prevDay),
  weekSoFar: summarize(leads, p.weekSoFar),
  prevWeekSamePoint: summarize(leads, p.prevWeekSamePoint),
  monthSoFar: summarize(leads, p.monthSoFar),
  prevMonthSamePoint: summarize(leads, p.prevMonthSamePoint),
  chatbot: {
    sessions: 23,
    leadsCaptured: 7,
    bookings: 3,
    thumbsUp: 4,
    thumbsDown: 1,
    unanswered: [
      'Do you provide maids for office pantries?',
      'What is the cost of a japa maid in Bareilly?',
      'Can I pay weekly instead of monthly?',
    ],
  },
  aiInsight:
    'Leads rose 33% vs the previous day, driven by live-in and full-time demand in Bangalore — Whitefield alone produced 3 enquiries, worth prioritising for callbacks. On-demand volume in Bareilly continues its week-long uptick; consider promoting the one-time cleaning package there.',
  dataNote: null,
})

console.error('SUBJECT: ' + email.subject)
console.log(email.html)
