'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CareNeedsCovered, { type CareNeeds } from '../CareNeedsCovered'
import CaregiverScopeSection from '../CaregiverScopeSection'
import { getNestedService } from '@/lib/careServices/newServices'

const SERVICE = getNestedService('dementia-care-at-home-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

const CARE_NEEDS: CareNeeds = {
  conditionsCovered: ['Memory loss', 'Confusion', 'Wandering', 'Behavioural changes', 'Sundowning', 'Sleep disturbance'],
  careNeeds: [
    'Memory support and gentle orientation',
    'Supervision to prevent wandering',
    'Help with bathing, dressing, meals and medicines',
    'Calm handling of confusion, repetition, anger or fear',
    'Safety monitoring at home',
    'Emotional companionship through the day',
  ],
}

const CONDITION_INFO: ConditionInfo = {
  conditionName: 'Dementia',
  vitalStats: [
    {
      stat: '~8.8 million',
      detail: 'The LASI-DAD study estimates about 8.8 million Indians over 60 are living with dementia today.',
    },
    {
      stat: '60–70%',
      detail: 'Of all dementia cases, an estimated 60–70% are caused by Alzheimer’s disease (WHO).',
    },
    {
      stat: 'Rises with age',
      detail: 'Dementia risk climbs steeply after 65 — affecting roughly 1 in 10 people in that age group globally.',
    },
  ],
  causes: [
    'Alzheimer’s disease — by far the most common cause',
    'Vascular dementia after strokes or years of uncontrolled blood pressure',
    'Lewy body disease and Parkinson’s-related dementia',
    'Head injuries, including repeated falls in later life',
    'Long-term heavy alcohol use',
    'Some infections and deficiencies affecting the brain — a few causes are reversible, so diagnosis matters',
  ],
  symptoms: [
    'Repeating the same question or story within minutes',
    'Leaving the stove on, taps running, or doors unlocked',
    'Confusion about familiar streets, dates or festivals',
    'Searching for common words mid-sentence',
    'Losing interest in prayer, friends or favourite TV serials',
    'New suspicion — accusing family of hiding or stealing things',
    'Money and medicine mistakes from someone who was always careful',
    'Looking unkempt in someone who took pride in their appearance',
  ],
  whenYouNeedCare: [
    'They have wandered or got lost — even once is the signal',
    'Evenings bring agitation or restlessness the family can no longer settle',
    'Daily bathing, dressing or toileting now needs another pair of hands',
    'Medicines and gas safety can no longer be left unsupervised',
    'The family member doing the caring is exhausted, unwell or sleepless',
    'Sons and daughters are in other cities or abroad with no steady help at home',
  ],
}

/* hero stats — INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: '3 stages', label: 'matched care — early, moderate, advanced' },
  { value: '24/7', label: 'live-in cover available for wandering & sundowning' },
  { value: 'Same-day', label: 'placement attempts for urgent situations' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Stage-matched care',
    titleLead: 'Care matched to the stage,',
    titleMuted: 'not the calendar.',
    lede:
      'Dementia care should follow function, not the date of diagnosis. We re-match the caregiver as the condition changes.',
    bullets: [
      'Early stage — companionship, routine and gentle memory prompts to preserve independence',
      'Moderate stage — sundowning management, safe bathing, and wandering supervision',
      'Advanced stage — full live-in attendant care with feeding, mobility and dignity support',
      'Free re-assessment whenever the stage changes',
    ],
  },
  {
    eyebrow: 'Behaviours we are trained for',
    titleLead: 'The hard moments,',
    titleMuted: 'handled gently.',
    lede:
      'The behaviours that make families feel they can’t cope alone are exactly what our dementia caregivers are matched on.',
    bullets: [
      'Sundowning — calming evening routines that reduce late-day agitation',
      'Wandering — safe supervision, door awareness and gentle redirection',
      'Repetitive questions — patient, consistent reassurance every time',
      'Bathing & dressing resistance — dignity-first, fear-aware approaches',
      'Sleep disturbance — night-time routines that restore rest',
    ],
  },
  {
    eyebrow: 'Safe & familiar at home',
    titleLead: 'Why home is best',
    titleMuted: 'for memory care.',
    lede:
      'For most Bangalore families, familiar surroundings keep a parent calmer and more oriented than any facility can.',
    bullets: [
      'Familiar rooms, smells and photographs reduce confusion and anxiety',
      'One consistent caregiver instead of rotating facility staff',
      'Family stays meaningfully involved in daily decisions',
      'Lower agitation means fewer hospital visits and less medication',
    ],
  },
  {
    eyebrow: 'Support for the family',
    titleLead: 'Dementia is exhausting.',
    titleMuted: 'We notice.',
    lede:
      'The hardest part of dementia care is often the toll on the spouse and adult children carrying it.',
    bullets: [
      'Scheduled respite hours so family members can rest and work',
      'Daily WhatsApp updates — ideal for NRI and distant family',
      'Mood and behaviour log shared with your family doctor',
      'Free replacement caregiver if the match isn’t working',
    ],
  },
] as const

const FAQS = [
  {
    question: 'Is a regular caretaker enough for dementia care, or do we need a specialist?',
    answer:
      'Early-stage dementia can often be supported by an experienced caretaker familiar with cognitive decline. For moderate-to-advanced stages — with sundowning, wandering or aggression — you need a caregiver trained in dementia-specific behaviour management. In Bangalore, we match accordingly and re-match as the condition progresses.',
  },
  {
    question: 'How do I know which stage of dementia my parent is in?',
    answer:
      'Stages follow function, not the date of diagnosis. Ask: can they bathe themselves, manage medication, recognise close family, and move safely without supervision? The more “no” answers, the more advanced the stage. We help you assess this on a free 15-minute call.',
  },
  {
    question: 'How is sundowning and evening agitation handled?',
    answer:
      'The caregiver uses predictable lighting, an early light dinner, calming activity and avoids overstimulation after late afternoon. Most agitation reduces meaningfully within a couple of weeks of a consistent routine. Medication is treated as a last resort, not a first one.',
  },
  {
    question: 'What does dementia care at home cost in Bangalore?',
    answer:
      'Cost depends on the stage and intensity of care needed — day shifts and companionship hours are more affordable, while live-in and advanced-stage dementia care cost more because they need specialised, round-the-clock support. A free consultation gives you a precise, transparent estimate for your situation.',
  },
  {
    question: 'Can the same caregiver continue as the dementia progresses?',
    answer:
      'Where the caregiver has the experience for the next stage, we keep them for continuity — which matters enormously to someone with memory loss. If advanced needs require a trained attendant, we manage a smooth, briefed handover.',
  },
  {
    question: 'Do you cover wandering and night-time safety?',
    answer:
      'Yes. For seniors who wander or are restless at night, we recommend live-in cover so there is supervision around the clock. Caregivers are briefed on door awareness, gentle redirection and night routines that keep your parent safe and calm.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Dementia & Alzheimer’s Care at Home, Bangalore',
    medicalSpecialty: ['Geriatrics', 'Neurology'],
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `https://www.ezyhelpers.com${PATH}`,
    telephone: '+91-80-31411776',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  },
] as const

export default function DementiaCareAtHomeView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · Cognitive care at home"
      headlineLead="Dementia care, with dignity."
      headlineAccent="And a quiet, steady hand."
      lede={SERVICE.tagline + ' We place caregivers trained for agitation, repetition, sundowning and the long months when the disease asks more of the family than of the patient.'}
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director' }}
      lastUpdated="May 2026"
    >
      {/* Hero stats */}
      <section className="bg-white px-4 pt-4 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-[24px] border border-neutral-200 bg-care-50 p-6 text-center"
            >
              <div className="font-careSerif text-3xl font-medium tracking-tight text-care-500">{s.value}</div>
              <div className="mt-2 text-sm leading-snug text-neutral-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <ConditionInfoSection info={CONDITION_INFO} />

      <CareNeedsCovered needs={CARE_NEEDS} />

      {/* Rich sections */}
      {SECTIONS.map((sec, idx) => (
        <section
          key={sec.eyebrow}
          className={`px-4 py-20 sm:px-6 sm:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-care-50'}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              eyebrow={sec.eyebrow}
              titleLead={sec.titleLead}
              titleMuted={sec.titleMuted}
              lede={sec.lede}
            />
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sec.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                  <span className="text-sm leading-snug text-neutral-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CaregiverScopeSection />

      {/* FAQs */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Dementia care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="A caregiver, before the next hard night."
        headlineAccent="Not after."
        body="Tell us what your evenings look like. We respond within the hour, recommend a stage-appropriate caregiver, and start matching today."
        enquirySource={PATH}
        related={[
          { label: 'Bedridden Patient Care', href: '/care-services/bedridden-patient-care-at-home-bangalore' },
          { label: 'Parkinson’s Care', href: '/care-services/parkinsons-care-at-home-bangalore-elder' },
          { label: 'Companionship Care', href: '/care-services/elderly-companionship-care-bangalore' },
          { label: 'Elder Care at Home', href: '/care-services/elder-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
