'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function GoBackButton() {
  return (
    <button 
      onClick={() => window.history.back()}
      className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <ArrowLeftIcon className="w-5 h-5 mr-2" />
      Go Back
    </button>
  )
} 