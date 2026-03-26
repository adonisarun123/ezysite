# Website Pre-Launch Testing Checklist

> **Purpose:** Exhaustive test cases to run before going live. Check off each item as you verify it.
> **Last Updated:** March 2026

---

## 1. Responsiveness & Cross-Device Testing

### 1.1 Breakpoints
- [x] Mobile portrait (320px — iPhone SE / small Android)
- [x] Mobile portrait (375px — iPhone 12/13/14)
- [x] Mobile portrait (390px — iPhone 14 Pro)
- [x] Mobile landscape (667px)
- [x] Tablet portrait (768px — iPad Mini / standard)
- [x] Tablet landscape (1024px — iPad Air / Pro)
- [x] Small laptop (1280px)
- [x] Desktop (1440px)
- [ ] Large desktop / ultrawide (1920px)
- [x] 4K / HiDPI (2560px+)

### 1.2 Touch & Interaction
- [x] All tap targets are minimum 44×44px on mobile
- [x] No hover-only interactions that break on touch devices
- [x] Swipe gestures work where expected (carousels, galleries)
- [x] Pinch-to-zoom is not disabled unless justified
- [x] No horizontal scrollbar appears on any breakpoint
- [ ] Sticky headers / footers don't overlap content on small screens
- [ ] Modals and popups are scrollable and dismissible on mobile
- [ ] Keyboard does not obscure active input fields on mobile

### 1.3 Browser Testing
- [x] Chrome (latest — desktop & mobile)
- [x] Firefox (latest — desktop & mobile)
- [x] Safari (latest — macOS & iOS)
- [x] Edge (latest — desktop)
- [x] Samsung Internet (latest — Android)
- [x] Opera (latest)
- [x] Check for CSS Grid / Flexbox fallback if supporting older browsers

### 1.4 Orientation & Viewport
- [x] Portrait-to-landscape switch doesn't break layout
- [x] `<meta name="viewport" content="width=device-width, initial-scale=1">` is present
- [ ] No content is cut off after orientation change
- [x] Safe area insets handled for notched devices (iPhone, newer Android)

---

## 2. SEO — On-Page

### 2.1 Title Tags
- [x] Every page has a unique `<title>` tag
- [x] Title is 50–60 characters (within pixel width limit)
- [x] Primary keyword appears near the beginning of the title
- [x] Brand name is appended consistently (e.g., `| BrandName`)
- [x] No duplicate title tags across the site

### 2.2 Meta Descriptions
- [x] Every page has a unique `<meta name="description">` tag
- [x] Description is 150–160 characters
- [x] Includes primary keyword naturally
- [ ] Contains a clear call-to-action or value proposition
- [ ] No duplicate meta descriptions across the site

### 2.3 Heading Hierarchy
- [x] Only one `<h1>` per page
- [x] H1 contains the primary keyword for that page
- [x] Heading hierarchy is logical (H1 → H2 → H3, no skipping)
- [x] No headings used purely for styling (use CSS instead)
- [ ] Subheadings (H2/H3) include secondary / LSI keywords where natural

### 2.4 Content & Keywords
- [x] Primary keyword appears in the first 100 words of body copy
- [ ] Keyword density is natural (1–2%, no stuffing)
- [ ] LSI / related keywords are woven into the content
- [ ] Content is original — no duplicate or thin content flagged by Copyscape or similar
- [x] Internal links use descriptive anchor text (not "click here")
- [x] Every page has a minimum of 300+ words of unique content (or is explicitly a utility page)

### 2.5 Images — On-Page SEO
- [x] Every `<img>` has a descriptive `alt` attribute
- [ ] Alt text includes relevant keywords where natural
- [x] Image file names are descriptive and hyphenated (e.g., `team-building-bangalore.webp`)
- [x] No `alt` text is left blank or set to the filename
- [ ] Decorative images use `alt=""` (empty) and `role="presentation"`

### 2.6 URL Structure
- [x] URLs are short, readable, and hyphenated (no underscores)
- [x] URLs contain the primary keyword for the page
- [x] No dynamic parameters in public-facing URLs (e.g., `?id=123`)
- [x] Consistent trailing-slash policy (either always or never)
- [x] No uppercase letters in URLs
- [ ] No special characters or encoded spaces

### 2.7 Internal Linking
- [x] Every important page is reachable within 3 clicks from the homepage
- [x] Breadcrumbs are present and functional on all inner pages
- [x] Contextual internal links exist within body content
- [x] No orphan pages (pages with zero internal links pointing to them)
- [ ] Pagination uses `rel="next"` / `rel="prev"` where applicable

---

## 3. SEO — Technical

### 3.1 Crawlability
- [x] `robots.txt` is present at the root and correctly configured
- [x] `robots.txt` does not block important pages or assets (CSS, JS, images)
- [x] XML sitemap is submitted and accessible (see Section 6)
- [x] No important pages return `noindex` unintentionally
- [ ] No important pages are blocked by `disallow` in robots.txt
- [ ] `X-Robots-Tag` HTTP headers are not accidentally blocking pages

### 3.2 Indexability
- [x] Canonical tags (`rel="canonical"`) are present on every page
- [x] Canonical tags point to the correct, preferred URL
- [ ] No self-referencing canonical issues on paginated pages (unless intended)
- [ ] Hreflang tags are correctly implemented (if multilingual)
- [x] No `noindex` meta tags on pages that should be indexed
- [ ] Check Google Search Console for index coverage errors

### 3.3 HTTPS & Security
- [ ] SSL certificate is valid and not expiring soon
- [ ] All pages load over HTTPS
- [ ] HTTP → HTTPS redirect is in place (301, not 302)
- [ ] No mixed content warnings (HTTP resources on HTTPS pages)
- [ ] HSTS header is enabled (`Strict-Transport-Security`)
- [ ] Security headers present: `X-Content-Type-Options`, `X-Frame-Options`, `Content-Security-Policy`

### 3.4 Redirects
- [ ] All old URLs redirect to new URLs via 301 (permanent)
- [ ] No redirect chains (A → B → C; should be A → C)
- [ ] No redirect loops
- [ ] www vs. non-www is consistent (one redirects to the other)
- [ ] HTTP to HTTPS redirect works for all pages
- [ ] Trailing slash / non-trailing slash is consistent

### 3.5 Page Speed Signals
- [ ] Server response time (TTFB) is under 200ms
- [ ] No render-blocking resources above the fold
- [ ] Preconnect / DNS-prefetch for third-party domains
- [ ] Font-display: swap is set for web fonts
- [ ] No excessive 301 redirect chains slowing down page loads

### 3.6 Mobile-First Indexing
- [ ] Mobile version has the same content as desktop
- [ ] Structured data is present on the mobile version
- [ ] Meta tags (title, description, robots) are identical on mobile
- [ ] Images and videos are accessible on the mobile version
- [ ] Mobile page loads within 3 seconds on 3G simulation

### 3.7 Crawl Budget & Architecture
- [ ] Site depth is shallow (max 3–4 levels)
- [ ] Faceted navigation / filters don't create thousands of crawlable URLs
- [ ] Session IDs are not appended to URLs
- [ ] No infinite scroll without crawlable pagination fallback
- [ ] Parameter handling is configured in Google Search Console

---

## 4. Structured Data / Schema Markup

### 4.1 Implementation
- [x] Schema is valid JSON-LD (preferred over Microdata / RDFa)
- [x] Schema is placed in `<head>` or `<body>` (not in `<script>` tags inside `<noscript>`)
- [ ] Validated with Google Rich Results Test (https://search.google.com/test/rich-results)
- [ ] Validated with Schema.org Validator (https://validator.schema.org/)
- [ ] No errors or warnings in validation tools

### 4.2 Required Schemas by Page Type
- [x] **Homepage:** `Organization` or `LocalBusiness` schema
- [ ] **About Page:** `Organization` with `sameAs` links to social profiles
- [ ] **Contact Page:** `LocalBusiness` with address, phone, hours
- [ ] **Blog Posts:** `Article` or `BlogPosting` schema with author, date, image
- [ ] **Service Pages:** `Service` schema with provider, area served, description
- [ ] **Product Pages:** `Product` schema with price, availability, reviews (if e-commerce)
- [x] **FAQ Pages:** `FAQPage` schema with question-answer pairs
- [ ] **Event Pages:** `Event` schema with date, location, performer (if applicable)
- [ ] **Review/Testimonial Pages:** `Review` or `AggregateRating` schema
- [ ] **Team/People Pages:** `Person` schema with name, role, image

### 4.3 Additional Schemas
- [x] `BreadcrumbList` schema matches visible breadcrumbs
- [ ] `WebSite` schema with `SearchAction` (for sitelinks search box)
- [ ] `SpeakableSpecification` schema on key content (for voice search / AEO)
- [ ] `VideoObject` schema on pages with embedded videos
- [ ] `ImageObject` schema on key image galleries
- [ ] `HowTo` schema on tutorial/guide pages

### 4.4 Schema Quality
- [ ] All required properties are filled (no empty fields)
- [ ] `@id` is used consistently for entity linking across pages
- [ ] Logo URL in Organization schema points to a high-res image
- [ ] Social profile URLs in `sameAs` are all correct and active
- [ ] Dates are in ISO 8601 format

---

## 5. Answer Engine Optimization (AEO)

### 5.1 Featured Snippet Optimization
- [ ] Key pages have a clear question as H2 followed by a concise 40–60 word answer paragraph
- [ ] List-style content uses proper `<ol>` / `<ul>` markup
- [ ] Table data uses proper `<table>` markup (not images of tables)
- [ ] "What is," "How to," "Why," "Best" questions are targeted in headings
- [ ] Definitions and direct answers appear within the first 100 words under the heading

### 5.2 Voice Search Readiness
- [ ] Content answers conversational, long-tail queries naturally
- [ ] FAQ sections use natural question phrasing (how people actually speak)
- [ ] `SpeakableSpecification` schema is present on key informational pages
- [ ] Page content reads well when spoken aloud (no jargon-heavy run-on sentences)
- [ ] Local queries include city/region naturally in content (if local business)

### 5.3 AI Overview / SGE Optimization
- [ ] Content is structured in clear, attributable, fact-based paragraphs
- [ ] Source authority is established (author bios, credentials, about page)
- [ ] E-E-A-T signals are present: experience, expertise, authoritativeness, trustworthiness
- [ ] Content provides unique value / original data / proprietary insights
- [ ] Pages are citeable — short, declarative summary sentences per section

### 5.4 People Also Ask (PAA) Targeting
- [ ] Secondary questions are addressed in H2/H3 subheadings
- [ ] Each PAA-style question has a standalone, self-contained answer
- [ ] Related questions link to deeper content via internal links
- [ ] FAQ schema is implemented for pages targeting PAA

---

## 6. Sitemaps

### 6.1 XML Sitemap
- [x] Sitemap is accessible at `/sitemap.xml`
- [x] Sitemap is referenced in `robots.txt`
- [ ] Sitemap is submitted to Google Search Console
- [ ] Sitemap is submitted to Bing Webmaster Tools
- [x] All indexable pages are included
- [x] No `noindex` or `4xx`/`5xx` pages are in the sitemap
- [ ] No redirect URLs are in the sitemap (only final destination URLs)
- [ ] `<lastmod>` dates are accurate and updated
- [ ] Sitemap does not exceed 50,000 URLs or 50MB (split if needed)
- [ ] Sitemap index file is used if multiple sitemaps exist

### 6.2 Image Sitemap
- [ ] Important images are included in the sitemap (or image extensions in the main sitemap)
- [ ] Image `<loc>`, `<title>`, and `<caption>` tags are filled

### 6.3 Video Sitemap
- [ ] Videos have a dedicated video sitemap (or video extensions in the main sitemap)
- [ ] `<video:thumbnail_loc>`, `<video:title>`, `<video:description>` are present

### 6.4 HTML Sitemap
- [ ] An HTML sitemap page exists for users (linked in footer)
- [ ] HTML sitemap covers all major sections and pages
- [ ] Links in HTML sitemap are not broken

---

## 7. Code Quality

### 7.1 HTML Validation
- [x] HTML passes W3C Markup Validation (https://validator.w3.org/)
- [ ] No unclosed tags or nesting errors
- [x] Doctype is declared: `<!DOCTYPE html>`
- [x] `<html>` tag has `lang` attribute set correctly
- [ ] No duplicate `id` attributes on any page
- [x] Semantic HTML elements used correctly (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)

### 7.2 CSS Quality
- [ ] CSS passes W3C CSS Validation (https://jigsaw.w3.org/css-validator/)
- [x] No unused CSS rules (check with Chrome DevTools Coverage tab)
- [ ] No `!important` overuse (audit and minimize)
- [x] CSS is minified in production
- [x] No inline styles on elements (all styles in external stylesheets or CSS-in-JS)
- [x] CSS custom properties (variables) are used for colors, spacing, fonts
- [ ] No vendor prefixes needed that are missing (run through Autoprefixer)
- [ ] Z-index values are managed (no random high values like `z-index: 99999`)
- [ ] Print stylesheet is included (`@media print`)
- [ ] Dark mode styles work correctly (if supported)

### 7.3 JavaScript Quality
- [x] No JavaScript console errors on any page
- [ ] No `console.log` statements left in production code
- [x] JS is minified and bundled in production
- [ ] No unused JavaScript files loaded
- [ ] Event listeners are properly cleaned up (no memory leaks)
- [ ] No blocking JS in `<head>` without `async` or `defer`
- [ ] Error boundaries / try-catch in place for critical functions
- [ ] No use of `eval()` or `document.write()`

### 7.4 Accessibility (a11y)
- [x] All images have `alt` attributes
- [x] Form inputs have associated `<label>` elements
- [ ] Color contrast ratio meets WCAG AA (4.5:1 for text, 3:1 for large text)
- [ ] Focus indicators are visible on all interactive elements
- [ ] Tab order is logical and follows visual flow
- [ ] ARIA landmarks are used (`role="navigation"`, `role="main"`, etc.)
- [x] Skip-to-content link is present
- [ ] Screen reader testing passes (VoiceOver / NVDA / JAWS)
- [ ] No auto-playing audio or video without user control
- [ ] Error messages are announced to screen readers (aria-live regions)
- [ ] Run Lighthouse Accessibility audit — score should be 90+
- [ ] Run axe DevTools — zero critical violations

### 7.5 Code Architecture
- [ ] No hardcoded API keys, secrets, or credentials in frontend code
- [ ] Environment variables are used for configuration
- [ ] No TODO / FIXME / HACK comments left in production code
- [ ] Dependencies are up to date (run `npm audit` or equivalent)
- [ ] No known vulnerabilities in dependencies
- [ ] Source maps are either excluded from production or access-restricted
- [ ] README or documentation exists for the codebase

---

## 8. Page Speed & Performance

### 8.1 Core Web Vitals
- [ ] **LCP (Largest Contentful Paint):** Under 2.5 seconds
- [ ] **INP (Interaction to Next Paint):** Under 200ms
- [ ] **CLS (Cumulative Layout Shift):** Under 0.1
- [ ] Test with Google PageSpeed Insights (https://pagespeed.web.dev/)
- [x] Test with Chrome DevTools Performance tab
- [ ] Test with WebPageTest (https://www.webpagetest.org/)

### 8.2 Image Optimization
- [ ] All images are in next-gen formats (WebP or AVIF with fallbacks)
- [ ] Images are appropriately sized (not loading 2000px images in 300px containers)
- [ ] `srcset` and `sizes` attributes are used for responsive images
- [ ] Lazy loading (`loading="lazy"`) is applied to below-the-fold images
- [ ] Hero / above-the-fold images are eagerly loaded (`loading="eager"` or preloaded)
- [ ] Image compression applied (target: under 100KB for most images)
- [ ] No broken image links (all `<img src>` resolve)

### 8.3 Font Optimization
- [ ] Web fonts are self-hosted or loaded from CDN with `font-display: swap`
- [ ] Only necessary font weights and character sets are loaded
- [ ] Font files are in WOFF2 format
- [ ] Fonts are preloaded for above-the-fold text: `<link rel="preload" as="font">`
- [ ] No more than 2–3 font families loaded

### 8.4 Caching & Compression
- [ ] Gzip or Brotli compression is enabled on the server
- [ ] Static assets have long cache expiry headers (1 year for hashed filenames)
- [ ] HTML has short cache or no-cache (for fresh content delivery)
- [ ] CDN is configured for static assets
- [ ] Service worker caching strategy is appropriate (if using PWA)

### 8.5 Third-Party Scripts
- [ ] Analytics / tracking scripts are loaded asynchronously
- [ ] Tag Manager fires tags efficiently (no redundant tags)
- [ ] Chat widgets, CRM scripts, etc. are lazy-loaded or deferred
- [ ] Total third-party script impact is under 500ms (test with Lighthouse)
- [ ] No scripts from domains that are slow or unreliable

### 8.6 Critical Rendering Path
- [ ] Critical CSS is inlined in `<head>` for above-the-fold content
- [ ] Non-critical CSS is loaded with `media="print" onload="this.media='all'"`
- [ ] JavaScript is deferred or async where possible
- [ ] No render-blocking resources in Lighthouse audit

---

## 9. Open Graph & Social Sharing

### 9.1 Open Graph Tags (Facebook / LinkedIn / General)
- [x] `og:title` is present on every page (unique per page)
- [x] `og:description` is present on every page (unique per page)
- [x] `og:image` is present (minimum 1200×630px recommended)
- [x] `og:image:alt` is present with descriptive text
- [x] `og:url` is the canonical URL
- [x] `og:type` is set (`website` for homepage, `article` for blog posts)
- [x] `og:site_name` is set consistently
- [x] `og:locale` is set (e.g., `en_IN` or `en_US`)
- [ ] Test with Facebook Sharing Debugger (https://developers.facebook.com/tools/debug/)
- [ ] Test with LinkedIn Post Inspector (https://www.linkedin.com/post-inspector/)

### 9.2 Twitter Card Tags
- [x] `twitter:card` is set (`summary_large_image` recommended)
- [x] `twitter:title` is present
- [x] `twitter:description` is present
- [ ] `twitter:image` is present (minimum 800×418px for large image card)
- [ ] `twitter:site` is set to the brand's Twitter/X handle
- [ ] Test with Twitter Card Validator (https://cards-dev.twitter.com/validator)

### 9.3 WhatsApp / Messaging Preview
- [ ] Sharing a link on WhatsApp shows correct title, description, and image
- [ ] OG image is not cropped awkwardly in WhatsApp preview
- [ ] Sharing on Telegram and Signal also shows correct previews

### 9.4 Favicon & App Icons
- [ ] Favicon is present (`/favicon.ico` + `<link rel="icon">`)
- [ ] Multiple sizes provided (16×16, 32×32, 180×180 for Apple Touch)
- [ ] `<link rel="apple-touch-icon">` is present
- [ ] `manifest.json` / `site.webmanifest` is present with icons defined
- [ ] Browser tab shows the correct favicon

---

## 10. Bug Testing & Edge Cases

### 10.1 Navigation
- [x] All navigation links work (no 404s)
- [x] Logo links back to homepage
- [x] Mobile hamburger menu opens and closes correctly
- [ ] Dropdown menus work on both hover (desktop) and tap (mobile)
- [x] Active/current page is highlighted in navigation
- [ ] Back button behavior is correct (no broken history states)
- [ ] Deep linking works (sharing a URL takes user to the correct page/section)

### 10.2 Content & Typography
- [ ] No lorem ipsum / placeholder text remaining
- [ ] No placeholder images remaining
- [ ] No spelling or grammar errors (run Grammarly or similar)
- [ ] Long text content doesn't overflow containers
- [ ] Text is readable on all background colors (contrast)
- [ ] Dynamic content (e.g., from CMS) doesn't break layout with very long or very short text
- [ ] Special characters and emojis render correctly
- [ ] RTL language support works (if applicable)

### 10.3 Error Handling
- [x] Custom 404 page exists and is helpful (with navigation and search)
- [ ] Custom 500 page exists
- [ ] API failures show user-friendly error messages (not raw errors)
- [ ] Network timeout scenarios are handled gracefully
- [ ] Empty states are handled (e.g., "No results found" instead of blank page)
- [ ] Rate limiting returns a user-friendly message

### 10.4 Authentication & Sessions (if applicable)
- [ ] Login and logout work correctly
- [ ] Session expiry is handled gracefully (redirect to login, not a crash)
- [ ] Password reset flow works end-to-end
- [ ] Protected pages redirect unauthenticated users to login
- [ ] "Remember me" functionality works
- [ ] Concurrent sessions are handled properly
- [ ] Login with incorrect credentials shows a clear error (not a server error)

### 10.5 Edge Cases
- [ ] Double-click on submit buttons doesn't cause duplicate submissions
- [ ] Rapid navigation between pages doesn't break the UI
- [ ] Browser refresh on any page loads correctly (no blank screen)
- [ ] Pasting long text into inputs doesn't break layout
- [ ] Empty cart / empty state pages display correctly
- [ ] Extremely long usernames / names don't overflow UI elements
- [ ] JavaScript disabled — site is still usable or shows a graceful fallback
- [ ] Ad blockers don't break site functionality
- [ ] Copy-paste from the site works without hidden characters

---

## 11. Forms Validation

### 11.1 Client-Side Validation
- [x] Required fields show an error when submitted empty
- [x] Email fields validate format (e.g., `user@domain.com`)
- [x] Phone fields accept valid formats and reject invalid ones
- [ ] Password fields enforce minimum strength requirements (if applicable)
- [ ] Error messages are specific ("Enter a valid email" not just "Invalid input")
- [ ] Error messages appear next to the relevant field (not just at the top)
- [ ] Real-time validation works as user types (if implemented)
- [ ] Valid form fields show a success indicator (green check or similar)

### 11.2 Server-Side Validation
- [ ] All client-side validations are mirrored on the server
- [ ] SQL injection attempts are blocked (test with `' OR 1=1--`)
- [ ] XSS attempts are sanitized (test with `<script>alert('xss')</script>`)
- [ ] File upload fields restrict file types and size
- [ ] Server returns proper validation error responses (not 500 errors)

### 11.3 Form UX
- [ ] Submit button shows a loading state while processing
- [ ] Success message / confirmation page is shown after submission
- [ ] Form does not reset after a failed submission (user data is preserved)
- [ ] Autofill works correctly (browser autocomplete)
- [ ] Tab order through form fields is logical
- [ ] Placeholder text disappears on focus (not used as the only label)
- [ ] Date pickers / dropdowns work on all devices
- [ ] Multi-step forms save progress between steps
- [ ] CAPTCHA or anti-spam measures are in place but not overly aggressive

### 11.4 Contact / Lead Forms Specifically
- [ ] Form data reaches the intended recipient (email, CRM, database)
- [ ] Auto-reply / confirmation email is sent to the user
- [ ] Thank-you page or message is displayed
- [ ] Google Analytics / Tag Manager event fires on form submission
- [ ] UTM parameters or referral data is captured with the form submission
- [ ] Form works when accessed from an ad landing page URL

---

## 12. Screen & Device Testing Matrix

### 12.1 Devices to Test

| Device | Screen | OS | Browser |
|---|---|---|---|
| iPhone SE | 375×667 | iOS | Safari |
| iPhone 14 / 15 | 390×844 | iOS | Safari, Chrome |
| iPhone 14 Pro Max | 430×932 | iOS | Safari |
| iPad (10th gen) | 820×1180 | iPadOS | Safari |
| iPad Pro 12.9" | 1024×1366 | iPadOS | Safari |
| Samsung Galaxy S23 | 360×780 | Android 14 | Chrome, Samsung Internet |
| Samsung Galaxy A14 | 384×854 | Android 13 | Chrome |
| Google Pixel 8 | 412×915 | Android 14 | Chrome |
| Windows Laptop | 1366×768 | Windows 11 | Chrome, Edge, Firefox |
| MacBook Air | 1440×900 | macOS | Safari, Chrome |
| Desktop Monitor | 1920×1080 | Windows/macOS | Chrome, Firefox |
| Ultrawide | 2560×1080+ | Windows/macOS | Chrome |

### 12.2 Additional Checks
- [ ] Text remains readable without zooming on all devices
- [ ] Buttons and links are easily tappable on all touch devices
- [ ] No layout overflow or cut-off content
- [ ] Images scale correctly and aren't pixelated
- [ ] Videos play and are controllable on all devices
- [ ] Animations are smooth (no jank on lower-end devices)

---

## 13. Route & Link Audit

### 13.1 All Routes
- [ ] List every route defined in the codebase / CMS
- [ ] Visit each route manually — confirm it loads the correct page
- [ ] No route returns a blank page or a wrong template
- [ ] Dynamic routes (e.g., `/blog/:slug`) work with actual and edge-case slugs
- [ ] Nested routes load parent layouts correctly
- [ ] Protected routes redirect unauthenticated users

### 13.2 Link Audit
- [ ] Run a broken link checker on the entire site (Screaming Frog, Ahrefs, or W3C Link Checker)
- [ ] All internal links resolve (no 404s)
- [ ] All external links resolve (no 404s or 5xx)
- [ ] External links open in a new tab (`target="_blank"`) with `rel="noopener noreferrer"`
- [ ] Anchor links (e.g., `#section`) scroll to the correct position
- [ ] CTA buttons link to the correct destination
- [ ] Footer links all work
- [ ] Social media links point to the correct profiles and open in new tabs

### 13.3 Redirects
- [ ] All known old URLs are mapped and 301-redirected
- [ ] Redirect mapping document exists for reference
- [ ] Run the full redirect map to confirm each one works

---

## 14. CSS-Specific Testing

### 14.1 Layout
- [x] Flexbox / Grid layouts don't break on any viewport
- [ ] No elements overlap unexpectedly
- [ ] Sticky elements (headers, sidebars) work correctly on scroll
- [ ] Footer stays at the bottom on short-content pages (sticky footer)
- [ ] Container max-widths are consistent across pages
- [x] Content doesn't exceed the viewport (no horizontal scroll)

### 14.2 Typography
- [ ] Font sizes are readable on all screen sizes (minimum 16px body)
- [ ] Line height is comfortable (1.5–1.75 for body text)
- [ ] Heading sizes scale correctly across breakpoints
- [ ] No text overflows its container
- [ ] Long URLs or strings don't break layout (use `word-break` or `overflow-wrap`)
- [ ] Font loading doesn't cause FOUT (Flash of Unstyled Text) or FOIT (Flash of Invisible Text)

### 14.3 Colors & Theming
- [ ] Brand colors are used consistently
- [ ] Color variables are defined and used everywhere (no hardcoded hex scattered)
- [ ] Color contrast meets WCAG AA on all text elements
- [ ] Hover, focus, and active states have visible style changes
- [ ] Disabled states are visually distinct
- [ ] Dark mode (if supported) displays all elements correctly
- [ ] Dark mode toggle doesn't flash incorrect theme on page load

### 14.4 Animations & Transitions
- [ ] Animations respect `prefers-reduced-motion` media query
- [ ] Transitions are smooth (no janky or choppy effects)
- [ ] Loading animations appear while content is loading
- [ ] No animation causes layout shift (CLS impact)
- [ ] Scroll-triggered animations work correctly on all browsers

---

## 15. Analytics & Tracking

### 15.1 Google Analytics / GA4
- [ ] GA4 tracking code is installed on all pages
- [ ] Real-time report confirms data is flowing
- [ ] Custom events are firing correctly (form submissions, CTA clicks, downloads)
- [ ] E-commerce tracking is set up (if applicable)
- [ ] Cross-domain tracking is configured (if applicable)
- [ ] Internal traffic is filtered (IP or developer flag)
- [ ] UTM parameters are tracked correctly from campaign URLs

### 15.2 Google Tag Manager
- [ ] GTM container is installed on all pages
- [ ] All tags are firing correctly (use GTM Debug mode)
- [ ] Triggers are set up for key events (page views, clicks, form submissions, scroll depth)
- [ ] No duplicate tags or tracking codes
- [ ] Consent mode / cookie banner is integrated with GTM

### 15.3 Google Search Console
- [ ] Property is verified
- [ ] Sitemap is submitted
- [ ] No coverage errors
- [ ] Core Web Vitals report shows no issues
- [ ] Manual actions — none flagged

### 15.4 Other Tracking
- [ ] Facebook Pixel / Meta Pixel is installed (if applicable)
- [ ] LinkedIn Insight Tag is installed (if applicable)
- [ ] Hotjar / Microsoft Clarity session recording is set up (if applicable)
- [ ] Conversion tracking for Google Ads is configured (if running ads)

---

## 16. Legal & Compliance

### 16.1 Privacy & Cookies
- [ ] Privacy Policy page exists and is up to date
- [ ] Cookie consent banner is implemented and functional
- [ ] Cookie banner blocks non-essential cookies until consent is given
- [ ] Cookie policy page exists detailing what cookies are used
- [ ] "Do Not Track" is respected where required
- [ ] Data collection complies with local laws (India IT Act / GDPR if serving EU)

### 16.2 Terms & Policies
- [ ] Terms of Service / Terms & Conditions page exists
- [ ] Refund / cancellation policy page exists (if applicable)
- [ ] Shipping policy page exists (if e-commerce)
- [ ] Disclaimer page exists (if offering advice, health, finance content)

### 16.3 Accessibility Compliance
- [ ] WCAG 2.1 AA compliance (minimum)
- [ ] Accessibility statement page exists
- [ ] Contact information for accessibility issues is provided

---

## 17. Pre-Launch Infrastructure

### 17.1 Hosting & DNS
- [ ] DNS records are correctly configured (A, CNAME, MX, TXT)
- [ ] Domain propagation is complete
- [ ] WWW and non-WWW both resolve correctly
- [ ] Email DNS records (SPF, DKIM, DMARC) are set up
- [ ] CDN is configured and serving content
- [ ] Server/hosting auto-scaling is configured (if expecting traffic spikes)

### 17.2 Backup & Recovery
- [ ] Automated backups are scheduled (database + files)
- [ ] Backup restoration has been tested
- [ ] Rollback procedure is documented

### 17.3 Monitoring
- [ ] Uptime monitoring is configured (UptimeRobot, Pingdom, etc.)
- [ ] Error logging is active (Sentry, LogRocket, etc.)
- [ ] Performance monitoring is in place
- [ ] Alert notifications are set up for downtime or errors

---

## 18. Final Pre-Launch Smoke Test

Run through these scenarios end-to-end as a real user would:

- [x] **New visitor journey:** Land on homepage → browse services → read a blog post → submit a contact form → receive confirmation
- [x] **Returning visitor journey:** Come back via Google search → land on a service page → navigate to pricing → submit inquiry
- [x] **Mobile user journey:** Open site on phone → navigate via hamburger menu → fill out a form → share a page on WhatsApp
- [ ] **Social referral journey:** Click a link shared on LinkedIn → correct OG preview shown → page loads correctly → CTA is clickable
- [x] **Error journey:** Visit a non-existent URL → see the custom 404 page → navigate back to a real page easily
- [ ] **SEO bot simulation:** Fetch page as Googlebot (use GSC URL Inspection) → content is fully rendered → schema is present → canonical is correct

---

## Sign-Off

| Check Area | Tested By | Date | Status |
|---|---|---|---|
| Responsiveness | | | |
| SEO On-Page | | | |
| SEO Technical | | | |
| Schemas | | | |
| AEO | | | |
| Sitemaps | | | |
| Code Quality | | | |
| Performance | | | |
| Open Graph | | | |
| Bug Testing | | | |
| Forms | | | |
| Devices | | | |
| Routes & Links | | | |
| CSS | | | |
| Analytics | | | |
| Legal | | | |
| Infrastructure | | | |
| Smoke Test | | | |

---

*Generated for pre-launch QA — customize per project as needed.*
