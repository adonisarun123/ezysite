import type { Metadata } from 'next'

export const SITE = {
  name: 'EzyHelpers',
  locale: 'en_IN',
  url: 'https://www.ezyhelpers.com',
  twitter: '@ezyhelpers',
  logo: '/ezyhelper_logo_new.png',
  defaultOgImage: '/og-image.jpg',
} as const

export interface BuildMetadataInput {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const canonical = `${SITE.url}${input.path}`
  const image = input.image ?? SITE.defaultOgImage
  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical },
    robots: input.noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-video-preview': -1,
            'max-snippet': -1,
          },
        },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: SITE.name,
      locale: SITE.locale,
      type: input.type ?? 'website',
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
      ...(input.authors ? { authors: input.authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      site: SITE.twitter,
      creator: SITE.twitter,
      images: [image],
    },
  }
}
