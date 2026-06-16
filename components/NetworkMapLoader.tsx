'use client'

import dynamic from 'next/dynamic'

// MapLibre is browser-only (WebGL); load client-side with a skeleton.
const NetworkGlobeMap = dynamic(() => import('./NetworkGlobeMap'), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-2xl border border-gray-200 bg-gray-950 flex items-center justify-center"
      style={{ height: 'min(72vh, 720px)', minHeight: 480 }}
    >
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-gray-700 border-t-white rounded-full animate-spin mx-auto mb-3" />
        <p className="text-gray-400 text-sm">Loading the globe…</p>
      </div>
    </div>
  ),
})

interface NetworkMapLoaderProps {
  dataUrl: string
  color: string
  noun: string
}

export default function NetworkMapLoader(props: NetworkMapLoaderProps) {
  return <NetworkGlobeMap {...props} />
}
