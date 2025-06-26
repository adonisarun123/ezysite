// NO POLYFILLS - Modern browsers only (ES2022+)
// This file is intentionally empty to eliminate all polyfill overhead

// Target browsers: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
// These browsers support all ES2022+ features natively

// Only load IntersectionObserver polyfill if absolutely necessary
if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  // Only for very old browsers - most modern browsers have this
  import('intersection-observer').catch(() => {
    // Graceful fallback if polyfill fails to load
    console.warn('IntersectionObserver polyfill failed to load');
  });
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
