import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Helper Registration | EzyHelpers - Join Our Helper Network',
  description: 'Register as a domestic helper with EzyHelpers. Find trusted families looking for maids, cooks, drivers, babysitters, and elderly care providers.',
  keywords: 'helper registration, domestic helper jobs, maid jobs, cook jobs, driver jobs, babysitter jobs, EzyHelpers',
  openGraph: {
    title: 'Helper Registration | EzyHelpers',
    description: 'Register as a domestic helper with EzyHelpers and connect with families who need your services.',
    type: 'website',
  },
  robots: {
    index: false, // Don't index registration page
    follow: true,
  }
}

export default function HelperRegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}