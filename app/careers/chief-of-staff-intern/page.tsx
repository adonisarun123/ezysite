import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ChiefOfStaffApplicationForm from '@/components/careers/ChiefOfStaffApplicationForm'

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
  'Fix broken processes across sales, sourcing, and operations',
  'Build dashboards for helpers, placements, conversions, and replacements',
  'Work directly with founders on prioritisation and key decisions',
  'Own projects end to end — no handoff culture',
  'Spot bottlenecks, propose fixes, and ship',
]

const goodFit = [
  'You enjoy messy, ambiguous problems',
  'You take ownership without being asked',
  'You can move forward with incomplete information',
  'You have built or tried to build something — even small',
]

const notFit = [
  'You want a highly structured, typical internship',
  'You need constant step-by-step guidance',
  'You are mainly collecting company names for a résumé',
]

const youGet = [
  'Direct access to founders on real decisions',
  'Exposure to how a marketplace and ops-heavy business runs — not slide decks',
  'A credible path to full-time if you deliver',
  'Compressed learning: we aim for the density of several years in a few months, if you lean in',
]

const processSteps = [
  {
    step: '1',
    title: 'Application',
    body: 'Short form below. We read every answer — clarity of thinking matters more than perfect English.',
  },
  {
    step: '2',
    title: 'Assignment',
    body: 'Example: helper supply vs demand in Bangalore — one-page plan to improve supply. Or: sketch a dashboard for placements, replacements, and helper efficiency.',
  },
  {
    step: '3',
    title: 'Founder conversation',
    body: 'About 30 minutes. We care about judgment, energy, and ownership — not degrees or buzzwords.',
  },
  {
    step: '4',
    title: 'Trial week (sometimes)',
    body: 'One real task: fix a process, build a tracker, or improve a flow. Often we know quickly whether it is a fit.',
  },
]

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-sm font-medium text-primary-600">{children}</p>
}

export default function ChiefOfStaffInternPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#202124] antialiased">
      <Navbar />

      <Breadcrumb
        variant="minimal"
        separator="chevron"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: 'Chief of Staff Intern' },
        ]}
      />

      <main id="main-content">
        {/* Hero — light, typographic */}
        <section className="border-b border-[#dadce0] bg-white">
          <div className="mx-auto max-w-3xl px-6 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10">
            <SectionLabel>Founder&apos;s office · Internship</SectionLabel>
            <h1 className="mt-3 text-[2rem] font-medium leading-[1.2] tracking-tight sm:text-4xl sm:leading-[1.15]">
              Chief of Staff Intern
            </h1>
            <p className="mt-3 text-lg text-[#5f6368] sm:text-xl">
              Path to full-time role · High ownership · Real operations work
            </p>
            <p className="mt-8 text-base leading-relaxed text-[#3c4043] sm:text-lg">
              Three months, high intensity, real responsibility. If you perform, this is not a
              box-tick internship — we want future operators.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Bangalore · Hybrid', '3 months', 'Rolling applications'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-[#f1f3f4] px-3 py-1 text-sm text-[#3c4043]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Apply
              </a>
              <Link
                href="/careers"
                className="text-sm font-medium text-primary-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                All openings
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#5f6368]">
              Typical follow-up: within about two weeks if there is a fit. Check spam folders.
            </p>
          </div>
        </section>

        {/* Why */}
        <section className="border-b border-[#dadce0] bg-[#f8f9fa] py-14 sm:py-20">
          <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-10">
            <SectionLabel>Why this role exists</SectionLabel>
            <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-[1.75rem]">
              Real problems, limited founder bandwidth
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.7] text-[#3c4043]">
              <p>
                EzyHelpers connects households with reliable, verified domestic help at scale —
                operations, trust, and matching all have to work in the real world.
              </p>
              <p>
                Founders cannot personally run every initiative. This role exists for someone who
                treats the gap between strategy and execution as their job: fix what is broken,
                measure what matters, and ship.
              </p>
            </div>
          </div>
        </section>

        {/* Work */}
        <section className="border-b border-[#dadce0] bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-10">
            <SectionLabel>What you will do</SectionLabel>
            <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-[1.75rem]">
              Concrete work, not busywork
            </h2>
            <ul className="mt-10 space-y-4 border-l-2 border-[#e8eaed] pl-5">
              {workItems.map((text) => (
                <li key={text} className="text-base leading-relaxed text-[#3c4043]">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Fit */}
        <section className="border-b border-[#dadce0] bg-[#f8f9fa] py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
            <SectionLabel>Fit</SectionLabel>
            <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-[1.75rem]">
              We would rather have fewer strong applicants
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5f6368]">
              Being direct saves your time and ours. If the list on the right sounds closer to you,
              other programmes may be a better match — and that is okay.
            </p>
            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="rounded-2xl border border-[#dadce0] bg-white p-6 sm:p-8">
                <h3 className="text-base font-medium text-[#202124]">Likely a good fit</h3>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#3c4043] sm:text-base">
                  {goodFit.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-600" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#dadce0] bg-white p-6 sm:p-8">
                <h3 className="text-base font-medium text-[#202124]">Probably not a fit</h3>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#3c4043] sm:text-base">
                  {notFit.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#80868b]" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expectations */}
        <section className="border-b border-[#dadce0] bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-10">
            <SectionLabel>What to expect</SectionLabel>
            <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-[1.75rem]">
              Honest preview
            </h2>
            <div className="mt-8 rounded-2xl border border-[#dadce0] bg-[#f8f9fa] p-6 sm:p-8">
              <ul className="space-y-4 text-base leading-relaxed text-[#3c4043]">
                <li>The pace and ambiguity will feel intense at times.</li>
                <li>Some days the next step will not be obvious — we still expect you to move.</li>
                <li>If you want maximum comfort and predictability, this is not the right role.</li>
                <li className="pt-2 font-medium text-[#202124]">
                  If you want steep growth and real leverage, it might be.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="border-b border-[#dadce0] bg-[#f8f9fa] py-14 sm:py-20">
          <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-10">
            <SectionLabel>What you get</SectionLabel>
            <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-[1.75rem]">
              Why people take roles like this
            </h2>
            <ul className="mt-8 list-disc space-y-4 pl-5 text-base leading-relaxed text-[#3c4043] marker:text-primary-600">
              {youGet.map((t) => (
                <li key={t} className="pl-1">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-[#dadce0] bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-10">
            <SectionLabel>How hiring works</SectionLabel>
            <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-[1.75rem]">
              Simple stages, clear bar
            </h2>
            <ol className="mt-12 space-y-10">
              {processSteps.map((s) => (
                <li key={s.step} className="flex gap-4 sm:gap-5">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary-600 text-sm font-semibold text-primary-600"
                    aria-hidden
                  >
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-[#202124]">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5f6368] sm:text-[15px]">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-14 rounded-2xl border border-[#dadce0] bg-[#f8f9fa] p-6 sm:p-8">
              <h3 className="text-base font-medium text-[#202124]">How we score applications</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f6368]">
                Each application is rated out of 10 on four dimensions so review stays structured,
                not only intuitive.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {['Thinking', 'Execution', 'Ownership', 'Clarity'].map((d) => (
                  <li
                    key={d}
                    className="rounded-full bg-white px-3 py-1.5 text-sm text-[#3c4043] ring-1 ring-[#dadce0]"
                  >
                    {d} /10
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Application */}
        <section id="apply" className="scroll-mt-28 bg-[#f8f9fa] py-16 sm:py-24">
          <div className="mx-auto max-w-2xl px-6 sm:px-8 lg:px-10">
            <SectionLabel>Apply</SectionLabel>
            <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-[1.75rem]">
              Written answers matter most
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5f6368]">
              Take your time. Specific examples beat generic claims. Résumé is optional; we read
              what you write. Applications go to our team — not through automated CV screening for
              this role.
            </p>
            <div className="mt-10 rounded-2xl border border-[#dadce0] bg-white p-6 shadow-[0_1px_2px_rgba(60,64,67,0.08)] sm:p-10">
              <ChiefOfStaffApplicationForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
