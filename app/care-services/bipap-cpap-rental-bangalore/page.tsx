import type { Metadata } from 'next'
import { getNestedService } from '@/lib/careServices/newServices'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import BipapCpapRentalView from '@/components/care-services/subpages/BipapCpapRentalView'

const SLUG = 'bipap-cpap-rental-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const nested = getNestedService(SLUG)!

export const metadata: Metadata = {
  title: `${nested.title} | EzyHelpers`,
  description: nested.description,
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(`/care-services/${SLUG}`),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: `${nested.title} | EzyHelpers`,
    description: nested.description,
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
}

export default function Page() {
  return <BipapCpapRentalView />
}
