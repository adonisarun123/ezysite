'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { supabase } from '@/lib/supabaseClient'
import { buildHireHelperLeadInsertRow } from '@/lib/hireHelperLeadDb'
import { trackFormStart, trackFormSubmit, trackFormComplete, trackFormError, trackStepComplete, trackServiceSelect, trackBookingStart, trackBookingComplete } from '@/lib/analytics'
import { sendWebhook } from '@/lib/webhookService'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

interface FormData {
  name: string
  phone: string
  email: string
  city: string
  locality: string
  apartment: string
  serviceType: string
  serviceRole: string
  otherRole: string
  duration: string
  serviceTimings: string
  startDate: string
  specificRequirements: string
  experience: string
  budget: string
  languages: string[]
  additionalServices: string[]
  familySize: string
  preferredGender: string
}

const employmentTypes = [
  { value: 'live-in', label: 'Live-in Maid', description: '24/7 support at home' },
  { value: 'full-time', label: 'Full-time Maid', description: 'Daily 8-10 hours' },
  { value: 'part-time', label: 'Part-time Maid', description: 'Few hours daily' },
  { value: 'on-demand', label: 'On-demand Helper', description: 'As needed basis' },
]

const serviceRoles = [
  { value: 'baby-care', label: 'Baby Care/Nanny', description: 'Child care specialist' },
  { value: 'elderly-care', label: 'Elderly Care', description: 'Senior care assistant' },
  { value: 'general-housekeeping', label: 'General Housekeeping', description: 'Cleaning & household tasks' },
  { value: 'cook', label: 'Cook', description: 'Meal preparation' },
  { value: 'driver', label: 'Driver', description: 'Transportation service' },
  { value: 'others', label: 'Others', description: 'Please specify below' },
]

const services = [
  ...employmentTypes,
  ...serviceRoles,
]

const cities = [
  'Bangalore', 'Mumbai', 'Delhi', 'Noida', 'Nagpur',
  'Lucknow', 'Kanpur', 'Meerut', 'Bareilly'
]

const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali', 'Marathi']

/** Shown only when service is not live-in */
const DURATION_OPTIONS = [
  { value: 'few-hours-once', label: 'Few hours / one-time visit' },
  { value: 'daily-partial', label: 'Daily (part of the day)' },
  { value: 'daily-full', label: 'Daily (full working day)' },
  { value: '1-week', label: 'About 1 week' },
  { value: '1-month', label: 'About 1 month' },
  { value: '2-3-months', label: '2–3 months' },
  { value: '6-months-plus', label: '6 months or longer' },
  { value: 'ongoing', label: 'Ongoing / flexible' }
]

const requiresScheduleDetails = (serviceType: string) =>
  Boolean(serviceType && serviceType !== 'live-in')

export default function HireHelperForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    locality: '',
    apartment: '',
    serviceType: '',
    serviceRole: '',
    otherRole: '',
    duration: '',
    serviceTimings: '',
    startDate: '',
    specificRequirements: '',
    experience: '',
    budget: '',
    languages: [],
    additionalServices: [],
    familySize: '',
    preferredGender: ''
  })
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'error'>('idle')
  const [submitting, setSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [hasTrackedStart, setHasTrackedStart] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  // Track form start when component mounts and check for URL parameters
  useEffect(() => {
    if (!hasTrackedStart) {
      trackFormStart('hire_helper_form', 'hire_helper_page');
      setHasTrackedStart(true);

      const serviceParam = searchParams.get('service');
      if (serviceParam && employmentTypes.some(s => s.value === serviceParam)) {
        setFormData(prev => ({ ...prev, serviceType: serviceParam }));
        const selectedService = employmentTypes.find(s => s.value === serviceParam);
        if (selectedService) {
          trackServiceSelect(selectedService.label, serviceParam, 'hire_helper_form');
        }
      }
    }
  }, [hasTrackedStart, searchParams])

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => {
      const next = { ...prev, [field]: value } as FormData
      if (field === 'serviceType' && typeof value === 'string') {
        if (value === 'live-in') {
          next.duration = ''
          next.serviceTimings = ''
        }
        next.serviceRole = ''
        next.otherRole = ''
      }
      return next
    })

    // Track service selection
    if (field === 'serviceType' && typeof value === 'string') {
      const selectedService = employmentTypes.find(s => s.value === value);
      if (selectedService) {
        trackServiceSelect(selectedService.label, value, 'hire_helper_form');
      }
    }
  }

  const handleLanguageToggle = (language: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }))
  }

  const validateStep = () => {
    const errors: { [key: string]: string } = {}
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 1)
    if (step === 1) {
      if (!formData.name.trim()) {
        errors.name = 'Name is required'
      } else if (formData.name.trim().length < 3) {
        errors.name = 'Name must be at least 3 characters'
      }
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required'
      } else if (!/^[5-9][0-9]{9}$/.test(formData.phone.trim())) {
        errors.phone = 'Enter a valid 10-digit phone number starting with 5-9'
      }
      if (!formData.city) {
        errors.city = 'Please select a city'
      }
    } else if (step === 2) {
      if (!formData.serviceType) {
        errors.serviceType = 'Please select a service type'
      }
      if (!formData.serviceRole) {
        errors.serviceRole = 'Please select a role'
      }
      if (formData.serviceRole === 'others' && !formData.otherRole.trim()) {
        errors.otherRole = 'Please specify the role you need'
      }
      if (!formData.startDate) {
        errors.startDate = 'Please select a start date'
      } else {
        const startDate = new Date(formData.startDate)
        if (startDate < today) {
          errors.startDate = 'Start date cannot be in the past'
        } else if (startDate > maxDate) {
          errors.startDate = 'Start date cannot be more than one month from today'
        }
      }
      if (!formData.familySize) {
        errors.familySize = 'Please select family size'
      }
      if (requiresScheduleDetails(formData.serviceType)) {
        if (!formData.serviceTimings.trim()) {
          errors.serviceTimings = 'Please enter your preferred service timings'
        }
        if (!formData.duration) {
          errors.duration = 'Please select how long you need the service'
        }
      }
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validateAll = () => {
    const errors: { [key: string]: string } = {}
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 1)
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters'
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!/^[5-9][0-9]{9}$/.test(formData.phone.trim())) {
      errors.phone = 'Enter a valid 10-digit phone number starting with 5-9'
    }
    if (!formData.city) {
      errors.city = 'Please select a city'
    }
    if (!formData.serviceType) {
      errors.serviceType = 'Please select a service type'
    }
    if (!formData.serviceRole) {
      errors.serviceRole = 'Please select a role'
    }
    if (formData.serviceRole === 'others' && !formData.otherRole.trim()) {
      errors.otherRole = 'Please specify the role you need'
    }
    if (!formData.startDate) {
      errors.startDate = 'Please select a start date'
    } else {
      const startDate = new Date(formData.startDate)
      if (startDate < today) {
        errors.startDate = 'Start date cannot be in the past'
      } else if (startDate > maxDate) {
        errors.startDate = 'Start date cannot be more than one month from today'
      }
    }
    if (!formData.familySize) {
      errors.familySize = 'Please select family size'
    }
    if (requiresScheduleDetails(formData.serviceType)) {
      if (!formData.serviceTimings.trim()) {
        errors.serviceTimings = 'Please enter your preferred service timings'
      }
      if (!formData.duration) {
        errors.duration = 'Please select how long you need the service'
      }
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const nextStep = () => {
    if (validateStep()) {
      const newStep = Math.min(step + 1, 3);
      setStep(newStep);

      // Track step completion
      const stepNames = ['Personal Information', 'Service Requirements', 'Additional Details'];
      trackStepComplete(stepNames[step - 1], step, 3);

      // Track booking start when moving to step 2
      if (newStep === 2 && formData.city) {
        trackBookingStart(formData.serviceType || 'unknown', formData.city);
      }
    }
  }
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    if (!validateAll()) return
    setSubmitting(true)
    try {
      // Track form submission
      trackFormSubmit('hire_helper_form', formData);

      const newRequestId = generateRequestId()

      // Store in Supabase
      const roleLabel = formData.serviceRole === 'others' ? formData.otherRole.trim() : formData.serviceRole
      const insertRow = buildHireHelperLeadInsertRow({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        city: formData.city,
        locality: formData.locality.trim(),
        apartment: formData.apartment.trim(),
        service: `${formData.serviceType} - ${roleLabel}`,
        duration: formData.duration,
        serviceTimings: formData.serviceTimings.trim(),
        startDate: formData.startDate,
        specificRequirements: formData.specificRequirements,
        experience: formData.experience,
        budget: formData.budget,
        languages: formData.languages.join(','),
        additionalServices: formData.additionalServices.join(','),
        familySize: formData.familySize,
        preferredGender: formData.preferredGender,
      })
      const { error } = await supabase.from('hire_helper_leads').insert([insertRow])
      if (error) {
        console.error('hire_helper_leads insert failed:', error.message, error)
        throw error
      }

      // Send email notification
      try {
        const emailResponse = await fetch('/api/send-lead-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            leadType: 'hire_helper',
            website: honeypot,
            formData: {
              name: formData.name.trim(),
              phone: formData.phone.trim(),
              email: formData.email.trim(),
              city: formData.city,
              locality: formData.locality.trim(),
              apartment: formData.apartment.trim(),
              serviceType: formData.serviceType,
              serviceRole: formData.serviceRole === 'others' ? formData.otherRole.trim() : formData.serviceRole,
              duration: formData.duration,
              serviceTimings: formData.serviceTimings.trim(),
              startDate: formData.startDate,
              specificRequirements: formData.specificRequirements,
              experience: formData.experience,
              budget: formData.budget,
              languages: formData.languages,
              additionalServices: formData.additionalServices,
              familySize: formData.familySize,
              preferredGender: formData.preferredGender
            },
            requestId: newRequestId,
            sourceUrl: window.location.href
          })
        });

        if (!emailResponse.ok) {
          console.error('Failed to send email notification');
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't fail the form submission if email fails
      }

      // Send webhook
      sendWebhook('hire_helper', { ...formData, website: honeypot }, newRequestId).catch(console.error)

      // Track successful form completion
      trackFormComplete('hire_helper_form', newRequestId);
      trackBookingComplete(formData.serviceType, formData.city, newRequestId);

      router.push(`/thank-you?type=hire&ref=${encodeURIComponent(newRequestId)}`)
    } catch (error) {
      // Track form error
      trackFormError('hire_helper_form', 'submission_error', error instanceof Error ? error.message : 'Unknown error');
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  const stepTitles = ['Personal', 'Service', 'Details']

  const generateRequestId = () => {
    // Generate a simple 6-character uppercase alphanumeric string
    return Math.random().toString(36).substring(2, 8).toUpperCase()
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= stepNum ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                {step > stepNum ? <CheckCircleIcon className="w-5 h-5" /> : stepNum}
              </div>
              <span className="mt-1 text-xs font-semibold text-primary-600 min-w-[60px] text-center">
                {step > stepNum ? stepTitles[stepNum - 1] : stepNum === step ? stepTitles[stepNum - 1] : ''}
              </span>
              {stepNum < 3 && (
                <div className={`w-full h-1 mx-4 ${step > stepNum ? 'bg-primary-500' : 'bg-gray-200'
                  }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-600">
          Step {step} of 3: {
            step === 1 ? 'Personal Information' :
              step === 2 ? 'Service Requirements' :
                'Additional Details'
          }
        </div>
      </div>

      <form onSubmit={handleSubmit} aria-busy={submitting}>
        {/* Honeypot field - hidden from real users, traps bots */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, opacity: 0 }}
        />
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-display">
              Tell Us About Yourself
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="hire-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="hire-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? 'hire-name-error' : undefined}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                />
                {formErrors.name && <p id="hire-name-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="hire-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none select-none">+91</span>
                  <input
                    id="hire-phone"
                    type="tel"
                    required
                    inputMode="tel"
                    maxLength={10}
                    pattern="[5-9][0-9]{9}"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, ''))}
                    aria-invalid={!!formErrors.phone}
                    aria-describedby={formErrors.phone ? 'hire-phone-error' : 'hire-phone-hint'}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    placeholder="9XXXXXXXXX"
                  />
                </div>
                <p id="hire-phone-hint" className="text-xs text-gray-500 mt-1">10-digit mobile number, no country code needed</p>
                {formErrors.phone && <p id="hire-phone-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.phone}</p>}
              </div>

              <div>
                <label htmlFor="hire-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="hire-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  aria-invalid={!!formErrors.email}
                  aria-describedby={formErrors.email ? 'hire-email-error' : undefined}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
                {formErrors.email && <p id="hire-email-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="hire-city" className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <select
                  id="hire-city"
                  required
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  aria-invalid={!!formErrors.city}
                  aria-describedby={formErrors.city ? 'hire-city-error' : undefined}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">Select your city</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {formErrors.city && <p id="hire-city-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.city}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Locality
                </label>
                <input
                  type="text"
                  value={formData.locality}
                  onChange={(e) => handleInputChange('locality', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="Area within the city (e.g. HSR Layout, Janakpuri)"
                />
                <p className="text-xs text-gray-500 mt-1">Which part of the city you need help in</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Apartment
                </label>
                <input
                  type="text"
                  value={formData.apartment}
                  onChange={(e) => handleInputChange('apartment', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="Society, tower, flat or building name"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary flex items-center"
              >
                Next Step <ChevronRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
            {formErrors.step && <p className="text-xs text-red-500 mt-1">{formErrors.step}</p>}
          </div>
        )}

        {/* Step 2: Service Requirements */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-display">
              Service Requirements
            </h2>

            {/* Employment Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                What type of service do you need? *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {employmentTypes.map(type => (
                  <div
                    key={type.value}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.serviceType === type.value
                      ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                      : 'border-gray-200 hover:border-gray-300'
                      }`}
                    onClick={() => handleInputChange('serviceType', type.value)}
                  >
                    <div className="font-medium text-gray-900">{type.label}</div>
                    <div className="text-sm text-gray-600">{type.description}</div>
                  </div>
                ))}
              </div>
              {formErrors.serviceType && <p className="text-xs text-red-500 mt-1">{formErrors.serviceType}</p>}
            </div>

            {/* Role Selection - shown after employment type is chosen */}
            {formData.serviceType && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What role do you need help with? *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceRoles.map(role => (
                    <div
                      key={role.value}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.serviceRole === role.value
                        ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                      onClick={() => setFormData(prev => ({ ...prev, serviceRole: role.value, otherRole: role.value !== 'others' ? '' : prev.otherRole }))}
                    >
                      <div className="font-medium text-gray-900">{role.label}</div>
                      <div className="text-sm text-gray-600">{role.description}</div>
                    </div>
                  ))}
                </div>
                {formErrors.serviceRole && <p className="text-xs text-red-500 mt-1">{formErrors.serviceRole}</p>}

                {formData.serviceRole === 'others' && (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={formData.otherRole}
                      onChange={(e) => setFormData(prev => ({ ...prev, otherRole: e.target.value }))}
                      aria-invalid={!!formErrors.otherRole}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      placeholder="Please specify the role you need..."
                    />
                    {formErrors.otherRole && <p className="text-xs text-red-500 mt-1">{formErrors.otherRole}</p>}
                  </div>
                )}
              </div>
            )}

            {requiresScheduleDetails(formData.serviceType) && (
              <div className="space-y-6 rounded-xl border border-primary-100 bg-primary-50/40 p-5 md:p-6">
                <p className="text-sm font-medium text-gray-800">
                  Schedule for this service
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="hire-serviceTimings" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred service timings *
                    </label>
                    <input
                      id="hire-serviceTimings"
                      type="text"
                      value={formData.serviceTimings}
                      onChange={(e) => handleInputChange('serviceTimings', e.target.value)}
                      aria-invalid={!!formErrors.serviceTimings}
                      aria-describedby={formErrors.serviceTimings ? 'hire-serviceTimings-error' : 'hire-serviceTimings-hint'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white"
                      placeholder="e.g. 8 AM – 6 PM, Monday–Friday"
                    />
                    <p id="hire-serviceTimings-hint" className="text-xs text-gray-500 mt-1">Hours and days you need the helper at home</p>
                    {formErrors.serviceTimings && <p id="hire-serviceTimings-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.serviceTimings}</p>}
                  </div>
                  <div>
                    <label htmlFor="hire-duration" className="block text-sm font-medium text-gray-700 mb-2">
                      Duration *
                    </label>
                    <select
                      id="hire-duration"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      aria-invalid={!!formErrors.duration}
                      aria-describedby={formErrors.duration ? 'hire-duration-error' : undefined}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="">How long do you need the service?</option>
                      {DURATION_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    {formErrors.duration && <p id="hire-duration-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.duration}</p>}
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="hire-startDate" className="block text-sm font-medium text-gray-700 mb-2">
                  When do you need to start? *
                </label>
                <input
                  id="hire-startDate"
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  aria-invalid={!!formErrors.startDate}
                  aria-describedby={formErrors.startDate ? 'hire-startDate-error' : undefined}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                {formErrors.startDate && <p id="hire-startDate-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.startDate}</p>}
              </div>

              <div>
                <label htmlFor="hire-familySize" className="block text-sm font-medium text-gray-700 mb-2">
                  Family Size
                </label>
                <select
                  id="hire-familySize"
                  value={formData.familySize}
                  onChange={(e) => handleInputChange('familySize', e.target.value)}
                  aria-invalid={!!formErrors.familySize}
                  aria-describedby={formErrors.familySize ? 'hire-familySize-error' : undefined}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">Select family size</option>
                  <option value="1-2">1-2 members</option>
                  <option value="3-4">3-4 members</option>
                  <option value="5-6">5-6 members</option>
                  <option value="7+">7+ members</option>
                </select>
                {formErrors.familySize && <p id="hire-familySize-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.familySize}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specific Requirements
              </label>
              <textarea
                value={formData.specificRequirements}
                onChange={(e) => handleInputChange('specificRequirements', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="Tell us about any specific needs, preferences, or requirements..."
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="btn-outline"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary flex items-center"
              >
                Next Step <ChevronRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
            {formErrors.step && <p className="text-xs text-red-500 mt-1">{formErrors.step}</p>}
          </div>
        )}

        {/* Step 3: Additional Details */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-display">
              Additional Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Gender
                </label>
                <select
                  value={formData.preferredGender}
                  onChange={(e) => handleInputChange('preferredGender', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">No preference</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">No preference</option>
                  <option value="entry">Entry level (0-1 years)</option>
                  <option value="experienced">Experienced (2-5 years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Preferred Languages
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {languages.map(language => (
                  <label key={language} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.languages.includes(language)}
                      onChange={() => handleLanguageToggle(language)}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{language}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              >
                <option value="">Select budget range</option>
                <option value="under-10k">Under ₹10,000</option>
                <option value="10k-15k">₹10,000 - ₹15,000</option>
                <option value="15k-20k">₹15,000 - ₹20,000</option>
                <option value="20k-25k">₹20,000 - ₹25,000</option>
                <option value="25k-30k">₹25,000 - ₹30,000</option>
                <option value="above-30k">Above ₹30,000</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="btn-outline"
                disabled={submitting}
              >
                Previous
              </button>
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={submitting}
                aria-disabled={submitting}
              >
                {submitting && <LoadingSpinner size="sm" />}
                {submitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
            {submitStatus === 'error' && (
              <p role="alert" className="text-red-600 text-sm mt-2">There was an error submitting your request. Please try again.</p>
            )}
          </div>
        )}
      </form>
    </div>
  )
} 
