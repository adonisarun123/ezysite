/**
 * Integration check against Supabase: exclusion constraint blocks overlapping bookings.
 * Requires env: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Run: npx tsx scripts/verify-on-demand-bookings-db.ts
 */
import assert from 'node:assert/strict'
import { createSupabaseAdmin } from '../lib/supabaseAdmin'
import { istVisitRangeUtcIso } from '../lib/istDateTime'

const TEST_DATE = '2035-11-01'
const SLOT_A = 9 * 60 // 9:00
const SLOT_B = 10 * 60 // 10:00 — overlaps 9:00–11:00 with 2h booking A
const SLOT_C = 11 * 60 // 11:00 — adjacent after [9:00,11:00) for 2h

async function main() {
  const admin = createSupabaseAdmin()
  if (!admin) {
    console.log(
      'SKIP: DB integration test — set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to run.'
    )
    process.exit(0)
  }

  const phone = '9876543210'
  const name = 'DB Test Bot'
  const area = 'HSR Layout'
  const soc = 'Test Society'
  const unit = 'Unit X'

  const rangeA = istVisitRangeUtcIso(TEST_DATE, SLOT_A, 2)
  const rangeOverlap = istVisitRangeUtcIso(TEST_DATE, SLOT_B, 2)
  const rangeAdjacent = istVisitRangeUtcIso(TEST_DATE, SLOT_C, 2)

  const row = (range: { startIso: string; endIso: string }) => ({
    visit_start_at: range.startIso,
    visit_end_at: range.endIso,
    duration_hours: 2 as const,
    phone,
    customer_name: name,
    area,
    apartment_or_society: soc,
    flat_unit_details: unit,
  })

  const ids: string[] = []

  try {
    const { data: ins1, error: e1 } = await admin
      .from('on_demand_help_bookings')
      .insert([row(rangeA)])
      .select('id')
      .single()
    assert.ok(!e1, e1?.message)
    assert.ok(ins1?.id)
    ids.push(ins1.id)

    const { error: eOverlap } = await admin.from('on_demand_help_bookings').insert([row(rangeOverlap)])
    assert.ok(eOverlap, 'expected overlapping insert to fail')
    const code = (eOverlap as { code?: string }).code
    const msg = (eOverlap.message || '').toLowerCase()
    assert.ok(
      code === '23P01' || msg.includes('exclusion') || msg.includes('overlap'),
      `unexpected error: ${JSON.stringify(eOverlap)}`
    )
    console.log('OK: overlapping booking rejected (exclusion constraint).')

    const { data: ins2, error: e2 } = await admin
      .from('on_demand_help_bookings')
      .insert([row(rangeAdjacent)])
      .select('id')
      .single()
    assert.ok(!e2, e2?.message)
    assert.ok(ins2?.id)
    ids.push(ins2.id)
    console.log('OK: adjacent non-overlapping booking accepted.')

    console.log('verify-on-demand-bookings-db: all DB checks passed.')
  } finally {
    for (const id of ids) {
      await admin.from('on_demand_help_bookings').delete().eq('id', id)
    }
    console.log('Cleanup: removed test booking rows.')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
