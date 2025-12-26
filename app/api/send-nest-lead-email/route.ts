import { NextRequest, NextResponse } from 'next/server'
import { sendNestLeadEmail } from '@/lib/emailService'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        console.log('Received NEST lead:', JSON.stringify(body, null, 2))
        const { formData, requestId } = body

        // Validate required fields
        if (!formData || !formData.name || !formData.phone) {
            console.error('Validation failed - missing required fields')
            return NextResponse.json(
                { error: 'Missing required fields: name and phone' },
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
            return NextResponse.json(
                { error: 'Failed to send email', details: result.error },
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
