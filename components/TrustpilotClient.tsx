"use client"

import { useEffect, useState } from 'react'

export default function TrustpilotClient() {
  // Avoid rendering on the server; render only after client mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="68a1c72a576f64d91294b48e"
      data-style-height="52px"
      data-style-width="100%"
      data-token="2931d60a-58ab-4e13-be80-2ad15d4b1bbc"
    >
      <a href="https://www.trustpilot.com/review/ezyhelpers.com" target="_blank" rel="noopener">
        Trustpilot
      </a>
    </div>
  )
}
