import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: 'Full-Time Maid in Bangalore | EzyHelpers',
  description:
    'Daily full-time maid service in Bangalore — 8-10 hours of housekeeping, cooking & care. Verified profiles, quick joining.',
  alternates: { canonical: 'https://www.ezyhelpers.com/cities/bangalore/full-time-maid' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
