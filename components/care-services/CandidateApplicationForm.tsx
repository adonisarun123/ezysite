'use client'

import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import {
  trackCandidateApplicationStart,
  trackCandidateApplicationSubmit,
} from '@/lib/analytics'

type Lang = 'en' | 'hi'

interface Props {
  lang: Lang
}

const FIELD =
  'mt-1.5 block w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-[15px] text-neutral-900 placeholder:text-neutral-400 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/15 hover:border-neutral-300'
const LABEL = 'block text-sm font-semibold text-neutral-900'

const T = {
  en: {
    title: 'Apply for a Job',
    sub: 'Fill this 1-minute form. Our team calls you back within 24 hours.',
    name: 'Full Name',
    namePh: 'Your full name',
    mobile: 'Mobile Number',
    mobilePh: '10-digit mobile number',
    ctype: 'Candidate Type',
    select: 'Select your role',
    anm: 'ANM (Auxiliary Nurse Midwife)',
    gnm: 'GNM (General Nursing & Midwifery)',
    gda: 'GDA (General Duty Assistant)',
    other: 'Other (please specify)',
    otherPh: 'Please specify your role / qualification',
    area: 'Area of Residence',
    areaPh: 'City / locality (e.g. Whitefield, Bangalore)',
    consent:
      'I agree to be contacted by EzyHelpers by phone, SMS or WhatsApp regarding job opportunities.',
    submit: 'Submit Application',
    submitting: 'Submitting…',
    foot: 'Your details are safe & confidential. We never share your information.',
    errName: 'Please enter your name.',
    errMobile: 'Enter a valid 10-digit mobile number.',
    errCtype: 'Please select your candidate type.',
    errOther: 'Please specify your role.',
    errArea: 'Please enter your area of residence.',
    errConsent: 'Please give consent so we can call you.',
    errServer: 'Something went wrong. Please call us at 080-31411776.',
    sucTitle: 'Application received!',
    sucBody:
      'Thank you. Our hiring team will call you within 24 hours on the number you provided.',
    sucCall: 'Or call us now: 080-31411776',
  },
  hi: {
    title: 'नौकरी के लिए आवेदन करें',
    sub: 'यह 1 मिनट का फॉर्म भरें। हमारी टीम 24 घंटे के भीतर आपको कॉल करेगी।',
    name: 'पूरा नाम',
    namePh: 'आपका पूरा नाम',
    mobile: 'मोबाइल नंबर',
    mobilePh: '10 अंकों का मोबाइल नंबर',
    ctype: 'उम्मीदवार का प्रकार',
    select: 'अपनी भूमिका चुनें',
    anm: 'ANM (सहायक नर्स मिडवाइफ)',
    gnm: 'GNM (जनरल नर्सिंग और मिडवाइफरी)',
    gda: 'GDA (जनरल ड्यूटी असिस्टेंट)',
    other: 'अन्य (कृपया बताएं)',
    otherPh: 'कृपया अपनी भूमिका / योग्यता बताएं',
    area: 'निवास का क्षेत्र',
    areaPh: 'शहर / इलाका (जैसे व्हाइटफील्ड, बैंगलोर)',
    consent:
      'मैं नौकरी के अवसरों के संबंध में EzyHelpers द्वारा फ़ोन, SMS या WhatsApp पर संपर्क किए जाने के लिए सहमत हूँ।',
    submit: 'आवेदन जमा करें',
    submitting: 'जमा हो रहा है…',
    foot: 'आपकी जानकारी सुरक्षित और गोपनीय है। हम इसे कभी साझा नहीं करते।',
    errName: 'कृपया अपना नाम दर्ज करें।',
    errMobile: 'कृपया मान्य 10 अंकों का मोबाइल नंबर दर्ज करें।',
    errCtype: 'कृपया अपना उम्मीदवार प्रकार चुनें।',
    errOther: 'कृपया अपनी भूमिका बताएं।',
    errArea: 'कृपया अपना निवास क्षेत्र दर्ज करें।',
    errConsent: 'कृपया सहमति दें ताकि हम आपको कॉल कर सकें।',
    errServer: 'कुछ गड़बड़ हो गई। कृपया हमें 080-31411776 पर कॉल करें।',
    sucTitle: 'आवेदन प्राप्त हुआ!',
    sucBody:
      'धन्यवाद। हमारी भर्ती टीम 24 घंटे के भीतर आपके दिए गए नंबर पर कॉल करेगी।',
    sucCall: 'या अभी कॉल करें: 080-31411776',
  },
} as const

export default function CandidateApplicationForm({ lang }: Props) {
  const searchParams = useSearchParams()
  const sourcePath = searchParams.get('source')
  const t = T[lang]

  const [candidateType, setCandidateType] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const startedRef = useRef(false)

  const onFirstInteraction = () => {
    if (!startedRef.current) {
      startedRef.current = true
      trackCandidateApplicationStart(sourcePath)
    }
  }

  // Re-validate language-sensitive messages if language changes after an error
  useEffect(() => {
    setErrors((prev) => (Object.keys(prev).length ? {} : prev))
  }, [lang])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      mobile: (form.elements.namedItem('mobile') as HTMLInputElement).value.replace(/\D/g, ''),
      candidateType,
      otherRole:
        candidateType === 'Other'
          ? (form.elements.namedItem('otherRole') as HTMLInputElement).value.trim()
          : '',
      area: (form.elements.namedItem('area') as HTMLInputElement).value.trim(),
      consentToCall: (form.elements.namedItem('consent') as HTMLInputElement).checked ? 'Yes' : 'No',
      website: (form.elements.namedItem('website') as HTMLInputElement).value, // honeypot
      language: lang,
      sourceUrl: typeof window !== 'undefined' ? window.location.href : undefined,
    }

    const next: Record<string, string> = {}
    if (!data.name) next.name = t.errName
    if (!/^[6-9]\d{9}$/.test(data.mobile)) next.mobile = t.errMobile
    if (!['ANM', 'GNM', 'GDA', 'Other'].includes(candidateType)) next.candidateType = t.errCtype
    if (candidateType === 'Other' && !data.otherRole) next.otherRole = t.errOther
    if (!data.area) next.area = t.errArea
    if (data.consentToCall !== 'Yes') next.consent = t.errConsent
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus('submitting')
    try {
      const res = await fetch('/api/candidate-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('request_failed')
      setStatus('success')
      trackCandidateApplicationSubmit({
        candidateType,
        area: data.area,
        language: lang,
      })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-neutral-100">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
          <CheckCircleIcon className="h-9 w-9" />
        </div>
        <h2 className="text-xl font-bold text-neutral-900">{t.sucTitle}</h2>
        <p className="mt-2 text-neutral-600">{t.sucBody}</p>
        <a
          href="tel:+918031411776"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
        >
          <PhoneIcon className="h-5 w-5" /> {t.sucCall}
        </a>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-neutral-100 sm:p-7" id="apply">
      <h2 className="text-xl font-bold text-neutral-900">{t.title}</h2>
      <p className="mt-1 text-sm text-neutral-600">{t.sub}</p>

      <form onSubmit={handleSubmit} onInput={onFirstInteraction} className="mt-5 space-y-4" noValidate>
        {/* honeypot */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-px w-px opacity-0"
        />

        <div>
          <label htmlFor="name" className={LABEL}>
            {t.name} <span className="text-red-500">*</span>
          </label>
          <input id="name" name="name" type="text" className={FIELD} placeholder={t.namePh} autoComplete="name" />
          {errors.name && <FieldError msg={errors.name} />}
        </div>

        <div>
          <label htmlFor="mobile" className={LABEL}>
            {t.mobile} <span className="text-red-500">*</span>
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            className={FIELD}
            placeholder={t.mobilePh}
            autoComplete="tel"
            onInput={(e) => {
              const el = e.currentTarget
              el.value = el.value.replace(/\D/g, '').slice(0, 10)
            }}
          />
          {errors.mobile && <FieldError msg={errors.mobile} />}
        </div>

        <div>
          <label htmlFor="candidateType" className={LABEL}>
            {t.ctype} <span className="text-red-500">*</span>
          </label>
          <select
            id="candidateType"
            name="candidateType"
            className={FIELD}
            value={candidateType}
            onChange={(e) => setCandidateType(e.target.value)}
          >
            <option value="">{t.select}</option>
            <option value="ANM">{t.anm}</option>
            <option value="GNM">{t.gnm}</option>
            <option value="GDA">{t.gda}</option>
            <option value="Other">{t.other}</option>
          </select>
          {errors.candidateType && <FieldError msg={errors.candidateType} />}
          {candidateType === 'Other' && (
            <div className="mt-2.5">
              <input id="otherRole" name="otherRole" type="text" className={FIELD} placeholder={t.otherPh} />
              {errors.otherRole && <FieldError msg={errors.otherRole} />}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="area" className={LABEL}>
            {t.area} <span className="text-red-500">*</span>
          </label>
          <input id="area" name="area" type="text" className={FIELD} placeholder={t.areaPh} autoComplete="address-level2" />
          {errors.area && <FieldError msg={errors.area} />}
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-primary-100 bg-primary-50 p-3">
          <input id="consent" name="consent" type="checkbox" className="mt-0.5 h-5 w-5 flex-none accent-primary-500" />
          <label htmlFor="consent" className="text-[12.5px] leading-snug text-neutral-600">
            {t.consent} <span className="text-red-500">*</span>
          </label>
        </div>
        {errors.consent && <FieldError msg={errors.consent} />}

        {status === 'error' && (
          <p className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            <ExclamationCircleIcon className="h-5 w-5 flex-none" /> {t.errServer}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-full bg-primary-500 px-6 py-3.5 text-[17px] font-bold text-white transition hover:bg-primary-600 disabled:opacity-60"
        >
          {status === 'submitting' ? t.submitting : t.submit}
        </button>
        <p className="text-center text-xs text-neutral-500">🔒 {t.foot}</p>
      </form>
    </div>
  )
}

function FieldError({ msg }: { msg: string }) {
  return <p className="mt-1.5 text-[12.5px] text-red-600">{msg}</p>
}
