import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import {
  CAREERS_DEDICATED_PAGE_SLUGS,
  JOB_CATEGORY_BLURBS,
  JOB_CATEGORY_ORDER,
  jobOpenings,
  type JobCategory,
  type JobOpening,
} from '@/lib/careersData'
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  HeartIcon,
  SparklesIcon,
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  UsersIcon,
  BuildingOffice2Icon,
  RocketLaunchIcon,
  AcademicCapIcon,
  PaintBrushIcon,
  PresentationChartLineIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline'

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

// Brand-aligned category theming — matches /careers/[slug] detail page
const CATEGORY_THEME: Record<
  JobCategory,
  {
    gradient: string
    chip: string
    chipBorder: string
    accent: string
    icon: React.ComponentType<{ className?: string }>
  }
> = {
  "Founder's Office": {
    gradient: 'from-primary-800 via-primary-700 to-primary-600',
    chip: 'bg-primary-50 text-primary-700',
    chipBorder: 'border-primary-200',
    accent: 'text-primary-600',
    icon: RocketLaunchIcon,
  },
  'Product & Engineering': {
    gradient: 'from-primary-700 via-primary-600 to-secondary-700',
    chip: 'bg-secondary-50 text-secondary-700',
    chipBorder: 'border-secondary-200',
    accent: 'text-secondary-700',
    icon: SparklesIcon,
  },
  Sales: {
    gradient: 'from-primary-700 via-primary-600 to-secondary-600',
    chip: 'bg-primary-50 text-primary-700',
    chipBorder: 'border-primary-200',
    accent: 'text-primary-600',
    icon: PresentationChartLineIcon,
  },
  Operations: {
    gradient: 'from-primary-700 via-primary-600 to-trust-700',
    chip: 'bg-primary-50 text-primary-700',
    chipBorder: 'border-primary-200',
    accent: 'text-primary-600',
    icon: BriefcaseIcon,
  },
  'City Leadership': {
    gradient: 'from-primary-800 via-primary-700 to-secondary-700',
    chip: 'bg-primary-50 text-primary-800',
    chipBorder: 'border-primary-200',
    accent: 'text-primary-700',
    icon: BuildingOffice2Icon,
  },
  'People & HR': {
    gradient: 'from-trust-700 via-trust-600 to-primary-700',
    chip: 'bg-trust-50 text-trust-700',
    chipBorder: 'border-trust-200',
    accent: 'text-trust-700',
    icon: UsersIcon,
  },
  'Care Services': {
    gradient: 'from-trust-700 via-trust-600 to-primary-700',
    chip: 'bg-trust-50 text-trust-700',
    chipBorder: 'border-trust-200',
    accent: 'text-trust-700',
    icon: HeartIcon,
  },
  'Specialist Care': {
    gradient: 'from-trust-800 via-trust-700 to-primary-700',
    chip: 'bg-trust-50 text-trust-700',
    chipBorder: 'border-trust-200',
    accent: 'text-trust-700',
    icon: AcademicCapIcon,
  },
  'Business Development': {
    gradient: 'from-primary-700 via-primary-600 to-trust-700',
    chip: 'bg-primary-50 text-primary-700',
    chipBorder: 'border-primary-200',
    accent: 'text-primary-600',
    icon: HomeModernIcon,
  },
  'Marketing & Content': {
    gradient: 'from-secondary-700 via-primary-600 to-primary-700',
    chip: 'bg-secondary-50 text-secondary-700',
    chipBorder: 'border-secondary-200',
    accent: 'text-secondary-700',
    icon: PaintBrushIcon,
  },
}

const pillars = [
  {
    title: 'Trust by design',
    body: 'Verification, transparent matching, and support when things change — not growth at the cost of safety.',
    icon: ShieldCheckIcon,
    bg: 'from-primary-50/60 to-white',
    iconBg: 'bg-primary-100 text-primary-700',
    border: 'border-primary-100',
  },
  {
    title: 'Dignity for workers',
    body: 'We treat domestic work as essential infrastructure. Fair processes and respect are non-negotiable.',
    icon: HeartIcon,
    bg: 'from-trust-50/60 to-white',
    iconBg: 'bg-trust-100 text-trust-700',
    border: 'border-trust-100',
  },
  {
    title: 'Depth over noise',
    body: 'We prefer small teams, clear writing, and tools that ops and families can actually rely on.',
    icon: SparklesIcon,
    bg: 'from-secondary-50/60 to-white',
    iconBg: 'bg-secondary-100 text-secondary-700',
    border: 'border-secondary-100',
  },
]

const metrics = [
  {
    value: '10,000+',
    label: 'Families served',
    icon: UsersIcon,
    iconBg: 'bg-primary-100 text-primary-700',
  },
  {
    value: 'Multi-city',
    label: 'India footprint',
    icon: MapPinIcon,
    iconBg: 'bg-trust-100 text-trust-700',
  },
  {
    value: '24–72 hrs',
    label: 'Typical match window',
    icon: ClockIcon,
    iconBg: 'bg-secondary-100 text-secondary-700',
  },
]

function formatPosted(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function groupJobsByCategory(jobs: JobOpening[]): Array<{
  category: JobCategory
  jobs: JobOpening[]
}> {
  const grouped = new Map<JobCategory, JobOpening[]>()
  for (const job of jobs) {
    const list = grouped.get(job.category) ?? []
    list.push(job)
    grouped.set(job.category, list)
  }
  return JOB_CATEGORY_ORDER.filter((c) => grouped.has(c)).map((category) => ({
    category,
    jobs: grouped.get(category)!,
  }))
}

export default function CareersPage() {
  const groupedRoles = groupJobsByCategory(jobOpenings)
  const totalRoles = jobOpenings.length

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Navbar />

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} />

      <main>
        {/* ============== HERO ============== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-trust-700 text-white">
          {/* Subtle dot pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/15" />
          <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-white/[0.07] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-white/[0.07] blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">
              <BriefcaseIcon className="h-3.5 w-3.5" />
              Careers at EzyHelpers
            </span>

            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl xl:text-7xl">
              Build the future of trusted home help in India.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/95 sm:text-xl">
              EzyHelpers connects verified domestic professionals with families who need
              reliable support. We&apos;re growing deliberately — with operations, product,
              and craft that match the seriousness of the category.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#open-roles"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-text-primary shadow-lg shadow-black/20 transition hover:bg-gray-50 hover:shadow-xl"
              >
                View {totalRoles} open roles
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/20"
              >
                Our story
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/85">
              <span className="inline-flex items-center gap-2">
                <ShieldCheckIcon className="h-4 w-4 text-white" />
                10,000+ families served
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-white" />
                Multi-city India footprint
              </span>
              <span className="inline-flex items-center gap-2">
                <SparklesIcon className="h-4 w-4 text-white" />
                We respond within 2 weeks
              </span>
            </div>
          </div>
        </section>

        {/* ============== WHY THIS MATTERS ============== */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
                  <SparklesIcon className="h-3.5 w-3.5" />
                  Why this matters
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
                  A massive market, still waiting for infrastructure.
                </h2>
              </div>
              <div className="space-y-6 text-base leading-relaxed text-text-secondary sm:text-[17px]">
                <p>
                  Domestic help touches almost every urban household — yet discovery,
                  verification, and continuity remain broken. Families worry about safety
                  and fit; workers deserve clear terms and respect. We believe technology
                  and operations together can raise the bar for everyone.
                </p>
                <p>
                  EzyHelpers is not chasing vanity metrics. We invest in verification,
                  replacement support, and city teams who know local context. If you want
                  to work on problems that blend empathy, logistics, and software — you&apos;ll
                  find real scope here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============== METRICS ============== */}
        <section className="bg-gradient-to-b from-white to-background-primary py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <span
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${m.iconBg}`}
                  >
                    <m.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                      {m.value}
                    </p>
                    <p className="mt-0.5 text-sm text-text-secondary">{m.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== PILLARS ============== */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-trust-200 bg-trust-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-trust-700">
                <SparklesIcon className="h-3.5 w-3.5" />
                How we work
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
                Principles, not posters.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className={`group relative overflow-hidden rounded-3xl border ${p.border} bg-gradient-to-br ${p.bg} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8`}
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${p.iconBg}`}
                  >
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== OPEN ROLES ============== */}
        <section
          id="open-roles"
          className="scroll-mt-28 bg-gradient-to-b from-background-primary to-white py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
                <BriefcaseIcon className="h-3.5 w-3.5" />
                Open positions
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                {totalRoles} current opening{totalRoles !== 1 ? 's' : ''}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                Each role links to a full description. We review every application; if
                there&apos;s mutual fit, we&apos;ll get back within two weeks.
              </p>
            </div>

            {/* Category quick-jump chips */}
            {groupedRoles.length > 1 && (
              <nav
                aria-label="Job categories"
                className="mt-10 flex flex-wrap justify-center gap-2"
              >
                {groupedRoles.map(({ category, jobs }) => {
                  const theme = CATEGORY_THEME[category]
                  const Icon = theme.icon
                  return (
                    <a
                      key={category}
                      href={`#cat-${category.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`}
                      className={`inline-flex items-center gap-1.5 rounded-full border ${theme.chipBorder} ${theme.chip} px-3.5 py-1.5 text-xs font-semibold transition hover:shadow-sm`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {category}
                      <span className="ml-0.5 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white/70 px-1.5 text-[10px] font-bold">
                        {jobs.length}
                      </span>
                    </a>
                  )
                })}
              </nav>
            )}

            <div className="mt-14 space-y-16">
              {groupedRoles.map(({ category, jobs }) => {
                const theme = CATEGORY_THEME[category]
                const Icon = theme.icon
                const anchorId = `cat-${category
                  .replace(/[^a-z0-9]+/gi, '-')
                  .toLowerCase()}`
                return (
                  <section
                    key={category}
                    id={anchorId}
                    aria-labelledby={`${anchorId}-heading`}
                    className="scroll-mt-28"
                  >
                    {/* Category header */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                      <div className="flex items-start gap-4">
                        <span
                          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${theme.chipBorder} ${theme.chip}`}
                        >
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <h3
                            id={`${anchorId}-heading`}
                            className="font-display text-2xl font-bold tracking-tight text-text-primary sm:text-3xl"
                          >
                            {category}
                          </h3>
                          <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
                            {JOB_CATEGORY_BLURBS[category]}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`inline-flex shrink-0 items-center gap-1 self-start rounded-full ${theme.chip} ${theme.chipBorder} border px-3 py-1 text-xs font-semibold uppercase tracking-wider`}
                      >
                        {jobs.length} {jobs.length === 1 ? 'role' : 'roles'}
                      </span>
                    </div>

                    {/* Job cards grid */}
                    <ul className="mt-8 grid gap-5 md:grid-cols-2">
                      {jobs.map((job) => (
                        <li key={job.slug}>
                          <Link
                            href={`/careers/${job.slug}`}
                            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl sm:p-7"
                          >
                            {/* Gradient accent strip on top */}
                            <div
                              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.gradient}`}
                            />

                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className={`inline-flex items-center gap-1 rounded-full ${theme.chip} ${theme.chipBorder} border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider`}
                              >
                                {job.type}
                              </span>
                              {CAREERS_DEDICATED_PAGE_SLUGS.has(job.slug) && (
                                <span className="inline-flex items-center gap-1 rounded-full border border-secondary-200 bg-secondary-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-700">
                                  Essay application
                                </span>
                              )}
                            </div>

                            <h4 className="mt-4 font-display text-lg font-bold leading-snug text-text-primary transition group-hover:text-primary-700 sm:text-xl">
                              {job.title}
                            </h4>

                            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-text-secondary">
                              {job.team}
                            </p>

                            <p className="mt-4 text-[15px] leading-relaxed text-text-secondary line-clamp-3">
                              {job.excerpt}
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-xs text-text-secondary">
                              <MapPinIcon className="h-4 w-4 shrink-0" />
                              <span className="line-clamp-1">{job.location}</span>
                            </div>

                            <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                              <span className="text-xs text-text-secondary">
                                Posted {formatPosted(job.postedAt)}
                              </span>
                              <span
                                className={`inline-flex items-center gap-1 text-sm font-semibold ${theme.accent}`}
                              >
                                Learn more
                                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                )
              })}
            </div>

            {jobOpenings.length === 0 && (
              <p className="mt-10 text-center text-base text-text-secondary">
                We don&apos;t have published openings right now. Follow us on{' '}
                <a
                  href="https://www.linkedin.com/company/ezyhelpers"
                  className="font-medium text-primary-600 underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                or write to{' '}
                <a
                  href="mailto:info@ezyhelpers.com?subject=General%20careers%20inquiry"
                  className="font-medium text-primary-600 underline-offset-4 hover:underline"
                >
                  info@ezyhelpers.com
                </a>
                .
              </p>
            )}
          </div>
        </section>

        {/* ============== GENERAL APPLICATION CTA ============== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-trust-700 py-16 text-white sm:py-24">
          {/* Decorative */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/[0.08] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/[0.08] blur-3xl" />

          <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">
              <SparklesIcon className="h-3.5 w-3.5" />
              Open application
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
              Don&apos;t see the right role?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              Send your profile and what you&apos;d like to build. We hire for curiosity and
              judgment — especially in operations and product.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:info@ezyhelpers.com?subject=Careers%20%E2%80%94%20General%20application"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-text-primary shadow-lg shadow-black/20 transition hover:bg-gray-50 hover:shadow-xl"
              >
                Introduce yourself
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/20"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
