import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import TracheostomyCareView from '@/components/care-services/subpages/TracheostomyCareView'

const SLUG = 'tracheostomy-care-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const service = getNestedService(SLUG)!

export const metadata: Metadata = {
  title: 'Tracheostomy Care at Home in Bangalore | EzyHelpers',
  description: service.description,
  keywords: [
    'tracheostomy care at home Bangalore',
    'tracheostomy suctioning at home Bangalore',
    'airway care at home Bangalore',
    'trache care nurse Bangalore',
    'respiratory care at home Bangalore',
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
  return <TracheostomyCareView />
}
