'use client'

import { Fragment } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import {
  XMarkIcon,
  MapPinIcon,
  BanknotesIcon,
  BriefcaseIcon,
  TagIcon,
  DocumentTextIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline'
import { createWhatsAppLink, type Job } from '@/lib/jobsData'

interface JobDetailsModalProps {
  job: Job | null
  open: boolean
  onClose: () => void
}

export default function JobDetailsModal({ job, open, onClose }: JobDetailsModalProps) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm" aria-hidden="true" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 translate-y-4 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:scale-95"
            >
              <DialogPanel className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
                {job && (
                  <>
                    <div className="relative bg-gradient-to-br from-primary-600 to-primary-500 px-6 pb-6 pt-7 text-white sm:px-8">
                      <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close job details"
                        className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                        <TagIcon className="h-3.5 w-3.5" />
                        {job.category}
                      </span>

                      <DialogTitle className="mt-3 text-xl font-bold leading-tight sm:text-2xl">
                        {job.title}
                      </DialogTitle>
                      <p className="mt-1 text-sm text-white/90">{job.company}</p>
                    </div>

                    <div className="max-h-[60vh] overflow-y-auto px-6 py-6 sm:px-8">
                      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <DetailRow icon={<MapPinIcon className="h-5 w-5" />} label="Location" value={job.location} />
                        <DetailRow
                          icon={<BanknotesIcon className="h-5 w-5" />}
                          label="Salary"
                          value={`${job.salary} / month`}
                        />
                        <DetailRow icon={<BriefcaseIcon className="h-5 w-5" />} label="Job Type" value={job.jobType} />
                        <DetailRow icon={<TagIcon className="h-5 w-5" />} label="Category" value={job.category} />
                      </dl>

                      <div className="mt-6">
                        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-500">
                          <DocumentTextIcon className="h-4 w-4" />
                          Requirement
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700">
                          {job.requirement}
                        </p>
                      </div>

                      <div className="mt-6">
                        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-500">
                          <IdentificationIcon className="h-4 w-4" />
                          Documents Required
                        </h3>
                        <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                            Aadhaar Card
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                            Address Proof
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                            Experience details (if available)
                          </li>
                        </ul>
                      </div>

                      <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4">
                        <p className="text-xs leading-relaxed text-amber-900">
                          <strong className="font-bold">Note:</strong> EzyHelpers does not charge candidates
                          for applying. Final selection depends on client requirement and verification.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 bg-gray-50 px-6 py-4 sm:px-8">
                      <a
                        href={createWhatsAppLink(job)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Apply for ${job.title} in ${job.location} on WhatsApp`}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-success-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-success-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        Apply Now on WhatsApp
                      </a>
                    </div>
                  </>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-gray-50 px-3 py-3">
      <span className="text-primary-500" aria-hidden="true">
        {icon}
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</dt>
        <dd className="mt-0.5 text-sm font-medium text-gray-900">{value}</dd>
      </div>
    </div>
  )
}

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.05 20.15h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.69-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.2 8.2 0 0 1 2.42 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.74 2.65 4.21 3.71.59.26 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  )
}
