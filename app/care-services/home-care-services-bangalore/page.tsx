import CareClusterMarkdownLanding from '@/components/care-services/cluster-landing/CareClusterMarkdownLanding'
import { carePageMetadata } from '@/lib/careServices/carePageMeta'
import { CARE_PAGE_FILES } from '@/lib/careServices/registry'
import { primeCareMarkdownFromDb } from '@/lib/careServices/readCareMarkdown'

export async function generateMetadata() {
  await primeCareMarkdownFromDb(CARE_PAGE_FILES.pillar)
  return carePageMetadata(CARE_PAGE_FILES.pillar)
}

export default async function HomeCareServicesBangalorePage() {
  await primeCareMarkdownFromDb(CARE_PAGE_FILES.pillar)
  return <CareClusterMarkdownLanding filename={CARE_PAGE_FILES.pillar} />
}
