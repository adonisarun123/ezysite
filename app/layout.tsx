import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import './dom-optimizations.css'
import dynamic from 'next/dynamic'
import AsyncCSS from '../components/ui/AsyncCSS'
import { OrganizationSchema, WebSiteSchema } from '../components/schema'
import { UrgencyProvider } from '../components/UrgencyContext'

// Optimize font loading with preload
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
})

const LLMOptimization = dynamic(() => import('../components/LLMOptimization'), { ssr: false })
const UrgencyCTA = dynamic(() => import('../components/UrgencyCTA'), { ssr: false })

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
        {/* Preload critical resources */}
        <link rel="preload" href="/favicon-32x32.png" as="image" type="image/png" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0074C8" />
        
        {/* Core Schema Markup */}
        <OrganizationSchema />
        <WebSiteSchema />
        
        {/* Optimized Critical CSS for LCP - More specific and minimal */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical styles for LCP element */
            .text-lg {
              font-size: 1.125rem;
              line-height: 1.75rem;
            }
            .text-xl {
              font-size: 1.25rem;
              line-height: 1.75rem;
            }
            .text-gray-600 {
              color: rgb(75 85 99);
            }
            .mb-8 {
              margin-bottom: 2rem;
            }
            .leading-relaxed {
              line-height: 1.625;
            }
            .max-w-2xl {
              max-width: 42rem;
            }
            
            /* Essential button styles */
            .btn-primary {
              background-color: #0074C8;
              color: white;
              font-weight: 500;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              transition: background-color 0.2s;
              border: none;
              cursor: pointer;
              display: inline-block;
              text-decoration: none;
            }
            .btn-primary:hover {
              background-color: #005ea6;
            }
            .btn-secondary {
              background-color: white;
              color: #0074C8;
              font-weight: 500;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              border: 2px solid #0074C8;
              transition: background-color 0.2s;
              cursor: pointer;
              display: inline-block;
              text-decoration: none;
            }
            .btn-secondary:hover {
              background-color: #f9fafb;
            }
            
            /* Layout essentials */
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
            
            /* Font loading optimization */
            .font-sans {
              font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
            }
            .font-display {
              font-family: var(--font-poppins), var(--font-inter), system-ui, sans-serif;
            }
            
            @media (min-width: 640px) {
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
        <UrgencyProvider>
          <AsyncCSS />
          <LLMOptimization />
          {children}
          <UrgencyCTA />
        </UrgencyProvider>
      </body>
    </html>
  )
} 