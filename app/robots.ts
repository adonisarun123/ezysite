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
          '/*.json$',
          '/search',
          '/thank-you'
        ]
      },
      {
        userAgent: 'GPTBot',
        disallow: '/'
      }
    ],
    sitemap: 'https://ezyhelpers.com/sitemap.xml',
    host: 'https://ezyhelpers.com'
  }
} 