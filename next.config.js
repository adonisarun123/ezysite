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
  },
  
  // Webpack configuration for modern browsers to reduce legacy JS
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Disable filesystem cache that sometimes leads to missing pack.gz errors in dev
      config.cache = {
        type: 'memory',
      }
    }
    if (!dev && !isServer) {
      // Target ES2020+ for client-side bundles (removes 43KB of legacy polyfills)
      config.target = ['web', 'es2020'];
      
      // Optimize for modern browsers
      config.optimization = {
        ...config.optimization,
        // Enable advanced optimizations
        usedExports: true,
        sideEffects: false,
        // Minimize bundle size
        minimize: true,
        // Split chunks more efficiently
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            common: {
              minChunks: 2,
              chunks: 'all',
              enforce: true,
              priority: 5,
            },
          },
        },
      };
      
      // Remove polyfills for modern features that cause 43KB waste
      config.resolve.alias = {
        ...config.resolve.alias,
        // Don't include polyfills for modern JS features
        'core-js/modules/es.array.at': false,
        'core-js/modules/es.array.flat': false,
        'core-js/modules/es.array.flat-map': false,
        'core-js/modules/es.object.from-entries': false,
        'core-js/modules/es.object.has-own': false,
        'core-js/modules/es.string.trim-start': false,
        'core-js/modules/es.string.trim-end': false,
        'core-js/modules/es.promise': false,
        'core-js/modules/es.promise.finally': false,
      };
    }
    
    return config;
  },
  
  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  
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
}

module.exports = nextConfig 