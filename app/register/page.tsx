'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  CameraIcon, 
  MapPinIcon, 
  DocumentIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

// Types
interface FormData {
  // Agency Overview
  agencyName: string
  registrationNumber: string
  agencyCertificate: File | null
  yearFounded: number
  
  // Service Capability
  servicesOffered: string[]
  maxHelpersSupply: number
  
  // Founder/Owner
  ownerName: string
  ownerDOB: string
  ownerPhoto: File | null
  ownerIDType: string
  ownerIDNumber: string
  ownerIDProof: File | null
  
  // Contact & Address
  primaryPhone: string
  secondaryPhone: string
  email: string
  officeAddressLine1: string
  officeAddressLine2: string
  city: string
  state: string
  pincode: string
  latitude: number | null
  longitude: number | null
  
  // Notes
  notes: string
}

interface FormErrors {
  [key: string]: string
}

const services = [
  'Live-in', 'Full-time', 'Part-time', 'Babysitting', 
  'Elder-care', 'Cooking', 'Cleaning', 'Driver'
]

const idTypes = [
  'Aadhaar', 'Passport', 'VoterID', 'DrivingLicence'
]

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
  'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal'
]

export default function AgentRegistrationPage() {
  const [currentSection, setCurrentSection] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [locationLoading, setLocationLoading] = useState(true)
  const [formData, setFormData] = useState<FormData>({
    agencyName: '',
    registrationNumber: '',
    agencyCertificate: null,
    yearFounded: new Date().getFullYear(),
    servicesOffered: [],
    maxHelpersSupply: 1,
    ownerName: '',
    ownerDOB: '',
    ownerPhoto: null,
    ownerIDType: 'Aadhaar',
    ownerIDNumber: '',
    ownerIDProof: null,
    primaryPhone: '',
    secondaryPhone: '',
    email: '',
    officeAddressLine1: '',
    officeAddressLine2: '',
    city: '',
    state: '',
    pincode: '',
    latitude: null,
    longitude: null,
    notes: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})

  // Auto-detect location on page load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }))
          setLocationLoading(false)
        },
        (error) => {
          console.error('Geolocation error:', error)
          setLocationLoading(false)
        }
      )
    } else {
      setLocationLoading(false)
    }
  }, [])

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.toLowerCase())
  }

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10,15}$/
    return phoneRegex.test(phone.replace(/\s+/g, ''))
  }

  const validatePincode = (pincode: string) => {
    const pincodeRegex = /^[0-9]{6}$/
    return pincodeRegex.test(pincode)
  }

  const validateIDNumber = (idType: string, idNumber: string) => {
    switch (idType) {
      case 'Aadhaar':
        return /^[0-9]{12}$/.test(idNumber.replace(/\s+/g, ''))
      case 'Passport':
        return /^[A-Z][0-9]{7}$/.test(idNumber.toUpperCase())
      case 'VoterID':
        return /^[A-Z]{3}[0-9]{7}$/.test(idNumber.toUpperCase())
      case 'DrivingLicence':
        return /^[A-Z]{2}[0-9]{13}$/.test(idNumber.toUpperCase())
      default:
        return true
    }
  }

  // Real-time validation
  const validateField = (name: string, value: any) => {
    const newErrors = { ...errors }
    
    switch (name) {
      case 'agencyName':
        if (!value || value.length < 2) {
          newErrors[name] = 'Agency name must be at least 2 characters'
        } else if (value.length > 100) {
          newErrors[name] = 'Agency name must be less than 100 characters'
        } else {
          delete newErrors[name]
        }
        break
      
      case 'email':
        if (!value) {
          newErrors[name] = 'Email is required'
        } else if (!validateEmail(value)) {
          newErrors[name] = 'Please enter a valid email address'
        } else {
          delete newErrors[name]
        }
        break
      
      case 'primaryPhone':
        if (!value) {
          newErrors[name] = 'Primary phone is required'
        } else if (!validatePhone(value)) {
          newErrors[name] = 'Please enter a valid phone number (10-15 digits)'
        } else {
          delete newErrors[name]
        }
        break
      
      case 'secondaryPhone':
        if (value && !validatePhone(value)) {
          newErrors[name] = 'Please enter a valid phone number (10-15 digits)'
        } else {
          delete newErrors[name]
        }
        break
      
      case 'pincode':
        if (!value) {
          newErrors[name] = 'Pincode is required'
        } else if (!validatePincode(value)) {
          newErrors[name] = 'Please enter a valid 6-digit pincode'
        } else {
          delete newErrors[name]
        }
        break
      
      case 'ownerIDNumber':
        if (!value) {
          newErrors[name] = 'ID number is required'
        } else if (!validateIDNumber(formData.ownerIDType, value)) {
          newErrors[name] = `Please enter a valid ${formData.ownerIDType} number`
        } else {
          delete newErrors[name]
        }
        break
      
      case 'servicesOffered':
        if (!value || value.length === 0) {
          newErrors[name] = 'Please select at least one service'
        } else {
          delete newErrors[name]
        }
        break
        
      default:
        if (!value && ['registrationNumber', 'ownerName', 'ownerDOB', 'officeAddressLine1', 'city', 'state'].includes(name)) {
          newErrors[name] = 'This field is required'
        } else {
          delete newErrors[name]
        }
    }
    
    setErrors(newErrors)
  }

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleFileUpload = async (name: string, file: File) => {
    // Compress image if needed
    if (file.type.startsWith('image/') && file.size > 1024 * 1024) {
      // Simple file size validation - in real app, you'd compress the image
      setErrors(prev => ({ 
        ...prev, 
        [name]: 'Image must be less than 1MB. Please choose a smaller file.' 
      }))
      return
    }
    
    setFormData(prev => ({ ...prev, [name]: file }))
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[name]
      return newErrors
    })
  }

  const toggleService = (service: string) => {
    const currentServices = formData.servicesOffered
    const newServices = currentServices.includes(service)
      ? currentServices.filter(s => s !== service)
      : [...currentServices, service]
    
    handleInputChange('servicesOffered', newServices)
  }

  const nextSection = () => {
    if (currentSection < 5) {
      setCurrentSection(currentSection + 1)
    }
  }

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1)
    }
  }

  const handleSubmit = async () => {
    // Validate all required fields
    const requiredFields = [
      'agencyName', 'registrationNumber', 'ownerName', 'ownerDOB',
      'primaryPhone', 'email', 'officeAddressLine1', 'city', 'state', 'pincode'
    ]
    
    const newErrors: FormErrors = {}
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof FormData]) {
        newErrors[field] = 'This field is required'
      }
    })
    
    if (formData.servicesOffered.length === 0) {
      newErrors.servicesOffered = 'Please select at least one service'
    }
    
    if (!formData.agencyCertificate) {
      newErrors.agencyCertificate = 'Agency certificate is required'
    }
    
    if (!formData.ownerPhoto) {
      newErrors.ownerPhoto = 'Owner photo is required'
    }
    
    if (!formData.ownerIDProof) {
      newErrors.ownerIDProof = 'Owner ID proof is required'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      // Scroll to first error
      const firstError = Object.keys(newErrors)[0]
      const element = document.getElementById(firstError)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const formDataToSubmit = new FormData()
      
      // Add all text fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && typeof value !== 'object') {
          formDataToSubmit.append(key, value.toString())
        }
      })
      
      // Add arrays
      formData.servicesOffered.forEach(service => {
        formDataToSubmit.append('servicesOffered[]', service)
      })
      
      // Add files
      if (formData.agencyCertificate) {
        formDataToSubmit.append('agencyCertificate', formData.agencyCertificate)
      }
      if (formData.ownerPhoto) {
        formDataToSubmit.append('ownerPhoto', formData.ownerPhoto)
      }
      if (formData.ownerIDProof) {
        formDataToSubmit.append('ownerIDProof', formData.ownerIDProof)
      }
      
      // Add timestamp
      formDataToSubmit.append('createdAt', new Date().toISOString())
      
      const response = await fetch('/api/agents', {
        method: 'POST',
        body: formDataToSubmit
      })
      
      if (response.ok) {
        window.location.href = '/success'
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error submitting your registration. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const progressPercentage = (currentSection / 5) * 100

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Agent Registration
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Step {currentSection} of 5
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-teal-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <form className="space-y-6">
          {/* Section 1: Agency Overview */}
          {currentSection === 1 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Agency Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Tell us about your agency and legal registration
                </p>
              </div>

              {/* Agency Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Agency Name *
                </label>
                <input
                  id="agencyName"
                  type="text"
                  value={formData.agencyName}
                  onChange={(e) => handleInputChange('agencyName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Enter your agency name"
                  maxLength={100}
                />
                {errors.agencyName && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.agencyName}
                  </p>
                )}
              </div>

              {/* Registration Number */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Government Registration / License Number *
                </label>
                <input
                  id="registrationNumber"
                  type="text"
                  value={formData.registrationNumber}
                  onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Shop & Establishment License, etc."
                />
                {errors.registrationNumber && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.registrationNumber}
                  </p>
                )}
              </div>

              {/* Certificate Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Upload Certificate *
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <DocumentIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <input
                    id="agencyCertificate"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleFileUpload('agencyCertificate', file)
                    }}
                    className="hidden"
                  />
                  <label
                    htmlFor="agencyCertificate"
                    className="cursor-pointer text-teal-600 hover:text-teal-700 font-medium"
                  >
                    {formData.agencyCertificate ? formData.agencyCertificate.name : 'Choose file or drag here'}
                  </label>
                  <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (max 5MB)</p>
                </div>
                {errors.agencyCertificate && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.agencyCertificate}
                  </p>
                )}
              </div>

              {/* Year Founded */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Year Founded
                </label>
                <input
                  type="range"
                  min="1990"
                  max={new Date().getFullYear()}
                  value={formData.yearFounded}
                  onChange={(e) => handleInputChange('yearFounded', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1990</span>
                  <span className="font-medium text-teal-600">{formData.yearFounded}</span>
                  <span>{new Date().getFullYear()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Service Capability */}
          {currentSection === 2 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Service Capability
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  What services can your agency provide?
                </p>
              </div>

              {/* Services Offered */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Services Offered * (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {services.map(service => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-4 py-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                        formData.servicesOffered.includes(service)
                          ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-teal-300'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                {errors.servicesOffered && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.servicesOffered}
                  </p>
                )}
              </div>

              {/* Max Helpers Supply */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Maximum Helpers You Can Supply Now
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => handleInputChange('maxHelpersSupply', Math.max(1, formData.maxHelpersSupply - 1))}
                    className="w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center">
                    <span className="text-2xl font-bold text-teal-600">{formData.maxHelpersSupply}</span>
                    <p className="text-sm text-gray-500">helpers</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleInputChange('maxHelpersSupply', formData.maxHelpersSupply + 1)}
                    className="w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Founder/Owner */}
          {currentSection === 3 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Founder / Owner Details
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Personal information of the agency owner
                </p>
              </div>

              {/* Owner Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name *
                </label>
                <input
                  id="ownerName"
                  type="text"
                  value={formData.ownerName}
                  onChange={(e) => handleInputChange('ownerName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Enter owner's full name"
                />
                {errors.ownerName && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.ownerName}
                  </p>
                )}
              </div>

              {/* Owner DOB */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Date of Birth *
                </label>
                <input
                  id="ownerDOB"
                  type="date"
                  value={formData.ownerDOB}
                  onChange={(e) => handleInputChange('ownerDOB', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                {errors.ownerDOB && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.ownerDOB}
                  </p>
                )}
              </div>

              {/* Owner Photo */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Live Photo *
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <CameraIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <input
                    id="ownerPhoto"
                    type="file"
                    accept="image/*"
                    capture="user"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleFileUpload('ownerPhoto', file)
                    }}
                    className="hidden"
                  />
                  <label
                    htmlFor="ownerPhoto"
                    className="cursor-pointer text-teal-600 hover:text-teal-700 font-medium"
                  >
                    {formData.ownerPhoto ? formData.ownerPhoto.name : 'Take Photo or Upload'}
                  </label>
                  <p className="text-xs text-gray-500 mt-1">Camera preferred, max 1MB</p>
                </div>
                {errors.ownerPhoto && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.ownerPhoto}
                  </p>
                )}
              </div>

              {/* ID Type & Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    ID Type
                  </label>
                  <select
                    value={formData.ownerIDType}
                    onChange={(e) => handleInputChange('ownerIDType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {idTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    ID Number *
                  </label>
                  <input
                    id="ownerIDNumber"
                    type="text"
                    value={formData.ownerIDNumber}
                    onChange={(e) => handleInputChange('ownerIDNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter ID number"
                  />
                  {errors.ownerIDNumber && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.ownerIDNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* ID Proof Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Upload ID Proof *
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <DocumentIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <input
                    id="ownerIDProof"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleFileUpload('ownerIDProof', file)
                    }}
                    className="hidden"
                  />
                  <label
                    htmlFor="ownerIDProof"
                    className="cursor-pointer text-teal-600 hover:text-teal-700 font-medium"
                  >
                    {formData.ownerIDProof ? formData.ownerIDProof.name : 'Choose file or drag here'}
                  </label>
                  <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (max 5MB)</p>
                </div>
                {errors.ownerIDProof && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.ownerIDProof}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Section 4: Contact & Address */}
          {currentSection === 4 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Contact & Address
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  How can we reach you and where are you located?
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Primary Phone *
                  </label>
                  <input
                    id="primaryPhone"
                    type="tel"
                    value={formData.primaryPhone}
                    onChange={(e) => handleInputChange('primaryPhone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="10-15 digits"
                  />
                  {errors.primaryPhone && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.primaryPhone}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Secondary Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.secondaryPhone}
                    onChange={(e) => handleInputChange('secondaryPhone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Optional"
                  />
                  {errors.secondaryPhone && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.secondaryPhone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value.toLowerCase())}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Address */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Office Address Line 1 *
                  </label>
                  <input
                    id="officeAddressLine1"
                    type="text"
                    value={formData.officeAddressLine1}
                    onChange={(e) => handleInputChange('officeAddressLine1', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Street, building, area"
                  />
                  {errors.officeAddressLine1 && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.officeAddressLine1}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Office Address Line 2
                  </label>
                  <input
                    type="text"
                    value={formData.officeAddressLine2}
                    onChange={(e) => handleInputChange('officeAddressLine2', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Landmark, nearby area (optional)"
                  />
                </div>
              </div>

              {/* City, State, Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    City *
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="City name"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.city}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    State *
                  </label>
                  <select
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select state</option>
                    {indianStates.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.state}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Pincode *
                  </label>
                  <input
                    id="pincode"
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="6 digits"
                    maxLength={6}
                  />
                  {errors.pincode && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.pincode}
                    </p>
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Location (GPS Coordinates)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    step="any"
                    value={formData.latitude || ''}
                    onChange={(e) => handleInputChange('latitude', parseFloat(e.target.value) || null)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Latitude"
                  />
                  <input
                    type="number"
                    step="any"
                    value={formData.longitude || ''}
                    onChange={(e) => handleInputChange('longitude', parseFloat(e.target.value) || null)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Longitude"
                  />
                </div>
                {locationLoading ? (
                  <p className="text-amber-600 text-sm flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-1 animate-pulse" />
                    Detecting your location...
                  </p>
                ) : formData.latitude && formData.longitude ? (
                  <p className="text-green-600 text-sm flex items-center">
                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                    Location detected automatically
                  </p>
                ) : (
                  <p className="text-gray-500 text-sm">
                    Please enable location access or enter coordinates manually
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Section 5: Declaration & Submit */}
          {currentSection === 5 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Declaration & Submit
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Review your information and submit your registration
                </p>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Additional Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tell us anything else we should know about your agency..."
                />
              </div>

              {/* Summary */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2">
                <h3 className="font-medium text-gray-900 dark:text-white">Registration Summary</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <p><span className="font-medium">Agency:</span> {formData.agencyName || 'Not provided'}</p>
                  <p><span className="font-medium">Owner:</span> {formData.ownerName || 'Not provided'}</p>
                  <p><span className="font-medium">Services:</span> {formData.servicesOffered.join(', ') || 'None selected'}</p>
                  <p><span className="font-medium">Location:</span> {formData.city && formData.state ? `${formData.city}, ${formData.state}` : 'Not provided'}</p>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
                  I agree to the{' '}
                  <Link href="/terms-of-service" className="text-teal-600 hover:text-teal-700 underline">
                    Terms & Conditions
                  </Link>{' '}
                  and confirm that all information provided is accurate and truthful.
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={prevSection}
              disabled={currentSection === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentSection === 1
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
              }`}
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Previous
            </button>

            {currentSection < 5 ? (
              <button
                type="button"
                onClick={nextSection}
                className="flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-200"
              >
                Next
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center px-8 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-all duration-200 min-h-[48px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    Submit Registration
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Help Contact */}
      <div className="fixed bottom-4 left-4 z-40">
        <Link
          href="https://wa.me/919972571005?text=Hi! I need help with agent registration."
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-200 text-sm"
        >
          <PhoneIcon className="h-4 w-4 mr-2" />
          Need Help?
        </Link>
      </div>
    </div>
  )
}