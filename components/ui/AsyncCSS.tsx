'use client'

import { useEffect } from 'react'

export default function AsyncCSS() {
  useEffect(() => {
    // Load non-critical animations CSS asynchronously
    const loadAnimationsCSS = () => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/animations.css'
      link.media = 'print'
      link.onload = () => {
        link.media = 'all'
      }
      document.head.appendChild(link)
    }

    // Load after initial render is complete
    if (document.readyState === 'complete') {
      loadAnimationsCSS()
    } else {
      window.addEventListener('load', loadAnimationsCSS)
      return () => window.removeEventListener('load', loadAnimationsCSS)
    }
  }, [])

  return null
} 