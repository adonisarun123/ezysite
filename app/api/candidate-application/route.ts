import { NextRequest, NextResponse } from 'next/server';
import { sendLeadEmail } from '@/lib/emailService';
import { checkRateLimit } from '@/lib/auth';
import type { CandidateApplicationFormData } from '@/types/email';

export const dynamic = 'force-dynamic';

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

function str(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
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
      return NextResponse.json({ success: false, error: 'rate_limited' }, { status: 429 });
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'validation_failed' }, { status: 400 });
    }

    // Honeypot — pretend success silently
    if (typeof body.website === 'string' && body.website.trim() !== '') {
      return NextResponse.json({ success: true });
    }

    const candidateType = str(body.candidateType);
    const otherRole = str(body.otherRole);
    const formData: CandidateApplicationFormData = {
      name: str(body.name),
      mobile: str(body.mobile).replace(/\D/g, ''),
      candidateType,
      otherRole: otherRole || undefined,
      area: str(body.area),
      consentToCall: body.consentToCall === true || str(body.consentToCall) === 'Yes' ? 'Yes' : 'No',
      language: str(body.language) || 'en',
    };

    // Server-side validation
    const validTypes = ['ANM', 'GNM', 'GDA', 'Other'];
    const errors: Record<string, string> = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) errors.mobile = 'Valid 10-digit mobile required';
    if (!validTypes.includes(candidateType)) errors.candidateType = 'Select a candidate type';
    if (candidateType === 'Other' && !otherRole) errors.otherRole = 'Please specify your role';
    if (!formData.area) errors.area = 'Area of residence is required';
    if (formData.consentToCall !== 'Yes') errors.consentToCall = 'Consent is required';

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: 'validation_failed', fieldErrors: errors }, { status: 400 });
    }

    const normalizedSource =
      normalizeEzySourceUrl(body.sourceUrl) ||
      normalizeEzySourceUrl(`${SITE_ORIGIN}/care-services/apply`);

    const result = await sendLeadEmail(
      'candidate_application',
      { ...formData, sourceUrl: normalizedSource },
      undefined,
      normalizedSource
    );

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Application received' });
    }

    console.error('candidate-application failure', result.error);
    return NextResponse.json({ error: 'request_failed' }, { status: 500 });
  } catch (error) {
    console.error('candidate-application API error:', error);
    return NextResponse.json({ error: 'internal_error' }, { status: 500 });
  }
}
