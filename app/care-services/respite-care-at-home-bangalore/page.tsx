import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import RespiteCareView from '@/components/care-services/subpages/RespiteCareView'
import { getNestedService } from '@/lib/careServices/newServices'

const SERVICE = getNestedService('respite-care-at-home-bangalore')!
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
  return <RespiteCareView />
}
