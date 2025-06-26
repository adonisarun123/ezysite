'use client'

import { useState, useEffect } from 'react'
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { supabase } from '@/lib/supabaseClient'
import { trackFormStart, trackFormSubmit, trackFormComplete, trackFormError, trackStepComplete, trackServiceSelect, trackBookingStart, trackBookingComplete } from '@/lib/analytics'

interface FormData {
  name: string
  phone: string
  email: string
  city: string
  serviceType: string
  duration: string
  startDate: string
  specificRequirements: string
  experience: string
  budget: string
  languages: string[]
  additionalServices: string[]
  familySize: string
  preferredGender: string
}

const services = [
  { value: 'live-in', label: 'Live-in Maid', description: '24/7 support at home' },
  { value: 'full-time', label: 'Full-time Maid', description: 'Daily 8-10 hours' },
  { value: 'part-time', label: 'Part-time Maid', description: 'Few hours daily' },
  { value: 'on-demand', label: 'On-demand Helper', description: 'As needed basis' },
  { value: 'babysitter', label: 'Babysitter/Nanny', description: 'Child care specialist' },
  { value: 'elderly-care', label: 'Elderly Care', description: 'Senior care assistant' },
  { value: 'cook', label: 'Cook', description: 'Meal preparation' },
  { value: 'driver', label: 'Driver', description: 'Transportation service' }
]

const cities = [
  'Bangalore', 'Mumbai', 'Delhi', 'Noida', 'Nagpur', 
  'Lucknow', 'Kanpur', 'Meerut', 'Bareilly'
]

const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali', 'Marathi']

export default function HireHelperForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    serviceType: '',
    duration: '',
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [requestId, setRequestId] = useState<string | null>(null)
  const [hasTrackedStart, setHasTrackedStart] = useState(false)

  // Track form start when component mounts
  useEffect(() => {
    if (!hasTrackedStart) {
      trackFormStart('hire_helper_form', 'hire_helper_page');
      setHasTrackedStart(true);
    }
  }, [hasTrackedStart])

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Track service selection
    if (field === 'serviceType' && typeof value === 'string') {
      const selectedService = services.find(s => s.value === value);
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
    today.setHours(0,0,0,0)
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
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validateAll = () => {
    const errors: { [key: string]: string } = {}
    const today = new Date()
    today.setHours(0,0,0,0)
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
    if (validateAll()) {
      try {
        // Track form submission
        trackFormSubmit('hire_helper_form', formData);
        
        const newRequestId = generateRequestId()
        const { error } = await supabase.from('hire_helper_leads').insert([
          {
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            city: formData.city,
            service: formData.serviceType,
            duration: formData.duration,
            startDate: formData.startDate,
            specificRequirements: formData.specificRequirements,
            experience: formData.experience,
            budget: formData.budget,
            languages: formData.languages.join(','),
            additionalServices: formData.additionalServices.join(','),
            familySize: formData.familySize,
            preferredGender: formData.preferredGender
          }
        ])
        if (error) throw error
        
        // Track successful form completion
        trackFormComplete('hire_helper_form', newRequestId);
        trackBookingComplete(formData.serviceType, formData.city, newRequestId);
        
        setRequestId(newRequestId)
        setSubmitStatus('success')
      } catch (error) {
        // Track form error
        trackFormError('hire_helper_form', 'submission_error', error instanceof Error ? error.message : 'Unknown error');
        setSubmitStatus('error')
      }
    }
  }

  const stepTitles = ['Personal', 'Service', 'Details']

  const generateRequestId = () => {
    // Generate a simple 6-character uppercase alphanumeric string
    return Math.random().toString(36).substring(2, 8).toUpperCase()
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <CheckCircleIcon className="w-14 h-14 mx-auto text-primary-600" />
        <h2 className="text-2xl font-semibold mt-4 font-display">Thanks for your enquiry!</h2>
        {requestId && (
          <p className="mt-3 text-sm text-gray-700">Your request ID:&nbsp;
            <span className="font-mono font-semibold text-gray-900">{requestId}</span>
          </p>
        )}
        <p className="mt-3 text-sm text-gray-700">Our team will reach out to you shortly.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepNum ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step > stepNum ? <CheckCircleIcon className="w-5 h-5" /> : stepNum}
              </div>
              <span className="mt-1 text-xs font-semibold text-primary-600 min-w-[60px] text-center">
                {step > stepNum ? stepTitles[stepNum-1] : stepNum === step ? stepTitles[stepNum-1] : ''}
              </span>
              {stepNum < 3 && (
                <div className={`w-full h-1 mx-4 ${
                  step > stepNum ? 'bg-primary-500' : 'bg-gray-200'
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

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-display">
              Tell Us About Yourself
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                />
                {formErrors.name && <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="+91 9972571005"
                />
                {formErrors.phone && <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <select
                  required
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">Select your city</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {formErrors.city && <p className="text-xs text-red-500 mt-1">{formErrors.city}</p>}
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                What type of service do you need? *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map(service => (
                  <div
                    key={service.value}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      formData.serviceType === service.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleInputChange('serviceType', service.value)}
                  >
                    <div className="font-medium text-gray-900">{service.label}</div>
                    <div className="text-sm text-gray-600">{service.description}</div>
                  </div>
                ))}
              </div>
              {formErrors.serviceType && <p className="text-xs text-red-500 mt-1">{formErrors.serviceType}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  When do you need to start? *
                </label>
                <input
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
                {formErrors.startDate && <p className="text-xs text-red-500 mt-1">{formErrors.startDate}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Family Size
                </label>
                <select
                  value={formData.familySize}
                  onChange={(e) => handleInputChange('familySize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">Select family size</option>
                  <option value="1-2">1-2 members</option>
                  <option value="3-4">3-4 members</option>
                  <option value="5-6">5-6 members</option>
                  <option value="7+">7+ members</option>
                </select>
                {formErrors.familySize && <p className="text-xs text-red-500 mt-1">{formErrors.familySize}</p>}
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
              >
                Previous
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                Submit Request
              </button>
            </div>
            {submitStatus === 'error' && (
              <p className="text-red-600 text-sm mt-2">There was an error submitting your request. Please try again.</p>
            )}
          </div>
        )}
      </form>
    </div>
  )
} 