import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import WoundCareDressingView from '@/components/care-services/subpages/WoundCareDressingView'

const SLUG = 'wound-care-dressing-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const service = getNestedService(SLUG)!

export const metadata: Metadata = {
  title: 'Wound Care & Dressing at Home in Bangalore | EzyHelpers',
  description: service.description,
  keywords: [
    'wound care at home Bangalore',
    'wound dressing at home Bangalore',
    'diabetic wound care Bangalore',
    'bedsore dressing Bangalore',
    'post-surgical wound care Bangalore',
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
  return <WoundCareDressingView />
}
