import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ezyhelpers.com'),
  title: 'EzyHelpers - Trusted House Maid Services & Complete Home Help',
  description: 'Connect with verified professionals for all your home needs. From housemaids and cooks to caretakers and home maintenance. Transparent pricing, quick booking, exceptional service.',
  keywords: 'house help, maid services, domestic help, home care, live-in maid, part-time maid, full-time maid, elderly care, babysitter, nanny, cook services, home maintenance',
  authors: [{ name: 'EzyHelpers' }],
  robots: 'index, follow',
  openGraph: {
    title: 'EzyHelpers - Trusted House Maid Services & Complete Home Help',
    description: 'Connect with verified professionals for all your home needs. Transparent pricing, quick booking, exceptional service.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'EzyHelpers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EzyHelpers - Trusted Home Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EzyHelpers - Trusted House Maid Services & Complete Home Help',
    description: 'Connect with verified professionals for all your home needs. Transparent pricing, quick booking, exceptional service.',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0074C8" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 