import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import { sendLeadEmail } from '@/lib/emailService'
import { sendWebhook } from '@/lib/webhookService'
import { logger } from '@/lib/logger'
import { checkRateLimit } from '@/lib/auth'
import { CustomerRequirementFormData } from '@/types/email'

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

        const formData = await request.json() as CustomerRequirementFormData & { website?: string }

        // Honeypot check
        if (formData && typeof (formData as any).website === 'string' && (formData as any).website.trim() !== '') {
            return NextResponse.json({ success: true }, { status: 200 })
        }

        // Basic Validation
        if (!formData.customerName || !formData.mobileNumber || !formData.areaLocality) {
            return NextResponse.json(
                { error: 'validation_failed' },
                { status: 400 }
            )
        }

        // Add timestamp
        formData.submittedAt = new Date().toISOString()
        formData.source = 'website'

        // Send email notification
        try {
            const emailResult = await sendLeadEmail('customer_requirement', formData)
            if (!emailResult.success) {
                logger.error('Failed to send customer requirement email:', emailResult.error)
            }
        } catch (error) {
            logger.error('Error sending customer requirement email:', error)
        }

        // Send webhook
        try {
            await sendWebhook('customer_requirement', formData)
        } catch (error) {
            logger.error('Error sending customer requirement webhook:', error)
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Your requirement has been submitted successfully'
            },
            { status: 201 }
        )

    } catch (error) {
        logger.error('Customer requirement submission error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
