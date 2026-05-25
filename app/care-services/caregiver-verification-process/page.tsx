import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import VerificationProcessView from '@/components/care-services/subpages/VerificationProcessView'

const PATH = '/care-services/caregiver-verification-process'

export const metadata: Metadata = {
  title: 'How EzyHelpers Verifies Caregivers | 6-Step Screening | Bangalore',
  description:
    'Aadhaar authentication, government ID, in-person interview, background check, condition-specific experience review, and pre-placement health screening — every caregiver, every placement.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function VerificationProcessPage() {
  return <VerificationProcessView />
}
