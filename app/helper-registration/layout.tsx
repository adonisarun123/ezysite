import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Helper Registration | Join EzyHelpers',
  description:
    'Register as a domestic helper with EzyHelpers. Submit your profile for verified placements and fair work opportunities.',
  alternates: {
    canonical: 'https://www.ezyhelpers.com/helper-registration',
  },
}

export default function HelperRegistrationLayout({ children }: { children: ReactNode }) {
  return children
}
