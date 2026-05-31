import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import NeuroPhysiotherapyView from '@/components/care-services/subpages/NeuroPhysiotherapyView'

const SLUG = 'neuro-physiotherapy-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const nested = getNestedService(SLUG)

export const metadata: Metadata = {
  title: 'Neurological Physiotherapy at Home in Bangalore | Stroke & Neuro Rehab | EzyHelpers',
  description: nested?.description,
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(`/care-services/${SLUG}`),
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: 'Neurological Physiotherapy at Home in Bangalore | EzyHelpers',
    description: nested?.description,
    siteName: 'EzyHelpers',
  },
}

export default function NeuroPhysiotherapyPage() {
  return <NeuroPhysiotherapyView />
}
