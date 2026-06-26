import {
  CheckIcon,
  MapPinIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/elderly-care-koramangala-bangalore'

const BLOCKS = ['1st Block', '2nd Block', '3rd Block', '4th Block', '5th Block', '6th Block', '7th Block', '8th Block'] as const

const NEARBY = [
  '80 Feet Road',
  'Sony Centre Signal',
  'Forum Mall area',
  'Jakkasandra',
  'Ejipura',
  'Madiwala',
  'BTM 1st Stage',
  'Wilson Garden',
] as const

const HOSPITALS = [
  'Manipal Hospital, Old Airport Road',
  'St John’s Medical College',
  'Sagar Hospital, Jayanagar',
  'HCG Cancer Centre',
  'Cloudnine, Jayanagar',
  'Kauvery Hospital, Electronic City Rd',
] as const

const CARE_OPTIONS = [
  { title: 'Day shift companion', hours: '8 hours', fit: 'Older couples or alone-living seniors needing daytime company while family is at work.', price: '₹14,000–₹18,000 / mo' },
  { title: '12-hour caretaker', hours: '12 hours', fit: 'Substantial daily support, bath, meals, medication, evening companionship.', price: '₹18,000–₹24,000 / mo' },
  { title: 'Live-in caregiver', hours: '24×7', fit: 'Older parents in independent homes or apartments while children are abroad.', price: '₹22,000–₹30,000 / mo' },
  { title: 'Trained attendant (live-in)', hours: '24×7', fit: 'Bedridden, post-stroke, or advanced-stage dementia.', price: '₹26,000–₹34,000 / mo' },
] as const

const KORAMANGALA_REALITY = [
  {
    title: 'Older established homes',
    body:
      'Many Koramangala seniors live in independent homes built in the 70s–90s. Layout, accessibility, and sometimes stairs change how care is delivered.',
  },
  {
    title: 'Mid-density apartment growth',
    body:
      'Newer mid-rise apartments (Brigade, Salarpuria, Adarsh) are common from the 5th and 6th blocks outward, gated access, lift, security desk.',
  },
  {
    title: 'Mature ageing-in-place population',
    body:
      'Koramangala has one of Bangalore’s longest-settled senior populations, many have lived here 30+ years. Care that respects familiarity matters here.',
  },
  {
    title: 'Hospital proximity',
    body:
      'Manipal Old Airport Road, St John’s, Sagar Hospital, and Cloudnine Jayanagar are all 10–15 minutes away. Caregivers know which one your family uses.',
  },
] as const

const FAQS = [
  {
    question: 'How quickly can you place a caregiver in Koramangala?',
    answer:
      'Same-day placement for most situations. Koramangala is centrally located and one of our highest-density caregiver zones.',
  },
  {
    question: 'Are caregivers familiar with Koramangala’s independent homes (vs apartments)?',
    answer:
      'Yes. Many of our Koramangala placements are in independent homes, Tata Silk Farm, KHB Colony, the early blocks. Caregivers are comfortable with both setup styles.',
  },
  {
    question: 'Which hospitals do your caregivers know for Koramangala patients?',
    answer:
      'Manipal Old Airport Road, St John’s Medical College, Sagar Hospital, HCG Cancer Centre, Cloudnine Jayanagar, and Kauvery Electronic City Road. We brief on your specific consultant.',
  },
  {
    question: 'My parent has lived in Koramangala for 40 years. Is the caregiver respectful of that?',
    answer:
      'Absolutely. We screen for warmth and patience, not just skill. Senior Koramangala residents have specific routines, neighbours, and preferences, caregivers we place treat that as the centre of their work, not a complication.',
  },
  {
    question: 'Languages?',
    answer:
      'English, Hindi, Tamil, Kannada, Telugu, Malayalam, Koramangala is genuinely multilingual. Language match is in our shortlisting criteria.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'EzyHelpers, Elderly Care in Koramangala, Bangalore',
    areaServed: { '@type': 'AdministrativeArea', name: 'Koramangala, Bangalore' },
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

export default function ElderlyCareKoramangalaView() {
  return (
    <CareSubpageShell
      currentLabel="Elderly Care · Koramangala"
      eyebrow="Koramangala · Bangalore"
      headlineLead="Elderly care, in Koramangala."
      headlineAccent="Across all eight blocks."
      lede="Verified, matched caregivers across Koramangala’s eight blocks, from independent homes in the older blocks to mid-rise apartments in the newer ones."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-care-50 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Koramangala has one of Bangalore’s <em className="italic text-care-500">most settled senior populations</em>{' '}
, many lived here 30+ years. We place caregivers who respect that, briefed on Manipal Old Airport
            Road and St John’s, matched to language and routine. Live-in placements from ₹22,000/month.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The Koramangala context"
            titleLead="Care that fits"
            titleMuted="how Koramangala lives."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {KORAMANGALA_REALITY.map((r) => (
              <article
                key={r.title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7"
              >
                <h3 className="font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Care arrangements"
            titleLead="Four options"
            titleMuted="that fit Koramangala families."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CARE_OPTIONS.map((c) => (
              <article
                key={c.title}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7"
              >
                <h3 className="font-careSerif text-xl font-bold tracking-tight text-neutral-950">{c.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">{c.hours}</p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">{c.fit}</p>
                <span className="mt-6 font-careSerif text-2xl font-medium text-neutral-950">{c.price}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Blocks covered"
            titleLead="All eight blocks"
            titleMuted="and surrounding areas."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {BLOCKS.map((b) => (
              <div
                key={b}
                className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm font-semibold text-neutral-900"
              >
                {b}
              </div>
            ))}
          </div>
          <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Adjoining areas
          </h3>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {NEARBY.map((a) => (
              <div
                key={a}
                className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800"
              >
                <MapPinIcon className="h-4 w-4 shrink-0 text-care-500" aria-hidden />
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F7FB] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Hospital coordination"
            titleLead="Briefed on hospitals"
            titleMuted="Koramangala families use."
          />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HOSPITALS.map((h) => (
              <div key={h} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-4">
                <BuildingOffice2Icon className="h-5 w-5 shrink-0 text-care-500" aria-hidden />
                <span className="text-sm font-medium text-neutral-900">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Koramangala care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="On your gate by morning."
        headlineAccent="From wherever you’re calling from."
        body="Tell us your block and your parent’s situation. We respond within the hour."
        enquirySource={PATH}
        related={[
          { label: 'Elderly Care Services', href: '/care-services/elderly-care-services-bangalore' },
          { label: 'Whitefield care', href: '/care-services/elderly-care-whitefield-bangalore' },
          { label: 'HSR Layout care', href: '/care-services/elderly-care-hsr-layout-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
