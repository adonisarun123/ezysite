import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import ElderlyCareWhitefieldView from '@/components/care-services/subpages/ElderlyCareWhitefieldView'

const PATH = '/care-services/elderly-care-whitefield-bangalore'

export const metadata: Metadata = {
  title: 'Elderly Care Services in Whitefield, Bangalore | Verified Caregivers | EzyHelpers',
  description:
    'Trusted elderly care in Whitefield, Bangalore — companionship, dementia support, post-discharge care, and live-in placements. Caregivers within 30 minutes of your home.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
  openGraph: {
    title: 'Elderly Care Services in Whitefield, Bangalore | EzyHelpers',
    description:
      'Verified, matched elderly caregivers across Whitefield — from ITPL to Varthur, Brookefield to Hoodi.',
    url: `https://www.ezyhelpers.com${PATH}`,
    type: 'website',
  },
}

export default function ElderlyCareWhitefieldPage() {
  return <ElderlyCareWhitefieldView />
}
