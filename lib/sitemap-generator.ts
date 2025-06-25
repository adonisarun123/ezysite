import fs from 'fs'
import path from 'path'

export interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

// Define priority and frequency rules for different page types
const pageRules = {
  // Homepage
  '/': { priority: 1.0, changeFrequency: 'daily' as const },
  
  // High priority pages
  '/services': { priority: 0.9, changeFrequency: 'weekly' as const },
  '/hire-helper': { priority: 0.9, changeFrequency: 'weekly' as const },
  '/book-now': { priority: 0.9, changeFrequency: 'weekly' as const },
  
  // Service pages
  '/services/': { priority: 0.8, changeFrequency: 'weekly' as const },
  
  // About and contact
  '/about': { priority: 0.8, changeFrequency: 'monthly' as const },
  '/contact': { priority: 0.7, changeFrequency: 'monthly' as const },
  
  // City pages
  '/cities/': { priority: 0.7, changeFrequency: 'monthly' as const },
  
  // Blog pages
  '/blog': { priority: 0.7, changeFrequency: 'weekly' as const },
  '/blog/': { priority: 0.5, changeFrequency: 'monthly' as const },
  
  // Helper pages
  '/join-as-helper': { priority: 0.6, changeFrequency: 'monthly' as const },
  '/for-helpers': { priority: 0.6, changeFrequency: 'monthly' as const },
  '/faqs': { priority: 0.6, changeFrequency: 'monthly' as const },
  
  // Legal pages
  '/privacy-policy': { priority: 0.3, changeFrequency: 'yearly' as const },
  '/terms-of-service': { priority: 0.3, changeFrequency: 'yearly' as const },
}

function getPageRules(pathname: string): { priority: number; changeFrequency: any } {
  // Check for exact match first
  if (pageRules[pathname as keyof typeof pageRules]) {
    return pageRules[pathname as keyof typeof pageRules]
  }
  
  // Check for pattern matches
  for (const [pattern, rules] of Object.entries(pageRules)) {
    if (pattern.endsWith('/') && pathname.startsWith(pattern)) {
      return rules
    }
  }
  
  // Default rules
  return { priority: 0.5, changeFrequency: 'monthly' as const }
}

function scanDirectory(dir: string, baseDir: string = dir): string[] {
  const pages: string[] = []
  
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name)
      
      if (item.isDirectory()) {
        // Skip certain directories
        if ([
          'api', 'components', 'lib', 'styles', 'public', 
          'node_modules', '.next', '.git', 'md files'
        ].includes(item.name)) {
          continue
        }
        
        // Recursively scan subdirectories
        pages.push(...scanDirectory(fullPath, baseDir))
      } else if (item.isFile()) {
        // Check for page files
        if (
          (item.name === 'page.tsx' || item.name === 'page.ts' || item.name === 'page.js') &&
          !fullPath.includes('/_')  // Skip private routes
        ) {
          // Convert file path to URL path
          const relativePath = path.relative(baseDir, dir)
          const urlPath = relativePath === '' ? '/' : `/${relativePath.replace(/\\/g, '/')}`
          pages.push(urlPath)
        }
      }
    }
  } catch (error) {
    console.warn(`Error scanning directory ${dir}:`, error)
  }
  
  return pages
}

export function generateSitemapEntries(baseUrl: string = 'https://ezyhelpers.com'): SitemapEntry[] {
  const appDir = path.join(process.cwd(), 'app')
  const detectedPages = scanDirectory(appDir)
  
  return detectedPages.map(pathname => {
    const rules = getPageRules(pathname)
    
    return {
      url: `${baseUrl}${pathname === '/' ? '' : pathname}`,
      lastModified: new Date(),
      changeFrequency: rules.changeFrequency,
      priority: rules.priority,
    }
  })
}

// Manual pages that might not be auto-detected
export function getManualPages(baseUrl: string = 'https://ezyhelpers.com'): SitemapEntry[] {
  const manualPages = [
    // Dynamic blog posts that exist
    '/blog/hiring-domestic-helper',
    '/blog/safety-tips', 
    '/blog/fair-wages',
    '/blog/background-verification',
    '/blog/choosing-right-helper',
    '/blog/home-security',
    '/blog/helper-training',
  ]
  
  return manualPages.map(pathname => {
    const rules = getPageRules(pathname)
    
    return {
      url: `${baseUrl}${pathname}`,
      lastModified: new Date(),
      changeFrequency: rules.changeFrequency,
      priority: rules.priority,
    }
  })
} 