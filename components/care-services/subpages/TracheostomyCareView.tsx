import Link from 'next/link'
import {
  CheckIcon,
  ShieldCheckIcon,
  SparklesIcon,
  HeartIcon,
  ClockIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import FAQAccordion from '@/components/FAQAccordion'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'
import { getNestedService } from '@/lib/careServices/newServices'
import { formatPriceWithNote } from '@/lib/careServices/pricing'

const SLUG = 'tracheostomy-care-at-home-bangalore'
const PATH = `/care-services/${SLUG}`
const service = getNestedService(SLUG)!

/* heroStats, INVENTED illustrative figures for layout/AEO. Confirm before launch. */
const HERO_STATS = [
  { value: '24/7', label: 'Extended cover available' },
  { value: 'Specialist', label: 'Nurses trained in airway care' },
  { value: 'Sterile', label: 'Suctioning & tube hygiene' },
] as const

const CARE_AREAS = [
  {
    icon: ShieldCheckIcon,
    title: 'Airway suctioning',
    body:
      'Tracheostomy patients cannot always clear their own secretions. Our nurses perform sterile suctioning at the right frequency to keep the airway clear and breathing comfortable, a skilled, time-sensitive task.',
  },
  {
    icon: SparklesIcon,
    title: 'Tube & inner-cannula hygiene',
    body:
      'The tracheostomy tube and inner cannula need regular cleaning and, where prescribed, changing. We follow strict aseptic technique to prevent the infections that airway devices are prone to.',
  },
  {
    icon: HeartIcon,
    title: 'Stoma care & dressing',
    body:
      'The skin around the stoma needs gentle, clean care to stay healthy and free of irritation or infection. We dress and monitor the site, and teach the family what healthy skin should look like.',
  },
  {
    icon: ClockIcon,
    title: 'Respiratory monitoring',
    body:
      'We watch breathing rate, oxygen saturation and signs of distress or blockage. Early recognition of a problem with an artificial airway can be lifesaving, which is why trained eyes matter.',
  },
] as const

const INCLUDED = [
  'Sterile airway suctioning at the prescribed frequency',
  'Tracheostomy tube and inner-cannula cleaning and care',
  'Aseptic stoma-site dressing and skin protection',
  'Respiratory monitoring, rate, SpO₂ and signs of distress',
  'Humidification and secretion management support',
  'Family training and a daily clinical log for your doctor',
] as const

const SAFETY = [
  'A tracheostomy is an artificial airway, a blockage is a medical emergency that needs a trained responder.',
  'Sterile suctioning technique is the single biggest factor in preventing airway infections.',
  'Skilled stoma and tube hygiene prevents the skin breakdown and infection that complicate recovery.',
  'Continuous respiratory monitoring catches breathing trouble in its earliest, most treatable stage.',
] as const

const FAQS = [
  {
    question: 'What does tracheostomy care at home in Bangalore include?',
    answer:
      'It covers sterile airway suctioning, tracheostomy tube and inner-cannula cleaning, aseptic stoma-site dressing, respiratory monitoring, humidification and secretion management, all performed by nurses trained specifically in airway care, with a daily clinical log.',
  },
  {
    question: 'Is it safe to manage a tracheostomy at home?',
    answer:
      'Yes, when care is delivered by nurses trained in airway management and the home is set up correctly. Our nurses follow strict sterile technique, monitor breathing continuously, and know the emergency steps if the airway is at risk. We also train willing family members in basic care and warning signs.',
  },
  {
    question: 'How much does tracheostomy care cost at home in Bangalore?',
    answer:
      `Tracheostomy care at home in Bangalore starts at ${formatPriceWithNote('tracheostomy-care').toLowerCase()}. Because airway care often needs extended or round-the-clock cover, the total depends on the hours required, a consultation gives you a precise estimate for your situation.`,
  },
  {
    question: 'Can you provide 24-hour tracheostomy care?',
    answer:
      'Yes. Many tracheostomy patients need extended or 24-hour cover, especially in the early weeks or when secretions are heavy. We arrange 12-hour shifts or round-the-clock nursing with handovers, and step the cover down as the patient stabilises.',
  },
  {
    question: 'Are the nurses specifically trained for airway care?',
    answer:
      'Yes. Tracheostomy care requires specialist skill, so we match only nurses with verified GNM/B.Sc qualifications and demonstrated competence in suctioning, tube care and respiratory monitoring. This is not general nursing, it requires specific airway training.',
  },
  {
    question: 'Will the nurse teach our family how to help?',
    answer:
      'Where appropriate, yes. We train willing family members in basic suctioning, hygiene and, most importantly, recognising the warning signs of a blocked or displaced tube, so there is always someone confident at the bedside between nursing hours.',
  },
] as const

const RELATED = [
  { label: 'Catheter & Tube Care', href: '/care-services/catheter-care-at-home-bangalore' },
  { label: 'Post-Surgical Nursing', href: '/care-services/post-surgical-nursing-care-bangalore' },
  { label: 'Injections & Vitals Monitoring', href: '/care-services/injections-vitals-monitoring-bangalore' },
  { label: 'Home Nursing Care', href: '/care-services/home-nursing-care-bangalore' },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EzyHelpers, Tracheostomy Care at Home, Bangalore',
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

export default function TracheostomyCareView() {
  return (
    <CareSubpageShell
      currentLabel={service.label}
      eyebrow="Bangalore · Tracheostomy care at home"
      headlineLead="A clear airway,"
      headlineAccent="cared for with skill."
      lede="Tracheostomy care at home in Bangalore, sterile suctioning, tube and stoma hygiene, and respiratory monitoring by nurses trained specifically in airway care, with extended cover available."
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
            Tracheostomy care at home in Bangalore needs{' '}
            <em className="italic text-care-500">specialist airway nursing</em>, sterile suctioning,
            tube and stoma hygiene, and constant respiratory monitoring. With trained nurses and the
            right setup, a tracheostomy patient can recover safely at home, not on a ward.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="What we manage" titleLead="Airway care," titleMuted="done by specialists." lede="Tracheostomy care is skilled, time-sensitive work. We match only nurses trained specifically in airway management." />
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

      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="What care includes" titleLead="Sterile, monitored," titleMuted="and logged." lede="Airway care is unforgiving of shortcuts. Here is what a specialist nurse delivers." />
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
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Safety first" titleLead="Why airway care" titleMuted="needs a specialist nurse." align="center" />
          <ol className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {SAFETY.map((p, i) => (
              <li key={p} className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-[#F7F7F2] px-5 py-4">
                <span className="font-careSerif text-2xl font-medium text-care-500">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm leading-snug text-neutral-800 sm:text-base">{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-4 py-16 sm:px-6 sm:py-20">
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
          <SectionHeader eyebrow="Frequently asked" titleLead="Tracheostomy care, answered." />
          <div className="mt-10">
            <FAQAccordion faqs={FAQS as unknown as { question: string; answer: string }[]} tone="default" />
          </div>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Specialist airway care,"
        headlineAccent="set up safely at home."
        body="Tell us about the tracheostomy and the hours you need. We respond within the hour, match a specialist airway nurse, and arrange the right level of cover."
        enquirySource={PATH}
        related={RELATED as unknown as { label: string; href: string }[]}
      />
    </CareSubpageShell>
  )
}
