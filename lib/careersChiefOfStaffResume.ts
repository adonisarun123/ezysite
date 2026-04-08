import path from 'path'

export const CHIEF_OF_STAFF_RESUME_MAX_BYTES = 5 * 1024 * 1024

const ALLOWED_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
])

export function resumeExt(name: string): string {
  const m = /\.([a-z0-9]+)$/i.exec(name)
  return m ? m[1].toLowerCase() : ''
}

/** Returns an error message if invalid; otherwise null. */
export function validateChiefOfStaffResume(file: File): string | null {
  if (file.size === 0) return 'File is empty'
  if (file.size > CHIEF_OF_STAFF_RESUME_MAX_BYTES) {
    return 'File must be 5MB or smaller'
  }
  const ext = resumeExt(file.name)
  const extOk = ['pdf', 'doc', 'docx'].includes(ext)
  const mimeOk = ALLOWED_MIME.has(file.type)
  if (!extOk && !mimeOk) {
    return 'Upload PDF or Word (.pdf, .doc, .docx)'
  }
  return null
}

export function safeAttachmentFilename(original: string): string {
  const base = path.basename(original).replace(/[^a-zA-Z0-9._-]/g, '_')
  const trimmed = base.slice(0, 120)
  return trimmed || 'resume.pdf'
}
