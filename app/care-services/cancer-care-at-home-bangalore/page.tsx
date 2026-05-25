import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import CancerCareView from '@/components/care-services/subpages/CancerCareView'

const PATH = '/care-services/cancer-care-at-home-bangalore'

export const metadata: Metadata = {
  title: 'Cancer & Oncology Home Care in Bangalore | EzyHelpers',
  description:
    'Compassionate cancer home care in Bangalore — chemotherapy support, port care coordination, nutrition, fatigue management, and palliative comfort.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function CancerCarePage() {
  return <CancerCareView />
}
