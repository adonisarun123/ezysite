'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Bars3Icon, 
  XMarkIcon, 
  PhoneIcon, 
  ChevronDownIcon 
} from '@heroicons/react/24/outline'
import { useUrgency } from './UrgencyContext'
import { trackPhoneClick, trackCTAClick } from '@/lib/analytics'

interface NavigationItem {
  name: string
  href: string
  icon?: any
  isNew?: boolean
  hasDropdown?: boolean
  dropdownItems?: { name: string; href: string }[]
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', icon: Bars3Icon },
  { name: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Bangalore', href: '/cities/bangalore' },
      { name: 'Bareilly', href: '/cities/bareilly' },
    ]
  },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
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
      if (openDropdown && !target.closest('.relative')) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openDropdown])

  // Use the context value directly
  const urgencyVisible = isUrgencyVisible

  return (
    <>
      <header className={`fixed inset-x-0 z-40 transition-all duration-300 ${urgencyVisible ? 'top-12' : 'top-0'
        } ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="mx-auto max-w-7xl">
            <nav className="flex items-center justify-between" aria-label="Global">
              
              {/* Left Side: Logo and Desktop Navigation */}
              <div className="flex items-center gap-x-8 xl:gap-x-12">
                {/* Logo Section */}
                <div className="flex lg:flex-none">
                  <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                    <span className="sr-only">EzyHelpers</span>
                    <div className="w-10 h-10 relative flex-shrink-0">
                      <Image
                        src="/ezyhelper_logo_new.png"
                        alt="EzyHelpers Logo"
                        fill
                        className="object-contain"
                        priority
                        sizes="40px"
                      />
                    </div>
                    <span className="text-xl font-bold text-gray-900 font-display">EzyHelpers</span>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8 items-center">
                  {navigation.map((item) => (
                    item.hasDropdown ? (
                      <div
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <button
                          type="button"
                          className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 outline-none"
                          onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={`h-3 w-3 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                            strokeWidth={2.5}
                          />
                        </button>

                        {openDropdown === item.name && (
                          <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-1.5 text-[15px] font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      >
                        {/* Only show icon if it exists AND it's not the Home item (to avoid the 3 lines on desktop) */}
                        {item.icon && item.name !== 'Home' && <item.icon className="h-5 w-5 text-gray-500" />}
                        <span>{item.name}</span>
                        {item.isNew && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm">
                            New
                          </span>
                        )}
                      </Link>
                    )
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex lg:flex-none lg:justify-end lg:items-center lg:gap-x-4 lg:ml-8">
                <Link
                  href="tel:+918031411776"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 whitespace-nowrap"
                  onClick={() => trackPhoneClick('+918031411776', 'navbar_desktop')}
                >
                  <PhoneIcon className="h-4 w-4 flex-shrink-0" />
                  <span className="hidden xl:inline">080-31411776</span>
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
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl transition-transform duration-300">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-8 h-8 relative flex-shrink-0">
                  <Image
                    src="/ezyhelper_logo_new.png"
                    alt="EzyHelpers Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="32px"
                  />
                </div>
                <span className="text-lg font-bold text-gray-900 font-display">EzyHelpers</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-100">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => (
                    item.hasDropdown ? (
                      <div key={item.name} className="space-y-1">
                        <Link
                          href={item.href}
                          className="flex items-center justify-between -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-3">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group -mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.icon && <item.icon className="h-5 w-5 text-gray-400 group-hover:text-primary-600" aria-hidden="true" />}
                        {item.name}
                        {item.isNew && (
                          <span className="ml-auto bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            New
                          </span>
                        )}
                      </Link>
                    )
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Link
                    href="tel:+918031411776"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-base rounded-lg shadow-md hover:shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                    onClick={() => {
                      trackPhoneClick('+918031411776', 'navbar_mobile');
                      setMobileMenuOpen(false);
                    }}
                  >
                    <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                    <span>080-31411776</span>
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
