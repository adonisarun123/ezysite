/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
    ],
    // Enable modern image formats for better compression (AVIF first for best compression)
    formats: ['image/avif', 'image/webp'],
    // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,
  },

  // Enable compression and optimization
  compress: true,

  // Configure SWC for modern browsers
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
    // Enable optimizations for modern JS
    styledComponents: false,
  },

  serverExternalPackages: ['puppeteer-core', '@sparticuz/chromium', 'nodemailer'],

  // Target modern browsers only to reduce bundle size
  experimental: {
    // Enable modern build features
    esmExternals: true,
    // Enable optimizations that are safe
    forceSwcTransforms: true,
    // Inline and remove unused CSS chunks to prevent 404s
    optimizeCss: true,
    // Automatically rewrite package imports to the exact path for better tree-shaking
    optimizePackageImports: [
      '@heroicons/react',
      'date-fns',
      '@radix-ui/react-dialog',
      '@radix-ui/react-select',
      'react-hook-form',
      'libphonenumber-js',
      'zod',
    ],
  },

  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,

  // Lint at build: current codebase has 0 errors (warnings don't fail builds)
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Headers for better caching, security and performance
  async headers() {
    return [
      {
        // Security + no-cache for all HTML pages
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            // HTML uses ISR-friendly caching: browser revalidates, CDN caches for 1h,
            // SWR allows serving stale up to 24h while revalidating in background.
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups'
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://connect.facebook.net https://*.facebook.com https://*.facebook.net https://*.trustpilot.com https://widget.trustpilot.com https://translate.google.com https://translate.googleapis.com https://www.google.com https://www.gstatic.com https://*.tawk.to https://embed.tawk.to https://www.clarity.ms https://*.clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.trustpilot.com https://translate.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.facebook.com https://*.tawk.to wss://*.tawk.to https://*.clarity.ms https://api.razorpay.com https://lumberjack.razorpay.com https://server.arcgisonline.com https://demotiles.maplibre.org; worker-src 'self' blob:; frame-src https://www.googletagmanager.com https://*.facebook.com https://*.tawk.to https://*.trustpilot.com https://www.google.com https://td.doubleclick.net https://api.razorpay.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests"
          },
        ],
      },
      {
        // Cache static assets (JS/CSS/fonts) for 1 year — safe because filenames are content-hashed
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache public images and other static files for 30 days
        source: '/(.*\.(?:jpg|jpeg|png|gif|webp|svg|ico|woff2|woff|ttf|otf))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },

  // Permanent redirects from legacy URLs to new structure
  async redirects() {
    return [
      // Blog slug cleanup (June 2026): old CamelCase/typo slugs -> clean kebab-case.
      // Old URLs are indexed in Google, so these 301s preserve rankings.
      { source: '/blog/Top-Personal-Kitchen-Hygiene-Tips-Every-Home-Cook-in-India', destination: '/blog/kitchen-hygiene-tips-home-cooks-india', permanent: true },
      { source: '/blog/Companionship-Care-for-Seniors', destination: '/blog/companionship-care-for-seniors', permanent: true },
      { source: '/blog/Beyond-the-9-to-5', destination: '/blog/24-7-live-in-nanny-bangalore-working-parents', permanent: true },
      { source: '/blog/The-Ultimate-Guide-to-Finding-Trusted-Domestic-Help-Services-in-Bareilly', destination: '/blog/trusted-domestic-help-services-bareilly-guide', permanent: true },
      { source: '/blog/Breaking-the-Myths', destination: '/blog/part-time-maid-myths-indian-homes', permanent: true },
      { source: '/blog/Domestc-Help-Etiquette', destination: '/blog/domestic-help-etiquette-working-relationship', permanent: true },
      { source: '/blog/North-Indian-vs-South-Indian-Live-in-Cooks', destination: '/blog/north-indian-vs-south-indian-live-in-cooks', permanent: true },
      { source: '/blog/The-Evolution-of-House-Maid-Services-in-India', destination: '/blog/evolution-house-maid-services-india', permanent: true },
      // 1
      { source: '/home', destination: '/', permanent: true },
      // 2
      { source: '/hiring-helpers', destination: '/hire-helper', permanent: true },
      // 3
      { source: '/services/elderlycare', destination: '/services/elderly-care', permanent: true },
      // 4
      { source: '/services/full-time-helpers', destination: '/services/full-time-maids', permanent: true },
      // 5
      { source: '/services/part-time-helpers', destination: '/services/part-time-maids', permanent: true },
      // 6
      { source: '/services/live-in-helper', destination: '/services/live-in-maids', permanent: true },
      // 7
      { source: '/services/childcare-nanny', destination: '/services/nanny-babysitter', permanent: true },
      // 8
      { source: '/services/cook-north-south-indian-chinese-continental', destination: '/services/cooks', permanent: true },
      // 9
      { source: '/category/primary-services', destination: '/services', permanent: true },
      // 10
      { source: '/product/on-demand-helper', destination: '/services/on-demand-helpers', permanent: true },
      // 11
      { source: '/product/live-in-helper', destination: '/services/live-in-maids', permanent: true },
      // 12
      { source: '/product/full-time-helper', destination: '/services/full-time-maids', permanent: true },
      // 13
      { source: '/terms-and-conditions', destination: '/terms-of-service', permanent: true },
      // 14
      { source: '/landing-page', destination: '/cities/bangalore', permanent: true },
      // 15
      { source: '/ezyelders', destination: '/', permanent: true },
      // 16
      { source: '/services/elderly-engagement-new', destination: '/services/elderly-care', permanent: true },
      // 17
      { source: '/hire-a-maid-or-domestic-helpers', destination: '/services', permanent: true },
      // 18
      { source: '/blog-post-categories/articles', destination: '/blog', permanent: true },
      // 19 (handle with and without trailing slash)
      { source: '/page', destination: '/', permanent: true },
      { source: '/page/', destination: '/', permanent: true },
      // 20 (no-op; skipping redirect to identical path to avoid loop)
      // 21
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      // 22
      { source: '/terms', destination: '/terms-of-service', permanent: true },
      // 23 (handle with and without trailing slash)
      { source: '/home-1', destination: '/', permanent: true },
      { source: '/home-1/', destination: '/', permanent: true },
      // 24-28 blog posts -> blog
      { source: '/blog/household-safety-security-best-practices-with-live-in-helper', destination: '/blog', permanent: true },
      { source: '/blog/why-your-helpers-also-deserve-some-monthly-time-off', destination: '/blog', permanent: true },
      // Retargeted (June 2026) from generic /blog to the closest-matching new guides
      { source: '/blog/the-existing-process-of-hiring-a-24-hours-domestic-helper', destination: '/blog/24-hour-maid-service-bangalore-how-it-works', permanent: true },
      { source: '/blog/difference-between-24-hours-live-in-and-full-day-helper', destination: '/blog/live-in-maid-vs-full-time-maid-bangalore', permanent: true },
      { source: '/blog/generally-we-dont-verify-our-helpers-why', destination: '/blog/complete-guide-to-maid-verification-and-background-check-in-india', permanent: true },
      // 29
      { source: '/services/travel-nanny', destination: '/cities/bangalore/travel-nanny', permanent: true },
      // 30 - Duplicate page consolidation: live-in-maid (singular) -> live-in-maids (plural canonical)
      { source: '/cities/bangalore/live-in-maid', destination: '/cities/bangalore/live-in-maids', permanent: true },
      // 31 - Careers: Field Officer role slug rename
      {
        source: '/careers/operations-lead-field-quality',
        destination: '/careers/field-officer-bangalore',
        permanent: true,
      },
      { source: '/agent-success', destination: '/thank-you?type=agent', permanent: false },
      { source: '/helper-success', destination: '/thank-you?type=helper', permanent: false },
      // Care cluster moved under /care-services/ (2026)
      { source: '/home-care-services-bangalore', destination: '/care-services/home-care-services-bangalore', permanent: true },
      { source: '/home-healthcare-services-bangalore', destination: '/care-services/home-healthcare-services-bangalore', permanent: true },
      { source: '/home-nursing-services-bangalore', destination: '/care-services/home-nursing-services-bangalore', permanent: true },
      { source: '/elderly-care-services-bangalore', destination: '/care-services/elderly-care-services-bangalore', permanent: true },
      { source: '/caretaker-services-bangalore', destination: '/care-services/caretaker-services-bangalore', permanent: true },
      { source: '/patient-care-services-bangalore', destination: '/care-services/patient-care-services-bangalore', permanent: true },
      { source: '/home-attendant-services-bangalore', destination: '/care-services/home-attendant-services-bangalore', permanent: true },
      { source: '/trained-attendant-services-bangalore', destination: '/care-services/trained-attendant-services-bangalore', permanent: true },
      { source: '/care-services-enquiry', destination: '/care-services/enquiry', permanent: true },
      // SEO consolidation: cannibalization fixes
      { source: '/services/japa', destination: '/services/japa-nanny-services', permanent: true },
      { source: '/services/babysitter', destination: '/services/nanny-babysitter', permanent: true },
      { source: '/services/english-speaking-babysitters', destination: '/services/nanny-babysitter', permanent: true },
      { source: '/jobs', destination: '/helper-jobs', permanent: true },
    ]
  },
}

module.exports = nextConfig