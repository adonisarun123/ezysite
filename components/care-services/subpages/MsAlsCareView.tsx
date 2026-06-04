'use client'

import { CheckIcon } from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CaregiverScopeSection from '../CaregiverScopeSection'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SERVICE = getNestedService('multiple-sclerosis-als-care-at-home-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`

const CONDITION_INFO: ConditionInfo = {
  conditionName: 'Multiple sclerosis & ALS',
  vitalStats: [
    {
      stat: 'A few per lakh',
      detail: 'MS is relatively uncommon in India — studies estimate a prevalence of a few per 100,000, lower than in Western countries.',
    },
    {
      stat: '20–40 yrs',
      detail: 'MS is most often diagnosed between 20 and 40, striking people in their most productive working and parenting years.',
    },
    {
      stat: '~2 per lakh',
      detail: 'ALS (motor neurone disease) affects an estimated 2 or so per 100,000 people, usually appearing between 50 and 70.',
    },
  ],
  causes: [
    'MS: the immune system attacking the protective myelin around nerves',
    'MS risk factors: genetics, low vitamin D, certain viral infections (such as EBV) and smoking',
    'ALS: progressive degeneration of the motor neurons that control muscles',
    'ALS: about 1 in 10 cases run in families; most have no known cause',
    'Both: neither is contagious, and neither is caused by anything the patient did wrong',
    'Both: exact triggers are still being researched — diagnosis needs a neurologist',
  ],
  symptoms: [
    'MS: blurred or painful vision in one eye, often an early sign',
    'MS: numbness, tingling or electric-shock sensations in limbs',
    'MS: overwhelming fatigue that rest doesn’t fully fix',
    'MS: balance problems, weakness or bladder urgency that come and go in relapses',
    'ALS: painless weakness in a hand or foot — dropping things, tripping',
    'ALS: muscle twitching (fasciculations) and visible muscle thinning',
    'ALS: slurring speech or trouble swallowing as it progresses',
    'Both: symptoms vary enormously person to person — track changes and tell the neurologist',
  ],
  whenYouNeedCare: [
    'An MS relapse has left mobility or vision worse, and recovery needs daily support at home',
    'Fatigue means cooking, bathing and errands are exhausting the patient or their spouse',
    'ALS weakness has made transfers, dressing and mealtimes unsafe to manage alone',
    'Swallowing changes mean meals now need trained, unhurried supervision',
    'Equipment is arriving — wheelchair, hospital bed, BiPAP — and the household needs steady hands',
    'The primary carer is burning out, or family is abroad and needs reliable daily updates',
  ],
}

/* hero stats — INVENTED / ILLUSTRATIVE figures for layout & marketing only.
 * Confirm against real operational data before launch. */
const HERO_STATS = [
  { value: 'Progressive', label: 'care planning that stays ahead of the condition' },
  { value: 'Energy-aware', label: 'routines that respect MS fatigue and ALS effort' },
  { value: '24/7', label: 'live-in cover as mobility and independence change' },
] as const

const SECTIONS = [
  {
    eyebrow: 'Progressive-condition planning',
    titleLead: 'Care that plans ahead,',
    titleMuted: 'not just for today.',
    lede:
      'MS and ALS change over months and years — sometimes in relapses, sometimes steadily. We plan the next stage of care before it is needed, so nothing catches the family off guard.',
    bullets: [
      'Regular re-assessment as strength, mobility and speech change',
      'Care plan stepped up gradually — hours, skills, equipment',
      'Smooth transition to live-in or trained-attendant care when needed',
      'Family kept informed and involved in every change',
    ],
  },
  {
    eyebrow: 'Fatigue & mobility',
    titleLead: 'Energy managed,',
    titleMuted: 'movement supported.',
    lede:
      'MS fatigue is invisible but real, and in ALS every transfer takes more effort as strength changes. Caregivers pace the day and provide safe, patient mobility support.',
    bullets: [
      'Energy-conserving daily routines with planned rest periods',
      'Safe assistance with walking, transfers and repositioning',
      'Support adapted as strength changes — from steadying arm to full transfer help',
      'Heat-awareness for MS, where overheating worsens symptoms',
    ],
  },
  {
    eyebrow: 'Feeding & communication',
    titleLead: 'Mealtimes kept safe,',
    titleMuted: 'voices kept heard.',
    lede:
      'Swallowing and speech are often affected in ALS and advanced MS. Caregivers provide swallowing-aware feeding support and patient, unhurried communication.',
    bullets: [
      'Swallowing-aware feeding — pace, posture and food consistency per clinical advice',
      'Patient communication support as speech becomes harder',
      'Use of communication boards or devices the family has in place',
      'Alertness to choking risk, with family and doctor informed of changes',
    ],
  },
  {
    eyebrow: 'Equipment & emotional support',
    titleLead: 'The right equipment,',
    titleMuted: 'and steady emotional support.',
    lede:
      'The right wheelchair or hospital bed changes daily life — and so does a caregiver who understands what the family is going through.',
    bullets: [
      'Equipment coordination — wheelchairs, hospital beds and aids via our rental service',
      'Safe use of hoists, transfer aids and pressure-relief equipment',
      'Emotional support and companionship for the patient through a hard diagnosis',
      'A listening ear and practical relief for family members too',
    ],
  },
] as const

const FAQS = [
  {
    question: 'How do MS and ALS care needs differ?',
    answer:
      'MS often comes in relapses with fatigue, balance and vision issues, and many people stay mobile for years — so care focuses on energy management and safety during flare-ups. ALS progressively affects muscle strength, speech and swallowing, so care emphasises transfers, swallowing-safe feeding and communication support. We match the caregiver and plan to the specific condition and stage.',
  },
  {
    question: 'How does care adapt as the condition progresses?',
    answer:
      'We re-assess regularly and step up the plan gradually — more hours, more hands-on transfer support, equipment like hospital beds or hoists, and eventually live-in or trained-attendant cover if needed. Because we plan ahead, changes happen smoothly rather than in a crisis.',
  },
  {
    question: 'What does MS or ALS care at home cost in Bangalore?',
    answer:
      `Live-in MS and ALS care in Bangalore typically starts from around ₹26,000/month (${formatPriceWithNote(SERVICE.priceKey)}) and varies with the stage, transfer support needed and shift pattern. A free consultation gives you a precise estimate.`,
  },
  {
    question: 'Can you arrange equipment like wheelchairs and hospital beds?',
    answer:
      'Yes. Through our medical equipment rental service we arrange wheelchairs, hospital beds, air mattresses and transfer aids in Bangalore, and the caregiver is trained to use them safely. Renting first lets you upgrade equipment as needs change without large upfront costs.',
  },
  {
    question: 'Can caregivers work alongside physiotherapists?',
    answer:
      'Yes, and they should. Our caregivers follow the home-exercise programme the physiotherapist sets, help with positioning between sessions, and report changes back. We can also arrange neuro physiotherapy at home through our own network.',
  },
  {
    question: 'Do you provide live-in care for MS and ALS in Bangalore?',
    answer:
      'Yes. As the condition advances, many families move to live-in cover for round-the-clock transfers, repositioning, feeding support and night-time safety. We also offer 12-hour day or night shifts in the earlier stages.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Multiple Sclerosis & ALS Care at Home, Bangalore',
    medicalSpecialty: ['Neurology', 'Geriatrics'],
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

export default function MsAlsCareView() {
  return (
    <CareSubpageShell
      currentLabel={SERVICE.label}
      eyebrow="Bangalore · MS & ALS care at home"
      headlineLead="Care that stays one step"
      headlineAccent="ahead of the condition."
      lede={SERVICE.tagline + ' Energy-aware routines, safe transfers, swallowing-aware feeding and equipment coordination — with a plan that adapts as needs change.'}
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director' }}
      lastUpdated="June 2026"
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

      <ConditionInfoSection info={CONDITION_INFO} />

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

      <CaregiverScopeSection />

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="MS & ALS care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Specialised neuro care,"
        headlineAccent="arranged with one call."
        body="Tell us about the diagnosis and where things stand today. We respond within the hour, recommend the right caregiver and equipment, and start matching today."
        enquirySource={PATH}
        related={[
          { label: 'Neuro Physiotherapy', href: '/care-services/neuro-physiotherapy-at-home-bangalore' },
          { label: 'Medical Equipment Rental', href: '/care-services/medical-equipment-rental-bangalore' },
          { label: 'Bedridden Patient Care', href: '/care-services/bedridden-patient-care-bangalore' },
          { label: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
