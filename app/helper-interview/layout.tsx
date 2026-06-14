import type { Metadata } from 'next'

/**
 * helper-interview is an internal, client-rendered form (a candidate interview
 * intake) with no unique indexable content. Previously it had no layout, so it
 * inherited the root layout's generic homepage title/description AND was listed
 * in sitemap.ts — Google would index it as thin duplicate content. This layout
 * gives it a proper title and marks it noindex (still followable) so it stays
 * out of the index. It was also removed from app/sitemap.ts.
 */
export const metadata: Metadata = {
  title: 'Helper Interview | EzyHelpers',
  description: 'EzyHelpers helper interview form.',
  robots: { index: false, follow: true },
}

export default function HelperInterviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
