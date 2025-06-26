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
      
      // Optimize for modern browsers with aggressive tree-shaking
      config.optimization = {
        ...config.optimization,
        // Enable maximum optimizations
        usedExports: true,
        sideEffects: false,
        innerGraph: true,
        // Minimize bundle size aggressively
        minimize: true,
        // More efficient chunk splitting
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
        // Eliminate all legacy polyfills
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
      };
      
      // Exclude unnecessary modules
      config.externals = {
        ...config.externals,
        'core-js': 'var {}',
        'regenerator-runtime': 'var {}',
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