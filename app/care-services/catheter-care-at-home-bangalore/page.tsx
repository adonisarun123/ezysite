import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import CatheterCareView from '@/components/care-services/subpages/CatheterCareView'

const SLUG = 'catheter-care-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const service = getNestedService(SLUG)!

export const metadata: Metadata = {
  title: 'Catheter & Tube Care at Home in Bangalore | EzyHelpers',
  description: service.description,
  keywords: [
    'catheter care at home Bangalore',
    'urinary catheter change Bangalore',
    'Ryles tube care Bangalore',
    'PEG feeding tube care Bangalore',
    'feeding tube care at home Bangalore',
  ],
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(CANONICAL),
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: service.title,
    description: service.description,
    siteName: 'EzyHelpers',
  },
}

export default function Page() {
  return <CatheterCareView />
}
