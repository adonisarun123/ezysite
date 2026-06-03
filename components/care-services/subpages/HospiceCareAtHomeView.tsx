import {
  CheckIcon,
  HeartIcon,
  HomeModernIcon,
  UserGroupIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'hospice-care-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const SERVICE = getNestedService(SLUG)

const HERO_STATS = [
  { value: 'Coordinated', label: 'Medical, emotional and spiritual support, woven together' },
  { value: 'At home', label: 'Hospice-style care without leaving familiar surroundings' },
  { value: 'Whole-family', label: 'Comfort and guidance for everyone, not only the patient' },
] as const

const SECTIONS = [
  {
    icon: HomeModernIcon,
    title: 'What hospice care at home offers',
    body:
      'Hospice care brings together comfort, dignity and coordinated support for someone with a life-limiting illness — all within the familiarity of home. It focuses on quality of life, easing symptoms and surrounding the family with care.',
    bullets: [
      'Comfort-focused daily care at home',
      'Coordinated support around your loved one',
      'Familiar surroundings, family nearby',
      'Guided by your treating doctor’s plan',
    ],
  },
  {
    icon: PlusCircleIcon,
    title: 'Comfort and symptom support',
    body:
      'We help keep your loved one comfortable — supporting gentle positioning, easing discomfort and restlessness, and alerting your medical team when symptoms need attention.',
    bullets: [
      'Comfort care for pain and discomfort',
      'Help with feeding, hydration and rest',
      'Gentle positioning and soothing routines',
      'Watchful, kind monitoring',
    ],
  },
  {
    icon: HeartIcon,
    title: 'Emotional and spiritual care',
    body:
      'Hospice care holds the heart as well as the body. Our caregivers offer a warm, listening presence and respect personal and spiritual wishes, with counselling support available when families want it.',
    bullets: [
      'A patient, listening companion',
      'Respect for spiritual and religious wishes',
      'Calm reassurance through hard days',
      'Counselling support when wanted',
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Support for the whole family',
    body:
      'A life-limiting illness is carried by everyone who loves the person. We provide respite, gentle guidance and emotional support — including grief resources — so families can rest and stay close.',
    bullets: [
      'Respite hours so carers can rest',
      'Gentle guidance on what to expect',
      'Clear, kind updates for relatives',
      'Emotional and grief support',
    ],
  },
] as const

const FAQS = [
  {
    question: 'What is hospice care at home?',
    answer:
      'Hospice care at home is coordinated comfort care for someone with a life-limiting illness, delivered in their own home. It brings together physical comfort, emotional reassurance and spiritual support, with the family included throughout — all in coordination with your medical team.',
  },
  {
    question: 'How is hospice care different from end-of-life care?',
    answer:
      'The two overlap closely. Hospice care is a coordinated way of providing comfort-focused support for a life-limiting illness, which includes end-of-life care. Both prioritise dignity, comfort and family support at home.',
  },
  {
    question: 'Does hospice care at home include medical support?',
    answer:
      'Our caregivers provide comfort care and symptom support, and coordinate with your treating doctor and medical team, who remain responsible for clinical decisions and prescriptions. This page is for information and is not medical advice.',
  },
  {
    question: 'Can spiritual and religious needs be supported?',
    answer:
      'Yes. We honour your family’s spiritual, religious and cultural wishes with sensitivity, and gently follow your guidance on what matters most during this time.',
  },
  {
    question: 'How do you support the family?',
    answer:
      'We offer respite so family carers can rest, gentle guidance on what to expect, kind daily updates, and emotional support — including grief resources — for everyone involved.',
  },
  {
    question: 'Is hospice care at home available across Bangalore?',
    answer:
      'Yes. We arrange compassionate hospice care at home across Bangalore. A gentle, no-pressure call with a care advisor will confirm coverage and explain how we can help your family.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers — Hospice Care at Home, Bangalore',
    medicalSpecialty: ['Hospice', 'PalliativeCare'],
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

export default function HospiceCareAtHomeView() {
  return (
    <CareSubpageShell
      currentLabel="Hospice Care at Home"
      eyebrow="Bangalore · Comfort care at home"
      headlineLead="Full hospice support,"
      headlineAccent="without leaving home."
      lede={
        SERVICE?.tagline ??
        'Coordinated comfort, emotional reassurance and spiritual support for a life-limiting illness — all in the familiarity of home, with your family close by.'
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
              className="rounded-2xl border border-neutral-200 bg-primary-50 px-5 py-5 text-center"
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
            titleLead="Comfort and care,"
            titleMuted="gently coordinated."
            lede="Hospice-style support that holds the body, the heart and the family together — in the comfort of home."
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
        headlineAccent="we are here for your family."
        body="Reach out for a calm, compassionate conversation about hospice care at home — with no pressure at all."
        enquirySource={PATH}
        primaryCtaLabel="Request a compassionate consultation"
        related={[
          { label: 'End-of-Life Care', href: '/care-services/end-of-life-care-at-home-bangalore' },
          { label: 'Pain & Symptom Management', href: '/care-services/pain-symptom-management-at-home-bangalore' },
          { label: 'Cancer / Oncology Palliative Care', href: '/care-services/cancer-palliative-care-at-home-bangalore' },
          { label: 'Palliative Care at Home', href: '/care-services/palliative-care-at-home-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
