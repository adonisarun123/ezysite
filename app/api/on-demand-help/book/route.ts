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
import { getAvailableSlotStartsIst } from '@/lib/onDemandHelpSlots'

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
    return NextResponse.json(
      { error: 'invalid_tasks', message: 'Select at least one valid task and try again.' },
      { status: 400 }
    )
  }
  const taskIds = taskIdsRaw

  if (!ALLOWED_AREAS.has(area)) {
    return NextResponse.json(
      { error: 'invalid_area', message: 'Choose one of the listed pilot localities.' },
      { status: 400 }
    )
  }
  if (!isDurationHours(durationHours)) {
    return NextResponse.json(
      { error: 'invalid_duration', message: 'Choose a 2h, 4h, 6h or 8h package.' },
      { status: 400 }
    )
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(serviceDate)) {
    return NextResponse.json({ error: 'invalid_date', message: 'Use a valid visit date.' }, { status: 400 })
  }
  /** IST — must match browser pilot UX; server UTC was rejecting valid slots (e.g. 9:30 IST). */
  const allowedStarts = getAvailableSlotStartsIst(serviceDate, durationHours)
  if (!allowedStarts.includes(slotMinutes)) {
    return NextResponse.json(
      {
        error: 'invalid_slot',
        message:
          'That start time is not available for this date and duration (service window 9:00 AM–7:30 PM IST, 60-minute advance rule). Refresh and pick another slot.',
      },
      { status: 400 }
    )
  }
  if (name.length < 3) {
    return NextResponse.json(
      { error: 'invalid_name', message: 'Enter your full name (at least 3 characters).' },
      { status: 400 }
    )
  }
  if (!/^[5-9][0-9]{9}$/.test(phone)) {
    return NextResponse.json(
      { error: 'invalid_phone', message: 'Enter a valid 10-digit Indian mobile number.' },
      { status: 400 }
    )
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'invalid_email', message: 'Enter a valid email address.' }, { status: 400 })
  }
  if (apartmentOrSocietyName.length < 2) {
    return NextResponse.json(
      { error: 'invalid_apartment_name', message: 'Enter your apartment / society / layout name.' },
      { status: 400 }
    )
  }
  if (flatUnitDetails.length < 2) {
    return NextResponse.json(
      { error: 'invalid_unit_details', message: 'Enter flat number, tower and floor details.' },
      { status: 400 }
    )
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
