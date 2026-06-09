/**
 * Shared types + helpers for the two-step hire-helper flow.
 *
 * Step 1 (on /hire-helper) collects only the essentials, creates a booking ID,
 * and hands the data to the /thank-you page via sessionStorage. The thank-you
 * page then either (a) lets the visitor "fast-pace" their request by filling in
 * the remaining details — which fires a P0 (high-priority) email — or
 * (b) auto-sends the basic details as a normal-priority lead after 30s.
 */

export interface HireHelperBasic {
  name: string
  phone: string
  city: string
  locality: string
  serviceRole: string
  otherRole: string
  serviceType: string
}

export interface HireHelperDetails {
  email: string
  apartment: string
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

/** Full snapshot handed from step 1 to the thank-you page. */
export interface HireHelperHandoff {
  requestId: string
  basic: HireHelperBasic
  createdAt: string
}

/** sessionStorage key for the step-1 → thank-you handoff. */
export const HIRE_HANDOFF_KEY = 'ezy_hire_helper_handoff_v1'

/** How long the customer has, on the thank-you page, to add details before we
 *  auto-send the basic lead as a normal-priority email. */
export const FAST_PACE_WINDOW_MS = 30_000

export const generateRequestId = () =>
  Math.random().toString(36).substring(2, 8).toUpperCase()

export function saveHandoff(handoff: HireHelperHandoff) {
  try {
    window.sessionStorage.setItem(HIRE_HANDOFF_KEY, JSON.stringify(handoff))
  } catch {
    /* storage unavailable */
  }
}

export function readHandoff(): HireHelperHandoff | null {
  try {
    const raw = window.sessionStorage.getItem(HIRE_HANDOFF_KEY)
    if (!raw) return null
    return JSON.parse(raw) as HireHelperHandoff
  } catch {
    return null
  }
}

export function clearHandoff() {
  try {
    window.sessionStorage.removeItem(HIRE_HANDOFF_KEY)
  } catch {
    /* ignore */
  }
}

/**
 * Lightweight, best-effort device/browser fingerprint captured client-side.
 * The IP address is added server-side from the request headers — it is not
 * available to the browser.
 */
export interface ClientContext {
  userAgent: string
  platform: string
  language: string
  screen: string
  timezone: string
}

export function captureClientContext(): ClientContext {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return { userAgent: '', platform: '', language: '', screen: '', timezone: '' }
  }
  let timezone = ''
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
  } catch {
    /* ignore */
  }
  const nav = navigator as Navigator & { platform?: string }
  return {
    userAgent: navigator.userAgent || '',
    platform: nav.platform || '',
    language: navigator.language || '',
    screen:
      typeof window.screen !== 'undefined'
        ? `${window.screen.width}x${window.screen.height}`
        : '',
    timezone,
  }
}

/** Parse a user-agent string into a friendly "Browser on OS / Device" label. */
export function describeUserAgent(ua: string): {
  browser: string
  os: string
  device: string
} {
  if (!ua) return { browser: 'Unknown', os: 'Unknown', device: 'Unknown' }

  // OS
  let os = 'Unknown'
  if (/Windows NT 10/.test(ua)) os = 'Windows 10/11'
  else if (/Windows NT/.test(ua)) os = 'Windows'
  else if (/iPhone|iPad|iPod/.test(ua)) os = 'iOS'
  else if (/Mac OS X/.test(ua)) os = 'macOS'
  else if (/Android/.test(ua)) os = 'Android'
  else if (/Linux/.test(ua)) os = 'Linux'

  // Browser (order matters — Edge/Chrome/Safari overlap in UA strings)
  let browser = 'Unknown'
  if (/Edg\//.test(ua)) browser = 'Edge'
  else if (/OPR\/|Opera/.test(ua)) browser = 'Opera'
  else if (/Chrome\//.test(ua) && !/Chromium/.test(ua)) browser = 'Chrome'
  else if (/Firefox\//.test(ua)) browser = 'Firefox'
  else if (/Safari\//.test(ua) && /Version\//.test(ua)) browser = 'Safari'

  // Device class
  let device = 'Desktop'
  if (/iPad|Tablet/.test(ua)) device = 'Tablet'
  else if (/Mobi|iPhone|Android.*Mobile/.test(ua)) device = 'Mobile'

  return { browser, os, device }
}
