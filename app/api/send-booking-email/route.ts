import { NextResponse } from 'next/server'
import { createTransport } from 'nodemailer'

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { bookingDetails } = data

    // Email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'contact@ezyhelpers.com',
      subject: `New EzyNest Booking - ${bookingDetails.bookingId}`,
      html: `
        <h2>New EzyNest Booking</h2>
        <p><strong>Booking ID:</strong> ${bookingDetails.bookingId}</p>
        <p><strong>Check-in Date:</strong> ${bookingDetails.checkInDate}</p>
        <p><strong>Check-in Time:</strong> ${bookingDetails.checkInTime}</p>
        <h3>Guest Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${bookingDetails.name}</li>
          <li><strong>Phone:</strong> ${bookingDetails.phone}</li>
          <li><strong>Employer Name:</strong> ${bookingDetails.employerName}</li>
          <li><strong>Employer Address:</strong> ${bookingDetails.employerAddress}</li>
          <li><strong>Permanent Address:</strong> ${bookingDetails.permanentAddress}</li>
          <li><strong>ID Proof Number:</strong> ${bookingDetails.idProofNumber}</li>
        </ul>
        <p><em>Please verify and process this booking.</em></p>
      `,
    })

    // Email to guest
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: bookingDetails.email || process.env.SMTP_FROM,
      subject: `Your EzyNest Booking Confirmation - ${bookingDetails.bookingId}`,
      html: `
        <h2>Booking Confirmation</h2>
        <p>Dear ${bookingDetails.name},</p>
        <p>Your booking at EzyNest has been confirmed. Here are your booking details:</p>
        <div style="background-color: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 5px;">
          <p><strong>Booking ID:</strong> ${bookingDetails.bookingId}</p>
          <p><strong>Check-in Date:</strong> ${bookingDetails.checkInDate}</p>
          <p><strong>Check-in Time:</strong> ${bookingDetails.checkInTime}</p>
        </div>
        <h3>Important Information:</h3>
        <ul>
          <li>Please bring your ID proof during check-in</li>
          <li>Standard check-in time: 12:00 PM</li>
          <li>Standard check-out time: 10:00 AM</li>
          <li>For any queries, contact: +91 9972571005</li>
        </ul>
        <p>Thank you for choosing EzyNest!</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email sending failed:', error)
    return NextResponse.json(
      { error: 'Failed to send email notification' },
      { status: 500 }
    )
  }
}
