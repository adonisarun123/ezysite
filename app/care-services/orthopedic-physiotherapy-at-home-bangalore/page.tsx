import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import OrthopedicPhysiotherapyView from '@/components/care-services/subpages/OrthopedicPhysiotherapyView'

const SLUG = 'orthopedic-physiotherapy-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const nested = getNestedService(SLUG)

export const metadata: Metadata = {
  title: 'Orthopaedic Physiotherapy at Home in Bangalore | Knee, Back & Joint Rehab | EzyHelpers',
  description: nested?.description,
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(`/care-services/${SLUG}`),
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: 'Orthopaedic Physiotherapy at Home in Bangalore | EzyHelpers',
    description: nested?.description,
    siteName: 'EzyHelpers',
  },
}

export default function OrthopedicPhysiotherapyPage() {
  return <OrthopedicPhysiotherapyView />
}
