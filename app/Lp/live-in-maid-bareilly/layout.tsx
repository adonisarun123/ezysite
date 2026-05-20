import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: 'Live-In Maid in Bareilly | EzyHelpers',
  description:
    '24/7 live-in maid service in Bareilly. Trained, verified, and reliable. Get a quote in 24 hours.',
  alternates: { canonical: 'https://www.ezyhelpers.com/cities/bareilly/live-in-maid' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
