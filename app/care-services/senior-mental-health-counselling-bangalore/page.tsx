import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import SeniorMentalHealthView from '@/components/care-services/subpages/SeniorMentalHealthView'
import { getNestedService } from '@/lib/careServices/newServices'

const SERVICE = getNestedService('senior-mental-health-counselling-bangalore')!
const PATH = `/care-services/${SERVICE.slug}`
const TITLE = `${SERVICE.title} | EzyHelpers`
const DESCRIPTION = SERVICE.description

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://www.ezyhelpers.com${PATH}`,
    type: 'website',
  },
}

export default function Page() {
  return <SeniorMentalHealthView />
}
