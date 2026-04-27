'use client'

import { MapPinIcon, BanknotesIcon, BriefcaseIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { createWhatsAppLink, type Job } from '@/lib/jobsData'

interface JobCardProps {
  job: Job
  onKnowMore: (job: Job) => void
}

export default function JobCard({ job, onKnowMore }: JobCardProps) {
  const whatsappHref = createWhatsAppLink(job)

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">
            {job.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-600">
            {job.company}
          </p>
        </div>

        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 ring-1 ring-primary-100"
          aria-label="EzyHelpers verified"
          title="EzyHelpers verified"
        >
          <ShieldCheckIcon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700 ring-1 ring-accent-100">
        {job.category}
      </div>

      <ul className="mt-4 space-y-2.5 text-sm text-gray-700">
        <li className="flex items-start gap-2">
          <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
          <span className="truncate">{job.location}</span>
        </li>
        <li className="flex items-start gap-2">
          <BanknotesIcon className="mt-0.5 h-4 w-4 shrink-0 text-success-500" aria-hidden="true" />
          <span className="font-semibold text-gray-900">{job.salary}</span>
          <span className="text-gray-500">/ month</span>
        </li>
        <li className="flex items-start gap-2">
          <BriefcaseIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
          <span>{job.jobType}</span>
        </li>
      </ul>

      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-600">
        {job.requirement}
      </p>

      <div className="mt-5 border-t border-dashed border-gray-200 pt-4">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onKnowMore(job)}
            className="text-sm font-semibold text-accent-600 underline-offset-4 transition-colors hover:text-accent-700 hover:underline"
            aria-label={`Know more about ${job.title} in ${job.location}`}
          >
            Know More
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apply for ${job.title} in ${job.location} on WhatsApp`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-success-500 bg-success-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-success-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2 sm:px-5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Apply Now
          </a>
        </div>
      </div>
    </article>
  )
}

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.05 20.15h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.69-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.2 8.2 0 0 1 2.42 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.74 2.65 4.21 3.71.59.26 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  )
}
