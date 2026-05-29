import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import BedriddenCareView from '@/components/care-services/subpages/BedriddenCareView'

const PATH = '/care-services/bedridden-patient-care-bangalore'

export const metadata: Metadata = {
  title: 'Bedridden Patient Care at Home in Bangalore | Trained Attendants | EzyHelpers',
  description:
    'Specialist bedridden patient care at home in Bangalore — pressure-sore prevention, repositioning, dignified incontinence care, and trained physical handling.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function BedriddenCarePage() {
  return <BedriddenCareView />
}
