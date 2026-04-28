import { NextRequest, NextResponse } from 'next/server';
import { sendLeadEmail } from '@/lib/emailService';

const SITE_ORIGIN = 'https://www.ezyhelpers.com';

/** Only allow internal source URLs in lead emails */
function normalizeEzySourceUrl(input: unknown): string | undefined {
  if (typeof input !== 'string' || !input.trim()) return undefined;
  const t = input.trim();
  if (t.startsWith(SITE_ORIGIN)) {
    return t.split('?')[0].split('#')[0];
  }
  if (t.startsWith('/') && !t.startsWith('//')) {
    return `${SITE_ORIGIN}${t.split('?')[0].split('#')[0]}`;
  }
  return undefined;
}

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
    if (
      !['contact', 'hire_helper', 'general', 'requirement', 'care_services'].includes(leadType)
    ) {
      return NextResponse.json(
        {
          error:
            'Invalid lead type. Must be one of: contact, hire_helper, general, requirement, care_services',
        },
        { status: 400 }
      );
    }

    const normalizedSource =
      normalizeEzySourceUrl(sourceUrl) ||
      normalizeEzySourceUrl(formData.sourceUrl) ||
      undefined;
    const mergedForm =
      typeof formData === 'object' && formData !== null
        ? { ...formData, ...(normalizedSource ? { sourceUrl: normalizedSource } : {}) }
        : formData;

    // Send email
    const result = await sendLeadEmail(leadType, mergedForm, requestId, normalizedSource);

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