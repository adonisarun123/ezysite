import { NextRequest, NextResponse } from 'next/server'
import { sendLeadEmail } from '@/lib/emailService'
import { logger } from '@/lib/logger'
import { HelperInterviewFormData } from '@/types/email'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.json() as HelperInterviewFormData

        // Basic Validation
        if (!formData.fullName || !formData.age || !formData.maritalStatus) {
            return NextResponse.json(
                { error: 'Missing required fields' },
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
