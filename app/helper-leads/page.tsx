'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'

// Job roles enum matching the database schema
const JOB_ROLES = [
  { value: 'COOK', label: 'Cooking' },
  { value: 'HOUSEKEEPING', label: 'Housekeeping' },
  { value: 'BABY_CARE', label: 'Baby Care' },
  { value: 'ELDER_CARE', label: 'Elder Care' },
  { value: 'DRIVER', label: 'Driver' },
  { value: 'SECURITY', label: 'Security' },
  { value: 'CARPENTER', label: 'Carpenter' },
  { value: 'PLUMBER', label: 'Plumber' },
  { value: 'OTHER', label: 'Other' }
] as const

type JobRole = 'COOK' | 'HOUSEKEEPING' | 'BABY_CARE' | 'ELDER_CARE' | 'DRIVER' | 'SECURITY' | 'CARPENTER' | 'PLUMBER' | 'OTHER'

interface FormData {
  helper_name: string
  mobile: string
  job_roles: JobRole[]
  job_role_other: string
  remarks: string
  area_of_residence?: string
  languages?: string[]
  field_officer_name?: string
}

interface LocationData {
  ip?: string
  detected_city?: string
  detected_region?: string
  detected_country?: string
  lat?: number
  lng?: number
  raw_geo?: any
}

interface FormErrors {
  [key: string]: string
}

export default function HelperLeadsPage() {
  const [formData, setFormData] = useState<FormData>({
    helper_name: '',
    mobile: '',
    job_roles: [],
    job_role_other: '',
    remarks: '',
    area_of_residence: '',
    languages: [],
    field_officer_name: ''
  })

  const [locationData, setLocationData] = useState<LocationData>({})
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [locationDetected, setLocationDetected] = useState(false)
  const [locationLoading, setLocationLoading] = useState(true)
  const [manualCoords, setManualCoords] = useState({ lat: '', lng: '' })
  const [hasMounted, setHasMounted] = useState(false)

  // Location detection on component mount
  useEffect(() => {
    setHasMounted(true)
    detectLocation()
  }, [])

  const detectLocation = async () => {
    setLocationLoading(true)
    
    try {
      // Try browser geolocation first for precise coordinates
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            // Get precise coordinates from browser
            const browserCoords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            
            // Also get location details from IP
            try {
              const response = await fetch('https://ipapi.co/json/')
              const data = await response.json()
              
              const location = {
                ip: data.ip,
                detected_city: data.city,
                detected_region: data.region,
                detected_country: data.country_name,
                lat: browserCoords.lat, // Use precise browser coordinates
                lng: browserCoords.lng,
                raw_geo: { ...data, precise_coords: true }
              }
              
              setLocationData(location)
              setManualCoords({ 
                lat: browserCoords.lat.toFixed(6), 
                lng: browserCoords.lng.toFixed(6) 
              })
              setLocationDetected(true)
            } catch (ipError) {
              // Use browser coords with limited info
              const location = {
                lat: browserCoords.lat,
                lng: browserCoords.lng,
                raw_geo: { precise_coords: true, source: 'browser' }
              }
              setLocationData(location)
              setManualCoords({ 
                lat: browserCoords.lat.toFixed(6), 
                lng: browserCoords.lng.toFixed(6) 
              })
              setLocationDetected(true)
            }
            setLocationLoading(false)
          },
          async (error) => {
            console.log('Browser geolocation failed:', error)
            // Fallback to IP-based location
            await fallbackToIpLocation()
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
        )
      } else {
        // Browser doesn't support geolocation
        await fallbackToIpLocation()
      }
    } catch (error) {
      console.log('Location detection failed:', error)
      setLocationLoading(false)
    }
  }

  const fallbackToIpLocation = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      
      const location = {
        ip: data.ip,
        detected_city: data.city,
        detected_region: data.region,
        detected_country: data.country_name,
        lat: data.latitude,
        lng: data.longitude,
        raw_geo: { ...data, precise_coords: false }
      }
      
      setLocationData(location)
      if (data.latitude && data.longitude) {
        setManualCoords({ 
          lat: data.latitude.toFixed(6), 
          lng: data.longitude.toFixed(6) 
        })
      }
      setLocationDetected(true)
    } catch (error) {
      console.log('IP location detection failed:', error)
    } finally {
      setLocationLoading(false)
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validate helper name
    if (!formData.helper_name.trim() || formData.helper_name.trim().length < 2) {
      newErrors.helper_name = 'Name must be at least 2 characters long'
    }

    // Validate mobile (Indian format: 10 digits, starting with 6-9)
    const mobileRegex = /^[6-9][0-9]{9}$/
    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9'
    }

    // Validate job roles
    if (formData.job_roles.length === 0) {
      newErrors.job_roles = 'Please select at least one service'
    }

    // Validate other role if OTHER is selected
    if (formData.job_roles.includes('OTHER') && !formData.job_role_other.trim()) {
      newErrors.job_role_other = 'Please specify the other service'
    }

    // Validate remarks (required)
    if (!formData.remarks || !formData.remarks.trim()) {
      newErrors.remarks = 'Please provide additional information'
    }

    // Validate area of residence (required)
    if (!formData.area_of_residence || !formData.area_of_residence.trim()) {
      newErrors.area_of_residence = 'Please enter your area of residence'
    }

    // Validate languages (at least one)
    if (!formData.languages || formData.languages.length === 0) {
      newErrors.languages = 'Please select at least one language'
    }

    // Validate field officer name (required)
    if (!formData.field_officer_name || !formData.field_officer_name.trim()) {
      newErrors.field_officer_name = 'Please enter the field officer name'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (name: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Language options and handlers (component scope)
  const LANGUAGE_OPTIONS = [
    'Hindi', 'English', 'Kannada', 'Tamil', 'Telugu', 'Malayalam', 'Bengali', 'Marathi', 'Gujarati', 'Punjabi'
  ]

  const toggleLanguage = (lang: string) => {
    const current = formData.languages || []
    const updated = current.includes(lang)
      ? current.filter(l => l !== lang)
      : [...current, lang]
    handleInputChange('languages', updated)
  }

  const toggleJobRole = (role: JobRole) => {
    const newRoles = formData.job_roles.includes(role)
      ? formData.job_roles.filter(r => r !== role)
      : [...formData.job_roles, role]
    
    handleInputChange('job_roles', newRoles)
    
    // Clear other role text if OTHER is unchecked
    if (role === 'OTHER' && !newRoles.includes('OTHER')) {
      handleInputChange('job_role_other', '')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setShowError(true)
      setErrorMessage('Please correct the errors below and try again.')
      return
    }

    setIsSubmitting(true)
    setShowError(false)
    setShowSuccess(false)

    try {
      // Use manual coordinates if provided, otherwise use detected coordinates
      const finalLat = manualCoords.lat ? parseFloat(manualCoords.lat) : locationData.lat
      const finalLng = manualCoords.lng ? parseFloat(manualCoords.lng) : locationData.lng
      
      // Data to insert into DB (only allowed columns)
      const dbData = {
        helper_name: formData.helper_name.trim(),
        mobile: formData.mobile,
        job_roles: formData.job_roles,
        job_role_other: formData.job_roles.includes('OTHER') ? formData.job_role_other.trim() : null,
        remarks: formData.remarks.trim() || null,
        area_of_residence: (formData.area_of_residence || '').trim() || null,
        languages: formData.languages || [],
        field_officer_name: (formData.field_officer_name || '').trim() || null,
        ip: locationData.ip || null,
        detected_city: locationData.detected_city || null,
        detected_region: locationData.detected_region || null,
        detected_country: locationData.detected_country || null,
        lat: finalLat ?? null,
        lng: finalLng ?? null,
        raw_geo: locationData.raw_geo || null,
      }

      // Data to use for email composition (can include additional fields)
      const submitData = {
        ...dbData,
        area_of_residence: (formData.area_of_residence || '').trim() || null,
        languages: formData.languages || [],
        field_officer_name: (formData.field_officer_name || '').trim() || null,
      }

      console.log('Submitting data:', submitData)

      const { error } = await supabase
        .from('helper_lead')
        .insert([dbData])

      if (error) {
        throw error
      }

      // Success
      setShowSuccess(true)
      setFormData({
        helper_name: '',
        mobile: '',
        job_roles: [],
        job_role_other: '',
        remarks: '',
        area_of_residence: '',
        languages: [],
        field_officer_name: ''
      })
      setManualCoords({ lat: '', lng: '' })
      
      // Scroll to success message
      document.getElementById('success-message')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      })

      // Fire-and-forget: Send admin email notification (does not block UX)
      try {
        const emailPayload = {
          leadType: 'general',
          formData: {
            name: submitData.helper_name,
            phone: submitData.mobile,
            service: 'Helper Lead Registration',
            city: submitData.detected_city || 'Unknown',
            additionalDetails: {
              leadType: 'Helper Lead',
              job_roles: submitData.job_roles,
              job_role_other: submitData.job_role_other,
              area_of_residence: submitData.area_of_residence,
              languages: submitData.languages,
              remarks: submitData.remarks,
              field_officer_name: submitData.field_officer_name,
              detected_city: submitData.detected_city,
              detected_region: submitData.detected_region,
              detected_country: submitData.detected_country,
              latitude: submitData.lat ?? null,
              longitude: submitData.lng ?? null,
            },
          },
          sourceUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        }

        // TEMP DEBUG: verify email payload contains field officer name
        console.log('Email payload (helper-leads):', emailPayload)

        // Do not await; log result only
        void fetch('/api/send-lead-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(emailPayload),
        })
          .then(async (res) => {
            const data = await res.json().catch(() => undefined)
            if (!res.ok || !data?.success) {
              console.warn('Helper lead email not sent:', data?.error || res.statusText)
            } else {
              console.log('Helper lead email sent. Message ID:', data.messageId)
            }
          })
          .catch((err) => {
            console.warn('Helper lead email request failed:', err)
          })
      } catch (emailErr) {
        console.warn('Helper lead email setup error:', emailErr)
      }

    } catch (error) {
      console.error('Submission error:', error)
      setShowError(true)
      
      // Show more specific error message
      let errorMsg = 'There was an error submitting your registration. Please try again or contact support.'
      
      if (error && typeof error === 'object') {
        const errAny = error as any
        const errorMessage: string | undefined = errAny.message
        const errorCode: string | undefined = errAny.code

        // Handle specific Supabase/Postgres errors
        if (errorCode === '23505' || (errorMessage && (
          errorMessage.toLowerCase().includes('duplicate key') ||
          errorMessage.toLowerCase().includes('unique') ||
          errorMessage.toLowerCase().includes('duplicate')
        ))) {
          errorMsg = 'This mobile number is already registered. Please use a different number.'
        } else if (errorMessage && errorMessage.includes('enum')) {
          errorMsg = 'Service selection error. Please refresh the page and try again.'
        } else if (errorMessage && (errorMessage.includes('permission') || errorMessage.includes('RLS'))) {
          errorMsg = 'Database permission error. Please contact support.'
        } else if (errorMessage && (errorMessage.includes('schema') || errorMessage.includes('table'))) {
          errorMsg = 'Database configuration error. Please contact support.'
        } else if (errorMessage) {
          errorMsg = `Error: ${errorMessage}`
        }
      }
      
      setErrorMessage(errorMsg)
      // Scroll to error banner for visibility
      setTimeout(() => {
        document.getElementById('error-message')?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 0)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!hasMounted) {
    // Prevent SSR/CSR mismatch by waiting until mounted
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Main Form Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Join as a Helper</h1>
            <p className="text-blue-100">Connect with families who need your services</p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div id="success-message" className="m-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-green-800 font-medium">Thank you for registering!</p>
                  <p className="text-green-700 text-sm mt-1">We'll contact you soon with opportunities in your area.</p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {showError && (
            <div id="error-message" className="m-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-red-800 text-sm">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          {/* Location Status */}
          <div className="m-6">
            {locationLoading && (
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600 mr-3"></div>
                  <span className="text-yellow-800 text-sm">Detecting your location...</span>
                </div>
              </div>
            )}
            
            {!locationLoading && locationDetected && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg className="h-4 w-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-green-800 text-sm font-medium">
                    Location detected {locationData.raw_geo?.precise_coords ? '(High Accuracy)' : '(Approximate)'}
                  </span>
                </div>
                {locationData.detected_city && (
                  <div className="text-green-700 text-sm ml-6">
                    📍 {locationData.detected_city}, {locationData.detected_region}, {locationData.detected_country}
                  </div>
                )}
                {(locationData.lat && locationData.lng) && (
                  <div className="text-green-700 text-xs ml-6 mt-1">
                    Coordinates: {locationData.lat.toFixed(6)}, {locationData.lng.toFixed(6)}
                  </div>
                )}
              </div>
            )}
            
            {!locationLoading && !locationDetected && (
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="h-4 w-4 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.084 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-orange-800 text-sm">Unable to detect location automatically</span>
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          {!showSuccess && (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Helper Name */}
            <div>
              <label htmlFor="helper_name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="helper_name"
                value={formData.helper_name}
                onChange={(e) => handleInputChange('helper_name', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.helper_name ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                }`}
                placeholder="Enter your full name"
              />
              {errors.helper_name && (
                <p className="text-red-500 text-sm mt-1">{errors.helper_name}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                value={formData.mobile}
                onChange={(e) => {
                  // Remove non-numeric characters
                  const value = e.target.value.replace(/\D/g, '')
                  if (value.length <= 10) {
                    handleInputChange('mobile', value)
                  }
                }}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.mobile ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                }`}
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Job Roles */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Services You Can Provide <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {JOB_ROLES.map((role) => (
                  <label
                    key={role.value}
                    className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.job_roles.includes(role.value)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.job_roles.includes(role.value)}
                      onChange={() => toggleJobRole(role.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-3 text-gray-700 font-medium">{role.label}</span>
                  </label>
                ))}
              </div>
              
              {/* Other Role Input */}
              {formData.job_roles.includes('OTHER') && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={formData.job_role_other}
                    onChange={(e) => handleInputChange('job_role_other', e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.job_role_other ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                    }`}
                    placeholder="Please specify other services"
                  />
                  {errors.job_role_other && (
                    <p className="text-red-500 text-sm mt-1">{errors.job_role_other}</p>
                  )}
                </div>
              )}
              
              {errors.job_roles && (
                <p className="text-red-500 text-sm mt-1">{errors.job_roles}</p>
              )}
            </div>

            {/* Additional Information */}
            <div>
              <label htmlFor="remarks" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Information <span className="text-red-500">*</span>
              </label>
              <textarea
                id="remarks"
                rows={4}
                value={formData.remarks}
                onChange={(e) => handleInputChange('remarks', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.remarks ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                }`}
                placeholder="Tell us about your experience, availability, or any special skills..."
              />
              {errors.remarks && (
                <p className="text-red-500 text-sm mt-1">{errors.remarks}</p>
              )}
            </div>

            {/* Area of Residence */}
            <div>
              <label htmlFor="area_of_residence" className="block text-sm font-semibold text-gray-700 mb-2">
                Area of Residence <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="area_of_residence"
                value={formData.area_of_residence}
                onChange={(e) => handleInputChange('area_of_residence', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.area_of_residence ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                }`}
                placeholder="e.g., HSR Layout, Indiranagar, Whitefield"
              />
              {errors.area_of_residence && (
                <p className="text-red-500 text-sm mt-1">{errors.area_of_residence}</p>
              )}
            </div>

            {/* Languages Known */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Languages You Can Speak <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {LANGUAGE_OPTIONS.map((lang) => (
                  <label key={lang} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={(formData.languages || []).includes(lang)}
                      onChange={() => toggleLanguage(lang)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 text-sm">{lang}</span>
                  </label>
                ))}
              </div>
              {errors.languages && (
                <p className="text-red-500 text-sm mt-2">{errors.languages}</p>
              )}
            </div>

            {/* Field Officer Name */}
            <div>
              <label htmlFor="field_officer_name" className="block text-sm font-semibold text-gray-700 mb-2">
                Field Officer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="field_officer_name"
                value={formData.field_officer_name}
                onChange={(e) => handleInputChange('field_officer_name', e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.field_officer_name ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'
                }`}
                placeholder="Enter your name if you are submitting on behalf of the helper"
              />
              {errors.field_officer_name && (
                <p className="text-red-500 text-sm mt-1">{errors.field_officer_name}</p>
              )}
            </div>

            {/* Location Coordinates - Removed as per requirements */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transform hover:-translate-y-0.5'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </div>
              ) : (
                'Register as Helper'
              )}
            </button>
          </form>
          )}

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-xs text-gray-500">
              By submitting, you agree to our terms and confirm all information is accurate.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
