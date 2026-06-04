'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { supabase } from '@/lib/supabaseClient'
import { buildHireHelperLeadInsertRow } from '@/lib/hireHelperLeadDb'
import { trackFormStart, trackFormSubmit, trackFormComplete, trackFormError, trackStepComplete, trackServiceSelect, trackBookingStart, trackBookingComplete, trackFormSubmitSuccess } from '@/lib/analytics'
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
  houseType: string
  numberOfRooms: string
  cookFoodType: string
  cookMeals: string[]
  religion: string
  hasPet: string
  hasHelperRoom: string
}

const EMPTY_FORM: FormData = {
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
  preferredGender: '',
  houseType: '',
  numberOfRooms: '',
  cookFoodType: '',
  cookMeals: [],
  religion: '',
  hasPet: '',
  hasHelperRoom: '',
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

const TOTAL_STEPS = 4
const DRAFT_KEY = 'ezy_hire_helper_draft_v1'
/** Minimum step the user must have completed before we consider the
 *  draft worth sending as a partial lead (we need contact details). */
const PARTIAL_LEAD_MIN_STEP = 2

interface Draft {
  step: number
  formData: FormData
  savedAt: string
  /** request id assigned to this draft so duplicate beacons can be deduped server-side */
  draftId: string
  /** true once a partial lead email has been sent for the current data snapshot */
  partialSentForSnapshot?: string
}

const generateRequestId = () =>
  Math.random().toString(36).substring(2, 8).toUpperCase()

export default function HireHelperForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM)
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'error'>('idle')
  const [submitting, setSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [hasTrackedStart, setHasTrackedStart] = useState(false)
  const [draftRestored, setDraftRestored] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  // Refs mirrored for unload handlers (event listeners capture stale state otherwise)
  const formDataRef = useRef(formData)
  const stepRef = useRef(step)
  const submittedRef = useRef(false)
  const maxStepReachedRef = useRef(1)
  const draftIdRef = useRef<string>('')
  useEffect(() => { formDataRef.current = formData }, [formData])
  useEffect(() => {
    stepRef.current = step
    if (step > maxStepReachedRef.current) maxStepReachedRef.current = step
  }, [step])

  /** Persist the current draft to localStorage. */
  const saveDraft = useCallback((nextStep: number, data: FormData) => {
    try {
      if (!draftIdRef.current) draftIdRef.current = generateRequestId()
      const draft: Draft = {
        step: nextStep,
        formData: data,
        savedAt: new Date().toISOString(),
        draftId: draftIdRef.current,
      }
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
    } catch { /* storage unavailable */ }
  }, [])

  const clearDraft = useCallback(() => {
    try { window.localStorage.removeItem(DRAFT_KEY) } catch { /* ignore */ }
  }, [])

  // Restore draft + track form start + apply ?service= param
  useEffect(() => {
    if (hasTrackedStart) return
    trackFormStart('hire_helper_form', 'hire_helper_page')
    setHasTrackedStart(true)

    let restored: Draft | null = null
    try {
      const raw = window.localStorage.getItem(DRAFT_KEY)
      if (raw) restored = JSON.parse(raw) as Draft
    } catch { /* ignore corrupted draft */ }

    if (restored?.formData) {
      // Drafts older than 7 days are discarded
      const age = Date.now() - new Date(restored.savedAt || 0).getTime()
      if (age < 7 * 24 * 60 * 60 * 1000) {
        setFormData({ ...EMPTY_FORM, ...restored.formData })
        const restoredStep = Math.min(Math.max(restored.step || 1, 1), TOTAL_STEPS)
        setStep(restoredStep)
        maxStepReachedRef.current = restoredStep
        draftIdRef.current = restored.draftId || generateRequestId()
        setDraftRestored(true)
      } else {
        clearDraft()
      }
    }

    // URL param can pre-select the employment type (legacy links)
    const serviceParam = searchParams.get('service')
    if (serviceParam && employmentTypes.some(s => s.value === serviceParam)) {
      setFormData(prev => ({ ...prev, serviceType: serviceParam }))
      const selectedService = employmentTypes.find(s => s.value === serviceParam)
      if (selectedService) {
        trackServiceSelect(selectedService.label, serviceParam, 'hire_helper_form')
      }
    }
  }, [hasTrackedStart, searchParams, clearDraft])

  /**
   * Abandoned-form capture: if the visitor leaves the page after reaching the
   * contact-info step but without submitting, send the partially filled form
   * to the leads inbox with a note. Uses sendBeacon so it survives tab close.
   */
  useEffect(() => {
    const sendPartialLead = () => {
      if (submittedRef.current) return
      const data = formDataRef.current
      // Only send if we actually have a way to contact the person
      const hasContact = /^[5-9][0-9]{9}$/.test(data.phone.trim())
      if (!hasContact || !data.name.trim()) return
      if (maxStepReachedRef.current < PARTIAL_LEAD_MIN_STEP) return

      // Dedupe: skip if this exact snapshot was already sent
      const snapshot = JSON.stringify({ d: data, s: maxStepReachedRef.current })
      try {
        const raw = window.localStorage.getItem(DRAFT_KEY)
        if (raw) {
          const draft = JSON.parse(raw) as Draft
          if (draft.partialSentForSnapshot === snapshot) return
          draft.partialSentForSnapshot = snapshot
          window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
        }
      } catch { /* ignore */ }

      const payload = JSON.stringify({
        leadType: 'hire_helper_partial',
        website: '',
        formData: {
          ...data,
          serviceRole: data.serviceRole === 'others' ? data.otherRole.trim() : data.serviceRole,
          lastCompletedStep: Math.min(maxStepReachedRef.current, TOTAL_STEPS),
          totalSteps: TOTAL_STEPS,
        },
        requestId: draftIdRef.current || generateRequestId(),
        sourceUrl: window.location.href,
      })
      try {
        const blob = new Blob([payload], { type: 'application/json' })
        navigator.sendBeacon('/api/send-lead-email', blob)
      } catch { /* sendBeacon unavailable */ }
    }

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') sendPartialLead()
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    window.addEventListener('pagehide', sendPartialLead)
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('pagehide', sendPartialLead)
    }
  }, [])

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => {
      const next = { ...prev, [field]: value } as FormData
      if (field === 'serviceType' && typeof value === 'string') {
        if (value === 'live-in') {
          next.duration = ''
          next.serviceTimings = ''
        } else {
          next.hasHelperRoom = ''
        }
      }
      return next
    })

    if (field === 'serviceType' && typeof value === 'string') {
      const selectedService = employmentTypes.find(s => s.value === value)
      if (selectedService) {
        trackServiceSelect(selectedService.label, value, 'hire_helper_form')
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
      // Step 1: primary role only
      if (!formData.serviceRole) {
        errors.serviceRole = 'Please select a role'
      }
      if (formData.serviceRole === 'others' && !formData.otherRole.trim()) {
        errors.otherRole = 'Please specify the role you need'
      }
    } else if (step === 2) {
      // Step 2: contact details
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
    } else if (step === 3) {
      // Step 3: service follow-ups for the chosen role
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
        errors.familySize = 'Please select number of family members'
      }
      if (!formData.houseType) {
        errors.houseType = 'Please select your house type'
      }
      if (!formData.numberOfRooms) {
        errors.numberOfRooms = 'Please select number of rooms'
      }
      if (formData.serviceRole === 'cook') {
        if (!formData.cookFoodType) {
          errors.cookFoodType = 'Please select food type'
        }
        if (formData.cookFoodType && formData.cookMeals.length === 0) {
          errors.cookMeals = 'Please select at least one meal'
        }
      }
      if (formData.serviceType === 'live-in' && !formData.hasHelperRoom) {
        errors.hasHelperRoom = 'Please indicate if you have a separate room'
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
    if (!formData.serviceRole) {
      errors.serviceRole = 'Please select a role'
    }
    if (formData.serviceRole === 'others' && !formData.otherRole.trim()) {
      errors.otherRole = 'Please specify the role you need'
    }
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
      errors.familySize = 'Please select number of family members'
    }
    if (!formData.houseType) {
      errors.houseType = 'Please select your house type'
    }
    if (!formData.numberOfRooms) {
      errors.numberOfRooms = 'Please select number of rooms'
    }
    if (formData.serviceRole === 'cook') {
      if (!formData.cookFoodType) {
        errors.cookFoodType = 'Please select food type'
      }
      if (formData.cookFoodType && formData.cookMeals.length === 0) {
        errors.cookMeals = 'Please select at least one meal'
      }
    }
    if (formData.serviceType === 'live-in' && !formData.hasHelperRoom) {
      errors.hasHelperRoom = 'Please indicate if you have a separate room'
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
      const newStep = Math.min(step + 1, TOTAL_STEPS)
      setStep(newStep)

      // Auto-save the draft every time the user advances a step
      saveDraft(newStep, formData)

      // Track step completion
      const stepNames = ['Primary Role', 'Personal Information', 'Service Requirements', 'Additional Details']
      trackStepComplete(stepNames[step - 1], step, TOTAL_STEPS)

      // Track booking start when contact details are complete
      if (step === 2 && formData.city) {
        trackBookingStart(formData.serviceType || formData.serviceRole || 'unknown', formData.city)
      }
    }
  }
  const prevStep = () => {
    const newStep = Math.max(step - 1, 1)
    setStep(newStep)
    saveDraft(newStep, formData)
  }

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
      const cookDetails = formData.serviceRole === 'cook'
        ? ` | Food: ${formData.cookFoodType} | Meals: ${formData.cookMeals.join(', ')}`
        : ''
      const householdDetails = [
        formData.houseType && `House: ${formData.houseType}`,
        formData.numberOfRooms && `Rooms: ${formData.numberOfRooms}`,
        formData.religion && `Religion: ${formData.religion}`,
        formData.hasPet && `Pet: ${formData.hasPet}`,
        formData.serviceType === 'live-in' && formData.hasHelperRoom && `Helper room: ${formData.hasHelperRoom}`,
      ].filter(Boolean).join(' | ')
      const fullRequirements = [
        formData.specificRequirements,
        cookDetails,
        householdDetails,
      ].filter(Boolean).join('\n')
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
        specificRequirements: fullRequirements,
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
              preferredGender: formData.preferredGender,
              houseType: formData.houseType,
              numberOfRooms: formData.numberOfRooms,
              cookFoodType: formData.serviceRole === 'cook' ? formData.cookFoodType : '',
              cookMeals: formData.serviceRole === 'cook' ? formData.cookMeals : [],
              religion: formData.religion,
              hasPet: formData.hasPet,
              hasHelperRoom: formData.serviceType === 'live-in' ? formData.hasHelperRoom : '',
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
      trackFormSubmitSuccess('hire_helper_form', { leadId: newRequestId, serviceType: formData.serviceType, city: formData.city });
      trackBookingComplete(formData.serviceType, formData.city, newRequestId);

      // Submitted — stop partial-lead beacons and clear the saved draft
      submittedRef.current = true
      clearDraft()

      router.push(`/thank-you?type=hire&ref=${encodeURIComponent(newRequestId)}`)
    } catch (error) {
      // Track form error
      trackFormError('hire_helper_form', 'submission_error', error instanceof Error ? error.message : 'Unknown error');
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  const stepTitles = ['Role', 'Personal', 'Service', 'Details']
  const stepHeadings = ['Primary Role', 'Personal Information', 'Service Requirements', 'Additional Details']

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((stepNum) => (
            <div key={stepNum} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= stepNum ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                {step > stepNum ? <CheckCircleIcon className="w-5 h-5" /> : stepNum}
              </div>
              <span className="mt-1 text-xs font-semibold text-primary-600 min-w-[60px] text-center">
                {step >= stepNum ? stepTitles[stepNum - 1] : ''}
              </span>
              {stepNum < TOTAL_STEPS && (
                <div className={`w-full h-1 mx-4 ${step > stepNum ? 'bg-primary-500' : 'bg-gray-200'
                  }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-600">
          Step {step} of {TOTAL_STEPS}: {stepHeadings[step - 1]}
        </div>
        {draftRestored && step < TOTAL_STEPS && (
          <p className="mt-2 text-xs text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
            Welcome back! We saved your progress — continue where you left off.
          </p>
        )}
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

        {/* Step 1: Primary Role (asked alone, first) */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2 font-display">
              What do you need help with?
            </h2>
            <p className="text-gray-600 -mt-2">
              Choose the primary role — we&rsquo;ll ask a few quick follow-up questions next.
            </p>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceRoles.map(role => (
                  <div
                    key={role.value}
                    role="button"
                    tabIndex={0}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.serviceRole === role.value
                      ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                      : 'border-gray-200 hover:border-gray-300'
                      }`}
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      serviceRole: role.value,
                      otherRole: role.value !== 'others' ? '' : prev.otherRole,
                      cookFoodType: role.value !== 'cook' ? '' : prev.cookFoodType,
                      cookMeals: role.value !== 'cook' ? [] : prev.cookMeals,
                    }))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setFormData(prev => ({
                          ...prev,
                          serviceRole: role.value,
                          otherRole: role.value !== 'others' ? '' : prev.otherRole,
                          cookFoodType: role.value !== 'cook' ? '' : prev.cookFoodType,
                          cookMeals: role.value !== 'cook' ? [] : prev.cookMeals,
                        }))
                      }
                    }}
                  >
                    <div className="font-medium text-gray-900">{role.label}</div>
                    <div className="text-sm text-gray-600">{role.description}</div>
                  </div>
                ))}
              </div>
              {formErrors.serviceRole && <p role="alert" className="text-xs text-red-500 mt-1">{formErrors.serviceRole}</p>}

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
                  {formErrors.otherRole && <p role="alert" className="text-xs text-red-500 mt-1">{formErrors.otherRole}</p>}
                </div>
              )}
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

        {/* Step 2: Personal Information */}
        {step === 2 && (
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

        {/* Step 3: Service Requirements (follow-ups for the chosen primary role) */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-display">
              Service Requirements
            </h2>

            {/* Employment Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                What type of helper service do you need? *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {employmentTypes.map(type => (
                  <div
                    key={type.value}
                    role="button"
                    tabIndex={0}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.serviceType === type.value
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
              {formErrors.serviceType && <p role="alert" className="text-xs text-red-500 mt-1">{formErrors.serviceType}</p>}
            </div>

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

            {/* Cook-specific: Food type & meals */}
            {formData.serviceRole === 'cook' && (
              <div className="space-y-6 rounded-xl border border-amber-200 bg-amber-50/40 p-5 md:p-6">
                <p className="text-sm font-medium text-gray-800">Cooking Preferences</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Food Type *
                    </label>
                    <select
                      value={formData.cookFoodType}
                      onChange={(e) => handleInputChange('cookFoodType', e.target.value)}
                      aria-invalid={!!formErrors.cookFoodType}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Select food type</option>
                      <option value="veg">Vegetarian</option>
                      <option value="non-veg">Non-Vegetarian</option>
                      <option value="both">Both Veg & Non-Veg</option>
                    </select>
                    {formErrors.cookFoodType && <p className="text-xs text-red-500 mt-1">{formErrors.cookFoodType}</p>}
                  </div>

                  {formData.cookFoodType && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meals Required *
                      </label>
                      <div className="space-y-2">
                        {['Breakfast', 'Lunch', 'Dinner'].map(meal => (
                          <label key={meal} className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.cookMeals.includes(meal)}
                              onChange={() => {
                                setFormData(prev => ({
                                  ...prev,
                                  cookMeals: prev.cookMeals.includes(meal)
                                    ? prev.cookMeals.filter(m => m !== meal)
                                    : [...prev.cookMeals, meal]
                                }))
                              }}
                              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{meal}</span>
                          </label>
                        ))}
                      </div>
                      {formErrors.cookMeals && <p className="text-xs text-red-500 mt-1">{formErrors.cookMeals}</p>}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Live-in specific: Separate room */}
            {formData.serviceType === 'live-in' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have a separate room for the helper? *
                </label>
                <div className="flex gap-4">
                  {[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }].map(opt => (
                    <div
                      key={opt.value}
                      role="button"
                      tabIndex={0}
                      className={`flex-1 p-4 border rounded-lg cursor-pointer text-center transition-all ${formData.hasHelperRoom === opt.value
                        ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                      onClick={() => handleInputChange('hasHelperRoom', opt.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleInputChange('hasHelperRoom', opt.value)
                        }
                      }}
                    >
                      <div className="font-medium text-gray-900">{opt.label}</div>
                    </div>
                  ))}
                </div>
                {formErrors.hasHelperRoom && <p role="alert" className="text-xs text-red-500 mt-1">{formErrors.hasHelperRoom}</p>}
              </div>
            )}

            {/* Household Details */}
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
                  No. of Family Members *
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  House Type *
                </label>
                <select
                  value={formData.houseType}
                  onChange={(e) => handleInputChange('houseType', e.target.value)}
                  aria-invalid={!!formErrors.houseType}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">Select house type</option>
                  <option value="apartment">Apartment</option>
                  <option value="individual-house">Individual House</option>
                  <option value="standalone-house">Standalone House</option>
                  <option value="villa">Villa</option>
                </select>
                {formErrors.houseType && <p className="text-xs text-red-500 mt-1">{formErrors.houseType}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  No. of Rooms *
                </label>
                <select
                  value={formData.numberOfRooms}
                  onChange={(e) => handleInputChange('numberOfRooms', e.target.value)}
                  aria-invalid={!!formErrors.numberOfRooms}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">Select number of rooms</option>
                  <option value="1">1 Room (1 BHK)</option>
                  <option value="2">2 Rooms (2 BHK)</option>
                  <option value="3">3 Rooms (3 BHK)</option>
                  <option value="4">4 Rooms (4 BHK)</option>
                  <option value="5+">5+ Rooms</option>
                </select>
                {formErrors.numberOfRooms && <p className="text-xs text-red-500 mt-1">{formErrors.numberOfRooms}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Religion
                </label>
                <select
                  value={formData.religion}
                  onChange={(e) => handleInputChange('religion', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">No preference</option>
                  <option value="hindu">Hindu</option>
                  <option value="muslim">Muslim</option>
                  <option value="christian">Christian</option>
                  <option value="sikh">Sikh</option>
                  <option value="buddhist">Buddhist</option>
                  <option value="jain">Jain</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have a pet at home?
                </label>
                <div className="flex gap-4">
                  {[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }].map(opt => (
                    <div
                      key={opt.value}
                      role="button"
                      tabIndex={0}
                      className={`flex-1 p-3 border rounded-lg cursor-pointer text-center transition-all ${formData.hasPet === opt.value
                        ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                      onClick={() => handleInputChange('hasPet', opt.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleInputChange('hasPet', opt.value)
                        }
                      }}
                    >
                      <div className="font-medium text-gray-900">{opt.label}</div>
                    </div>
                  ))}
                </div>
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

        {/* Step 4: Additional Details */}
        {step === 4 && (
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
