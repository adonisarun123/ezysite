import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const webhookUrl = process.env.WEBHOOK_URL
    if (!webhookUrl) {
      return NextResponse.json(
        { error: 'WEBHOOK_URL is not configured on server' },
        { status: 500 }
      )
    }

    const body = await request.json()

    // Basic validation: require formType or some payload
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    // Forward to external webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const text = await response.text()

    if (!response.ok) {
      return NextResponse.json(
        {
          error: 'Forwarding to webhook failed',
          status: response.status,
          statusText: response.statusText,
          body: text,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true, forwarded: true })
  } catch (error) {
    console.error('webhook-forward error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  // Not strictly needed for same-origin requests, but keeps behavior explicit
  return NextResponse.json({}, { status: 204 })
}