import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Noto_Sans_Devanagari, Poppins, Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { OrganizationSchema, WebSiteSchema } from '../components/schema'
import { UrgencyProvider } from '../components/UrgencyContext'
import ClientOnlyWidgets from '../components/ClientOnlyWidgets'
import ThirdPartyScripts from '../components/ThirdPartyScripts'

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

/** Care cluster landing — Airbnb-style serif + humanist UI (scoped via Tailwind `font-careSerif` / `font-careUi`) */
const careSerif = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-care-serif',
  preload: false,
  weight: ['400', '500', '600', '700'],
})

const careUi = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-care-ui',
  preload: false,
  weight: ['400', '500', '600', '700', '800'],
})

/** Hindi/Devanagari UI only — preload off so English LCP is not delayed */
const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-devanagari',
  preload: false,
  adjustFontFallback: true,
})



export const metadata: Metadata = {
  metadataBase: new URL('https://www.ezyhelpers.com'),
  title: 'Trusted House Help Service | EzyHelpers',
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
  // Do not set alternates.canonical here — it was inherited by all routes and
  // made every URL canonicalize to "/", which broke sitemap vs <link rel="canonical">.
  openGraph: {
    title: 'EzyHelpers - Trusted House Maid Services & Complete Home Help',
    description: 'Connect with verified professionals for all your home needs. Transparent pricing, quick booking, exceptional service.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'EzyHelpers',
    url: 'https://www.ezyhelpers.com',
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
        url: 'https://www.ezyhelpers.com/ezyhelper_logo_new.png',
        width: 1200,
        height: 630,
        alt: 'EzyHelpers - Home Services'
      }
    ]
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGM9V53');`}
        </Script>
        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0074C8" />

        {/* Core Schema Markup */}
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${notoSansDevanagari.variable} ${careSerif.variable} ${careUi.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGM9V53"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* Skip to main content — visible on keyboard focus for screen reader / keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:text-sm focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <UrgencyProvider>
          <div id="main-content">
            {children}
          </div>
          <ClientOnlyWidgets />
        </UrgencyProvider>
        <ThirdPartyScripts />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=1223380436207834&ev=PageView&noscript=1" />`,
          }}
        />
      </body>
    </html>
  )
} 