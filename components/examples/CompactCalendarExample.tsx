"use client"

import React, { useState } from "react"
import { format, isBefore, startOfDay } from "date-fns"
import CompactCalendar from "@/components/ui/compact-calendar"

export function CompactCalendarExample() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  // Mock availability data
  const mockAvailability = {
    '2024-12-20': { available: 3, total: 5 },
    '2024-12-21': { available: 0, total: 5 },
    '2024-12-22': { available: 2, total: 5 },
    '2024-12-23': { available: 5, total: 5 },
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
  }

  const isDateDisabled = (date: Date) => {
    // Disable past dates
    return isBefore(date, startOfDay(new Date()))
  }

  const getAvailability = (date: Date) => {
    const dateKey = format(date, 'yyyy-MM-dd')
    return mockAvailability[dateKey as keyof typeof mockAvailability] || null
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Compact Calendar Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Calendar */}
          <div>
            <h3 className="text-sm font-medium mb-2">Basic Calendar</h3>
            <CompactCalendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />
          </div>

          {/* Calendar with Availability Indicators */}
          <div>
            <h3 className="text-sm font-medium mb-2">With Availability</h3>
            <CompactCalendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              disabledDates={isDateDisabled}
              availabilityIndicator={getAvailability}
            />
            <div className="mt-2 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span>Fully Booked</span>
              </div>
            </div>
          </div>

          {/* Calendar with Custom Styling */}
          <div>
            <h3 className="text-sm font-medium mb-2">Custom Style</h3>
            <CompactCalendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              className="shadow-lg border-rose-200"
              disabledDates={isDateDisabled}
            />
          </div>
        </div>
      </div>

      {/* Selected Date Display */}
      {selectedDate && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900">Selected Date:</h3>
          <p className="text-gray-700">{format(selectedDate, "EEEE, MMMM dd, yyyy")}</p>
        </div>
      )}
    </div>
  )
}

export default CompactCalendarExample
