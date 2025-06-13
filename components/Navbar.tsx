'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useUrgency } from './UrgencyContext'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Hire Helper', href: '/hire-helper' },
  { name: 'For Helpers', href: '/for-helpers' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isUrgencyVisible } = useUrgency()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Use the context value directly
  const urgencyVisible = isUrgencyVisible

  return (
    <>
    <header className={`fixed inset-x-0 z-40 transition-all duration-300 ${
      urgencyVisible ? 'top-12' : 'top-0'
    } ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'}`}>
      <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">EzyHelpers</span>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">E</span>
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
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium leading-6 text-gray-900 hover:text-primary-600 transition-colors duration-200 relative group py-2 px-1"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
              <Link
                href="tel:+919972571005" 
                className="group relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none overflow-hidden"
              >
                {/* 3D Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.2s'}}></div>
                
                {/* Icon with enhanced styling */}
                <PhoneIcon className="h-5 w-5 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Phone number with enhanced styling */}
                <span className="relative z-10 font-extrabold tracking-wide group-hover:text-yellow-100 transition-colors duration-300">
                  +91 9972571005
                </span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </Link>
              <Link href="/hire-helper" className="btn-primary">
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
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
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
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <Link
                  href="tel:+919972571005"
                  className="group relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none overflow-hidden"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {/* 3D Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{animationDelay: '0.2s'}}></div>
                  
                  {/* Icon with enhanced styling */}
                  <PhoneIcon className="h-6 w-6 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Phone number with enhanced styling */}
                  <span className="relative z-10 font-extrabold tracking-wide group-hover:text-yellow-100 transition-colors duration-300">
                    +91 9972571005
                  </span>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </Link>
                <Link 
                  href="/hire-helper" 
                  className="btn-primary w-full text-center block py-4"
                  onClick={() => setMobileMenuOpen(false)}
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