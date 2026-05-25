import CareClusterLandingView from '@/components/care-services/cluster-landing/CareClusterLandingView'
import type { CarePageFile } from '@/lib/careServices/registry'
import { readCareMarkdownFile, extractCareFaqs } from '@/lib/careServices/readCareMarkdown'
import { careClusterConfigForMarkdownFile } from '@/lib/careServices/clusterLanding/resolveConfig'
import {
  careBreadcrumbJsonLd,
  careFaqJsonLd,
  careLocalBusinessJsonLd,
  careServiceJsonLd,
} from '@/lib/careServices/careJsonLd'

export default function CareClusterMarkdownLanding({ filename }: { filename: CarePageFile }) {
  const parsed = readCareMarkdownFile(filename)
  const faqs = extractCareFaqs(parsed.bodyMd)
  const faqAccordionItems = faqs.map((f) => ({ question: f.question, answer: f.answer }))
  const config = careClusterConfigForMarkdownFile(filename)

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizLd) }} />

      <CareClusterLandingView
        config={config}
        metaDescription={parsed.metaDescription}
        faqItems={faqAccordionItems}
        pathname={parsed.pathname}
      />
    </>
  )
}
