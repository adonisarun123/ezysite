import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import CareQuizView from '@/components/care-services/subpages/CareQuizView'

const PATH = '/care-services/care-quiz'

export const metadata: Metadata = {
  title: 'Care Assessment Quiz | What Care Does Your Family Need? | EzyHelpers',
  description:
    'Five quick questions, one clear recommendation. Find out whether you need a nurse, caretaker, trained attendant, or a combined arrangement — in under 60 seconds.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function CareQuizPage() {
  return <CareQuizView />
}
