import { ImageResponse } from 'next/og'

// Dynamic Open Graph image generator (S2).
// Usage: /og?title=Page%20Title&subtitle=Optional%20subtitle
// Lives at /og (not /api/og) so robots.txt's "Disallow: /api/" never
// blocks social/search crawlers from fetching the image.
// Node runtime (not edge): the edge sandbox rejects satori's internals with
// "EvalError: Code generation from strings disallowed". Responses are
// long-cached, so Node cold starts are irrelevant here.
export const runtime = 'nodejs'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = (searchParams.get('title') || 'EzyHelpers').slice(0, 90)
  const subtitle = (
    searchParams.get('subtitle') ||
    'Verified maids, cooks, nannies & home services across India'
  ).slice(0, 120)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 55%, #7c3aed 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#ffffff',
              color: '#1d4ed8',
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            E
          </div>
          <div style={{ fontSize: '32px', fontWeight: 700 }}>EzyHelpers</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: '58px', fontWeight: 700, lineHeight: 1.15 }}>{title}</div>
          <div style={{ fontSize: '28px', opacity: 0.92 }}>{subtitle}</div>
        </div>

        <div style={{ display: 'flex', gap: '28px', fontSize: '22px', opacity: 0.95 }}>
          <div>✓ Background-verified helpers</div>
          <div>✓ 24–72 hr placement</div>
          <div>✓ Replacement guarantee</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=31536000, immutable',
      },
    }
  )
}
