'use client'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { salesExecutiveApplicationSchema } from '@/lib/salesExecutiveApplicationSchema'
import { validateChiefOfStaffResume } from '@/lib/careersChiefOfStaffResume'

const inputClass =
  'mt-1.5 w-full rounded-lg border border-[#dadce0] bg-white px-4 py-3 text-[15px] text-[#202124] outline-none transition placeholder:text-[#80868b] focus:border-primary-600 focus:ring-1 focus:ring-primary-600'

const labelClass = 'block text-sm font-medium text-[#5f6368]'

type FormFields = {
  fullName: string
  email: string
  phone: string
  linkedinUrl: string
  languagesProficiency: string
  salesExperienceSummary: string
  dealOrFollowUpStory: string
  targetDiscipline: string
  noticePeriod: string
  additionalNotes: string
}

const defaultValues: FormFields = {
  fullName: '',
  email: '',
  phone: '',
  linkedinUrl: '',
  languagesProficiency: '',
  salesExperienceSummary: '',
  dealOrFollowUpStory: '',
  targetDiscipline: '',
  noticePeriod: '',
  additionalNotes: '',
}

type FieldKey = keyof FormFields
type FieldErrorKey = FieldKey | 'resume'
type FieldErrors = Partial<Record<FieldErrorKey | 'root', string>>

export default function SalesExecutiveApplicationForm() {
  const resumeInputRef = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

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
    const parsed = salesExecutiveApplicationSchema.safeParse({
      ...values,
      sourceUrl,
    })

    if (!parsed.success) {
      const fe: FieldErrors = {}
      const f = parsed.error.flatten().fieldErrors
      ;(Object.keys(f) as FieldKey[]).forEach((k) => {
        const msg = f[k]?.[0]
        if (msg) fe[k] = msg
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
      fd.append('fullName', d.fullName)
      fd.append('email', d.email)
      fd.append('phone', d.phone)
      fd.append('linkedinUrl', d.linkedinUrl ?? '')
      fd.append('languagesProficiency', d.languagesProficiency)
      fd.append('salesExperienceSummary', d.salesExperienceSummary)
      fd.append('dealOrFollowUpStory', d.dealOrFollowUpStory)
      fd.append('targetDiscipline', d.targetDiscipline)
      fd.append('noticePeriod', values.noticePeriod ?? '')
      fd.append('additionalNotes', values.additionalNotes ?? '')
      if (sourceUrl) fd.append('sourceUrl', sourceUrl)
      fd.append('resume', resumeFile)

      const res = await fetch('/api/careers-sales-executive', {
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
      setStatus('success')
      reset(defaultValues)
      if (resumeInputRef.current) resumeInputRef.current.value = ''
    } catch {
      setStatus('error')
    }
  }

  const err = (name: FieldKey | 'resume') =>
    fieldErrors[name] || (name !== 'resume' ? rhfErrors[name as FieldKey]?.message : undefined)

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-[#ceead6] bg-[#e6f4ea] p-8 text-center">
        <p className="text-lg font-medium text-[#137333]">Application received</p>
        <p className="mt-3 text-sm leading-relaxed text-[#3c4043]">
          Thank you. Our hiring team will review your profile. If there is a fit, we will contact
          you within about two weeks.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-primary-600 hover:underline"
        >
          Submit another application
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 font-sans">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="se-fullName" className={labelClass}>
            Full name <span className="text-[#d93025]">*</span>
          </label>
          <input
            id="se-fullName"
            {...register('fullName')}
            className={inputClass}
            autoComplete="name"
          />
          {err('fullName') && (
            <p className="mt-1.5 text-sm text-[#d93025]">{err('fullName')}</p>
          )}
        </div>
        <div>
          <label htmlFor="se-email" className={labelClass}>
            Email <span className="text-[#d93025]">*</span>
          </label>
          <input
            id="se-email"
            type="email"
            {...register('email')}
            className={inputClass}
            autoComplete="email"
          />
          {err('email') && <p className="mt-1.5 text-sm text-[#d93025]">{err('email')}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="se-phone" className={labelClass}>
          Phone (WhatsApp OK) <span className="text-[#d93025]">*</span>
        </label>
        <input
          id="se-phone"
          type="tel"
          {...register('phone')}
          className={inputClass}
          autoComplete="tel"
        />
        {err('phone') && <p className="mt-1.5 text-sm text-[#d93025]">{err('phone')}</p>}
      </div>

      <div>
        <label htmlFor="se-linkedinUrl" className={labelClass}>
          LinkedIn <span className="font-normal text-[#80868b]">(optional)</span>
        </label>
        <input
          id="se-linkedinUrl"
          {...register('linkedinUrl')}
          placeholder="https://"
          className={inputClass}
        />
        {err('linkedinUrl') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('linkedinUrl')}</p>
        )}
      </div>

      <div>
        <label htmlFor="se-resume" className={labelClass}>
          CV or résumé <span className="text-[#d93025]">*</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">PDF or Word, up to 5 MB.</p>
        <input
          id="se-resume"
          ref={resumeInputRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          disabled={status === 'submitting'}
          className="mt-2 block w-full text-sm text-[#3c4043] file:mr-4 file:rounded-lg file:border file:border-[#dadce0] file:bg-[#f8f9fa] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[#202124] hover:file:bg-[#f1f3f4]"
        />
        {err('resume') && <p className="mt-1.5 text-sm text-[#d93025]">{err('resume')}</p>}
      </div>

      <div>
        <label htmlFor="se-languagesProficiency" className={labelClass}>
          English, Hindi, and Kannada with customers <span className="text-[#d93025]">*</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">
          This role requires customer calls in all three. Briefly describe your fluency and any
          limitations.
        </p>
        <textarea
          id="se-languagesProficiency"
          {...register('languagesProficiency')}
          rows={3}
          className={`${inputClass} resize-y leading-relaxed`}
        />
        {err('languagesProficiency') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('languagesProficiency')}</p>
        )}
      </div>

      <div>
        <label htmlFor="se-salesExperienceSummary" className={labelClass}>
          Sales or customer-facing experience <span className="text-[#d93025]">*</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">
          Roles, tenure, channels (calls, retail, field), and typical targets if any.
        </p>
        <textarea
          id="se-salesExperienceSummary"
          {...register('salesExperienceSummary')}
          rows={5}
          className={`${inputClass} resize-y leading-relaxed`}
        />
        {err('salesExperienceSummary') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('salesExperienceSummary')}</p>
        )}
      </div>

      <div>
        <label htmlFor="se-dealOrFollowUpStory" className={labelClass}>
          A win or a follow-up you are proud of <span className="text-[#d93025]">*</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">
          For example: converting a hesitant customer, or closing after persistent, professional
          follow-up.
        </p>
        <textarea
          id="se-dealOrFollowUpStory"
          {...register('dealOrFollowUpStory')}
          rows={5}
          className={`${inputClass} resize-y leading-relaxed`}
        />
        {err('dealOrFollowUpStory') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('dealOrFollowUpStory')}</p>
        )}
      </div>

      <div>
        <label htmlFor="se-targetDiscipline" className={labelClass}>
          How you work with targets <span className="text-[#d93025]">*</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">
          Daily habits, prioritisation, or how you recover when you are behind plan.
        </p>
        <textarea
          id="se-targetDiscipline"
          {...register('targetDiscipline')}
          rows={4}
          className={`${inputClass} resize-y leading-relaxed`}
        />
        {err('targetDiscipline') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('targetDiscipline')}</p>
        )}
      </div>

      <div>
        <label htmlFor="se-noticePeriod" className={labelClass}>
          Notice period <span className="font-normal text-[#80868b]">(optional)</span>
        </label>
        <input
          id="se-noticePeriod"
          {...register('noticePeriod')}
          placeholder="e.g. Immediate, 15 days, 1 month"
          className={inputClass}
        />
        {err('noticePeriod') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('noticePeriod')}</p>
        )}
      </div>

      <div>
        <label htmlFor="se-additionalNotes" className={labelClass}>
          Anything else? <span className="font-normal text-[#80868b]">(optional)</span>
        </label>
        <textarea
          id="se-additionalNotes"
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
