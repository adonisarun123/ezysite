import CareClusterMarkdownLanding from '@/components/care-services/cluster-landing/CareClusterMarkdownLanding'
import { carePageMetadata } from '@/lib/careServices/carePageMeta'
import { CARE_PAGE_FILES } from '@/lib/careServices/registry'

export const metadata = carePageMetadata(CARE_PAGE_FILES.elderlyCare)

export default function ElderlyCareServicesBangalorePage() {
  return <CareClusterMarkdownLanding filename={CARE_PAGE_FILES.elderlyCare} />
}
