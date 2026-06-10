import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import ElderCareAtHomeView from '@/components/care-services/pillars/ElderCareAtHomeView'
import { getPillar } from '@/lib/careServices/newServices'

const PILLAR = getPillar('elder-care-at-home-bangalore')
const PATH = `/care-services/${PILLAR.slug}`
const TITLE = `${PILLAR.title} | EzyHelpers`
const DESCRIPTION = PILLAR.description

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
  return <ElderCareAtHomeView />
}
