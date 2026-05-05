import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import CareServicesHomeView from '@/components/care-services/home/CareServicesHomeView'

const PATH = '/care-services'

export const metadata: Metadata = {
  title: 'Care Services in Bangalore | Home Nursing, Elderly & Patient Care | EzyHelpers',
  description:
    'Bangalore’s most trusted home care platform. Verified nurses, caretakers and trained attendants — matched to your family with same-day placement.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
  openGraph: {
    title: 'Care Services in Bangalore | EzyHelpers',
    description:
      'One platform for every kind of care at home — verified nurses, caretakers and attendants in Bangalore.',
    url: `https://www.ezyhelpers.com${PATH}`,
    type: 'website',
  },
}

export default function CareServicesHomePage() {
  return <CareServicesHomeView />
}
