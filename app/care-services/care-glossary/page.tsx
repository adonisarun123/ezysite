import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import CareGlossaryView from '@/components/care-services/subpages/CareGlossaryView'

const PATH = '/care-services/care-glossary'

export const metadata: Metadata = {
  title: 'Home Care Glossary | NG Tube, PEG, GNM, Sundowning Explained | EzyHelpers',
  description:
    'Plain-English definitions of every home-care, nursing and discharge term Indian families come across — from NG tubes to GNM nurses, sundowning to TPAs. Reviewed by a B.Sc Nursing Care Director.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
  openGraph: {
    title: 'Home Care Glossary — Plain-English Definitions',
    description:
      'Every home-care, nursing and discharge term Indian families come across — explained simply.',
    url: `https://www.ezyhelpers.com${PATH}`,
    type: 'article',
  },
}

export default function CareGlossaryPage() {
  return <CareGlossaryView />
}
