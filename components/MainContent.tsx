import { ReactNode } from 'react'

interface MainContentProps {
  children: ReactNode
}

/**
 * Server-rendered wrapper around <main>. Padding is now driven entirely by CSS
 * in globals.css using the `data-urgency-visible` attribute on <html>, which
 * is toggled by UrgencyProvider. This removes the client-side context
 * dependency that previously forced this component to be a client component.
 */
export default function MainContent({ children }: MainContentProps) {
  return (
    <div data-main-content className="min-h-screen">
      {children}
    </div>
  )
}
