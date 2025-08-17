import { NextResponse } from 'next/server'
import { sendEzyNestBookingEmail } from '@/lib/emailService'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const bookingDetailsString = formData.get('bookingDetails') as string
    const idProofFile = formData.get('idProofFile') as File | null

    if (!bookingDetailsString) {
      return NextResponse.json(
        { error: 'Booking details are required' },
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
