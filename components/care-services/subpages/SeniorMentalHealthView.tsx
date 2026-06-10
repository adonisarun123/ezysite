'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SERVICE = getNestedService('senior-mental-health-counselling-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

/* hero stats — INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: 'At home', label: 'counselling in familiar, private surroundings' },
  { value: 'Dignity-first', label: 'support for depression, anxiety & grief' },
  { value: 'Family-aware', label: 'guidance for caregivers and relatives' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Recognising the signs',
    titleLead: 'Low mood in seniors',
    titleMuted: 'is not just “old age”.',
    lede:
      'Depression, anxiety and isolation are common — and treatable — in later life. The first step is recognising them rather than dismissing them.',
    bullets: [
      'Persistent sadness, withdrawal or loss of interest',
      'Sleep changes, low appetite or unexplained fatigue',
      'Anxiety, restlessness or excessive worry',
      'Grief after losing a spouse, friends or independence',
    ],
  },
  {
    eyebrow: 'Emotional support at home',
    titleLead: 'Counselling that comes',
    titleMuted: 'to your living room.',
    lede:
      'At-home emotional support removes the barriers of travel, stigma and unfamiliar clinics — care happens where your parent feels safe.',
    bullets: [
      'One-to-one emotional support and active listening',
      'Coping strategies for anxiety, grief and loneliness',
      'Gentle routine-building to restore structure and purpose',
      'A calm, private setting your parent already trusts',
    ],
  },
  {
    eyebrow: 'Whole-person wellbeing',
    titleLead: 'Mind and body,',
    titleMuted: 'cared for together.',
    lede:
      'Mental wellbeing improves alongside daily habits — sleep, activity, nutrition and social connection all matter.',
    bullets: [
      'Encouraging social engagement and meaningful activity',
      'Support for sleep hygiene and daily rhythm',
      'Coordination with companionship care where helpful',
      'Watchfulness for changes that need a doctor’s input',
    ],
  },
  {
    eyebrow: 'Support for the family',
    titleLead: 'Guidance for',
    titleMuted: 'the whole family.',
    lede:
      'Families often feel helpless watching a parent struggle emotionally. We help you understand what to do — and what not to.',
    bullets: [
      'Practical guidance on supporting a low or anxious parent',
      'Updates that keep distant and NRI families involved',
      'Escalation to clinical mental-health professionals when needed',
      'A non-judgemental, dignity-first approach throughout',
    ],
  },
] as const

const FAQS = [
  {
    question: 'What kind of mental health support do you provide for seniors at home?',
    answer:
      'We provide at-home emotional support and counselling-style care for depression, anxiety, grief and isolation — including active listening, coping strategies, routine-building and family guidance. For clinical diagnoses or medication, we coordinate with qualified mental-health professionals.',
  },
  {
    question: 'How do I know if my elderly parent needs mental health support?',
    answer:
      'Watch for persistent sadness, withdrawal, loss of interest, sleep or appetite changes, anxiety, or grief that isn’t easing. These are common in later life and respond well to support. A free consultation helps you decide the right level of care.',
  },
  {
    question: 'Is at-home counselling better than visiting a clinic for seniors?',
    answer:
      'For many seniors, yes. Home removes the stress of travel and the stigma some feel about clinics, and the familiar setting helps them open up. It also lets the family stay involved in the support.',
  },
  {
    question: 'What does senior mental health support cost in Bangalore?',
    answer:
      `At-home counselling for seniors in Bangalore typically starts from around ₹1,200 per session (${formatPriceWithNote(SERVICE.priceKey)}). A free consultation helps you choose the right frequency and combine it with companionship care if useful.`,
  },
  {
    question: 'Can this be combined with companionship or other elder care?',
    answer:
      'Yes, and it often works best that way. Emotional support paired with regular companionship, routine and activity tends to lift mood faster. We coordinate the services so your parent gets consistent, joined-up care.',
  },
  {
    question: 'What if my parent has a serious or worsening condition?',
    answer:
      'If we observe signs that need clinical attention, we escalate promptly and help you connect with qualified mental-health professionals or your doctor. Safety and appropriate care always come first.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Senior Mental Health & Counselling at Home, Bangalore',
    medicalSpecialty: ['Geriatrics', 'Psychiatric'],
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

export default function SeniorMentalHealthView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · Emotional wellbeing at home"
      headlineLead="Emotional wellbeing,"
      headlineAccent="treated with dignity."
      lede={SERVICE.tagline + ' At-home support for depression, anxiety, grief and isolation in seniors — gentle, private and respectful, in the place they feel safest.'}
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 pt-4 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="rounded-[24px] border border-neutral-200 bg-care-50 p-6 text-center">
              <div className="font-careSerif text-3xl font-medium tracking-tight text-care-500">{s.value}</div>
              <div className="mt-2 text-sm leading-snug text-neutral-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {SECTIONS.map((sec, idx) => (
        <section
          key={sec.eyebrow}
          className={`px-4 py-20 sm:px-6 sm:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-care-50'}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeader eyebrow={sec.eyebrow} titleLead={sec.titleLead} titleMuted={sec.titleMuted} lede={sec.lede} />
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sec.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                  <span className="text-sm leading-snug text-neutral-800">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Senior wellbeing, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Help your parent feel like"
        headlineAccent="themselves again."
        body="Tell us what you’re noticing. We respond within the hour, recommend the right support, and start matching today."
        enquirySource={PATH}
        related={[
          { label: 'Companionship Care', href: '/care-services/elderly-companionship-care-bangalore' },
          { label: 'Dementia Care', href: '/care-services/dementia-care-at-home-bangalore' },
          { label: 'Parkinson’s Care', href: '/care-services/parkinsons-care-at-home-bangalore-elder' },
          { label: 'Elder Care at Home', href: '/care-services/elder-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
