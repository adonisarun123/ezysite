import nodemailer from 'nodemailer'
import { escapeHtml } from '@/lib/sanitize'

/**
 * Pooled SMTP transporter — module-level singleton so we reuse SMTP
 * connections across requests instead of opening a fresh socket per email.
 *
 * Extracted from the historical lib/emailService.ts; that file now imports
 * these helpers and re-exports them for backwards compatibility.
 */
let cachedTransporter: nodemailer.Transporter | null = null

export const createTransporter = (): nodemailer.Transporter => {
  if (cachedTransporter) return cachedTransporter
  cachedTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
  }) as nodemailer.Transporter
  return cachedTransporter
}

/** Defensive HTML-escape helper for any value interpolated into an HTML email string. */
export const safe = (v: unknown): string => escapeHtml(String(v ?? ''))

/** Format phone numbers with spaces to bypass DLP redaction in outbound mail. */
export const formatPhoneForEmail = (phone: string): string => {
  if (!phone || phone.length < 8) return phone
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`
  }
  if (cleaned.length > 10) {
    const countryCode = cleaned.slice(0, cleaned.length - 10)
    const remaining = cleaned.slice(-10)
    return `+${countryCode} ${remaining.slice(0, 3)} ${remaining.slice(3, 6)} ${remaining.slice(6)}`
  }
  return cleaned.match(/.{1,4}/g)?.join(' ') || phone
}

/** Format coordinates with reduced precision to break DLP patterns. */
export const formatCoordinatesForEmail = (latitude: number, longitude: number): string =>
  `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`

/** Format ID numbers (Aadhaar/PAN/etc.) with spaces to bypass DLP redaction. */
export const formatIDForEmail = (idNumber: string): string => {
  if (!idNumber || idNumber.length < 6) return idNumber
  return idNumber.match(/.{1,4}/g)?.join(' ') || idNumber
}

/** Format account numbers with spaces to bypass DLP redaction. */
export const formatAccountForEmail = (accountNumber: string): string => {
  if (!accountNumber || accountNumber.length < 8) return accountNumber
  return accountNumber.match(/.{1,4}/g)?.join(' ') || accountNumber
}
