import {
  CheckIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  TruckIcon,
  SparklesIcon,
  CurrencyRupeeIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'patient-monitor-rental-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)!

const HERO_STATS: { num: string; label: string }[] = [
  { num: 'Multi-para', label: 'ECG, SpO₂, BP, pulse & temperature' },
  { num: 'ICU-at-home', label: 'Ideal for home critical-care setups' },
  { num: '24/7', label: 'Support, calibration & breakdown cover' },
]

const SECTIONS: {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
  bullets: string[]
}[] = [
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Types & parameters',
    body: 'Our multi-parameter monitors track the vitals your home-care team needs to watch continuously.',
    bullets: [
      'ECG / heart-rate continuous tracking',
      'SpO₂ (blood oxygen) monitoring',
      'Non-invasive blood pressure (NIBP)',
      'Temperature and respiration, with audible alarms',
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Who needs a patient monitor',
    body: 'Continuous vitals monitoring is essential for unstable or high-dependency patients at home.',
    bullets: [
      'Home-ICU and critical-care setups',
      'Post-cardiac-event and post-surgical patients',
      'Ventilator and high-dependency patients',
      'Palliative patients needing close observation',
    ],
  },
  {
    icon: CurrencyRupeeIcon,
    title: 'Rent vs buy',
    body: 'Renting suits defined recovery or ICU-at-home periods; buying suits long-term monitoring.',
    bullets: [
      'Rent for home-ICU and recovery periods',
      'Buy for long-term, ongoing monitoring',
      'Refundable security deposit on rentals',
      'Free pickup when the rental ends',
    ],
  },
  {
    icon: TruckIcon,
    title: 'Delivery & setup',
    body: 'We install, calibrate and demonstrate the monitor, and set the alarm limits with your care team.',
    bullets: [
      'Same-day delivery for urgent cases',
      'Calibration and alarm-limit setup',
      'Family / nurse trained on readings and alarms',
      'Delivery across 16+ Bangalore localities',
    ],
  },
  {
    icon: SparklesIcon,
    title: 'Hygiene & servicing',
    body: 'Each monitor is sanitised before delivery and serviced throughout the rental.',
    bullets: [
      'Hospital-grade sanitisation before dispatch',
      'Probes, cuffs and leads checked and disinfected',
      'Free repair or replacement on breakdown',
      'Periodic calibration checks during long rentals',
    ],
  },
]

const FAQS = [
  {
    question: 'What deposit is required to rent a patient monitor in Bangalore?',
    answer:
      'A refundable security deposit applies, set according to the monitor’s value. It is returned in full when the unit is collected in working condition at the end of the rental.',
  },
  {
    question: 'How quickly can a patient monitor be delivered and set up?',
    answer:
      'We offer same-day delivery, installation and calibration across Bangalore, prioritising urgent home-ICU and critical-care cases.',
  },
  {
    question: 'Which vital signs does the monitor track?',
    answer:
      'Our multi-parameter monitors track ECG / heart rate, SpO₂, non-invasive blood pressure, temperature and respiration, with configurable audible alarms for out-of-range readings.',
  },
  {
    question: 'Is the monitor sanitised and serviced?',
    answer:
      'Yes. Every monitor is sanitised to hospital-grade standards, its probes and cuffs disinfected, and it is calibrated before delivery. Free servicing and breakdown replacement are included.',
  },
  {
    question: 'Can I buy a patient monitor instead of renting?',
    answer:
      'Yes. We offer new and certified pre-owned patient monitors for purchase, which is more economical for long-term monitoring needs.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Patient Monitor Rental, Bangalore — EzyHelpers',
    description: nested.description,
    brand: { '@type': 'Brand', name: 'EzyHelpers' },
    areaServed: { '@type': 'City', name: 'Bangalore' },
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

export default function PatientMonitorRentalView() {
  return (
    <CareSubpageShell
      currentLabel={nested.label}
      eyebrow="Bangalore · Medical equipment rental"
      headlineLead="Patient monitor rental,"
      headlineAccent="for ICU-grade care at home."
      lede={nested.description}
      primaryCtaLabel="Get a patient monitor today"
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="rounded-[24px] border border-accent-200 bg-accent-50 p-7 text-center">
              <p className="font-careSerif text-3xl font-medium text-accent-600">{s.num}</p>
              <p className="mt-2 text-sm leading-snug text-neutral-700">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Everything you need to know"
            titleLead="The complete guide"
            titleMuted="to patient monitor rental."
          />
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-5">
          {SECTIONS.map(({ icon: Icon, title, body, bullets }) => (
            <article
              key={title}
              className="rounded-[24px] border border-neutral-200 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-accent-200">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-careSerif text-xl font-bold tracking-tight text-neutral-950">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">{body}</p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Patient monitor rental, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Watch every vital,"
        headlineAccent="right from home."
        body="Setting up ICU-at-home? We deliver, calibrate and configure a multi-parameter monitor the same day across Bangalore."
        enquirySource={PATH}
        primaryCtaLabel="Get a patient monitor today"
        related={[
          { label: 'Oxygen Concentrator Rental', href: '/care-services/oxygen-concentrator-rental-bangalore' },
          { label: 'BiPAP / CPAP Rental', href: '/care-services/bipap-cpap-rental-bangalore' },
          { label: 'Hospital Bed Rental', href: '/care-services/hospital-bed-rental-bangalore' },
          { label: 'All medical equipment', href: '/care-services/medical-equipment-rental-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
