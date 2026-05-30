'use client'

import { Suspense, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CandidateApplicationForm from '@/components/care-services/CandidateApplicationForm'
import { useUrgency } from '@/components/UrgencyContext'
import { trackCandidateLanguageSwitch } from '@/lib/analytics'
import {
  BanknotesIcon,
  HandRaisedIcon,
  HomeModernIcon,
  PhoneArrowUpRightIcon,
  BuildingOffice2Icon,
  HeartIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline'

type Lang = 'en' | 'hi'

interface LangContent {
  pill1: string
  pill2: string
  h1a: string
  h1b: string
  lead: string
  note: string
  whyEyebrow: string
  whyTitle: string
  benefits: [string, string][]
  trust: string[]
  rolesEyebrow: string
  rolesTitle: string
}

const C = {
  en: {
    pill1: '★ Trusted by 10,000+ families',
    pill2: 'Registered with DWSSC & Skill India',
    h1a: 'Build a stable nursing & caregiving career —',
    h1b: 'with dignity and respect.',
    lead:
      'EzyHelpers is hiring trained nursing and caregiving professionals across India. Timely salary, safe homes, hostel facility, insurance and 24/7 support — everything you need to grow with confidence.',
    note: 'No registration fee. Free placement. We pay you — never the other way around.',
    whyEyebrow: 'Why work with EzyHelpers',
    whyTitle: 'A career that respects you — and pays you on time.',
    benefits: [
      ['Timely Salary', 'Get paid on time, every time. Fair, transparent pay with no deductions or delays.'],
      ['Dignity & Respect', 'You are a skilled professional. We place you in homes that value your work.'],
      ['Safe & Secure Homes', 'Every household is verified and background-checked before placement.'],
      ['24/7 Emergency Support', 'A real person is always reachable if you ever feel unsafe or need help.'],
      ['Hostel Facility', 'Clean, secure accommodation available for outstation candidates.'],
      ['Insurance Coverage', 'Health and accident insurance so you and your family are protected.'],
      ['Skill Growth & Training', 'Upskilling support and certification guidance to help you earn more.'],
      ['Steady, Verified Jobs', 'Consistent placements with genuine families — not uncertain gigs.'],
      ['Zero Registration Fee', 'Joining is completely free. We earn from clients, never from caregivers.'],
    ] as [string, string][],
    trust: ['Govt. Registered (DWSSC & Skill India)', '10,000+ families trust EzyHelpers', '100% verified, safe placements', '24/7 support for every helper'],
    rolesEyebrow: 'Who we’re hiring',
    rolesTitle: 'ANM • GNM • GDA • Trained caregivers',
  },
  hi: {
    pill1: '★ 10,000+ परिवारों का भरोसा',
    pill2: 'DWSSC और स्किल इंडिया के साथ पंजीकृत',
    h1a: 'सम्मान और गरिमा के साथ —',
    h1b: 'एक स्थिर नर्सिंग और केयरगिविंग करियर बनाएं।',
    lead:
      'EzyHelpers पूरे भारत में प्रशिक्षित नर्सिंग और केयरगिविंग पेशेवरों की भर्ती कर रहा है। समय पर वेतन, सुरक्षित घर, हॉस्टल सुविधा, बीमा और 24/7 सहायता — आगे बढ़ने के लिए आपको जो चाहिए, सब कुछ।',
    note: 'कोई पंजीकरण शुल्क नहीं। मुफ़्त प्लेसमेंट। हम आपको वेतन देते हैं — कभी आपसे पैसे नहीं लेते।',
    whyEyebrow: 'EzyHelpers के साथ क्यों काम करें',
    whyTitle: 'एक ऐसा करियर जो आपका सम्मान करे — और समय पर वेतन दे।',
    benefits: [
      ['समय पर वेतन', 'हर बार समय पर भुगतान। निष्पक्ष, पारदर्शी वेतन — कोई कटौती या देरी नहीं।'],
      ['गरिमा और सम्मान', 'आप एक कुशल पेशेवर हैं। हम आपको ऐसे घरों में रखते हैं जो आपके काम की कद्र करें।'],
      ['सुरक्षित घर', 'प्लेसमेंट से पहले हर परिवार की जांच और बैकग्राउंड वेरिफिकेशन होती है।'],
      ['24/7 आपातकालीन सहायता', 'अगर आप कभी असुरक्षित महसूस करें या मदद चाहिए हो, एक असली व्यक्ति हमेशा उपलब्ध है।'],
      ['हॉस्टल सुविधा', 'बाहर से आने वाले उम्मीदवारों के लिए साफ़, सुरक्षित आवास उपलब्ध है।'],
      ['बीमा कवरेज', 'स्वास्थ्य और दुर्घटना बीमा ताकि आप और आपका परिवार सुरक्षित रहें।'],
      ['कौशल विकास और प्रशिक्षण', 'अधिक कमाने में मदद के लिए अपस्किलिंग सहायता और प्रमाणन मार्गदर्शन।'],
      ['स्थिर, सत्यापित नौकरियां', 'असली परिवारों के साथ नियमित प्लेसमेंट — कोई अनिश्चित काम नहीं।'],
      ['शून्य पंजीकरण शुल्क', 'जुड़ना पूरी तरह मुफ़्त है। हम ग्राहकों से कमाते हैं, केयरगिवर से कभी नहीं।'],
    ] as [string, string][],
    trust: ['सरकार पंजीकृत (DWSSC और स्किल इंडिया)', '10,000+ परिवारों का भरोसा', '100% सत्यापित, सुरक्षित प्लेसमेंट', 'हर हेल्पर के लिए 24/7 सहायता'],
    rolesEyebrow: 'हम किसकी भर्ती कर रहे हैं',
    rolesTitle: 'ANM • GNM • GDA • प्रशिक्षित केयरगिवर',
  },
} satisfies Record<Lang, LangContent>

const BENEFIT_ICONS = [
  BanknotesIcon, HandRaisedIcon, HomeModernIcon, PhoneArrowUpRightIcon,
  BuildingOffice2Icon, HeartIcon, ArrowTrendingUpIcon, CheckBadgeIcon, ShieldCheckIcon,
]

export default function CandidateApplyPage() {
  const [lang, setLang] = useState<Lang>('en')
  const { isUrgencyVisible } = useUrgency()
  const c = C[lang]

  const switchLang = (l: Lang) => {
    if (l === lang) return
    setLang(l)
    trackCandidateLanguageSwitch(l)
  }

  return (
    <div className={`min-h-screen bg-white text-neutral-900 ${lang === 'hi' ? 'font-sans' : ''}`}>
      <Navbar />

      {/* data-main-content makes globals.css pad the fixed Navbar (and the
          promo banner when open: 8rem/9rem), so the hero is never hidden. */}
      <div data-main-content>
        {/* language toggle bar — sticks just below the fixed Navbar, matching
            the Breadcrumb offset (banner 48px + nav 80/96px). */}
        <div
          className={`sticky z-30 border-b border-neutral-200 bg-white/95 backdrop-blur transition-all duration-300 ${
            isUrgencyVisible
              ? 'top-[calc(48px+80px)] lg:top-[calc(48px+96px)]'
              : 'top-[80px] lg:top-[96px]'
          }`}
        >
        <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-2 sm:px-6">
          <div className="inline-flex overflow-hidden rounded-full border border-primary-500 text-sm font-bold">
            <button
              type="button"
              onClick={() => switchLang('en')}
              className={lang === 'en' ? 'bg-primary-500 px-4 py-1.5 text-white' : 'bg-white px-4 py-1.5 text-primary-600'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => switchLang('hi')}
              className={lang === 'hi' ? 'bg-primary-500 px-4 py-1.5 text-white' : 'bg-white px-4 py-1.5 text-primary-600'}
            >
              हिं
            </button>
          </div>
        </div>
      </div>

      {/* hero + form */}
      <section className="bg-gradient-to-br from-[#003a63] via-primary-500 to-[#1a8fde] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:py-16">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[13px] font-semibold">{c.pill1}</span>
              <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[13px] font-semibold">{c.pill2}</span>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              {c.h1a} <span className="text-amber-300">{c.h1b}</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">{c.lead}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['ANM', 'GNM', 'GDA'].map((r) => (
                <span key={r} className="rounded-lg bg-white px-4 py-2 font-extrabold text-primary-700 shadow">{r}</span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#apply" className="rounded-full bg-white px-7 py-3.5 text-[17px] font-bold text-primary-700 hover:bg-neutral-100">
                {lang === 'hi' ? '1 मिनट में आवेदन करें →' : 'Apply in 1 minute →'}
              </a>
              <a href="tel:+918031411776" className="rounded-full border border-white/60 px-7 py-3.5 text-[17px] font-bold text-white hover:bg-white/10">
                📞 {lang === 'hi' ? 'कॉल करें' : 'Call us'}
              </a>
            </div>
            <p className="mt-4 text-sm text-white/80">{c.note}</p>
          </div>

          <Suspense fallback={<div className="rounded-2xl bg-white/10 p-6" />}>
            <CandidateApplicationForm lang={lang} />
          </Suspense>
        </div>
      </section>

      {/* trust strip */}
      <div className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 py-5 sm:px-6">
          {c.trust.map((s, i) => (
            <span key={i} className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold shadow-sm">
              <CheckBadgeIcon className="h-5 w-5 text-primary-500" /> {s}
            </span>
          ))}
        </div>
      </div>

      {/* why work with us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-center text-sm font-extrabold uppercase tracking-wider text-primary-600">{c.whyEyebrow}</p>
        <h2 className="mx-auto mt-2 max-w-2xl text-center text-3xl font-extrabold">{c.whyTitle}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.benefits.map(([title, body], i) => {
            const Icon = BENEFIT_ICONS[i] ?? CheckBadgeIcon
            return (
              <div key={title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-1.5 text-[15px] text-neutral-600">{body}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-primary-50 px-6 py-8 text-center">
          <p className="text-sm font-extrabold uppercase tracking-wider text-primary-600">{c.rolesEyebrow}</p>
          <p className="mt-2 text-2xl font-extrabold text-primary-800">{c.rolesTitle}</p>
          <a href="#apply" className="mt-5 inline-block rounded-full bg-primary-500 px-7 py-3 font-bold text-white hover:bg-primary-600">
            {lang === 'hi' ? 'अभी आवेदन करें →' : 'Apply Now →'}
          </a>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  )
}
