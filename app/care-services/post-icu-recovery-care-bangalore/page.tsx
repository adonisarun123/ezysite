import type { Metadata } from 'next'
import PostIcuRecoveryView from '@/components/care-services/subpages/PostIcuRecoveryView'
import { selfReferencingLanguages } from '@/lib/selfHreflang'

const TITLE = 'Post-ICU Recovery Care at Home in Bangalore | EzyHelpers'
const DESCRIPTION =
  'Post-ICU recovery care at home in Bangalore — step-down monitoring, rehabilitation and complication watch after intensive-care discharge.'
const CANONICAL = 'https://www.ezyhelpers.com/care-services/post-icu-recovery-care-bangalore'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'post-ICU recovery care Bangalore, step-down care, post intensive care syndrome, ICU discharge care at home Bangalore',
  alternates: {
    canonical: CANONICAL,
    languages: selfReferencingLanguages('/care-services/post-icu-recovery-care-bangalore'),
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
  return <PostIcuRecoveryView />
}
