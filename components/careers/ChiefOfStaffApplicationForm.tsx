'use client'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { chiefOfStaffApplicationSchema } from '@/lib/chiefOfStaffApplicationSchema'
import { validateChiefOfStaffResume } from '@/lib/careersChiefOfStaffResume'

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

export default function ChiefOfStaffApplicationForm() {
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
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center">
        <p className="font-display text-lg font-semibold text-emerald-900">
          Application received
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-emerald-800/90">
          We read every submission. If there is a fit, you will hear from us within two
          weeks. Check spam folders just in case.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-emerald-800 underline-offset-4 hover:underline"
        >
          Submit another response
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-[#1d1d1f]">
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id="fullName"
            {...register('fullName')}
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none ring-primary-500/20 transition focus:border-primary-500 focus:ring-2"
            autoComplete="name"
          />
          {err('fullName') && (
            <p className="mt-1 text-sm text-red-600">{err('fullName')}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1d1d1f]">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none ring-primary-500/20 transition focus:border-primary-500 focus:ring-2"
            autoComplete="email"
          />
          {err('email') && <p className="mt-1 text-sm text-red-600">{err('email')}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#1d1d1f]">
          Phone (WhatsApp OK) <span className="text-red-600">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none ring-primary-500/20 transition focus:border-primary-500 focus:ring-2"
          autoComplete="tel"
        />
        {err('phone') && <p className="mt-1 text-sm text-red-600">{err('phone')}</p>}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="linkedinUrl" className="block text-sm font-medium text-[#1d1d1f]">
            LinkedIn URL <span className="font-normal text-[#86868b]">(optional)</span>
          </label>
          <input
            id="linkedinUrl"
            {...register('linkedinUrl')}
            placeholder="https://"
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none ring-primary-500/20 transition focus:border-primary-500 focus:ring-2"
          />
          {err('linkedinUrl') && (
            <p className="mt-1 text-sm text-red-600">{err('linkedinUrl')}</p>
          )}
        </div>
        <div>
          <label htmlFor="portfolioUrl" className="block text-sm font-medium text-[#1d1d1f]">
            Portfolio / GitHub / other link{' '}
            <span className="font-normal text-[#86868b]">(optional)</span>
          </label>
          <input
            id="portfolioUrl"
            {...register('portfolioUrl')}
            placeholder="https://"
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] outline-none ring-primary-500/20 transition focus:border-primary-500 focus:ring-2"
          />
          {err('portfolioUrl') && (
            <p className="mt-1 text-sm text-red-600">{err('portfolioUrl')}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-[#1d1d1f]">
          CV / résumé <span className="font-normal text-[#86868b]">(optional)</span>
        </label>
        <p className="mt-1 text-xs text-[#86868b]">PDF or Word, up to 5MB.</p>
        <input
          id="resume"
          ref={resumeInputRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          disabled={status === 'submitting'}
          className="mt-2 block w-full text-[15px] text-[#374151] file:mr-4 file:rounded-lg file:border-0 file:bg-[#f5f5f7] file:px-4 file:py-2.5 file:text-sm file:font-medium file:text-[#1d1d1f] hover:file:bg-[#e8e8ed]"
        />
        {err('resume') && <p className="mt-1 text-sm text-red-600">{err('resume')}</p>}
      </div>

      <div>
        <label htmlFor="problemSolved" className="block text-sm font-medium text-[#1d1d1f]">
          Tell us about a problem you solved <strong>without being told</strong>.{' '}
          <span className="text-red-600">*</span>
        </label>
        <p className="mt-1 text-xs text-[#86868b]">Context, what you did, outcome. Be specific.</p>
        <textarea
          id="problemSolved"
          {...register('problemSolved')}
          rows={5}
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] leading-relaxed outline-none ring-primary-500/20 transition focus:border-primary-500 focus:ring-2"
        />
        {err('problemSolved') && (
          <p className="mt-1 text-sm text-red-600">{err('problemSolved')}</p>
        )}
      </div>

      <div>
        <label htmlFor="improveThirtyDays" className="block text-sm font-medium text-[#1d1d1f]">
          What would you improve at EzyHelpers if you had <strong>30 days</strong>?{' '}
          <span className="text-red-600">*</span>
        </label>
        <p className="mt-1 text-xs text-[#86868b]">
          We value original thinking — it is fine if you have incomplete information.
        </p>
        <textarea
          id="improveThirtyDays"
          {...register('improveThirtyDays')}
          rows={5}
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] leading-relaxed outline-none ring-primary-500/20 transition focus:border-primary-500 focus:ring-2"
        />
        {err('improveThirtyDays') && (
          <p className="mt-1 text-sm text-red-600">{err('improveThirtyDays')}</p>
        )}
      </div>

      <div>
        <label htmlFor="builtSomething" className="block text-sm font-medium text-[#1d1d1f]">
          Have you ever <strong>built something</strong>? (even small){' '}
          <span className="text-red-600">*</span>
        </label>
        <textarea
          id="builtSomething"
          {...register('builtSomething')}
          rows={4}
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] leading-relaxed outline-none ring-primary-500/20 transition focus:border-primary-500 focus:ring-2"
        />
        {err('builtSomething') && (
          <p className="mt-1 text-sm text-red-600">{err('builtSomething')}</p>
        )}
      </div>

      <div>
        <label htmlFor="whyNotHireYou" className="block text-sm font-medium text-[#1d1d1f]">
          <strong>Why should we not hire you?</strong> <span className="text-red-600">*</span>
        </label>
        <p className="mt-1 text-xs text-[#86868b]">Honesty and self-awareness count more than polish.</p>
        <textarea
          id="whyNotHireYou"
          {...register('whyNotHireYou')}
          rows={4}
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] leading-relaxed outline-none ring-primary-500/20 transition focus:border-primary-500 focus:ring-2"
        />
        {err('whyNotHireYou') && (
          <p className="mt-1 text-sm text-red-600">{err('whyNotHireYou')}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again, or email{' '}
          <a href="mailto:contact@ezyhelpers.com" className="underline">
            contact@ezyhelpers.com
          </a>{' '}
          with the same answers.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-full bg-[#1d1d1f] py-4 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-60 sm:w-auto sm:min-w-[200px] sm:px-10"
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit application'}
      </button>
    </form>
  )
}
