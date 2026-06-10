import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import GeriatricPhysiotherapyView from '@/components/care-services/subpages/GeriatricPhysiotherapyView'

const SLUG = 'geriatric-physiotherapy-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const nested = getNestedService(SLUG)

export const metadata: Metadata = {
  title: 'Geriatric Physiotherapy at Home in Bangalore | Senior Balance & Fall Prevention | EzyHelpers',
  description: nested?.description,
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(`/care-services/${SLUG}`),
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: 'Geriatric Physiotherapy at Home in Bangalore | EzyHelpers',
    description: nested?.description,
    siteName: 'EzyHelpers',
  },
}

export default function GeriatricPhysiotherapyPage() {
  return <GeriatricPhysiotherapyView />
}
