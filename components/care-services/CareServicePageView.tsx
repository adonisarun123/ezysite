import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import {
  PhoneIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  HeartIcon,
  ClockIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline'
import {
  readCareMarkdownFile,
  splitCareBody,
  extractCareFaqs,
  extractH1AndRest,
  stripFaqSection,
} from '@/lib/careServices/readCareMarkdown'
import {
  careBreadcrumbJsonLd,
  careFaqJsonLd,
  careLocalBusinessJsonLd,
  careServiceJsonLd,
} from '@/lib/careServices/careJsonLd'
import { CARE_PILLAR_HREF, CARE_ENQUIRY_HREF } from '@/lib/careServices/registry'
import CareMarkdownSegments from './CareMarkdownSegments'

function breadcrumbItemsFor(parsed: ReturnType<typeof readCareMarkdownFile>) {
  const items: { label: string; href?: string }[] = [{ label: 'Home', href: '/' }]
  if (parsed.breadcrumbParts.length >= 2) {
    const onPillar = parsed.pathname === CARE_PILLAR_HREF
    items.push({
      label: 'Care Services',
      href: onPillar ? undefined : CARE_PILLAR_HREF,
    })
  }
  if (parsed.breadcrumbParts.length >= 3) {
    items.push({ label: parsed.breadcrumbParts[2] })
  }
  return items
}

/** Soft wave separating the hero from the page body — fluid, responsive height */
function CareHeroWave() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-[1px] text-gray-50">
      <svg
        className="block h-[52px] w-full sm:h-[76px] lg:h-[96px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,96L60,88C120,80,240,64,360,58.7C480,53,600,59,720,66.7C840,75,960,85,1080,82.7C1200,80,1320,64,1380,56L1440,48V120H0Z"
        />
      </svg>
    </div>
  )
}

export default function CareServicePageView({ filename }: { filename: string }) {
  const parsed = readCareMarkdownFile(filename)
  const { h1Plain, rest: afterH1 } = extractH1AndRest(parsed.bodyMd)
  const withoutFaq = stripFaqSection(afterH1)
  const segments = splitCareBody(withoutFaq)
  const faqs = extractCareFaqs(parsed.bodyMd)
  const faqAccordionItems = faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }))
  const heroTitle =
    h1Plain || parsed.metaTitle.replace(/\s*\|.*$/, '').trim() || 'Bangalore Home Care'

  const isPillar = parsed.pathname === CARE_PILLAR_HREF

  const breadcrumbLd = careBreadcrumbJsonLd(parsed)
  const serviceLd = careServiceJsonLd(parsed)
  const faqLd = faqs.length > 0 ? careFaqJsonLd(faqs) : null
  const localBizLd = careLocalBusinessJsonLd()

  const enquiryHref = `${CARE_ENQUIRY_HREF}?source=${encodeURIComponent(parsed.pathname)}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizLd) }}
      />

      <div className="relative min-h-screen bg-gray-50">
        {/* Ambient page tint — subtle care / clinical calm */}
        <div
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-8%,rgba(45,212,191,0.09),transparent_52%)]"
          aria-hidden
        />

        <Navbar />
        <main id="main-content">
          {/* Hero — fluid mesh, organic wave, responsive type */}
          <section className="relative overflow-hidden pt-16 text-white sm:pt-20">
            {/* Base mesh + depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-950" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.22] [mask-image:linear-gradient(180deg,white_20%,transparent_95%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-teal-500/10" />
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -left-20 top-1/4 h-[min(55vw,28rem)] w-[min(55vw,28rem)] rounded-full bg-emerald-400/25 blur-3xl" />
              <div className="absolute -right-16 top-10 h-[min(45vw,22rem)] w-[min(45vw,22rem)] rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute bottom-32 left-1/3 h-40 w-40 rounded-full bg-teal-200/15 blur-2xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 pb-32 text-center sm:px-6 sm:pb-36 lg:px-8 lg:pb-44">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100/95 backdrop-blur-md sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-200" />
                </span>
                Bangalore · In-home care
              </p>

              <h1 className="mx-auto max-w-[22ch] font-display font-bold leading-[1.12] tracking-tight text-white [text-wrap:balance] sm:max-w-4xl lg:max-w-5xl">
                <span className="block text-[clamp(1.625rem,4.6vw,3.35rem)]">{heroTitle}</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-pretty text-[clamp(1rem,2.4vw,1.25rem)] leading-relaxed text-emerald-50/95 sm:mt-8">
                {parsed.metaDescription}
              </p>

              <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5 sm:mt-10 sm:gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-md transition hover:bg-white/15">
                  <ShieldCheckIcon className="h-5 w-5 shrink-0 text-emerald-200" aria-hidden />
                  Verified professionals
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-md transition hover:bg-white/15">
                  <UserGroupIcon className="h-5 w-5 shrink-0 text-emerald-200" aria-hidden />
                  Matched to your needs
                </span>
              </div>

              <div className="mx-auto mt-10 flex w-full max-w-lg flex-col justify-center gap-3 sm:mt-12 sm:max-w-xl sm:flex-row sm:gap-4">
                <Link
                  href={enquiryHref}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-base font-bold text-emerald-950 shadow-lg shadow-emerald-950/25 ring-1 ring-white/60 transition hover:bg-emerald-50 hover:shadow-xl sm:flex-initial sm:min-w-[200px]"
                >
                  Request a callback
                </Link>
                <a
                  href="tel:+918031411776"
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-white/45 bg-white/10 px-8 py-3.5 text-base font-bold text-white backdrop-blur-md transition hover:border-white/60 hover:bg-white/20 sm:flex-initial sm:min-w-[200px]"
                >
                  <PhoneIcon className="h-5 w-5 shrink-0" aria-hidden />
                  080-31411776
                </a>
              </div>

              {/* Pillar-only: trust highlights — bento-style glass cards */}
              {isPillar && (
                <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5">
                  {[
                    {
                      icon: HeartIcon,
                      title: 'Human-centred matching',
                      body: 'Shortlists built on condition, routine, and how your family prefers to communicate.',
                    },
                    {
                      icon: ClockIcon,
                      title: 'Rapid placement',
                      body: 'Same-day when a suitable professional is available — we keep you informed either way.',
                    },
                    {
                      icon: LifebuoyIcon,
                      title: 'Support after placement',
                      body: 'Follow-ups, adjustments, and free replacements until the fit feels right.',
                    },
                  ].map(({ icon: Icon, title, body }) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/15 bg-white/[0.08] p-5 text-left shadow-lg shadow-black/10 backdrop-blur-md sm:p-6"
                    >
                      <div className="mb-3 inline-flex rounded-xl bg-white/10 p-2.5 ring-1 ring-white/10">
                        <Icon className="h-6 w-6 text-emerald-100" aria-hidden />
                      </div>
                      <p className="font-display text-base font-bold leading-snug text-white sm:text-lg">{title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-emerald-50/90">{body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <CareHeroWave />
          </section>

          <Breadcrumb items={breadcrumbItemsFor(parsed)} variant="minimal" separator="chevron" />

          {/* Article — overlaps wave; fluid container & soft elevation */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Decorative blobs behind card — depth without clutter */}
            <div className="pointer-events-none absolute left-1/2 top-8 -z-0 h-64 w-[min(90vw,42rem)] -translate-x-1/2 rounded-full bg-teal-300/15 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute right-0 top-40 -z-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl sm:right-[8%]" aria-hidden />

            <article className="relative -mt-14 mb-16 rounded-[1.75rem] border border-white/70 bg-white/95 p-6 shadow-[0_28px_80px_-24px_rgba(15,118,110,0.22)] backdrop-blur-xl sm:p-10 sm:shadow-[0_32px_90px_-28px_rgba(15,118,110,0.18)] lg:-mt-[4.5rem] lg:mb-20 lg:rounded-[2rem] lg:p-12 xl:p-14">
              <div className="care-markdown prose prose-lg max-w-none text-[clamp(1rem,0.94rem+0.22vw,1.125rem)] prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700">
                <CareMarkdownSegments segments={segments} />
              </div>
            </article>
          </div>

          {faqAccordionItems.length > 0 && (
            <section className="relative overflow-hidden border-t border-emerald-100/60 bg-gradient-to-b from-gray-50 via-teal-50/25 to-white">
              <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-teal-300/15 blur-3xl" aria-hidden />

              <div className="section-padding relative">
                <div className="container-custom max-w-4xl">
                  <div className="mb-10 text-center sm:mb-14">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-teal-700/90">
                      Questions
                    </p>
                    <h2 className="mt-3 font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold tracking-tight text-gray-900">
                      Frequently asked questions
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-gray-600 sm:text-lg">
                      Straight answers about how our Bangalore home care placements work.
                    </p>
                    <div className="mx-auto mt-6 flex h-1 w-24 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-primary-500 shadow-sm" />
                  </div>
                  <FAQAccordion faqs={faqAccordionItems} tone="care" />
                </div>
              </div>
            </section>
          )}

          {/* Closing CTA — fluid top radius, depth */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-teal-700 to-emerald-900 text-white">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,white_0%,transparent_45%),radial-gradient(circle_at_80%_60%,rgba(45,212,191,0.35)_0%,transparent_50%)]" aria-hidden />
            <div className="section-padding relative">
              <div className="container-custom flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-end lg:text-left">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="font-display text-[clamp(1.5rem,3.5vw,2rem)] font-bold leading-tight">
                    Ready to find the right care?
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
                    Share your requirement — our team typically responds within the hour on business days.
                  </p>
                </div>
                <div className="flex w-full flex-shrink-0 flex-col gap-3 sm:w-auto sm:flex-row sm:justify-end">
                  <Link
                    href={enquiryHref}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-base font-bold text-emerald-950 shadow-xl shadow-black/15 ring-1 ring-white/80 transition hover:bg-emerald-50"
                  >
                    Start your enquiry
                  </Link>
                  <a
                    href="tel:+918031411776"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-white/70 px-8 py-3.5 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
                  >
                    Call 080-31411776
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
