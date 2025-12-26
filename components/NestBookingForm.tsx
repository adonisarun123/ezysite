'use client'

import { useState, useEffect } from 'react'
import { CheckCircleIcon, PaperAirplaneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import { supabase } from '@/lib/supabaseClient'
import { trackFormStart, trackFormSubmit, trackFormComplete, trackFormError } from '@/lib/analytics'

interface NestBookingData {
    name: string
    phone: string
    email: string
    bookingType: 'helper' | 'employer'
    checkInDate: string
    checkOutDate: string
    userType: string
    message: string
}

export default function NestBookingForm() {
    const [formData, setFormData] = useState<NestBookingData>({
        name: '',
        phone: '',
        email: '',
        bookingType: 'helper',
        checkInDate: '',
        checkOutDate: '',
        userType: '',
        message: ''
    })
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [requestId, setRequestId] = useState<string | null>(null)
    const [hasTrackedStart, setHasTrackedStart] = useState(false)

    // Track form start when component mounts
    useEffect(() => {
        if (!hasTrackedStart) {
            trackFormStart('nest_booking_form', 'nest_accommodation')
            setHasTrackedStart(true)
        }
    }, [hasTrackedStart])

    const handleInputChange = (field: keyof NestBookingData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (formErrors[field]) {
            setFormErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors[field]
                return newErrors
            })
        }
    }

    const validateAll = () => {
        const errors: { [key: string]: string } = {}

        // Name validation
        if (!formData.name.trim()) {
            errors.name = 'Name is required'
        } else if (formData.name.trim().length < 3) {
            errors.name = 'Name must be at least 3 characters'
        } else if (formData.name.trim().length > 100) {
            errors.name = 'Name is too long (max 100 characters)'
        } else if (!/^[a-zA-Z\s.'-]+$/.test(formData.name.trim())) {
            errors.name = 'Name can only contain letters, spaces, and common punctuation'
        }

        // Phone validation
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required'
        } else if (!/^[5-9][0-9]{9}$/.test(formData.phone.trim())) {
            errors.phone = 'Enter a valid 10-digit phone number starting with 5-9'
        }

        // Email validation (optional but validate format if provided)
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Enter a valid email address'
        }

        // Date validations
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        if (formData.checkInDate) {
            const checkIn = new Date(formData.checkInDate)
            checkIn.setHours(0, 0, 0, 0)

            // Check if check-in is in the past
            if (checkIn < today) {
                errors.checkInDate = 'Check-in date cannot be in the past'
            }

            // Check if check-in is too far in future (90 days)
            const maxFutureDate = new Date()
            maxFutureDate.setDate(maxFutureDate.getDate() + 90)
            if (checkIn > maxFutureDate) {
                errors.checkInDate = 'Check-in date cannot be more than 90 days in advance'
            }
        }

        if (formData.checkOutDate) {
            const checkOut = new Date(formData.checkOutDate)
            checkOut.setHours(0, 0, 0, 0)

            if (formData.checkInDate) {
                const checkIn = new Date(formData.checkInDate)
                checkIn.setHours(0, 0, 0, 0)

                // Check-out must be after check-in
                if (checkOut <= checkIn) {
                    errors.checkOutDate = 'Check-out date must be after check-in date'
                }

                // Calculate duration
                const duration = calculateDurationDays()

                // Maximum stay is 30 days as per NEST policy
                if (duration && duration > 30) {
                    errors.checkOutDate = 'Maximum stay duration is 30 days'
                }

                // Minimum stay (at least 1 day)
                if (duration && duration < 1) {
                    errors.checkOutDate = 'Minimum stay is 1 day'
                }
            }
        }

        // If dates are provided, both must be provided
        if ((formData.checkInDate && !formData.checkOutDate) || (!formData.checkInDate && formData.checkOutDate)) {
            if (!formData.checkInDate) {
                errors.checkInDate = 'Please provide check-in date'
            }
            if (!formData.checkOutDate) {
                errors.checkOutDate = 'Please provide check-out date'
            }
        }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const generateRequestId = () => {
        return Math.random().toString(36).substring(2, 8).toUpperCase()
    }

    const calculateDurationDays = () => {
        if (formData.checkInDate && formData.checkOutDate) {
            const checkIn = new Date(formData.checkInDate)
            const checkOut = new Date(formData.checkOutDate)
            const diffTime = checkOut.getTime() - checkIn.getTime()
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
            return diffDays > 0 ? diffDays : null
        }
        return null
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (validateAll()) {
            setSubmitStatus('submitting')
            try {
                trackFormSubmit('nest_booking_form', formData)

                const newRequestId = generateRequestId()
                const durationDays = calculateDurationDays()

                const submissionData = {
                    name: formData.name.trim(),
                    phone: formData.phone.trim(),
                    email: formData.email.trim() || null,
                    booking_type: formData.bookingType,
                    check_in_date: formData.checkInDate || null,
                    check_out_date: formData.checkOutDate || null,
                    duration_days: durationDays,
                    user_type: formData.userType || null,
                    message: formData.message.trim() || null,
                    source_url: typeof window !== 'undefined' ? window.location.href : null,
                    request_id: newRequestId,
                    status: 'new'
                }

                // Store in Supabase nest_leads table
                const { error } = await supabase.from('nest_leads').insert([submissionData])

                if (error) throw error

                // Send email notification
                try {
                    const emailResponse = await fetch('/api/send-nest-lead-email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            formData: submissionData,
                            requestId: newRequestId
                        })
                    })

                    if (!emailResponse.ok) {
                        console.error('Failed to send email notification')
                    }
                } catch (emailError) {
                    console.error('Email sending error:', emailError)
                }

                trackFormComplete('nest_booking_form', newRequestId)

                setRequestId(newRequestId)
                setSubmitStatus('success')
            } catch (error) {
                console.error('Form submission error:', error)
                trackFormError('nest_booking_form', 'submission_error', error instanceof Error ? error.message : 'Unknown error')
                setSubmitStatus('error')
            }
        }
    }

    if (submitStatus === 'success') {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">Booking Request Received!</h2>
                {requestId && (
                    <p className="mb-4 text-sm text-gray-500">
                        Ref ID: <span className="font-mono font-medium text-gray-900">{requestId}</span>
                    </p>
                )}
                <p className="text-gray-600 mb-6">
                    Thank you for your interest in NEST. Our team will call you shortly to confirm your booking details.
                </p>
                <button
                    onClick={() => {
                        setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            bookingType: 'helper',
                            checkInDate: '',
                            checkOutDate: '',
                            userType: '',
                            message: ''
                        })
                        setSubmitStatus('idle')
                        setRequestId(null)
                    }}
                    className="text-rose-600 font-medium hover:text-rose-700 hover:underline"
                >
                    Submit another request
                </button>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 relative overflow-hidden" id="nest-booking-form">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-rose-400 to-pink-400"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Book Your NEST Stay</h3>
            <p className="text-gray-500 text-center mb-6 text-sm">Fill the form below to check availability</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Booking Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        I am booking as *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            onClick={() => handleInputChange('bookingType', 'helper')}
                            className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${formData.bookingType === 'helper'
                                ? 'border-rose-500 bg-rose-50 text-rose-700'
                                : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-rose-200'
                                }`}
                        >
                            Helper
                        </button>
                        <button
                            type="button"
                            onClick={() => handleInputChange('bookingType', 'employer')}
                            className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${formData.bookingType === 'employer'
                                ? 'border-rose-500 bg-rose-50 text-rose-700'
                                : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-rose-200'
                                }`}
                        >
                            Employer
                        </button>
                    </div>
                </div>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all ${formErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                            }`}
                        placeholder="Enter your name"
                    />
                    {formErrors.name && <p className="text-xs text-red-500 mt-1 ml-1">{formErrors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-3.5 text-gray-500 font-medium">+91</span>
                        <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all ${formErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                                }`}
                            placeholder="99999 99999"
                            maxLength={10}
                        />
                    </div>
                    {formErrors.phone && <p className="text-xs text-red-500 mt-1 ml-1">{formErrors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address (Optional)
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all ${formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                            }`}
                        placeholder="john@example.com"
                    />
                    {formErrors.email && <p className="text-xs text-red-500 mt-1 ml-1">{formErrors.email}</p>}
                </div>

                {/* Check-in Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Check-in Date
                    </label>
                    <div className="relative">
                        <CalendarDaysIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <input
                            type="date"
                            value={formData.checkInDate}
                            onChange={(e) => handleInputChange('checkInDate', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all ${formErrors.checkInDate ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                                }`}
                        />
                    </div>
                    {formErrors.checkInDate && <p className="text-xs text-red-500 mt-1 ml-1">{formErrors.checkInDate}</p>}
                </div>

                {/* Check-out Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Check-out Date
                    </label>
                    <div className="relative">
                        <CalendarDaysIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <input
                            type="date"
                            value={formData.checkOutDate}
                            onChange={(e) => handleInputChange('checkOutDate', e.target.value)}
                            min={formData.checkInDate || new Date().toISOString().split('T')[0]}
                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all ${formErrors.checkOutDate ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                                }`}
                        />
                    </div>
                    {formErrors.checkOutDate && <p className="text-xs text-red-500 mt-1 ml-1">{formErrors.checkOutDate}</p>}
                </div>

                {/* User Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Stay Type
                    </label>
                    <select
                        value={formData.userType}
                        onChange={(e) => handleInputChange('userType', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-all"
                    >
                        <option value="">Select stay type (optional)</option>
                        <option value="helper_between_jobs">Helper between jobs</option>
                        <option value="helper_new_to_city">Helper new to city</option>
                        <option value="helper_employer_vacation">Helper during employer vacation</option>
                        <option value="employer_booking">Employer booking for helper</option>
                        <option value="emergency_stay">Emergency stay</option>
                        <option value="festival_stay">Festival/holiday stay</option>
                        <option value="medical_leave">Medical/personal leave</option>
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requirements / Message
                    </label>
                    <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-all resize-none"
                        placeholder="Any special requirements or questions..."
                    />
                </div>

                {submitStatus === 'error' && (
                    <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
                        Something went wrong. Please try again.
                    </div>
                )}

                <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-500/30 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                    {submitStatus === 'submitting' ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Book Now
                            <PaperAirplaneIcon className="w-5 h-5" />
                        </>
                    )}
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                    By submitting, you agree to our terms and privacy policy.
                </p>
            </form>
        </div>
    )
}
