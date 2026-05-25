import { NextRequest, NextResponse } from 'next/server'
import { sendLeadEmail } from '@/lib/emailService'
import { logger } from '@/lib/logger'
import { checkRateLimit } from '@/lib/auth'
import { HelperInterviewFormData } from '@/types/email'

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

        const formData = await request.json() as HelperInterviewFormData & { website?: string }

        // Honeypot check
        if (formData && typeof (formData as any).website === 'string' && (formData as any).website.trim() !== '') {
            return NextResponse.json({ success: true }, { status: 200 })
        }

        // Basic Validation
        if (!formData.fullName || !formData.age || !formData.maritalStatus) {
            return NextResponse.json(
                { error: 'validation_failed' },
                { status: 400 }
            )
        }

        // Add metadata
        formData.submittedAt = new Date().toISOString()
        formData.requestId = `INT-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`

        // Send email notification
        try {
            const emailResult = await sendLeadEmail('helper_interview', formData)
            if (!emailResult.success) {
                logger.error('Failed to send helper interview email:', emailResult.error)
            }
        } catch (error) {
            logger.error('Error sending helper interview email:', error)
        }

        // Note: Additional persistence (e.g. Supabase) could be added here if needed,
        // but as per the request, we focus on email notification for now.

        return NextResponse.json(
            {
                success: true,
                message: 'Your questionnaire has been submitted successfully',
                requestId: formData.requestId
            },
            { status: 201 }
        )

    } catch (error) {
        logger.error('Helper interview submission error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
