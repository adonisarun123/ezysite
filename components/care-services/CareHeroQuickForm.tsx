'use client'

import { useState } from 'react'
import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline'
import { trackFormStart, trackFormError } from '@/lib/analytics'

/**
 * CareHeroQuickForm — 3-field lead card (name, phone, urgency) embedded in the
 * hero of every care page. Submits through the existing care_services lead
 * flow tagged with the page it came from, so leads land in the same inbox as
 * the full enquiry form.
 *
 * Rendered server-side as part of the hero (component is client for the
 * submit handler, but ships visible HTML immediately). Kept deliberately
 * light: no images, no heavy validation libs, minimal fields.
 */

const PHONE_RE = /^[5-9][0-9]{9}$/

const URGENCY_OPTIONS = [
  { value: 'same-day', label: 'Today — urgent' },
  { value: '24-48h', label: 'Within 1–2 days' },
  { value: 'this-week', label: 'This week' },
  { value: 'planning', label: 'Just planning' },
] as const

export default function CareHeroQuickForm({ enquirySource }: { enquirySource: string }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [urgency, setUrgency] = useState<string>('24-48h')
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
            patientSummary: 'Hero quick-form lead — call back to assess the requirement',
            urgency,
            notes: 'Visitor submitted the in-hero quick form. Only name/phone/urgency collected — please call back.',
            sourceUrl: typeof window !== 'undefined' ? window.location.href.split('#')[0] : undefined,
          },
          sourceUrl: typeof window !== 'undefined' ? window.location.href.split('#')[0] : undefined,
        }),
      })
      if (!res.ok) throw new Error('request_failed')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      trackFormError('care_hero_quick_form', 'submission', err instanceof Error ? err.message : 'unknown')
    }
  }

  if (status === 'success') {
    return (
      <div className="mx-auto mt-10 w-full max-w-xl rounded-[24px] border border-care-200 bg-care-50 p-6 text-center">
        <p className="text-base font-bold text-care-800">Thank you — we&rsquo;ve got your request.</p>
        <p className="mt-1.5 text-sm text-care-700">A care advisor will call you {urgency === 'same-day' ? 'right away' : 'within the hour'}.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto mt-10 w-full max-w-xl rounded-[24px] border border-neutral-200 bg-white p-5 text-left shadow-[0_10px_36px_rgba(0,0,0,0.08)] sm:p-6"
      aria-label="Request a call back"
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-care-50 text-care-600 ring-1 ring-care-500/15">
          <PhoneArrowDownLeftIcon className="h-4.5 w-4.5 h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-sm font-bold leading-tight text-neutral-900">Get a free call back</p>
          <p className="text-xs text-neutral-500">A care advisor calls you — no obligation.</p>
        </div>
      </div>

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

      <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <input
          type="text"
          value={name}
          onFocus={markStarted}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          aria-label="Your name"
          className="w-full rounded-xl border border-neutral-300 px-3.5 py-3 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-care-500"
        />
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 select-none text-xs text-neutral-500">+91</span>
          <input
            type="tel"
            inputMode="tel"
            maxLength={10}
            value={phone}
            onFocus={markStarted}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            placeholder="9XXXXXXXXX"
            aria-label="Your 10-digit mobile number"
            className="w-full rounded-xl border border-neutral-300 py-3 pl-12 pr-3.5 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-care-500"
          />
        </div>
        <select
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
          aria-label="When do you need care?"
          className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-3 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-care-500"
        >
          {URGENCY_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-xl bg-care-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-care-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Request call back'}
        </button>
      </div>

      {fieldError && <p role="alert" className="mt-2 text-xs text-red-600">{fieldError}</p>}
      {status === 'error' && (
        <p role="alert" className="mt-2 text-xs text-red-600">Couldn&rsquo;t send — please call 080-31411776 instead.</p>
      )}
    </form>
  )
}
