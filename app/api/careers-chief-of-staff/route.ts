import { NextRequest, NextResponse } from 'next/server'
import { sendLeadEmail } from '@/lib/emailService'
import { chiefOfStaffApplicationSchema } from '@/lib/chiefOfStaffApplicationSchema'
import {
  validateChiefOfStaffResume,
  safeAttachmentFilename,
} from '@/lib/careersChiefOfStaffResume'
import { logger } from '@/lib/logger'

function textEntry(formData: FormData, key: string): string {
  const v = formData.get(key)
  return typeof v === 'string' ? v : ''
}

async function handleJsonBody(request: NextRequest) {
  const body = await request.json()
  const parsed = chiefOfStaffApplicationSchema.safeParse(body)

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors
    return NextResponse.json({ error: 'Validation failed', fieldErrors }, { status: 400 })
  }

  const data = parsed.data
  const formPayload = {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    linkedinUrl: data.linkedinUrl,
    portfolioUrl: data.portfolioUrl,
    problemSolved: data.problemSolved,
    improveThirtyDays: data.improveThirtyDays,
    builtSomething: data.builtSomething,
    whyNotHireYou: data.whyNotHireYou,
    submittedAt: new Date().toISOString(),
    sourceUrl: data.sourceUrl,
  }

  const result = await sendLeadEmail('careers_chief_of_staff', formPayload)
  if (!result.success) {
    logger.error('Careers chief of staff email failed', result.error)
    return NextResponse.json(
      { error: 'Could not submit application. Please try again or email us directly.' },
      { status: 500 }
    )
  }
  return NextResponse.json({ success: true })
}

async function handleMultipartBody(request: NextRequest) {
  const formData = await request.formData()

  const raw = {
    fullName: textEntry(formData, 'fullName'),
    email: textEntry(formData, 'email'),
    phone: textEntry(formData, 'phone'),
    linkedinUrl: textEntry(formData, 'linkedinUrl'),
    portfolioUrl: textEntry(formData, 'portfolioUrl'),
    problemSolved: textEntry(formData, 'problemSolved'),
    improveThirtyDays: textEntry(formData, 'improveThirtyDays'),
    builtSomething: textEntry(formData, 'builtSomething'),
    whyNotHireYou: textEntry(formData, 'whyNotHireYou'),
    sourceUrl: textEntry(formData, 'sourceUrl') || undefined,
  }

  const parsed = chiefOfStaffApplicationSchema.safeParse(raw)
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors
    return NextResponse.json({ error: 'Validation failed', fieldErrors }, { status: 400 })
  }

  const data = parsed.data
  const resumeField = formData.get('resume')
  let resumeFile: File | null = null
  if (resumeField instanceof File && resumeField.size > 0) {
    const resumeErr = validateChiefOfStaffResume(resumeField)
    if (resumeErr) {
      return NextResponse.json(
        { error: 'Validation failed', fieldErrors: { resume: [resumeErr] } },
        { status: 400 }
      )
    }
    resumeFile = resumeField
  }

  const formPayload = {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    linkedinUrl: data.linkedinUrl,
    portfolioUrl: data.portfolioUrl,
    problemSolved: data.problemSolved,
    improveThirtyDays: data.improveThirtyDays,
    builtSomething: data.builtSomething,
    whyNotHireYou: data.whyNotHireYou,
    submittedAt: new Date().toISOString(),
    sourceUrl: data.sourceUrl,
    resumeFileName: resumeFile ? resumeFile.name : undefined,
  }

  const attachments =
    resumeFile !== null
      ? [
          {
            filename: safeAttachmentFilename(resumeFile.name),
            content: Buffer.from(await resumeFile.arrayBuffer()),
            contentType: resumeFile.type || 'application/octet-stream',
          },
        ]
      : undefined

  const result = await sendLeadEmail('careers_chief_of_staff', formPayload, undefined, undefined, {
    attachments,
  })

  if (!result.success) {
    logger.error('Careers chief of staff email failed', result.error)
    return NextResponse.json(
      { error: 'Could not submit application. Please try again or email us directly.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || ''

    if (contentType.includes('multipart/form-data')) {
      return handleMultipartBody(request)
    }

    if (contentType.includes('application/json')) {
      return handleJsonBody(request)
    }

    return NextResponse.json({ error: 'Unsupported Content-Type' }, { status: 415 })
  } catch (e) {
    logger.error('careers-chief-of-staff POST', e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
