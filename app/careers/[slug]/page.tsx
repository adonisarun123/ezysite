import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { CAREERS_DEDICATED_PAGE_SLUGS, getJobBySlug, jobOpenings } from '@/lib/careersData'
import ApmApplicationForm from '@/components/careers/ApmApplicationForm'
import SalesExecutiveApplicationForm from '@/components/careers/SalesExecutiveApplicationForm'
import CareersRoleApplicationForm from '@/components/careers/CareersRoleApplicationForm'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOffice2Icon,
  BriefcaseIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  SparklesIcon,
  StarIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'
import { JobPostingSchema } from '@/components/schema'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return jobOpenings
    .filter((j) => !CAREERS_DEDICATED_PAGE_SLUGS.has(j.slug))
    .map((j) => ({ slug: j.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const job = getJobBySlug(slug)
  if (!job) {
    return { title: 'Role not found | EzyHelpers' }
  }
  const url = `https://www.ezyhelpers.com/careers/${job.slug}`
  return {
    title: `${job.title} | Careers at EzyHelpers`,
    description: job.excerpt,
    openGraph: {
      title: `${job.title} | EzyHelpers`,
      description: job.excerpt,
      url,
      type: 'website',
      siteName: 'EzyHelpers',
      locale: 'en_IN',
    },
    alternates: { canonical: url },
  }
}

function formatPosted(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

// Brand-aligned category theming — only primary blue, secondary blue, and trust teal.
// All gradients use deep, saturated shades for strong white-text contrast.
const CATEGORY_THEME: Record<
  string,
  { gradient: string; chip: string; chipBorder: string; accent: string }
> = {
  "Founder's Office": {
    gradient: 'from-primary-800 via-primary-700 to-primary-600',
    chip: 'bg-primary-50 text-primary-700',
    chipBorder: 'border-primary-200',
    accent: 'text-primary-600',
  },
  'Product & Engineering': {
    gradient: 'from-primary-700 via-primary-600 to-secondary-700',
    chip: 'bg-secondary-50 text-secondary-700',
    chipBorder: 'border-secondary-200',
    accent: 'text-secondary-700',
  },
  Sales: {
    gradient: 'from-primary-700 via-primary-600 to-secondary-600',
    chip: 'bg-primary-50 text-primary-700',
    chipBorder: 'border-primary-200',
    accent: 'text-primary-600',
  },
  Operations: {
    gradient: 'from-primary-700 via-primary-600 to-trust-700',
    chip: 'bg-primary-50 text-primary-700',
    chipBorder: 'border-primary-200',
    accent: 'text-primary-600',
  },
  'City Leadership': {
    gradient: 'from-primary-800 via-primary-700 to-secondary-700',
    chip: 'bg-primary-50 text-primary-800',
    chipBorder: 'border-primary-200',
    accent: 'text-primary-700',
  },
  'People & HR': {
    gradient: 'from-trust-700 via-trust-600 to-primary-700',
    chip: 'bg-trust-50 text-trust-700',
    chipBorder: 'border-trust-200',
    accent: 'text-trust-700',
  },
  'Care Services': {
    gradient: 'from-trust-700 via-trust-600 to-primary-700',
    chip: 'bg-trust-50 text-trust-700',
    chipBorder: 'border-trust-200',
    accent: 'text-trust-700',
  },
  'Specialist Care': {
    gradient: 'from-trust-800 via-trust-700 to-primary-700',
    chip: 'bg-trust-50 text-trust-700',
    chipBorder: 'border-trust-200',
    accent: 'text-trust-700',
  },
  'Business Development': {
    gradient: 'from-primary-700 via-primary-600 to-trust-700',
    chip: 'bg-primary-50 text-primary-700',
    chipBorder: 'border-primary-200',
    accent: 'text-primary-600',
  },
  'Marketing & Content': {
    gradient: 'from-secondary-700 via-primary-600 to-primary-700',
    chip: 'bg-secondary-50 text-secondary-700',
    chipBorder: 'border-secondary-200',
    accent: 'text-secondary-700',
  },
}

const DEFAULT_THEME = CATEGORY_THEME.Operations

export default async function CareerJobPage({ params }: Props) {
  const { slug } = await params
  const job = getJobBySlug(slug)
  if (!job) notFound()

  const theme = CATEGORY_THEME[job.category] ?? DEFAULT_THEME

  const applyEmail = job.applyEmail ?? 'info@ezyhelpers.com'
  const applyParams = new URLSearchParams({ subject: `Application: ${job.title}` })
  if (job.applyBodyPrompt) {
    applyParams.set('body', job.applyBodyPrompt)
  }
  const applyHref = `mailto:${applyEmail}?${applyParams.toString()}`
  const showInlineForm = Boolean(job.hasApplicationForm)
  const inlineFormKind = job.applicationForm ?? 'apm'

  // Related roles from the same category (excluding current)
  const relatedRoles = jobOpenings
    .filter((j) => j.category === job.category && j.slug !== job.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <JobPostingSchema
        title={job.title}
        description={job.excerpt}
        datePosted={job.postedAt}
        validThrough="2027-01-01"
        employmentType={job.type === 'Internship' ? 'INTERN' : 'FULL_TIME'}
        jobLocation={{ addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' }}
      />
      <Navbar />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: job.title },
        ]}
      />

      <main className="pb-16 sm:pb-24">
        {/* ============== HERO ============== */}
        <section
          className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient} text-white`}
        >
          {/* Subtle dot pattern (low opacity so it doesn't interfere with text) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* Soft dark vignette for guaranteed text contrast */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15" />
          <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-white/[0.07] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-white/[0.07] blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm ring-1 ring-white/20 transition hover:bg-white/20"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to all openings
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">
                <BriefcaseIcon className="h-3.5 w-3.5" />
                {job.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">
                {job.type}
              </span>
              {job.team && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">
                  {job.team}
                </span>
              )}
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
              {job.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/95 sm:text-xl">
              {job.excerpt}
            </p>

            {/* Meta chips row */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-sm ring-1 ring-white/20">
                <MapPinIcon className="h-5 w-5 text-white/80" />
                <span className="text-sm font-medium text-white">{job.location}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-sm ring-1 ring-white/20">
                <ClockIcon className="h-5 w-5 text-white/80" />
                <span className="text-sm font-medium text-white">{job.type}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-sm ring-1 ring-white/20">
                <CalendarDaysIcon className="h-5 w-5 text-white/80" />
                <span className="text-sm font-medium text-white">
                  Posted {formatPosted(job.postedAt)}
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={showInlineForm ? '#apply' : applyHref}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-text-primary shadow-lg shadow-black/20 transition hover:bg-gray-50 hover:shadow-xl"
              >
                {showInlineForm ? 'Apply now' : 'Apply for this role'}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/20"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Have questions?
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <ShieldCheckIcon className="h-4 w-4 text-white" />
                10,000+ families served
              </span>
              <span className="inline-flex items-center gap-2">
                <StarIcon className="h-4 w-4 text-white" />
                We review every application
              </span>
              <span className="inline-flex items-center gap-2">
                <SparklesIcon className="h-4 w-4 text-white" />
                Mutual fit response within 2 weeks
              </span>
            </div>
          </div>
        </section>

        {/* ============== CONTENT ============== */}
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
            {/* --- Main article --- */}
            <article className="min-w-0 space-y-10">
              {/* About the role */}
              <section className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${theme.chip} ${theme.chipBorder} border`}
                  >
                    <SparklesIcon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-xl font-bold text-text-primary sm:text-2xl">
                    About the role
                  </h2>
                </div>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-text-secondary sm:text-[17px]">
                  {job.intro.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Responsibilities */}
              <section className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${theme.chip} ${theme.chipBorder} border`}
                  >
                    <BriefcaseIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-text-primary sm:text-2xl">
                      What you&apos;ll do
                    </h2>
                    <p className="text-sm text-text-secondary">
                      Your day-to-day responsibilities
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition hover:border-primary-100 hover:bg-primary-50/40"
                    >
                      <CheckCircleIcon
                        className={`mt-0.5 h-5 w-5 shrink-0 ${theme.accent}`}
                      />
                      <span className="text-base leading-relaxed text-text-primary sm:text-[16.5px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-success-200 bg-success-50 text-success-700">
                    <ShieldCheckIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-text-primary sm:text-2xl">
                      What we&apos;re looking for
                    </h2>
                    <p className="text-sm text-text-secondary">
                      Skills and experience required
                    </p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {job.requirements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50/50 p-4"
                    >
                      <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-success-500" />
                      <span className="text-[15px] leading-relaxed text-text-primary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Nice to have */}
              {job.niceToHave && job.niceToHave.length > 0 && (
                <section className="rounded-3xl border border-secondary-100 bg-gradient-to-br from-secondary-50/60 to-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-secondary-200 bg-secondary-50 text-secondary-700">
                      <SparklesIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-text-primary sm:text-2xl">
                        Nice to have
                      </h2>
                      <p className="text-sm text-text-secondary">
                        Bonus points if you have these
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {job.niceToHave.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <StarIcon className="mt-0.5 h-5 w-5 shrink-0 text-secondary-500" />
                        <span className="text-[15px] leading-relaxed text-text-secondary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Extra sections (compensation, KPIs, growth, why join, etc.) */}
              {job.extraSections?.map((section, idx) => {
                // Alternate subtle accent backgrounds for visual variety
                const isAlt = idx % 2 === 1
                return (
                  <section
                    key={section.title}
                    className={`rounded-3xl border p-6 shadow-sm sm:p-8 ${
                      isAlt
                        ? 'border-trust-100 bg-gradient-to-br from-trust-50/40 to-white'
                        : 'border-neutral-100 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${
                          isAlt
                            ? 'border-trust-200 bg-trust-50 text-trust-700'
                            : `${theme.chip} ${theme.chipBorder}`
                        }`}
                      >
                        <SparklesIcon className="h-5 w-5" />
                      </span>
                      <h2 className="font-display text-xl font-bold text-text-primary sm:text-2xl">
                        {section.title}
                      </h2>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircleIcon
                            className={`mt-0.5 h-5 w-5 shrink-0 ${
                              isAlt ? 'text-trust-600' : theme.accent
                            }`}
                          />
                          <span className="text-[15px] leading-relaxed text-text-primary sm:text-[16px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )
              })}

              {/* Mid-article CTA card */}
              {!showInlineForm && (
                <section
                  className={`rounded-3xl bg-gradient-to-br ${theme.gradient} p-8 text-white shadow-xl sm:p-10`}
                >
                  <h2 className="font-display text-2xl font-bold sm:text-3xl">
                    Ready to apply?
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                    Send us your CV and a short note about why you&apos;re a fit. We review every
                    application and respond within two weeks if there&apos;s mutual fit.
                  </p>
                  <a
                    href={applyHref}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-text-primary shadow-lg shadow-black/20 transition hover:bg-gray-50"
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                    Email your application
                  </a>
                </section>
              )}
            </article>

            {/* --- Sidebar --- */}
            <aside className="lg:pt-2">
              <div className="lg:sticky lg:top-28 space-y-5">
                {/* Job summary card */}
                <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm">
                  <div className={`h-1.5 bg-gradient-to-r ${theme.gradient}`} />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Role summary
                    </p>

                    <div className="mt-5 space-y-4">
                      <div className="flex gap-3">
                        <MapPinIcon className="h-5 w-5 shrink-0 text-text-secondary" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                            Location
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-text-primary">
                            {job.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <ClockIcon className="h-5 w-5 shrink-0 text-text-secondary" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                            Type
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-text-primary">
                            {job.type}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <BuildingOffice2Icon className="h-5 w-5 shrink-0 text-text-secondary" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                            Team
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-text-primary">
                            {job.team}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CalendarDaysIcon className="h-5 w-5 shrink-0 text-text-secondary" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                            Posted
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-text-primary">
                            {formatPosted(job.postedAt)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {showInlineForm ? (
                      <a
                        href="#apply"
                        className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${theme.gradient} py-3.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg`}
                      >
                        Apply online
                        <ArrowRightIcon className="h-4 w-4" />
                      </a>
                    ) : (
                      <a
                        href={applyHref}
                        className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${theme.gradient} py-3.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg`}
                      >
                        Apply for this role
                        <ArrowRightIcon className="h-4 w-4" />
                      </a>
                    )}

                    {showInlineForm && (
                      <p className="mt-3 text-center text-xs text-text-secondary">
                        Prefer email?{' '}
                        <a
                          href={applyHref}
                          className={`font-semibold ${theme.accent} underline-offset-4 hover:underline`}
                        >
                          {applyEmail}
                        </a>
                      </p>
                    )}

                    <div className="mt-4 border-t border-neutral-100 pt-4">
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 text-sm font-medium text-text-secondary transition hover:text-text-primary"
                      >
                        <ChatBubbleLeftRightIcon className="h-4 w-4" />
                        Questions? Contact us
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Why EzyHelpers mini-card */}
                <div className="rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50/60 to-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">
                    Why EzyHelpers
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-text-primary">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                      <span>Verification, dignity & continuity at scale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                      <span>Small teams, real ownership, founder access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                      <span>Clear playbooks — not arbitrary work</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          {/* ============== INLINE APPLICATION FORM ============== */}
          {showInlineForm && (
            <section
              id="apply"
              className="scroll-mt-28 mt-16 sm:mt-20"
            >
              <div className="mx-auto max-w-3xl">
                <div className="text-center">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full ${theme.chip} ${theme.chipBorder} border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider`}
                  >
                    <SparklesIcon className="h-3.5 w-3.5" />
                    Apply now
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">
                    Submit your application
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                    {inlineFormKind === 'apm' ? (
                      <>
                        Fill in your details and written answers below. You may attach a CV (PDF
                        or Word, up to 5 MB). Submissions go to our hiring inbox.
                      </>
                    ) : (
                      <>
                        Fill in your details and answers below. A current CV is{' '}
                        <strong className="font-semibold text-text-primary">required</strong>{' '}
                        (PDF or Word, up to 5 MB). Submissions go to our hiring inbox.
                      </>
                    )}
                  </p>
                </div>

                <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-lg">
                  <div className={`h-1.5 bg-gradient-to-r ${theme.gradient}`} />
                  <div className="p-6 sm:p-10">
                    {inlineFormKind === 'sales_executive' ? (
                      <SalesExecutiveApplicationForm />
                    ) : inlineFormKind === 'role' ? (
                      <CareersRoleApplicationForm
                        jobSlug={job.slug}
                        jobTitle={job.title}
                        idPrefix={`careers-${job.slug}`}
                      />
                    ) : (
                      <ApmApplicationForm />
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ============== RELATED ROLES ============== */}
          {relatedRoles.length > 0 && (
            <section className="mt-20 border-t border-neutral-100 pt-12 sm:mt-24 sm:pt-16">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Keep exploring
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-text-primary sm:text-3xl">
                    Other roles in {job.category}
                  </h2>
                </div>
                <Link
                  href="/careers"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${theme.accent} hover:underline underline-offset-4`}
                >
                  View all openings
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {relatedRoles.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/careers/${r.slug}`}
                    className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                    />
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      {r.team}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug text-text-primary group-hover:text-primary-700">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">
                      {r.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-xs text-text-secondary">
                      <MapPinIcon className="h-4 w-4" />
                      <span className="line-clamp-1">{r.location}</span>
                    </div>
                    <div
                      className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${theme.accent}`}
                    >
                      Read role
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
