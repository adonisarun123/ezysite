import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseAdmin } from '@/lib/supabaseAdmin'
import { buildHireHelperLeadInsertRow } from '@/lib/hireHelperLeadDb'
import { istVisitRangeUtcIso } from '@/lib/istDateTime'
import {
  ON_DEMAND_HELP_AREAS,
  ON_DEMAND_HELP_CITY,
  ON_DEMAND_HELP_DURATIONS,
  ON_DEMAND_HELP_TASKS,
  type OnDemandHelpArea,
  type OnDemandHelpDurationHours,
  type OnDemandHelpTaskId,
} from '@/lib/onDemandHelp'
import { buildOnDemandHelpSpecificRequirements, buildOnDemandHelpTimingSummary } from '@/lib/onDemandHelpLeadText'
import { getAvailableSlotStarts } from '@/lib/onDemandHelpSlots'

const ALLOWED_AREAS = new Set<string>(ON_DEMAND_HELP_AREAS)
const ALLOWED_DURATIONS = new Set<number>(ON_DEMAND_HELP_DURATIONS)
const KNOWN_TASK_IDS = new Set<string>(ON_DEMAND_HELP_TASKS.map((t) => t.id))

function isDurationHours(n: number): n is OnDemandHelpDurationHours {
  return ALLOWED_DURATIONS.has(n)
}

function isTaskIdArray(ids: unknown[]): ids is OnDemandHelpTaskId[] {
  return ids.length > 0 && ids.every((id) => typeof id === 'string' && KNOWN_TASK_IDS.has(id))
}

/**
 * Atomically reserves a visit window (global single-booking constraint) and inserts hire_helper_leads.
 */
export async function POST(req: NextRequest) {
  const admin = createSupabaseAdmin()
  if (!admin) {
    return NextResponse.json(
      {
        error: 'server_misconfigured',
        message: 'Booking service is not configured (SUPABASE_SERVICE_ROLE_KEY).',
      },
      { status: 503 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const taskIdsRaw = body.taskIds
  const area = typeof body.area === 'string' ? body.area.trim() : ''
  const durationHours = typeof body.durationHours === 'number' ? body.durationHours : NaN
  const serviceDate = typeof body.serviceDate === 'string' ? body.serviceDate.trim() : ''
  const slotMinutes = typeof body.slotMinutes === 'number' ? body.slotMinutes : NaN
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const apartmentOrSocietyName =
    typeof body.apartmentOrSocietyName === 'string' ? body.apartmentOrSocietyName.trim() : ''
  const flatUnitDetails = typeof body.flatUnitDetails === 'string' ? body.flatUnitDetails.trim() : ''
  const landmark = typeof body.landmark === 'string' ? body.landmark.trim() : ''
  const notes = typeof body.notes === 'string' ? body.notes.trim() : ''

  if (!Array.isArray(taskIdsRaw) || !isTaskIdArray(taskIdsRaw)) {
    return NextResponse.json({ error: 'invalid_tasks' }, { status: 400 })
  }
  const taskIds = taskIdsRaw

  if (!ALLOWED_AREAS.has(area)) {
    return NextResponse.json({ error: 'invalid_area' }, { status: 400 })
  }
  if (!isDurationHours(durationHours)) {
    return NextResponse.json({ error: 'invalid_duration' }, { status: 400 })
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(serviceDate)) {
    return NextResponse.json({ error: 'invalid_date' }, { status: 400 })
  }
  const allowedStarts = getAvailableSlotStarts(serviceDate, durationHours)
  if (!allowedStarts.includes(slotMinutes)) {
    return NextResponse.json({ error: 'invalid_slot' }, { status: 400 })
  }
  if (name.length < 3) {
    return NextResponse.json({ error: 'invalid_name' }, { status: 400 })
  }
  if (!/^[5-9][0-9]{9}$/.test(phone)) {
    return NextResponse.json({ error: 'invalid_phone' }, { status: 400 })
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 })
  }
  if (apartmentOrSocietyName.length < 2) {
    return NextResponse.json({ error: 'invalid_apartment_name' }, { status: 400 })
  }
  if (flatUnitDetails.length < 2) {
    return NextResponse.json({ error: 'invalid_unit_details' }, { status: 400 })
  }

  const timingSummary = buildOnDemandHelpTimingSummary(serviceDate, slotMinutes, durationHours)
  const specificRequirements = buildOnDemandHelpSpecificRequirements({
    taskIds,
    area: area as OnDemandHelpArea,
    serviceDate,
    slotMinutes,
    durationHours,
    apartmentOrSocietyName,
    flatUnitDetails,
    landmark,
    notes,
  })

  const apartmentCombined = `Society/Apartment: ${apartmentOrSocietyName} | Flat/Unit: ${flatUnitDetails}`

  const insertRow = buildHireHelperLeadInsertRow({
    name,
    phone,
    email,
    city: ON_DEMAND_HELP_CITY,
    locality: `${area} (on-demand pilot)`,
    apartment: apartmentCombined,
    service: 'on-demand-help',
    duration: `${durationHours} hours`,
    serviceTimings: timingSummary,
    startDate: serviceDate,
    specificRequirements,
    experience: '',
    budget: '',
    languages: '',
    additionalServices: taskIds.join(','),
    familySize: '',
    preferredGender: '',
  })

  const { startIso, endIso } = istVisitRangeUtcIso(serviceDate, slotMinutes, durationHours)

  const bookingInsert = {
    visit_start_at: startIso,
    visit_end_at: endIso,
    duration_hours: durationHours,
    phone,
    customer_name: name,
    area,
    apartment_or_society: apartmentOrSocietyName,
    flat_unit_details: flatUnitDetails,
  }

  const { data: bookingRow, error: bookingErr } = await admin
    .from('on_demand_help_bookings')
    .insert([bookingInsert])
    .select('id')
    .single()

  if (bookingErr) {
    const code = (bookingErr as { code?: string }).code
    const msg = bookingErr.message || ''
    if (code === '23P01' || msg.toLowerCase().includes('exclusion') || msg.toLowerCase().includes('overlap')) {
      return NextResponse.json(
        {
          error: 'slot_unavailable',
          message:
            'That date and time overlaps an existing booking. Only one visit can run at a time — choose another slot.',
        },
        { status: 409 }
      )
    }
    console.error('[on-demand-help/book] booking insert', bookingErr)
    return NextResponse.json({ error: 'booking_failed', message: bookingErr.message }, { status: 500 })
  }

  const bookingId = bookingRow?.id as string

  const { error: leadErr } = await admin.from('hire_helper_leads').insert([insertRow])

  if (leadErr) {
    await admin.from('on_demand_help_bookings').delete().eq('id', bookingId)
    console.error('[on-demand-help/book] lead insert', leadErr)
    return NextResponse.json({ error: 'lead_failed', message: leadErr.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, bookingId })
}
