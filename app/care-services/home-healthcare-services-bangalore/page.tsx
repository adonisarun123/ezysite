import CareClusterMarkdownLanding from '@/components/care-services/cluster-landing/CareClusterMarkdownLanding'
import { carePageMetadata } from '@/lib/careServices/carePageMeta'
import { CARE_PAGE_FILES } from '@/lib/careServices/registry'
import { primeCareMarkdownFromDb } from '@/lib/careServices/readCareMarkdown'

export async function generateMetadata() {
  await primeCareMarkdownFromDb(CARE_PAGE_FILES.homeHealthcare)
  return carePageMetadata(CARE_PAGE_FILES.homeHealthcare)
}

export default async function HomeHealthcareServicesBangalorePage() {
  await primeCareMarkdownFromDb(CARE_PAGE_FILES.homeHealthcare)
  return <CareClusterMarkdownLanding filename={CARE_PAGE_FILES.homeHealthcare} />
}
