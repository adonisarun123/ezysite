import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import DementiaCareView from '@/components/care-services/subpages/DementiaCareView'

const PATH = '/care-services/dementia-alzheimers-care-bangalore'

export const metadata: Metadata = {
  title: 'Dementia & Alzheimer’s Care at Home in Bangalore | Specialist Caregivers | EzyHelpers',
  description:
    'Specialist dementia and Alzheimer’s home care in Bangalore — caregivers experienced in routine, agitation, sundowning, and dignity-first cognitive care.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
  openGraph: {
    title: 'Dementia & Alzheimer’s Care at Home in Bangalore | EzyHelpers',
    description:
      'Stage-appropriate dementia and Alzheimer’s care at home — from early-stage support to advanced live-in care.',
    url: `https://www.ezyhelpers.com${PATH}`,
    type: 'article',
  },
}

export default function DementiaCarePage() {
  return <DementiaCareView />
}
