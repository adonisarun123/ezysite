'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Mock data for bed availability
const TOTAL_BEDS = 5

interface BedAvailability {
  [key: string]: number;
}

const mockBedAvailability: BedAvailability = {
  "2024-03-20": 3,
  "2024-03-21": 4,
  "2024-03-22": 2,
  // Add more dates as needed
}

const checkInTimes = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
]

interface BookingFormData {
  name: string
  phone: string
  employerName: string
  employerAddress: string
  permanentAddress: string
  idProofNumber: string
  idProofFile?: File
}

export function EzyNestBooking() {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    employerName: '',
    employerAddress: '',
    permanentAddress: '',
    idProofNumber: '',
  })
  const [consentAccepted, setConsentAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getAvailableBeds = (selectedDate: string) => {
    return mockBedAvailability[selectedDate] || TOTAL_BEDS
  }

  const handleDateSelect = (selectedDate: Date | Date[] | undefined) => {
    if (selectedDate instanceof Date) {
      setDate(selectedDate)
    } else if (Array.isArray(selectedDate) && selectedDate.length > 0) {
      setDate(selectedDate[0])
    } else {
      setDate(undefined)
    }
  }

  const handleTimeSelect = (selectedTime: string) => {
    setTime(selectedTime)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!date || !time) {
      alert('Please select date and time first')
      return
    }

    if (!consentAccepted) {
      alert('Please accept the consent form to proceed')
      return
    }

    // Validate required fields
    const requiredFields = ['name', 'phone', 'employerName', 'employerAddress', 'permanentAddress', 'idProofNumber']
    const missingFields = requiredFields.filter(field => !formData[field])
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`)
      return
    }

    if (!formData.idProofFile) {
      alert('Please upload your ID proof')
      return
    }

    try {
      setIsSubmitting(true)
      
      // Prepare booking data
      const bookingData = {
        ...formData,
        checkInDate: date.toISOString().split('T')[0],
        checkInTime: time,
        bookingId: `EZYNEST-${Date.now()}`,
        timestamp: new Date().toISOString()
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Booking submitted:', bookingData)
      
      // Show success message
      alert(`Booking successful! 
      
Booking ID: ${bookingData.bookingId}
Check-in: ${bookingData.checkInDate} at ${time}
Name: ${formData.name}

You will receive a confirmation email shortly. Please save your booking ID for reference.`)
      
      // Reset form
      setStep(1)
      setDate(undefined)
      setTime(undefined)
      setFormData({
        name: '',
        phone: '',
        employerName: '',
        employerAddress: '',
        permanentAddress: '',
        idProofNumber: '',
      })
      setConsentAccepted(false)
      
    } catch (error) {
      console.error('Booking error:', error)
      alert('There was an error processing your booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, idProofFile: file }))
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {step === 1 && (
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
              <CardDescription>Choose your check-in date</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                className="rounded-md border"
                disabled={{ before: new Date() }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Select Time</CardTitle>
              <CardDescription>Choose your check-in time</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={handleTimeSelect}>
                <SelectTrigger>
                  <SelectValue placeholder="Select check-in time" />
                </SelectTrigger>
                <SelectContent>
                  {checkInTimes.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {date && (
                <div className="mt-6 p-4 bg-rose-50 rounded-lg">
                  <h4 className="font-semibold text-rose-900 mb-2">Availability</h4>
                  <p className="text-rose-700">
                    {getAvailableBeds(format(date, 'yyyy-MM-dd'))} beds available
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-rose-600 hover:bg-rose-700"
                disabled={!date || !time}
                onClick={() => setStep(2)}
              >
                Continue to Registration
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Helper Registration</CardTitle>
            <CardDescription>
              Please fill in your details to complete the booking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employerName">Employer Name</Label>
                  <Input
                    id="employerName"
                    value={formData.employerName}
                    onChange={(e) => setFormData(prev => ({ ...prev, employerName: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employerAddress">Employer Address</Label>
                  <Input
                    id="employerAddress"
                    value={formData.employerAddress}
                    onChange={(e) => setFormData(prev => ({ ...prev, employerAddress: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="permanentAddress">Your Permanent Address</Label>
                  <Input
                    id="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={(e) => setFormData(prev => ({ ...prev, permanentAddress: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idProofNumber">ID Proof Number</Label>
                  <Input
                    id="idProofNumber"
                    value={formData.idProofNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, idProofNumber: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idProofFile">Upload ID Proof</Label>
                  <Input
                    id="idProofFile"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    required
                  />
                </div>
              </div>

              <div className="space-y-4 border-t pt-6">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1"
                    checked={consentAccepted}
                    onChange={(e) => setConsentAccepted(e.target.checked)}
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I understand and agree that EzyHelpers and EzyNest are not responsible for any loss or damage to personal belongings during my stay. I take full responsibility for my personal items and safety.
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="w-full"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700"
                  disabled={!consentAccepted || isSubmitting}
                >
                  {isSubmitting ? 'Processing Booking...' : 'Complete Booking'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
