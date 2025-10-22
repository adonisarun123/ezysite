'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  CameraIcon, 
  MapPinIcon, 
  DocumentIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PhoneIcon,
  UserIcon,
  ClockIcon,
  ShieldCheckIcon,
  HomeIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

// Types
interface FormData {
  // Basic Details
  helperType: string
  firstName: string
  lastName: string
  gender: string
  dateOfBirth: string
  age: number
  helperPhoto: File | null
  
  // Background & Skills
  nativeState: string
  currentLocality: string
  languagesKnown: string[]
  educationLevel: string
  maritalStatus: string
  spouseOccupation: string
  kidsCount: number
  smartphoneAvailable: boolean
  whatsappActive: boolean
  vaccinationStatus: string
  experienceMonths: number
  specialities: string[]
  
  // Work Preferences
  workingHoursPreference: string
  preferredLocalities: string
  maxPlacementsPerMonth: number
  expectedSalaryMin: number
  expectedSalaryMax: number
  
  // Compliance & Banking
  idProofType: string
  idProofNumber: string
  idProofFile: File | null
  bankName: string
  bankIFSC: string
  accountHolderName: string
  accountNumber: string
  
  // Contact & Geo
  primaryPhone: string
  alternatePhone: string
  emergencyContactName: string
  emergencyContactPhone: string
  latitude: number | null
  longitude: number | null
  
  // Listed by field
  listedBy: string
  
  // Internal Notes
  internalNotes: string
}

interface FormErrors {
  [key: string]: string
}

const helperTypes = ['Live-in', 'Full-time', 'Part-time', 'On-demand']
const genders = ['Female', 'Male', 'Other']
const educationLevels = ['None', '5th', '8th', '10th', '12th', 'Graduate+']
const maritalStatuses = ['Single', 'Married', 'Widowed', 'Divorced']
const vaccinationStatuses = ['Fully', 'Partially', 'None']
const idTypes = ['Aadhaar', 'Passport', 'VoterID', 'DrivingLicence']

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
  'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal'
]

const languages = ['Hindi', 'Kannada', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'English', 'Other']

const specialitiesList = [
  'Feeding', 'Bathing', 'Massage', 'Baby-clothes-wash', 'Utensil-wash', 
  'Dusting', 'Cooking', 'Elder-care', 'Driver', 'Folding clothes', 
  'Drying clothes', 'Sweeping/Mopping', 'Other'
]



export default function HelperRegistrationPage() {
  const [currentSection, setCurrentSection] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [locationLoading, setLocationLoading] = useState(true)
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)
  const [confirmationId, setConfirmationId] = useState<string>('')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    helperType: 'Full-time',
    firstName: '',
    lastName: '',
    gender: 'Female',
    dateOfBirth: '',
    age: 0,
    helperPhoto: null,
    nativeState: '',
    currentLocality: '',
    languagesKnown: [],
    educationLevel: '8th',
    maritalStatus: 'Single',
    spouseOccupation: '',
    kidsCount: 0,
    smartphoneAvailable: true,
    whatsappActive: true,
    vaccinationStatus: 'Fully',
    experienceMonths: 0,
    specialities: [],
    workingHoursPreference: '8 AM - 6 PM',
    preferredLocalities: '',
    maxPlacementsPerMonth: 1,
    expectedSalaryMin: 10000,
    expectedSalaryMax: 15000,
    idProofType: 'Aadhaar',
    idProofNumber: '',
    idProofFile: null,
    bankName: '',
    bankIFSC: '',
    accountHolderName: '',
    accountNumber: '',
    primaryPhone: '',
    alternatePhone: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    latitude: null,
    longitude: null,
    listedBy: '',
    internalNotes: ''
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

  // Calculate age from DOB
  useEffect(() => {
    if (formData.dateOfBirth) {
      const today = new Date()
      const birthDate = new Date(formData.dateOfBirth)
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      
      setFormData(prev => ({ ...prev, age: Math.max(0, age) }))
    }
  }, [formData.dateOfBirth])

  // Validation functions
  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10,15}$/
    return phoneRegex.test(phone.replace(/\s+/g, ''))
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

  const validateIFSC = (ifsc: string) => {
    return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc.toUpperCase())
  }

  // Real-time validation
  const validateField = (name: string, value: any) => {
    const newErrors = { ...errors }
    
    switch (name) {
      case 'firstName':
        if (!value || value.length < 2) {
          newErrors[name] = 'First name must be at least 2 characters'
        } else if (value.length > 50) {
          newErrors[name] = 'First name must be less than 50 characters'
        } else {
          delete newErrors[name]
        }
        break
      
      case 'dateOfBirth':
        if (!value) {
          newErrors[name] = 'Date of birth is required'
        } else {
          const age = new Date().getFullYear() - new Date(value).getFullYear()
          if (age < 18) {
            newErrors[name] = 'Must be at least 18 years old'
          } else if (age > 60) {
            newErrors[name] = 'Must be under 60 years old'
          } else {
            delete newErrors[name]
          }
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
      
      case 'alternatePhone':
      case 'emergencyContactPhone':
        if (value && !validatePhone(value)) {
          newErrors[name] = 'Please enter a valid phone number (10-15 digits)'
        } else {
          delete newErrors[name]
        }
        break
      
      case 'idProofNumber':
        if (!value) {
          newErrors[name] = 'ID number is required'
        } else if (!validateIDNumber(formData.idProofType, value)) {
          newErrors[name] = `Please enter a valid ${formData.idProofType} number`
        } else {
          delete newErrors[name]
        }
        break
      
      case 'bankIFSC':
        if (value && !validateIFSC(value)) {
          newErrors[name] = 'Please enter a valid IFSC code'
        } else {
          delete newErrors[name]
        }
        break
      
      case 'languagesKnown':
        if (!value || value.length === 0) {
          newErrors[name] = 'Please select at least one language'
        } else {
          delete newErrors[name]
        }
        break
      
      case 'specialities':
        if (!value || value.length === 0) {
          newErrors[name] = 'Please select at least one speciality'
        } else {
          delete newErrors[name]
        }
        break
        
      default:
        if (!value && ['nativeState', 'currentLocality'].includes(name)) {
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
    if (file.type.startsWith('image/') && file.size > 800 * 1024) {
      setErrors(prev => ({ 
        ...prev, 
        [name]: 'Image must be less than 800KB. Please choose a smaller file.' 
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

  const toggleArrayValue = (arrayName: string, value: string) => {
    const currentArray = formData[arrayName as keyof FormData] as string[]
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value]
    
    handleInputChange(arrayName, newArray)
  }

  const nextSection = () => {
    if (currentSection < 6) {
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
      'firstName', 'dateOfBirth', 'nativeState', 'currentLocality', 
      'primaryPhone', 'idProofNumber'
    ]
    
    const newErrors: FormErrors = {}
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof FormData]) {
        newErrors[field] = 'This field is required'
      }
    })
    
    if (formData.languagesKnown.length === 0) {
      newErrors.languagesKnown = 'Please select at least one language'
    }
    
    if (formData.specialities.length === 0) {
      newErrors.specialities = 'Please select at least one speciality'
    }
    
    if (!formData.helperPhoto) {
      newErrors.helperPhoto = 'Helper photo is required'
    }
    
    if (!formData.idProofFile) {
      newErrors.idProofFile = 'ID proof document is required'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
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
      formData.languagesKnown.forEach(lang => {
        formDataToSubmit.append('languagesKnown[]', lang)
      })
      formData.specialities.forEach(spec => {
        formDataToSubmit.append('specialities[]', spec)
      })
      // Add preferred localities as a single string
      if (formData.preferredLocalities) {
        formDataToSubmit.append('preferredLocalities', formData.preferredLocalities)
      }
      
      // Add files
      if (formData.helperPhoto) {
        formDataToSubmit.append('helperPhoto', formData.helperPhoto)
      }
      if (formData.idProofFile) {
        formDataToSubmit.append('idProofFile', formData.idProofFile)
      }
      
      // Add timestamp
      formDataToSubmit.append('createdAt', new Date().toISOString())
      
      const response = await fetch('/api/helpers', {
        method: 'POST',
        body: formDataToSubmit
      })
      
      if (response.ok) {
        // Generate confirmation ID
        const confirmId = `HLP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`
        
        // Store submitted data for thank you display
        setSubmittedData({ ...formData })
        setConfirmationId(confirmId)
        setSubmitSuccess(true)
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

  const progressPercentage = (currentSection / 6) * 100

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* EzyHelpers Branded Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/ezyhelper_logo_new.png"
                  alt="EzyHelpers Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">EzyHelpers</h1>
                <p className="text-blue-100 text-sm">Trusted Home Help Network</p>
              </div>
            </div>
          </div>
          
          <div className="text-center text-white mb-4">
            <h2 className="text-xl font-semibold mb-2">Helper Registration</h2>
            <p className="text-blue-100 text-sm">Join thousands of trusted helpers across India</p>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 text-center text-white text-xs">
            <div className="flex flex-col items-center">
              <ShieldCheckIcon className="h-6 w-6 text-blue-200 mb-1" />
              <span>Background Verified</span>
            </div>
            <div className="flex flex-col items-center">
              <HomeIcon className="h-6 w-6 text-blue-200 mb-1" />
              <span>Best Families</span>
            </div>
            <div className="flex flex-col items-center">
              <HeartIcon className="h-6 w-6 text-blue-200 mb-1" />
              <span>Trusted Platform</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Helper Registration
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Step {currentSection} of 6
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          {/* Progress Dots */}
          <div className="flex justify-between mt-3">
            {[1, 2, 3, 4, 5, 6].map(step => (
              <div 
                key={step}
                className={`w-3 h-3 rounded-full transition-colors ${
                  step <= currentSection 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {submitSuccess && submittedData ? (
          /* Thank You Message */
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
            <div className="text-center py-8">
              <div className="mb-6">
                <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <CheckCircleIcon className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Registration Successful!</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Thank you for joining EzyHelpers</p>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6 inline-block">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Registration Number</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{confirmationId}</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 mb-6 text-left max-w-lg mx-auto">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">Your Registration Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Name:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{submittedData.firstName} {submittedData.lastName}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Helper Type:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{submittedData.helperType}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Phone:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{submittedData.primaryPhone}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Location:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{submittedData.currentLocality}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Experience:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{submittedData.experienceMonths} months</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-600 dark:text-gray-400 block mb-2">Skills:</span>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{submittedData.specialities.join(', ')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  <strong>What's Next?</strong><br />
                  Our verification team will review your profile within 24-48 hours. We'll contact you at {submittedData.primaryPhone} once your profile is approved. Keep your documents ready for verification.
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Go to Homepage
                </Link>
                <button
                  onClick={() => {
                    setSubmitSuccess(false)
                    setSubmittedData(null)
                    setConfirmationId('')
                    setCurrentSection(1)
                  }}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-3 px-8 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  Register Another Helper
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Registration Form */
          <form className="space-y-6">
            {/* Section 1: Basic Details */}
            {currentSection === 1 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Basic Details
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Tell us about yourself and your work preference
                </p>
              </div>

              {/* Helper Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Helper Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {helperTypes.map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleInputChange('helperType', type)}
                      className={`px-4 py-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                        formData.helperType === type
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter first name"
                    maxLength={50}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Gender & DOB */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Gender *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {genders.map(gender => (
                      <option key={gender} value={gender}>{gender}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Date of Birth *
                  </label>
                  <input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  {formData.age > 0 && (
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Age: {formData.age} years
                    </p>
                  )}
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.dateOfBirth}
                    </p>
                  )}
                </div>
              </div>

              {/* Helper Photo */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Live Photo *
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <CameraIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <input
                    id="helperPhoto"
                    type="file"
                    accept="image/*"
                    capture="user"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleFileUpload('helperPhoto', file)
                    }}
                    className="hidden"
                  />
                  <label
                    htmlFor="helperPhoto"
                    className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {formData.helperPhoto ? formData.helperPhoto.name : 'Take Photo or Upload'}
                  </label>
                  <p className="text-xs text-gray-500 mt-1">Camera preferred, max 800KB</p>
                </div>
                {errors.helperPhoto && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.helperPhoto}
                  </p>
                )}
              </div>

              {/* Listed By Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Listed By (Field Officer Name)
                </label>
                <input
                  type="text"
                  value={formData.listedBy}
                  onChange={(e) => handleInputChange('listedBy', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Enter field officer name"
                />
                <p className="text-xs text-gray-500">
                  Name of the field officer who is listing this helper
                </p>
              </div>
            </div>
          )}

          {/* Section 2: Background & Skills */}
          {currentSection === 2 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Background & Skills
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Your background, education, and experience details
                </p>
              </div>

              {/* Native State & Current Locality */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Native State *
                  </label>
                  <select
                    id="nativeState"
                    value={formData.nativeState}
                    onChange={(e) => handleInputChange('nativeState', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select state</option>
                    {indianStates.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  {errors.nativeState && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.nativeState}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Current Locality *
                  </label>
                  <input
                    id="currentLocality"
                    type="text"
                    value={formData.currentLocality}
                    onChange={(e) => handleInputChange('currentLocality', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Current area/locality"
                  />
                  {errors.currentLocality && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.currentLocality}
                    </p>
                  )}
                </div>
              </div>

              {/* Languages Known */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Languages Known * (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {languages.map(language => (
                    <button
                      key={language}
                      type="button"
                      onClick={() => toggleArrayValue('languagesKnown', language)}
                      className={`px-3 py-2 rounded-lg border-2 transition-all duration-200 text-sm ${
                        formData.languagesKnown.includes(language)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300'
                      }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
                {errors.languagesKnown && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.languagesKnown}
                  </p>
                )}
              </div>

              {/* Education & Marital Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Education Level
                  </label>
                  <select
                    value={formData.educationLevel}
                    onChange={(e) => handleInputChange('educationLevel', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {educationLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Marital Status
                  </label>
                  <select
                    value={formData.maritalStatus}
                    onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {maritalStatuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Spouse Occupation & Kids Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Spouse Occupation
                  </label>
                  <input
                    type="text"
                    value={formData.spouseOccupation}
                    onChange={(e) => handleInputChange('spouseOccupation', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter occupation"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Number of Kids (0-10)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={formData.kidsCount}
                    onChange={(e) => handleInputChange('kidsCount', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0</span>
                    <span className="font-medium text-blue-600">{formData.kidsCount}</span>
                    <span>10</span>
                  </div>
                </div>
              </div>

              {/* Smartphone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Smartphone Available *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="smartphone"
                        checked={formData.smartphoneAvailable === true}
                        onChange={() => handleInputChange('smartphoneAvailable', true)}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="smartphone"
                        checked={formData.smartphoneAvailable === false}
                        onChange={() => handleInputChange('smartphoneAvailable', false)}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    WhatsApp Active *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="whatsapp"
                        checked={formData.whatsappActive === true}
                        onChange={() => handleInputChange('whatsappActive', true)}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="whatsapp"
                        checked={formData.whatsappActive === false}
                        onChange={() => handleInputChange('whatsappActive', false)}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>

              {/* Vaccination Status */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Vaccination Status
                </label>
                <div className="flex gap-6">
                  {vaccinationStatuses.map(status => (
                    <label key={status} className="flex items-center">
                      <input
                        type="radio"
                        name="vaccination"
                        checked={formData.vaccinationStatus === status}
                        onChange={() => handleInputChange('vaccinationStatus', status)}
                        className="mr-2"
                      />
                      {status}
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Experience (months)
                </label>
                <input
                  type="range"
                  min="0"
                  max="240"
                  value={formData.experienceMonths}
                  onChange={(e) => handleInputChange('experienceMonths', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0 months</span>
                  <span className="font-medium text-blue-600">
                    {formData.experienceMonths} months 
                    {formData.experienceMonths >= 12 && ` (${Math.floor(formData.experienceMonths / 12)} years)`}
                  </span>
                  <span>20 years</span>
                </div>
              </div>

              {/* Specialities */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Specialities * (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {specialitiesList.map(speciality => (
                    <button
                      key={speciality}
                      type="button"
                      onClick={() => toggleArrayValue('specialities', speciality)}
                      className={`px-3 py-2 rounded-lg border-2 transition-all duration-200 text-sm ${
                        formData.specialities.includes(speciality)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300'
                      }`}
                    >
                      {speciality}
                    </button>
                  ))}
                </div>
                {errors.specialities && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.specialities}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Section 3: Work Preferences */}
          {currentSection === 3 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Work Preferences
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Your preferred working hours and salary expectations
                </p>
              </div>

              {/* Working Hours Preference */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Working Hours Preference
                </label>
                <input
                  type="text"
                  value={formData.workingHoursPreference}
                  onChange={(e) => handleInputChange('workingHoursPreference', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="e.g., 8 AM - 6 PM"
                />
              </div>

              {/* Preferred Localities */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Preferred Localities (Optional)
                </label>
                <input
                  type="text"
                  value={formData.preferredLocalities}
                  onChange={(e) => handleInputChange('preferredLocalities', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="e.g., Mumbai, Delhi, Bangalore, Hyderabad (separate multiple cities with commas)"
                />
                <p className="text-xs text-gray-500">
                  Enter cities or areas where you would prefer to work. You can list multiple locations separated by commas.
                </p>
              </div>

              {/* Max Placements Per Month */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Maximum Placements Per Month
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => handleInputChange('maxPlacementsPerMonth', Math.max(1, formData.maxPlacementsPerMonth - 1))}
                    className="w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center">
                    <span className="text-2xl font-bold text-blue-600">{formData.maxPlacementsPerMonth}</span>
                    <p className="text-sm text-gray-500">placements</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleInputChange('maxPlacementsPerMonth', Math.min(5, formData.maxPlacementsPerMonth + 1))}
                    className="w-12 h-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Expected Salary Range */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Expected Salary Range (₹)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">
                      Minimum
                    </label>
                    <input
                      type="number"
                      value={formData.expectedSalaryMin}
                      onChange={(e) => handleInputChange('expectedSalaryMin', parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="10000"
                      min="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">
                      Maximum (Optional)
                    </label>
                    <input
                      type="number"
                      value={formData.expectedSalaryMax}
                      onChange={(e) => handleInputChange('expectedSalaryMax', parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="15000"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Compliance & Banking */}
          {currentSection === 4 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Compliance & Banking
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  ID verification and optional banking details
                </p>
              </div>

              {/* ID Proof Type & Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    ID Proof Type *
                  </label>
                  <select
                    value={formData.idProofType}
                    onChange={(e) => handleInputChange('idProofType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                    id="idProofNumber"
                    type="text"
                    value={formData.idProofNumber}
                    onChange={(e) => handleInputChange('idProofNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter ID number"
                  />
                  {errors.idProofNumber && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.idProofNumber}
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
                    id="idProofFile"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleFileUpload('idProofFile', file)
                    }}
                    className="hidden"
                  />
                  <label
                    htmlFor="idProofFile"
                    className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {formData.idProofFile ? formData.idProofFile.name : 'Choose file or drag here'}
                  </label>
                  <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (max 5MB)</p>
                </div>
                {errors.idProofFile && (
                  <p className="text-red-500 text-sm flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.idProofFile}
                  </p>
                )}
              </div>

              {/* Banking Details (Optional) */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Banking Details (Optional)
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) => handleInputChange('bankName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Bank name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      value={formData.bankIFSC}
                      onChange={(e) => handleInputChange('bankIFSC', e.target.value.toUpperCase())}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="ABCD0123456"
                      maxLength={11}
                    />
                    {errors.bankIFSC && (
                      <p className="text-red-500 text-sm flex items-center">
                        <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                        {errors.bankIFSC}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      value={formData.accountHolderName}
                      onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Account holder name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Account Number
                    </label>
                    <input
                      type="text"
                      value={formData.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Account number"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 5: Contact & Geo */}
          {currentSection === 5 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Contact & Location
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Contact information and location details
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
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
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
                    Alternate Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.alternatePhone}
                    onChange={(e) => handleInputChange('alternatePhone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Optional"
                  />
                  {errors.alternatePhone && (
                    <p className="text-red-500 text-sm flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                      {errors.alternatePhone}
                    </p>
                  )}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                <h3 className="text-lg font-medium text-amber-800 dark:text-amber-300 mb-4">
                  Emergency Contact (Optional)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-amber-700 dark:text-amber-300">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      value={formData.emergencyContactName}
                      onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                      className="w-full px-4 py-3 border border-amber-300 dark:border-amber-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-amber-500 dark:placeholder-amber-400"
                      placeholder="Emergency contact name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-amber-700 dark:text-amber-300">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.emergencyContactPhone}
                      onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                      className="w-full px-4 py-3 border border-amber-300 dark:border-amber-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-amber-500 dark:placeholder-amber-400"
                      placeholder="Emergency contact phone"
                    />
                    {errors.emergencyContactPhone && (
                      <p className="text-red-500 text-sm flex items-center">
                        <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                        {errors.emergencyContactPhone}
                      </p>
                    )}
                  </div>
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
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Latitude"
                  />
                  <input
                    type="number"
                    step="any"
                    value={formData.longitude || ''}
                    onChange={(e) => handleInputChange('longitude', parseFloat(e.target.value) || null)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
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

          {/* Section 6: Declaration & Submit */}
          {currentSection === 6 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Declaration & Submit
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Review your information and submit your registration
                </p>
              </div>

              {/* Internal Notes */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Additional Notes
                </label>
                <textarea
                  value={formData.internalNotes}
                  onChange={(e) => handleInputChange('internalNotes', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tell us anything else we should know..."
                />
              </div>

              {/* Summary */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2">
                <h3 className="font-medium text-gray-900 dark:text-white">Registration Summary</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName || ''}</p>
                  <p><span className="font-medium">Type:</span> {formData.helperType}</p>
                  <p><span className="font-medium">Age:</span> {formData.age} years</p>
                  <p><span className="font-medium">Experience:</span> {formData.experienceMonths} months</p>
                  <p><span className="font-medium">Languages:</span> {formData.languagesKnown.join(', ') || 'None selected'}</p>
                  <p><span className="font-medium">Specialities:</span> {formData.specialities.join(', ') || 'None selected'}</p>
                  <p><span className="font-medium">Phone:</span> {formData.primaryPhone || 'Not provided'}</p>
                  {formData.listedBy && <p><span className="font-medium">Listed by:</span> {formData.listedBy}</p>}
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
                  I agree to the{' '}
                  <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-700 underline">
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

            {currentSection < 6 ? (
              <button
                type="button"
                onClick={nextSection}
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200"
              >
                Next
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-all duration-200 min-h-[48px]"
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
        )}
      </div>

      {/* Professional Footer */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <Image
                src="/ezyhelper_logo_new.png"
                alt="EzyHelpers Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">EzyHelpers</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            India's Most Trusted Domestic Help Network
          </p>
          <div className="flex justify-center space-x-6 text-xs text-gray-500 dark:text-gray-400">
            <Link href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-blue-600">Terms of Service</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            © 2024 EzyHelpers. All rights reserved.
          </p>
        </div>
      </div>

      {/* Help Contact */}
      <div className="fixed bottom-4 left-4 z-40">
        <Link
          href="https://wa.me/919972571005?text=Hi! I need help with helper registration."
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-200 text-sm"
        >
          <PhoneIcon className="h-4 w-4 mr-2" />
          Need Help?
        </Link>
      </div>
    </div>
  )
}