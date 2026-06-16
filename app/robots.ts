import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicitly welcome AI/answer-engine crawlers (AEO).
      // These bots power ChatGPT, Claude, Perplexity and Google AI Overviews —
      // being crawlable by them increases the chance of brand citations.
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
          'CCBot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.ezyhelpers.com/sitemap.xml',
    host: 'https://www.ezyhelpers.com',
  }
}
