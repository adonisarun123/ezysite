'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

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

  // Mirror urgency state onto <html data-urgency-visible="..."> so CSS in
  // globals.css can drive layout (e.g. main padding) without prop drilling
  // a client context into otherwise-server-rendered components.
  useEffect(() => {
    const root = document.documentElement
    if (isUrgencyVisible) {
      root.setAttribute('data-urgency-visible', 'true')
    } else {
      root.removeAttribute('data-urgency-visible')
    }
  }, [isUrgencyVisible])

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
