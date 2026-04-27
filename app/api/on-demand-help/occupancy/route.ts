import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseAdmin } from '@/lib/supabaseAdmin'
import { istDayBoundsIso } from '@/lib/istDateTime'

/**
 * GET ?date=YYYY-MM-DD — busy visit intervals (epoch ms) overlapping that IST calendar day.
 * Used by the wizard to hide slot starts that would overlap an existing booking.
 */
export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get('date')
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ ok: false, error: 'invalid_date', intervals: [] }, { status: 400 })
  }

  const admin = createSupabaseAdmin()
  if (!admin) {
    return NextResponse.json(
      {
        ok: false,
        error: 'availability_unconfigured',
        intervals: [],
        hint: 'Set SUPABASE_SERVICE_ROLE_KEY and apply on_demand_help_bookings migration.',
      },
      { status: 503 }
    )
  }

  const { dayStartIso, dayEndIso } = istDayBoundsIso(date)

  const { data, error } = await admin
    .from('on_demand_help_bookings')
    .select('visit_start_at, visit_end_at')
    .lt('visit_start_at', dayEndIso)
    .gt('visit_end_at', dayStartIso)

  if (error) {
    console.error('[on-demand-help/occupancy]', error)
    return NextResponse.json({ ok: false, error: error.message, intervals: [] }, { status: 500 })
  }

  const intervals =
    data?.map((row) => ({
      startMs: new Date(row.visit_start_at).getTime(),
      endMs: new Date(row.visit_end_at).getTime(),
    })) ?? []

  return NextResponse.json({ ok: true, intervals })
}
