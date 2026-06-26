import {
  CheckIcon,
  BeakerIcon,
  UserGroupIcon,
  TruckIcon,
  SparklesIcon,
  CurrencyRupeeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'

const SLUG = 'oxygen-concentrator-rental-bangalore'
const PATH = `/care-services/${SLUG}`
const nested = getNestedService(SLUG)!

const HERO_STATS: { num: string; label: string }[] = [
  { num: '5L & 10L', label: 'Concentrator capacities to suit any prescription' },
  { num: '24/7', label: 'Emergency support & breakdown replacement' },
  { num: 'Same-day', label: 'Setup, training and delivery in Bangalore' },
]

const SECTIONS: {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
  bullets: string[]
}[] = [
  {
    icon: BeakerIcon,
    title: 'Types & models available',
    body: 'We rent and sell oxygen concentrators sized to your doctor’s prescribed flow rate.',
    bullets: [
      '5 LPM concentrators for standard oxygen therapy',
      '10 LPM concentrators for higher-flow needs',
      'Portable concentrators for mobility (on request)',
      'Includes humidifier bottle, nasal cannula and tubing',
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Who needs an oxygen concentrator',
    body: 'A concentrator delivers continuous medical oxygen at home without refilling cylinders.',
    bullets: [
      'COPD, asthma and chronic respiratory patients',
      'Post-COVID and pneumonia recovery',
      'Patients on long-term oxygen therapy',
      'Palliative and home-ICU setups',
    ],
  },
  {
    icon: CurrencyRupeeIcon,
    title: 'Rent vs buy',
    body: 'Renting is ideal for recovery; buying suits patients on permanent oxygen therapy.',
    bullets: [
      'Rent for short-term respiratory recovery',
      'Buy (new or certified pre-owned) for long-term therapy',
      'Refundable security deposit on rentals',
      'Free pickup at the end of the rental',
    ],
  },
  {
    icon: TruckIcon,
    title: 'Delivery & setup',
    body: 'We install the machine, set the prescribed flow rate and train the family to use it safely.',
    bullets: [
      'Same-day delivery for urgent cases',
      'Flow-rate set to the doctor’s prescription',
      'Family trained on safe operation and alarms',
      'Delivery across 16+ Bangalore localities',
    ],
  },
  {
    icon: SparklesIcon,
    title: 'Hygiene & servicing',
    body: 'Each unit is sanitised before delivery and serviced throughout your rental.',
    bullets: [
      'Hospital-grade sanitisation before dispatch',
      'Filters cleaned and checked before delivery',
      'Free repair or replacement on breakdown',
      'Periodic maintenance during long rentals',
    ],
  },
  {
    icon: ClockIcon,
    title: '24/7 support',
    body: 'Respiratory needs are urgent, our helpline runs round the clock.',
    bullets: [
      'Round-the-clock helpline for setup and faults',
      'Rapid replacement if a unit fails',
      'Guidance on flow rate and maintenance',
      'Backup options for power outages on request',
    ],
  },
]

const FAQS = [
  {
    question: 'Do I need a deposit to rent an oxygen concentrator in Bangalore?',
    answer:
      'Yes, a refundable security deposit applies and varies between 5L and 10L machines. It is returned in full when the concentrator is collected in working condition at the end of the rental.',
  },
  {
    question: 'How fast can you deliver an oxygen concentrator?',
    answer:
      'We offer same-day delivery and setup across Bangalore, and we prioritise emergency respiratory cases so oxygen therapy can begin without delay.',
  },
  {
    question: 'Should I choose a 5L or 10L concentrator?',
    answer:
      'It depends on your doctor’s prescribed oxygen flow rate. A 5 LPM machine suits standard therapy, while 10 LPM is needed for higher-flow requirements. Share the prescription and our advisors will set you up with the right unit.',
  },
  {
    question: 'Is the concentrator sanitised and serviced?',
    answer:
      'Yes. Every unit is sanitised to hospital-grade standards and its filters checked before delivery, and we provide free servicing and breakdown replacement during the rental.',
  },
  {
    question: 'Can I buy an oxygen concentrator instead of renting?',
    answer:
      'Yes. We offer new and certified pre-owned concentrators for purchase, which is more economical for patients on long-term oxygen therapy. We will help you compare rent versus buy.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Oxygen Concentrator Rental, Bangalore, EzyHelpers',
    name: 'Oxygen Concentrator Rental, Bangalore, EzyHelpers',
    ...(nested.description ? { description: nested.description } : {}),
    provider: {
      '@type': 'LocalBusiness',
      name: 'EzyHelpers',
      url: 'https://www.ezyhelpers.com/',
      telephone: '+918031411776',
      image: 'https://www.ezyhelpers.com/ezyhelper_logo_new.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'HSR Layout',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560102',
        addressCountry: 'IN',
      },
    },
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `https://www.ezyhelpers.com${PATH}`,
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

export default function OxygenConcentratorRentalView() {
  return (
    <CareSubpageShell
      currentLabel={nested.label}
      eyebrow="Bangalore · Medical equipment rental"
      headlineLead="Oxygen concentrator rental,"
      headlineAccent="set up and supported 24/7."
      lede={nested.description}
      primaryCtaLabel="Get oxygen support today"
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
            titleMuted="to oxygen concentrator rental."
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Oxygen rental, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Oxygen at home,"
        headlineAccent="when every breath counts."
        body="Share the prescribed flow rate. We sanitise, deliver, install and train your family, with 24/7 support across Bangalore."
        enquirySource={PATH}
        primaryCtaLabel="Get oxygen support today"
        related={[
          { label: 'Respiratory & COPD Care', href: '/care-services/respiratory-copd-care-at-home-bangalore' },
          { label: 'BiPAP / CPAP Rental', href: '/care-services/bipap-cpap-rental-bangalore' },
          { label: 'Patient Monitor Rental', href: '/care-services/patient-monitor-rental-bangalore' },
          { label: 'Hospital Bed Rental', href: '/care-services/hospital-bed-rental-bangalore' },
          { label: 'All medical equipment', href: '/care-services/medical-equipment-rental-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
