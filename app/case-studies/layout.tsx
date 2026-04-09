import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { selfReferencingLanguages } from '@/lib/selfHreflang'

export const metadata: Metadata = {
  title: 'Case Studies | EzyHelpers',
  description:
    'Real stories from families and helpers using EzyHelpers — placements, trust, and outcomes across domestic help services.',
  alternates: {
    canonical: 'https://www.ezyhelpers.com/case-studies',
    languages: selfReferencingLanguages('/case-studies'),
  },
}

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return children
}
