import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ezyhelpers.com'
  const currentDate = new Date().toISOString()

  // Core pages with high priority
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/hire-helper`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/join-as-helper`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/book-now`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/for-helpers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/service-request`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/nduw`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/nest`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/requirement`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    }
  ]

  // Service pages
  const services: MetadataRoute.Sitemap = [
    'full-time-maids',
    'part-time-maids',
    'live-in-maids',
    'elderly-care',
    'nanny-babysitter',
    'cooks',
    'drivers',
    'gardener',
    'carpenters',
    'electricians',
    'plumbers',
    'painters',
    'deep-cleaning',
    'appliance-repair',
    'on-demand-helpers'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  // Cities - Main pages
  const cities: MetadataRoute.Sitemap = [
    'delhi',
    'mumbai',
    'bangalore',
    'noida',
    'lucknow',
    'kanpur',
    'bareilly',
    'meerut',
    'nagpur'
  ].map(city => ({
    url: `${baseUrl}/cities/${city}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  // Bangalore city-specific service pages
  const bangaloreServices: MetadataRoute.Sitemap = [
    'full-time-maid',
    'part-time-maid',
    'live-in-maid',
    'live-in-maids',
    'elderly-care',
    'nanny-babysitter',
    'travel-nanny',
    'cooks',
    'drivers',
    'gardener',
    'carpenter',
    'electrician',
    'plumber',
    'painter',
    'home-deep-cleaning',
    'appliance-repair',
    'on-demand-helper'
  ].map(service => ({
    url: `${baseUrl}/cities/bangalore/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.65
  }))

  // Bareilly city-specific service pages
  const bareillyServices: MetadataRoute.Sitemap = [
    'full-time-maid',
    'part-time-maid',
    'live-in-maid',
    'elderly-care',
    'babysitter',
    'japa',
    'cooks',
    'drivers',
    'carpenter',
    'electrician',
    'plumber',
    'painting',
    'home-cleaning',
    'appliance-repair',
    'ac-repair',
    'on-demand-helper',
    'pest-control',
    'house-shifting'
  ].map(service => ({
    url: `${baseUrl}/cities/bareilly/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.65
  }))

  // Blog posts
  const blogPosts: MetadataRoute.Sitemap = [
    'hiring-a-domestic-helper',
    'complete-guide-to-maid-verification-and-background-check-in-india',
    'live-in-maid-salary-roles-hiring-guide-bangalore'
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }))

  // Case Studies
  const caseStudyPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ]

  const caseStudiesList: MetadataRoute.Sitemap = [
    'working-couple-bangalore-live-in-maid',
    'elderly-care-bareilly-parents',
    'apartment-association-cooks-cleaners'
  ].map(slug => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  // Special landing pages
  const landingPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/Lp/live-in-maid-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    }
  ]

  // Helper registration & leads
  const helperPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/helper-registration`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/helper-success`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/agent-registration`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/agent-success`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    }
  ]

  // Business pages
  const businessPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/executive-summary`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/market-overview`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4
    }
  ]

  return [
    ...corePages,
    ...services,
    ...cities,
    ...bangaloreServices,
    ...bareillyServices,
    ...blogPosts,
    ...caseStudyPages,
    ...caseStudiesList,
    ...landingPages,
    ...helperPages,
    ...businessPages
  ]
}