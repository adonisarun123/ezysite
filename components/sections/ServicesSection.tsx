import Link from 'next/link'
import { HomeIcon, ClockIcon, CalendarDaysIcon, BoltIcon, HeartIcon, UserIcon, TruckIcon } from '@heroicons/react/24/outline'

// Custom Chef Hat icon since ChefHatIcon doesn't exist in heroicons
const ChefHatIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9c0-3.31 2.69-6 6-6s6 2.69 6 6v1c0 .55-.45 1-1 1h-1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8H7c-.55 0-1-.45-1-1V9zm2 1h8v8H8v-8z" />
  </svg>
)

const services = [
  {
    icon: HomeIcon,
    title: 'Live-in Maids',
    description: 'Our live-in maids offer 24/7 support. Ideal for families seeking round-the-clock domestic assistance.',
    features: ['24/7 assistance', 'Complete home care and supervision', 'All-in-One Domestic Assistance'],
    href: '/services/live-in-maids'
  },
  {
    icon: ClockIcon,
    title: 'Full-time Maids',
    description: 'Our full-time maids are trained to manage daily chores like dusting, mopping, dishwashing, and laundry with efficiency.',
    features: ['Daily cleaning & Routine Tasks', 'Efficient Time and Task Management', 'Fixed schedules and trained professionals'],
    href: '/services/full-time-maids'
  },
  {
    icon: CalendarDaysIcon,
    title: 'Part-time Maids',
    description: 'Need help with a flexible schedule? Our part-time maids are perfect for those requiring assistance a few times a week.',
    features: ['Short-duration shifts', 'Support for Specific Tasks Only When Needed', 'Cost-effective and convenient'],
    href: '/services/part-time-maids'
  },
  {
    icon: BoltIcon,
    title: 'On-Demand Helpers',
    description: 'Facing a sudden requirement for cleaning or household support? Our on-demand service is just a call away.',
    features: ['Instant booking options', 'Flexible hourly rates', 'Customizable Task Support'],
    href: '/services/on-demand-helpers'
  },
  {
    icon: UserIcon,
    title: 'Nanny/BabySitter',
    description: 'Trusted childcare experts offering a safe and nurturing environment for your children.',
    features: ['Emotional Support and Companionship', 'Routine Building and Consistency', 'Custom daily routines'],
    href: '/services/nanny-babysitter'
  },
  {
    icon: HeartIcon,
    title: 'Elderly Care',
    description: 'Compassionate caretakers provide personalised care for seniors, ensuring their comfort and well-being.',
    features: ['Medication reminders', 'Mobility & hygiene assistance', 'Emotional support & companionship'],
    href: '/services/elderly-care'
  },
  {
    icon: ChefHatIcon,
    title: 'Cooks',
    description: 'Professional cooks who prepare nutritious, delicious meals according to your family\'s preferences.',
    features: ['Customized meal planning', 'Dietary preferences accommodated', 'Fresh and hygienic preparation'],
    href: '/services/cooks'
  },
  {
    icon: TruckIcon,
    title: 'Drivers',
    description: 'Reliable drivers for all your transportation needs, from daily commutes to special occasions.',
    features: ['Licensed and experienced', 'Flexible scheduling', 'Safe and punctual service'],
    href: '/services/drivers'
  }
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Our Core <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your ideal home help solution, simplified. Find the perfect house help service that fits your lifestyle. 
            Our premium services are tailored just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <service.icon className="h-6 w-6 text-primary-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-display">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-xs text-gray-500 flex items-start">
                    <span className="w-1 h-1 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={service.href}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
} 