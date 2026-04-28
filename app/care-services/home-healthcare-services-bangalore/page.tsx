import HomeHealthcareBangaloreView from '@/components/care-services/home-healthcare/HomeHealthcareBangaloreView'
import { carePageMetadata } from '@/lib/careServices/carePageMeta'
import { CARE_PAGE_FILES } from '@/lib/careServices/registry'
import { readCareMarkdownFile, extractCareFaqs } from '@/lib/careServices/readCareMarkdown'
import {
  careBreadcrumbJsonLd,
  careFaqJsonLd,
  careLocalBusinessJsonLd,
  careServiceJsonLd,
} from '@/lib/careServices/careJsonLd'

export const metadata = carePageMetadata(CARE_PAGE_FILES.homeHealthcare)

export default function HomeHealthcareServicesBangalorePage() {
  const parsed = readCareMarkdownFile(CARE_PAGE_FILES.homeHealthcare)
  const faqs = extractCareFaqs(parsed.bodyMd)
  const faqAccordionItems = faqs.map((f) => ({ question: f.question, answer: f.answer }))

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

      <HomeHealthcareBangaloreView
        metaDescription={parsed.metaDescription}
        faqItems={faqAccordionItems}
        pathname={parsed.pathname}
      />
    </>
  )
}
