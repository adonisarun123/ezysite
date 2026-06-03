import Link from 'next/link'
import {
  AcademicCapIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ClockIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'
import { CareSubpageShell, CareSubpageClosingCTA, SectionHeader } from './CareSubpageShell'

const PATH = '/care-services/care-leadership'

const CREDS = [
  { label: 'B.Sc Nursing', detail: 'St John’s Medical College, Bangalore' },
  { label: '18+ years', detail: 'Clinical and home care experience' },
  { label: 'Geriatrics & Neurology', detail: 'Specialist focus areas' },
  { label: 'Care Director', detail: 'Leading EzyHelpers care division since launch' },
] as const

const RESPONSIBILITIES = [
  {
    icon: ShieldCheckIcon,
    title: 'Care quality oversight',
    body:
      'Reviews every escalation, conducts spot-checks on long-term placements, and signs off on protocols for high-dependency cases like post-stroke and bedridden patients.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Caregiver training',
    body:
      'Designs and reviews the training curriculum for trained attendants and dementia-experienced caregivers. Personally interviews any candidate placed on advanced cases.',
  },
  {
    icon: UserGroupIcon,
    title: 'Family escalation point',
    body:
      'For situations the family wants reviewed by a senior clinician — whether the caregiver is right, whether the level of care is right — the call comes here.',
  },
  {
    icon: HeartIcon,
    title: 'Editorial review',
    body:
      'Every condition page, cost guide, and decision page on this site is reviewed for clinical accuracy before publication and re-reviewed twice yearly.',
  },
] as const

const PHILOSOPHY = [
  '“Match the caregiver to the patient, not the patient to the caregiver who’s available.”',
  '“Family stays in charge. We give you better information and the right person — you make the call.”',
  '“Care is human work. Listening is half of it.”',
  '“If we wouldn’t place this caregiver with our own mother, we don’t place them.”',
] as const

const REVIEW_PROCESS = [
  {
    step: '1',
    title: 'Drafting',
    body: 'Writers prepare content based on real placement experience and current Indian clinical practice.',
  },
  {
    step: '2',
    title: 'Clinical review',
    body: 'Care Director reviews every page for accuracy. Anything contested is removed or qualified.',
  },
  {
    step: '3',
    title: 'Editorial review',
    body: 'A second reviewer checks tone, clarity, and that the content is honest about uncertainty.',
  },
  {
    step: '4',
    title: 'Bi-annual re-review',
    body: 'Pages are revisited every 6 months. Pricing, protocols, and references are updated.',
  },
] as const

const JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sister Mary George',
    jobTitle: 'Care Director, EzyHelpers',
    worksFor: { '@type': 'Organization', name: 'EzyHelpers' },
    alumniOf: 'St John’s Medical College, Bangalore',
    knowsAbout: ['Geriatric care', 'Home nursing', 'Dementia care', 'Post-stroke recovery'],
    url: `https://www.ezyhelpers.com${PATH}`,
  },
] as const

export default function CareLeadershipView() {
  return (
    <CareSubpageShell
      currentLabel="Care Leadership"
      eyebrow="Editorial · Clinical reviewer"
      headlineLead="The clinician behind"
      headlineAccent="every care page on this site."
      lede="Care work — and the words used to describe it — should answer to a real, named, qualified person. This is ours."
      enquirySource={PATH}
      jsonLd={JSONLD as unknown as Record<string, unknown>[]}
    >
      {/* Director profile card */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-neutral-200 bg-gradient-to-br from-primary-50 via-primary-50 to-primary-100 p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="aspect-square w-full max-w-[320px] overflow-hidden rounded-[28px] bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <div className="flex h-full w-full items-center justify-center font-careSerif text-7xl font-medium text-primary-500/60">
                  MG
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Care Director</p>
              <h2 className="mt-3 font-careSerif text-3xl font-medium leading-tight tracking-tight text-neutral-950 sm:text-4xl">
                Sister Mary George
              </h2>
              <p className="mt-2 text-base font-semibold text-neutral-700">B.Sc Nursing · 18+ years experience</p>
              <p className="mt-5 text-base leading-relaxed text-neutral-700 sm:text-lg">
                Mary leads care quality, caregiver training, and editorial review at EzyHelpers. Trained at
                St John’s Medical College, Bangalore, with nearly two decades of clinical and home-care
                experience across geriatrics and neurological recovery, she sets the protocols and personally
                reviews every escalation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Credentials" titleLead="What she brings" titleMuted="to your placement." />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CREDS.map((c) => (
              <div
                key={c.label}
                className="rounded-[24px] border border-neutral-200 bg-[#F7F7F2] p-6"
              >
                <h3 className="font-careSerif text-xl font-bold tracking-tight text-neutral-950">
                  {c.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What she does */}
      <section className="bg-[#F7F7F2] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The role"
            titleLead="What the Care Director"
            titleMuted="actually does."
            lede="Not a figurehead. A working clinician embedded in placement decisions."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {RESPONSIBILITIES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-[24px] border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 ring-1 ring-primary-500/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-careSerif text-lg font-bold tracking-tight text-neutral-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="In her own words"
            titleLead="Four things"
            titleMuted="that shape every placement."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PHILOSOPHY.map((q) => (
              <figure
                key={q}
                className="rounded-[24px] border border-neutral-200 bg-primary-50 p-7"
              >
                <span aria-hidden className="font-careSerif text-5xl leading-none text-primary-500/40">
                  &ldquo;
                </span>
                <blockquote className="mt-2 font-careSerif text-lg italic leading-snug text-neutral-900 sm:text-xl">
                  {q}
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial review process */}
      <section className="bg-[#F2F7FB] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Editorial standards"
            titleLead="How content"
            titleMuted="on this site is reviewed."
            lede="Every page describing a condition, a cost, or a care decision is clinically reviewed before publication and re-reviewed twice a year."
          />
          <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {REVIEW_PROCESS.map((s) => (
              <li
                key={s.step}
                className="flex h-full flex-col rounded-[24px] border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
              >
                <span className="font-careSerif text-3xl font-medium text-primary-500">{s.step}</span>
                <h3 className="mt-3 font-careSerif text-lg font-bold tracking-tight text-neutral-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What's reviewed */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Pages under review"
            titleLead="Sections this team"
            titleMuted="signs off on."
          />
          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { label: 'Stroke care', href: '/care-services/stroke-care-at-home-bangalore' },
              { label: 'Dementia & Alzheimer’s', href: '/care-services/dementia-alzheimers-care-bangalore' },
              { label: 'Bedridden patient care', href: '/care-services/bedridden-patient-care-bangalore' },
              { label: 'Post-surgery recovery', href: '/care-services/post-surgery-recovery-bangalore' },
              { label: 'Cancer & oncology home care', href: '/care-services/cancer-care-at-home-bangalore' },
              { label: 'Parkinson’s home care', href: '/care-services/parkinsons-care-at-home-bangalore' },
              { label: 'Home nursing cost', href: '/care-services/home-nursing-cost-bangalore' },
              { label: 'Nurse vs caretaker', href: '/care-services/home-nurse-vs-caretaker' },
            ].map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="flex items-center justify-between gap-2 rounded-2xl border border-neutral-200 bg-[#F7F7F2] px-5 py-4 transition hover:border-neutral-900 hover:bg-white"
                >
                  <span className="text-sm font-semibold text-neutral-900">{p.label}</span>
                  <CheckIcon className="h-4 w-4 text-[#1F8A4C]" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CareSubpageClosingCTA
        headlineLead="Care, with a clinician on the other end."
        headlineAccent="Always."
        body="If you want a senior clinician to help you assess the right care arrangement, our team will set up a 15-minute call."
        enquirySource={PATH}
        primaryCtaLabel="Talk to a senior clinician"
        related={[
          { label: 'Verification Process', href: '/care-services/caregiver-verification-process' },
          { label: 'Caregiver Training', href: '/care-services/caregiver-training' },
          { label: 'All Care Services', href: '/care-services' },
        ]}
      />
    </CareSubpageShell>
  )
}
