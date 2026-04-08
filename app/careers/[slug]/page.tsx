import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { CAREERS_DEDICATED_PAGE_SLUGS, getJobBySlug, jobOpenings } from '@/lib/careersData'
import { ArrowLeftIcon, MapPinIcon, ClockIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

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

export default async function CareerJobPage({ params }: Props) {
  const { slug } = await params
  const job = getJobBySlug(slug)
  if (!job) notFound()

  const applyEmail = job.applyEmail ?? 'info@ezyhelpers.com'
  const applyParams = new URLSearchParams({ subject: `Application: ${job.title}` })
  if (job.applyBodyPrompt) {
    applyParams.set('body', job.applyBodyPrompt)
  }
  const applyHref = `mailto:${applyEmail}?${applyParams.toString()}`

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      <Navbar />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: job.title },
        ]}
      />

      <main className="pb-24">
        <div className="border-b border-black/[0.06] bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-16 lg:px-10">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#86868b] transition hover:text-[#1d1d1f]"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              All openings
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              {job.department}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {job.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#6e6e73]">
              {job.intro}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
            <article className="min-w-0 space-y-12">
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                  Responsibilities
                </h2>
                <ul className="mt-6 space-y-4 text-[17px] leading-relaxed text-[#6e6e73]">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                  Requirements
                </h2>
                <ul className="mt-6 space-y-4 text-[17px] leading-relaxed text-[#6e6e73]">
                  {job.requirements.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#1d1d1f]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <section>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                    Nice to have
                  </h2>
                  <ul className="mt-6 space-y-4 text-[17px] leading-relaxed text-[#6e6e73]">
                    {job.niceToHave.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#86868b]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {job.extraSections?.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">
                    {section.title}
                  </h2>
                  <ul className="mt-6 space-y-4 text-[17px] leading-relaxed text-[#6e6e73]">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </article>

            <aside className="lg:pt-2">
              <div className="sticky top-32 space-y-6 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm">
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3 text-[#6e6e73]">
                    <MapPinIcon className="h-5 w-5 shrink-0 text-[#86868b]" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                        Location
                      </p>
                      <p className="mt-1 font-medium text-[#1d1d1f]">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-[#6e6e73]">
                    <ClockIcon className="h-5 w-5 shrink-0 text-[#86868b]" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                        Type
                      </p>
                      <p className="mt-1 font-medium text-[#1d1d1f]">{job.type}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-[#6e6e73]">
                    <BuildingOffice2Icon className="h-5 w-5 shrink-0 text-[#86868b]" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                        Team
                      </p>
                      <p className="mt-1 font-medium text-[#1d1d1f]">{job.team}</p>
                    </div>
                  </div>
                  <p className="border-t border-black/[0.06] pt-4 text-xs text-[#86868b]">
                    Posted {formatPosted(job.postedAt)}
                  </p>
                </div>
                {job.applyBodyPrompt && (
                  <p className="text-xs leading-relaxed text-[#6e6e73]">
                    Your email app will open with a short prompt to answer: how you would automate
                    operations at EzyHelpers. Attach your CV before sending.
                  </p>
                )}
                <a
                  href={applyHref}
                  className="flex w-full items-center justify-center rounded-full bg-[#1d1d1f] py-3.5 text-sm font-medium text-white transition hover:bg-black"
                >
                  Apply for this role
                </a>
                <Link
                  href="/contact"
                  className="block text-center text-sm font-medium text-primary-600 underline-offset-4 hover:underline"
                >
                  Questions? Contact us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
