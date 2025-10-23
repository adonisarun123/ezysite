/**
 * Application-wide constants
 * Centralized location for magic numbers and repeated values
 */

// Validation Constants
export const VALIDATION = {
  // Age limits for helper registration
  MIN_AGE: 18,
  MAX_AGE: 60,

  // File size limits
  MAX_PHOTO_SIZE: 800 * 1024, // 800KB
  MAX_DOC_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_ID_PROOF_SIZE: 5 * 1024 * 1024, // 5MB

  // Phone number
  MIN_PHONE_LENGTH: 10,
  MAX_PHONE_LENGTH: 15,

  // Text field limits
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MAX_MESSAGE_LENGTH: 5000,
  MAX_NOTES_LENGTH: 2000,

  // Date constraints
  MAX_START_DATE_MONTHS: 1, // Maximum 1 month in future
} as const;

// Rate Limiting Constants
export const RATE_LIMITS = {
  API_REQUESTS_PER_MINUTE: 50,
  FORM_SUBMISSIONS_PER_HOUR: 10,
  EMAIL_SENDS_PER_HOUR: 100,
} as const;

// Email Configuration
export const EMAIL = {
  // Response time expectations
  CONTACT_RESPONSE_TIME_HOURS: 2,
  HIRE_HELPER_RESPONSE_TIME_MINUTES: 30,
  REQUIREMENT_RESPONSE_TIME_MINUTES: 30,

  // Retry configuration
  MAX_RETRY_ATTEMPTS: 3,
  RETRY_DELAY_MS: 2000,
  RETRY_BACKOFF_MULTIPLIER: 2,
} as const;

// Database Constants
export const DATABASE = {
  // Pagination
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,

  // Query timeouts
  QUERY_TIMEOUT_MS: 10000, // 10 seconds
} as const;

// Helper Types
export const HELPER_TYPES = {
  LIVE_IN_MAID: 'Live-in Maid',
  FULL_TIME_MAID: 'Full-time Maid',
  PART_TIME_MAID: 'Part-time Maid',
  COOK: 'Cook',
  NANNY: 'Nanny/Babysitter',
  ELDERLY_CARE: 'Elderly Care',
  DRIVER: 'Driver',
} as const;

// Service Types
export const SERVICE_TYPES = [
  'live-in',
  'full-time',
  'part-time',
  'on-demand',
  'babysitter',
  'elderly-care',
  'cook',
  'driver',
] as const;

// Supported Cities
export const CITIES = [
  'Bangalore',
  'Mumbai',
  'Delhi',
  'Noida',
  'Nagpur',
  'Lucknow',
  'Kanpur',
  'Meerut',
  'Bareilly',
] as const;

// Languages
export const LANGUAGES = [
  'English',
  'Hindi',
  'Tamil',
  'Telugu',
  'Kannada',
  'Malayalam',
  'Bengali',
  'Marathi',
] as const;

// ID Proof Types
export const ID_PROOF_TYPES = {
  AADHAAR: 'Aadhaar',
  PASSPORT: 'Passport',
  VOTER_ID: 'VoterID',
  DRIVING_LICENCE: 'DrivingLicence',
  PAN: 'PAN',
} as const;

// Regex Patterns
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[0-9]{10,15}$/,
  AADHAAR: /^[0-9]{12}$/,
  PASSPORT: /^[A-Z][0-9]{7}$/,
  VOTER_ID: /^[A-Z]{3}[0-9]{7}$/,
  DRIVING_LICENCE: /^[A-Z]{2}[0-9]{13}$/,
  PAN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
  IFSC: /^[A-Z]{4}0[A-Z0-9]{6}$/,
  PINCODE: /^[0-9]{6}$/,
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  RATE_LIMITED: 429,
  SERVER_ERROR: 500,
} as const;

// Cache TTL (in seconds)
export const CACHE_TTL = {
  STATIC_CONTENT: 3600, // 1 hour
  API_RESPONSE: 60, // 1 minute
  USER_SESSION: 86400, // 24 hours
} as const;
