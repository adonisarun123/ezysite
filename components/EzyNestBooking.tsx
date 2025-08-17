'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Calendar } from '@/components/ui/calendar'
import CompactCalendar from '@/components/ui/compact-calendar'
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
  email: string
  employerName: string
  employerAddress: string
  permanentAddress: string
  idProofNumber: string
  idProofFile?: File
  [key: string]: string | File | undefined
}

export function EzyNestBooking() {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    employerName: '',
    employerAddress: '',
    permanentAddress: '',
    idProofNumber: '',
  })
  const [consentAccepted, setConsentAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [bookingDetails, setBookingDetails] = useState<any>(null)
  const [idProofFile, setIdProofFile] = useState<File | null>(null)
  const [checkoutDate, setCheckoutDate] = useState<Date | undefined>()
  const [showCamera, setShowCamera] = useState(false)
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null)
  
  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/
    return phoneRegex.test(phone)
  }

  const calculateBookingDays = () => {
    if (!date || !checkoutDate) return 0
    const diffTime = Math.abs(checkoutDate.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } // Use back camera on mobile
      })
      setCameraStream(stream)
      setShowCamera(true)
    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('Could not access camera. Please use file upload instead.')
    }
  }

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop())
      setCameraStream(null)
    }
    setShowCamera(false)
  }

  const capturePhoto = () => {
    const video = document.getElementById('camera-video') as HTMLVideoElement
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    
    if (video && context) {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      context.drawImage(video, 0, 0)
      
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `id-proof-${Date.now()}.jpg`, { type: 'image/jpeg' })
          setIdProofFile(file)
          stopCamera()
        }
      }, 'image/jpeg', 0.8)
    }
  }

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

    if (!checkoutDate) {
      alert('Please select check-out date')
      return
    }

    if (checkoutDate <= date) {
      alert('Check-out date must be after check-in date')
      return
    }

    if (!consentAccepted) {
      alert('Please accept the consent form to proceed')
      return
    }

    // Validate required fields
    const requiredFields = ['name', 'phone', 'email', 'employerName', 'employerAddress', 'permanentAddress', 'idProofNumber'] as const
    const missingFields = requiredFields.filter(field => !formData[field as keyof BookingFormData])
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`)
      return
    }

    if (!validatePhoneNumber(formData.phone)) {
      alert('Please enter a valid 10-digit phone number')
      return
    }

    if (!idProofFile) {
      alert('Please capture or upload your ID proof')
      return
    }

    try {
      setIsSubmitting(true)
      
      // Prepare booking data
      const bookingDays = calculateBookingDays()
      const bookingData = {
        ...formData,
        checkInDate: date.toISOString().split('T')[0],
        checkInTime: time,
        checkOutDate: checkoutDate.toISOString().split('T')[0],
        numberOfDays: bookingDays,
        bookingId: `EZYNEST-${Date.now()}`,
        timestamp: new Date().toISOString(),
        idProofFileName: idProofFile?.name || 'id-proof.jpg'
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Booking submitted:', bookingData)
      
      // Send booking confirmation emails
      try {
        const emailResponse = await fetch('/api/send-booking-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bookingDetails: bookingData }),
        })

        if (!emailResponse.ok) {
          throw new Error('Failed to send confirmation email')
        }
      } catch (error) {
        console.error('Email sending failed:', error)
        // Continue with success dialog even if email fails
      }

      // Set booking details and show success dialog
      setBookingDetails(bookingData)
      setShowSuccessDialog(true)
      
      // Reset form
      setStep(1)
      setDate(undefined)
      setTime(undefined)
      setCheckoutDate(undefined)
      setIdProofFile(null)
      setFormData({
        name: '',
        phone: '',
        email: '',
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



  return (
    <div className="max-w-4xl mx-auto">
      {/* Camera Dialog */}
      <Dialog open={showCamera} onOpenChange={(open) => !open && stopCamera()}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Capture ID Proof</DialogTitle>
            <DialogDescription>
              Position your ID document clearly in the camera view
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {cameraStream && (
              <div className="relative">
                <video
                  id="camera-video"
                  autoPlay
                  playsInline
                  className="w-full rounded-lg"
                  ref={(video) => {
                    if (video && cameraStream) {
                      video.srcObject = cameraStream
                    }
                  }}
                />
                <div className="absolute inset-4 border-2 border-white border-dashed rounded-lg opacity-50" />
              </div>
            )}
            <div className="flex gap-2">
              <Button onClick={capturePhoto} className="flex-1">
                📸 Capture
              </Button>
              <Button variant="outline" onClick={stopCamera} className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-rose-600 mb-4">
              Booking Confirmed! 🎉
            </DialogTitle>
            <DialogDescription>
              <div className="space-y-4">
                <div className="p-4 bg-rose-50 rounded-lg">
                  <p className="font-semibold text-rose-900">Booking ID: {bookingDetails?.bookingId}</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold">Check-in Date:</span> {bookingDetails?.checkInDate}</p>
                  <p><span className="font-semibold">Check-in Time:</span> {bookingDetails?.checkInTime}</p>
                  <p><span className="font-semibold">Guest Name:</span> {bookingDetails?.name}</p>
                </div>
                <div className="text-sm text-gray-500 mt-4">
                  <p>A confirmation email has been sent to your registered email address.</p>
                  <p className="mt-2">Please save your booking ID for future reference.</p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {step === 1 && (
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
              <CardDescription>Choose your check-in date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <CompactCalendar
                  selectedDate={date}
                  onDateSelect={handleDateSelect}
                  className="shadow-lg border-rose-200"
                  disabledDates={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 3))}
                  availabilityIndicator={(date) => {
                    const formattedDate = format(date, 'yyyy-MM-dd')
                    const available = getAvailableBeds(formattedDate)
                    return { available, total: TOTAL_BEDS }
                  }}
                />
              </div>
              {date && (
                <div className="mt-4 rounded-lg bg-rose-50 p-3 text-center">
                  <p className="text-sm font-medium text-rose-900">
                    {getAvailableBeds(format(date, 'yyyy-MM-dd'))} of {TOTAL_BEDS} beds available
                  </p>
                </div>
              )}
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
                Continue to Check-out Date
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Select Check-out Date</CardTitle>
              <CardDescription>Choose when you will check out</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <CompactCalendar
                  selectedDate={checkoutDate}
                  onDateSelect={setCheckoutDate}
                  className="shadow-lg border-rose-200"
                  disabledDates={(checkDate) => checkDate <= (date || new Date()) || checkDate > new Date(new Date().setMonth(new Date().getMonth() + 3))}
                />
              </div>
              {checkoutDate && date && (
                <div className="mt-4 rounded-lg bg-rose-50 p-3 text-center">
                  <p className="text-sm font-medium text-rose-900">
                    Duration: {calculateBookingDays()} {calculateBookingDays() === 1 ? 'day' : 'days'}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-rose-600 hover:bg-rose-700"
                disabled={!checkoutDate}
                onClick={() => setStep(3)}
              >
                Continue to Registration
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {step === 3 && (
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
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
                    placeholder="Enter complete address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="permanentAddress">Your Permanent Address</Label>
                  <Input
                    id="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={(e) => setFormData(prev => ({ ...prev, permanentAddress: e.target.value }))}
                    placeholder="Enter complete address"
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
                  <Label>ID Proof Copy</Label>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={startCamera}
                        className="flex-1"
                      >
                        📷 Take Photo
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('idProofFile')?.click()}
                        className="flex-1"
                      >
                        📁 Upload File
                      </Button>
                    </div>
                    <Input
                      id="idProofFile"
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => setIdProofFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                    {idProofFile && (
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-800">
                          ✓ {idProofFile.name} selected
                        </p>
                      </div>
                    )}
                  </div>
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
