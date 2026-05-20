import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { checkRateLimit } from '@/lib/auth'

const ALLOWED_ORIGIN = 'https://www.ezyhelpers.com'
const MAX_BODY_SIZE = 100_000

export async function POST(request: NextRequest) {
  try {
    // Origin / Referer check
    const origin = request.headers.get('origin') || ''
    const referer = request.headers.get('referer') || ''
    const originOk = origin === ALLOWED_ORIGIN
    const refererOk = referer.startsWith(ALLOWED_ORIGIN)
    if (!originOk && !refererOk) {
      return NextResponse.json({ error: 'forbidden' }, { status: 403 })
    }

    // Body size cap
    const contentLengthHeader = request.headers.get('content-length')
    if (contentLengthHeader) {
      const contentLength = parseInt(contentLengthHeader, 10)
      if (Number.isFinite(contentLength) && contentLength > MAX_BODY_SIZE) {
        return NextResponse.json({ error: 'payload_too_large' }, { status: 413 })
      }
    }

    // IP rate limit: 10 req / 60s per IP
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'
    const rl = checkRateLimit(`webhook-forward:${ip}`, 10, 60_000)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
    }

    const webhookUrl = process.env.WEBHOOK_URL
    if (!webhookUrl) {
      return NextResponse.json(
        { error: 'server_misconfigured' },
        { status: 500 }
      )
    }

    const body = await request.json()

    // Basic validation: require formType or some payload
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'invalid_request' },
        { status: 400 }
      )
    }

    // Sign forwarded payload (if shared secret is configured)
    const payload = JSON.stringify(body)
    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    const sharedSecret = process.env.WEBHOOK_SHARED_SECRET
    if (sharedSecret) {
      const signature = crypto
        .createHmac('sha256', sharedSecret)
        .update(payload)
        .digest('hex')
      headers['X-Webhook-Signature'] = signature
    } else {
      console.warn('webhook-forward: WEBHOOK_SHARED_SECRET not set; forwarding without signature')
    }

    // Forward to external webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: payload,
    })

    if (!response.ok) {
      // Read text but do not leak upstream body to clients
      try { await response.text() } catch { /* ignore */ }
      console.error('webhook-forward upstream failure', response.status, response.statusText)
      return NextResponse.json(
        { error: 'forwarding_failed' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true, forwarded: true })
  } catch (error) {
    console.error('webhook-forward error:', error)
    return NextResponse.json(
      { error: 'internal_error' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  // Not strictly needed for same-origin requests, but keeps behavior explicit
  return NextResponse.json({}, { status: 204 })
}
