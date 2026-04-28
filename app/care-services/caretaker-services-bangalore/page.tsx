import CareServicePageView from '@/components/care-services/CareServicePageView'
import { carePageMetadata } from '@/lib/careServices/carePageMeta'
import { CARE_PAGE_FILES } from '@/lib/careServices/registry'

export const metadata = carePageMetadata(CARE_PAGE_FILES.caretaker)

export default function CaretakerServicesBangalorePage() {
  return <CareServicePageView filename={CARE_PAGE_FILES.caretaker} />
}
