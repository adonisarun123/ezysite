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
  title: {
    default: 'Trusted House Help Service | EzyHelpers',
    template: '%s | EzyHelpers'
  },
  description: "India's #1 house help service platform. Get verified maids, cooks, nannies & drivers in 24-72hrs. 10,000+ trusted families.",
  keywords: ['house help service', 'domestic help', 'maids', 'cooks', 'nannies', 'drivers', 'verified helpers', 'home services India'],
  authors: [{ name: 'EzyHelpers' }],
  creator: 'EzyHelpers',
  publisher: 'EzyHelpers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ezyhelpers.com',
    languages: {
      'en-US': 'https://ezyhelpers.com',
      'hi-IN': 'https://ezyhelpers.com/hi'
    }
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
    title: 'EzyHelpers - Your Trusted Partner for Home Services',
    description: 'Find reliable domestic helpers, maids, cooks, drivers & more. Professional home services across major Indian cities.',
    site: '@ezyhelpers',
    creator: '@ezyhelpers',
    images: [
      {
        url: 'https://ezyhelpers.com/ezyhelper_logo_new.png',
        width: 1200,
        height: 630,
        alt: 'EzyHelpers - Home Services'
      }
    ]
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover'
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
        
        {/* Ultra-aggressive CSS deferral to eliminate render blocking */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Ultra-fast CSS loading with minimal blocking
            (function() {
              var cssLoaded = false;
              
              function loadCSS(href, media) {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                link.media = media || 'print';
                link.onload = function() { 
                  this.media = 'all';
                  this.onload = null;
                };
                document.head.appendChild(link);
                return link;
              }
              
              function loadAllCSS() {
                if (cssLoaded) return;
                cssLoaded = true;
                
                // Load non-critical CSS immediately after critical render
                loadCSS('/dom-optimizations.css');
                
                // Preload any other CSS that might be needed
                var preloadLink = document.createElement('link');
                preloadLink.rel = 'preload';
                preloadLink.as = 'style';
                preloadLink.href = '/dom-optimizations.css';
                document.head.appendChild(preloadLink);
              }
              
              // Load immediately after DOM is ready (non-blocking)
              if (document.readyState !== 'loading') {
                setTimeout(loadAllCSS, 50);
              } else {
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(loadAllCSS, 50);
                });
              }
              
              // Also load on any user interaction for instant response
              var events = ['mousedown', 'touchstart', 'keydown', 'scroll'];
              events.forEach(function(event) {
                document.addEventListener(event, loadAllCSS, { once: true, passive: true });
              });
            })();
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
        
        {/* Tawk.to Chat Widget */}
        <script 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/67188db42480f5b4f591f799/1iaruj2t3';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `
          }}
        />
        
        {/* Custom positioning for Tawk.to chat widget */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Position Tawk.to widget at bottom-right since WhatsApp is now center-right */
            #tawk-bubble {
              bottom: 24px !important;
              right: 24px !important;
              z-index: 45 !important;
            }
            
            /* Ensure Tawk.to chat window aligns properly */
            .tawk-flex-right {
              right: 24px !important;
            }
            
            /* Mobile adjustments - position chat to avoid WhatsApp at 3/4 height */
            @media (max-width: 768px) {
              #tawk-bubble {
                bottom: 100px !important;
                right: 16px !important;
              }
              
              .tawk-flex-right {
                right: 16px !important;
              }
            }
          `
        }} />
        
        {/* Google Analytics - Ultra-deferred to prevent blocking */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Ultra-deferred Google Analytics to eliminate render blocking
            (function() {
              var gaLoaded = false;
              
              function loadGA() {
                if (gaLoaded) return;
                gaLoaded = true;
                
                // Initialize dataLayer first
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                
                // Create and load GA script
                var script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-868JRCDRFW';
                script.onload = function() {
                  gtag('js', new Date());
                  gtag('config', 'G-868JRCDRFW', {
                    page_title: document.title,
                    page_location: window.location.href,
                    send_page_view: true
                  });
                };
                document.head.appendChild(script);
              }
              
              // Only load after page is fully loaded AND user interacts
              var pageLoaded = false;
              window.addEventListener('load', function() {
                pageLoaded = true;
              });
              
              function checkAndLoadGA() {
                if (pageLoaded) {
                  setTimeout(loadGA, 1000); // 1 second delay after page load
                }
              }
              
              // Load on user interaction (but only after page is loaded)
              var events = ['mousedown', 'touchstart', 'keydown', 'scroll', 'click'];
              events.forEach(function(event) {
                document.addEventListener(event, function() {
                  if (pageLoaded) loadGA();
                }, { once: true, passive: true });
              });
              
              // Fallback: load after 5 seconds if page is loaded
              setTimeout(function() {
                if (pageLoaded) loadGA();
              }, 5000);
            })();
          `
        }} />
        
        {/* Microsoft Clarity */}
        <script 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sq13l291nk");
            `
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EzyHelpers",
              "url": "https://ezyhelpers.com",
              "logo": "https://ezyhelpers.com/ezyhelper_logo_new.png",
              "sameAs": [
                "https://www.facebook.com/ezyhelpers",
                "https://twitter.com/ezyhelpers",
                "https://www.linkedin.com/company/ezyhelpers"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9972571005",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://ezyhelpers.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ezyhelpers.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
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