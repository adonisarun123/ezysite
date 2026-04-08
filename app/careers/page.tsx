import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { CAREERS_DEDICATED_PAGE_SLUGS, jobOpenings } from '@/lib/careersData'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Careers | EzyHelpers',
  description:
    'Join EzyHelpers. We are building trusted domestic help for Indian families — with verification, dignity for workers, and technology that fits real homes.',
  openGraph: {
    title: 'Careers at EzyHelpers',
    description:
      'Open roles in operations, product, engineering, and customer success. Help shape the future of home services in India.',
    url: 'https://www.ezyhelpers.com/careers',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/careers',
  },
}

const pillars = [
  {
    title: 'Trust by design',
    body: 'Verification, transparent matching, and support when things change — not growth at the cost of safety.',
  },
  {
    title: 'Dignity for workers',
    body: 'We treat domestic work as essential infrastructure. Fair processes and respect are non-negotiable.',
  },
  {
    title: 'Depth over noise',
    body: 'We prefer small teams, clear writing, and tools that ops and families can actually rely on.',
  },
]

const metrics = [
  { value: '10,000+', label: 'Families served' },
  { value: 'Multi-city', label: 'India footprint' },
  { value: '24–72 hrs', label: 'Typical match window' },
]

function formatPosted(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      <Navbar />

      <Breadcrumb
        items={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-black/[0.06] bg-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,116,200,0.08),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              Careers
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Build the future of{' '}
              <span className="text-primary-600">trusted home help</span>
              <span className="text-[#1d1d1f]"> in India.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#6e6e73] sm:text-xl">
              EzyHelpers connects verified domestic professionals with families who need
              reliable support. We are growing deliberately — with operations, product, and
              craft that match the seriousness of the category.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center rounded-full bg-[#1d1d1f] px-8 py-3.5 text-sm font-medium text-white transition hover:bg-black"
              >
                View open roles
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-3.5 text-sm font-medium text-[#1d1d1f] transition hover:border-black/20"
              >
                Our story
              </Link>
            </div>
          </div>
        </section>

        {/* Story / industry */}
        <section className="border-b border-black/[0.06] bg-[#fbfbfd] py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              Why this matters
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A massive market, still waiting for infrastructure.
            </h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <p className="text-[17px] leading-[1.6] text-[#6e6e73]">
                Domestic help touches almost every urban household — yet discovery,
                verification, and continuity remain broken. Families worry about safety
                and fit; workers deserve clear terms and respect. We believe technology
                and operations together can raise the bar for everyone.
              </p>
              <p className="text-[17px] leading-[1.6] text-[#6e6e73]">
                EzyHelpers is not chasing vanity metrics. We invest in verification,
                replacement support, and city teams who know local context. If you want
                to work on problems that blend empathy, logistics, and software — you
                will find real scope here.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics strip */}
        <section className="border-b border-black/[0.06] bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 sm:grid-cols-3 sm:px-8 lg:px-10">
            {metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <p className="font-display text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
                  {m.value}
                </p>
                <p className="mt-2 text-sm text-[#86868b]">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pillars */}
        <section className="border-b border-black/[0.06] bg-[#fbfbfd] py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              How we work
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Principles, not posters.
            </h2>
            <ul className="mt-14 space-y-0 divide-y divide-black/[0.06] rounded-2xl border border-black/[0.06] bg-white">
              {pillars.map((p) => (
                <li key={p.title} className="px-6 py-8 sm:px-8 sm:py-10">
                  <h3 className="font-display text-xl font-semibold text-[#1d1d1f]">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[#6e6e73]">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Open roles */}
        <section
          id="open-roles"
          className="scroll-mt-28 border-b border-black/[0.06] bg-white py-20 sm:py-28"
        >
          <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              Open positions
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Current openings
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[#6e6e73]">
              Each role links to a full description. We review every application; if
              there is mutual fit, we will get back within two weeks.
            </p>

            <ul className="mt-14 space-y-4">
              {jobOpenings.map((job) => (
                <li key={job.slug}>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="group flex flex-col gap-4 rounded-2xl border border-black/[0.06] bg-[#fbfbfd] p-6 transition duration-300 hover:border-black/[0.12] hover:bg-white hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] sm:flex-row sm:items-center sm:justify-between sm:p-8"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-semibold text-[#1d1d1f] group-hover:text-primary-600 sm:text-xl">
                          {job.title}
                        </h3>
                        {CAREERS_DEDICATED_PAGE_SLUGS.has(job.slug) ? (
                          <span className="rounded-full border border-primary-200 bg-primary-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-700">
                            Essay application
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 text-sm text-[#86868b]">
                        {job.team} · {job.location} · {job.type}
                      </p>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#6e6e73]">
                        {job.excerpt}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
                      <span className="text-xs text-[#86868b]">
                        Posted {formatPosted(job.postedAt)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                        Learn more
                        <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {jobOpenings.length === 0 && (
              <p className="mt-10 text-[17px] text-[#6e6e73]">
                We do not have published openings right now. Follow us on{' '}
                <a
                  href="https://www.linkedin.com/company/ezyhelpers"
                  className="text-primary-600 underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                or write to{' '}
                <a
                  href="mailto:info@ezyhelpers.com?subject=General%20careers%20inquiry"
                  className="text-primary-600 underline-offset-4 hover:underline"
                >
                  info@ezyhelpers.com
                </a>
                .
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1d1d1f] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Do not see the right role?
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-white/70">
              Send your profile and what you would like to build. We hire for curiosity
              and judgment — especially in operations and product.
            </p>
            <a
              href="mailto:info@ezyhelpers.com?subject=Careers%20%E2%80%94%20General%20application"
              className="mt-10 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[#1d1d1f] transition hover:bg-white/90"
            >
              Introduce yourself
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
