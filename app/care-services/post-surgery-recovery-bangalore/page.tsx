import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import PostSurgeryView from '@/components/care-services/subpages/PostSurgeryView'

const PATH = '/care-services/post-surgery-recovery-bangalore'

export const metadata: Metadata = {
  title: 'Post-Surgery Recovery Care at Home in Bangalore | EzyHelpers',
  description:
    'Post-operative home recovery in Bangalore — wound oversight, mobilisation, pain management support, and the daily rhythm patients need to heal well at home.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
}

export default function PostSurgeryPage() {
  return <PostSurgeryView />
}
