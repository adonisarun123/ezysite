import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import LiveInVsDayShiftView from '@/components/care-services/subpages/LiveInVsDayShiftView'

const PATH = '/care-services/live-in-vs-day-shift-caregiver'

export const metadata: Metadata = {
  title: 'Live-in vs Day-Shift Caregiver — Which Makes Sense? | Bangalore Guide | EzyHelpers',
  description:
    'A clear comparison of live-in and day-shift caregiver arrangements in Bangalore — coverage, cost, family fit, and the situations each is right for.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function LiveInVsDayShiftPage() {
  return <LiveInVsDayShiftView />
}
