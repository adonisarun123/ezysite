'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import {
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  ExclamationCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import { CARE_SERVICE_TYPE_OPTIONS, CARE_URGENCY_OPTIONS } from '@/lib/careServices/careEnquiryOptions'
import { CARE_PILLAR_HREF } from '@/lib/careServices/registry'
import {
  trackCareEnquiryStart,
  trackCareEnquirySubmit,
  trackFormError,
} from '@/lib/analytics'

const SITE = 'https://www.ezyhelpers.com'

function inferCareTypeFromPath(path: string | null): string {
  if (!path || !path.startsWith('/')) return 'not_sure'
  const key = path.replace(/^\//, '').split('?')[0]
  const found = CARE_SERVICE_TYPE_OPTIONS.find((o) => o.value === key)
  return found ? found.value : 'not_sure'
}

/* ───────────────────── quiz / calculator handoff helpers ─────────────────────
 * Quiz pages send `?suggested=Home%20Healthcare%20Services`
 * Cost calculator sends `?role=caretaker&mode=live-in&complexity=moderate`
 * Condition pages may send `?condition=stroke|dementia|...`
 * Map these into the form's existing care-type select + starter patientSummary.
 * ─────────────────────────────────────────────────────────────────────────── */

const SUGGESTED_TO_CARE_TYPE: Record<string, string> = {
  'Home Healthcare Services': 'care-services/home-healthcare-services-bangalore',
  'Home Nursing Services': 'care-services/home-nursing-services-bangalore',
  'Caretaker Services': 'care-services/caretaker-services-bangalore',
  'Trained Attendant Services': 'care-services/trained-attendant-services-bangalore',
  'Elderly Care Services': 'care-services/elderly-care-services-bangalore',
  'Patient Care Services': 'care-services/patient-care-services-bangalore',
  'Home Attendant Services': 'care-services/home-attendant-services-bangalore',
}

const ROLE_TO_CARE_TYPE: Record<string, string> = {
  caretaker: 'care-services/caretaker-services-bangalore',
  attendant: 'care-services/trained-attendant-services-bangalore',
  nurse: 'care-services/home-nursing-services-bangalore',
}

const MODE_LABEL: Record<string, string> = {
  'live-in': 'Live-in (24×7)',
  shift: '12-hour shift',
  visits: 'Visits a few times a week',
}

const COMPLEXITY_LABEL: Record<string, string> = {
  simple: 'simple / stable',
  moderate: 'moderate',
  complex: 'complex / high-dependency',
}

const CONDITION_LABEL: Record<string, string> = {
  stroke: 'Post-stroke recovery',
  dementia: 'Dementia / Alzheimer’s',
  bedridden: 'Bedridden patient care',
  'post-surgery': 'Post-surgery recovery',
  cancer: 'Cancer / oncology home care',
  parkinsons: 'Parkinson’s disease',
}

/** Builds a clean starter sentence the family can edit/expand. */
function buildStarterSummary({
  suggested,
  role,
  mode,
  complexity,
  condition,
}: {
  suggested?: string | null
  role?: string | null
  mode?: string | null
  complexity?: string | null
  condition?: string | null
}): string {
  const parts: string[] = []
  if (condition && CONDITION_LABEL[condition]) {
    parts.push(`Patient situation: ${CONDITION_LABEL[condition]}.`)
  }
  if (suggested) {
    parts.push(`Service we’re considering: ${suggested}.`)
  }
  if (role && ROLE_TO_CARE_TYPE[role]) {
    const roleLabel = role === 'attendant' ? 'trained attendant' : role
    parts.push(`Looking at a ${roleLabel} arrangement.`)
  }
  if (mode && MODE_LABEL[mode]) {
    parts.push(`Coverage needed: ${MODE_LABEL[mode]}.`)
  }
  if (complexity && COMPLEXITY_LABEL[complexity]) {
    parts.push(`Complexity: ${COMPLEXITY_LABEL[complexity]}.`)
  }
  if (parts.length === 0) return ''
  parts.push('') // trailing blank line for the family to continue
  parts.push('Anything else relevant: ')
  return parts.join('\n')
}

/**
 * Shared input/select/textarea styling — warm, generous radius, soft focus ring.
 * Matches the Airbnb-inspired palette used by the enquiry hero and cluster pages.
 */
const FIELD_BASE =
  'mt-1.5 block w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-[15px] text-neutral-900 placeholder:text-neutral-400 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition focus:border-[#FF385C] focus:outline-none focus:ring-4 focus:ring-[#FF385C]/15 hover:border-neutral-300'

const LABEL_BASE = 'block text-sm font-semibold text-neutral-900'
const REQUIRED_MARK = <span aria-hidden className="ml-1 text-[#FF385C]">*</span>

export default function CareServicesEnquiryForm() {
  const searchParams = useSearchParams()
  const sourcePath = searchParams.get('source')
  const suggestedParam = searchParams.get('suggested')
  const roleParam = searchParams.get('role')
  const modeParam = searchParams.get('mode')
  const complexityParam = searchParams.get('complexity')
  const conditionParam = searchParams.get('condition')

  // Pre-built starter line based on quiz / calculator / condition hand-off
  const starterSummary = useMemo(
    () =>
      buildStarterSummary({
        suggested: suggestedParam,
        role: roleParam,
        mode: modeParam,
        complexity: complexityParam,
        condition: conditionParam,
      }),
    [suggestedParam, roleParam, modeParam, complexityParam, conditionParam],
  )

  // Convert the highest-priority hand-off signal into a care-type select value.
  // Order: explicit quiz suggestion → calculator role → source path → "not sure".
  const initialCareType = useMemo(() => {
    if (suggestedParam && SUGGESTED_TO_CARE_TYPE[suggestedParam]) return SUGGESTED_TO_CARE_TYPE[suggestedParam]
    if (roleParam && ROLE_TO_CARE_TYPE[roleParam]) return ROLE_TO_CARE_TYPE[roleParam]
    return inferCareTypeFromPath(sourcePath)
  }, [suggestedParam, roleParam, sourcePath])

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
  const [hasFiredStart, setHasFiredStart] = useState(false)

  // Fire trackCareEnquiryStart once, on the user's first manual interaction.
  const fireStartIfNeeded = () => {
    if (hasFiredStart) return
    trackCareEnquiryStart(sourcePath ?? null)
    setHasFiredStart(true)
  }

  useEffect(() => {
    setCareType(initialCareType)
  }, [initialCareType])

  // Pre-populate patient summary with the starter sentence ONLY if the user
  // hasn't typed anything yet. Avoids clobbering manual edits on re-render.
  useEffect(() => {
    if (starterSummary && !patientSummary) {
      setPatientSummary(starterSummary)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [starterSummary])

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
      trackFormError('care_enquiry', 'validation', 'missing required fields')
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
      trackCareEnquirySubmit({
        careType,
        urgency,
        locality: locality.trim() || undefined,
      })
    } catch (err) {
      setStatus('idle')
      const msg = err instanceof Error ? err.message : 'Submission failed.'
      setErrorMessage(msg)
      trackFormError('care_enquiry', 'submission', msg)
    }
  }

  if (status === 'success') {
    return (
      <div className="relative overflow-hidden rounded-[28px] border border-[#00A699]/20 bg-gradient-to-br from-[#E5F2EB] to-white p-8 text-center shadow-[0_24px_60px_rgba(0,166,153,0.12)] sm:p-12">
        <div
          className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-[#00A699]/15 blur-2xl"
          aria-hidden
        />
        <div className="relative">
          <CheckCircleIcon className="mx-auto h-14 w-14 text-[#00A699]" aria-hidden />
          <h2 className="mt-5 font-careSerif text-2xl font-medium tracking-tight text-neutral-950 sm:text-[28px]">
            Request received.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-neutral-700">
            Our care team will reach out shortly. If your need is urgent, please call{' '}
            <a href="tel:+918031411776" className="font-semibold text-[#FF385C] underline underline-offset-4">
              080-31411776
            </a>
            .
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={CARE_PILLAR_HREF}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#FF385C] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_2px_8px_rgba(255,56,92,0.25)] transition hover:bg-[#E31C5F]"
            >
              Back to Home Care Services
              <ArrowRightIcon className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="tel:+918031411776"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-neutral-900 bg-white px-6 py-3.5 text-[15px] font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden />
              080-31411776
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm leading-relaxed text-neutral-600">
        Tell us about your care need in Bengaluru. Fields marked
        <span className="mx-1 text-[#FF385C]" aria-hidden>
          *
        </span>
        are required.
      </p>

      {(resolvedSourceUrl || suggestedParam || roleParam || modeParam || complexityParam || conditionParam) && (
        <div className="rounded-2xl border border-[#FF385C]/20 bg-[#FFF8F1] px-4 py-4 text-sm text-neutral-700">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF385C]">
            Context from your visit
          </p>
          <ul className="mt-2 space-y-1">
            {suggestedParam ? (
              <li>
                <span className="font-semibold text-neutral-900">Quiz recommendation: </span>
                <span>{suggestedParam}</span>
              </li>
            ) : null}
            {roleParam && ROLE_TO_CARE_TYPE[roleParam] ? (
              <li>
                <span className="font-semibold text-neutral-900">Calculator role: </span>
                <span className="capitalize">
                  {roleParam === 'attendant' ? 'Trained attendant' : roleParam}
                </span>
              </li>
            ) : null}
            {modeParam && MODE_LABEL[modeParam] ? (
              <li>
                <span className="font-semibold text-neutral-900">Coverage: </span>
                <span>{MODE_LABEL[modeParam]}</span>
              </li>
            ) : null}
            {complexityParam && COMPLEXITY_LABEL[complexityParam] ? (
              <li>
                <span className="font-semibold text-neutral-900">Complexity: </span>
                <span>{COMPLEXITY_LABEL[complexityParam]}</span>
              </li>
            ) : null}
            {conditionParam && CONDITION_LABEL[conditionParam] ? (
              <li>
                <span className="font-semibold text-neutral-900">Condition: </span>
                <span>{CONDITION_LABEL[conditionParam]}</span>
              </li>
            ) : null}
            {resolvedSourceUrl ? (
              <li>
                <span className="font-semibold text-neutral-900">From: </span>
                <span className="break-all text-[#FF385C]">{resolvedSourceUrl}</span>
              </li>
            ) : null}
          </ul>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="care-name" className={LABEL_BASE}>
            Full name{REQUIRED_MARK}
          </label>
          <input
            id="care-name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => {
              fireStartIfNeeded()
              setName(e.target.value)
            }}
            placeholder="e.g. Anita Sharma"
            className={FIELD_BASE}
          />
        </div>
        <div>
          <label htmlFor="care-phone" className={LABEL_BASE}>
            Mobile number{REQUIRED_MARK}
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
            className={FIELD_BASE}
          />
        </div>
      </div>

      <div>
        <label htmlFor="care-email" className={LABEL_BASE}>
          Email{REQUIRED_MARK}
        </label>
        <input
          id="care-email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={FIELD_BASE}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="care-type" className={LABEL_BASE}>
            Type of care{REQUIRED_MARK}
          </label>
          <select
            id="care-type"
            required
            value={careType}
            onChange={(e) => setCareType(e.target.value)}
            className={`${FIELD_BASE} appearance-none bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23484848%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px_18px] bg-[right_1rem_center] bg-no-repeat pr-11`}
          >
            {CARE_SERVICE_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="care-locality" className={LABEL_BASE}>
            Locality / area in Bengaluru
          </label>
          <input
            id="care-locality"
            type="text"
            placeholder="e.g. HSR Layout, Koramangala"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            className={FIELD_BASE}
          />
        </div>
      </div>

      {/* Urgency — segmented pill control */}
      <fieldset>
        <legend className={LABEL_BASE}>
          When do you need support?{REQUIRED_MARK}
        </legend>
        <div
          role="radiogroup"
          aria-label="Urgency"
          className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4"
        >
          {CARE_URGENCY_OPTIONS.map((o) => {
            const active = urgency === o.value
            return (
              <button
                key={o.value}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setUrgency(o.value)}
                className={`min-h-[48px] rounded-2xl border px-3 py-2.5 text-[13px] font-semibold leading-tight transition ${
                  active
                    ? 'border-neutral-900 bg-neutral-900 text-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900'
                }`}
              >
                {o.label}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="care-summary" className={LABEL_BASE}>
          Briefly describe the patient&apos;s situation and what help you need{REQUIRED_MARK}
        </label>
        <textarea
          id="care-summary"
          required
          rows={5}
          value={patientSummary}
          onChange={(e) => setPatientSummary(e.target.value)}
          placeholder="Condition, mobility, medical tasks, shifts needed, languages preferred…"
          className={FIELD_BASE}
        />
      </div>

      <div>
        <label htmlFor="care-notes" className={LABEL_BASE}>
          Anything else we should know?
        </label>
        <textarea
          id="care-notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Family preferences, scheduling notes, anything we should keep in mind."
          className={FIELD_BASE}
        />
      </div>

      {errorMessage && (
        <p
          className="flex items-start gap-2 rounded-2xl border border-[#FF385C]/30 bg-[#FFE5E5]/60 px-4 py-3 text-sm text-[#9A1F3D]"
          role="alert"
        >
          <ExclamationCircleIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span className="leading-snug">{errorMessage}</span>
        </p>
      )}

      <div className="space-y-4 pt-2">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#FF385C] px-8 py-3.5 text-base font-semibold text-white shadow-[0_4px_14px_rgba(255,56,92,0.35)] transition hover:bg-[#E31C5F] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#FF385C]"
          >
            {status === 'submitting' ? (
              <>
                <span
                  className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  aria-hidden
                />
                Sending…
              </>
            ) : (
              <>
                Submit enquiry
                <ArrowRightIcon className="h-4 w-4" aria-hidden />
              </>
            )}
          </button>
          <a
            href="tel:+918031411776"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-neutral-900 bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 transition hover:bg-neutral-50"
          >
            <PhoneIcon className="h-4 w-4" aria-hidden />
            080-31411776
          </a>
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-[#FFF8F1] px-4 py-3 text-left">
          <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#FF385C]" aria-hidden />
          <p className="text-xs leading-relaxed text-neutral-600 sm:text-[13px]">
            We&apos;ll respond to your requirement within the next{' '}
            <strong className="font-semibold text-neutral-900">24 hours</strong>.{' '}
            <span className="text-neutral-500">
              <strong className="font-semibold text-neutral-700">Please note:</strong> placements generally take about
              7–10 working days, depending on the existing pipeline.
            </span>
          </p>
        </div>
      </div>
    </form>
  )
}
