'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PhoneIcon, ChatBubbleLeftRightIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { whatsappSendUrl } from '@/lib/whatsappUrl'

/** Centralized phone number for click-to-call and WhatsApp deeplinks. */
const PHONE = '+918031411776'

/** Paths where the sticky CTA bar should be hidden (post-conversion / success pages). */
const HIDDEN_PATHS = ['/thank-you', '/agent-success', '/helper-success']

/**
 * MobileStickyCTA — fixed-bottom 3-button bar (Call · WhatsApp · Book) shown on
 * mobile/tablet (`lg:hidden`). Each button is a ≥44px tappable target.
 *
 * Hidden on conversion success pages to avoid distracting from confirmation UX.
 */
export default function MobileStickyCTA() {
  const pathname = usePathname()
  if (pathname && HIDDEN_PATHS.some((p) => pathname.startsWith(p))) {
    return null
  }

  const whatsappHref = whatsappSendUrl(
    PHONE,
    'Hi EzyHelpers, I would like to book a helper.'
  )

  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 shadow-lg grid grid-cols-3 lg:hidden"
    >
      <a
        href={`tel:${PHONE}`}
        aria-label="Call EzyHelpers"
        className="flex flex-col items-center justify-center gap-1 py-2 min-h-[56px] text-primary-600 active:bg-primary-50 transition-colors"
      >
        <PhoneIcon className="w-5 h-5" aria-hidden="true" />
        <span className="text-xs font-semibold">Call</span>
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex flex-col items-center justify-center gap-1 py-2 min-h-[56px] text-green-600 active:bg-green-50 border-x border-gray-200 transition-colors"
      >
        <ChatBubbleLeftRightIcon className="w-5 h-5" aria-hidden="true" />
        <span className="text-xs font-semibold">WhatsApp</span>
      </a>
      <Link
        href="/hire-helper"
        aria-label="Book a helper"
        className="flex flex-col items-center justify-center gap-1 py-2 min-h-[56px] text-white bg-primary-600 active:bg-primary-700 transition-colors"
      >
        <CalendarIcon className="w-5 h-5" aria-hidden="true" />
        <span className="text-xs font-semibold">Book</span>
      </Link>
    </nav>
  )
}
