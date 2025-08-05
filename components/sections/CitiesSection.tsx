import Link from 'next/link'
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

const cities = [
  { 
    name: 'Bangalore', 
    description: 'Silicon Valley of India', 
    href: '/cities/bangalore',
    icon: ComputerDesktopIcon,
    color: 'bg-blue-100 group-hover:bg-blue-200',
    iconColor: 'text-blue-600'
  },
  { 
    name: 'Hyderabad', 
    description: 'Cyberabad Tech Hub', 
    href: '/cities/hyderabad',
    icon: BuildingStorefrontIcon,
    color: 'bg-cyan-100 group-hover:bg-cyan-200',
    iconColor: 'text-cyan-600'
  },
  { 
    name: 'Mumbai', 
    description: 'Financial Capital', 
    href: '/cities/mumbai',
    icon: BuildingOffice2Icon,
    color: 'bg-emerald-100 group-hover:bg-emerald-200',
    iconColor: 'text-emerald-600'
  },
  { 
    name: 'Delhi', 
    description: 'National Capital', 
    href: '/cities/delhi',
    icon: BuildingLibraryIcon,
    color: 'bg-red-100 group-hover:bg-red-200',
    iconColor: 'text-red-600'
  },
  { 
    name: 'Noida', 
    description: 'IT Hub', 
    href: '/cities/noida',
    icon: ServerIcon,
    color: 'bg-purple-100 group-hover:bg-purple-200',
    iconColor: 'text-purple-600'
  },
  { 
    name: 'Nagpur', 
    description: 'Orange City', 
    href: '/cities/nagpur',
    icon: HomeIcon,
    color: 'bg-orange-100 group-hover:bg-orange-200',
    iconColor: 'text-orange-600'
  },
  { 
    name: 'Lucknow', 
    description: 'City of Nawabs', 
    href: '/cities/lucknow',
    icon: StarIcon,
    color: 'bg-amber-100 group-hover:bg-amber-200',
    iconColor: 'text-amber-600'
  },
  { 
    name: 'Kanpur', 
    description: 'Industrial Hub', 
    href: '/cities/kanpur',
    icon: CogIcon,
    color: 'bg-gray-100 group-hover:bg-gray-200',
    iconColor: 'text-gray-600'
  },
  { 
    name: 'Bareilly', 
    description: 'Zari Zardozi City', 
    href: '/cities/bareilly',
    icon: SparklesIcon,
    color: 'bg-pink-100 group-hover:bg-pink-200',
    iconColor: 'text-pink-600'
  }
]

export default function CitiesSection() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Serving Your <span className="text-gradient">Neighborhood</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            EzyHelpers provides reliable and professional domestic help services across India's most dynamic and fast-growing cities. 
            Your comfort is our priority, no matter where you live.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {cities.map((city) => {
            const IconComponent = city.icon
            return (
              <Link
                key={city.name}
                href={city.href}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-primary-300 hover:scale-105"
              >
                <div className={`w-14 h-14 ${city.color} rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-200 group-hover:scale-110`}>
                  <IconComponent className={`h-7 w-7 ${city.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-display tracking-tight">
                  {city.name}
                </h3>
                <p className="text-sm font-medium text-gray-600 leading-relaxed">
                  {city.description}
                </p>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            We are also expanding rapidly to neighboring towns and metropolitan regions to meet growing demand.
          </p>
          <Link href="/contact" className="btn-secondary">
            Request Service in Your City
          </Link>
        </div>
      </div>
    </section>
  )
} 