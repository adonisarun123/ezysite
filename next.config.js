/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Enable compression and optimization
  compress: true,
  // Optimize build output
  swcMinify: true,
  
  // Configure SWC for modern browsers
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Disable legacy browser support completely
  experimental: {
    // Disable runtime polyfills for legacy browsers
    esmExternals: true,
  },
  
  // Webpack configuration for modern JS
  webpack: (config, { dev, isServer, webpack }) => {
    if (!dev && !isServer) {
      // Target modern JavaScript for client bundles
      config.target = ['web', 'es2020'];
      
      // Replace polyfills with empty modules for modern browsers
      config.resolve.alias = {
        ...config.resolve.alias,
        // Override core-js polyfills with empty modules
        'core-js/modules/es.array.at': false,
        'core-js/modules/es.array.flat': false,
        'core-js/modules/es.array.flat-map': false,
        'core-js/modules/es.object.from-entries': false,
        'core-js/modules/es.string.trim-start': false,
        'core-js/modules/es.string.trim-end': false,
      };
      
      // Use ProvidePlugin to provide native implementations
      config.plugins.push(
        new webpack.ProvidePlugin({
          // Ensure native implementations are used
        })
      );
      
      // Disable polyfills injection
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // Disable Node.js polyfills that might include legacy features
        crypto: false,
        stream: false,
        assert: false,
        http: false,
        https: false,
        os: false,
        url: false,
        zlib: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig 