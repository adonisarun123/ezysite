'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { chiefOfStaffApplicationSchema } from '@/lib/chiefOfStaffApplicationSchema'
import { validateChiefOfStaffResume } from '@/lib/careersChiefOfStaffResume'

const inputClass =
  'mt-1.5 w-full rounded-lg border border-[#dadce0] bg-white px-4 py-3 text-[15px] text-[#202124] outline-none transition placeholder:text-[#80868b] focus:border-primary-600 focus:ring-1 focus:ring-primary-600'

type FormFields = {
  fullName: string
  email: string
  phone: string
  linkedinUrl: string
  portfolioUrl: string
  problemSolved: string
  improveThirtyDays: string
  builtSomething: string
  whyNotHireYou: string
}

const defaultValues: FormFields = {
  fullName: '',
  email: '',
  phone: '',
  linkedinUrl: '',
  portfolioUrl: '',
  problemSolved: '',
  improveThirtyDays: '',
  builtSomething: '',
  whyNotHireYou: '',
}

type FieldKey = keyof FormFields
type FieldErrorKey = FieldKey | 'resume'
type FieldErrors = Partial<Record<FieldErrorKey | 'root', string>>

const labelClass = 'block text-sm font-medium text-[#5f6368]'

export default function ChiefOfStaffApplicationForm() {
  const router = useRouter()
  const resumeInputRef = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
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
    const parsed = chiefOfStaffApplicationSchema.safeParse({
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
    if (resumeFile && resumeFile.size > 0) {
      const resumeErr = validateChiefOfStaffResume(resumeFile)
      if (resumeErr) {
        setFieldErrors({ resume: resumeErr })
        return
      }
    }

    setStatus('submitting')
    try {
      const fd = new FormData()
      const d = parsed.data
      fd.append('fullName', d.fullName)
      fd.append('email', d.email)
      fd.append('phone', d.phone)
      fd.append('linkedinUrl', d.linkedinUrl ?? '')
      fd.append('portfolioUrl', d.portfolioUrl ?? '')
      fd.append('problemSolved', d.problemSolved)
      fd.append('improveThirtyDays', d.improveThirtyDays)
      fd.append('builtSomething', d.builtSomething)
      fd.append('whyNotHireYou', d.whyNotHireYou)
      if (sourceUrl) fd.append('sourceUrl', sourceUrl)
      if (resumeFile && resumeFile.size > 0) {
        fd.append('resume', resumeFile)
      }

      const res = await fetch('/api/careers-chief-of-staff', {
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
          <label htmlFor="fullName" className={labelClass}>
            Full name <span className="text-[#d93025]">*</span>
          </label>
          <input
            id="fullName"
            {...register('fullName')}
            className={inputClass}
            autoComplete="name"
          />
          {err('fullName') && (
            <p className="mt-1.5 text-sm text-[#d93025]">{err('fullName')}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-[#d93025]">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={inputClass}
            autoComplete="email"
          />
          {err('email') && <p className="mt-1.5 text-sm text-[#d93025]">{err('email')}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone (WhatsApp OK) <span className="text-[#d93025]">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className={inputClass}
          autoComplete="tel"
        />
        {err('phone') && <p className="mt-1.5 text-sm text-[#d93025]">{err('phone')}</p>}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="linkedinUrl" className={labelClass}>
            LinkedIn <span className="font-normal text-[#80868b]">(optional)</span>
          </label>
          <input
            id="linkedinUrl"
            {...register('linkedinUrl')}
            placeholder="https://"
            className={inputClass}
          />
          {err('linkedinUrl') && (
            <p className="mt-1.5 text-sm text-[#d93025]">{err('linkedinUrl')}</p>
          )}
        </div>
        <div>
          <label htmlFor="portfolioUrl" className={labelClass}>
            Portfolio or GitHub <span className="font-normal text-[#80868b]">(optional)</span>
          </label>
          <input
            id="portfolioUrl"
            {...register('portfolioUrl')}
            placeholder="https://"
            className={inputClass}
          />
          {err('portfolioUrl') && (
            <p className="mt-1.5 text-sm text-[#d93025]">{err('portfolioUrl')}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="resume" className={labelClass}>
          CV or résumé <span className="font-normal text-[#80868b]">(optional)</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">PDF or Word, up to 5 MB.</p>
        <input
          id="resume"
          ref={resumeInputRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          disabled={status === 'submitting'}
          className="mt-2 block w-full text-sm text-[#3c4043] file:mr-4 file:rounded-lg file:border file:border-[#dadce0] file:bg-[#f8f9fa] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[#202124] hover:file:bg-[#f1f3f4]"
        />
        {err('resume') && <p className="mt-1.5 text-sm text-[#d93025]">{err('resume')}</p>}
      </div>

      <div>
        <label htmlFor="problemSolved" className={labelClass}>
          Describe a problem you solved without being told to{' '}
          <span className="text-[#d93025]">*</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">Context, what you did, outcome. Be specific.</p>
        <textarea
          id="problemSolved"
          {...register('problemSolved')}
          rows={5}
          className={`${inputClass} resize-y leading-relaxed`}
        />
        {err('problemSolved') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('problemSolved')}</p>
        )}
      </div>

      <div>
        <label htmlFor="improveThirtyDays" className={labelClass}>
          What would you improve at EzyHelpers in 30 days?{' '}
          <span className="text-[#d93025]">*</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">
          Incomplete information is fine — we care how you think.
        </p>
        <textarea
          id="improveThirtyDays"
          {...register('improveThirtyDays')}
          rows={5}
          className={`${inputClass} resize-y leading-relaxed`}
        />
        {err('improveThirtyDays') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('improveThirtyDays')}</p>
        )}
      </div>

      <div>
        <label htmlFor="builtSomething" className={labelClass}>
          Have you built something, even small? <span className="text-[#d93025]">*</span>
        </label>
        <textarea
          id="builtSomething"
          {...register('builtSomething')}
          rows={4}
          className={`${inputClass} resize-y leading-relaxed`}
        />
        {err('builtSomething') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('builtSomething')}</p>
        )}
      </div>

      <div>
        <label htmlFor="whyNotHireYou" className={labelClass}>
          Why should we not hire you? <span className="text-[#d93025]">*</span>
        </label>
        <p className="mt-1 text-xs text-[#5f6368]">Honesty and self-awareness matter more than polish.</p>
        <textarea
          id="whyNotHireYou"
          {...register('whyNotHireYou')}
          rows={4}
          className={`${inputClass} resize-y leading-relaxed`}
        />
        {err('whyNotHireYou') && (
          <p className="mt-1.5 text-sm text-[#d93025]">{err('whyNotHireYou')}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-sm text-[#d93025]">
          Something went wrong. Try again, or email{' '}
          <a href="mailto:contact@ezyhelpers.com" className="font-medium text-primary-600 underline">
            contact@ezyhelpers.com
          </a>{' '}
          with the same answers.
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
