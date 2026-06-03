import { NextResponse, NextRequest } from 'next/server'
import { sendEzyNestBookingEmail } from '@/lib/emailService'
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

    const formData = await request.formData()

    // Honeypot check
    const honeypot = formData.get('website')
    if (typeof honeypot === 'string' && honeypot.trim() !== '') {
      return NextResponse.json({ success: true })
    }

    const bookingDetailsString = formData.get('bookingDetails') as string
    const idProofFile = formData.get('idProofFile') as File | null

    if (!bookingDetailsString) {
      return NextResponse.json(
        { error: 'validation_failed' },
        { status: 400 }
      )
    }

    const bookingDetails = JSON.parse(bookingDetailsString)

    // Send email with ID proof attachment
    const result = await sendEzyNestBookingEmail(bookingDetails, idProofFile)

    if (!result.success) {
      throw new Error(result.error)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email sending failed:', error)
    return NextResponse.json(
      { error: 'Failed to send email notification' },
      { status: 500 }
    )
  }
}
