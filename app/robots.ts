import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
          '/search',
          '/thank-you',
          '/on-demand-help/thank-you'
        ]
      },
    ],
    sitemap: 'https://www.ezyhelpers.com/sitemap.xml',
    host: 'https://www.ezyhelpers.com'
  }
} 