'use client'

import { useEffect, useMemo, useState } from 'react'
import { buildHireHelperLeadInsertRow } from '@/lib/hireHelperLeadDb'
import { buildOnDemandHelpSpecificRequirements, buildOnDemandHelpTimingSummary } from '@/lib/onDemandHelpLeadText'
import { istVisitRangeUtcIso, rangesOverlapHalfOpenMs } from '@/lib/istDateTime'
import {
  ON_DEMAND_HELP_AREAS,
  ON_DEMAND_HELP_CITY,
  ON_DEMAND_HELP_DURATIONS,
  ON_DEMAND_HELP_TASKS,
  RAZORPAY_PAYMENT_BUTTON_IDS,
  type OnDemandHelpArea,
  type OnDemandHelpDurationHours,
  type OnDemandHelpTaskId,
} from '@/lib/onDemandHelp'
import {
  endMinutesForSlot,
  formatMinutesAsClock,
  formatMinutesDisplay,
  getAvailableSlotStartsIst,
  minSelectableDateIst,
} from '@/lib/onDemandHelpSlots'
import { trackFormComplete, trackFormError, trackFormStart, trackFormSubmit } from '@/lib/analytics'
import { sendWebhook } from '@/lib/webhookService'
import RazorpayPaymentButton from './RazorpayPaymentButton'
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  HomeModernIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

const FORM_NAME = 'on_demand_help_wizard'
const TRACKING_SOURCE = 'on_demand_help_page'

const STEP_LABELS = [
  'Tasks',
  'Area',
  'Duration',
  'Date & start time',
  'Your details',
  'Confirm & pay',
] as const

export default function OnDemandHelpWizard() {
  const [step, setStep] = useState(1)
  const [taskIds, setTaskIds] = useState<OnDemandHelpTaskId[]>([])
  const [area, setArea] = useState<OnDemandHelpArea | ''>('')
  const [durationHours, setDurationHours] = useState<OnDemandHelpDurationHours | null>(null)
  const [serviceDate, setServiceDate] = useState(() => minSelectableDateIst())
  const [slotMinutes, setSlotMinutes] = useState<number | null>(null)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  /** Gated society / apartment / layout name */
  const [apartmentOrSocietyName, setApartmentOrSocietyName] = useState('')
  /** Flat no., tower, floor, wing */
  const [flatUnitDetails, setFlatUnitDetails] = useState('')
  const [landmark, setLandmark] = useState('')
  const [notes, setNotes] = useState('')

  /** Busy visit intervals (epoch ms) for the selected IST day — hide overlapping slot starts. */
  const [occupiedIntervals, setOccupiedIntervals] = useState<{ startMs: number; endMs: number }[]>([])
  const [occupancyWarning, setOccupancyWarning] = useState(false)

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [submitConflictMessage, setSubmitConflictMessage] = useState<string | null>(null)
  const [submitErrorHint, setSubmitErrorHint] = useState<string | null>(null)
  const [paymentUnlocked, setPaymentUnlocked] = useState(false)
  const [hasTrackedStart, setHasTrackedStart] = useState(false)

  useEffect(() => {
    if (!hasTrackedStart) {
      trackFormStart(FORM_NAME, TRACKING_SOURCE)
      setHasTrackedStart(true)
    }
  }, [hasTrackedStart])

  useEffect(() => {
    setSlotMinutes(null)
  }, [serviceDate, durationHours])

  useEffect(() => {
    if (step < 6) setPaymentUnlocked(false)
  }, [step])

  useEffect(() => {
    let cancelled = false
    setOccupancyWarning(false)
    fetch(`/api/on-demand-help/occupancy?date=${encodeURIComponent(serviceDate)}`)
      .then(async (r) => {
        const data = await r.json()
        if (cancelled) return
        if (r.ok && data.ok && Array.isArray(data.intervals)) {
          setOccupiedIntervals(data.intervals)
        } else {
          setOccupiedIntervals([])
          setOccupancyWarning(true)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setOccupiedIntervals([])
          setOccupancyWarning(true)
        }
      })
    return () => {
      cancelled = true
    }
  }, [serviceDate])

  const slots = useMemo(() => {
    if (!durationHours) return []
    const raw = getAvailableSlotStartsIst(serviceDate, durationHours)
    return raw.filter((slotMin) => {
      const { startMs, endMs } = istVisitRangeUtcIso(serviceDate, slotMin, durationHours)
      const overlaps = occupiedIntervals.some((b) =>
        rangesOverlapHalfOpenMs(startMs, endMs, b.startMs, b.endMs)
      )
      return !overlaps
    })
  }, [serviceDate, durationHours, occupiedIntervals])

  useEffect(() => {
    if (slotMinutes !== null && !slots.includes(slotMinutes)) {
      setSlotMinutes(null)
    }
  }, [slots, slotMinutes])

  const toggleTask = (id: OnDemandHelpTaskId) => {
    setTaskIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
    setFormErrors((e) => {
      const n = { ...e }
      delete n.taskIds
      return n
    })
  }

  const validateStep = (s: number): boolean => {
    const errors: Record<string, string> = {}
    if (s === 1) {
      if (taskIds.length === 0) errors.taskIds = 'Pick at least one task'
    }
    if (s === 2) {
      if (!area) errors.area = 'Choose your locality'
    }
    if (s === 3) {
      if (!durationHours) errors.durationHours = 'Choose a visit length'
    }
    if (s === 4) {
      if (!serviceDate) errors.serviceDate = 'Choose a date'
      if (!durationHours) errors.durationHours = 'Choose duration first'
      if (slots.length === 0) errors.slot = 'No slots available for this day — try another date'
      if (slotMinutes === null) errors.slotMinutes = 'Choose a start time'
      else if (!slots.includes(slotMinutes)) errors.slotMinutes = 'Pick a valid start time'
    }
    if (s === 5) {
      if (!name.trim() || name.trim().length < 3) errors.name = 'Enter your full name (min. 3 characters)'
      if (!phone.trim()) errors.phone = 'Mobile number is required'
      else if (!/^[5-9][0-9]{9}$/.test(phone.trim())) errors.phone = 'Enter a valid 10-digit Indian mobile number'
      if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        errors.email = 'Enter a valid email address'
      }
      if (!apartmentOrSocietyName.trim() || apartmentOrSocietyName.trim().length < 2) {
        errors.apartmentOrSocietyName = 'Apartment / society / layout name is required'
      }
      if (!flatUnitDetails.trim() || flatUnitDetails.trim().length < 2) {
        errors.flatUnitDetails = 'Flat no., tower & floor are required'
      }
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  /** Full validation before saving lead (step 6). */
  const validateAll = (): boolean => {
    const errors: Record<string, string> = {}
    if (taskIds.length === 0) errors.taskIds = 'Pick at least one task'
    if (!area) errors.area = 'Choose your locality'
    if (!durationHours) errors.durationHours = 'Choose a visit length'
    if (!serviceDate) errors.serviceDate = 'Choose a date'
    if (durationHours) {
      const sl = getAvailableSlotStartsIst(serviceDate, durationHours)
      if (sl.length === 0) errors.slot = 'No slots available for this day — try another date'
      if (slotMinutes === null) errors.slotMinutes = 'Choose a start time'
      else if (!sl.includes(slotMinutes)) errors.slotMinutes = 'Pick a valid start time'
    }
    if (!name.trim() || name.trim().length < 3) errors.name = 'Enter your full name (min. 3 characters)'
    if (!phone.trim()) errors.phone = 'Mobile number is required'
    else if (!/^[5-9][0-9]{9}$/.test(phone.trim())) errors.phone = 'Enter a valid 10-digit Indian mobile number'
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Enter a valid email address'
    }
    if (!apartmentOrSocietyName.trim() || apartmentOrSocietyName.trim().length < 2) {
      errors.apartmentOrSocietyName = 'Apartment / society / layout name is required'
    }
    if (!flatUnitDetails.trim() || flatUnitDetails.trim().length < 2) {
      errors.flatUnitDetails = 'Flat no., tower & floor are required'
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const firstInvalidStep = (): number => {
    if (taskIds.length === 0) return 1
    if (!area) return 2
    if (!durationHours) return 3
    const sl = durationHours ? getAvailableSlotStartsIst(serviceDate, durationHours) : []
    if (
      !serviceDate ||
      sl.length === 0 ||
      slotMinutes === null ||
      !sl.includes(slotMinutes)
    )
      return 4
    if (
      !name.trim() ||
      name.trim().length < 3 ||
      !phone.trim() ||
      !/^[5-9][0-9]{9}$/.test(phone.trim()) ||
      (!!email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) ||
      apartmentOrSocietyName.trim().length < 2 ||
      flatUnitDetails.trim().length < 2
    )
      return 5
    return 6
  }

  const goNext = () => {
    if (!validateStep(step)) return
    setStep((x) => Math.min(6, x + 1))
  }

  const goBack = () => setStep((x) => Math.max(1, x - 1))

  const generateRequestId = () => Math.random().toString(36).substring(2, 8).toUpperCase()

  const handleSaveLeadAndUnlockPayment = async () => {
    if (!validateAll()) {
      setStep(firstInvalidStep())
      return
    }
    if (durationHours === null || slotMinutes === null || !area) return

    setSubmitStatus('submitting')
    setSubmitConflictMessage(null)
    setSubmitErrorHint(null)
    const newRequestId = generateRequestId()

    const timingSummary = buildOnDemandHelpTimingSummary(serviceDate, slotMinutes, durationHours)
    const specificRequirements = buildOnDemandHelpSpecificRequirements({
      taskIds,
      area: area as OnDemandHelpArea,
      serviceDate,
      slotMinutes,
      durationHours,
      apartmentOrSocietyName: apartmentOrSocietyName.trim(),
      flatUnitDetails: flatUnitDetails.trim(),
      landmark,
      notes,
    })

    const apartmentCombined = `Society/Apartment: ${apartmentOrSocietyName.trim()} | Flat/Unit: ${flatUnitDetails.trim()}`

    const insertRow = buildHireHelperLeadInsertRow({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
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

    try {
      const res = await fetch('/api/on-demand-help/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskIds,
          area,
          durationHours,
          serviceDate,
          slotMinutes,
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          apartmentOrSocietyName: apartmentOrSocietyName.trim(),
          flatUnitDetails: flatUnitDetails.trim(),
          landmark,
          notes,
        }),
      })

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string
        message?: string
        ok?: boolean
      }

      if (res.status === 409) {
        trackFormError(FORM_NAME, 'slot_conflict', payload.message || 'overlap')
        setSubmitConflictMessage(
          payload.message ||
            'That slot was just taken. Only one visit runs at a time — pick another start time.'
        )
        setSubmitStatus('error')
        return
      }

      if (res.status === 503) {
        trackFormError(FORM_NAME, 'misconfigured', 'service role')
        throw new Error(
          payload.message ||
            'Booking temporarily unavailable — server configuration incomplete. Please call +91 9972571005.'
        )
      }

      if (!res.ok) {
        throw new Error(payload.message || payload.error || res.statusText)
      }

      trackFormSubmit(FORM_NAME, {
        name: insertRow.name,
        phone: insertRow.phone,
        email: insertRow.email,
        city: insertRow.city,
        locality: insertRow.locality,
        specificRequirements: insertRow.specific_requirements,
        serviceType: insertRow.service,
      })

      try {
        await fetch('/api/send-lead-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            leadType: 'hire_helper',
            formData: {
              name: insertRow.name,
              phone: insertRow.phone,
              email: insertRow.email,
              city: insertRow.city,
              locality: insertRow.locality,
              apartment: insertRow.apartment,
              serviceType: 'on-demand-help',
              duration: insertRow.duration,
              serviceTimings: timingSummary,
              startDate: insertRow.start_date,
              specificRequirements: insertRow.specific_requirements,
              experience: '',
              budget: '',
              languages: [],
              additionalServices: taskIds,
              familySize: '',
              preferredGender: '',
            },
            requestId: newRequestId,
            sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
          }),
        })
      } catch {
        /* non-blocking */
      }

      sendWebhook(
        'hire_helper',
        {
          name: insertRow.name,
          phone: insertRow.phone,
          email: insertRow.email,
          city: insertRow.city,
          locality: insertRow.locality,
          apartment: insertRow.apartment,
          serviceType: 'on-demand-help',
          duration: insertRow.duration,
          serviceTimings: insertRow.service_timings,
          startDate: insertRow.start_date,
          specificRequirements: insertRow.specific_requirements,
          experience: '',
          budget: '',
          languages: [],
          additionalServices: taskIds,
          familySize: '',
          preferredGender: '',
          trackingSource: TRACKING_SOURCE,
        },
        newRequestId
      )

      trackFormComplete(FORM_NAME, newRequestId)
      setPaymentUnlocked(true)
      setSubmitStatus('idle')
    } catch (e) {
      console.error(e)
      trackFormError(FORM_NAME, 'submit', String(e))
      setSubmitConflictMessage(null)
      setSubmitErrorHint(e instanceof Error ? e.message : 'Something went wrong. Please try again.')
      setSubmitStatus('error')
    }
  }

  const summaryLines =
    durationHours !== null && slotMinutes !== null
      ? {
          tasks: ON_DEMAND_HELP_TASKS.filter((t) => taskIds.includes(t.id)).map((t) => t.label),
          area,
          duration: `${durationHours} hours`,
          date: serviceDate,
          start: formatMinutesDisplay(slotMinutes),
          end: formatMinutesDisplay(endMinutesForSlot(slotMinutes, durationHours)),
        }
      : null

  const accent =
    'border-emerald-200 bg-white shadow-xl focus:ring-emerald-500 focus:border-emerald-500 text-emerald-950'
  const btnPrimary = 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
  const chk = 'text-emerald-600 focus:ring-emerald-500'

  return (
    <div
      id="book-on-demand-help"
      className="isolate scroll-mt-28 rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50 to-white p-6 pb-8 sm:scroll-mt-32 sm:p-10 sm:pb-10 shadow-lg"
    >
      <div className="flex flex-col gap-8 border-b border-emerald-100/80 pb-8">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700 sm:text-sm">
            Book in a few steps
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-[1.65rem] font-bold leading-tight tracking-tight text-gray-900 sm:mt-4 sm:text-3xl">
            Schedule your visit
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:mt-4">
            Same-day slots allowed when they meet the 60-minute advance rule. No instant or walk-in bookings on this
            page.
          </p>
        </header>

        {/* Step indicator — horizontal scroll on narrow screens so pills don’t wrap into the heading */}
        <nav aria-label="Booking steps" className="min-w-0">
          <ol className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
            {STEP_LABELS.map((label, i) => {
              const n = i + 1
              const active = step === n
              const done = step > n
              return (
                <li key={label} className="shrink-0 snap-start">
                  <span
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm ${
                      active
                        ? 'bg-emerald-600 text-white'
                        : done
                          ? 'bg-emerald-100 text-emerald-900'
                          : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <span className="tabular-nums">{n}</span>
                    <span className="hidden sm:inline">{label}</span>
                  </span>
                </li>
              )
            })}
          </ol>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-2xl sm:mt-10">
        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="flex items-start gap-2 text-gray-800">
              <HomeModernIcon className="h-6 w-6 shrink-0 text-emerald-600" aria-hidden />
              <p className="text-sm leading-relaxed">
                Select everything you want done during the visit. We&apos;ll match a helper for the combined list.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ON_DEMAND_HELP_TASKS.map((t) => (
                <label
                  key={t.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${
                    taskIds.includes(t.id) ? 'border-emerald-400 bg-emerald-50/60' : 'border-gray-200 bg-white hover:border-emerald-200'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={taskIds.includes(t.id)}
                    onChange={() => toggleTask(t.id)}
                    className={`h-4 w-4 rounded ${chk}`}
                  />
                  <span className="text-sm font-medium text-gray-900">{t.label}</span>
                </label>
              ))}
            </div>
            {formErrors.taskIds && <p className="text-sm text-red-600">{formErrors.taskIds}</p>}
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <MapPinIcon className="h-6 w-6 shrink-0 text-emerald-600" aria-hidden />
              <p className="text-sm text-gray-700">
                Pilot service is limited to these Bengaluru localities. We&apos;ll expand coverage later.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {ON_DEMAND_HELP_AREAS.map((a) => (
                <label
                  key={a}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 ${
                    area === a ? 'border-emerald-400 bg-emerald-50/60' : 'border-gray-200 bg-white hover:border-emerald-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="area"
                    checked={area === a}
                    onChange={() => {
                      setArea(a)
                      setFormErrors((e) => {
                        const n = { ...e }
                        delete n.area
                        return n
                      })
                    }}
                    className={`h-4 w-4 ${chk}`}
                  />
                  <span className="text-sm font-medium text-gray-900">{a}</span>
                </label>
              ))}
            </div>
            {formErrors.area && <p className="text-sm text-red-600">{formErrors.area}</p>}
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <ClockIcon className="h-6 w-6 shrink-0 text-emerald-600" aria-hidden />
              <div className="text-sm text-gray-700">
                <p>
                  Choose how long you need help. Work is scheduled within{' '}
                  <strong className="font-semibold text-gray-900">9:00 AM–7:30 PM</strong> so the visit finishes on time.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {ON_DEMAND_HELP_DURATIONS.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => {
                    setDurationHours(h)
                    setFormErrors((e) => {
                      const n = { ...e }
                      delete n.durationHours
                      return n
                    })
                  }}
                  className={`rounded-xl border-2 px-4 py-4 text-center font-semibold transition-colors ${
                    durationHours === h
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                      : 'border-gray-200 bg-white text-gray-800 hover:border-emerald-300'
                  }`}
                >
                  <span className="block text-lg">{h}h</span>
                  <span className="mt-1 block text-xs font-normal text-gray-600">Package</span>
                </button>
              ))}
            </div>
            {formErrors.durationHours && <p className="text-sm text-red-600">{formErrors.durationHours}</p>}
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && durationHours !== null && (
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <CalendarDaysIcon className="h-6 w-6 shrink-0 text-emerald-600" aria-hidden />
              <p className="text-sm text-gray-700">
                Slots shown respect the <strong className="font-semibold">60-minute advance booking</strong> rule and your
                selected duration (visit must end by 7:30 PM).
              </p>
            </div>
            {occupancyWarning ? (
              <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
                Could not refresh live availability. If your chosen time fails on confirm, pick another slot — only one
                visit runs at a time on this pilot.
              </p>
            ) : null}
            <div>
              <label htmlFor="svc-date" className="mb-1 block text-sm font-medium text-gray-800">
                Date
              </label>
              <input
                id="svc-date"
                type="date"
                min={minSelectableDateIst()}
                value={serviceDate}
                onChange={(e) => setServiceDate(e.target.value)}
                className={`w-full max-w-xs rounded-lg border px-3 py-2 text-gray-900 ${accent}`}
              />
            </div>
            <div>
              <label htmlFor="svc-slot" className="mb-1 block text-sm font-medium text-gray-800">
                Start time
              </label>
              {slots.length === 0 ? (
                <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
                  No open slots on this date for a {durationHours}-hour visit. Try the next day or go back and pick a
                  shorter duration.
                </p>
              ) : (
                <select
                  id="svc-slot"
                  value={slotMinutes ?? ''}
                  onChange={(e) => setSlotMinutes(parseInt(e.target.value, 10))}
                  className={`w-full max-w-md rounded-lg border px-3 py-2 text-gray-900 ${accent}`}
                >
                  <option value="">Select start time</option>
                  {slots.map((m) => (
                    <option key={m} value={m}>
                      {formatMinutesDisplay(m)} ({formatMinutesAsClock(m)}) — ends{' '}
                      {formatMinutesDisplay(endMinutesForSlot(m, durationHours))}
                    </option>
                  ))}
                </select>
              )}
            </div>
            {(formErrors.slot || formErrors.slotMinutes) && (
              <p className="text-sm text-red-600">{formErrors.slot || formErrors.slotMinutes}</p>
            )}
          </div>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <UserIcon className="h-6 w-6 shrink-0 text-emerald-600" aria-hidden />
              <p className="text-sm text-gray-700">We&apos;ll use these details to confirm your booking and reach you on the day.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-800">Full name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full rounded-lg border px-3 py-2 ${accent}`}
                  autoComplete="name"
                />
                {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800">Mobile (10 digits)</label>
                <input
                  inputMode="numeric"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className={`w-full rounded-lg border px-3 py-2 ${accent}`}
                  autoComplete="tel"
                />
                {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800">Email (optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full rounded-lg border px-3 py-2 ${accent}`}
                  autoComplete="email"
                />
                {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-800">
                  Apartment / society / layout name
                </label>
                <input
                  value={apartmentOrSocietyName}
                  onChange={(e) => setApartmentOrSocietyName(e.target.value)}
                  placeholder="e.g. gated community or building name"
                  className={`w-full rounded-lg border px-3 py-2 ${accent}`}
                  autoComplete="organization"
                />
                {formErrors.apartmentOrSocietyName && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.apartmentOrSocietyName}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-800">
                  Flat no., tower, floor & wing
                </label>
                <input
                  value={flatUnitDetails}
                  onChange={(e) => setFlatUnitDetails(e.target.value)}
                  placeholder="e.g. Tower B, 4th floor, Flat 402"
                  className={`w-full rounded-lg border px-3 py-2 ${accent}`}
                />
                {formErrors.flatUnitDetails && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.flatUnitDetails}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-800">Landmark (optional)</label>
                <input
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  className={`w-full rounded-lg border px-3 py-2 ${accent}`}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-800">Notes for the helper (optional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className={`w-full rounded-lg border px-3 py-2 ${accent}`}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 6 */}
        {step === 6 && summaryLines && durationHours !== null && slotMinutes !== null && (
          <div className="space-y-6">
            {!paymentUnlocked ? (
              <>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 text-sm text-gray-800">
                  <h3 className="font-semibold text-emerald-900">Booking summary</h3>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <span className="text-gray-600">Tasks:</span>{' '}
                      <span className="font-medium">{summaryLines.tasks.join('; ')}</span>
                    </li>
                    <li>
                      <span className="text-gray-600">Locality (area):</span>{' '}
                      <span className="font-medium">{summaryLines.area}</span>
                    </li>
                    <li>
                      <span className="text-gray-600">Apartment / society:</span>{' '}
                      <span className="font-medium">{apartmentOrSocietyName.trim()}</span>
                    </li>
                    <li>
                      <span className="text-gray-600">Flat / unit:</span>{' '}
                      <span className="font-medium">{flatUnitDetails.trim()}</span>
                    </li>
                    <li>
                      <span className="text-gray-600">Duration:</span>{' '}
                      <span className="font-medium">{summaryLines.duration}</span>
                    </li>
                    <li>
                      <span className="text-gray-600">Visit:</span>{' '}
                      <span className="font-medium">
                        {summaryLines.date} · {summaryLines.start} → {summaryLines.end}
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-600">Contact:</span>{' '}
                      <span className="font-medium">
                        {name.trim()} · {phone.trim()}
                        {email.trim() ? ` · ${email.trim()}` : ''}
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-600">Landmark:</span>{' '}
                      <span className="font-medium">{landmark.trim() || '—'}</span>
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-gray-600">
                  Tap below to save this request with our team. You&apos;ll then see a secure Razorpay button for the{' '}
                  {durationHours}-hour package only.
                </p>
                {submitStatus === 'error' && submitConflictMessage && (
                  <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
                    {submitConflictMessage} You can go back to <strong className="font-semibold">Date &amp; start time</strong>{' '}
                    and choose another slot.
                  </p>
                )}
                {submitStatus === 'error' && !submitConflictMessage && submitErrorHint && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">{submitErrorHint}</p>
                )}
                {submitStatus === 'error' && !submitConflictMessage && !submitErrorHint && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    Something went wrong while saving. Please try again or call{' '}
                    <a href="tel:+919972571005" className="font-semibold underline">
                      +91 9972571005
                    </a>
                    .
                  </p>
                )}
                <button
                  type="button"
                  disabled={submitStatus === 'submitting'}
                  onClick={handleSaveLeadAndUnlockPayment}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold transition-colors disabled:opacity-60 ${btnPrimary}`}
                >
                  {submitStatus === 'submitting' ? (
                    'Saving…'
                  ) : (
                    <>
                      <CheckCircleIcon className="h-5 w-5" aria-hidden />
                      Confirm details & continue to payment
                    </>
                  )}
                </button>
              </>
            ) : (
              <div className="space-y-5 text-center">
                <CheckCircleIcon className="mx-auto h-12 w-12 text-emerald-600" aria-hidden />
                <h3 className="text-xl font-semibold text-gray-900">Request saved</h3>
                <p className="text-sm text-gray-600">
                  Complete payment for your <strong className="font-semibold text-gray-900">{durationHours}-hour</strong>{' '}
                  slot using the button below. Our team will align helper assignment with your chosen time.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setPaymentUnlocked(false)
                    setStep(5)
                  }}
                  className="mx-auto block text-sm font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950"
                >
                  ← Edit booking details before paying
                </button>

                <div className="mx-auto max-w-lg rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-700 shadow-sm">
                  <p className="font-semibold text-slate-900">How to exit the Razorpay payment popup</p>
                  <p className="mt-2 text-slate-600">
                    Razorpay opens its own checkout window — we can’t add a close button inside it. To go back:
                  </p>
                  <ul className="mt-2 list-inside list-disc space-y-1.5 text-slate-600">
                    <li>
                      Tap the <strong className="text-slate-800">← Back</strong> arrow at the top of Razorpay until the
                      popup closes.
                    </li>
                    <li>
                      On a computer, press{' '}
                      <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-xs text-slate-800">
                        Esc
                      </kbd>{' '}
                      or click the dimmed grey area outside the popup.
                    </li>
                    <li>On your phone, use the system Back button or back gesture.</li>
                  </ul>
                </div>

                <div className="flex justify-center pt-1">
                  <RazorpayPaymentButton paymentButtonId={RAZORPAY_PAYMENT_BUTTON_IDS[durationHours]} />
                </div>
                <p className="text-xs text-gray-500">
                  Payment is processed by Razorpay. If the button does not appear, refresh the page or contact support.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Nav */}
      {step < 6 || !paymentUnlocked ? (
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-between gap-4 border-t border-emerald-100 pt-8">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 1 || (step === 6 && paymentUnlocked)}
            className={`inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-40`}
          >
            <ChevronLeftIcon className="h-5 w-5" aria-hidden />
            Back
          </button>
          {step < 6 && (
            <button
              type="button"
              onClick={goNext}
              className={`inline-flex items-center gap-1 rounded-xl px-6 py-3 text-sm font-semibold ${btnPrimary}`}
            >
              Continue
              <ChevronRightIcon className="h-5 w-5" aria-hidden />
            </button>
          )}
        </div>
      ) : null}
    </div>
  )
}
