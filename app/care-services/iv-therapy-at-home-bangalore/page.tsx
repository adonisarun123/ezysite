import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import IvTherapyView from '@/components/care-services/subpages/IvTherapyView'

const SLUG = 'iv-therapy-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const service = getNestedService(SLUG)!

export const metadata: Metadata = {
  title: 'IV Therapy & Infusion at Home in Bangalore | EzyHelpers',
  description: service.description,
  keywords: [
    'IV therapy at home Bangalore',
    'IV drip at home Bangalore',
    'IV antibiotics at home Bangalore',
    'home infusion Bangalore',
    'IV fluids at home Bangalore',
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
  return <IvTherapyView />
}
