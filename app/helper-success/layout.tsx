import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registration Successful | EzyHelpers',
  description: 'Your helper registration has been successfully submitted. We will verify your details and contact you within 24-48 hours.',
  robots: {
    index: false, // Don't index success page
    follow: false,
  }
}

export default function HelperSuccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}