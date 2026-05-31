import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import CardioRespiratoryPhysiotherapyView from '@/components/care-services/subpages/CardioRespiratoryPhysiotherapyView'

const SLUG = 'cardio-respiratory-physiotherapy-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const nested = getNestedService(SLUG)

export const metadata: Metadata = {
  title: 'Cardiac & Respiratory Physiotherapy at Home in Bangalore | Chest & Breathing Rehab | EzyHelpers',
  description: nested?.description,
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(`/care-services/${SLUG}`),
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: 'Cardiac & Respiratory Physiotherapy at Home in Bangalore | EzyHelpers',
    description: nested?.description,
    siteName: 'EzyHelpers',
  },
}

export default function CardioRespiratoryPhysiotherapyPage() {
  return <CardioRespiratoryPhysiotherapyView />
}
