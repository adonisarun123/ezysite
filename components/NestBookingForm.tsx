'use client'

import { useState, useEffect } from 'react'
import { CheckCircleIcon, PaperAirplaneIcon, CalendarDaysIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
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
    const [step, setStep] = useState(1)
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

    const validateStep1 = () => {
        const errors: { [key: string]: string } = {}

        if (!formData.name.trim()) {
            errors.name = 'Name is required'
        } else if (formData.name.trim().length < 3) {
            errors.name = 'Name must be at least 3 characters'
        } else if (formData.name.trim().length > 100) {
            errors.name = 'Name is too long'
        } else if (!/^[a-zA-Z\s.'-]+$/.test(formData.name.trim())) {
            errors.name = 'Only letters and common punctuation allowed'
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required'
        } else if (!/^[5-9][0-9]{9}$/.test(formData.phone.trim())) {
            errors.phone = 'Enter valid 10-digit phone (start with 5-9)'
        }

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Enter a valid email address'
        }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const validateStep2 = () => {
        const errors: { [key: string]: string } = {}
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        if (formData.checkInDate) {
            const checkIn = new Date(formData.checkInDate)
            checkIn.setHours(0, 0, 0, 0)

            if (checkIn < today) {
                errors.checkInDate = 'Cannot be in the past'
            }

            const maxDate = new Date()
            maxDate.setDate(maxDate.getDate() + 90)
            if (checkIn > maxDate) {
                errors.checkInDate = 'Max 90 days in advance'
            }
        }

        if (formData.checkOutDate && formData.checkInDate) {
            const checkOut = new Date(formData.checkOutDate)
            const checkIn = new Date(formData.checkInDate)
            checkOut.setHours(0, 0, 0, 0)
            checkIn.setHours(0, 0, 0, 0)

            if (checkOut <= checkIn) {
                errors.checkOutDate = 'Must be after check-in'
            }

            const duration = calculateDurationDays()
            if (duration && duration > 30) {
                errors.checkOutDate = 'Max stay is 30 days'
            }
        }

        if ((formData.checkInDate && !formData.checkOutDate) || (!formData.checkInDate && formData.checkOutDate)) {
            if (!formData.checkInDate) errors.checkInDate = 'Both dates required'
            if (!formData.checkOutDate) errors.checkOutDate = 'Both dates required'
        }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleNext = () => {
        if (validateStep1()) {
            setStep(2)
        }
    }

    const handleBack = () => {
        setStep(1)
        setFormErrors({})
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
        if (validateStep1() && validateStep2()) {
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

                const { error } = await supabase.from('nest_leads').insert([submissionData])
                if (error) throw error

                try {
                    await fetch('/api/send-nest-lead-email', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ formData: submissionData, requestId: newRequestId })
                    })
                } catch (emailError) {
                    console.error('Email error:', emailError)
                }

                trackFormComplete('nest_booking_form', newRequestId)
                setRequestId(newRequestId)
                setSubmitStatus('success')
            } catch (error) {
                console.error('Submission error:', error)
                trackFormError('nest_booking_form', 'submission_error', error instanceof Error ? error.message : 'Unknown')
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
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Request Received!</h2>
                {requestId && (
                    <p className="mb-4 text-sm text-gray-500">
                        Ref ID: <span className="font-mono font-medium text-gray-900">{requestId}</span>
                    </p>
                )}
                <p className="text-gray-600 mb-6">
                    Our team will call you shortly to confirm your booking.
                </p>
                <button
                    onClick={() => {
                        setFormData({
                            name: '', phone: '', email: '', bookingType: 'helper',
                            checkInDate: '', checkOutDate: '', userType: '', message: ''
                        })
                        setSubmitStatus('idle')
                        setRequestId(null)
                        setStep(1)
                    }}
                    className="text-rose-600 font-medium hover:underline"
                >
                    Submit another request
                </button>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 relative" id="nest-booking-form">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-rose-400 to-pink-400"></div>

            {/* Progress Bar */}
            <div className="mb-6 mt-2">
                <div className="flex justify-between mb-2">
                    <span className={`text-xs font-medium ${step >= 1 ? 'text-rose-600' : 'text-gray-400'}`}>
                        Basic Info
                    </span>
                    <span className={`text-xs font-medium ${step >= 2 ? 'text-rose-600' : 'text-gray-400'}`}>
                        Stay Details
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                        className="bg-gradient-to-r from-rose-500 to-pink-500 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${(step / 2) * 100}%` }}
                    ></div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">Book Your Stay</h3>
            <p className="text-gray-500 text-center mb-5 text-sm">
                {step === 1 ? 'Tell us about yourself' : 'Choose your dates'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
                {step === 1 && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Booking as *</label>
                            <div className="grid grid-cols-2 gap-2">
                                <button type="button" onClick={() => handleInputChange('bookingType', 'helper')}
                                    className={`px-3 py-2.5 rounded-lg border-2 font-medium text-sm transition ${formData.bookingType === 'helper' ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-gray-200 bg-gray-50 text-gray-700'
                                        }`}>Helper</button>
                                <button type="button" onClick={() => handleInputChange('bookingType', 'employer')}
                                    className={`px-3 py-2.5 rounded-lg border-2 font-medium text-sm transition ${formData.bookingType === 'employer' ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-gray-200 bg-gray-50 text-gray-700'
                                        }`}>Employer</button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                            <input type="text" required value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-rose-500 outline-none ${formErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                                    }`} placeholder="Your name" />
                            {formErrors.name && <p className="text-xs text-red-500 mt-0.5">{formErrors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-gray-500 text-sm font-medium">+91</span>
                                <input type="tel" required value={formData.phone} maxLength={10}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className={`w-full pl-11 pr-3 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-rose-500 outline-none ${formErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                                        }`} placeholder="9999999999" />
                            </div>
                            {formErrors.phone && <p className="text-xs text-red-500 mt-0.5">{formErrors.phone}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                            <input type="email" value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-rose-500 outline-none ${formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                                    }`} placeholder="you@example.com" />
                            {formErrors.email && <p className="text-xs text-red-500 mt-0.5">{formErrors.email}</p>}
                        </div>

                        <button type="button" onClick={handleNext}
                            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-lg shadow-md transition flex items-center justify-center gap-2 mt-4">
                            Continue <ArrowRightIcon className="w-4 h-4" />
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                            <div className="relative">
                                <CalendarDaysIcon className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
                                <input type="date" value={formData.checkInDate}
                                    onChange={(e) => handleInputChange('checkInDate', e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-rose-500 outline-none ${formErrors.checkInDate ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                                        }`} />
                            </div>
                            {formErrors.checkInDate && <p className="text-xs text-red-500 mt-0.5">{formErrors.checkInDate}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                            <div className="relative">
                                <CalendarDaysIcon className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
                                <input type="date" value={formData.checkOutDate}
                                    onChange={(e) => handleInputChange('checkOutDate', e.target.value)}
                                    min={formData.checkInDate || new Date().toISOString().split('T')[0]}
                                    className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-rose-500 outline-none ${formErrors.checkOutDate ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                                        }`} />
                            </div>
                            {formErrors.checkOutDate && <p className="text-xs text-red-500 mt-0.5">{formErrors.checkOutDate}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Stay Type</label>
                            <select value={formData.userType} onChange={(e) => handleInputChange('userType', e.target.value)}
                                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none bg-gray-50">
                                <option value="">Select (optional)</option>
                                <option value="helper_between_jobs">Helper between jobs</option>
                                <option value="helper_new_to_city">Helper new to city</option>
                                <option value="helper_employer_vacation">Helper during employer vacation</option>
                                <option value="employer_booking">Employer booking for helper</option>
                                <option value="emergency_stay">Emergency stay</option>
                                <option value="festival_stay">Festival/holiday stay</option>
                                <option value="medical_leave">Medical/personal leave</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                            <textarea value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)}
                                rows={2}
                                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 outline-none bg-gray-50 resize-none"
                                placeholder="Any special requirements..." />
                        </div>

                        {submitStatus === 'error' && (
                            <div className="p-2.5 bg-red-50 text-red-600 text-xs rounded-lg text-center">
                                Something went wrong. Please try again.
                            </div>
                        )}

                        <div className="flex gap-2 mt-4">
                            <button type="button" onClick={handleBack}
                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
                                <ArrowLeftIcon className="w-4 h-4" /> Back
                            </button>
                            <button type="submit" disabled={submitStatus === 'submitting'}
                                className="flex-[2] bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-lg shadow-md transition disabled:opacity-70 flex items-center justify-center gap-2">
                                {submitStatus === 'submitting' ? (
                                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                                ) : (
                                    <>Book Now <PaperAirplaneIcon className="w-4 h-4" /></>
                                )}
                            </button>
                        </div>
                    </>
                )}

                <p className="text-xs text-center text-gray-400 mt-3">
                    By submitting, you agree to our terms.
                </p>
            </form>
        </div>
    )
}
