import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: 'Live-In Maid in Bangalore | EzyHelpers',
  description:
    '24/7 live-in maid service in Bangalore. Trained, verified, and reliable. Get a quote in 24 hours.',
  alternates: { canonical: 'https://www.ezyhelpers.com/cities/bangalore/live-in-maids' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
