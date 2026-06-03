import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import NurseVsCaretakerView from '@/components/care-services/subpages/NurseVsCaretakerView'

const PATH = '/care-services/home-nurse-vs-caretaker'

export const metadata: Metadata = {
  title: 'Home Nurse vs Caretaker — Which Do I Need? (Bangalore Guide) | EzyHelpers',
  description:
    'Should you hire a home nurse, a caretaker, or both? A 3-minute decision guide with side-by-side comparison, cost differences, and common scenarios from Bangalore families.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://www.ezyhelpers.com${PATH}`,
    languages: selfReferencingLanguages(PATH),
  },
  openGraph: {
    title: 'Home Nurse vs Caretaker — Which Do I Need?',
    description:
      'A clear, honest decision guide for Bangalore families choosing between a home nurse, a caretaker, or both.',
    url: `https://www.ezyhelpers.com${PATH}`,
    type: 'article',
  },
}

export default function NurseVsCaretakerPage() {
  return <NurseVsCaretakerView />
}
