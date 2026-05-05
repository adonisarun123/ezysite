import {
  CheckIcon,
  MapPinIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/elderly-care-hsr-layout-bangalore'

const SECTORS = ['Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5', 'Sector 6', 'Sector 7'] as const

const NEARBY = [
  '27th Main',
  'BDA Complex',
  'Agara Lake',
  'Somasundarapalya',
  'Haralukunte',
  'Bommanahalli',
  'Begur Road',
  'Hosa Road',
] as const

const HOSPITALS = [
  'Manipal Hospital, Sarjapur Road',
  'Apollo Spectra, Sarjapur',
  'Sakra Premium Clinic, HSR',
  'Cloudnine, HSR',
  'Narayana Multispeciality, Bommanahalli',
  'Motherhood Hospital, Sarjapur',
] as const

const CARE_OPTIONS = [
  { title: 'Day shift companion', hours: '8 hours', fit: 'Working tech couples whose parents need company while they’re at the office.', price: '₹14,000–₹18,000 / mo' },
  { title: '12-hour caretaker', hours: '12 hours', fit: 'Substantial daily support — bath, meals, medication, evening companionship.', price: '₹18,000–₹24,000 / mo' },
  { title: 'Live-in caregiver', hours: '24×7', fit: 'Older parents living alone in HSR while children are abroad or working long hours.', price: '₹22,000–₹30,000 / mo' },
  { title: 'Trained attendant (live-in)', hours: '24×7', fit: 'Bedridden, post-stroke, or advanced-stage dementia.', price: '₹26,000–₹34,000 / mo' },
] as const

const FAQS = [
  {
    question: 'How quickly can you place a caregiver in HSR Layout?',
    answer:
      'HSR is one of our highest-density caregiver zones. Same-day placement is normal for most situations; 24–48 hours for complex matches.',
  },
  {
    question: 'Which hospitals do your caregivers coordinate with for HSR families?',
    answer:
      'Manipal Sarjapur, Apollo Spectra, Sakra HSR, Cloudnine, Narayana Bommanahalli, and Motherhood. We brief the caregiver on your preferred hospital and consultant.',
  },
  {
    question: 'Are caregivers familiar with HSR’s gated apartment complexes?',
    answer:
      'Yes — Adarsh, Sterling, Salarpuria, Vaswani, and the BDA complexes are all routine for our caregivers. We register them with apartment security in advance.',
  },
  {
    question: 'Do you support NRI families based abroad with parents in HSR?',
    answer:
      'Yes. Many of our HSR placements are NRI-coordinated. Daily WhatsApp updates, weekly video calls, and time-zone-aware emergency contact are standard.',
  },
  {
    question: 'Languages?',
    answer:
      'English, Hindi, Tamil, Kannada, Telugu, Malayalam — HSR is genuinely cosmopolitan. Language match is a primary criterion in our shortlisting.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'EzyHelpers — Elderly Care in HSR Layout, Bangalore',
    areaServed: { '@type': 'AdministrativeArea', name: 'HSR Layout, Bangalore' },
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

export default function ElderlyCareHsrView() {
  return (
    <CareSubpageShell
      currentLabel="Elderly Care · HSR Layout"
      eyebrow="HSR Layout · Bangalore"
      headlineLead="Elderly care, in HSR."
      headlineAccent="Across all seven sectors."
      lede="Verified, matched caregivers across HSR Layout’s seven sectors and surrounding micro-localities — typically reaching your home within 30 minutes."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-[#FBF3F1] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF385C]">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Elderly care across <em className="italic text-[#FF385C]">all seven HSR sectors</em>, briefed
            on Manipal Sarjapur, Apollo Spectra, Sakra HSR, and Cloudnine. Live-in placements from
            ₹22,000/month, day shifts from ₹14,000/month — language-matched, hospital-aware, family-led.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Care arrangements"
            titleLead="Four options"
            titleMuted="that fit HSR families."
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

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Sectors covered"
            titleLead="All of HSR Layout"
            titleMuted="and the surrounding cluster."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {SECTORS.map((s) => (
              <div
                key={s}
                className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm font-semibold text-neutral-900"
              >
                {s}
              </div>
            ))}
          </div>
          <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Surrounding micro-localities
          </h3>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {NEARBY.map((a) => (
              <div
                key={a}
                className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800"
              >
                <MapPinIcon className="h-4 w-4 shrink-0 text-[#FF385C]" aria-hidden />
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
            titleLead="Briefed on every"
            titleMuted="hospital HSR families use."
          />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HOSPITALS.map((h) => (
              <div key={h} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-4">
                <BuildingOffice2Icon className="h-5 w-5 shrink-0 text-[#0074C8]" aria-hidden />
                <span className="text-sm font-medium text-neutral-900">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="HSR care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="On your gate by morning."
        headlineAccent="From wherever you’re calling from."
        body="Tell us your sector and your parent’s situation. We respond within the hour."
        enquirySource={PATH}
        related={[
          { label: 'Elderly Care Services', href: '/care-services/elderly-care-services-bangalore' },
          { label: 'Whitefield care', href: '/care-services/elderly-care-whitefield-bangalore' },
          { label: 'Koramangala care', href: '/care-services/elderly-care-koramangala-bangalore' },
        ]}
      />
    </CareSubpageShell>
  )
}
