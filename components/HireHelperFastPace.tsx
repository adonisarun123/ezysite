'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { BoltIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import {
  readHandoff,
  clearHandoff,
  captureClientContext,
  FAST_PACE_WINDOW_MS,
  type HireHelperHandoff,
  type HireHelperDetails,
} from '@/lib/hireHelperFlow'

/**
 * Fast-pace add-on shown on the thank-you page after a hire-helper booking.
 *
 * Behaviour:
 *  - On mount, reads the step-1 handoff from sessionStorage.
 *  - Starts a 30s timer. If the customer hasn't submitted full details by then
 *    (or leaves the page), we auto-send the BASIC lead as a normal-priority
 *    email so nothing is lost.
 *  - If the customer clicks "fast-pace my request" and submits the detail form,
 *    we send the FULL lead as a P0 (high-priority, red) email instead.
 *  - A single sentForRequestId guard ensures the team never gets both a basic
 *    and a P0 email for the same booking ID.
 */

const DURATION_OPTIONS = [
  { value: 'few-hours-once', label: 'Few hours / one-time visit' },
  { value: 'daily-partial', label: 'Daily (part of the day)' },
  { value: 'daily-full', label: 'Daily (full working day)' },
  { value: '1-week', label: 'About 1 week' },
  { value: '1-month', label: 'About 1 month' },
  { value: '2-3-months', label: '2–3 months' },
  { value: '6-months-plus', label: '6 months or longer' },
  { value: 'ongoing', label: 'Ongoing / flexible' },
]

const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali', 'Marathi']

const EMPTY_DETAILS: HireHelperDetails = {
  email: '',
  apartment: '',
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

const requiresScheduleDetails = (serviceType: string) =>
  Boolean(serviceType && serviceType !== 'live-in')

export default function HireHelperFastPace() {
  const [handoff, setHandoff] = useState<HireHelperHandoff | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [details, setDetails] = useState<HireHelperDetails>(EMPTY_DETAILS)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(Math.round(FAST_PACE_WINDOW_MS / 1000))

  // Guards shared with event handlers (avoid stale closures)
  const handoffRef = useRef<HireHelperHandoff | null>(null)
  const sentRef = useRef(false)
  const expandedRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => { handoffRef.current = handoff }, [handoff])
  useEffect(() => { expandedRef.current = expanded }, [expanded])

  /** Send the basic (timer-fallback) lead as a normal-priority email. Used
   *  when the customer doesn't fast-pace within the window or leaves the page. */
  const sendBasicLead = useCallback((useBeacon: boolean) => {
    const h = handoffRef.current
    if (!h || sentRef.current) return
    // If they're actively filling the detail form, don't pre-empt the P0 email.
    if (expandedRef.current && !useBeacon) return
    sentRef.current = true

    const payload = JSON.stringify({
      leadType: 'hire_helper',
      website: '',
      priority: 'normal',
      formData: {
        ...h.basic,
        serviceRole: h.basic.serviceRole === 'others' ? h.basic.otherRole : h.basic.serviceRole,
        additionalServices: [],
        languages: [],
        clientContext: captureClientContext(),
      },
      requestId: h.requestId,
      sourceUrl: window.location.href,
    })

    if (useBeacon && typeof navigator !== 'undefined' && navigator.sendBeacon) {
      try {
        navigator.sendBeacon('/api/send-lead-email', new Blob([payload], { type: 'application/json' }))
        return
      } catch { /* fall through to fetch */ }
    }
    fetch('/api/send-lead-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => { /* best effort */ })
  }, [])

  // Mount: read handoff, start timer + countdown, wire page-leave fallback.
  useEffect(() => {
    const h = readHandoff()
    if (!h) return
    setHandoff(h)
    handoffRef.current = h
    // Prefill start date / known fields from basic where possible
    setDetails(prev => ({ ...prev }))

    timerRef.current = setTimeout(() => sendBasicLead(false), FAST_PACE_WINDOW_MS)
    countdownRef.current = setInterval(() => {
      setSecondsLeft(s => (s > 0 ? s - 1 : 0))
    }, 1000)

    const onLeave = () => sendBasicLead(true)
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') sendBasicLead(true)
    }
    window.addEventListener('pagehide', onLeave)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (countdownRef.current) clearInterval(countdownRef.current)
      window.removeEventListener('pagehide', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [sendBasicLead])

  const stopTimers = () => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null }
    if (countdownRef.current) { clearInterval(countdownRef.current); countdownRef.current = null }
  }

  const handleFastPace = () => {
    // Opening the detail form cancels the basic-email timer; the team will get
    // the full P0 email when this form is submitted instead.
    stopTimers()
    setExpanded(true)
    expandedRef.current = true
  }

  const setField = (field: keyof HireHelperDetails, value: string | string[]) => {
    setDetails(prev => ({ ...prev, [field]: value }))
  }

  const toggleInArray = (field: 'languages' | 'cookMeals' | 'additionalServices', value: string) => {
    setDetails(prev => {
      const arr = prev[field]
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value],
      }
    })
  }

  const validateDetails = () => {
    const errs: { [key: string]: string } = {}
    const h = handoffRef.current
    const role = h?.basic.serviceRole
    const serviceType = h?.basic.serviceType || ''
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 1)

    if (details.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim())) {
      errs.email = 'Please enter a valid email address'
    }
    if (!details.startDate) {
      errs.startDate = 'Please select a start date'
    } else {
      const sd = new Date(details.startDate)
      if (sd < today) errs.startDate = 'Start date cannot be in the past'
      else if (sd > maxDate) errs.startDate = 'Start date cannot be more than one month from today'
    }
    if (!details.familySize) errs.familySize = 'Please select number of family members'
    if (!details.houseType) errs.houseType = 'Please select your house type'
    if (!details.numberOfRooms) errs.numberOfRooms = 'Please select number of rooms'
    if (role === 'cook') {
      if (!details.cookFoodType) errs.cookFoodType = 'Please select food type'
      if (details.cookFoodType && details.cookMeals.length === 0) errs.cookMeals = 'Please select at least one meal'
    }
    if (serviceType === 'live-in' && !details.hasHelperRoom) {
      errs.hasHelperRoom = 'Please indicate if you have a separate room'
    }
    if (requiresScheduleDetails(serviceType)) {
      if (!details.serviceTimings.trim()) errs.serviceTimings = 'Please enter your preferred service timings'
      if (!details.duration) errs.duration = 'Please select how long you need the service'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmitDetails = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting || sentRef.current) return
    const h = handoffRef.current
    if (!h) return
    if (!validateDetails()) return
    setSubmitting(true)
    stopTimers()
    sentRef.current = true

    const role = h.basic.serviceRole === 'others' ? h.basic.otherRole : h.basic.serviceRole
    const serviceType = h.basic.serviceType

    try {
      const res = await fetch('/api/send-lead-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadType: 'hire_helper',
          website: '',
          priority: 'p0',
          formData: {
            name: h.basic.name,
            phone: h.basic.phone,
            email: details.email.trim(),
            city: h.basic.city,
            locality: h.basic.locality,
            apartment: details.apartment.trim(),
            serviceType,
            serviceRole: role,
            duration: details.duration,
            serviceTimings: details.serviceTimings.trim(),
            startDate: details.startDate,
            specificRequirements: details.specificRequirements,
            experience: details.experience,
            budget: details.budget,
            languages: details.languages,
            additionalServices: details.additionalServices,
            familySize: details.familySize,
            preferredGender: details.preferredGender,
            houseType: details.houseType,
            numberOfRooms: details.numberOfRooms,
            cookFoodType: h.basic.serviceRole === 'cook' ? details.cookFoodType : '',
            cookMeals: h.basic.serviceRole === 'cook' ? details.cookMeals : [],
            religion: details.religion,
            hasPet: details.hasPet,
            hasHelperRoom: serviceType === 'live-in' ? details.hasHelperRoom : '',
            clientContext: captureClientContext(),
          },
          requestId: h.requestId,
          sourceUrl: window.location.href,
        }),
      })
      if (!res.ok) throw new Error(`email ${res.status}`)
      clearHandoff()
      setDone(true)
    } catch {
      // Allow a retry if the P0 send failed
      sentRef.current = false
      setErrors({ submit: 'Something went wrong sending your details. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  // Nothing to show if the visitor didn't come from the step-1 form
  if (!handoff) return null

  const role = handoff.basic.serviceRole
  const serviceType = handoff.basic.serviceType
  const isCook = role === 'cook'
  const isLiveIn = serviceType === 'live-in'

  if (done) {
    return (
      <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-green-200 bg-green-50 px-6 py-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <BoltIcon className="h-7 w-7 text-green-700" aria-hidden />
        </div>
        <h2 className="font-display text-xl font-bold text-green-900">
          Your request is now fast-tracked
        </h2>
        <p className="mt-2 text-sm text-green-800">
          We&rsquo;ve flagged this as a priority request. Our placement team will reach out very
          shortly with verified helpers matched to your needs.
        </p>
      </div>
    )
  }

  if (!expanded) {
    return (
      <button
        type="button"
        onClick={handleFastPace}
        className="group mx-auto mt-8 flex w-full max-w-lg items-center gap-4 rounded-2xl border-2 border-primary-200 bg-gradient-to-r from-primary-50 to-secondary-50 px-6 py-5 text-left transition hover:border-primary-400 hover:shadow-md"
      >
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
          <BoltIcon className="h-7 w-7" aria-hidden />
        </span>
        <span className="flex-1">
          <span className="block font-display text-base font-bold text-gray-900">
            Want us to fast-pace your request?
          </span>
          <span className="mt-0.5 block text-sm text-gray-600">
            Give us a few more details and we&rsquo;ll prioritise matching your helper.
          </span>
        </span>
        <span className="hidden text-xs font-semibold text-primary-700 sm:block">
          {secondsLeft > 0 ? `${secondsLeft}s` : ''}
        </span>
      </button>
    )
  }

  return (
    <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-primary-200 bg-white px-6 py-7 text-left shadow-sm">
      <div className="mb-6 flex items-start gap-3">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
          <BoltIcon className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900">
            Fast-pace your request
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            A few more details help us match the right helper faster. All fields marked * are required.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmitDetails} className="space-y-6">
        {/* Schedule (non live-in) */}
        {requiresScheduleDetails(serviceType) && (
          <div className="space-y-5 rounded-xl border border-primary-100 bg-primary-50/40 p-5">
            <p className="text-sm font-medium text-gray-800">Schedule for this service</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred service timings *</label>
                <input
                  type="text"
                  value={details.serviceTimings}
                  onChange={(e) => setField('serviceTimings', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white"
                  placeholder="e.g. 8 AM – 6 PM, Monday–Friday"
                />
                {errors.serviceTimings && <p className="text-xs text-red-500 mt-1">{errors.serviceTimings}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration *</label>
                <select
                  value={details.duration}
                  onChange={(e) => setField('duration', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="">How long do you need the service?</option>
                  {DURATION_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.duration && <p className="text-xs text-red-500 mt-1">{errors.duration}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Cook prefs */}
        {isCook && (
          <div className="space-y-5 rounded-xl border border-amber-200 bg-amber-50/40 p-5">
            <p className="text-sm font-medium text-gray-800">Cooking Preferences</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Food Type *</label>
                <select
                  value={details.cookFoodType}
                  onChange={(e) => setField('cookFoodType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select food type</option>
                  <option value="veg">Vegetarian</option>
                  <option value="non-veg">Non-Vegetarian</option>
                  <option value="both">Both Veg & Non-Veg</option>
                </select>
                {errors.cookFoodType && <p className="text-xs text-red-500 mt-1">{errors.cookFoodType}</p>}
              </div>
              {details.cookFoodType && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Meals Required *</label>
                  <div className="space-y-2">
                    {['Breakfast', 'Lunch', 'Dinner'].map(meal => (
                      <label key={meal} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={details.cookMeals.includes(meal)}
                          onChange={() => toggleInArray('cookMeals', meal)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{meal}</span>
                      </label>
                    ))}
                  </div>
                  {errors.cookMeals && <p className="text-xs text-red-500 mt-1">{errors.cookMeals}</p>}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Live-in: separate room */}
        {isLiveIn && (
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
                  className={`flex-1 p-3 border rounded-lg cursor-pointer text-center transition-all ${
                    details.hasHelperRoom === opt.value
                      ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setField('hasHelperRoom', opt.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setField('hasHelperRoom', opt.value) }
                  }}
                >
                  <div className="font-medium text-gray-900">{opt.label}</div>
                </div>
              ))}
            </div>
            {errors.hasHelperRoom && <p className="text-xs text-red-500 mt-1">{errors.hasHelperRoom}</p>}
          </div>
        )}

        {/* Household */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fp-email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              id="fp-email"
              type="email"
              value={details.email}
              onChange={(e) => setField('email', e.target.value)}
              aria-invalid={!!errors.email}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">When do you need to start? *</label>
            <input
              type="date"
              value={details.startDate}
              onChange={(e) => setField('startDate', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
            {errors.startDate && <p className="text-xs text-red-500 mt-1">{errors.startDate}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">No. of Family Members *</label>
            <select
              value={details.familySize}
              onChange={(e) => setField('familySize', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              <option value="">Select family size</option>
              <option value="1-2">1-2 members</option>
              <option value="3-4">3-4 members</option>
              <option value="5-6">5-6 members</option>
              <option value="7+">7+ members</option>
            </select>
            {errors.familySize && <p className="text-xs text-red-500 mt-1">{errors.familySize}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">House Type *</label>
            <select
              value={details.houseType}
              onChange={(e) => setField('houseType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              <option value="">Select house type</option>
              <option value="apartment">Apartment</option>
              <option value="individual-house">Individual House</option>
              <option value="standalone-house">Standalone House</option>
              <option value="villa">Villa</option>
            </select>
            {errors.houseType && <p className="text-xs text-red-500 mt-1">{errors.houseType}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">No. of Rooms *</label>
            <select
              value={details.numberOfRooms}
              onChange={(e) => setField('numberOfRooms', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              <option value="">Select number of rooms</option>
              <option value="1">1 Room (1 BHK)</option>
              <option value="2">2 Rooms (2 BHK)</option>
              <option value="3">3 Rooms (3 BHK)</option>
              <option value="4">4 Rooms (4 BHK)</option>
              <option value="5+">5+ Rooms</option>
            </select>
            {errors.numberOfRooms && <p className="text-xs text-red-500 mt-1">{errors.numberOfRooms}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Apartment / Society</label>
            <input
              type="text"
              value={details.apartment}
              onChange={(e) => setField('apartment', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              placeholder="Society, tower, flat or building name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Religion</label>
            <select
              value={details.religion}
              onChange={(e) => setField('religion', e.target.value)}
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Do you have a pet at home?</label>
            <div className="flex gap-4">
              {[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }].map(opt => (
                <div
                  key={opt.value}
                  role="button"
                  tabIndex={0}
                  className={`flex-1 p-3 border rounded-lg cursor-pointer text-center transition-all ${
                    details.hasPet === opt.value
                      ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setField('hasPet', opt.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setField('hasPet', opt.value) }
                  }}
                >
                  <div className="font-medium text-gray-900">{opt.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Gender</label>
            <select
              value={details.preferredGender}
              onChange={(e) => setField('preferredGender', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              <option value="">No preference</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
            <select
              value={details.experience}
              onChange={(e) => setField('experience', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              <option value="">No preference</option>
              <option value="entry">Entry level (0-1 years)</option>
              <option value="experienced">Experienced (2-5 years)</option>
              <option value="expert">Expert (5+ years)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Budget Range</label>
            <select
              value={details.budget}
              onChange={(e) => setField('budget', e.target.value)}
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
        </div>

        {/* Languages */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Languages</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {languages.map(language => (
              <label key={language} className="flex items-center">
                <input
                  type="checkbox"
                  checked={details.languages.includes(language)}
                  onChange={() => toggleInArray('languages', language)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">{language}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Specific requirements */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Specific Requirements</label>
          <textarea
            value={details.specificRequirements}
            onChange={(e) => setField('specificRequirements', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            placeholder="Tell us about any specific needs, preferences, or requirements..."
          />
        </div>

        {errors.submit && <p role="alert" className="text-sm text-red-600">{errors.submit}</p>}

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={submitting}
            aria-disabled={submitting}
          >
            {submitting && <LoadingSpinner size="sm" />}
            {submitting ? 'Submitting...' : 'Submit & Fast-Pace'}
            {!submitting && <CheckCircleIcon className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </div>
  )
}
