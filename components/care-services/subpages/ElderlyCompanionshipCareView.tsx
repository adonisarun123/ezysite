'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SERVICE = getNestedService('elderly-companionship-care-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

/* hero stats — INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: 'Flexible', label: 'hourly, day or live-in companionship' },
  { value: 'Warmth-first', label: 'caregivers screened for patience & kindness' },
  { value: 'Daily', label: 'updates for distant & NRI families' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Beating loneliness',
    titleLead: 'Company that keeps',
    titleMuted: 'your parent engaged.',
    lede:
      'Senior loneliness quietly affects mood, appetite and health. A warm companion brings conversation and connection back into the day.',
    bullets: [
      'Genuine conversation, shared stories and listening',
      'Meals taken together instead of alone',
      'Encouragement to stay socially and mentally active',
      'A friendly, familiar face your parent looks forward to',
    ],
  },
  {
    eyebrow: 'Daily engagement',
    titleLead: 'Purposeful days,',
    titleMuted: 'not empty hours.',
    lede:
      'Companions help seniors stay active in body and mind with gentle, enjoyable daily activities.',
    bullets: [
      'Walks, light exercise and outdoor time',
      'Hobbies, reading, music and games',
      'Help with phone calls, video calls and staying in touch',
      'Memory-friendly activities and gentle mental stimulation',
    ],
  },
  {
    eyebrow: 'Everyday support',
    titleLead: 'A helping hand',
    titleMuted: 'with daily life.',
    lede:
      'Alongside company, our caregivers provide the light, practical support that keeps daily life smooth.',
    bullets: [
      'Medication reminders and routine prompts',
      'Accompaniment to doctor visits and short errands',
      'Light meal preparation and tidying',
      'A watchful eye on wellbeing, with prompt updates to family',
    ],
  },
  {
    eyebrow: 'Peace of mind',
    titleLead: 'Reassurance',
    titleMuted: 'from anywhere.',
    lede:
      'For families who can’t be present every day — especially NRI families — a companion is steady reassurance that someone caring is there.',
    bullets: [
      'Daily WhatsApp updates and photos',
      'Flexible hours that fit your family’s routine',
      'Free replacement if the companion isn’t the right fit',
      'Easy escalation to higher levels of care if needs grow',
    ],
  },
] as const

const FAQS = [
  {
    question: 'What does an elderly companion actually do?',
    answer:
      'A companion provides conversation, shared meals, walks, hobbies and emotional support, plus light help such as medication reminders, errands and doctor-visit accompaniment. The focus is on engagement and wellbeing rather than medical or high-dependency care.',
  },
  {
    question: 'How is companionship care different from a full-time caretaker?',
    answer:
      'Companionship care centres on emotional wellbeing, social connection and light daily support. A full-time caretaker handles more intensive personal care — bathing, mobility, feeding. Many families start with companionship and scale up as needs change; we make that transition seamless.',
  },
  {
    question: 'What does companionship care cost in Bangalore?',
    answer:
      `Elderly companionship care in Bangalore typically starts from around ₹15,000/month (${formatPriceWithNote(SERVICE.priceKey)}), with flexible hourly and day-shift options that can cost less. A free consultation helps you choose the right pattern.`,
  },
  {
    question: 'Can I arrange companionship for just a few hours a day?',
    answer:
      'Yes. Companionship care is flexible — many families choose a few hours a day or specific days of the week. We arrange the schedule that suits your parent and can adjust it any time.',
  },
  {
    question: 'How do you ensure the companion is a good personality match?',
    answer:
      'We screen for warmth and patience as carefully as for skill, and we share a shortlist so your parent can meet the companion before confirming. If the personalities don’t click, we find a better match at no cost.',
  },
  {
    question: 'Is companionship care suitable for a parent with mild memory loss?',
    answer:
      'Yes. For early-stage memory issues, a patient companion who keeps routines, prompts gently and provides social engagement is often exactly what helps. If memory loss advances, we can move you to specialised dementia care.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Elderly Companionship Care at Home, Bangalore',
    medicalSpecialty: ['Geriatrics'],
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

export default function ElderlyCompanionshipCareView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · Companion care at home"
      headlineLead="Company, conversation,"
      headlineAccent="and good days again."
      lede={SERVICE.tagline + ' Warm, patient companions for seniors — conversation, meals together, walks and hobbies that keep loneliness away and bring the spark back.'}
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Companionship care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="A friendly face for your parent,"
        headlineAccent="starting this week."
        body="Tell us about your loved one. We respond within the hour, recommend a warm companion, and start matching today."
        enquirySource={PATH}
        related={[
          { label: 'Senior Mental Health & Counselling', href: '/care-services/senior-mental-health-counselling-bangalore' },
          { label: 'Dementia Care', href: '/care-services/dementia-care-at-home-bangalore' },
          { label: 'Post-Fall & Mobility Care', href: '/care-services/post-fall-mobility-care-bangalore' },
          { label: 'Elder Care at Home', href: '/care-services/elder-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
