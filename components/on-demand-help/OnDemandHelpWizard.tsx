'use client'

import { useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { buildHireHelperLeadInsertRow } from '@/lib/hireHelperLeadDb'
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
  getAvailableSlotStarts,
  minSelectableDateLocal,
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
  const [serviceDate, setServiceDate] = useState(() => minSelectableDateLocal())
  const [slotMinutes, setSlotMinutes] = useState<number | null>(null)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [apartment, setApartment] = useState('')
  const [landmark, setLandmark] = useState('')
  const [notes, setNotes] = useState('')

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
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

  const slots = useMemo(() => {
    if (!durationHours) return []
    return getAvailableSlotStarts(serviceDate, durationHours)
  }, [serviceDate, durationHours])

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
      if (!apartment.trim()) errors.apartment = 'Flat / house no. & building name are required'
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
      const sl = getAvailableSlotStarts(serviceDate, durationHours)
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
    if (!apartment.trim()) errors.apartment = 'Flat / house no. & building name are required'
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const firstInvalidStep = (): number => {
    if (taskIds.length === 0) return 1
    if (!area) return 2
    if (!durationHours) return 3
    const sl = durationHours ? getAvailableSlotStarts(serviceDate, durationHours) : []
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
      !apartment.trim()
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

  const buildSpecificRequirements = () => {
    const labels = ON_DEMAND_HELP_TASKS.filter((t) => taskIds.includes(t.id)).map((t) => t.label)
    const endMin =
      durationHours !== null && slotMinutes !== null
        ? endMinutesForSlot(slotMinutes, durationHours)
        : null
    const lines = [
      `[On-demand help — ${ON_DEMAND_HELP_CITY} pilot /on-demand-help]`,
      '',
      `Locality: ${area}`,
      `Tasks: ${labels.join('; ')}`,
      durationHours !== null && slotMinutes !== null
        ? `Visit: ${serviceDate} starting ${formatMinutesAsClock(slotMinutes)} (${durationHours}h; ends ${formatMinutesAsClock(endMin ?? 0)})`
        : '',
      landmark.trim() ? `Landmark: ${landmark.trim()}` : '',
      notes.trim() ? `Notes:\n${notes.trim()}` : '',
      '',
      'Pilot coverage: HSR Layout, Sarjapur Road, BTM Layout, Haralur, Bellandur only.',
      'Scheduling: bookings close at least 60 minutes before the chosen start time; visits run 9:00 AM–7:30 PM.',
    ]
    return lines.filter(Boolean).join('\n')
  }

  const handleSaveLeadAndUnlockPayment = async () => {
    if (!validateAll()) {
      setStep(firstInvalidStep())
      return
    }
    if (durationHours === null || slotMinutes === null || !area) return

    setSubmitStatus('submitting')
    const newRequestId = generateRequestId()
    const timingSummary = `Date: ${serviceDate}; Start: ${formatMinutesAsClock(slotMinutes)}; Duration: ${durationHours}h; Window 9:00 AM–7:30 PM`

    const insertRow = buildHireHelperLeadInsertRow({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      city: ON_DEMAND_HELP_CITY,
      locality: `${area} (on-demand pilot)`,
      apartment: apartment.trim(),
      service: 'on-demand-help',
      duration: `${durationHours} hours`,
      serviceTimings: timingSummary,
      startDate: serviceDate,
      specificRequirements: buildSpecificRequirements(),
      experience: '',
      budget: '',
      languages: '',
      additionalServices: taskIds.join(','),
      familySize: '',
      preferredGender: '',
    })

    try {
      trackFormSubmit(FORM_NAME, {
        name: insertRow.name,
        phone: insertRow.phone,
        email: insertRow.email,
        city: insertRow.city,
        locality: insertRow.locality,
        specificRequirements: insertRow.specific_requirements,
        serviceType: insertRow.service,
      })

      const { error } = await supabase.from('hire_helper_leads').insert([insertRow])
      if (error) throw error

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
      className="scroll-mt-24 rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50/80 to-white p-6 sm:p-10 shadow-lg"
    >
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Book in a few steps</p>
        <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900 sm:text-3xl">
          Schedule your visit
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
          Same-day slots allowed when they meet the 60-minute advance rule. No instant or walk-in bookings on this
          page.
        </p>
      </div>

      {/* Step indicator */}
      <ol className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-3">
        {STEP_LABELS.map((label, i) => {
          const n = i + 1
          const active = step === n
          const done = step > n
          return (
            <li key={label}>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm ${
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

      <div className="mx-auto max-w-2xl">
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
            <div>
              <label htmlFor="svc-date" className="mb-1 block text-sm font-medium text-gray-800">
                Date
              </label>
              <input
                id="svc-date"
                type="date"
                min={minSelectableDateLocal()}
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
                <label className="mb-1 block text-sm font-medium text-gray-800">Flat / house & building name</label>
                <input
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                  className={`w-full rounded-lg border px-3 py-2 ${accent}`}
                />
                {formErrors.apartment && <p className="mt-1 text-sm text-red-600">{formErrors.apartment}</p>}
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
                      <span className="text-gray-600">Locality:</span>{' '}
                      <span className="font-medium">{summaryLines.area}</span>
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
                      <span className="text-gray-600">Address:</span>{' '}
                      <span className="font-medium">
                        {apartment.trim()}
                        {landmark.trim() ? `; ${landmark.trim()}` : ''}
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-gray-600">
                  Tap below to save this request with our team. You&apos;ll then see a secure Razorpay button for the{' '}
                  {durationHours}-hour package only.
                </p>
                {submitStatus === 'error' && (
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
              <div className="space-y-4 text-center">
                <CheckCircleIcon className="mx-auto h-12 w-12 text-emerald-600" aria-hidden />
                <h3 className="text-xl font-semibold text-gray-900">Request saved</h3>
                <p className="text-sm text-gray-600">
                  Complete payment for your <strong className="font-semibold text-gray-900">{durationHours}-hour</strong>{' '}
                  slot using the button below. Our team will align helper assignment with your chosen time.
                </p>
                <div className="flex justify-center pt-2">
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
