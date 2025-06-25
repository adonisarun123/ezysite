import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import { OrganizationSchema, WebSiteSchema } from '../components/schema'
import { UrgencyProvider } from '../components/UrgencyContext'

// Optimize font loading with preload and display swap
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
})

// Dynamic imports for non-critical components to reduce initial bundle size
const LLMOptimization = dynamic(() => import('../components/LLMOptimization'), { 
  ssr: false,
  loading: () => null 
})
const UrgencyCTA = dynamic(() => import('../components/UrgencyCTA'), { 
  ssr: false,
  loading: () => null 
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ezyhelpers.com'),
  title: 'EzyHelpers - Trusted House Maid Services & Complete Home Help',
  description: 'Connect with verified professionals for all your home needs. From housemaids and cooks to caretakers and home maintenance. Transparent pricing, quick booking, exceptional service.',
  keywords: 'house help, maid services, domestic help, home care, live-in maid, part-time maid, full-time maid, elderly care, babysitter, nanny, cook services, home maintenance',
  authors: [{ name: 'EzyHelpers' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ezyhelpers.com',
  },
  openGraph: {
    title: 'EzyHelpers - Trusted House Maid Services & Complete Home Help',
    description: 'Connect with verified professionals for all your home needs. Transparent pricing, quick booking, exceptional service.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'EzyHelpers',
    url: 'https://ezyhelpers.com',
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
        {/* Preload critical resources first */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/grid.svg" as="image" type="image/svg+xml" />
        
        {/* Critical CSS - Inline the most essential styles for LCP */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles only */
            * {
              box-sizing: border-box;
            }
            
            html {
              scroll-behavior: smooth;
            }
            
            body {
              margin: 0;
              font-family: var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              line-height: 1.6;
              color: #111827;
              background-color: #ffffff;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            
            /* Essential layout classes for LCP */
            .container-custom {
              margin: 0 auto;
              max-width: 80rem;
              padding: 0 1rem;
            }
            
            .section-padding {
              padding: 3rem 0;
            }
            
            /* Critical button styles for CTA */
            .btn-primary {
              background-color: #0074C8;
              color: white;
              font-weight: 600;
              padding: 0.875rem 2rem;
              border-radius: 0.5rem;
              border: none;
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              text-decoration: none;
              transition: all 0.2s ease;
              font-size: 1rem;
            }
            
            .btn-primary:hover {
              background-color: #005ea6;
              transform: translateY(-1px);
            }
            
            .btn-secondary {
              background-color: transparent;
              color: #0074C8;
              font-weight: 600;
              padding: 0.875rem 2rem;
              border: 2px solid #0074C8;
              border-radius: 0.5rem;
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              text-decoration: none;
              transition: all 0.2s ease;
              font-size: 1rem;
            }
            
            .btn-secondary:hover {
              background-color: #0074C8;
              color: white;
              transform: translateY(-1px);
            }
            
            /* Typography essentials */
            .text-gradient {
              background: linear-gradient(135deg, #0074C8, #3DB8F5);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            .font-display {
              font-family: var(--font-poppins), var(--font-inter), system-ui, sans-serif;
            }
            
            /* Mobile responsiveness */
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
              .section-padding {
                padding: 5rem 0;
              }
            }
          `
        }} />
        
        {/* Load non-critical CSS asynchronously to prevent render blocking */}
        <link 
          rel="preload" 
          href="/dom-optimizations.css" 
          as="style" 
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            var link = document.querySelector('link[href="/dom-optimizations.css"]');
            if (link) {
              link.rel = 'stylesheet';
            }
          `
        }} />
        <noscript>
          <link rel="stylesheet" href="/dom-optimizations.css" />
        </noscript>
        
        {/* Favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAARUlEQVR42u3NQQ0AMAwCsfxL7egQyiVIv+ONba7/AgAAAAAAAAAAAAD8PyYm1wsDGpseMaArtyYdMmhczr8iZM6/EiTOnxIkzp8SJc6fEdt8GAAwC3+zfbWwAAAABJRU5ErkJggg=="
        />
        <meta name="theme-color" content="#0074C8" />
        
        {/* Core Schema Markup */}
        <OrganizationSchema />
        <WebSiteSchema />
        
        {/* Google Analytics - Load asynchronously */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-868JRCDRFW"
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-868JRCDRFW');
          `
        }} />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <UrgencyProvider>
          {children}
          <LLMOptimization />
          <UrgencyCTA />
        </UrgencyProvider>
      </body>
    </html>
  )
} 