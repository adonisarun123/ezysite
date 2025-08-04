'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  CheckCircleIcon, 
  PhoneIcon,
  ArrowLeftIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function SuccessPage() {
  const [submissionTime, setSubmissionTime] = useState<string>('')

  useEffect(() => {
    // Get current timestamp for display
    const now = new Date()
    setSubmissionTime(now.toLocaleString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    }))
  }, [])

  const whatsappMessage = encodeURIComponent(
    "Hi! I just submitted my agent registration form. When can I expect verification updates?"
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center border border-green-100 dark:border-green-800">
          {/* Success Icon */}
          <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
            <CheckCircleIcon className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>

          {/* Main Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Registration Received!
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Thank you for registering with EzyHelpers. Your agent registration has been successfully submitted.
          </p>

          {/* Submission Details */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <ClockIcon className="h-4 w-4 mr-2" />
              Submitted on
            </div>
            <div className="font-medium text-teal-600 dark:text-teal-400">
              {submissionTime}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-8 text-left">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3 text-center">
              What happens next?
            </h3>
            <div className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
              <div className="flex items-start">
                <span className="bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  1
                </span>
                <span>We'll verify your documents and registration details</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  2
                </span>
                <span>Our team will contact you within 48 hours</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                  3
                </span>
                <span>Once approved, you can start listing your helpers</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href={`https://wa.me/919972571005?text=${whatsappMessage}`}
              className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Contact Support on WhatsApp
            </Link>

            <Link
              href="/"
              className="w-full flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to EzyHelpers
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Keep your phone accessible. We'll call you for any clarifications needed during the verification process.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-8 w-20 h-20 bg-green-200 dark:bg-green-800 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/4 right-8 w-32 h-32 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 blur-xl"></div>
      </div>
    </div>
  )
}