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
const WhatsAppFloat = dynamic(() => import('../components/WhatsAppFloat'), { 
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
        
        {/* Critical CSS - Inline only the absolute essentials for LCP */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Minimal critical styles - everything else deferred */
            *{box-sizing:border-box}
            html{scroll-behavior:smooth}
            body{margin:0;font-family:var(--font-inter),system-ui,sans-serif;line-height:1.6;color:#2B2B2B;background:#F9FBFF;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
            
            /* Only above-the-fold layout */
            .hero-critical{position:relative;min-height:80vh;display:flex;align-items:center;background:linear-gradient(135deg,rgba(0,116,200,0.9),rgba(61,184,245,0.9));color:white}
            .nav-critical{position:fixed;top:0;left:0;right:0;z-index:40;background:white;box-shadow:0 1px 3px rgba(0,0,0,0.1)}
            .container-critical{margin:0 auto;max-width:80rem;padding:0 1rem}
            
            /* Critical text styles */
            .text-4xl{font-size:2.25rem;line-height:2.5rem}
            .text-xl{font-size:1.25rem;line-height:1.75rem}
            .font-bold{font-weight:700}
            .font-semibold{font-weight:600}
            .text-center{text-align:center}
            .mb-4{margin-bottom:1rem}
            .mb-8{margin-bottom:2rem}
            
            /* Critical button - only primary CTA */
            .btn-critical{background:#0074C8;color:white;font-weight:600;padding:0.875rem 2rem;border-radius:0.5rem;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:0.5rem;text-decoration:none;transition:background 0.2s;font-size:1rem}
            .btn-critical:hover{background:#005ea6}
            
            /* Critical flex utilities */
            .flex{display:flex}
            .items-center{align-items:center}
            .justify-center{justify-content:center}
            .justify-between{justify-content:space-between}
            .gap-2{gap:0.5rem}
            .gap-4{gap:1rem}
            
            /* Mobile critical */
            @media(max-width:640px){
              .text-4xl{font-size:1.875rem;line-height:2.25rem}
              .text-xl{font-size:1.125rem;line-height:1.75rem}
              .container-critical{padding:0 0.5rem}
            }
          `
        }} />
        
        {/* Aggressively defer ALL non-critical CSS */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Load CSS after critical render path
            function loadCSS(href) {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = href;
              link.media = 'print';
              link.onload = function() { this.media = 'all'; };
              document.head.appendChild(link);
            }
            
            // Load on user interaction or after 1 second
            var cssLoaded = false;
            function loadAllCSS() {
              if (cssLoaded) return;
              cssLoaded = true;
              loadCSS('/dom-optimizations.css');
            }
            
            // Immediate load after critical render
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(loadAllCSS, 100);
              });
            } else {
              setTimeout(loadAllCSS, 100);
            }
            
            // Also load on first user interaction
            ['mousedown', 'touchstart', 'keydown'].forEach(function(event) {
              document.addEventListener(event, loadAllCSS, { once: true, passive: true });
            });
          `
        }} />
        <noscript>
          <link rel="stylesheet" href="/dom-optimizations.css" />
        </noscript>
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0074C8" />
        
        {/* Core Schema Markup */}
        <OrganizationSchema />
        <WebSiteSchema />
        
        {/* Google Analytics - Optimized loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-868JRCDRFW', {
              page_title: document.title,
              page_location: window.location.href
            });
            
            // Load GA script after page interaction or 3 seconds (whichever comes first)
            let gaLoaded = false;
            function loadGA() {
              if (gaLoaded) return;
              gaLoaded = true;
              const script = document.createElement('script');
              script.async = true;
              script.src = 'https://www.googletagmanager.com/gtag/js?id=G-868JRCDRFW';
              document.head.appendChild(script);
            }
            
            // Load on user interaction
            ['mousedown', 'touchstart', 'keydown', 'scroll'].forEach(event => {
              document.addEventListener(event, loadGA, { once: true, passive: true });
            });
            
            // Fallback: load after 3 seconds
            setTimeout(loadGA, 3000);
          `
        }} />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <UrgencyProvider>
          {children}
          <LLMOptimization />
          <UrgencyCTA />
          <WhatsAppFloat />
        </UrgencyProvider>
      </body>
    </html>
  )
} 