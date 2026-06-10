import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import EndOfLifeCareView from '@/components/care-services/subpages/EndOfLifeCareView'

const SLUG = 'end-of-life-care-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const SERVICE = getNestedService(SLUG)

export const metadata: Metadata = {
  title: 'End-of-Life Care at Home in Bangalore | Compassionate Comfort | EzyHelpers',
  description:
    SERVICE?.description ??
    'End-of-life care at home in Bangalore — compassionate comfort care, dignity and family support during the final stages of illness.',
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
    title: 'End-of-Life Care at Home in Bangalore',
    description:
      SERVICE?.description ??
      'Compassionate end-of-life comfort care at home in Bangalore — dignity and family support.',
  },
}

export default function Page() {
  return <EndOfLifeCareView />
}
