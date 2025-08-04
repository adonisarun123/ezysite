import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registration Successful | EzyHelpers',
  description: 'Your agent registration has been successfully submitted. We will verify your details and contact you within 48 hours.',
  robots: {
    index: false, // Don't index success page
    follow: false,
  }
}

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}