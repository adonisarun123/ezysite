import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import { readCareMarkdownFile } from './readCareMarkdown'

export function carePageMetadata(filename: string): Metadata {
  const p = readCareMarkdownFile(filename)
  const pathForLang = p.pathname.startsWith('/') ? p.pathname : `/${p.pathname}`
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://www.ezyhelpers.com${pathForLang}`,
      languages: selfReferencingLanguages(pathForLang),
    },
  }
}
