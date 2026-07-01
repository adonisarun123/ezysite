/**
 * One-shot generator: turns the "404 Redirects" CSV into a clean, de-duplicated
 * redirect data file (redirects-legacy.js) that next.config.js spreads into its
 * redirects() list.
 *
 * It is intentionally conservative: any CSV source that collides with a CURRENT
 * valid route (static page, prerendered city/service page, live blog post, the
 * manifest route) or with a redirect already declared in next.config.js is
 * SKIPPED and reported, so we never 301 a live, ranking page to the homepage.
 *
 * Usage:  node scripts/generate-legacy-redirects.js [path-to-csv]
 */
const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const CSV = process.argv[2] ||
  'C:/Users/Dell/Downloads/Website Changes and Content Update - 404 Redirects.csv'
const OUT = path.join(ROOT, 'redirects-legacy.js')

const SITE_HOSTS = new Set(['www.ezyhelpers.com', 'ezyhelpers.com'])

// --- 1. Enumerate current valid static routes from the App Router tree -------
function walkRoutes(dir, segments, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const name = entry.name
    if (name.startsWith('_') || name === 'api') continue
    const isGroup = name.startsWith('(') && name.endsWith(')') // route group, no URL segment
    const isDynamic = name.includes('[') // [slug], [...x] -> pattern, not a concrete route
    const nextSegments = isGroup ? segments : segments.concat(name)
    const child = path.join(dir, name)
    const hasPage = ['page.tsx', 'page.jsx', 'page.ts', 'page.js']
      .some((f) => fs.existsSync(path.join(child, f)))
    if (hasPage && !isDynamic && !segments.concat(isGroup ? [] : [name]).some((s) => s.includes('['))) {
      out.add('/' + nextSegments.join('/'))
    }
    if (!isDynamic) walkRoutes(child, nextSegments, out)
  }
}

const validRoutes = new Set()
walkRoutes(path.join(ROOT, 'app'), [], validRoutes)
// Special non-page routes that resolve to real responses
validRoutes.add('/manifest.webmanifest') // app/manifest.ts
validRoutes.delete('/') // home is handled separately; never treat as "skip"

// --- 2. Live blog post slugs (generateStaticParams source) ------------------
const blogData = fs.readFileSync(path.join(ROOT, 'lib', 'blogData.ts'), 'utf8')
const blogIds = new Set(
  [...blogData.matchAll(/\bid:\s*['"]([^'"]+)['"]/g)].map((m) => '/blog/' + m[1])
)

// --- 3. Sources already declared in next.config.js --------------------------
const nextConfig = fs.readFileSync(path.join(ROOT, 'next.config.js'), 'utf8')
const existingSources = new Set(
  [...nextConfig.matchAll(/source:\s*'([^']+)'/g)].map((m) => m[1])
)

// --- helpers ----------------------------------------------------------------
const stripSlash = (p) => (p.length > 1 && p.endsWith('/') ? p.replace(/\/+$/, '') : p)

function toPath(rawUrl) {
  const u = rawUrl.trim()
  if (!u) return null
  try {
    const url = new URL(u)
    if (SITE_HOSTS.has(url.host)) return (url.pathname + url.search) || '/'
    return url.href // external -> keep absolute
  } catch {
    return u.startsWith('/') ? u : null
  }
}

// minimal CSV split (no quoted commas in this file)
function parseRow(line) {
  return line.split(',')
}

// --- 4. Walk the CSV --------------------------------------------------------
const lines = fs.readFileSync(CSV, 'utf8').split(/\r?\n/)
const seen = new Map() // source -> destination
const skipped = []     // { source, dest, reason }
const dupes = []       // { source, keptDest, droppedDest }

let parsed = 0
for (const line of lines) {
  const cols = parseRow(line)
  if (cols.length < 3) continue
  if (!/^\d+$/.test((cols[0] || '').trim())) continue // skip headers/section rows
  parsed++

  let source = toPath(cols[1])
  let dest = toPath(cols[2])
  if (!source || !source.startsWith('/')) { skipped.push({ source: cols[1], dest, reason: 'unparseable-source' }); continue }
  if (!dest) { skipped.push({ source, dest: cols[2], reason: 'unparseable-dest' }); continue }

  source = stripSlash(source)
  if (dest.startsWith('/')) dest = stripSlash(dest)

  if (source === dest) { skipped.push({ source, dest, reason: 'no-op (source===dest)' }); continue }
  if (source === '/') { skipped.push({ source, dest, reason: 'refuses-to-redirect-home' }); continue }
  if (validRoutes.has(source)) { skipped.push({ source, dest, reason: 'collides-with-live-route' }); continue }
  if (blogIds.has(source)) { skipped.push({ source, dest, reason: 'collides-with-live-blog-post' }); continue }
  if (existingSources.has(source)) { skipped.push({ source, dest, reason: 'already-in-next.config.js' }); continue }

  if (seen.has(source)) {
    const kept = seen.get(source)
    if (kept === '/' && dest !== '/') { seen.set(source, dest); dupes.push({ source, keptDest: dest, droppedDest: kept }) }
    else dupes.push({ source, keptDest: kept, droppedDest: dest })
    continue
  }
  seen.set(source, dest)
}

// --- 5. Emit data file ------------------------------------------------------
const entries = [...seen.entries()].sort((a, b) => a[0].localeCompare(b[0]))
const body = entries
  .map(([s, d]) => `  { source: ${JSON.stringify(s)}, destination: ${JSON.stringify(d)}, permanent: true },`)
  .join('\n')

const header = `// AUTO-GENERATED by scripts/generate-legacy-redirects.js — do not edit by hand.
// Source: "Website Changes and Content Update - 404 Redirects.csv" (legacy WordPress 404s).
// ${entries.length} permanent (301) redirects. Regenerate by re-running the script.
/** @type {import('next').Redirect[]} */
module.exports = [
`
fs.writeFileSync(OUT, header + body + '\n]\n')

// --- 6. Report --------------------------------------------------------------
const byReason = skipped.reduce((m, s) => ((m[s.reason] = (m[s.reason] || 0) + 1), m), {})
console.log('CSV data rows parsed:        ', parsed)
console.log('Redirects emitted:           ', entries.length)
console.log('Duplicates collapsed:        ', dupes.length)
console.log('Skipped:                     ', skipped.length)
console.log('  by reason:', JSON.stringify(byReason, null, 2))
console.log('\n--- SKIPPED: collisions with live routes / blog posts / config ---')
for (const s of skipped.filter((x) => /collides|already/.test(x.reason)))
  console.log(`  ${s.source}  ->  ${s.dest}   [${s.reason}]`)
console.log('\n--- DUPLICATE sources (kept curated / non-home destination) ---')
for (const d of dupes)
  console.log(`  ${d.source}  kept:${d.keptDest}  dropped:${d.droppedDest}`)
