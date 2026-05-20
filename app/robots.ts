import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/agent-success',
          '/helper-success',
          '/thank-you',
          '/on-demand-help/thank-you',
          '/helper-leads',
          '/helper-interview',
          '/customer-requirements',
          '/Lp/',
        ],
      },
    ],
    sitemap: 'https://www.ezyhelpers.com/sitemap.xml',
    host: 'https://www.ezyhelpers.com',
  }
}
