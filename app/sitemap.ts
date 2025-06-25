import { MetadataRoute } from 'next'
import { generateSitemapEntries, getManualPages } from '../lib/sitemap-generator'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ezyhelpers.com'
  
  try {
    // Automatically detect all pages from the file system
    const autoDetectedPages = generateSitemapEntries(baseUrl)
    
    // Get manual pages (like dynamic blog posts)
    const manualPages = getManualPages(baseUrl)
    
    // Combine and deduplicate
    const allPages = [...autoDetectedPages, ...manualPages]
    const uniquePages = allPages.filter((page, index, self) => 
      index === self.findIndex(p => p.url === page.url)
    )
    
    // Sort by priority (highest first) then by URL
    return uniquePages.sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority
      }
      return a.url.localeCompare(b.url)
    })
    
  } catch (error) {
    console.error('Error generating sitemap:', error)
    
    // Fallback to manual sitemap if auto-detection fails
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/hire-helper`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      }
    ]
  }
} 