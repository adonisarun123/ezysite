import {
  CheckIcon,
  HeartIcon,
  SparklesIcon,
  PlusCircleIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import ConditionInfoSection, { type ConditionInfo } from '../ConditionInfoSection'
import CareNeedsCovered, { type CareNeeds } from '../CareNeedsCovered'
import CaregiverScopeSection from '../CaregiverScopeSection'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'cancer-palliative-care-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const SERVICE = getNestedService(SLUG)

const CARE_NEEDS: CareNeeds = {
  conditionsCovered: ['Treatment recovery', 'Weakness & fatigue', 'Advanced illness', 'Appetite loss'],
  careNeeds: [
    'Weakness and fatigue support',
    'Hygiene care',
    'Feeding support',
    'Medicine reminders',
    'Hospital visit assistance',
    'Monitoring appetite, vomiting, pain, fever and dehydration signs (alerts family/doctor)',
  ],
}

const CONDITION_INFO: ConditionInfo = {
  conditionName: 'Cancer & palliative needs',
  vitalStats: [
    {
      stat: '~1.4 million',
      detail: 'India records an estimated 1.4 million new cancer cases every year, according to ICMR projections.',
    },
    {
      stat: 'A leading cause',
      detail: 'Cancer is among the leading causes of death in India — and the need for home-based supportive care is growing with it.',
    },
    {
      stat: 'Any stage',
      detail: 'WHO recommends palliative (comfort-focused) care from early in a serious illness — alongside treatment, not only at the end.',
    },
  ],
  causes: [
    'Tobacco in any form — the largest preventable cause of cancer in India',
    'Heavy alcohol use, especially combined with tobacco',
    'Infections such as HPV (cervical) and hepatitis B/C (liver)',
    'Diet, obesity and physical inactivity',
    'Family history and inherited gene changes in some cancers',
    'Age — most cancers become more common after 50',
  ],
  symptoms: [
    'Persistent fatigue that rest doesn’t relieve',
    'Unexplained weight loss or loss of appetite',
    'Pain that is constant, or worse at night',
    'Nausea and taste changes during or after treatment',
    'A lump, ulcer or sore that doesn’t heal',
    'Ongoing changes in bowel or bladder habits',
    'Breathlessness or a persistent cough',
    'Low mood, anxiety or withdrawal — distress is a symptom too',
  ],
  whenYouNeedCare: [
    'Chemotherapy or radiation cycles leave them too weak for daily routines between hospital visits',
    'Pain, nausea or appetite loss needs someone watching and reporting to the oncology team daily',
    'The patient is increasingly bed-bound and needs repositioning, hygiene and feeding support',
    'The spouse or children carrying the care are visibly exhausted or unwell',
    'Night-time symptoms — pain, restlessness, breathlessness — leave the family sleepless and afraid',
    'Family members are in another city and want a steady, kind presence at home they can trust',
  ],
}

const HERO_STATS = [
  { value: 'Comfort-first', label: 'Care built around easing symptoms, not adding strain' },
  { value: 'Doctor-aligned', label: 'Coordinated gently with your oncology team' },
  { value: 'At home', label: 'Familiar surroundings, family close by' },
] as const

const SECTIONS = [
  {
    icon: SparklesIcon,
    title: 'What cancer palliative care at home involves',
    body:
      'Comfort-focused support for someone living with cancer — at any stage of treatment. Our caregivers help with daily needs, gentle symptom relief and emotional steadiness, working alongside your oncology team so home stays calm and cared-for.',
    bullets: [
      'Help with daily routine, hygiene and rest',
      'Gentle nutrition and hydration support',
      'Coordination with your treating doctor',
      'A calm, reassuring presence each day',
    ],
  },
  {
    icon: PlusCircleIcon,
    title: 'Easing treatment side-effects',
    body:
      'Cancer treatment can bring fatigue, nausea, low appetite and discomfort. We provide attentive comfort care that helps soften these effects, and we keep your medical team informed when symptoms need their attention.',
    bullets: [
      'Comfort support during and after chemotherapy',
      'Help managing nausea, fatigue and appetite',
      'Watchful symptom monitoring and gentle reporting',
      'Soothing routines that protect rest and dignity',
    ],
  },
  {
    icon: HeartIcon,
    title: 'Emotional and family support',
    body:
      'A cancer diagnosis touches the whole family. Our caregivers offer a warm, listening presence for the patient, respite for tired relatives, and gentle guidance — with counselling support available when it would help.',
    bullets: [
      'A patient, listening companion',
      'Respite so family carers can rest',
      'Clear, kind updates for relatives near and far',
      'Counselling support when wanted',
    ],
  },
  {
    icon: HandRaisedIcon,
    title: 'Dignity, always',
    body:
      'Every person deserves to feel respected and comfortable. We honour personal wishes, protect privacy and bring patience to every interaction — so your loved one feels cared for as a person, never as a patient alone.',
    bullets: [
      'Respect for personal and spiritual wishes',
      'Privacy and gentleness in every task',
      'Care paced to your loved one’s comfort',
      'Compassionate support across Bangalore',
    ],
  },
] as const

const FAQS = [
  {
    question: 'What is cancer palliative care at home?',
    answer:
      'It is comfort-focused care for someone living with cancer, provided in their own home. Rather than replacing cancer treatment, it sits alongside it — easing symptoms, supporting daily life and offering emotional comfort, in coordination with your oncology team.',
  },
  {
    question: 'Can palliative care start during active cancer treatment?',
    answer:
      'Yes. Comfort-focused support can begin at any point after diagnosis, including during chemotherapy or radiotherapy. Many families find that starting early makes treatment more bearable and home life calmer.',
  },
  {
    question: 'Will the caregiver help with chemotherapy side-effects?',
    answer:
      'Our caregivers provide attentive comfort care for common side-effects such as fatigue, nausea and low appetite, and they keep your medical team informed when symptoms need attention. Any changes to medication or treatment always remain with your oncologist. This page is for information and is not medical advice.',
  },
  {
    question: 'How do you support the family during this time?',
    answer:
      'We offer respite hours so family carers can rest, gentle guidance on what to expect, kind daily updates for relatives, and emotional support for everyone involved — because a cancer journey is carried by the whole family.',
  },
  {
    question: 'Is cancer palliative care at home available across Bangalore?',
    answer:
      'Yes. We arrange compassionate cancer palliative care at home across Bangalore. A gentle call with a care advisor will confirm coverage for your area and explain how we can help.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Begin with a calm, no-pressure conversation. We listen to your situation, explain what comfort care at home could look like, and move only at the pace that feels right for your family.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Cancer & Oncology Palliative Care at Home, Bangalore',
    medicalSpecialty: ['Oncology', 'PalliativeCare'],
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

export default function CancerPalliativeCareView() {
  return (
    <CareSubpageShell
      currentLabel="Cancer / Oncology Palliative Care"
      eyebrow="Bangalore · Comfort care at home"
      headlineLead="Comfort through the cancer journey."
      headlineAccent="Gently, at home."
      lede={
        SERVICE?.tagline ??
        'Comfort-focused support for someone living with cancer — easing symptoms, steadying the heart, and standing beside your whole family.'
      }
      primaryCtaLabel="Talk to a care advisor"
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
    >
      {/* Hero stats */}
      <section className="bg-white px-4 pb-4 pt-2 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-neutral-200 bg-care-50 px-5 py-5 text-center"
            >
              <p className="font-careSerif text-xl font-medium text-accent-600">{s.value}</p>
              <p className="mt-1 text-sm leading-snug text-neutral-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ConditionInfoSection info={CONDITION_INFO} />

      <CareNeedsCovered needs={CARE_NEEDS} />

      {/* Sections */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="How we help"
            titleLead="Care shaped around"
            titleMuted="comfort and dignity."
            lede="Compassionate, comfort-focused support for someone living with cancer — at home, in coordination with your medical team."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {SECTIONS.map(({ icon: Icon, title, body, bullets }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-accent-600/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-careSerif text-xl font-bold tracking-tight text-neutral-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CaregiverScopeSection />

      {/* FAQs */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Questions families ask" titleLead="Answered gently." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
          <p className="mt-8 text-sm leading-relaxed text-neutral-500">
            This page is for general information and is not medical advice. Decisions about treatment and
            medication always rest with your treating doctor.
          </p>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Whenever you are ready,"
        headlineAccent="we are here for your family."
        body="Reach out for a calm, compassionate conversation about comfort care at home — with no pressure at all."
        enquirySource={PATH}
        primaryCtaLabel="Request a compassionate consultation"
        related={[
          { label: 'Pain & Symptom Management', href: '/care-services/pain-symptom-management-at-home-bangalore' },
          { label: 'End-of-Life Care', href: '/care-services/end-of-life-care-at-home-bangalore' },
          { label: 'Hospice Care at Home', href: '/care-services/hospice-care-at-home-bangalore' },
          { label: 'Palliative Care at Home', href: '/care-services/palliative-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
