import { NextRequest, NextResponse } from 'next/server'
import { sendLeadEmail } from '@/lib/emailService'
import { careersRoleApplicationSchema } from '@/lib/careersRoleApplicationSchema'
import {
  validateChiefOfStaffResume,
  safeAttachmentFilename,
} from '@/lib/careersChiefOfStaffResume'
import { logger } from '@/lib/logger'

function textEntry(formData: FormData, key: string): string {
  const v = formData.get(key)
  return typeof v === 'string' ? v : ''
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || ''
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json(
        { error: 'Submit using the form on the careers page (multipart upload with CV).' },
        { status: 415 }
      )
    }

    const formData = await request.formData()

    const raw = {
      jobSlug: textEntry(formData, 'jobSlug'),
      jobTitle: textEntry(formData, 'jobTitle'),
      fullName: textEntry(formData, 'fullName'),
      email: textEntry(formData, 'email'),
      phone: textEntry(formData, 'phone'),
      linkedinUrl: textEntry(formData, 'linkedinUrl'),
      relevantExperience: textEntry(formData, 'relevantExperience'),
      whyThisRole: textEntry(formData, 'whyThisRole'),
      noticePeriod: textEntry(formData, 'noticePeriod'),
      additionalNotes: textEntry(formData, 'additionalNotes'),
      sourceUrl: textEntry(formData, 'sourceUrl') || undefined,
    }

    const parsed = careersRoleApplicationSchema.safeParse(raw)
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors
      return NextResponse.json({ error: 'Validation failed', fieldErrors }, { status: 400 })
    }

    const data = parsed.data
    const resumeField = formData.get('resume')

    if (!(resumeField instanceof File) || resumeField.size === 0) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          fieldErrors: { resume: ['Please upload your CV (PDF or Word, up to 5 MB).'] },
        },
        { status: 400 }
      )
    }

    const resumeErr = validateChiefOfStaffResume(resumeField)
    if (resumeErr) {
      return NextResponse.json(
        { error: 'Validation failed', fieldErrors: { resume: [resumeErr] } },
        { status: 400 }
      )
    }

    const formPayload = {
      jobSlug: data.jobSlug,
      jobTitle: data.jobTitle,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      linkedinUrl: data.linkedinUrl,
      relevantExperience: data.relevantExperience,
      whyThisRole: data.whyThisRole,
      noticePeriod: data.noticePeriod,
      additionalNotes: data.additionalNotes,
      submittedAt: new Date().toISOString(),
      sourceUrl: data.sourceUrl,
      resumeFileName: resumeField.name,
    }

    const attachments = [
      {
        filename: safeAttachmentFilename(resumeField.name),
        content: Buffer.from(await resumeField.arrayBuffer()),
        contentType: resumeField.type || 'application/octet-stream',
      },
    ]

    const result = await sendLeadEmail('careers_role_application', formPayload, undefined, undefined, {
      attachments,
    })

    if (!result.success) {
      logger.error('Careers role application email failed', result.error)
      return NextResponse.json(
        { error: 'Could not submit application. Please try again or email us directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    logger.error('careers-role-application POST', e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
