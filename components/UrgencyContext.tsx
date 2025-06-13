'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface UrgencyContextType {
  isUrgencyVisible: boolean
  setIsUrgencyVisible: (visible: boolean) => void
}

// Create context with default values (no banner by default)
const UrgencyContext = createContext<UrgencyContextType>({
  isUrgencyVisible: false,
  setIsUrgencyVisible: () => {}
})

export function UrgencyProvider({ children, defaultVisible = false }: { children: ReactNode; defaultVisible?: boolean }) {
  const [isUrgencyVisible, setIsUrgencyVisible] = useState(defaultVisible)

  return (
    <UrgencyContext.Provider value={{ isUrgencyVisible, setIsUrgencyVisible }}>
      {children}
    </UrgencyContext.Provider>
  )
}

export function useUrgency(): UrgencyContextType {
  const context = useContext(UrgencyContext)
  return context
} 