import Link from 'next/link'
import { posts } from '@/lib/blogData'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface ServiceLink {
  title: string
  description: string
  href: string
}

/**
 * Maps blog tags to the most relevant service / city pages.
 * Ensures every blog post passes link equity to commercial pages
 * (blog -> service interlinking for topical authority).
 */
const TAG_SERVICE_MAP: Record<string, ServiceLink> = {
  'live-in maid': {
    title: 'Live-In Maid in Bangalore',
    description: 'Verified live-in maids for round-the-clock home support.',
    href: '/cities/bangalore/live-in-maids'
  },
  '24 hour maid': {
    title: 'Live-In Maid Services',
    description: '24/7 dedicated home help with verified, trained maids.',
    href: '/services/live-in-maids'
  },
  'full-time maid': {
    title: 'Full-Time Maid in Bangalore',
    description: 'Daytime housekeeping and cooking support, 8–10 hours daily.',
    href: '/cities/bangalore/full-time-maid'
  },
  'part-time maid': {
    title: 'Part-Time Maid Services',
    description: 'Flexible hourly help for cleaning and daily chores.',
    href: '/services/part-time-maids'
  },
  'elderly care': {
    title: 'Elderly Care in Bangalore',
    description: 'Compassionate caretakers for seniors — mobility, meals, companionship.',
    href: '/cities/bangalore/elderly-care'
  },
  '24 hour care': {
    title: 'Home Care Services — Bangalore',
    description: 'Nursing, caretakers, physiotherapy and more, at home.',
    href: '/care-services'
  },
  'live-in caretaker': {
    title: 'Elderly Care Services',
    description: 'Trained live-in caretakers for senior family members.',
    href: '/services/elderly-care'
  },
  companionship: {
    title: 'Elderly Care in Bangalore',
    description: 'Companionship and daily support for your loved ones.',
    href: '/cities/bangalore/elderly-care'
  },
  'live-in cook': {
    title: 'Cooks in Bangalore',
    description: 'Verified home cooks for daily fresh meals, all cuisines.',
    href: '/cities/bangalore/cooks'
  },
  'home cook': {
    title: 'Cook Services',
    description: 'Hire trained, verified cooks for your home kitchen.',
    href: '/services/cooks'
  },
  'kitchen hygiene': {
    title: 'Cooks in Bangalore',
    description: 'Hygiene-trained home cooks for safe, fresh meals.',
    href: '/cities/bangalore/cooks'
  },
  'indian cooks': {
    title: 'Cooks in Bangalore',
    description: 'North & South Indian cuisine specialists for your home.',
    href: '/cities/bangalore/cooks'
  },
  'live-in nanny': {
    title: 'Nanny & Babysitter in Bangalore',
    description: 'Experienced nannies for infants and young children.',
    href: '/cities/bangalore/nanny-babysitter'
  },
  childcare: {
    title: 'Nanny & Babysitter Services',
    description: 'Trusted, verified childcare professionals for your home.',
    href: '/services/nanny-babysitter'
  },
  verification: {
    title: 'Hire a Verified Helper',
    description: '100% Aadhaar-verified, background-checked domestic help.',
    href: '/hire-helper'
  },
  bangalore: {
    title: 'All Home Services in Bangalore',
    description: 'Maids, cooks, nannies, caretakers and more across Bangalore.',
    href: '/cities/bangalore'
  },
  bareilly: {
    title: 'Home Services in Bareilly',
    description: 'Verified maids, cooks and helpers across Bareilly.',
    href: '/cities/bareilly'
  },
  'domestic help': {
    title: 'All Services',
    description: 'Explore every home help service EzyHelpers offers.',
    href: '/services'
  }
}

export default function BlogServiceLinks({ postId, max = 3 }: { postId: string; max?: number }) {
  const post = posts.find((p) => p.id === postId)
  const tags = (post?.tags ?? []).map((t) => t.toLowerCase())

  const seen = new Set<string>()
  const links: ServiceLink[] = []
  for (const tag of tags) {
    const link = TAG_SERVICE_MAP[tag]
    if (link && !seen.has(link.href)) {
      seen.add(link.href)
      links.push(link)
    }
    if (links.length >= max) break
  }

  if (links.length === 0) {
    links.push(TAG_SERVICE_MAP['domestic help'])
  }

  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="container-custom max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Hire Verified Help for This</h2>
        <p className="text-gray-600 mb-8">Ready to act on what you just read? These services match this guide:</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-blue-50 hover:bg-blue-100 rounded-xl p-5 transition-colors ring-1 ring-blue-100"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{link.description}</p>
              <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                Explore Service
                <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
