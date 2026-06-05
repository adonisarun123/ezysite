import Image from 'next/image'
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

/**
 * AffiliationsSection — government recognition / affiliation logo bar.
 *
 * Sits directly below the homepage hero: the first thing a visitor sees after
 * the headline is that EzyHelpers is recognised by Government of India skill
 * and startup bodies. Logos render on white cards for consistent contrast
 * (several source logos have dark/transparent backgrounds).
 *
 * NOTE: /affiliations/hmcgssc.png must be added to public/affiliations/
 * before deploy (slot is wired below).
 */

const AFFILIATIONS = [
  {
    name: 'Skill India',
    detail: 'National Skill Development Mission',
    src: '/affiliations/skill-india.svg',
    width: 202,
    height: 55,
  },
  {
    name: 'Ministry of Skill Development & Entrepreneurship',
    detail: 'Government of India',
    src: '/affiliations/ministry.svg',
    width: 171,
    height: 63,
  },
  {
    name: 'Startup India — DPIIT Recognised',
    detail: 'Govt. of India startup recognition',
    src: '/affiliations/startup-india-logo.png',
    width: 259,
    height: 194,
  },
  {
    name: 'NSDC',
    detail: 'National Skill Development Corporation',
    src: '/affiliations/nsdc.svg',
    width: 128,
    height: 128,
  },
  {
    name: 'HMCGSSC',
    detail: 'Home Management & Care Givers Sector Skill Council',
    src: '/affiliations/hmcgssc.png',
    width: 200,
    height: 200,
  },
] as const

export default function AffiliationsSection() {
  return (
    <section
      aria-labelledby="affiliations-heading"
      className="border-y border-gray-100 bg-gray-50/60 py-12 sm:py-16"
    >
      <div className="container-custom">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            <ShieldCheckIcon className="h-4 w-4" aria-hidden />
            Recognised &amp; affiliated
          </p>
          <h2
            id="affiliations-heading"
            className="mt-3 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            Backed by Government of India recognition
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            EzyHelpers is a DPIIT-recognised startup, affiliated with India&rsquo;s national skill
            development ecosystem — so every helper we place is part of a formally trained,
            verified workforce.
          </p>
        </div>

        <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap items-stretch justify-center gap-4 sm:gap-6">
          {AFFILIATIONS.map((a) => (
            <li
              key={a.name}
              className="flex w-[150px] flex-col items-center justify-between rounded-2xl border border-gray-100 bg-white px-4 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition hover:shadow-md sm:w-[170px]"
            >
              <div className="flex h-16 w-full items-center justify-center">
                <Image
                  src={a.src}
                  alt={a.name}
                  width={a.width}
                  height={a.height}
                  className="max-h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center text-[11px] font-medium leading-snug text-gray-500">
                {a.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
