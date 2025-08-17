import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ezyhelpers.com'
  
  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/contact',
    '/services',
    '/blog',
    '/faqs',
    '/privacy-policy',
    '/terms-of-service',
    '/hire-helper',
    '/join-as-helper',
    '/nduw',
    '/nest'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }))

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
    'appliance-repair'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7
  }))

  // Cities
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
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.6
  }))

  return [...corePages, ...services, ...cities]
} 