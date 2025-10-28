/**
 * Input sanitization utilities to prevent XSS attacks
 */

/**
 * Escapes HTML special characters to prevent XSS in HTML context
 */
export function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';

  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Sanitizes user input for use in email templates
 * Removes potentially dangerous HTML/script tags
 */
export function sanitizeForEmail(input: string): string {
  if (!input) return '';

  // Remove script tags and their content
  let sanitized = input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Remove style tags
  sanitized = sanitized.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // Remove iframe tags
  sanitized = sanitized.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');

  // Remove dangerous event handlers
  sanitized = sanitized.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
  sanitized = sanitized.replace(/on\w+\s*=\s*[^\s>]*/gi, '');

  // Remove javascript: protocol
  sanitized = sanitized.replace(/javascript:/gi, '');

  // Remove data: protocol (can be used for XSS)
  sanitized = sanitized.replace(/data:text\/html/gi, '');

  return sanitized;
}

/**
 * Validates and sanitizes email addresses
 */
export function sanitizeEmail(email: string): string {
  if (!email) return '';

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const trimmed = email.trim().toLowerCase();

  if (!emailRegex.test(trimmed)) {
    throw new Error('Invalid email format');
  }

  return trimmed;
}

/**
 * Validates and sanitizes phone numbers
 * Removes all non-digit characters
 */
export function sanitizePhone(phone: string): string {
  if (!phone) return '';

  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');

  // Validate length (minimum 10 digits, maximum 15 for international)
  if (cleaned.length < 10 || cleaned.length > 15) {
    throw new Error('Invalid phone number format');
  }

  return cleaned;
}

/**
 * Sanitizes numeric inputs
 */
export function sanitizeNumber(input: string | number): number {
  const num = typeof input === 'string' ? parseFloat(input) : input;

  if (isNaN(num) || !isFinite(num)) {
    throw new Error('Invalid number format');
  }

  return num;
}

/**
 * Sanitizes text for safe display in HTML
 * Preserves line breaks and basic formatting
 */
export function sanitizeText(text: string, maxLength?: number): string {
  if (!text) return '';

  let sanitized = escapeHtml(text);

  // Truncate if maxLength specified
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength) + '...';
  }

  return sanitized;
}

/**
 * Validates URL and returns sanitized version
 */
export function sanitizeUrl(url: string): string {
  if (!url) return '';

  const trimmed = url.trim();

  // Only allow http and https protocols
  const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

  if (!urlRegex.test(trimmed)) {
    throw new Error('Invalid URL format');
  }

  return trimmed;
}
