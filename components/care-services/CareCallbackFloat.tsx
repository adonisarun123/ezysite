'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { PhoneArrowDownLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { trackFormStart, trackFormError } from '@/lib/analytics'

/**
 * CareCallbackFloat — quick "Request a Call Back" widget for /care-services/*.
 *
 * A collapsed pill (bottom-LEFT, so it never collides with CareWhatsAppFloat
 * on the bottom-right) that expands into a 2-field mini form (name + phone).
 * Submits through the existing care_services lead flow so leads land in the
 * same inbox as the full enquiry form, tagged with the page they came from.
 *
 * Mounted globally via ClientOnlyWidgets; renders only on /care-services/*.
 */

const PHONE_RE = /^[5-9][0-9]{9}$/

export default function CareCallbackFloat() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [fieldError, setFieldError] = useState<string | null>(null)

  // The hero now contains a quick form, so the float acts as the scroll-catcher:
  // appear only after the visitor scrolls past the hero (or after 12s fallback).
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 480) {
        setVisible(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    const t = setTimeout(() => setVisible(true), 12000)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(t)
    }
  }, [])

  if (!pathname?.startsWith('/care-services')) return null
  if (!visible) return null

  const careType = pathname.replace(/^\/care-services\/?/, '').split('?')[0] || 'care-services-home'

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
            patientSummary: 'Quick call-back request from floating widget',
            urgency: '24-48h',
            notes: 'Visitor used the quick "Request a Call Back" widget — call them back, details not yet collected.',
            sourceUrl: typeof window !== 'undefined' ? window.location.href.split('#')[0] : undefined,
          },
          sourceUrl: typeof window !== 'undefined' ? window.location.href.split('#')[0] : undefined,
        }),
      })
      if (!res.ok) throw new Error('request_failed')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      trackFormError('care_callback_float', 'submission', err instanceof Error ? err.message : 'unknown')
    }
  }

  return (
    <div className="fixed bottom-5 left-4 z-40 sm:left-6">
      {open ? (
        <div className="w-[300px] rounded-2xl border border-care-200 bg-white p-4 shadow-[0_18px_44px_rgba(0,0,0,0.18)]">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-bold text-neutral-900">Get a call back</p>
              <p className="mt-0.5 text-xs text-neutral-500">A care advisor calls you within the hour.</p>
            </div>
            <button
              type="button"
              aria-label="Close call back form"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
            >
              <XMarkIcon className="h-4 w-4" aria-hidden />
            </button>
          </div>

          {status === 'success' ? (
            <p className="mt-4 rounded-xl bg-care-50 px-3 py-3 text-sm font-medium text-care-800">
              Thank you! Our care team will call you shortly.
            </p>
          ) : (
            <form onSubmit={submit} className="mt-3 space-y-2.5">
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
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                aria-label="Your name"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-care-500"
              />
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 select-none text-xs text-neutral-500">+91</span>
                <input
                  type="tel"
                  inputMode="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="9XXXXXXXXX"
                  aria-label="Your 10-digit mobile number"
                  className="w-full rounded-lg border border-neutral-300 py-2.5 pl-11 pr-3 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-care-500"
                />
              </div>
              {fieldError && <p role="alert" className="text-xs text-red-600">{fieldError}</p>}
              {status === 'error' && (
                <p role="alert" className="text-xs text-red-600">
                  Couldn&rsquo;t send — please call 080-31411776 instead.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-lg bg-care-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-care-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Request call back'}
              </button>
              <p className="text-center text-[11px] text-neutral-400">Free consultation · no obligation</p>
            </form>
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => {
            setOpen(true)
            trackFormStart('care_callback_float', pathname || '/care-services')
          }}
          className="flex items-center gap-2 rounded-full bg-care-600 py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(0,0,0,0.22)] transition hover:bg-care-700 active:scale-[0.98]"
        >
          <PhoneArrowDownLeftIcon className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Request a call back</span>
          <span className="sm:hidden">Call me back</span>
        </button>
      )}
    </div>
  )
}
