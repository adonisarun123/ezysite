import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import ElderlyCareHsrView from '@/components/care-services/subpages/ElderlyCareHsrView'

const PATH = '/care-services/elderly-care-hsr-layout-bangalore'

export const metadata: Metadata = {
  title: 'Elderly Care Services in HSR Layout, Bangalore | Verified Caregivers | EzyHelpers',
  description:
    'Trusted elderly care across HSR Layout’s seven sectors — caregivers within 30 minutes, briefed on Manipal Sarjapur and Apollo Sarjapur, matched to language and routine.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function ElderlyCareHsrPage() {
  return <ElderlyCareHsrView />
}
