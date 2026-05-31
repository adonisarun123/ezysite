import Link from 'next/link'
import { whatsappSendUrl } from '@/lib/whatsappUrl'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { 
  ComputerDesktopIcon,
  BuildingOffice2Icon,
  BuildingLibraryIcon,
  ServerIcon,
  HomeIcon,
  StarIcon,
  CogIcon,
  TrophyIcon,
  SparklesIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { CARE_NAV_PILLARS } from '@/lib/careServices/registry'

const footerLinks = {
  services: [
    { name: 'Live-in Maids', href: '/services/live-in-maids' },
    { name: 'Full-time Maids', href: '/services/full-time-maids' },
    { name: 'Part-time Maids', href: '/services/part-time-maids' },
    { name: 'On-demand Helpers', href: '/services/on-demand-helpers' },
    { name: 'Elderly Care', href: '/services/elderly-care' },
    { name: 'Babysitter/Nanny', href: '/services/nanny-babysitter' },
    { name: 'Cooks', href: '/services/cooks' },
    { name: 'Drivers', href: '/services/drivers' },
  ],
  cities: [
    { name: 'Bangalore', href: '/cities/bangalore', icon: ComputerDesktopIcon, iconColor: 'text-blue-400' },
    { name: 'Hyderabad', href: '/cities/hyderabad', icon: BuildingStorefrontIcon, iconColor: 'text-cyan-400' },
    { name: 'Mumbai', href: '/cities/mumbai', icon: BuildingOffice2Icon, iconColor: 'text-emerald-400' },
    { name: 'Delhi', href: '/cities/delhi', icon: BuildingLibraryIcon, iconColor: 'text-red-400' },
    { name: 'Noida', href: '/cities/noida', icon: ServerIcon, iconColor: 'text-purple-400' },
    { name: 'Nagpur', href: '/cities/nagpur', icon: HomeIcon, iconColor: 'text-orange-400' },
    { name: 'Lucknow', href: '/cities/lucknow', icon: StarIcon, iconColor: 'text-amber-400' },
    { name: 'Kanpur', href: '/cities/kanpur', icon: CogIcon, iconColor: 'text-gray-400' },
    { name: 'Meerut', href: '/cities/meerut', icon: TrophyIcon, iconColor: 'text-yellow-400' },
    { name: 'Bareilly', href: '/cities/bareilly', icon: SparklesIcon, iconColor: 'text-pink-400' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Helpers', href: '/for-helpers' },
    { name: 'Helper Registration', href: '/helper-registration' },
    { name: 'Agent Registration', href: '/agent-registration' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'National Database', href: '/nduw' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Policies', href: '/terms-and-policies' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Refund Policy', href: '/refund-policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center">
                  <Image
                    src="/ezyhelper_logo_96.png"
                    alt="EzyHelpers Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-xl font-bold font-display">EzyHelpers</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Your trusted partner for all home help needs. We connect you with verified, 
                reliable professionals for complete peace of mind.
              </p>
              <div className="space-y-6">
                {/* General Email */}
                <div className="flex items-center text-sm text-gray-300">
                  <EnvelopeIcon className="h-4 w-4 mr-3 text-primary-400" />
                  <Link href="mailto:contact@ezyhelpers.com" className="hover:text-primary-400 transition-colors">
                    contact@ezyhelpers.com
                  </Link>
                </div>

                {/* Bangalore Office */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Bangalore Office</h4>
                  <div className="flex items-center text-sm text-gray-300 mb-1">
                    <PhoneIcon className="h-4 w-4 mr-3 text-primary-400" />
                    <Link href="tel:+918031411776" className="hover:text-primary-400 transition-colors">
                      080-31411776
                    </Link>
                  </div>
                  <div className="flex items-start text-sm text-gray-300">
                    <MapPinIcon className="h-4 w-4 mr-3 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>HSR Layout, Bangalore, Karnataka 560102</span>
                  </div>
                </div>

                {/* Bareilly Office */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Bareilly Office</h4>
                  <div className="flex items-center text-sm text-gray-300 mb-1">
                    <PhoneIcon className="h-4 w-4 mr-3 text-primary-400" />
                    <Link href="tel:+918031411776" className="hover:text-primary-400 transition-colors">
                      080-31411776
                    </Link>
                  </div>
                  <div className="flex items-start text-sm text-gray-300">
                    <MapPinIcon className="h-4 w-4 mr-3 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>187/3, Vivek Vihar, Janakpuri, Near Avadh Plaza Hotel, Bareilly, Uttar Pradesh 243001</span>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links — refined */}
              <div className="pt-8 border-t border-white/5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-4">
                  Follow us
                </h4>
                <div className="flex items-center gap-2">
                  {[
                    {
                      name: 'Facebook',
                      href: 'https://www.facebook.com/ezyhelprs/',
                      path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                    },
                    {
                      name: 'Instagram',
                      href: 'https://www.instagram.com/ezyhelpers/',
                      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                    },
                    {
                      name: 'LinkedIn',
                      href: 'https://www.linkedin.com/company/ezyhelpers/',
                      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                    },
                    {
                      name: 'YouTube',
                      href: 'https://www.youtube.com/@ezyhelpers',
                      path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                    },
                  ].map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${s.name}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d={s.path} />
                      </svg>
                    </Link>
                  ))}
                </div>

                {/* Trustpilot inline link — small, subtle, never breaks if widget isn't seeded */}
                <Link
                  href="https://www.trustpilot.com/review/ezyhelpers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-gray-300 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
                >
                  <svg className="h-3.5 w-3.5 text-[#00B67A]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l2.45 7.53H22l-6.18 4.49 2.36 7.27L12 16.79 5.82 21.29l2.36-7.27L2 9.53h7.55L12 2z" />
                  </svg>
                  Read our reviews on Trustpilot
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-8 font-display text-white">Our Services</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-gray-300 hover:text-primary-400 transition-colors leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bangalore care cluster */}
            <div>
              <h3 className="text-lg font-semibold mb-8 font-display text-white">Care Services — Bangalore</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/care-services"
                    className="text-sm font-semibold text-white hover:text-primary-400 transition-colors leading-relaxed"
                  >
                    All Care Services
                  </Link>
                </li>
                {CARE_NAV_PILLARS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-primary-400 transition-colors leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cities */}
            <div>
              <h3 className="text-lg font-semibold mb-8 font-display text-white">Cities We Serve</h3>
              <ul className="space-y-4">
                {footerLinks.cities.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="flex items-center text-sm text-gray-300 hover:text-primary-400 transition-colors leading-relaxed group"
                      >
                        <IconComponent className={`h-4 w-4 mr-2 ${link.iconColor} group-hover:text-primary-400 transition-colors`} />
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-8 font-display text-white">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-gray-300 hover:text-primary-400 transition-colors leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip + quick contact band */}
      <div className="border-t border-white/5 bg-gray-900/40">
        <div className="px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Trust metrics — always visible, never broken */}
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
                  Trusted by families
                </p>
                <div className="mt-3 grid grid-cols-3 gap-6 sm:gap-10">
                  <div>
                    <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                      10,000<span className="text-primary-400">+</span>
                    </div>
                    <div className="mt-1 text-xs leading-snug text-gray-400 sm:text-sm">
                      families served
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                      100<span className="text-primary-400">%</span>
                    </div>
                    <div className="mt-1 text-xs leading-snug text-gray-400 sm:text-sm">
                      Aadhaar-verified helpers
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                      24<span className="text-primary-400">×</span>7
                    </div>
                    <div className="mt-1 text-xs leading-snug text-gray-400 sm:text-sm">
                      emergency support available
                    </div>
                  </div>
                </div>
              </div>

              {/* Slim contact CTA — replaces the heavy "Need Help Right Now" block */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/5 bg-gray-800/40 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Talk to us
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-gray-200 sm:text-[15px]">
                    Quickest way to reach a real human — WhatsApp or phone.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <Link
                      href={whatsappSendUrl('919972571005')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1FBA56] active:scale-[0.98]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488" />
                      </svg>
                      Chat on WhatsApp
                    </Link>
                    <Link
                      href="tel:+918031411776"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06]"
                    >
                      <PhoneIcon className="h-4 w-4" aria-hidden />
                      080-31411776
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-white/5 bg-gray-950 py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-500 sm:flex-row sm:text-sm">
              <p>© 2026 EzyHelpers. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
                <span>Registered with DWSSC &amp; Skill India</span>
                <span className="hidden sm:inline text-gray-700">•</span>
                <span>Trusted by 10,000+ families</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
