'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, PhoneIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useUrgency } from './UrgencyContext'
import { trackPhoneClick, trackCTAClick } from '@/lib/analytics'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Hire Helper', href: '/hire-helper' },
  { name: 'Nest', href: '/nest', isNew: true },
  { name: 'For Helpers', href: '/for-helpers' },
  { name: 'Blog', href: '/blog' },
  {
    name: 'About',
    href: '/about',
    hasDropdown: true,
    dropdownItems: [
      { name: 'About Us', href: '/about' },
      { name: 'Executive Summary', href: '/executive-summary' },
    ]
  },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const { isUrgencyVisible } = useUrgency()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (aboutDropdownOpen && !target.closest('.relative')) {
        setAboutDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [aboutDropdownOpen])

  // Use the context value directly
  const urgencyVisible = isUrgencyVisible

  return (
    <>
      <header className={`fixed inset-x-0 z-40 transition-all duration-300 ${urgencyVisible ? 'top-12' : 'top-0'
        } ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'}`}>
        <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="mx-auto max-w-7xl">
            <nav className="flex items-center justify-between" aria-label="Global">
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">EzyHelpers</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center">
                      <Image
                        src="/ezyhelper_logo_new.png"
                        alt="EzyHelpers Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                        priority
                        quality={60}
                        sizes="40px"
                      />
                    </div>
                    <span className="text-xl font-bold text-gray-900 font-display">EzyHelpers</span>
                  </div>
                </Link>
              </div>

              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="hidden lg:flex lg:gap-x-8">
                {navigation.map((item) => (
                  item.hasDropdown ? (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                      onMouseLeave={() => setAboutDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        className="text-sm font-medium leading-6 text-gray-900 hover:text-primary-600 transition-colors duration-200 relative group py-2 px-1 flex items-center gap-1"
                        onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                      >
                        <span className="relative inline-flex items-center">
                          {item.name}
                        </span>
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                        />
                        <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                      </button>

                      {aboutDropdownOpen && (
                        <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          <Link
                            href="/about"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                            onClick={() => setAboutDropdownOpen(false)}
                          >
                            About Us
                          </Link>
                          <Link
                            href="/executive-summary"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                            onClick={() => setAboutDropdownOpen(false)}
                          >
                            Executive Summary
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium leading-6 text-gray-900 hover:text-primary-600 transition-colors duration-200 relative group py-2 px-1"
                    >
                      <span className="relative inline-flex items-center">
                        {item.name}
                        {item.isNew && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm">
                            New
                          </span>
                        )}
                      </span>
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                    </Link>
                  )
                ))}
              </div>

              <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-3">
                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 whitespace-nowrap"
                  onClick={() => trackPhoneClick('+919972571005', 'navbar_desktop')}
                >
                  <PhoneIcon className="h-4 w-4 flex-shrink-0" />
                  <span className="hidden xl:inline">+91 9972571005</span>
                  <span className="xl:hidden">Call Now</span>
                </Link>
                <Link
                  href="/hire-helper#hire-form"
                  className="inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 whitespace-nowrap"
                  onClick={() => trackCTAClick('Book Now', 'navbar_desktop', 'primary')}
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">EzyHelpers</span>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-transparent rounded-lg flex items-center justify-center">
                    <Image
                      src="/ezyhelper_logo_new.png"
                      alt="EzyHelpers Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                      priority
                      quality={60}
                      sizes="32px"
                    />
                  </div>
                  <span className="text-lg font-bold text-gray-900 font-display">EzyHelpers</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    item.hasDropdown ? (
                      <div key={item.name} className="space-y-1">
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="-mx-3 block rounded-lg px-6 py-2 text-sm leading-7 text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="flex items-center justify-between">
                          {item.name}
                          {item.isNew && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm">
                              New
                            </span>
                          )}
                        </span>
                      </Link>
                    )
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Link
                    href="tel:+919972571005"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-base rounded-lg shadow-md hover:shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                    onClick={() => {
                      trackPhoneClick('+919972571005', 'navbar_mobile');
                      setMobileMenuOpen(false);
                    }}
                  >
                    <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                    <span>+91 9972571005</span>
                  </Link>
                  <Link
                    href="/hire-helper#hire-form"
                    className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-base rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                    onClick={() => {
                      trackCTAClick('Book Now', 'navbar_mobile', 'primary');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Spacer to prevent content overlap when banner is not visible */}
      {!urgencyVisible && (
        <div className="h-20 lg:h-24" aria-hidden="true"></div>
      )}
    </>
  )
} 