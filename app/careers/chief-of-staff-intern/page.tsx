import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ChiefOfStaffApplicationForm from '@/components/careers/ChiefOfStaffApplicationForm'
import {
  CheckIcon,
  XMarkIcon,
  ArrowRightIcon,
  BoltIcon,
  ChartBarIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: "Chief of Staff Intern → Full-Time | Founder's Office | EzyHelpers",
  description:
    '3 months. High intensity. Real ownership. Chief of Staff Intern in the Founder’s Office at EzyHelpers — domestic help, verified at scale. Apply with thoughtful written answers.',
  openGraph: {
    title: "Chief of Staff Intern → Full-Time | EzyHelpers Founder's Office",
    description:
      'High-intensity 3-month internship with a real path to full-time. Operations, data, and founder projects — not slide decks.',
    url: 'https://www.ezyhelpers.com/careers/chief-of-staff-intern',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/careers/chief-of-staff-intern',
  },
}

const workItems = [
  {
    icon: WrenchScrewdriverIcon,
    text: 'Fix broken processes across sales, sourcing, and operations',
  },
  {
    icon: ChartBarIcon,
    text: 'Build dashboards — helpers, placements, conversions, replacements',
  },
  {
    icon: UserGroupIcon,
    text: 'Work directly with founders on prioritisation and key decisions',
  },
  {
    icon: BoltIcon,
    text: 'Execute projects end to end — no “handoff culture”',
  },
  {
    icon: LightBulbIcon,
    text: 'Spot bottlenecks, propose fixes, and ship',
  },
]

const goodFit = [
  'You enjoy messy, ambiguous problems',
  'You take ownership without being asked',
  'You can move forward with incomplete information',
  'You have built or tried to build something — even small',
]

const notFit = [
  'You want a highly structured “typical internship”',
  'You need constant step-by-step guidance',
  'You are collecting logos for a resume only',
]

const youGet = [
  'Direct founder access',
  'Real business exposure — not PowerPoint theatre',
  'A real shot at conversion to full-time if you deliver',
  'Learning density we think feels like 2–3 years in 3 months — if you lean in',
]

const processSteps = [
  {
    step: '1',
    title: 'Application (screen for thinkers)',
    body: 'Short form below. We read every answer — quality of thinking matters more than polish.',
  },
  {
    step: '2',
    title: 'Assignment round',
    body: 'Example: “Helper supply vs demand in Bangalore — 1-page plan to improve supply.” Or: “Design a dashboard for placements, replacements, and helper efficiency.”',
  },
  {
    step: '3',
    title: 'Founder call (~30 min)',
    body: 'Clarity, energy, ownership. Not fancy English. Not degree flex.',
  },
  {
    step: '4',
    title: 'Trial week (optional)',
    body: 'One real task — fix a process, build a tracker, improve a flow. We often know within days.',
  },
]

export default function ChiefOfStaffInternPage() {
  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      <Navbar />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: "Chief of Staff Intern" },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#1d1d1f] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(0,116,200,0.25),transparent)]" />
          <div className="relative mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              Founder&apos;s office · Internship
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Chief of Staff Intern
              <span className="mt-2 block text-lg font-normal text-white/75 sm:text-xl lg:text-2xl">
                → Full-time role
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              3 months. High intensity. Real ownership.
              <span className="mt-3 block text-base text-white/65 sm:text-lg">
                If you perform — you don&apos;t stay an intern.
              </span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#1d1d1f] transition hover:bg-white/90"
              >
                Apply now
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3.5 text-sm font-medium text-white transition hover:border-white/40"
              >
                All openings
              </Link>
            </div>
          </div>
        </section>

        {/* Why exists */}
        <section className="border-b border-black/[0.06] bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              Why this role exists
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Real company. Real bandwidth limits.
            </h2>
            <div className="mt-10 space-y-6 text-[17px] leading-[1.65] text-[#6e6e73]">
              <p>
                At EzyHelpers, we&apos;re solving a hard, real-world problem — connecting households
                with reliable, verified domestic help at scale.
              </p>
              <p>
                This role exists because founders don&apos;t have the bandwidth to solve everything —
                but the problems still need solving. We&apos;re looking for someone who treats that
                gap as their job, not someone else&apos;s.
              </p>
            </div>
          </div>
        </section>

        {/* What you'll do */}
        <section className="border-b border-black/[0.06] bg-[#fbfbfd] py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              What you&apos;ll actually do
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              No fluff. Real work.
            </h2>
            <ul className="mt-12 space-y-6">
              {workItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/[0.06]">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </span>
                  <span className="pt-2 text-[17px] leading-relaxed text-[#374151]">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Filter */}
        <section className="border-b border-black/[0.06] bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              Who this is for
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              We want fewer, better applicants.
            </h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-8">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-emerald-950">
                  <CheckIcon className="h-5 w-5 text-emerald-600" />
                  You&apos;ll do well if
                </h3>
                <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-emerald-900/85">
                  {goodFit.map((t) => (
                    <li key={t} className="flex gap-3">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-red-200/70 bg-red-50/35 p-8">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-red-950">
                  <XMarkIcon className="h-5 w-5 text-red-600" />
                  Not for you if
                </h3>
                <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-red-900/85">
                  {notFit.map((t) => (
                    <li key={t} className="flex gap-3">
                      <XMarkIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Brutal honesty */}
        <section className="border-b border-black/[0.06] bg-[#1a1a1c] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Brutal honesty
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Read this before you apply.
            </h2>
            <div className="mt-10 space-y-6 border-l-2 border-primary-500 pl-6 text-[17px] leading-[1.7] text-white/75">
              <p>This will be intense.</p>
              <p>There will be ambiguity.</p>
              <p>There will be days where nothing feels clear.</p>
              <p className="pt-2 text-white">
                If you&apos;re looking for comfort — this is not it.
                <br />
                If you&apos;re looking for growth — this is exactly it.
              </p>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="border-b border-black/[0.06] bg-[#fbfbfd] py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              What you get
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Aspirational — but real.
            </h2>
            <ul className="mt-10 space-y-5">
              {youGet.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 rounded-xl border border-black/[0.06] bg-white px-5 py-4 text-[16px] leading-relaxed text-[#374151]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process + scorecard */}
        <section className="border-b border-black/[0.06] bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              How hiring works
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Built to find future operators — not “interns.”
            </h2>
            <ol className="mt-12 space-y-10">
              {processSteps.map((s) => (
                <li key={s.step} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1d1d1f] text-sm font-semibold text-white">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#1d1d1f]">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#6e6e73]">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-14 rounded-2xl border border-black/[0.08] bg-[#fbfbfd] p-8">
              <h3 className="font-display text-lg font-semibold text-[#1d1d1f]">
                Scorecard (how we review)
              </h3>
              <p className="mt-2 text-sm text-[#6e6e73]">
                Each application is scored out of 10 on four dimensions — so hiring stays
                objective, not gut-only.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {['Thinking', 'Execution', 'Ownership', 'Clarity'].map((d) => (
                  <li
                    key={d}
                    className="rounded-lg bg-white px-4 py-3 text-sm font-medium text-[#374151] ring-1 ring-black/[0.05]"
                  >
                    {d} — /10
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Application */}
        <section id="apply" className="scroll-mt-28 bg-[#fbfbfd] py-20 sm:py-28">
          <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              Application
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Thoughtful answers beat resumes.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#6e6e73]">
              We use your written responses as the main filter. Take your time. Specificity wins.
            </p>
            <div className="mt-12 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm sm:p-10">
              <ChiefOfStaffApplicationForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
