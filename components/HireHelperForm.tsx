'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { supabase } from '@/lib/supabaseClient'
import { buildHireHelperLeadInsertRow } from '@/lib/hireHelperLeadDb'
import {
  trackFormStart,
  trackFormSubmit,
  trackFormComplete,
  trackFormError,
  trackServiceSelect,
  trackBookingStart,
  trackBookingComplete,
  trackFormSubmitSuccess,
} from '@/lib/analytics'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import {
  generateRequestId,
  saveHandoff,
  type HireHelperBasic,
} from '@/lib/hireHelperFlow'

/**
 * Step 1 of the hire-helper flow — a short, single-screen form.
 *
 * We deliberately ask for as little as possible here (Name, Phone, Locality,
 * Job Role, Job Type) to cut the drop-off the old 4-step form was causing.
 * On submit we create a booking ID, store the basic lead in Supabase, and send
 * the visitor to the thank-you page, where they can optionally "fast-pace" the
 * request by adding the remaining details.
 */

type BasicFormData = HireHelperBasic

const EMPTY_FORM: BasicFormData = {
  name: '',
  phone: '',
  city: '',
  locality: '',
  serviceRole: '',
  otherRole: '',
  serviceType: '',
}

const employmentTypes = [
  { value: 'live-in', label: 'Live-in Helper', description: '24/7 support at home' },
  { value: 'full-time', label: 'Full-time Helper', description: 'Daily 8-10 hours' },
  { value: 'part-time', label: 'Part-time Helper', description: 'Few hours daily' },
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

const cities = [
  'Bangalore', 'Mumbai', 'Delhi', 'Noida', 'Nagpur',
  'Lucknow', 'Kanpur', 'Meerut', 'Bareilly',
]

const DRAFT_KEY = 'ezy_hire_helper_basic_draft_v1'

interface Draft {
  formData: BasicFormData
  savedAt: string
}

export default function HireHelperForm() {
  const [formData, setFormData] = useState<BasicFormData>(EMPTY_FORM)
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'error'>('idle')
  const [submitting, setSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [hasTrackedStart, setHasTrackedStart] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const submittedRef = useRef(false)

  const saveDraft = useCallback((data: BasicFormData) => {
    try {
      const draft: Draft = { formData: data, savedAt: new Date().toISOString() }
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
    } catch {
      /* storage unavailable */
    }
  }, [])

  const clearDraft = useCallback(() => {
    try {
      window.localStorage.removeItem(DRAFT_KEY)
    } catch {
      /* ignore */
    }
  }, [])

  // Restore draft + track form start + apply ?service= param (legacy links)
  useEffect(() => {
    if (hasTrackedStart) return
    trackFormStart('hire_helper_form', 'hire_helper_page')
    setHasTrackedStart(true)

    let restored: Draft | null = null
    try {
      const raw = window.localStorage.getItem(DRAFT_KEY)
      if (raw) restored = JSON.parse(raw) as Draft
    } catch {
      /* ignore corrupted draft */
    }

    if (restored?.formData) {
      const age = Date.now() - new Date(restored.savedAt || 0).getTime()
      if (age < 7 * 24 * 60 * 60 * 1000) {
        setFormData({ ...EMPTY_FORM, ...restored.formData })
      } else {
        clearDraft()
      }
    }

    const serviceParam = searchParams.get('service')
    if (serviceParam && employmentTypes.some(s => s.value === serviceParam)) {
      setFormData(prev => ({ ...prev, serviceType: serviceParam }))
      const selectedService = employmentTypes.find(s => s.value === serviceParam)
      if (selectedService) {
        trackServiceSelect(selectedService.label, serviceParam, 'hire_helper_form')
      }
    }
  }, [hasTrackedStart, searchParams, clearDraft])

  const handleInputChange = (field: keyof BasicFormData, value: string) => {
    setFormData(prev => {
      const next = { ...prev, [field]: value }
      saveDraft(next)
      return next
    })

    if (field === 'serviceType') {
      const selectedService = employmentTypes.find(s => s.value === value)
      if (selectedService) {
        trackServiceSelect(selectedService.label, value, 'hire_helper_form')
      }
    }
  }

  const validate = () => {
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
    if (!formData.city) {
      errors.city = 'Please select a city'
    }
    if (!formData.serviceRole) {
      errors.serviceRole = 'Please select a role'
    }
    if (formData.serviceRole === 'others' && !formData.otherRole.trim()) {
      errors.otherRole = 'Please specify the role you need'
    }
    if (!formData.serviceType) {
      errors.serviceType = 'Please select a job type'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting || submittedRef.current) return
    if (!validate()) return
    setSubmitting(true)
    try {
      trackFormSubmit('hire_helper_form', formData)
      trackBookingStart(formData.serviceType || formData.serviceRole || 'unknown', formData.city)

      const requestId = generateRequestId()
      const roleLabel =
        formData.serviceRole === 'others' ? formData.otherRole.trim() : formData.serviceRole

      // Store the basic lead in Supabase immediately. Detail fields are left
      // blank here; if the customer fast-paces, the thank-you page sends a full
      // P0 email (the team works from email, the DB holds the lead either way).
      const insertRow = buildHireHelperLeadInsertRow({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: '',
        city: formData.city,
        locality: formData.locality.trim(),
        apartment: '',
        service: `${formData.serviceType} - ${roleLabel}`,
        duration: '',
        serviceTimings: '',
        startDate: '',
        specificRequirements: '',
        experience: '',
        budget: '',
        languages: '',
        additionalServices: '',
        familySize: '',
        preferredGender: '',
      })
      const { error } = await supabase.from('hire_helper_leads').insert([insertRow])
      if (error) {
        console.error('hire_helper_leads insert failed:', error.message, error)
        throw error
      }

      // Hand off to the thank-you page (basic-lead email + P0 flow live there).
      saveHandoff({
        requestId,
        basic: {
          ...formData,
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          locality: formData.locality.trim(),
          otherRole: formData.otherRole.trim(),
        },
        createdAt: new Date().toISOString(),
      })

      trackFormComplete('hire_helper_form', requestId)
      trackFormSubmitSuccess('hire_helper_form', {
        leadId: requestId,
        serviceType: formData.serviceType,
        city: formData.city,
      })
      trackBookingComplete(formData.serviceType, formData.city, requestId)

      submittedRef.current = true
      clearDraft()

      router.push(`/thank-you?type=hire&ref=${encodeURIComponent(requestId)}`)
    } catch (error) {
      trackFormError(
        'hire_helper_form',
        'submission_error',
        error instanceof Error ? error.message : 'Unknown error',
      )
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 font-display">
          Tell us what you need
        </h2>
        <p className="text-gray-600">
          Just a few quick details and we&rsquo;ll get a booking ID for you right away.
          You can add more after, if you&rsquo;d like us to fast-track it.
        </p>
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

        <div className="space-y-6">
          {/* Job Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              What do you need help with? *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceRoles.map(role => (
                <div
                  key={role.value}
                  role="button"
                  tabIndex={0}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    formData.serviceRole === role.value
                      ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() =>
                    setFormData(prev => {
                      const next = {
                        ...prev,
                        serviceRole: role.value,
                        otherRole: role.value !== 'others' ? '' : prev.otherRole,
                      }
                      saveDraft(next)
                      return next
                    })
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setFormData(prev => {
                        const next = {
                          ...prev,
                          serviceRole: role.value,
                          otherRole: role.value !== 'others' ? '' : prev.otherRole,
                        }
                        saveDraft(next)
                        return next
                      })
                    }
                  }}
                >
                  <div className="font-medium text-gray-900">{role.label}</div>
                  <div className="text-sm text-gray-600">{role.description}</div>
                </div>
              ))}
            </div>
            {formErrors.serviceRole && (
              <p role="alert" className="text-xs text-red-500 mt-1">{formErrors.serviceRole}</p>
            )}

            {formData.serviceRole === 'others' && (
              <div className="mt-4">
                <input
                  type="text"
                  value={formData.otherRole}
                  onChange={(e) => handleInputChange('otherRole', e.target.value)}
                  aria-invalid={!!formErrors.otherRole}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="Please specify the role you need..."
                />
                {formErrors.otherRole && (
                  <p role="alert" className="text-xs text-red-500 mt-1">{formErrors.otherRole}</p>
                )}
              </div>
            )}
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              What type of helper service do you need? *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {employmentTypes.map(type => (
                <div
                  key={type.value}
                  role="button"
                  tabIndex={0}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    formData.serviceType === type.value
                      ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleInputChange('serviceType', type.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleInputChange('serviceType', type.value)
                    }
                  }}
                >
                  <div className="font-medium text-gray-900">{type.label}</div>
                  <div className="text-sm text-gray-600">{type.description}</div>
                </div>
              ))}
            </div>
            {formErrors.serviceType && (
              <p role="alert" className="text-xs text-red-500 mt-1">{formErrors.serviceType}</p>
            )}
          </div>

          {/* Contact details */}
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
              {formErrors.name && (
                <p id="hire-name-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.name}</p>
              )}
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
              {formErrors.phone && (
                <p id="hire-phone-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
              )}
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
              {formErrors.city && (
                <p id="hire-city-error" role="alert" className="text-xs text-red-500 mt-1">{formErrors.city}</p>
              )}
            </div>

            <div>
              <label htmlFor="hire-locality" className="block text-sm font-medium text-gray-700 mb-2">
                Locality / Area
              </label>
              <input
                id="hire-locality"
                type="text"
                value={formData.locality}
                onChange={(e) => handleInputChange('locality', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="Area within the city (e.g. HSR Layout, Janakpuri)"
              />
              <p className="text-xs text-gray-500 mt-1">Which part of the city you need help in</p>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={submitting}
              aria-disabled={submitting}
            >
              {submitting && <LoadingSpinner size="sm" />}
              {submitting ? 'Submitting...' : 'Get My Booking ID'}
              {!submitting && <CheckCircleIcon className="w-5 h-5" />}
            </button>
          </div>

          {submitStatus === 'error' && (
            <p role="alert" className="text-red-600 text-sm mt-2">
              There was an error submitting your request. Please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
