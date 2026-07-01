import CareClusterMarkdownLanding from '@/components/care-services/cluster-landing/CareClusterMarkdownLanding'
import { carePageMetadata } from '@/lib/careServices/carePageMeta'
import { CARE_PAGE_FILES } from '@/lib/careServices/registry'
import { primeCareMarkdownFromDb } from '@/lib/careServices/readCareMarkdown'

export async function generateMetadata() {
  await primeCareMarkdownFromDb(CARE_PAGE_FILES.patientCare)
  return carePageMetadata(CARE_PAGE_FILES.patientCare)
}

export default async function PatientCareServicesBangalorePage() {
  await primeCareMarkdownFromDb(CARE_PAGE_FILES.patientCare)
  return <CareClusterMarkdownLanding filename={CARE_PAGE_FILES.patientCare} />
}
