import { NextRequest, NextResponse } from 'next/server'
import { sendLeadEmail } from '@/lib/emailService'
import { sendWebhook } from '@/lib/webhookService'
import { logger } from '@/lib/logger'
import { CustomerRequirementFormData } from '@/types/email'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.json() as CustomerRequirementFormData

        // Basic Validation
        if (!formData.customerName || !formData.mobileNumber || !formData.areaLocality) {
            return NextResponse.json(
                { error: 'Missing required fields' },
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
