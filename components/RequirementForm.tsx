'use client'

import { useState, useEffect } from 'react'
import { CheckCircleIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import { supabase } from '@/lib/supabaseClient'
import { trackFormStart, trackFormSubmit, trackFormComplete, trackFormError } from '@/lib/analytics'

interface FormData {
  name: string
  email: string
  contactNo: string
  areaOfService: string
  apartment: string
  latitude: number | null
  longitude: number | null
  requirementDescription: string
}

interface LocationState {
  isDetecting: boolean
  isDetected: boolean
  error: string | null
  address: string | null
}

export default function RequirementForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contactNo: '',
    areaOfService: '',
    apartment: '',
    latitude: null,
    longitude: null,
    requirementDescription: ''
  })
  
  const [locationState, setLocationState] = useState<LocationState>({
    isDetecting: false,
    isDetected: false,
    error: null,
    address: null
  })
  
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [requestId, setRequestId] = useState<string | null>(null)
  const [hasTrackedStart, setHasTrackedStart] = useState(false)

  // Track form start when component mounts
  useEffect(() => {
    if (!hasTrackedStart) {
      trackFormStart('requirement_form', 'requirement_page')
      setHasTrackedStart(true)
    }
  }, [hasTrackedStart])

  // Auto-detect location when component mounts
  useEffect(() => {
    detectLocation()
  }, [])

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setLocationState(prev => ({
        ...prev,
        error: 'Geolocation is not supported by this browser',
        isDetecting: false
      }))
      return
    }

    setLocationState(prev => ({ ...prev, isDetecting: true, error: null }))

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        
        setFormData(prev => ({
          ...prev,
          latitude,
          longitude
        }))

        // Try to get human-readable address
        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || 'pk.your_mapbox_token_here'}`
          )
          
          if (response.ok) {
            const data = await response.json()
            const address = data.features?.[0]?.place_name || `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
            
            setLocationState({
              isDetecting: false,
              isDetected: true,
              error: null,
              address
            })
          } else {
            throw new Error('Geocoding failed')
          }
        } catch (error) {
          // Fallback to coordinates if geocoding fails
          setLocationState({
            isDetecting: false,
            isDetected: true,
            error: null,
            address: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
          })
        }
      },
      (error) => {
        let errorMessage = 'Failed to detect location'
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied. Please enable location services.'
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.'
            break
          case error.TIMEOUT:
            errorMessage = 'Location request timed out.'
            break
        }
        
        setLocationState({
          isDetecting: false,
          isDetected: false,
          error: errorMessage,
          address: null
        })
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    )
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear field error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const errors: { [key: string]: string } = {}

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address'
    }

    // Contact number validation
    if (!formData.contactNo.trim()) {
      errors.contactNo = 'Contact number is required'
    } else if (!/^[5-9][0-9]{9}$/.test(formData.contactNo.trim())) {
      errors.contactNo = 'Enter a valid 10-digit phone number starting with 5-9'
    }

    // Area of service validation
    if (!formData.areaOfService.trim()) {
      errors.areaOfService = 'Area of service/locality is required'
    }

    // Apartment validation
    if (!formData.apartment.trim()) {
      errors.apartment = 'Apartment/building details are required'
    }

    // Requirement description validation
    if (!formData.requirementDescription.trim()) {
      errors.requirementDescription = 'Requirement description is required'
    } else if (formData.requirementDescription.trim().length < 10) {
      errors.requirementDescription = 'Please provide a detailed description (at least 10 characters)'
    }

    // Location validation (made optional)
    // Note: Location detection is optional - form can be submitted without coordinates

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const generateRequestId = () => {
    const timestamp = Date.now().toString(36).toUpperCase()
    const random = Math.random().toString(36).substring(2, 6).toUpperCase()
    return `REQ-${timestamp}-${random}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (submitStatus === 'submitting') return
    
    if (validateForm()) {
      setSubmitStatus('submitting')
      
      try {
        console.log('🚀 Starting form submission...')
        
        // Test Supabase connection first
        console.log('🔗 Testing database connection...')
        try {
          const { error: connectionError } = await supabase.from('requirement_leads').select('id').limit(1)
          if (connectionError) {
            console.error('❌ Database connection failed:', connectionError)
            throw new Error(`Database connection failed: ${connectionError.message}`)
          }
          console.log('✅ Database connection successful')
        } catch (dbError) {
          console.error('❌ Database test failed:', dbError)
          throw new Error(`Database not accessible: ${dbError instanceof Error ? dbError.message : 'Unknown database error'}`)
        }
        
        // Track form submission
        trackFormSubmit('requirement_form', formData)
        
        const newRequestId = generateRequestId()
        const timestamp = new Date().toISOString()
        
        console.log('📝 Generated Request ID:', newRequestId)
        console.log('⏰ Timestamp:', timestamp)
        console.log('📍 Location data:', { lat: formData.latitude, lng: formData.longitude })
        
        // Prepare data for Supabase
        const insertData = {
          request_id: newRequestId,
          name: formData.name.trim(),
          email: formData.email.trim(),
          contact_no: formData.contactNo.trim(),
          area_of_service: formData.areaOfService.trim(),
          apartment: formData.apartment.trim(),
          latitude: formData.latitude,
          longitude: formData.longitude,
          requirement_description: formData.requirementDescription.trim(),
          created_at: timestamp
        }
        
        console.log('💾 Attempting to save to Supabase:', insertData)
        
        // Store in Supabase (with fallback)
        let databaseSaved = false
        try {
          const { data, error } = await supabase.from('requirement_leads').insert([insertData])
          
          if (error) {
            console.error('❌ Supabase insert error:', error)
            console.warn('🔄 Database save failed, but continuing with email notification...')
          } else {
            console.log('✅ Successfully saved to database:', data)
            databaseSaved = true
          }
        } catch (dbSaveError) {
          console.error('❌ Database save exception:', dbSaveError)
          console.warn('🔄 Database save failed, but continuing with email notification...')
        }
        
        // Send email notification
        try {
          console.log('📧 Attempting to send email notification...')
          
          const emailPayload = {
            leadType: 'requirement',
            formData: {
              name: formData.name.trim(),
              email: formData.email.trim(),
              contactNo: formData.contactNo.trim(),
              areaOfService: formData.areaOfService.trim(),
              apartment: formData.apartment.trim(),
              latitude: formData.latitude,
              longitude: formData.longitude,
              requirementDescription: formData.requirementDescription.trim(),
              address: locationState.address,
              databaseSaved: databaseSaved
            },
            requestId: newRequestId,
            timestamp,
            sourceUrl: window.location.href
          }
          
          console.log('📧 Email payload:', emailPayload)
          
          const emailResponse = await fetch('/api/send-lead-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailPayload)
          })

          if (!emailResponse.ok) {
            const errorText = await emailResponse.text()
            console.error('❌ Email API error:', errorText)
            console.error('❌ Email response status:', emailResponse.status)
            
            // If database failed AND email failed, this is a real problem
            if (!databaseSaved) {
              throw new Error(`Both database save and email notification failed. Email error: ${errorText}`)
            }
            console.warn('⚠️ Email failed but database saved - requirement recorded')
          } else {
            console.log('✅ Email sent successfully')
          }
        } catch (emailError) {
          console.error('❌ Email sending error:', emailError)
          
          // If database failed AND email failed, this is a real problem
          if (!databaseSaved) {
            throw new Error(`Both database save and email notification failed. Email error: ${emailError instanceof Error ? emailError.message : 'Unknown email error'}`)
          }
          console.warn('⚠️ Email failed but database saved - requirement recorded')
        }
        
        // Track successful completion
        trackFormComplete('requirement_form', newRequestId)
        
        // Show success even if only one method worked
        console.log('🎉 Form submission completed successfully!')
        console.log('🆔 Final Request ID:', newRequestId)
        console.log('💾 Database saved:', databaseSaved)
        console.log('📧 Email status: Check above logs')
        
        setRequestId(newRequestId)
        setSubmitStatus('success')
        
      } catch (error) {
        // Track form error
        trackFormError('requirement_form', 'submission_error', error instanceof Error ? error.message : 'Unknown error')
        
        console.error('💥 FORM SUBMISSION FAILED!')
        console.error('❌ Error details:', error)
        
        // Log specific error details for debugging
        if (error instanceof Error) {
          console.error('📝 Error message:', error.message)
          console.error('📋 Error stack:', error.stack)
          console.error('🔍 Error name:', error.name)
        }
        
        // Log current form data state for debugging
        console.error('📊 Form data at time of error:', {
          name: formData.name?.length,
          email: formData.email?.length,
          contactNo: formData.contactNo?.length,
          areaOfService: formData.areaOfService?.length,
          apartment: formData.apartment?.length,
          latitude: formData.latitude,
          longitude: formData.longitude,
          requirementDescription: formData.requirementDescription?.length
        })
        
        setSubmitStatus('error')
      }
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircleIcon className="w-16 h-16 mx-auto text-green-500 mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
          Requirement Submitted Successfully!
        </h2>
        {requestId && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 max-w-md mx-auto">
            <p className="text-sm text-green-700 mb-2">Your unique reference ID:</p>
            <p className="text-2xl font-mono font-bold text-green-800">{requestId}</p>
            <p className="text-xs text-green-600 mt-2">
              {new Date().toLocaleString()}
            </p>
          </div>
        )}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Thank you for submitting your requirement! Our team has received your details and will contact you shortly 
          with a personalized solution. Please save your reference ID for future communication.
        </p>
        <button
          onClick={() => {
            setSubmitStatus('idle')
            setFormData({
              name: '',
              email: '',
              contactNo: '',
              areaOfService: '',
              apartment: '',
              latitude: null,
              longitude: null,
              requirementDescription: ''
            })
            setRequestId(null)
            detectLocation()
          }}
          className="btn-primary"
        >
          Submit Another Requirement
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">
          Service Requirement Form
        </h2>
        <p className="text-gray-600">
          Fill in your details and requirements. We'll get back to you with the perfect solution.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="your.email@example.com"
              />
              {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number *
              </label>
              <input
                type="tel"
                required
                value={formData.contactNo}
                onChange={(e) => handleInputChange('contactNo', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="9972571005"
                maxLength={10}
              />
              {formErrors.contactNo && <p className="text-xs text-red-500 mt-1">{formErrors.contactNo}</p>}
            </div>
          </div>
        </div>

        {/* Location Information */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Location Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Area of Service/Locality *
              </label>
              <input
                type="text"
                required
                value={formData.areaOfService}
                onChange={(e) => handleInputChange('areaOfService', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="e.g., Koramangala, HSR Layout, Indiranagar"
              />
              {formErrors.areaOfService && <p className="text-xs text-red-500 mt-1">{formErrors.areaOfService}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apartment/Building Details *
              </label>
              <input
                type="text"
                required
                value={formData.apartment}
                onChange={(e) => handleInputChange('apartment', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="e.g., Prestige Residency, Flat 3B, 4th Floor"
              />
              {formErrors.apartment && <p className="text-xs text-red-500 mt-1">{formErrors.apartment}</p>}
            </div>

            {/* Location Detection Status */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  Location Coordinates
                </label>
                {!locationState.isDetected && !locationState.isDetecting && (
                  <button
                    type="button"
                    onClick={detectLocation}
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Detect Location
                  </button>
                )}
              </div>
              
              {locationState.isDetecting && (
                <div className="flex items-center text-sm text-blue-600">
                  <ClockIcon className="w-4 h-4 mr-2 animate-spin" />
                  Detecting your location...
                </div>
              )}
              
              {locationState.isDetected && (
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircleIcon className="w-4 h-4 mr-2" />
                    Location detected successfully
                  </div>
                  {locationState.address && (
                    <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                      📍 {locationState.address}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">
                    Coordinates: {formData.latitude?.toFixed(6)}, {formData.longitude?.toFixed(6)}
                  </p>
                </div>
              )}
              
              {locationState.error && (
                <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
                  ⚠️ {locationState.error}
                </div>
              )}
              
              {formErrors.location && <p className="text-xs text-red-500 mt-1">{formErrors.location}</p>}
            </div>
          </div>
        </div>

        {/* Requirement Details */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirement Description</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Detailed Description of Your Requirements *
            </label>
            <textarea
              required
              value={formData.requirementDescription}
              onChange={(e) => handleInputChange('requirementDescription', e.target.value)}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
              placeholder="Please describe your specific requirements in detail. Include:
• Type of service needed (cooking, cleaning, child care, etc.)
• Duration and frequency (daily, weekly, part-time, full-time)
• Specific tasks and expectations
• Preferred timings
• Any special requirements or preferences
• Budget range (optional)"
            />
            <div className="flex justify-between items-center mt-1">
              {formErrors.requirementDescription && <p className="text-xs text-red-500">{formErrors.requirementDescription}</p>}
              <p className="text-xs text-gray-500">
                {formData.requirementDescription.length}/1000 characters
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            disabled={submitStatus === 'submitting'}
            className="btn-primary px-12 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitStatus === 'submitting' ? (
              <span className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </span>
            ) : (
              'Submit Requirement'
            )}
          </button>
        </div>

        {submitStatus === 'error' && (
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-800 text-sm font-medium mb-2">
                ⚠️ Submission Error
              </p>
              <p className="text-red-700 text-sm mb-3">
                There was an error submitting your requirement. Please try the following:
              </p>
              <ul className="text-red-700 text-sm text-left space-y-1 mb-3">
                <li>• Check your internet connection</li>
                <li>• Enable location services if blocked</li>
                <li>• Try refreshing the page and submitting again</li>
                <li>• Contact us directly if the problem persists</li>
              </ul>
              <p className="text-red-600 text-xs">
                Check browser console (F12) for technical details
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
