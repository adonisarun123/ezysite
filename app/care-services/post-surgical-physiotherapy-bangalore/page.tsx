import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import PostSurgicalPhysiotherapyView from '@/components/care-services/subpages/PostSurgicalPhysiotherapyView'

const SLUG = 'post-surgical-physiotherapy-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const nested = getNestedService(SLUG)

export const metadata: Metadata = {
  title: 'Post-Surgical Physiotherapy at Home in Bangalore | Joint Replacement Rehab | EzyHelpers',
  description: nested?.description,
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(`/care-services/${SLUG}`),
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: 'Post-Surgical Physiotherapy at Home in Bangalore | EzyHelpers',
    description: nested?.description,
    siteName: 'EzyHelpers',
  },
}

export default function PostSurgicalPhysiotherapyPage() {
  return <PostSurgicalPhysiotherapyView />
}
