// Minimal polyfills for essential features only
// This file is intentionally almost empty to reduce bundle size

// Only include polyfills if absolutely necessary for your target browsers
// Modern browsers (ES2022+) don't need these polyfills

// Uncomment only if you need to support very old browsers
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// For modern browsers, this file should remain empty or minimal
if (typeof window !== 'undefined') {
  console.log('Polyfills loaded - modern browsers require minimal polyfills');
}
if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  import('intersection-observer')
}

// ResizeObserver for responsive components (needed for some browsers)
if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
  import('@juggle/resize-observer').then(module => {
    window.ResizeObserver = module.ResizeObserver
  })
}

// Remove all other polyfills as they're not needed for modern browsers:
// - Array.prototype.at (supported in Chrome 92+, Firefox 90+, Safari 15.4+)
// - Array.prototype.flat (supported in Chrome 69+, Firefox 62+, Safari 12+)
// - Array.prototype.flatMap (supported in Chrome 69+, Firefox 62+, Safari 12+)
// - Object.fromEntries (supported in Chrome 73+, Firefox 63+, Safari 12.1+)
// - Object.hasOwn (supported in Chrome 93+, Firefox 92+, Safari 15.4+)
// - String.prototype.trimStart/trimEnd (supported in Chrome 66+, Firefox 61+, Safari 12+)
