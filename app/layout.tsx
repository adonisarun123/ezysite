import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import './dom-optimizations.css'
import AsyncCSS from '../components/ui/AsyncCSS'
import { OrganizationSchema, WebSiteSchema } from '../components/schema'

// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})

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
        
        {/* Core Schema Markup */}
        <OrganizationSchema />
        <WebSiteSchema />
        
        {/* Critical CSS for initial render */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .btn-primary {
              background-color: #0074C8;
              color: white;
              font-weight: 500;
              padding: 0.625rem 1rem;
              border-radius: 0.5rem;
              transition: all 0.2s;
              border: none;
              cursor: pointer;
            }
            .btn-primary:hover {
              background-color: #005ea6;
              transform: scale(1.05);
            }
            .btn-secondary {
              background-color: white;
              color: #0074C8;
              font-weight: 500;
              padding: 0.625rem 1rem;
              border-radius: 0.5rem;
              border: 2px solid #0074C8;
              transition: all 0.2s;
              cursor: pointer;
            }
            .btn-secondary:hover {
              background-color: #f9fafb;
              transform: scale(1.05);
            }
            .section-padding {
              padding: 3rem 0;
            }
            .container-custom {
              margin: 0 auto;
              max-width: 80rem;
              padding: 0 1rem;
            }
            .text-gradient {
              background: linear-gradient(135deg, #0074C8, #3DB8F5);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            @media (min-width: 640px) {
              .btn-primary, .btn-secondary {
                padding: 0.75rem 1.5rem;
              }
              .container-custom {
                padding: 0 1.5rem;
              }
              .section-padding {
                padding: 4rem 0;
              }
            }
            @media (min-width: 1024px) {
              .container-custom {
                padding: 0 2rem;
              }
            }
          `
        }} />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <AsyncCSS />
        {children}
      </body>
    </html>
  )
} 