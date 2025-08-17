import { NextResponse } from 'next/server'
import { sendLeadEmail } from '@/lib/emailService'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { bookingDetails } = data

    // Send email using the existing email service
    const result = await sendLeadEmail('general', {
      name: bookingDetails.name,
      phone: bookingDetails.phone,
      service: 'EzyNest Booking',
      city: 'Bangalore',
      email: bookingDetails.email,
      additionalDetails: {
        bookingId: bookingDetails.bookingId,
        checkInDate: bookingDetails.checkInDate,
        checkInTime: bookingDetails.checkInTime,
        employerName: bookingDetails.employerName,
        employerAddress: bookingDetails.employerAddress,
        permanentAddress: bookingDetails.permanentAddress,
        idProofNumber: bookingDetails.idProofNumber,
      }
    })

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
