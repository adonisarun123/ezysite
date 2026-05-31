import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import HospiceCareAtHomeView from '@/components/care-services/subpages/HospiceCareAtHomeView'

const SLUG = 'hospice-care-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const SERVICE = getNestedService(SLUG)

export const metadata: Metadata = {
  title: 'Hospice Care at Home in Bangalore | Compassionate Comfort Care | EzyHelpers',
  description:
    SERVICE?.description ??
    'Hospice care at home in Bangalore — coordinated medical, emotional and spiritual support for patients and families, in the comfort of home.',
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages(CANONICAL),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    siteName: 'EzyHelpers',
    title: 'Hospice Care at Home in Bangalore',
    description:
      SERVICE?.description ??
      'Compassionate hospice care at home in Bangalore — coordinated comfort, emotional and spiritual support.',
  },
}

export default function Page() {
  return <HospiceCareAtHomeView />
}
