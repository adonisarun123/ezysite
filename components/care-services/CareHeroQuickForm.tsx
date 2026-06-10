'use client'

import { useState } from 'react'
import { CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import { trackFormStart, trackFormError, trackFormSubmitSuccess } from '@/lib/analytics'

/**
 * CareHeroQuickForm — vertical lead card shown on the right side of every
 * care-page hero (stacks below the hero text on mobile).
 *
 * Fields: name, contact number, city, requirements. Submits through the
 * existing care_services lead flow tagged with the page it came from, so
 * leads land in the same inbox as the full enquiry form.
 */

const PHONE_RE = /^[5-9][0-9]{9}$/

const CITIES = ['Bangalore', 'Other city'] as const

export default function CareHeroQuickForm({ enquirySource }: { enquirySource: string }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('Bangalore')
  const [requirements, setRequirements] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [fieldError, setFieldError] = useState<string | null>(null)
  const [started, setStarted] = useState(false)

  const careType = enquirySource.replace(/^\/care-services\/?/, '') || 'care-services-home'

  const markStarted = () => {
    if (!started) {
      setStarted(true)
      trackFormStart('care_hero_quick_form', enquirySource)
    }
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return
    if (!name.trim() || name.trim().length < 3) {
      setFieldError('Please enter your name')
      return
    }
    if (!PHONE_RE.test(phone.trim())) {
      setFieldError('Enter a valid 10-digit mobile number')
      return
    }
    setFieldError(null)
    setStatus('submitting')
    try {
      const res = await fetch('/api/send-lead-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'care_services',
          website: honeypot,
          formData: {
            name: name.trim(),
            email: '',
            phone: phone.trim(),
            careType,
            patientSummary: requirements.trim() || 'Hero quick-form lead — call back to assess the requirement',
            locality: city !== 'Bangalore' ? city : undefined,
            urgency: '24-48h',
            notes: `Hero quick form. City: ${city}.${requirements.trim() ? '' : ' No requirement text — please call to assess.'}`,
            sourceUrl: typeof window !== 'undefined' ? window.location.href.split('#')[0] : undefined,
          },
          sourceUrl: typeof window !== 'undefined' ? window.location.href.split('#')[0] : undefined,
        }),
      })
      if (!res.ok) throw new Error('request_failed')
      trackFormSubmitSuccess('care_hero_quick_form', { serviceType: careType, city, source: enquirySource })
      setStatus('success')
    } catch (err) {
      setStatus('error')
      trackFormError('care_hero_quick_form', 'submission', err instanceof Error ? err.message : 'unknown')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-neutral-200 bg-neutral-50/60 px-4 py-3 text-[15px] text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-care-500 focus:bg-white focus:ring-4 focus:ring-care-500/15'

  return (
    <div className="w-full max-w-md rounded-[28px] border border-neutral-200/80 bg-white p-6 shadow-[0_24px_64px_rgba(0,0,0,0.10)] sm:p-7">
      {status === 'success' ? (
        <div className="py-8 text-center">
          <CheckCircleIcon className="mx-auto h-12 w-12 text-care-500" aria-hidden />
          <p className="mt-4 text-lg font-bold text-neutral-900">Request received!</p>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-neutral-600">
            A care advisor will call you within the hour to understand your needs and suggest the right care.
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900">Get a free care consultation</h2>
          <p className="mt-1.5 text-sm leading-snug text-neutral-500">
            Share a few details — a care advisor calls you back within the hour.
          </p>

          <form onSubmit={submit} className="mt-5 space-y-3.5" aria-label="Request a free care consultation">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, opacity: 0 }}
            />

            <div>
              <label htmlFor="care-qf-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Name
              </label>
              <input
                id="care-qf-name"
                type="text"
                value={name}
                onFocus={markStarted}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="care-qf-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Contact number
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 select-none text-sm font-medium text-neutral-500">
                  +91
                </span>
                <input
                  id="care-qf-phone"
                  type="tel"
                  inputMode="tel"
                  maxLength={10}
                  value={phone}
                  onFocus={markStarted}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="9XXXXXXXXX"
                  className={`${inputClass} pl-12`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="care-qf-city" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                City
              </label>
              <select
                id="care-qf-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={`${inputClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%236b7280%22 stroke-width=%222%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22m6 9 6 6 6-6%22/%3E%3C/svg%3E')] bg-[right_1rem_center] bg-no-repeat pr-10`}
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="care-qf-req" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Your requirement
              </label>
              <textarea
                id="care-qf-req"
                value={requirements}
                onFocus={markStarted}
                onChange={(e) => setRequirements(e.target.value)}
                rows={3}
                placeholder="e.g. Need a caregiver for my 78-year-old father recovering from a fall…"
                className={`${inputClass} resize-none`}
              />
            </div>

            {fieldError && <p role="alert" className="text-xs font-medium text-red-600">{fieldError}</p>}
            {status === 'error' && (
              <p role="alert" className="text-xs font-medium text-red-600">
                Couldn&rsquo;t send — please call 080-31411776 instead.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-xl bg-care-600 px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(207,101,18,0.35)] transition hover:bg-care-700 hover:shadow-[0_10px_26px_rgba(207,101,18,0.45)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending…' : 'Request free consultation'}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400">
              <ShieldCheckIcon className="h-3.5 w-3.5 text-care-400" aria-hidden />
              Your details stay private · no spam, ever
            </p>
          </form>
        </>
      )}
    </div>
  )
}
