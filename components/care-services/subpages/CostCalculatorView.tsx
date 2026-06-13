'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { CareSubpageShell, SectionHeader } from './CareSubpageShell'
import {
  trackCareCalculatorInteraction,
  trackCareCalculatorQuoteRequest,
  trackCarePhoneClick,
} from '@/lib/analytics'

const PATH = '/care-services/cost-calculator'

type Role = 'caretaker' | 'attendant' | 'nurse'
type Mode = 'live-in' | 'shift' | 'visits'
type Complexity = 'simple' | 'moderate' | 'complex'

/** Indicative monthly base ranges (₹) — keep in step with /care-services/home-nursing-cost-bangalore */
const BASE: Record<Role, Record<Mode, [number, number]>> = {
  caretaker: {
    'live-in': [18000, 26000],
    shift: [22000, 32000], // 12-hour daily monthly equivalent
    visits: [12000, 18000], // 4-hour daily visit-mode monthly equivalent
  },
  attendant: {
    'live-in': [24000, 34000],
    shift: [30000, 40000],
    visits: [18000, 26000],
  },
  nurse: {
    'live-in': [35000, 55000],
    shift: [40000, 60000],
    visits: [16000, 32000], // visits 2–4× weekly
  },
}

/** Multipliers, applied to the base range. */
const COMPLEXITY_MULT: Record<Complexity, number> = {
  simple: 1.0,
  moderate: 1.1,
  complex: 1.25,
}

const HOSPITAL_PROXIMITY_BUMP = 0.03 // outer Bangalore +3%
const NIGHT_PREMIUM = 0.08 // night-shift premium 8%

const MODE_LABEL: Record<Mode, string> = {
  'live-in': 'Live-in (24×7, one weekly off)',
  shift: '12-hour shift, daily',
  visits: 'Visits a few times a week',
}

const MODE_HELPER: Record<Mode, string> = {
  'live-in': 'Caregiver lives at the home; meals + room provided.',
  shift: 'Day or night shift, every day. Family covers other half.',
  visits: 'Best for stable patients needing periodic clinical visits.',
}

const fmt = (n: number) => {
  // round to nearest 500 for cleanliness, then format
  const rounded = Math.round(n / 500) * 500
  return '₹' + rounded.toLocaleString('en-IN')
}

export default function CostCalculatorView() {
  const [role, setRole] = useState<Role>('caretaker')
  const [mode, setMode] = useState<Mode>('live-in')
  const [complexity, setComplexity] = useState<Complexity>('moderate')
  const [outerBangalore, setOuterBangalore] = useState(false)
  const [nightShift, setNightShift] = useState(false)

  const [low, high] = BASE[role][mode]
  const cMult = COMPLEXITY_MULT[complexity]
  const locBump = outerBangalore ? HOSPITAL_PROXIMITY_BUMP : 0
  const nightBump = nightShift && mode === 'shift' ? NIGHT_PREMIUM : 0
  const finalLow = low * cMult * (1 + locBump + nightBump)
  const finalHigh = high * cMult * (1 + locBump + nightBump)

  const dailyLow = finalLow / 30
  const dailyHigh = finalHigh / 30

  const recommendedHref = useMemo(() => {
    if (role === 'nurse') return '/care-services/home-nursing-services-bangalore'
    if (role === 'attendant') return '/care-services/trained-attendant-services-bangalore'
    return '/care-services/caretaker-services-bangalore'
  }, [role])

  const enquiryHref =
    `/care-services/enquiry?source=${encodeURIComponent(PATH)}` +
    `&role=${role}&mode=${mode}&complexity=${complexity}`

  // Debounced analytics — fire once after the user stops fiddling with inputs
  // for 800ms. Skip the very first render (initial state) to avoid noise.
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const t = window.setTimeout(() => {
      trackCareCalculatorInteraction(
        role,
        mode,
        complexity,
        Math.round(finalLow),
        Math.round(finalHigh),
      )
    }, 800)
    return () => window.clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, mode, complexity, outerBangalore, nightShift])

  return (
    <CareSubpageShell
      currentLabel="Cost Calculator"
      eyebrow="Bangalore · Pricing tool"
      headlineLead="Estimate your monthly spend"
      headlineAccent="in 30 seconds."
      lede="Pick the care type, the cover you need, and a few details. We’ll show you an honest range, not a teaser price."
      enquirySource={PATH}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      {/* Calculator */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12">
          {/* Inputs */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:p-10">
              <h2 className="font-careSerif text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl">
                Tell us what you need
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Drag, tap, choose. The estimate updates instantly.
              </p>

              {/* Role */}
              <fieldset className="mt-7">
                <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Care type
                </legend>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {(['caretaker', 'attendant', 'nurse'] as Role[]).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`rounded-2xl border px-3 py-3 text-sm font-semibold capitalize transition ${
                        role === r
                          ? 'border-care-500 bg-care-50 text-neutral-950'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900'
                      }`}
                    >
                      {r === 'attendant' ? 'Trained attendant' : r}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Mode */}
              <fieldset className="mt-7">
                <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Coverage
                </legend>
                <div className="mt-3 space-y-2">
                  {(['live-in', 'shift', 'visits'] as Mode[]).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMode(m)}
                      className={`flex w-full items-start justify-between gap-4 rounded-2xl border px-4 py-3 text-left transition ${
                        mode === m
                          ? 'border-care-500 bg-care-50'
                          : 'border-neutral-200 bg-white hover:border-neutral-900'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">{MODE_LABEL[m]}</div>
                        <div className="mt-0.5 text-xs text-neutral-500">{MODE_HELPER[m]}</div>
                      </div>
                      <span
                        aria-hidden
                        className={`mt-1 inline-block h-3 w-3 shrink-0 rounded-full ${
                          mode === m ? 'bg-care-500' : 'bg-neutral-200'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Complexity */}
              <fieldset className="mt-7">
                <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Patient complexity
                </legend>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {(
                    [
                      { v: 'simple' as Complexity, l: 'Simple', d: 'Stable, mobile' },
                      { v: 'moderate' as Complexity, l: 'Moderate', d: 'Mild dementia / recovery' },
                      { v: 'complex' as Complexity, l: 'Complex', d: 'Bedridden / advanced' },
                    ]
                  ).map((c) => (
                    <button
                      key={c.v}
                      type="button"
                      onClick={() => setComplexity(c.v)}
                      className={`rounded-2xl border px-3 py-3 text-left transition ${
                        complexity === c.v
                          ? 'border-care-500 bg-care-50'
                          : 'border-neutral-200 bg-white hover:border-neutral-900'
                      }`}
                    >
                      <div className="text-sm font-semibold text-neutral-900">{c.l}</div>
                      <div className="mt-0.5 text-[11px] leading-tight text-neutral-500">{c.d}</div>
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Toggles */}
              <fieldset className="mt-7 space-y-3">
                <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Adjustments
                </legend>
                <label className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-neutral-200 bg-white px-4 py-3 hover:border-neutral-900">
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">Outer Bangalore (Sarjapur, Devanahalli, Doddaballapur)</div>
                    <div className="mt-0.5 text-xs text-neutral-500">Adds a small premium for travel & continuity (≈3%)</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={outerBangalore}
                    onChange={(e) => setOuterBangalore(e.target.checked)}
                    className="mt-1 h-5 w-5 cursor-pointer accent-care-500"
                  />
                </label>
                <label
                  className={`flex items-start justify-between gap-4 rounded-2xl border px-4 py-3 ${
                    mode === 'shift' ? 'cursor-pointer border-neutral-200 bg-white hover:border-neutral-900' : 'cursor-not-allowed border-neutral-200 bg-neutral-50 opacity-60'
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">Night shift</div>
                    <div className="mt-0.5 text-xs text-neutral-500">
                      Only relevant for shift mode. Adds an 8% premium.
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={nightShift}
                    disabled={mode !== 'shift'}
                    onChange={(e) => setNightShift(e.target.checked)}
                    className="mt-1 h-5 w-5 cursor-pointer accent-care-500 disabled:cursor-not-allowed"
                  />
                </label>
              </fieldset>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-5">
            <div className="sticky top-6 rounded-[28px] border border-neutral-200 bg-gradient-to-br from-care-50 via-care-50 to-care-100 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">
                Your estimate
              </p>
              <h3 className="mt-3 font-careSerif text-3xl font-medium leading-tight tracking-tight text-neutral-950 sm:text-4xl">
                {fmt(finalLow)}, {fmt(finalHigh)}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-600">
                per month
              </p>
              <p className="mt-3 text-sm text-neutral-700">
                That’s roughly{' '}
                <span className="font-semibold text-neutral-950">
                  {fmt(dailyLow)}, {fmt(dailyHigh)}
                </span>{' '}
                per day.
              </p>

              <hr className="my-7 border-white/60" />

              <div className="space-y-3 text-sm">
                <Row label="Care type" value={role === 'attendant' ? 'Trained attendant' : role[0].toUpperCase() + role.slice(1)} />
                <Row label="Coverage" value={MODE_LABEL[mode]} />
                <Row label="Complexity" value={complexity[0].toUpperCase() + complexity.slice(1)} />
                {outerBangalore ? <Row label="Locality" value="Outer Bangalore" /> : null}
                {nightShift && mode === 'shift' ? <Row label="Shift" value="Night shift" /> : null}
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <Link
                  href={enquiryHref}
                  onClick={() => trackCareCalculatorQuoteRequest(role, mode, complexity)}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black active:scale-[0.98]"
                >
                  Get an exact quote
                  <ArrowRightIcon className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href={recommendedHref}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-neutral-900/20 bg-white/80 px-6 py-3 text-sm font-semibold text-neutral-900 backdrop-blur transition hover:bg-white"
                >
                  Learn about this service
                </Link>
              </div>

              <p className="mt-6 text-xs text-neutral-500">
                Indicative monthly range based on Bangalore market data. Final pricing depends on the
                caregiver’s specific experience and the case’s exact requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's not in this number */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Honest disclaimer"
            titleLead="What this number"
            titleMuted="doesn’t include."
            lede="The estimate is for the caregiver placement only. Actual costs that aren’t in this number, and shouldn’t be marked up by anyone:"
            align="center"
          />
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'Medical consumables (gloves, dressings, syringes)',
              'Prescription medication and IV fluids',
              'Equipment (oxygen, hospital bed, suction)',
              'Hospital visits and ambulance services',
              'Festival or annual bonus (when applicable)',
              'Caregiver’s travel for off-day',
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5"
              >
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-care-500" aria-hidden />
                <span className="text-sm leading-snug text-neutral-800">{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-neutral-500">
            See the{' '}
            <Link
              href="/care-services/home-nursing-cost-bangalore"
              className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
            >
              full pricing guide
            </Link>{' '}
            for context, included items, and how home care compares to a continued hospital stay.
          </p>
        </div>
      </section>

      {/* Talk it through */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-gradient-to-br from-care-50 via-care-100 to-care-200 p-8 text-center sm:p-12">
          <h3 className="font-careSerif text-2xl font-medium leading-tight tracking-tight text-neutral-950 sm:text-3xl">
            Want a precise number, not a range?
          </h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            A 15-minute call gets you an exact quote against the patient’s situation, with no commitment.
          </p>
          <a
            href="tel:+918031411776"
            onClick={() => trackCarePhoneClick('080-31411776', `${PATH}#bottom-cta`)}
            className="mt-7 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-neutral-900 px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-black"
          >
            <PhoneIcon className="h-4 w-4" aria-hidden />
            080-31411776
          </a>
        </div>
      </section>
    </CareSubpageShell>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-neutral-600">{label}</span>
      <span className="font-semibold text-neutral-950">{value}</span>
    </div>
  )
}
