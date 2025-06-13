'use client'

import { useUrgency } from './UrgencyContext'
import { ReactNode } from 'react'

interface MainContentProps {
  children: ReactNode
}

export default function MainContent({ children }: MainContentProps) {
  const { isUrgencyVisible } = useUrgency()

  // Use the context value directly
  const urgencyVisible = isUrgencyVisible

  return (
    <main className={`min-h-screen transition-all duration-300 ${
      urgencyVisible ? 'pt-32 lg:pt-36' : 'pt-20 lg:pt-24'
    }`}>
      {children}
    </main>
  )
} 