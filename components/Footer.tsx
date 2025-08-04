import Link from 'next/link'
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
  SparklesIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const PDFDownloadButton = dynamic(() => import('./PDFDownloadButton'), {
  ssr: false
})

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
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Helpers', href: '/for-helpers' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center">
                  <Image
                    src="/ezyhelper_logo_new.png"
                    alt="EzyHelpers Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-xl font-bold font-display">EzyHelpers</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Your trusted partner for all home help needs. We connect you with verified, 
                reliable professionals for complete peace of mind.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-300">
                  <PhoneIcon className="h-4 w-4 mr-3 text-primary-400" />
                  <Link href="tel:+919972571005" className="hover:text-primary-400 transition-colors">
                    +91 9972571005
                  </Link>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <EnvelopeIcon className="h-4 w-4 mr-3 text-primary-400" />
                  <Link href="mailto:contact@ezyhelpers.com" className="hover:text-primary-400 transition-colors">
                    contact@ezyhelpers.com
                  </Link>
                </div>
                <div className="flex items-start text-sm text-gray-300">
                  <MapPinIcon className="h-4 w-4 mr-3 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>HSR Layout, Bangalore, Karnataka 560102<br />Serving across India's major cities</span>
                </div>
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

      {/* WhatsApp CTA Section */}
      <div className="bg-gray-800/50 py-12 lg:py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-display text-white">Need Help Right Now?</h3>
              <p className="text-primary-100 mb-8 text-lg leading-relaxed">
                Get instant support via WhatsApp - we're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://wa.me/919972571005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
                  </svg>
                  Chat on WhatsApp
                </Link>
                
                <PDFDownloadButton 
                  filename="EzyHelpers-Services.pdf"
                  className="inline-flex items-center bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  variant="print"
                >
                  📄 Download PDF
                </PDFDownloadButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-gray-900 py-8 lg:py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
              <p>© 2025 EzyHelpers. All rights reserved.</p>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center">
                <span>Registered with DWSSC & Skill India</span>
                <span className="hidden sm:inline">•</span>
                <span>Trusted by 10,000+ families</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 