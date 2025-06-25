#!/usr/bin/env node

/**
 * Manual Sitemap Generator Script
 * 
 * This script can be used to manually generate and validate the sitemap
 * when needed. The sitemap is automatically generated during build,
 * but this script is useful for testing and validation.
 */

const fs = require('fs')
const path = require('path')

// Import the sitemap generator (we'll use a simplified version here)
function scanPagesDirectory() {
  const appDir = path.join(process.cwd(), 'app')
  const pages = []
  
  function scanDir(dir, basePath = '') {
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true })
      
      for (const item of items) {
        const fullPath = path.join(dir, item.name)
        const urlPath = basePath ? `${basePath}/${item.name}` : item.name
        
        if (item.isDirectory()) {
          // Skip certain directories
          if ([
            'api', 'components', 'lib', 'styles', 'public',
            'node_modules', '.next', '.git', 'md files'
          ].includes(item.name)) {
            continue
          }
          
          scanDir(fullPath, urlPath)
        } else if (item.name === 'page.tsx' || item.name === 'page.ts') {
          const pageUrl = basePath === '' ? '/' : `/${basePath}`
          pages.push(pageUrl)
        }
      }
    } catch (error) {
      console.warn(`Error scanning ${dir}:`, error.message)
    }
  }
  
  scanDir(appDir)
  return pages.sort()
}

function generateSitemapXML(pages, baseUrl = 'https://ezyhelpers.com') {
  const header = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  const footer = '</urlset>'
  
  const urls = pages.map(page => {
    const url = `${baseUrl}${page === '/' ? '' : page}`
    const lastmod = new Date().toISOString()
    const priority = page === '/' ? '1.0' : '0.8'
    const changefreq = page === '/' ? 'daily' : 'weekly'
    
    return `<url>
<loc>${url}</loc>
<lastmod>${lastmod}</lastmod>
<changefreq>${changefreq}</changefreq>
<priority>${priority}</priority>
</url>`
  }).join('\n')
  
  return `${header}\n${urls}\n${footer}`
}

function main() {
  console.log('🔍 Scanning for pages...')
  const pages = scanPagesDirectory()
  
  console.log(`📄 Found ${pages.length} pages:`)
  pages.forEach(page => console.log(`  - ${page}`))
  
  console.log('\n🔨 Generating sitemap XML...')
  const sitemapXML = generateSitemapXML(pages)
  
  const outputPath = path.join(process.cwd(), 'public', 'sitemap-manual.xml')
  fs.writeFileSync(outputPath, sitemapXML)
  
  console.log(`✅ Manual sitemap generated: ${outputPath}`)
  console.log('\n📊 Sitemap Statistics:')
  console.log(`  - Total URLs: ${pages.length}`)
  console.log(`  - File size: ${Math.round(sitemapXML.length / 1024)} KB`)
  
  console.log('\n💡 Note: The automatic sitemap is generated at /sitemap.xml during build')
  console.log('   This manual version is saved as /public/sitemap-manual.xml for comparison')
}

if (require.main === module) {
  main()
}

module.exports = { scanPagesDirectory, generateSitemapXML } 