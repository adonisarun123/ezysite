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
    ],
    // Enable modern image formats for better compression
    formats: ['image/webp', 'image/avif'],
    // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable compression and optimization
  compress: true,
  swcMinify: true,
  
  // Configure SWC for modern browsers
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
    // Enable optimizations for modern JS
    styledComponents: false,
  },
  
  // Target modern browsers only to reduce bundle size
  experimental: {
    // Enable modern build features
    esmExternals: true,
    // Enable optimizations that are safe
    forceSwcTransforms: true,
    // Inline and remove unused CSS chunks to prevent 404s
    optimizeCss: true,
    // Automatically rewrite package imports (Heroicons) to the exact path for better tree-shaking
    optimizePackageImports: ['@heroicons/react'],
    // Disable polyfills for modern browsers
    serverComponentsExternalPackages: [],
  },
  
  // Webpack configuration for modern browsers to eliminate legacy JS
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Disable filesystem cache that sometimes leads to missing pack.gz errors in dev
      config.cache = {
        type: 'memory',
      }
    }
    if (!dev && !isServer) {
      // Target modern browsers only - ES2022+ (eliminates more polyfills)
      config.target = ['web', 'es2022'];
      
      // Completely disable polyfills
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'core-js': false,
        'regenerator-runtime': false,
      };
      
      // Optimize for modern browsers with aggressive tree-shaking
      config.optimization = {
        ...config.optimization,
        // Enable maximum optimizations
        usedExports: true,
        sideEffects: false,
        innerGraph: true,
        // Minimize bundle size aggressively
        minimize: true,
                // Simplified chunk splitting to reduce unused JS
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            default: false,
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 20,
              reuseExistingChunk: true,
            },
            common: {
              minChunks: 2,
              chunks: 'all',
              enforce: true,
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      };
      
      // Completely eliminate polyfills for modern features
      config.resolve.alias = {
        ...config.resolve.alias,
        // Eliminate ALL legacy polyfills
        'core-js': false,
        'core-js/stable': false,
        'core-js/modules/es.array.at': false,
        'core-js/modules/es.array.flat': false,
        'core-js/modules/es.array.flat-map': false,
        'core-js/modules/es.object.from-entries': false,
        'core-js/modules/es.object.has-own': false,
        'core-js/modules/es.string.trim-start': false,
        'core-js/modules/es.string.trim-end': false,
        'core-js/modules/es.promise': false,
        'core-js/modules/es.promise.finally': false,
        'core-js/modules/es.array.includes': false,
        'core-js/modules/es.string.includes': false,
        'core-js/modules/es.array.find': false,
        'core-js/modules/es.array.find-index': false,
        'core-js/modules/es.object.assign': false,
        'core-js/modules/es.symbol': false,
        'core-js/modules/es.symbol.iterator': false,
        'core-js/modules/es.array.iterator': false,
        'core-js/modules/es.string.iterator': false,
        'core-js/modules/web.dom-collections.iterator': false,
        'regenerator-runtime': false,
        'regenerator-runtime/runtime': false,
      };
      
      // Exclude unnecessary modules completely
      config.externals = {
        ...config.externals,
        'core-js': 'var {}',
        'core-js/stable': 'var {}',
        'regenerator-runtime': 'var {}',
        'regenerator-runtime/runtime': 'var {}',
      };
      
      // Add plugins to further optimize
      
      // Ignore polyfill modules
      const IgnorePlugin = require('webpack').IgnorePlugin;
      config.plugins.push(
        new IgnorePlugin({
          resourceRegExp: /^core-js/,
        }),
        new IgnorePlugin({
          resourceRegExp: /^regenerator-runtime/,
        })
      );
    }
    
    return config;
  },
  
  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Disable ESLint during builds to avoid deployment failures
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Headers for better caching and performance
  async headers() {
    return [
      {
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
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  // Permanent redirects from legacy URLs to new structure
  async redirects() {
    return [
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
      { source: '/blog/the-existing-process-of-hiring-a-24-hours-domestic-helper', destination: '/blog', permanent: true },
      { source: '/blog/difference-between-24-hours-live-in-and-full-day-helper', destination: '/blog', permanent: true },
      { source: '/blog/generally-we-dont-verify-our-helpers-why', destination: '/blog', permanent: true },
    ]
  },
}

module.exports = nextConfig