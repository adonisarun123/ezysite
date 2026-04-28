import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import {
  readCareMarkdownFile,
  splitCareBody,
  extractCareFaqs,
} from '@/lib/careServices/readCareMarkdown'
import {
  careBreadcrumbJsonLd,
  careFaqJsonLd,
  careLocalBusinessJsonLd,
  careServiceJsonLd,
} from '@/lib/careServices/careJsonLd'
import { CARE_PILLAR_HREF } from '@/lib/careServices/registry'
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
  const segments = splitCareBody(parsed.bodyMd)
  const faqs = extractCareFaqs(parsed.bodyMd)
  const breadcrumbLd = careBreadcrumbJsonLd(parsed)
  const serviceLd = careServiceJsonLd(parsed)
  const faqLd = faqs.length > 0 ? careFaqJsonLd(faqs) : null
  const localBizLd = careLocalBusinessJsonLd()

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

      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-20 pb-16 lg:pt-24">
          <Breadcrumb items={breadcrumbItemsFor(parsed)} variant="minimal" separator="chevron" />
          <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900">
              <CareMarkdownSegments segments={segments} />
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
