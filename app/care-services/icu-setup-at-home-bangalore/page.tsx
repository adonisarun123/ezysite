import type { Metadata } from 'next'
import IcuSetupAtHomeView from '@/components/care-services/subpages/IcuSetupAtHomeView'
import { selfReferencingLanguages } from '@/lib/selfHreflang'

const TITLE = 'ICU Setup at Home in Bangalore | EzyHelpers'
const DESCRIPTION =
  'Complete ICU setup at home in Bangalore — beds, monitors, ventilators, suction and trained staff installed and managed to hospital protocols.'
const CANONICAL = 'https://www.ezyhelpers.com/care-services/icu-setup-at-home-bangalore'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'ICU setup at home Bangalore, home ICU, ICU equipment at home, critical care setup, hospital bed ventilator monitor Bangalore',
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages('/care-services/icu-setup-at-home-bangalore'),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: 'article',
    siteName: 'EzyHelpers',
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <IcuSetupAtHomeView />
}
