import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NestCTA from '@/components/NestCTA'

/**
 * Marketing route group layout.
 *
 * Wraps marketing pages in Navbar / NestCTA / Footer so individual pages no
 * longer need to import and render those components themselves. Pages migrated
 * into this group should remove their `<Navbar />`, `<NestCTA />`, `<Footer />`
 * JSX and the corresponding imports.
 *
 * The group segment `(marketing)` does NOT affect URLs. A page at
 * `app/(marketing)/about/page.tsx` still serves `/about`.
 *
 * See `docs/MARKETING_ROUTE_GROUP_MIGRATION.md` for the migration recipe and
 * the list of candidate routes.
 */
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <NestCTA />
      <Footer />
    </>
  )
}
