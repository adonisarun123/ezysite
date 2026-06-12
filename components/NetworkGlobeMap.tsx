'use client'

/**
 * Interactive satellite globe (June 2026) — "Google Earth" style network map.
 *
 * - MapLibre GL v5 globe projection over Esri World Imagery (free satellite
 *   tiles with attribution), with place labels overlaid.
 * - Pincode pins from a bundled GeoJSON (aggregated; no personal data).
 * - Clusters at low zoom → custom teardrop pins at high zoom → popups with
 *   pincode/area/district/state.
 * - Cinematic entry: slow globe spin from space, then fly into India.
 *
 * Loaded with next/dynamic ssr:false — never part of the server bundle.
 */
import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

interface NetworkGlobeMapProps {
  /** URL of the GeoJSON FeatureCollection (in /public/data) */
  dataUrl: string
  /** Pin/cluster color (hex) */
  color: string
  /** Singular noun for popups/clusters, e.g. "helper pincode" */
  noun: string
}

/** Draw a teardrop map pin onto a canvas (retina 2x) for use as a symbol icon. */
function drawPin(color: string): ImageData {
  const w = 48
  const h = 64
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')!
  ctx.scale(2, 2)
  // teardrop body
  ctx.beginPath()
  ctx.arc(12, 11, 9, Math.PI * 0.8, Math.PI * 0.2)
  ctx.quadraticCurveTo(12, 22, 12, 30)
  ctx.quadraticCurveTo(12, 22, 4.8, 16.4)
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()
  ctx.lineWidth = 1.5
  ctx.strokeStyle = 'rgba(255,255,255,0.9)'
  ctx.stroke()
  // inner dot
  ctx.beginPath()
  ctx.arc(12, 11, 3.6, 0, Math.PI * 2)
  ctx.fillStyle = '#ffffff'
  ctx.fill()
  return ctx.getImageData(0, 0, w, h)
}

export default function NetworkGlobeMap({ dataUrl, color, noun }: NetworkGlobeMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const map = new maplibregl.Map({
      container: containerRef.current,
      // Satellite imagery + reference labels, globe projection
      style: {
        version: 8,
        projection: { type: 'globe' },
        glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
        sources: {
          satellite: {
            type: 'raster',
            tiles: [
              'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            ],
            tileSize: 256,
            maxzoom: 18,
            attribution:
              'Imagery © Esri, Maxar, Earthstar Geographics | © EzyHelpers',
          },
          labels: {
            type: 'raster',
            tiles: [
              'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
            ],
            tileSize: 256,
            maxzoom: 18,
          },
        },
        layers: [
          { id: 'satellite', type: 'raster', source: 'satellite' },
          { id: 'labels', type: 'raster', source: 'labels', paint: { 'raster-opacity': 0.9 } },
        ],
        sky: {
          'atmosphere-blend': ['interpolate', ['linear'], ['zoom'], 0, 1, 6, 0.4, 8, 0],
        },
      },
      center: [40, 15],
      zoom: 1.6,
      attributionControl: { compact: true },
    })

    // Expose for debugging/E2E (harmless in prod; no data beyond the public map)
    ;(window as unknown as Record<string, unknown>).__networkMap = map

    // Page-scroll friendliness: require Ctrl/Cmd to zoom with the wheel so
    // scrolling past the map doesn't hijack the page scroll.
    map.scrollZoom.disable()
    containerRef.current.addEventListener(
      'wheel',
      (e) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault()
          if (!map.scrollZoom.isEnabled()) map.scrollZoom.enable()
        } else if (map.scrollZoom.isEnabled()) {
          map.scrollZoom.disable()
        }
      },
      { passive: false }
    )

    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'top-right')
    map.addControl(new maplibregl.FullscreenControl(), 'top-right')
    map.addControl(new maplibregl.GlobeControl(), 'top-right')

    // Slow "Google Earth" spin until the user interacts. Started only after
    // style.load — continuous camera motion from t=0 keeps tile loading in
    // flight forever, which can prevent the map's `load` event from firing.
    let spinning = false
    const spin = () => {
      if (!spinning || map.getZoom() > 3.5) return
      const c = map.getCenter()
      c.lng += 0.25
      map.easeTo({ center: c, duration: 120, easing: (n) => n })
    }
    const spinTimer = setInterval(spin, 120)
    const stopSpin = () => {
      spinning = false
    }
    map.on('mousedown', stopSpin)
    map.on('touchstart', stopSpin)
    map.on('wheel', stopSpin)

    // Setup must run exactly once, as soon as the style is ready. With an
    // inline style object, `style.load` can fire before listeners attach, and
    // `load` can be deferred indefinitely by camera motion — so we guard with
    // isStyleLoaded() and poll as a fallback.
    let setupDone = false
    const setup = () => {
      if (setupDone || !map.isStyleLoaded()) return
      setupDone = true
      map.addImage('network-pin', drawPin(color), { pixelRatio: 2 })

      map.addSource('points', {
        type: 'geojson',
        data: dataUrl,
        cluster: true,
        clusterMaxZoom: 11,
        clusterRadius: 46,
      })

      map.addLayer({
        id: 'cluster-halo',
        type: 'circle',
        source: 'points',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': color,
          'circle-opacity': 0.25,
          'circle-radius': ['step', ['get', 'point_count'], 22, 25, 30, 100, 40],
        },
      })
      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'points',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': color,
          'circle-radius': ['step', ['get', 'point_count'], 14, 25, 20, 100, 28],
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff',
        },
      })
      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'points',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': ['get', 'point_count_abbreviated'],
          'text-font': ['Noto Sans Regular'],
          'text-size': 12,
        },
        paint: { 'text-color': '#ffffff' },
      })
      map.addLayer({
        id: 'pins',
        type: 'symbol',
        source: 'points',
        filter: ['!', ['has', 'point_count']],
        layout: {
          'icon-image': 'network-pin',
          'icon-size': 1,
          'icon-anchor': 'bottom',
          'icon-allow-overlap': true,
        },
      })

      // Cinematic entry: brief globe spin, then fly into India
      spinning = true
      setTimeout(() => {
        if (!spinning) return // user already took control
        spinning = false
        map.flyTo({
          center: [79.5, 21.5],
          zoom: 4.1,
          duration: 4500,
          essential: false,
        })
      }, 2600)

      // Cluster click → zoom into it
      map.on('click', 'clusters', async (e) => {
        const f = map.queryRenderedFeatures(e.point, { layers: ['clusters'] })[0]
        const clusterId = f.properties?.cluster_id
        const src = map.getSource('points') as maplibregl.GeoJSONSource
        const zoom = await src.getClusterExpansionZoom(clusterId)
        map.easeTo({ center: (f.geometry as GeoJSON.Point).coordinates as [number, number], zoom: zoom + 0.5, duration: 900 })
      })

      // Pin click → popup
      map.on('click', 'pins', (e) => {
        const f = e.features?.[0]
        if (!f) return
        const p = f.properties as { pin: string; area: string; district: string; state: string }
        const coords = (f.geometry as GeoJSON.Point).coordinates.slice() as [number, number]
        new maplibregl.Popup({ offset: 30, closeButton: true, maxWidth: '260px' })
          .setLngLat(coords)
          .setHTML(
            `<div style="font-family:Inter,Arial,sans-serif;font-size:13px;line-height:1.5">
               <div style="font-weight:700;font-size:15px;color:#111">${p.pin}</div>
               <div style="color:#374151">${p.area ? p.area + ', ' : ''}${p.district}</div>
               <div style="color:#6b7280">${p.state}</div>
               <div style="margin-top:4px;color:${color};font-weight:600;font-size:12px">EzyHelpers ${noun}</div>
             </div>`
          )
          .addTo(map)
      })

      for (const layer of ['clusters', 'pins']) {
        map.on('mouseenter', layer, () => (map.getCanvas().style.cursor = 'pointer'))
        map.on('mouseleave', layer, () => (map.getCanvas().style.cursor = ''))
      }
    }

    map.once('style.load', setup)
    map.once('load', setup)
    const setupPoll = setInterval(() => {
      setup()
      if (setupDone) clearInterval(setupPoll)
    }, 100)
    setTimeout(() => clearInterval(setupPoll), 15000)

    return () => {
      clearInterval(spinTimer)
      clearInterval(setupPoll)
      map.remove()
    }
  }, [dataUrl, color, noun])

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
      style={{ height: 'min(72vh, 720px)', minHeight: 480, background: '#04060f' }}
      role="application"
      aria-label="Interactive map of EzyHelpers network locations across India"
    />
  )
}
