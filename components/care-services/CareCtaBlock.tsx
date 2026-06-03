'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PhoneIcon } from '@heroicons/react/24/outline'
import { CARE_ENQUIRY_HREF } from '@/lib/careServices/registry'

const PHONE_HREF = 'tel:+918031411776'
const PHONE_LABEL = '080-31411776'

/** Maps markdown CTA lines to care enquiry form + phone actions */
export default function CareCtaBlock({ lines }: { lines: string[] }) {
  const pathname = usePathname()
  const enquiryHref = `${CARE_ENQUIRY_HREF}?source=${encodeURIComponent(pathname)}`
  if (lines.length === 0) return null

  const isCallOnly = (s: string) => /call us now/i.test(s)

  if (lines.length === 1 && isCallOnly(lines[0])) {
    return (
      <div className="not-prose my-8 flex flex-wrap gap-4">
        <a
          href={PHONE_HREF}
          className="inline-flex min-h-[48px] min-w-[44px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-600 to-primary-600 px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:from-teal-700 hover:to-primary-700"
        >
          <PhoneIcon className="h-5 w-5 shrink-0" aria-hidden />
          {PHONE_LABEL}
        </a>
      </div>
    )
  }

  const primaryLabel = lines.find((l) => !isCallOnly(l)) ?? lines[0]
  const showPhone = lines.some(isCallOnly) || lines.length >= 2

  return (
    <div className="not-prose my-8 flex flex-wrap gap-4">
      <Link
        href={enquiryHref}
        className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-gradient-to-r from-primary-600 to-blue-700 px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:from-primary-700 hover:to-blue-800"
      >
        {primaryLabel}
      </Link>
      {showPhone && (
        <a
          href={PHONE_HREF}
          className="inline-flex min-h-[48px] min-w-[44px] items-center justify-center gap-2 rounded-2xl border-2 border-primary-500 bg-white px-6 py-3.5 text-base font-bold text-primary-800 shadow-md transition hover:bg-primary-50"
        >
          <PhoneIcon className="h-5 w-5 shrink-0 text-primary-600" aria-hidden />
          Call us now
        </a>
      )}
    </div>
  )
}
