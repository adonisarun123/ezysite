import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import StrokeCareView from '@/components/care-services/subpages/StrokeCareView'

const PATH = '/care-services/stroke-care-at-home-bangalore'

export const metadata: Metadata = {
  title: 'Stroke Care at Home in Bangalore | Post-Stroke Recovery Caregivers | EzyHelpers',
  description:
    'Specialised post-stroke care at home in Bangalore — caregivers experienced in mobility recovery, swallowing, speech, and risk-of-fall management. Same-day placement.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
  openGraph: {
    title: 'Stroke Care at Home in Bangalore | EzyHelpers',
    description:
      'Recovery-stage-specific stroke care at home in Bangalore — from acute discharge to long-term maintenance.',
    url: `https://www.ezyhelpers.com${PATH}`,
    type: 'article',
  },
}

export default function StrokeCarePage() {
  return <StrokeCareView />
}
