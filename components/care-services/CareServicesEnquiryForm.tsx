'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { CARE_SERVICE_TYPE_OPTIONS, CARE_URGENCY_OPTIONS } from '@/lib/careServices/careEnquiryOptions'
import { CARE_PILLAR_HREF } from '@/lib/careServices/registry'

const SITE = 'https://www.ezyhelpers.com'

function inferCareTypeFromPath(path: string | null): string {
  if (!path || !path.startsWith('/')) return 'not_sure'
  const key = path.replace(/^\//, '').split('?')[0]
  const found = CARE_SERVICE_TYPE_OPTIONS.find((o) => o.value === key)
  return found ? found.value : 'not_sure'
}

export default function CareServicesEnquiryForm() {
  const searchParams = useSearchParams()
  const sourcePath = searchParams.get('source')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [careType, setCareType] = useState('not_sure')
  const [locality, setLocality] = useState('Bangalore')
  const [urgency, setUrgency] = useState<string>('24-48h')
  const [patientSummary, setPatientSummary] = useState('')
  const [notes, setNotes] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [referrerUrl, setReferrerUrl] = useState<string | undefined>(undefined)

  useEffect(() => {
    setCareType(inferCareTypeFromPath(sourcePath))
  }, [sourcePath])

  useEffect(() => {
    if (sourcePath || typeof document === 'undefined') return
    const r = document.referrer
    if (!r) return
    try {
      const u = new URL(r)
      if (u.hostname.includes('ezyhelpers.com')) {
        setReferrerUrl(r.split('#')[0].split('?')[0])
      }
    } catch {
      /* ignore */
    }
  }, [sourcePath])

  const resolvedSourceUrl = useMemo(() => {
    if (sourcePath?.startsWith('/')) {
      return `${SITE}${sourcePath.split('?')[0].split('#')[0]}`
    }
    return referrerUrl
  }, [sourcePath, referrerUrl])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!name.trim() || !email.trim() || !phone.trim() || !patientSummary.trim()) {
      setStatus('idle')
      setErrorMessage('Please fill in name, email, phone, and a brief about the care need.')
      return
    }

    setStatus('submitting')

    let sourceUrl = resolvedSourceUrl
    if (!sourceUrl && typeof document !== 'undefined' && document.referrer) {
      try {
        const u = new URL(document.referrer)
        if (u.hostname.includes('ezyhelpers.com')) {
          sourceUrl = document.referrer.split('#')[0]
        }
      } catch {
        /* ignore */
      }
    }

    const body = {
      leadType: 'care_services' as const,
      formData: {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        careType,
        patientSummary: patientSummary.trim(),
        locality: locality.trim() || undefined,
        urgency: urgency as 'same-day' | '24-48h' | 'this-week' | 'planning',
        notes: notes.trim() || undefined,
        sourceUrl,
      },
      sourceUrl,
    }

    try {
      const res = await fetch('/api/send-lead-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again or call us.')
      }
      setStatus('success')
    } catch (err) {
      setStatus('idle')
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center shadow-sm">
        <CheckCircleIcon className="mx-auto h-14 w-14 text-emerald-600" aria-hidden />
        <h2 className="mt-4 font-display text-xl font-bold text-gray-900">Request received</h2>
        <p className="mt-2 text-gray-700">
          Our care team will reach out shortly. If your need is urgent, please call{' '}
          <a href="tel:+918031411776" className="font-semibold text-primary-600 underline">
            080-31411776
          </a>
          .
        </p>
        <Link
          href={CARE_PILLAR_HREF}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700"
        >
          Back to Home Care Services
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm text-gray-600">
        Tell us about your care need in Bengaluru. Fields marked <span className="text-red-600">*</span> are required.
      </p>

      {resolvedSourceUrl && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
          <span className="font-medium text-gray-900">You came from: </span>
          <span className="break-all text-primary-700">{resolvedSourceUrl}</span>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="care-name" className="block text-sm font-medium text-gray-900">
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id="care-name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
          />
        </div>
        <div>
          <label htmlFor="care-phone" className="block text-sm font-medium text-gray-900">
            Mobile number <span className="text-red-600">*</span>
          </label>
          <input
            id="care-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="10-digit Indian mobile"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
          />
        </div>
      </div>

      <div>
        <label htmlFor="care-email" className="block text-sm font-medium text-gray-900">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="care-email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="care-type" className="block text-sm font-medium text-gray-900">
            Type of care <span className="text-red-600">*</span>
          </label>
          <select
            id="care-type"
            required
            value={careType}
            onChange={(e) => setCareType(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
          >
            {CARE_SERVICE_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="care-locality" className="block text-sm font-medium text-gray-900">
            Locality / area in Bengaluru
          </label>
          <input
            id="care-locality"
            type="text"
            placeholder="e.g. HSR Layout, Koramangala"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
          />
        </div>
      </div>

      <div>
        <label htmlFor="care-urgency" className="block text-sm font-medium text-gray-900">
          When do you need support? <span className="text-red-600">*</span>
        </label>
        <select
          id="care-urgency"
          required
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
        >
          {CARE_URGENCY_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="care-summary" className="block text-sm font-medium text-gray-900">
          Briefly describe the patient&apos;s situation and what help you need <span className="text-red-600">*</span>
        </label>
        <textarea
          id="care-summary"
          required
          rows={5}
          value={patientSummary}
          onChange={(e) => setPatientSummary(e.target.value)}
          placeholder="Condition, mobility, medical tasks, shifts needed, languages preferred…"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
        />
      </div>

      <div>
        <label htmlFor="care-notes" className="block text-sm font-medium text-gray-900">
          Anything else we should know?
        </label>
        <textarea
          id="care-notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
        />
      </div>

      {errorMessage && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="flex flex-wrap gap-4 pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-blue-800 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Submit enquiry'}
        </button>
        <a
          href="tel:+918031411776"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 border-emerald-600 px-6 py-3 text-base font-semibold text-emerald-800 hover:bg-emerald-50"
        >
          Call 080-31411776
        </a>
      </div>
    </form>
  )
}
