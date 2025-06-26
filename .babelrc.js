module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          // Target only modern browsers to eliminate polyfills
          targets: {
            browsers: [
              'Chrome >= 88',
              'Firefox >= 85', 
              'Safari >= 14',
              'Edge >= 88'
            ]
          },
          // Disable ALL polyfills
          useBuiltIns: false,
          corejs: false,
          // Don't transform modern JS features
          modules: false,
          // Disable legacy transforms
          exclude: [
            'transform-async-to-generator',
            'transform-regenerator',
            'transform-runtime'
          ]
        }
      }
    ]
  ],
  plugins: [
    // Only include essential plugins for modern browsers
  ],
  env: {
    production: {
      plugins: [
        // Remove console logs in production
        ['transform-remove-console', { exclude: ['error', 'warn'] }]
      ]
    }
  }
}; 