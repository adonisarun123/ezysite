'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { careersRoleApplicationSchema } from '@/lib/careersRoleApplicationSchema'
import { validateChiefOfStaffResume } from '@/lib/careersChiefOfStaffResume'

const inputClass =
  'mt-1.5 w-full rounded-lg border border-[#dadce0] bg-white px-4 py-3 text-[15px] text-[#202124] outline-none transition placeholder:text-[#80868b] focus:border-primary-600 focus:ring-1 focus:ring-primary-600'

const labelClass = 'block text-sm font-medium text-[#5f6368]'

type FormFields = {
  fullName: string
  email: string
  phone: string
  linkedinUrl: string
  relevantExperience: string
  whyThisRole: string
  noticePeriod: string
  additionalNotes: string
}

type FieldKey = keyof FormFields
type FieldErrorKey = FieldKey | 'resume'
type FieldErrors = Partial<Record<FieldErrorKey | 'root', string>>

export type CareersRoleApplicationFormProps = {
  jobSlug: string
  jobTitle: string
  /** Prefix for input ids (unique per page when multiple forms could mount) */
  idPrefix: string
}

export default function CareersRoleApplicationForm({
  jobSlug,
  jobTitle,
  idPrefix,
}: CareersRoleApplicationFormProps) {
  const router = useRouter()
  const resumeInputRef = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const defaultValues: FormFields = {
    fullName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    relevantExperience: '',
    whyThisRole: '',
    noticePeriod: '',
    additionalNotes: '',
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: rhfErrors },
  } = useForm<FormFields>({ defaultValues })

  async function onSubmit(values: FormFields) {
    setFieldErrors({})
    const sourceUrl =
      typeof window !== 'undefined' ? window.location.href : undefined
    const parsed = careersRoleApplicationSchema.safeParse({
      jobSlug,
      jobTitle,
      ...values,
      sourceUrl,
    })

    if (!parsed.success) {
      const fe: FieldErrors = {}
      const f = parsed.error.flatten().fieldErrors
      ;(Object.keys(f) as (FieldKey | 'jobSlug' | 'jobTitle')[]).forEach((k) => {
        if (k === 'jobSlug' || k === 'jobTitle') return
        const msg = f[k as keyof typeof f]?.[0]
        if (msg) fe[k as FieldKey] = msg
      })
      setFieldErrors(fe)
      return
    }

    const resumeFile = resumeInputRef.current?.files?.[0] ?? null
    if (!resumeFile || resumeFile.size === 0) {
      setFieldErrors({ resume: 'Please upload your CV (PDF or Word, up to 5 MB).' })
      return
    }
    const resumeErr = validateChiefOfStaffResume(resumeFile)
    if (resumeErr) {
      setFieldErrors({ resume: resumeErr })
      return
    }

    setStatus('submitting')
    try {
      const fd = new FormData()
      const d = parsed.data
      fd.append('jobSlug', d.jobSlug)
      fd.append('jobTitle', d.jobTitle)
      fd.append('fullName', d.fullName)
      fd.append('email', d.email)
      fd.append('phone', d.phone)
      fd.append('linkedinUrl', d.linkedinUrl ?? '')
      fd.append('relevantExperience', d.relevantExperience)
      fd.append('whyThisRole', d.whyThisRole)
      fd.append('noticePeriod', values.noticePeriod ?? '')
      fd.append('additionalNotes', values.additionalNotes ?? '')
      if (sourceUrl) fd.append('sourceUrl', sourceUrl)
      fd.append('resume', resumeFile)

      const res = await fetch('/api/careers-role-application', {
        method: 'POST',
        body: fd,
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        if (json.fieldErrors) {
          const fe: FieldErrors = {}
          Object.entries(json.fieldErrors).forEach(([k, v]) => {
            if (Array.isArray(v) && v[0]) fe[k as FieldErrorKey] = v[0] as string
          })
          setFieldErrors(fe)
        }
        setStatus('error')
        return
      }
      reset(defaultValues)
      if (resumeInputRef.current) resumeInputRef.current.value = ''
      router.push('/thank-you?type=career')
    } catch {
      setStatus('error')
    }
  }

  const err = (name: FieldKey | 'resume') =>
    fieldErrors[name] || (name !== 'resume' ? rhfErrors[name as FieldKey]?.message : undefined)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 font-sans">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-fullName`} className={labelClass}>
            Full name <span className="text-[#d93025]">*</span>
          </label>
          <input
            id={`${idPrefix}-fullName`}
            {...register('fullName')}
            className={inputClass}
            autoComplete="name"
          />
          {err('fullName') && (
            <p className="mt-1.5 text-sm text-[#d93025]">{err('fullName')}</p>
          )}
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelClass}>
            Email <span className="text-[#d93025]">*</span>
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            {...register('email')}
            className={inputClass}
            autoComplete="email"
          />
          {err('email') && <p className="mt-1.5 text-sm text-[#d93025]">{err('email')}</p>}
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-phone`} className={labelClass}>
          Phone (WhatsApp OK) <span className="text-[#d93025]">*</span>
        </label>
        <input
          id={`${idPrefix}-phone`}
          type="tel"
          {...register('phone')}
          className={inputClass}
          autoComplete="tel"
        />
        {err('phone') && <p className="mt-1.5 text-sm text-[#d93025]">{err('phone')}</p>}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-linkedinUrl`} className={labelClass}>
          LinkedIn <span className="font-normal text-[#80868b]">(optional)</span>
        </label>
        <input
          id={`${idPrefix}-linkedinUrl`}
          {...register('linkedinUrl')}
          placeholder="https://"
          className={inputClass}
        />
        {err('linkedinUrl') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('linkedinUrl')}</p>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-resume`} className={labelClass}>
          CV or résumé <span className="text-[#d93025]">*</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">PDF or Word, up to 5 MB.</p>
        <input
          id={`${idPrefix}-resume`}
          ref={resumeInputRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          disabled={status === 'submitting'}
          className="mt-2 block w-full text-sm text-[#3c4043] file:mr-4 file:rounded-lg file:border file:border-[#dadce0] file:bg-[#f8f9fa] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[#202124] hover:file:bg-[#f1f3f4]"
        />
        {err('resume') && <p className="mt-1.5 text-sm text-[#d93025]">{err('resume')}</p>}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-relevantExperience`} className={labelClass}>
          Relevant experience <span className="text-[#d93025]">*</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">
          Roles, tenure, and specifics that match this opening (field work, team leadership,
          verification, sourcing, ops — as applicable).
        </p>
        <textarea
          id={`${idPrefix}-relevantExperience`}
          {...register('relevantExperience')}
          rows={6}
          className={`${inputClass} resize-y leading-relaxed`}
        />
        {err('relevantExperience') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('relevantExperience')}</p>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-whyThisRole`} className={labelClass}>
          Why this role at EzyHelpers? <span className="text-[#d93025]">*</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">
          What draws you to this position and how you would contribute in the first few months.
        </p>
        <textarea
          id={`${idPrefix}-whyThisRole`}
          {...register('whyThisRole')}
          rows={5}
          className={`${inputClass} resize-y leading-relaxed`}
        />
        {err('whyThisRole') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('whyThisRole')}</p>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-noticePeriod`} className={labelClass}>
          Notice period <span className="font-normal text-[#80868b]">(optional)</span>
        </label>
        <input
          id={`${idPrefix}-noticePeriod`}
          {...register('noticePeriod')}
          placeholder="e.g. Immediate, 15 days, 1 month"
          className={inputClass}
        />
        {err('noticePeriod') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('noticePeriod')}</p>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-additionalNotes`} className={labelClass}>
          Anything else? <span className="font-normal text-[#80868b]">(optional)</span>
        </label>
        <textarea
          id={`${idPrefix}-additionalNotes`}
          {...register('additionalNotes')}
          rows={3}
          className={`${inputClass} resize-y leading-relaxed`}
        />
        {err('additionalNotes') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('additionalNotes')}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-sm text-[#d93025]">
          Something went wrong. Try again, or email{' '}
          <a href="mailto:contact@ezyhelpers.com" className="font-medium text-primary-600 underline">
            contact@ezyhelpers.com
          </a>{' '}
          with your CV.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-full bg-primary-600 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-primary-700 disabled:opacity-50 sm:w-auto sm:min-w-[200px] sm:px-10"
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit application'}
      </button>
    </form>
  )
}
