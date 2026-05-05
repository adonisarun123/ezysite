'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  CheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowPathIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { CareSubpageShell, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/care-quiz'

/* ────────────────── Quiz model ──────────────────
   Five questions. Each option contributes to a tally
   across four "buckets": nurse, caretaker, attendant,
   combined. Highest score wins; ties resolved by priority.
─────────────────────────────────────────────────── */

type Bucket = 'nurse' | 'caretaker' | 'attendant' | 'combined'

type Option = {
  label: string
  weights: Partial<Record<Bucket, number>>
}

type Question = {
  id: string
  prompt: string
  helper?: string
  options: Option[]
}

const QUESTIONS: Question[] = [
  {
    id: 'medical',
    prompt: 'Are there active medical procedures the patient needs?',
    helper: 'Wounds being dressed, IV, catheters, tube feeding, chest tubes, regular vitals.',
    options: [
      { label: 'Yes — daily or near-daily clinical care', weights: { nurse: 3, combined: 2 } },
      { label: 'Some — a few times a week (e.g. wound check, port flush)', weights: { combined: 3, caretaker: 1 } },
      { label: 'No clinical procedures, just stable management', weights: { caretaker: 3 } },
    ],
  },
  {
    id: 'mobility',
    prompt: 'How mobile is the patient?',
    options: [
      { label: 'Walks independently or with light support', weights: { caretaker: 3 } },
      { label: 'Walks short distances, needs help for transfers', weights: { caretaker: 2, attendant: 2 } },
      { label: 'Bedridden or wheelchair-bound', weights: { attendant: 3 } },
    ],
  },
  {
    id: 'cognitive',
    prompt: 'Any significant cognitive concerns?',
    helper: 'Memory loss, confusion, dementia, sundowning.',
    options: [
      { label: 'No cognitive concerns', weights: { caretaker: 1, nurse: 1, attendant: 1 } },
      { label: 'Mild forgetfulness', weights: { caretaker: 3 } },
      { label: 'Moderate dementia (sundowning, repetition, mild agitation)', weights: { caretaker: 2, combined: 1 } },
      { label: 'Advanced dementia (significant decline)', weights: { attendant: 2, combined: 2 } },
    ],
  },
  {
    id: 'hours',
    prompt: 'How much daily cover do you need?',
    options: [
      { label: 'A few visits a week', weights: { nurse: 2 } },
      { label: '8–12 hours, day shift', weights: { caretaker: 3, attendant: 1 } },
      { label: '24×7 live-in', weights: { caretaker: 2, attendant: 2, combined: 2 } },
    ],
  },
  {
    id: 'situation',
    prompt: 'What best describes the situation?',
    options: [
      { label: 'Hospital discharge — recent or imminent', weights: { combined: 3, nurse: 2 } },
      { label: 'Long-term elderly care for an ageing parent', weights: { caretaker: 3 } },
      { label: 'Bedridden / post-stroke / high-dependency', weights: { attendant: 3 } },
      { label: 'Post-surgical recovery (4–12 weeks)', weights: { combined: 2, caretaker: 2 } },
    ],
  },
]

const RESULTS: Record<
  Bucket,
  { title: string; tagline: string; lede: string; bullets: string[]; href: string; cost: string; tone: string }
> = {
  nurse: {
    title: 'Home Nursing Services',
    tagline: 'Procedural medical care, performed at home.',
    lede:
      'Your situation calls primarily for clinical care — wound dressing, IV, catheter, vitals, doctor handoffs. A licensed nurse is the right fit, often as visits, sometimes as a shift.',
    bullets: [
      'GNM / B.Sc Nursing-trained',
      'Wound, IV, catheter discipline',
      'Daily clinical log',
      'Doctor coordination',
    ],
    href: '/care-services/home-nursing-services-bangalore',
    cost: '₹600–₹1,200 per visit · ₹35,000–₹55,000/mo live-in',
    tone: 'sky',
  },
  caretaker: {
    title: 'Caretaker Services',
    tagline: 'Daily personal care, matched not assigned.',
    lede:
      'Your situation is mostly about daily living — hygiene, meals, mobility, companionship, medication reminders. A trained caretaker is the right fit, in a day-shift or live-in arrangement.',
    bullets: [
      'Hygiene · feeding · mobility',
      'Medication reminders',
      'Companionship & supervision',
      'Day, night, or live-in shifts',
    ],
    href: '/care-services/caretaker-services-bangalore',
    cost: '₹18,000–₹26,000/mo live-in · ₹900–₹1,200/day shift',
    tone: 'rose',
  },
  attendant: {
    title: 'Trained Attendant Services',
    tagline: 'Skilled physical handling for high-dependency care.',
    lede:
      'Your situation calls for skilled physical handling — bedridden, post-stroke, neurological, or high-dependency care. A trained attendant is the right fit, almost always as a live-in placement.',
    bullets: [
      'Bedridden patient management',
      'Pressure-sore prevention',
      'Safe transfers & repositioning',
      'Tube-feed & catheter comfort',
    ],
    href: '/care-services/trained-attendant-services-bangalore',
    cost: '₹24,000–₹34,000/mo live-in',
    tone: 'sand',
  },
  combined: {
    title: 'Home Healthcare Services',
    tagline: 'Nurse + caretaker, one coordinated team.',
    lede:
      'Your situation needs both medical procedures and daily care. The best fit is a coordinated arrangement — a nurse for clinical tasks, a caretaker for daily living — managed as one team.',
    bullets: [
      'Doctor-aligned care plan',
      'Nurse + caretaker, one team',
      'Wounds · vitals · medication',
      'Hygiene · feeding · mobility',
    ],
    href: '/care-services/home-healthcare-services-bangalore',
    cost: 'Long-term placements from ₹18,000/mo',
    tone: 'pearl',
  },
}

const TONE_BG: Record<string, string> = {
  sky: 'bg-gradient-to-br from-[#F2F7FB] via-[#E6F1FA] to-[#D6E8F4]',
  rose: 'bg-gradient-to-br from-[#FBF3F1] via-[#FFE2D6] to-[#FFD0C2]',
  sand: 'bg-gradient-to-br from-[#FAF6EE] via-[#F4E5C8] to-[#EFD8A8]',
  pearl: 'bg-gradient-to-br from-[#FFF6F2] via-[#FFF0EA] to-[#FFE4DA]',
}

const TONE_TEXT: Record<string, string> = {
  sky: 'text-[#0074C8]',
  rose: 'text-[#FF385C]',
  sand: 'text-[#B97A1F]',
  pearl: 'text-[#FF385C]',
}

export default function CareQuizView() {
  const [step, setStep] = useState(0) // 0..QUESTIONS.length-1, then -1 = result
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null))
  const [showResult, setShowResult] = useState(false)

  const tally = useMemo(() => {
    const t: Record<Bucket, number> = { nurse: 0, caretaker: 0, attendant: 0, combined: 0 }
    answers.forEach((ai, qi) => {
      if (ai === null) return
      const opt = QUESTIONS[qi].options[ai]
      Object.entries(opt.weights).forEach(([b, w]) => {
        t[b as Bucket] += w as number
      })
    })
    return t
  }, [answers])

  const winner: Bucket = useMemo(() => {
    const order: Bucket[] = ['combined', 'attendant', 'nurse', 'caretaker']
    let best: Bucket = 'caretaker'
    let bestScore = -1
    for (const b of order) {
      if (tally[b] > bestScore) {
        bestScore = tally[b]
        best = b
      }
    }
    return best
  }, [tally])

  const totalAnswered = answers.filter((a) => a !== null).length
  const progress = Math.round((totalAnswered / QUESTIONS.length) * 100)
  const r = showResult ? RESULTS[winner] : null

  const choose = (qi: number, oi: number) => {
    const next = [...answers]
    next[qi] = oi
    setAnswers(next)
    if (qi < QUESTIONS.length - 1) {
      setStep(qi + 1)
    } else {
      setShowResult(true)
    }
  }

  const reset = () => {
    setAnswers(Array(QUESTIONS.length).fill(null))
    setStep(0)
    setShowResult(false)
  }

  return (
    <CareSubpageShell
      currentLabel="Care Assessment Quiz"
      eyebrow="60 seconds · Bangalore"
      headlineLead="What care does"
      headlineAccent="your family actually need?"
      lede="Five quick questions. One clear recommendation. No commitment. No data shared until you decide to share it."
      enquirySource={PATH}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {!showResult ? (
            <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:p-10">
              {/* Progress */}
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                <span>
                  Question {step + 1} of {QUESTIONS.length}
                </span>
                <span>{progress}% complete</span>
              </div>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-[#FF385C] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Question */}
              <h2 className="mt-8 font-careSerif text-2xl font-medium leading-snug tracking-tight text-neutral-950 sm:text-3xl">
                {QUESTIONS[step].prompt}
              </h2>
              {QUESTIONS[step].helper ? (
                <p className="mt-2 text-sm text-neutral-500 sm:text-base">{QUESTIONS[step].helper}</p>
              ) : null}

              {/* Options */}
              <div className="mt-7 space-y-3">
                {QUESTIONS[step].options.map((opt, oi) => {
                  const selected = answers[step] === oi
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => choose(step, oi)}
                      className={`flex w-full items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition ${
                        selected
                          ? 'border-[#FF385C] bg-[#FBF3F1]'
                          : 'border-neutral-200 bg-white hover:border-neutral-900 hover:bg-neutral-50'
                      }`}
                    >
                      <span className="text-sm font-semibold text-neutral-900 sm:text-base">{opt.label}</span>
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                          selected
                            ? 'border-[#FF385C] bg-[#FF385C] text-white'
                            : 'border-neutral-300 bg-white text-transparent'
                        }`}
                      >
                        <CheckIcon className="h-3.5 w-3.5" aria-hidden />
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Back */}
              {step > 0 ? (
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
                  >
                    <ArrowLeftIcon className="h-4 w-4" aria-hidden />
                    Back
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            r && (
              <div
                className={`relative overflow-hidden rounded-[28px] border border-neutral-200 ${TONE_BG[r.tone]} p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-12`}
              >
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${TONE_TEXT[r.tone]}`}>
                  Recommended for you
                </p>
                <h2 className="mt-3 font-careSerif text-3xl font-medium leading-tight tracking-tight text-neutral-950 sm:text-5xl">
                  {r.title}
                </h2>
                <p className="mt-4 font-careSerif text-xl italic leading-snug text-neutral-800 sm:text-2xl">
                  {r.tagline}
                </p>
                <p className="mt-5 text-base leading-relaxed text-neutral-700 sm:text-lg">{r.lede}</p>

                <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {r.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 text-sm text-neutral-800"
                    >
                      <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${TONE_TEXT[r.tone]}`} aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm font-semibold text-neutral-900">{r.cost}</p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={r.href}
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black active:scale-[0.98]"
                  >
                    Explore this service
                    <ArrowRightIcon className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link
                    href={`/care-services/enquiry?source=${encodeURIComponent(PATH)}&suggested=${encodeURIComponent(r.title)}`}
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-neutral-900/30 bg-white/80 px-6 py-3 text-sm font-semibold text-neutral-900 backdrop-blur transition hover:bg-white"
                  >
                    Talk to a care advisor
                  </Link>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
                  >
                    <ArrowPathIcon className="h-4 w-4" aria-hidden />
                    Restart
                  </button>
                </div>

                {/* Score breakdown */}
                <details className="mt-8 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 text-sm text-neutral-700 backdrop-blur">
                  <summary className="cursor-pointer font-semibold">See how we got here</summary>
                  <ul className="mt-3 space-y-1.5">
                    {(['combined', 'caretaker', 'nurse', 'attendant'] as Bucket[]).map((b) => (
                      <li key={b} className="flex items-center justify-between gap-2">
                        <span className="capitalize">{b}</span>
                        <span className="font-mono text-xs text-neutral-500">score: {tally[b]}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-neutral-500">
                    The recommendation is the highest-scoring bucket. Ties favour combined, then attendant, then nurse, then caretaker.
                  </p>
                </details>
              </div>
            )
          )}
        </div>
      </section>

      {/* Why this is useful */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Why use the quiz"
            titleLead="Most families overspend"
            titleMuted="in the first two weeks."
            lede="Hiring a nurse when a caretaker would do, or a generalist when a trained attendant is needed — both are common and both are expensive. The quiz removes the guesswork."
            align="center"
          />
        </div>
      </section>

      {/* Direct line CTA */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-gradient-to-br from-[#FFF1EC] via-[#FFE4DA] to-[#FFD3C2] p-8 text-center sm:p-12">
          <h3 className="font-careSerif text-2xl font-medium leading-tight tracking-tight text-neutral-950 sm:text-3xl">
            Prefer to talk it through?
          </h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-700">
            A 5-minute call with a care advisor gives you the same recommendation, with the nuance of your
            specific situation.
          </p>
          <a
            href="tel:+918031411776"
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
