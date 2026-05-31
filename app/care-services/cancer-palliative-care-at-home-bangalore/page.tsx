import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { getNestedService } from '@/lib/careServices/newServices'
import CancerPalliativeCareView from '@/components/care-services/subpages/CancerPalliativeCareView'

const SLUG = 'cancer-palliative-care-at-home-bangalore'
const CANONICAL = `https://www.ezyhelpers.com/care-services/${SLUG}`
const SERVICE = getNestedService(SLUG)

export const metadata: Metadata = {
  title: 'Cancer & Oncology Palliative Care at Home in Bangalore | EzyHelpers',
  description:
    SERVICE?.description ??
    'Cancer palliative care at home in Bangalore — symptom relief, chemotherapy-side-effect support and comfort care for oncology patients.',
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
    title: 'Cancer & Oncology Palliative Care at Home in Bangalore',
    description:
      SERVICE?.description ??
      'Compassionate cancer palliative care at home in Bangalore — symptom relief and comfort care for oncology patients.',
  },
}

export default function Page() {
  return <CancerPalliativeCareView />
}
