import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import LocalityCareView from '@/components/care-services/subpages/LocalityCareView'
import { LOCALITY_CARE } from '@/lib/careServices/localityData'

const data = LOCALITY_CARE['marathahalli']
const PATH = data.path

export const metadata: Metadata = {
  title: 'Elderly Care Services in Marathahalli, Bangalore | Verified Caregivers | EzyHelpers',
  description:
    'Trusted elderly care in Marathahalli, Bangalore: companionship, dementia support, post-discharge care and live-in placements. Verified caregivers within 30 minutes of your home.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
  openGraph: {
    title: 'Elderly Care Services in Marathahalli, Bangalore | EzyHelpers',
    description:
      'Verified, matched elderly caregivers across Marathahalli, Outer Ring Road, Kundalahalli and HAL.',
    url: `https://www.ezyhelpers.com${PATH}`,
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
    images: [{ url: `https://www.ezyhelpers.com/og?title=${encodeURIComponent('Elderly Care in Marathahalli, Bangalore')}`, width: 1200, height: 630, alt: 'Elderly care in Marathahalli, Bangalore' }],
  },
}

export default function Page() {
  return <LocalityCareView data={data} />
}
