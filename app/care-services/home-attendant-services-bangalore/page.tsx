import CareClusterMarkdownLanding from '@/components/care-services/cluster-landing/CareClusterMarkdownLanding'
import { carePageMetadata } from '@/lib/careServices/carePageMeta'
import { CARE_PAGE_FILES } from '@/lib/careServices/registry'
import { primeCareMarkdownFromDb } from '@/lib/careServices/readCareMarkdown'

export async function generateMetadata() {
  await primeCareMarkdownFromDb(CARE_PAGE_FILES.homeAttendant)
  return carePageMetadata(CARE_PAGE_FILES.homeAttendant)
}

export default async function HomeAttendantServicesBangalorePage() {
  await primeCareMarkdownFromDb(CARE_PAGE_FILES.homeAttendant)
  return <CareClusterMarkdownLanding filename={CARE_PAGE_FILES.homeAttendant} />
}
