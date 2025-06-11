import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

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
    { name: 'Bangalore', href: '/cities/bangalore' },
    { name: 'Mumbai', href: '/cities/mumbai' },
    { name: 'Delhi', href: '/cities/delhi' },
    { name: 'Noida', href: '/cities/noida' },
    { name: 'Nagpur', href: '/cities/nagpur' },
    { name: 'Lucknow', href: '/cities/lucknow' },
    { name: 'Kanpur', href: '/cities/kanpur' },
    { name: 'Meerut', href: '/cities/meerut' },
    { name: 'Bareilly', href: '/cities/bareilly' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Helpers', href: '/for-helpers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold font-display">EzyHelpers</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for all home help needs. We connect you with verified, 
              reliable professionals for complete peace of mind.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <PhoneIcon className="h-4 w-4 mr-2 text-primary-400" />
                <Link href="tel:+919972571005" className="hover:text-primary-400 transition-colors">
                  +91 9972571005
                </Link>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <EnvelopeIcon className="h-4 w-4 mr-2 text-primary-400" />
                <Link href="mailto:info@ezyhelpers.com" className="hover:text-primary-400 transition-colors">
                  info@ezyhelpers.com
                </Link>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPinIcon className="h-4 w-4 mr-2 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Serving across India's major cities</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-display text-white">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-display text-white">Cities We Serve</h3>
            <ul className="space-y-3">
              {footerLinks.cities.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-display text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2 font-display text-white">Need Help Right Now?</h3>
            <p className="text-primary-100 mb-4">
              Get instant support via WhatsApp - we're here to help!
            </p>
            <Link 
              href="https://wa.me/919972571005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
              </svg>
              Chat on WhatsApp
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 EzyHelpers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Registered with DWSSC & Skill India</span>
            <span>•</span>
            <span>Trusted by 10,000+ families</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 