'use client'

import { useState, useEffect, useMemo } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { supabase } from '@/lib/supabaseClient'
import { trackFormStart, trackFormSubmit, trackFormComplete, trackFormError } from '@/lib/analytics'
import { sendWebhook } from '@/lib/webhookService'

const CITIES = [
  'Bangalore', 'Mumbai', 'Delhi', 'Noida', 'Nagpur',
  'Lucknow', 'Kanpur', 'Meerut', 'Bareilly', 'Hyderabad'
]

const WORK_TYPE_OPTIONS = [
  { id: 'cleaning', label: 'Cleaning & housekeeping' },
  { id: 'cooking', label: 'Cooking / kitchen help' },
  { id: 'babysitting', label: 'Babysitting / childcare' },
  { id: 'elderly', label: 'Elderly care' },
  { id: 'pet', label: 'Pet care / dog walking' },
  { id: 'nursing', label: 'Patient or nursing support' },
  { id: 'technical', label: 'Plumbing, electrical, or handyman' },
  { id: 'event', label: 'Event / party help' },
  { id: 'errands', label: 'Shopping, errands, or pickup-drop' },
  { id: 'packing', label: 'Packing / moving help' },
  { id: 'other', label: 'Other (describe below)' }
] as const

const SLOT_HOURS = [4, 5, 6, 7, 8, 9, 10, 12] as const

const URGENCY_OPTIONS = [
  { value: 'same-day', label: 'Same day (subject to availability)' },
  { value: '24h', label: 'Within 24 hours' },
  { value: '3-days', label: 'Within 2–3 days' },
  { value: 'flexible', label: 'Flexible' }
]

export type OnDemandLeadFormVariant = 'primary' | 'trust'

export interface OnDemandLeadFormProps {
  /** When set, city is fixed and the city field is not shown */
  fixedCity?: string
  variant?: OnDemandLeadFormVariant
  /** Passed to analytics as the form placement identifier */
  trackingSource: string
  className?: string
  /** In-page anchor for “Book” CTAs (e.g. on-demand-booking) */
  anchorId?: string
}

export default function OnDemandLeadForm({
  fixedCity,
  variant = 'primary',
  trackingSource,
  className = '',
  anchorId
}: OnDemandLeadFormProps) {
  const styles = useMemo(
    () =>
      variant === 'trust'
        ? {
            panel: 'border-trust-200 bg-white shadow-xl',
            bar: 'from-trust-400 to-emerald-400',
            focus: 'focus:ring-trust-500 focus:border-trust-500',
            notice: 'border-trust-300 bg-trust-50 text-trust-900',
            accentBox: 'border-trust-200 bg-trust-50/60',
            btn: 'bg-trust-600 hover:bg-trust-700 text-white',
            chk: 'text-trust-600 focus:ring-trust-500'
          }
        : {
            panel: 'border-gray-100 bg-white shadow-xl',
            bar: 'from-secondary-400 to-primary-500',
            focus: 'focus:ring-primary-500 focus:border-primary-500',
            notice: 'border-amber-300 bg-amber-50 text-amber-950',
            accentBox: 'border-primary-200 bg-primary-50/50',
            btn: 'btn-primary',
            chk: 'text-primary-600 focus:ring-primary-500'
          },
    [variant]
  )

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState(fixedCity || '')
  const [locality, setLocality] = useState('')
  const [apartment, setApartment] = useState('')
  const [landmark, setLandmark] = useState('')
  const [workTypes, setWorkTypes] = useState<string[]>([])
  const [workTypeOther, setWorkTypeOther] = useState('')
  const [serviceDate, setServiceDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [slotHours, setSlotHours] = useState<string>('4')
  const [urgency, setUrgency] = useState('')
  const [preferredGender, setPreferredGender] = useState('')
  const [familySize, setFamilySize] = useState('')
  const [otherDetails, setOtherDetails] = useState('')
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [requestId, setRequestId] = useState<string | null>(null)
  const [hasTrackedStart, setHasTrackedStart] = useState(false)

  useEffect(() => {
    if (!hasTrackedStart) {
      trackFormStart('on_demand_lead_form', trackingSource)
      setHasTrackedStart(true)
    }
  }, [hasTrackedStart, trackingSource])

  useEffect(() => {
    if (fixedCity) setCity(fixedCity)
  }, [fixedCity])

  const toggleWorkType = (id: string) => {
    setWorkTypes((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
    setFormErrors((e) => {
      const next = { ...e }
      delete next.workTypes
      return next
    })
  }

  const minDateStr = () => {
    const t = new Date()
    t.setHours(0, 0, 0, 0)
    return t.toISOString().split('T')[0]
  }

  const validate = () => {
    const errors: Record<string, string> = {}
    if (!name.trim()) errors.name = 'Name is required'
    else if (name.trim().length < 3) errors.name = 'Name must be at least 3 characters'

    if (!phone.trim()) errors.phone = 'Phone is required'
    else if (!/^[5-9][0-9]{9}$/.test(phone.trim())) {
      errors.phone = 'Enter a valid 10-digit mobile number'
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Enter a valid email address'
    }

    if (!fixedCity && !city) errors.city = 'Please select your city'
    if (!locality.trim()) errors.locality = 'Locality / area is required'

    if (workTypes.length === 0) errors.workTypes = 'Select at least one type of work'
    if (workTypes.includes('other') && workTypeOther.trim().length < 3) {
      errors.workTypeOther = 'Please describe the “Other” work (at least 3 characters)'
    }

    if (!serviceDate) errors.serviceDate = 'Choose the service date'
    else {
      const d = new Date(serviceDate + 'T12:00:00')
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (d < today) errors.serviceDate = 'Date cannot be in the past'
    }

    if (!startTime) errors.startTime = 'Preferred start time is required'

    const hours = parseInt(slotHours, 10)
    if (!hours || hours < 4) errors.slotHours = 'Minimum booking is 4 hours'

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const buildSpecificRequirements = () => {
    const labels = WORK_TYPE_OPTIONS.filter((o) => workTypes.includes(o.id)).map((o) => o.label)
    const lines = [
      `[On-demand request — ${trackingSource}]`,
      '',
      `Types of work: ${labels.join(', ')}`,
      workTypes.includes('other') && workTypeOther.trim() ? `Other details: ${workTypeOther.trim()}` : '',
      urgency ? `How soon: ${URGENCY_OPTIONS.find((u) => u.value === urgency)?.label || urgency}` : '',
      landmark.trim() ? `Landmark: ${landmark.trim()}` : '',
      familySize ? `Household size: ${familySize}` : '',
      otherDetails.trim() ? `Additional notes:\n${otherDetails.trim()}` : ''
    ].filter(Boolean)
    return lines.join('\n')
  }

  const generateRequestId = () => Math.random().toString(36).substring(2, 8).toUpperCase()

  const resetForm = () => {
    setName('')
    setPhone('')
    setEmail('')
    if (!fixedCity) setCity('')
    else setCity(fixedCity)
    setLocality('')
    setApartment('')
    setLandmark('')
    setWorkTypes([])
    setWorkTypeOther('')
    setServiceDate('')
    setStartTime('')
    setSlotHours('4')
    setUrgency('')
    setPreferredGender('')
    setFamilySize('')
    setOtherDetails('')
    setFormErrors({})
    setSubmitStatus('idle')
    setRequestId(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitStatus('submitting')
    try {
      const newRequestId = generateRequestId()
      const cityVal = (fixedCity || city).trim()
      const hours = parseInt(slotHours, 10)
      const timingSummary = `Date: ${serviceDate}; Start: ${startTime}; Slot: ${hours} hours (min. 4h policy)`

      const submissionData = {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        city: cityVal,
        locality: locality.trim(),
        apartment: apartment.trim(),
        service: 'on-demand',
        duration: `${hours} hours`,
        service_timings: timingSummary,
        startDate: serviceDate,
        specificRequirements: buildSpecificRequirements(),
        experience: '',
        budget: '',
        languages: '',
        additionalServices: workTypes.join(','),
        familySize: familySize || '',
        preferredGender: preferredGender || ''
      }

      trackFormSubmit('on_demand_lead_form', { ...submissionData, trackingSource })

      const { error } = await supabase.from('hire_helper_leads').insert([submissionData])
      if (error) throw error

      try {
        await fetch('/api/send-lead-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            leadType: 'hire_helper',
            formData: {
              name: submissionData.name,
              phone: submissionData.phone,
              email: submissionData.email,
              city: submissionData.city,
              locality: submissionData.locality,
              apartment: submissionData.apartment,
              serviceType: 'on-demand',
              duration: submissionData.duration,
              serviceTimings: timingSummary,
              startDate: submissionData.startDate,
              specificRequirements: submissionData.specificRequirements,
              experience: '',
              budget: '',
              languages: [],
              additionalServices: workTypes,
              familySize: submissionData.familySize,
              preferredGender: submissionData.preferredGender
            },
            requestId: newRequestId,
            sourceUrl: typeof window !== 'undefined' ? window.location.href : ''
          })
        })
      } catch {
        /* email failure should not block success UX */
      }

      sendWebhook(
        'hire_helper',
        {
          ...submissionData,
          languages: [],
          additionalServices: workTypes,
          serviceType: 'on-demand',
          trackingSource
        },
        newRequestId
      ).catch(() => {})

      trackFormComplete('on_demand_lead_form', newRequestId)
      setRequestId(newRequestId)
      setSubmitStatus('success')
    } catch (err) {
      trackFormError(
        'on_demand_lead_form',
        'submission_error',
        err instanceof Error ? err.message : 'Unknown error'
      )
      setSubmitStatus('error')
    }
  }

  if (submitStatus === 'success') {
    return (
      <div id={anchorId} className={className}>
      <div
        className={`rounded-2xl border p-6 md:p-8 text-center ${styles.panel}`}
      >
        <CheckCircleIcon className="w-14 h-14 mx-auto text-success-500" />
        <h3 className="text-xl font-bold text-gray-900 mt-4 font-display">Request received</h3>
        {requestId && (
          <p className="mt-2 text-sm text-gray-600">
            Reference:{' '}
            <span className="font-mono font-semibold text-gray-900">{requestId}</span>
          </p>
        )}
        <p className="mt-3 text-gray-600 text-sm max-w-md mx-auto">
          Our team will contact you shortly to confirm helper availability and next steps.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className={`mt-6 text-sm font-semibold hover:underline ${variant === 'trust' ? 'text-trust-700' : 'text-primary-700'}`}
        >
          Submit another request
        </button>
      </div>
      </div>
    )
  }

  const inputClass = `w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition-shadow ${styles.focus} focus:ring-2`

  return (
    <div id={anchorId} className={className}>
    <div className={`rounded-2xl border overflow-hidden ${styles.panel}`}>
      <div className={`h-1.5 w-full bg-gradient-to-r ${styles.bar}`} />
      <div className="p-5 md:p-7">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-display text-center md:text-left">
          Book on-demand help
        </h3>
        <p className="text-sm text-gray-600 mt-1 text-center md:text-left">
          Tell us what you need — we will match you with a verified helper.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
              <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
              {formErrors.name && <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile number *</label>
              <input
                className={inputClass}
                inputMode="numeric"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10-digit mobile"
              />
              {formErrors.phone && <p className="text-xs text-red-600 mt-1">{formErrors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email (optional)</label>
              <input className={inputClass} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              {formErrors.email && <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>}
            </div>
            {!fixedCity ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <select className={inputClass} value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Select city</option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {formErrors.city && <p className="text-xs text-red-600 mt-1">{formErrors.city}</p>}
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-800 font-medium">{fixedCity}</div>
              </div>
            )}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Locality / area *</label>
              <input
                className={inputClass}
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                placeholder="Neighbourhood, main road, or landmark area"
              />
              {formErrors.locality && <p className="text-xs text-red-600 mt-1">{formErrors.locality}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Apartment / society</label>
              <input
                className={inputClass}
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                placeholder="Tower, block, flat no., society name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nearby landmark (optional)</label>
              <input className={inputClass} value={landmark} onChange={(e) => setLandmark(e.target.value)} placeholder="e.g. Near metro / school / mall" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type of work needed *</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {WORK_TYPE_OPTIONS.map((opt) => (
                <label
                  key={opt.id}
                  className="flex items-start gap-2 rounded-lg border border-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    className={`mt-1 rounded border-gray-300 ${styles.chk}`}
                    checked={workTypes.includes(opt.id)}
                    onChange={() => toggleWorkType(opt.id)}
                  />
                  <span className="text-sm text-gray-800">{opt.label}</span>
                </label>
              ))}
            </div>
            {formErrors.workTypes && <p className="text-xs text-red-600 mt-1">{formErrors.workTypes}</p>}
            {workTypes.includes('other') && (
              <div className="mt-3">
                <input
                  className={inputClass}
                  value={workTypeOther}
                  onChange={(e) => setWorkTypeOther(e.target.value)}
                  placeholder="Describe the work you need"
                />
                {formErrors.workTypeOther && <p className="text-xs text-red-600 mt-1">{formErrors.workTypeOther}</p>}
              </div>
            )}
          </div>

          <div className={`rounded-xl border p-4 ${styles.accentBox}`}>
            <p className="text-sm text-gray-800 leading-relaxed">
              <span className="font-bold text-gray-900">Minimum booking slot is 4 hours.</span>{' '}
              Plan your preferred start time and how long you need the helper; shorter on-demand visits cannot be accepted.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service date *</label>
                <input
                  className={inputClass}
                  type="date"
                  min={minDateStr()}
                  value={serviceDate}
                  onChange={(e) => setServiceDate(e.target.value)}
                />
                {formErrors.serviceDate && <p className="text-xs text-red-600 mt-1">{formErrors.serviceDate}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred start time *</label>
                <input className={inputClass} type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                {formErrors.startTime && <p className="text-xs text-red-600 mt-1">{formErrors.startTime}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How many hours? *</label>
                <select className={inputClass} value={slotHours} onChange={(e) => setSlotHours(e.target.value)}>
                  {SLOT_HOURS.map((h) => (
                    <option key={h} value={String(h)}>
                      {h} hours
                    </option>
                  ))}
                </select>
                {formErrors.slotHours && <p className="text-xs text-red-600 mt-1">{formErrors.slotHours}</p>}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">How soon do you need help?</label>
              <select className={inputClass} value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                <option value="">Select</option>
                {URGENCY_OPTIONS.map((u) => (
                  <option key={u.value} value={u.value}>
                    {u.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred helper gender</label>
              <select className={inputClass} value={preferredGender} onChange={(e) => setPreferredGender(e.target.value)}>
                <option value="">No preference</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Household size (optional)</label>
              <select className={inputClass} value={familySize} onChange={(e) => setFamilySize(e.target.value)}>
                <option value="">Select</option>
                <option value="1-2">1–2 people</option>
                <option value="3-4">3–4 people</option>
                <option value="5-6">5–6 people</option>
                <option value="7+">7 or more</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Anything else we should know?</label>
              <textarea
                className={inputClass}
                rows={4}
                value={otherDetails}
                onChange={(e) => setOtherDetails(e.target.value)}
                placeholder="Access instructions, pets, equipment needed, language preference, COVID precautions, etc."
              />
            </div>
          </div>

          {submitStatus === 'error' && (
            <p className="text-sm text-red-600 text-center">Something went wrong. Please try again or call 080-31411776.</p>
          )}

          <button type="submit" disabled={submitStatus === 'submitting'} className={`w-full md:w-auto min-w-[200px] font-bold py-3 px-8 rounded-xl transition-colors disabled:opacity-60 ${styles.btn}`}>
            {submitStatus === 'submitting' ? 'Sending…' : 'Submit request'}
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}
