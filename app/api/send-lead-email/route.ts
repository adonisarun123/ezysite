import { NextRequest, NextResponse } from 'next/server';
import { sendLeadEmail } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received body:', JSON.stringify(body, null, 2));
    const { leadType, formData, requestId, sourceUrl } = body;

    // Validate required fields
    if (!leadType || !formData) {
      console.error('Validation failed - leadType:', leadType, 'formData:', formData);
      return NextResponse.json(
        { error: 'Missing required fields: leadType and formData' },
        { status: 400 }
      );
    }

    // Validate lead type
    if (!['contact', 'hire_helper', 'general', 'requirement'].includes(leadType)) {
      return NextResponse.json(
        { error: 'Invalid lead type. Must be one of: contact, hire_helper, general, requirement' },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendLeadEmail(leadType, formData, requestId, sourceUrl);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Lead email sent successfully',
        messageId: result.messageId
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email', details: result.error },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 