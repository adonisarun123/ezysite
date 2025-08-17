"use client"

import React, { useState } from "react"
import { format, addMonths, subMonths, startOfWeek, addDays, isSameDay, isSameMonth, startOfMonth, endOfMonth, endOfWeek } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CompactCalendarProps {
  onDateSelect?: (date: Date) => void
  selectedDate?: Date
  className?: string
  disabledDates?: (date: Date) => boolean
  availabilityIndicator?: (date: Date) => { available: number; total: number } | null
}

export function CompactCalendar({
  onDateSelect,
  selectedDate,
  className,
  disabledDates,
  availabilityIndicator
}: CompactCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const handleDateClick = (day: Date) => {
    if (disabledDates && disabledDates(day)) return
    onDateSelect?.(day)
  }

  const header = () => {
    return (
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
          type="button"
        >
          <ChevronLeft className="h-4 w-4 text-gray-600" />
        </button>
        <h3 className="text-sm font-semibold text-gray-800">
          {format(currentDate, "MMMM yyyy")}
        </h3>
        <button
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
          type="button"
        >
          <ChevronRight className="h-4 w-4 text-gray-600" />
        </button>
      </div>
    )
  }

  const daysOfWeek = () => {
    const days = []
    const start = startOfWeek(new Date())

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-xs font-medium text-center text-gray-500 py-1">
          {format(addDays(start, i), "EEE")}
        </div>
      )
    }

    return <div className="grid grid-cols-7 gap-px mb-1">{days}</div>
  }

  const cells = () => {
    const monthStart = startOfMonth(currentDate)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const rows = []
    let days = []
    let day = startDate

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day
        const isCurrentMonth = isSameMonth(day, monthStart)
        const isToday = isSameDay(day, new Date())
        const isSelected = selectedDate && isSameDay(day, selectedDate)
        const isDisabled = disabledDates && disabledDates(day)
        const availability = availabilityIndicator?.(day)

        days.push(
          <div
            key={day.toISOString()}
            className={cn(
              "relative h-8 flex items-center justify-center text-xs cursor-pointer transition-colors border border-gray-100",
              isCurrentMonth ? "bg-white" : "bg-gray-50",
              isToday && "bg-blue-50 border-blue-200",
              isSelected && "bg-rose-600 text-white border-rose-600",
              isDisabled && "bg-gray-100 text-gray-400 cursor-not-allowed",
              !isDisabled && !isSelected && "hover:bg-gray-100"
            )}
            onClick={() => !isDisabled && handleDateClick(cloneDay)}
          >
            <span className={cn(
              "text-xs",
              !isCurrentMonth && !isSelected && "text-gray-400",
              isSelected && "text-white font-medium"
            )}>
              {format(day, "d")}
            </span>
            {availability && (
              <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2">
                <div className={cn(
                  "w-1 h-1 rounded-full",
                  availability.available > 0 ? "bg-green-500" : "bg-red-500"
                )} />
              </div>
            )}
          </div>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div key={day.toISOString()} className="grid grid-cols-7 gap-px">
          {days}
        </div>
      )
      days = []
    }

    return <div className="space-y-px">{rows}</div>
  }

  return (
    <div className={cn("bg-white rounded-lg border p-3 w-64", className)}>
      {header()}
      {daysOfWeek()}
      {cells()}
      {selectedDate && (
        <div className="mt-3 pt-3 border-t text-center">
          <p className="text-xs text-gray-600">Selected:</p>
          <p className="text-sm font-medium text-gray-900">
            {format(selectedDate, "MMM dd, yyyy")}
          </p>
        </div>
      )}
    </div>
  )
}

export default CompactCalendar
