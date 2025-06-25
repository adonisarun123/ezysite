// Minimal polyfills for modern browsers only
// This eliminates 43KB of unnecessary legacy JavaScript polyfills

// Only include absolutely essential polyfills for modern browsers
// Most modern browsers (Chrome 88+, Firefox 85+, Safari 14+) support these natively

// Intersection Observer for lazy loading (still needed for some older mobile browsers)
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
