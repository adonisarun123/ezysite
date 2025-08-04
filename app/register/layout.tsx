import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent Registration | EzyHelpers - Join Our Helper Network',
  description: 'Register your domestic helper agency with EzyHelpers. Connect with families looking for verified maids, cooks, drivers, babysitters, and elderly care providers.',
  keywords: 'agent registration, domestic helper agency, maid agency registration, helper network, EzyHelpers partner',
  openGraph: {
    title: 'Agent Registration | EzyHelpers',
    description: 'Register your domestic helper agency with EzyHelpers and expand your business reach.',
    type: 'website',
  },
  robots: {
    index: false, // Don't index registration page
    follow: true,
  }
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}