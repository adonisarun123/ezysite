import Link from 'next/link'
import {
  CheckIcon,
  ShieldCheckIcon,
  HomeModernIcon,
  SparklesIcon,
  HeartIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SLUG = 'post-surgical-nursing-care-bangalore'
const PATH = `/care-services/${SLUG}`
const service = getNestedService(SLUG)!

/* heroStats, INVENTED illustrative figures for layout/AEO. Confirm before launch. */
const HERO_STATS = [
  { value: '3,500+', label: 'Post-op recoveries supported' },
  { value: '12-hr', label: 'Shifts available for cover' },
  { value: 'Daily', label: 'Clinical logs to your surgeon' },
] as const

const CARE_AREAS = [
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Vitals & recovery monitoring',
    body:
      'The days after discharge are when complications most often appear. Your nurse tracks temperature, BP, pulse, oxygen and pain, watching for the early signs that turn a smooth recovery into a readmission.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Incision & wound management',
    body:
      'Surgical incisions need clean, regular dressing and suture-line checks. We manage the wound to your surgeon’s instructions and flag any redness, discharge or opening immediately.',
  },
  {
    icon: SparklesIcon,
    title: 'Medication & pain management',
    body:
      'Post-surgical recovery often involves a precise medication and pain-relief schedule. Your nurse administers and tracks every dose so nothing is missed and pain stays controlled.',
  },
  {
    icon: HeartIcon,
    title: 'Mobility, hygiene & complication watch',
    body:
      'Safe early movement prevents clots and pneumonia. We support gentle mobility, hygiene and feeding, and keep watch for complications like infection, DVT or breathing trouble.',
  },
] as const

const INCLUDED = [
  'Continuous vitals monitoring with a daily clinical log',
  'Sterile incision and surgical-wound dressing',
  'Accurate medication and pain-management schedule',
  'Early detection of infection, clots and other complications',
  'Safe mobility support to prevent post-op complications',
  'Coordination with your surgeon and logs shared on request',
] as const

const RECOVERIES = [
  'Orthopaedic surgery, knee/hip replacement, fracture fixation',
  'Abdominal & general surgery',
  'Cardiac surgery & post-bypass recovery',
  'Cancer / oncology surgery',
  'Caesarean & gynaecological surgery',
  'Neurosurgery & spinal procedures',
] as const

const FAQS = [
  {
    question: 'What does post-surgical nursing care at home include?',
    answer:
      'It covers everything your recovery needs after discharge: vitals monitoring, sterile incision and wound dressing, medication and pain management, safe mobility support, and a constant watch for complications, all documented in a daily clinical log your surgeon can review.',
  },
  {
    question: 'How soon after discharge can a nurse start?',
    answer:
      'Ideally on discharge day. We prioritise post-surgical placements and attempt same-day or next-day cover so there is no gap between hospital and home care. Tell us your discharge date and we plan around it.',
  },
  {
    question: 'How much does post-surgical nursing cost in Bangalore?',
    answer:
      `Post-surgical nursing care at home in Bangalore starts at ${formatPriceWithNote('post-surgical-nursing').toLowerCase()}. Cost depends on the surgery, the level of monitoring required and the duration of cover, a consultation gives you a precise estimate.`,
  },
  {
    question: 'Can I get round-the-clock or 12-hour cover after surgery?',
    answer:
      'Yes. For the first days after major surgery many families choose 12-hour shifts or extended cover for close monitoring, then step down to daily visits as recovery progresses. We adjust the plan as the patient improves.',
  },
  {
    question: 'Will the nurse coordinate with my surgeon?',
    answer:
      'Yes. Our nurses follow your surgeon’s post-operative instructions and keep a daily clinical log of vitals, wound status and medication. On request these logs are shared with your surgeon so the recovery is monitored continuously.',
  },
  {
    question: 'What complications does the nurse watch for?',
    answer:
      'Common post-surgical risks include wound infection, deep-vein thrombosis (clots), chest infection or pneumonia, uncontrolled pain and fever. A trained nurse recognises early warning signs and escalates promptly, which is exactly how readmissions are prevented.',
  },
] as const

const RELATED = [
  { label: 'Wound Care & Dressing', href: '/care-services/wound-care-dressing-at-home-bangalore' },
  { label: 'Injections & Vitals Monitoring', href: '/care-services/injections-vitals-monitoring-bangalore' },
  { label: 'IV Therapy & Infusion', href: '/care-services/iv-therapy-at-home-bangalore' },
  { label: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Post-Surgical Nursing Care at Home, Bangalore',
    medicalSpecialty: 'Nursing',
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

export default function PostSurgicalNursingView() {
  return (
    <CareSubpageShell
      currentLabel={service.label}
      eyebrow="Bangalore · Post-surgical nursing at home"
      headlineLead="Recovery, monitored"
      headlineAccent="from discharge day."
      lede="Post-surgical nursing care at home in Bangalore, incision care, vitals monitoring, medication management and complication watch by GNM/B.Sc-verified nurses, with daily logs your surgeon can rely on."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
      reviewedBy={{ name: 'Sister Mary George', credential: 'B.Sc Nursing, Care Director', href: '/care-services/care-leadership' }}
      lastUpdated="May 2026"
    >
      <section className="bg-white px-4 pt-4 sm:px-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="rounded-[20px] border border-neutral-200 bg-care-50 px-6 py-5 text-center">
              <p className="font-careSerif text-2xl font-medium text-care-500 sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-neutral-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-neutral-200 bg-care-50 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-care-500">In one paragraph</p>
          <p className="mt-4 font-careSerif text-xl leading-snug text-neutral-900 sm:text-2xl">
            Post-surgical nursing at home in Bangalore puts a qualified nurse at the bedside during the{' '}
            <em className="italic text-care-500">riskiest window</em>, the days right after discharge, 
            for vitals monitoring, wound care, medication and complication watch. It is how families
            turn a hospital discharge into a safe recovery.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="What we manage" titleLead="The four pillars" titleMuted="of safe recovery." lede="Post-surgical care is about catching small problems before they become big ones. Here is where a nurse makes the difference." />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CARE_AREAS.map(({ icon: Icon, title, body }) => (
              <article key={title} className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-care-50 text-care-500 ring-1 ring-care-500/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-careSerif text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="What every shift includes" titleLead="Monitored, dressed," titleMuted="and logged." lede="Post-surgical nursing is a clinical handover from the ward to your home. Here is what the nurse delivers." />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {INCLUDED.map((b) => (
                  <li key={b} className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                    <span className="text-sm leading-snug text-neutral-800">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="Surgeries we support" titleLead="Recovery after" titleMuted="any major surgery." lede="From orthopaedic to cardiac to oncology surgery, we match a nurse experienced in your specific recovery." />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {RECOVERIES.map((r) => (
                  <li key={r} className="flex items-start gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3.5">
                    <HomeModernIcon className="mt-0.5 h-4 w-4 shrink-0 text-care-500" aria-hidden />
                    <span className="text-sm leading-snug text-neutral-800">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Related nursing services" titleLead="Often needed together." />
          <div className="mt-8 flex flex-wrap gap-3">
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-900 hover:text-neutral-950">
                {r.label}
                <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked" titleLead="Post-surgical care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="A safe recovery"
        headlineAccent="starts at discharge."
        body="Tell us the surgery and discharge date. We respond within the hour, match a nurse experienced in your recovery, and have cover ready when you get home."
        enquirySource={PATH}
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
