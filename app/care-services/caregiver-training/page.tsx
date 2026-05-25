import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import CaregiverTrainingView from '@/components/care-services/subpages/CaregiverTrainingView'

const PATH = '/care-services/caregiver-training'

export const metadata: Metadata = {
  title: 'Caregiver Training Curriculum at EzyHelpers | Modules, Hours & Assessment',
  description:
    'The training curriculum behind every EzyHelpers care placement — modules, classroom hours, hands-on assessment, and condition-specific specialisations.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function CaregiverTrainingPage() {
  return <CaregiverTrainingView />
}
