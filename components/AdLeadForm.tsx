'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { supabase } from '@/lib/supabaseClient'
import { buildHireHelperLeadInsertRow } from '@/lib/hireHelperLeadDb'
import { trackFormStart, trackFormSubmit, trackFormComplete, trackFormError } from '@/lib/analytics'
import { sendWebhook } from '@/lib/webhookService'

interface AdFormData {
  name: string
  phone: string
  email: string
  message: string
}

interface AdLeadFormProps {
  city?: string
  trackingEvent?: string
}

export default function AdLeadForm({
  city = 'Bangalore',
  trackingEvent = 'live_in_maid_bangalore_ad'
}: AdLeadFormProps) {
  const [formData, setFormData] = useState<AdFormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const router = useRouter()
  const [hasTrackedStart, setHasTrackedStart] = useState(false)

  // Track form start when component mounts
  useEffect(() => {
    if (!hasTrackedStart) {
      trackFormStart('ad_lead_form', trackingEvent);
      setHasTrackedStart(true);
    }
  }, [hasTrackedStart, trackingEvent])

  const handleInputChange = (field: keyof AdFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user types
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

    // Email is optional in original form, but user asked for "Email" field. 
    // Usually in simple lead forms email might be required or optional. 
    // I'll make it optional but validate format if present, or just text.
    // User said "keep only full name, phone number, email and message fields".
    // I will treat email as optional unless user insists, but good practice to validate if entered.
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const generateRequestId = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateAll()) {
      setSubmitStatus('submitting')
      try {
        // Track form submission
        trackFormSubmit('ad_lead_form', formData);

        const newRequestId = generateRequestId()

        // Prepare data for Supabase and Webhook
        // Mapping simple fields to complex schema
        const insertRow = buildHireHelperLeadInsertRow({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          city: city,
          locality: '',
          apartment: '',
          service: 'live-in',
          specificRequirements: formData.message.trim(),
          duration: '',
          serviceTimings: '',
          startDate: new Date().toISOString().split('T')[0],
          experience: '',
          budget: '',
          languages: '',
          additionalServices: '',
          familySize: '',
          preferredGender: '',
        })

        // Store in Supabase
        const { error } = await supabase.from('hire_helper_leads').insert([insertRow])

        if (error) throw error

        // Send email notification
        try {
          const emailResponse = await fetch('/api/send-lead-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              leadType: 'hire_helper',
              formData: {
                name: insertRow.name,
                phone: insertRow.phone,
                email: insertRow.email,
                city: insertRow.city,
                locality: insertRow.locality,
                apartment: insertRow.apartment,
                serviceType: 'live-in',
                duration: insertRow.duration,
                serviceTimings: insertRow.service_timings,
                startDate: insertRow.start_date,
                specificRequirements: insertRow.specific_requirements,
                experience: insertRow.experience,
                budget: insertRow.budget,
                languages: [],
                additionalServices: [],
                familySize: insertRow.family_size,
                preferredGender: insertRow.preferred_gender ?? '',
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
        }

        // Send webhook
        // Note: sendWebhook expects the data structure. I'll pass the submissionData.
        sendWebhook(
          'hire_helper',
          {
            name: insertRow.name,
            phone: insertRow.phone,
            email: insertRow.email,
            city: insertRow.city,
            locality: insertRow.locality,
            apartment: insertRow.apartment,
            serviceType: 'live-in',
            duration: insertRow.duration,
            serviceTimings: insertRow.service_timings,
            startDate: insertRow.start_date,
            specificRequirements: insertRow.specific_requirements,
            experience: insertRow.experience,
            budget: insertRow.budget,
            languages: [],
            additionalServices: [],
            familySize: insertRow.family_size,
            preferredGender: insertRow.preferred_gender ?? '',
          },
          newRequestId
        ).catch(console.error)

        // Track successful form completion
        trackFormComplete('ad_lead_form', newRequestId);

        router.push(`/thank-you?type=ad&ref=${encodeURIComponent(newRequestId)}`)
      } catch (error) {
        console.error('Form submission error:', error)
        // Track form error
        trackFormError('ad_lead_form', 'submission_error', error instanceof Error ? error.message : 'Unknown error');
        setSubmitStatus('error')
      }
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 relative overflow-hidden" id="ad-lead-form">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-secondary-400 to-success-400"></div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Get a Call Back</h3>
      <p className="text-gray-500 text-center mb-6 text-sm">Fill the form below to get verified profiles</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${formErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
              }`}
            placeholder="Enter your name"
          />
          {formErrors.name && <p className="text-xs text-red-500 mt-1 ml-1">{formErrors.name}</p>}
        </div>

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
              className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${formErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                }`}
              placeholder="99999 99999"
              maxLength={10}
            />
          </div>
          {formErrors.phone && <p className="text-xs text-red-500 mt-1 ml-1">{formErrors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
              }`}
            placeholder="john@example.com"
          />
          {formErrors.email && <p className="text-xs text-red-500 mt-1 ml-1">{formErrors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message / Requirements
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-gray-50 focus:bg-white transition-all resize-none"
            placeholder="I need a live-in maid for..."
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
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/30 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {submitStatus === 'submitting' ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Get Callback Now
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
