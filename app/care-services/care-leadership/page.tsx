import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import CareLeadershipView from '@/components/care-services/subpages/CareLeadershipView'

const PATH = '/care-services/care-leadership'

export const metadata: Metadata = {
  title: 'Care Leadership at EzyHelpers | Medical Reviewer & Care Director | Bangalore',
  description:
    'Meet the Care Director leading EzyHelpers’ medical and care quality across Bangalore — credentials, philosophy, and how every care page on this site is reviewed.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function CareLeadershipPage() {
  return <CareLeadershipView />
}
