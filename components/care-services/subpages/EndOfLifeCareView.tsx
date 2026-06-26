import {
  CheckIcon,
  HeartIcon,
  HandRaisedIcon,
  UserGroupIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'end-of-life-care-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const SERVICE = getNestedService(SLUG)

const HERO_STATS = [
  { value: 'Dignity-first', label: 'Comfort and respect honoured above all' },
  { value: 'Family beside', label: 'Loved ones close, in familiar surroundings' },
  { value: 'Gentle presence', label: 'A calm, compassionate caregiver, day and night' },
] as const

const SECTIONS = [
  {
    icon: HeartIcon,
    title: 'What end-of-life care at home means',
    body:
      'In the final stages of a serious illness, end-of-life care focuses entirely on comfort, peace and dignity. Our caregivers provide gentle physical care and a calm presence at home, so your loved one can be surrounded by family and familiar things.',
    bullets: [
      'Gentle comfort and personal care',
      'A calm, reassuring presence',
      'Familiar surroundings, family close by',
      'Coordination with your treating doctor',
    ],
  },
  {
    icon: PlusCircleIcon,
    title: 'Comfort and symptom relief',
    body:
      'We help keep your loved one as comfortable as possible, supporting gentle positioning, easing restlessness and discomfort, and alerting your medical team when symptoms need their attention.',
    bullets: [
      'Comfort care for pain and discomfort',
      'Gentle positioning and soothing routines',
      'Watchful, kind monitoring',
      'Support guided by your medical team',
    ],
  },
  {
    icon: HandRaisedIcon,
    title: 'Honouring dignity and wishes',
    body:
      'These moments are deeply personal. We honour your loved one’s wishes, protect their privacy and bring gentleness to every act of care, so they feel respected and at peace.',
    bullets: [
      'Respect for personal and spiritual wishes',
      'Privacy and gentleness in every task',
      'Quiet, unhurried care',
      'Cultural and religious sensitivity',
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Standing with the family',
    body:
      'This is one of life’s hardest passages. We offer a steady presence, gentle guidance on what to expect, and emotional support, including grief resources, for everyone in the family.',
    bullets: [
      'A reachable, caring advisor',
      'Gentle guidance for the family',
      'Respite so loved ones can rest',
      'Emotional and grief support',
    ],
  },
] as const

const FAQS = [
  {
    question: 'What is end-of-life care at home?',
    answer:
      'End-of-life care is compassionate, comfort-focused support during the final stages of a serious illness, provided at home. The aim is comfort, peace and dignity, keeping your loved one settled and surrounded by family, in coordination with your medical team.',
  },
  {
    question: 'How is end-of-life care different from other care?',
    answer:
      'At this stage, care focuses entirely on comfort and dignity rather than recovery. Our caregivers provide gentle physical care, a calm presence and emotional support for the whole family, honouring personal and spiritual wishes throughout.',
  },
  {
    question: 'Will my loved one’s pain and symptoms be managed?',
    answer:
      'Our caregivers provide attentive comfort care to help keep your loved one settled, and they alert your medical team when symptoms need attention. Medication decisions always rest with your treating doctor. This page is for information and is not medical advice.',
  },
  {
    question: 'How do you support the family during this time?',
    answer:
      'We offer a steady, reachable presence, gentle guidance on what to expect, respite so family can rest, and emotional support, including grief resources, for everyone involved. You are never alone in this.',
  },
  {
    question: 'Can cultural and religious wishes be respected?',
    answer:
      'Yes. We honour your family’s cultural, religious and personal wishes with care and sensitivity, and we will gently follow your guidance on what matters most.',
  },
  {
    question: 'Is end-of-life care at home available across Bangalore?',
    answer:
      'Yes. We arrange compassionate end-of-life care at home across Bangalore. A gentle call with a care advisor will confirm coverage and explain how we can help your family.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, End-of-Life Care at Home, Bangalore',
    medicalSpecialty: ['PalliativeCare', 'Hospice'],
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `https://www.ezyhelpers.com${PATH}`,
    telephone: '+918031411776',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'HSR Layout',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560102',
      addressCountry: 'IN',
    },
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

export default function EndOfLifeCareView() {
  return (
    <CareSubpageShell
      currentLabel="End-of-Life Care"
      eyebrow="Bangalore · Comfort care at home"
      headlineLead="Gentle, dignified care"
      headlineAccent="in the final stages of life."
      lede={
        SERVICE?.tagline ??
        'Compassionate comfort care that puts dignity and peace first, keeping your loved one settled, and your family close, in the comfort of home.'
      }
      primaryCtaLabel="Talk to a care advisor"
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
    >
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

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="How we help"
            titleLead="Comfort, peace"
            titleMuted="and dignity."
            lede="Gentle, unhurried care for these tender days, focused entirely on your loved one’s comfort, and on supporting your family."
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
        headlineAccent="we will be gently by your side."
        body="Reach out for a calm, compassionate conversation. We will listen, and explain how dignified care at home can bring comfort to these days, with no pressure at all."
        enquirySource={PATH}
        primaryCtaLabel="Request a compassionate consultation"
        related={[
          { label: 'Hospice Care at Home', href: '/care-services/hospice-care-at-home-bangalore' },
          { label: 'Pain & Symptom Management', href: '/care-services/pain-symptom-management-at-home-bangalore' },
          { label: 'Cancer / Oncology Palliative Care', href: '/care-services/cancer-palliative-care-at-home-bangalore' },
          { label: 'Palliative Care at Home', href: '/care-services/palliative-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
