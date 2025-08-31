import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join as Helper | EzyHelpers - Quick Registration',
  description: 'Quick registration for domestic helpers. Connect with families who need your services in your area.',
  keywords: 'helper leads, domestic helper, maid, cook, babysitter, elder care, quick registration',
  openGraph: {
    title: 'Join as Helper | EzyHelpers',
    description: 'Quick registration for domestic helpers. Connect with families who need your services in your area.',
    type: 'website',
  },
  robots: {
    index: false, // Don't index lead form
    follow: true,
  }
}

export default function HelperLeadsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
