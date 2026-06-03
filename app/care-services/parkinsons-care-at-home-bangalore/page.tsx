import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import ParkinsonsCareView from '@/components/care-services/subpages/ParkinsonsCareView'

const PATH = '/care-services/parkinsons-care-at-home-bangalore'

export const metadata: Metadata = {
  title: 'Parkinson’s Disease Care at Home in Bangalore | Specialist Caregivers | EzyHelpers',
  description:
    'Home care for Parkinson’s in Bangalore — strict medication timing, fall prevention, mobility support, and caregivers experienced in tremor and freezing.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function ParkinsonsCarePage() {
  return <ParkinsonsCareView />
}
