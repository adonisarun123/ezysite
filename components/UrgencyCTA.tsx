'use client'

import { PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { useUrgency } from './UrgencyContext'

export default function UrgencyCTA() {
  const { isUrgencyVisible, setIsUrgencyVisible } = useUrgency()

  if (!isUrgencyVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Main CTA Content */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            {/* Verified Badge */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <CheckBadgeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white flex-shrink-0" />
              <span className="text-white font-bold text-xs sm:text-sm md:text-base truncate">
                Get verified Helper Now!
              </span>
            </div>
            
            {/* Separator */}
            <div className="hidden md:block w-px h-6 bg-white/30 flex-shrink-0"></div>
            
            {/* Callback Promise */}
            <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
              <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" />
              <span className="text-white/90 text-xs sm:text-sm font-medium truncate">
                Get a Callback in 30 Mins*
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <a
              href="tel:+918031411776"
              className="bg-white text-green-600 px-3 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Call Now
            </a>
            
            {/* Close Button */}
            <button
              onClick={() => setIsUrgencyVisible(false)}
              className="text-white/80 hover:text-white transition-colors duration-200 p-1 flex-shrink-0"
              aria-label="Close banner"
            >
              <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 
