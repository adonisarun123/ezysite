import { NextRequest, NextResponse } from 'next/server';
import { sendLeadEmail } from '@/lib/emailService';
import { checkRateLimit } from '@/lib/auth';

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
    // Rate limit: 5 req / 10 min per IP
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';
    const rl = checkRateLimit(`POST:${request.nextUrl.pathname}:${ip}`, 5, 600_000);
    if (!rl.allowed) {
      return NextResponse.json(
        { success: false, error: 'rate_limited' },
        { status: 429 }
      );
    }

    const body = await request.json();
    if (process.env.NODE_ENV !== 'production') {
      console.log('Received body:', JSON.stringify(body, null, 2));
    }

    // Honeypot — pretend success silently
    if (body && typeof body === 'object' && typeof body.website === 'string' && body.website.trim() !== '') {
      return NextResponse.json({ success: true });
    }

    const { leadType, formData, requestId, sourceUrl } = body;

    // Validate required fields
    if (!leadType || !formData) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Validation failed - leadType:', leadType, 'formData:', formData);
      }
      return NextResponse.json(
        { error: 'validation_failed' },
        { status: 400 }
      );
    }

    // Validate lead type
    if (
      !['contact', 'hire_helper', 'general', 'requirement', 'care_services'].includes(leadType)
    ) {
      return NextResponse.json(
        { error: 'invalid_lead_type' },
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
      console.error('send-lead-email failure', result.error);
      return NextResponse.json(
        { error: 'request_failed' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'internal_error' },
      { status: 500 }
    );
  }
}
