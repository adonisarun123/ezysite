import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Every legitimate service has a concrete static directory under
// app/services/. This dynamic catch-all only exists to satisfy the Next.js
// segment shape; it must never serve content for an unknown slug. Locking it
// down:
//   - generateStaticParams returns [] so nothing is pre-rendered here
//   - dynamicParams = false makes Next.js 404 any slug not in that empty list
//   - the body calls notFound() as a belt-and-braces guard
export const dynamicParams = false

export async function generateStaticParams() {
  return []
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: { index: false, follow: false },
  }
}

export default async function ServicePage() {
  notFound()
}
