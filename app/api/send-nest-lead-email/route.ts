import { NextRequest, NextResponse } from 'next/server'
import { sendNestLeadEmail } from '@/lib/emailService'
import { checkRateLimit } from '@/lib/auth'

export async function POST(request: NextRequest) {
    try {
        // Rate limit: 5 req / 10 min per IP
        const ip =
            request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            request.headers.get('x-real-ip') ||
            'unknown'
        const rl = checkRateLimit(`POST:${request.nextUrl.pathname}:${ip}`, 5, 600_000)
        if (!rl.allowed) {
            return NextResponse.json(
                { success: false, error: 'rate_limited' },
                { status: 429 }
            )
        }

        const body = await request.json()
        if (process.env.NODE_ENV !== 'production') {
            console.log('Received NEST lead:', JSON.stringify(body, null, 2))
        }

        // Honeypot check
        if (body && typeof body.website === 'string' && body.website.trim() !== '') {
            return NextResponse.json({ success: true })
        }

        const { formData, requestId } = body

        // Validate required fields
        if (!formData || !formData.name || !formData.phone) {
            if (process.env.NODE_ENV !== 'production') {
                console.error('Validation failed - missing required fields')
            }
            return NextResponse.json(
                { error: 'validation_failed' },
                { status: 400 }
            )
        }

        // Send email
        const result = await sendNestLeadEmail(formData, requestId)

        if (result.success) {
            return NextResponse.json({
                success: true,
                message: 'NEST lead email sent successfully',
                messageId: result.messageId
            })
        } else {
            console.error('send-nest-lead-email failure', result.error)
            return NextResponse.json(
                { error: 'request_failed' },
                { status: 500 }
            )
        }

    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
