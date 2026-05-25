import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import HospitalDischargeView from '@/components/care-services/subpages/HospitalDischargeView'

const PATH = '/care-services/hospital-discharge-care-bangalore'

export const metadata: Metadata = {
  title: 'Hospital Discharge Home Care in Bangalore | Same-Day Setup | EzyHelpers',
  description:
    'Home care arranged before discharge — caregivers placed on the day of discharge from Manipal, Apollo, Fortis, Sakra, Narayana and other Bangalore hospitals.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function HospitalDischargePage() {
  return <HospitalDischargeView />
}
