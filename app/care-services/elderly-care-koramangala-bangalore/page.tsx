import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import ElderlyCareKoramangalaView from '@/components/care-services/subpages/ElderlyCareKoramangalaView'

const PATH = '/care-services/elderly-care-koramangala-bangalore'

export const metadata: Metadata = {
  title: 'Elderly Care Services in Koramangala, Bangalore | Verified Caregivers | EzyHelpers',
  description:
    'Trusted elderly care across Koramangala’s eight blocks — caregivers within 30 minutes, briefed on Manipal Hospital and St John’s, matched to language and routine.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function ElderlyCareKoramangalaPage() {
  return <ElderlyCareKoramangalaView />
}
