/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
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
  
  // Target modern browsers only
  experimental: {
    // Enable modern build features
    esmExternals: true,
    // Enable optimizations that are safe
    forceSwcTransforms: true,
  },
  
  // Webpack configuration for modern browsers
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Disable filesystem cache that sometimes leads to missing pack.gz errors in dev
      config.cache = {
        type: 'memory',
      }
    }
    if (!dev && !isServer) {
      // Target ES2020+ for client-side bundles
      config.target = ['web', 'es2020'];
      
      // Optimize for modern browsers
      config.optimization = {
        ...config.optimization,
        // Enable advanced optimizations
        usedExports: true,
        sideEffects: false,
        // Minimize bundle size
        minimize: true,
      };
      
      // Remove polyfills for modern features
      config.resolve.alias = {
        ...config.resolve.alias,
        // Don't include polyfills for modern JS features
        'core-js/modules/es.array.at': false,
        'core-js/modules/es.array.flat': false,
        'core-js/modules/es.array.flat-map': false,
        'core-js/modules/es.object.from-entries': false,
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
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig 