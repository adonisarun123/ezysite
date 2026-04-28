import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { PhoneIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'
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
    const onPillar = parsed.pathname === '/home-care-services-bangalore'
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

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          {/* Hero — aligned with /on-demand-help & care marketing */}
          <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-800 to-slate-900 text-white pt-16 pb-28 sm:pt-20 lg:pb-36">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute inset-0 opacity-40">
              <div className="absolute right-10 top-20 h-56 w-56 rounded-full bg-white blur-3xl md:right-24" />
              <div className="absolute bottom-16 left-10 h-48 w-48 rounded-full bg-emerald-400/30 blur-3xl md:left-20" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
              <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-100 backdrop-blur">
                Bangalore · In-home care
              </p>
              <h1 className="mx-auto max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {heroTitle}
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-emerald-50 sm:text-xl">
                {parsed.metaDescription}
              </p>
              <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-200" aria-hidden />
                  Verified professionals
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                  <UserGroupIcon className="h-5 w-5 text-emerald-200" aria-hidden />
                  Matched to your needs
                </span>
              </div>
              <div className="mx-auto mt-10 flex max-w-xl flex-col justify-center gap-4 sm:flex-row sm:gap-5">
                <Link
                  href={enquiryHref}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-base font-bold text-emerald-900 shadow-lg transition hover:bg-emerald-50"
                >
                  Request a callback
                </Link>
                <a
                  href="tel:+918031411776"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border-2 border-white/50 bg-white/10 px-8 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <PhoneIcon className="h-5 w-5" aria-hidden />
                  080-31411776
                </a>
              </div>
            </div>
          </section>

          <Breadcrumb items={breadcrumbItemsFor(parsed)} variant="minimal" separator="chevron" />

          {/* Main article card — overlaps hero like standard marketing LP */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <article className="-mt-16 mb-16 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-10 lg:-mt-20 lg:p-12">
              <div className="care-markdown prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-li:text-gray-700">
                <CareMarkdownSegments segments={segments} />
              </div>
            </article>
          </div>

          {faqAccordionItems.length > 0 && (
            <section className="section-padding border-t border-gray-200 bg-white">
              <div className="container-custom max-w-4xl">
                <div className="mb-12 text-center">
                  <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Frequently asked questions
                  </h2>
                  <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
                    Straight answers about how our Bangalore home care placements work.
                  </p>
                  <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-teal-500" />
                </div>
                <FAQAccordion faqs={faqAccordionItems} />
              </div>
            </section>
          )}

          {/* Closing CTA band */}
          <section className="section-padding bg-gradient-to-r from-primary-600 to-teal-700 text-white">
            <div className="container-custom flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              <div className="max-w-xl">
                <h2 className="font-display text-2xl font-bold sm:text-3xl">Ready to find the right care?</h2>
                <p className="mt-2 text-primary-100">
                  Share your requirement — our team typically responds within the hour on business days.
                </p>
              </div>
              <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href={enquiryHref}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-base font-bold text-primary-800 shadow-lg transition hover:bg-emerald-50"
                >
                  Start your enquiry
                </Link>
                <a
                  href="tel:+918031411776"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-white/80 px-8 py-3.5 text-base font-bold text-white transition hover:bg-white/10"
                >
                  Call 080-31411776
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
