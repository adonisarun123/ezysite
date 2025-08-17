'use client'

import { EzyNestBooking } from '@/components/EzyNestBooking'

export function BookingSection() {
  return (
    <section id="booking-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Stay
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your check-in date and time to view bed availability
          </p>
        </div>

        <EzyNestBooking />
      </div>
    </section>
  )
}
