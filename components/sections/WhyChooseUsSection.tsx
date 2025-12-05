import { 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon, 
  CurrencyRupeeIcon, 
  ArrowPathIcon,
  CheckBadgeIcon,
  StarIcon,
  PhoneIcon,
  UsersIcon,
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: ShieldCheckIcon,
    title: '100% Verified & Background Checked',
    description: 'Every helper undergoes rigorous police verification, skill assessment, and training. DWSSC registered professionals you can trust.',
    stats: '10,000+ helpers verified',
    badge: 'Police Verified',
    color: 'trust',
    highlight: true
  },
  {
    icon: ClockIcon,
    title: 'Instant Booking & Flexible Hours',
    description: 'From 2-hour help to full-time live-in support. Book instantly or schedule in advance with 24/7 availability.',
    stats: '24/7 availability',
    badge: 'Instant Booking',
    color: 'secondary'
  },
  {
    icon: StarIcon,
    title: 'Highly Rated Professionals',
    description: '4.8/5 average rating from 10,000+ families. Our helpers are loved for their reliability and exceptional service.',
    stats: '4.8★ rating',
    badge: 'Top Rated',
    color: 'accent'
  },
  {
    icon: CurrencyRupeeIcon,
    title: 'Transparent, Fair Pricing',
    description: 'Simple one-time commission, then pay directly to your helper. Full transparency ensures fairness for both families and helpers—no hidden charges, no ongoing fees.',
    stats: 'Direct payment model',
    badge: 'Fair Pricing',
    color: 'success'
  },
  {
    icon: CheckBadgeIcon,
    title: 'Skilled & Trained Professionals',
    description: 'All helpers are trained for necessary skills before placement. Comprehensive skill assessment and specialized training ensure quality service.',
    stats: 'Skill certified',
    badge: 'Trained',
    color: 'trust'
  },
  {
    icon: ArrowPathIcon,
    title: 'Hassle-Free Replacements',
    description: 'Not satisfied? We\'ll find you a replacement within 24-72 hours at no extra cost. Your satisfaction guaranteed.',
    stats: '24-72hr replacement',
    badge: 'Guaranteed',
    color: 'primary'
  }
]

const trustIndicators = [
  { 
    label: 'Trusted Families', 
    value: '10,000+', 
    icon: HeartIcon,
    description: 'Happy families trust our service'
  },
  { 
    label: 'Verified Helpers', 
    value: '5,000+', 
    icon: UsersIcon,
    description: 'Background checked professionals'
  },
  { 
    label: 'Locations', 
    value: '250+', 
    icon: MapPinIcon,
    description: 'Across major Indian cities'
  },
  { 
    label: 'Customer Rating', 
    value: '4.8★', 
    icon: StarIcon,
    description: 'Average customer satisfaction'
  }
]

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-background-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/20 pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-trust-100 px-4 py-2 rounded-full mb-6">
            <CheckBadgeIcon className="h-5 w-5 text-trust-600" />
            <span className="text-sm font-medium text-trust-700">Trusted by 10,000+ Indian Families</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-display">
            Why Families Trust <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">EzyHelpers</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            India's most trusted platform for verified home help. We don't just connect you with helpers—we ensure 
            they're qualified, trained, and committed to your family's safety and satisfaction.
          </p>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {trustIndicators.map((indicator, index) => {
            const colors = [
              { bg: 'from-pink-500 to-rose-500', icon: 'text-pink-600', light: 'bg-pink-50', ring: 'ring-pink-200' }, // Heart - warm pink for families
              { bg: 'from-blue-500 to-cyan-500', icon: 'text-blue-600', light: 'bg-blue-50', ring: 'ring-blue-200' }, // Users - professional blue for helpers
              { bg: 'from-emerald-500 to-green-500', icon: 'text-emerald-600', light: 'bg-emerald-50', ring: 'ring-emerald-200' }, // Map - green for growth/expansion
              { bg: 'from-amber-500 to-yellow-500', icon: 'text-amber-600', light: 'bg-amber-50', ring: 'ring-amber-200' } // Star - golden for excellence
            ]
            const colorScheme = colors[index % colors.length]
            
            return (
              <div 
                key={indicator.label}
                className={`
                  relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl 
                  transition-all duration-500 group cursor-pointer transform hover:-translate-y-3 hover:scale-105
                  border border-gray-100 hover:${colorScheme.ring} hover:ring-2
                `}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Gradient overlay that appears on hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${colorScheme.bg} opacity-0 group-hover:opacity-5 
                  rounded-2xl transition-opacity duration-500
                `} />
                
                {/* Floating elements background */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-br from-accent-100 to-success-100 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500" />
                
                                 {/* Icon with enhanced styling */}
                 <div className={`
                   relative w-16 h-16 ${colorScheme.light} rounded-2xl flex items-center justify-center mx-auto mb-4 
                   group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md
                   ${colorScheme.ring} group-hover:ring-2
                 `}>
                   <indicator.icon className={`h-8 w-8 ${colorScheme.icon} group-hover:scale-110 transition-transform duration-300`} />
                   
                   {/* Pulse effect */}
                   <div className={`
                     absolute inset-0 ${colorScheme.light} rounded-2xl opacity-0 group-hover:opacity-50 
                     animate-ping group-hover:animate-pulse transition-opacity duration-300
                   `} />
                 </div>

                {/* Value with gradient text */}
                <div className={`
                  text-3xl font-bold mb-2 bg-gradient-to-r ${colorScheme.bg} bg-clip-text text-transparent
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  {indicator.value}
                </div>
                
                {/* Label */}
                <div className="text-sm text-text-secondary font-medium group-hover:text-text-primary transition-colors duration-300">
                  {indicator.label}
                </div>

                {/* Description tooltip that appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  <div className="text-xs text-text-secondary/80 italic">
                    {indicator.description}
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`
                relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer
                ${feature.highlight ? 'ring-2 ring-trust-200 bg-gradient-to-br from-white to-trust-50' : ''}
                hover:scale-105 hover:-translate-y-2
              `}
            >
              {/* Badge */}
              <div className={`
                absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold
                ${feature.color === 'trust' ? 'bg-trust-800 text-white' : 
                  feature.color === 'secondary' ? 'bg-secondary-800 text-white' :
                  feature.color === 'accent' ? 'bg-accent-800 text-white' :
                  feature.color === 'success' ? 'bg-success-800 text-white' :
                  'bg-primary-800 text-white'}
              `}>
                {feature.badge}
              </div>

              {/* Icon */}
              <div className={`
                w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                ${feature.color === 'trust' ? 'bg-trust-100 group-hover:bg-trust-200' : 
                  feature.color === 'secondary' ? 'bg-secondary-100 group-hover:bg-secondary-200' :
                  feature.color === 'accent' ? 'bg-accent-100 group-hover:bg-accent-200' :
                  feature.color === 'success' ? 'bg-success-100 group-hover:bg-success-200' :
                  'bg-primary-100 group-hover:bg-primary-200'}
              `}>
                <feature.icon className={`
                  h-8 w-8 transition-transform duration-300 group-hover:scale-110
                  ${feature.color === 'trust' ? 'text-trust-600' : 
                    feature.color === 'secondary' ? 'text-secondary-600' :
                    feature.color === 'accent' ? 'text-accent-600' :
                    feature.color === 'success' ? 'text-success-600' :
                    'text-primary-600'}
                `} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text-primary mb-3 font-display group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Stats */}
              <div className={`
                inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium
                ${feature.color === 'trust' ? 'bg-trust-100 text-trust-900' : 
                  feature.color === 'secondary' ? 'bg-secondary-100 text-secondary-900' :
                  feature.color === 'accent' ? 'bg-accent-100 text-accent-900' :
                  feature.color === 'success' ? 'bg-success-100 text-success-900' :
                  'bg-primary-100 text-primary-900'}
              `}>
                <div className={`
                  w-2 h-2 rounded-full
                  ${feature.color === 'trust' ? 'bg-trust-800' : 
                    feature.color === 'secondary' ? 'bg-secondary-800' :
                    feature.color === 'accent' ? 'bg-accent-800' :
                    feature.color === 'success' ? 'bg-success-800' :
                    'bg-primary-800'}
                `} />
                <span>{feature.stats}</span>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl text-white font-bold mb-4 font-display">Ready to Experience the Difference?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied families who trust EzyHelpers for their home help needs. 
              Book your verified helper today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/hire-helper" 
                className="inline-flex items-center bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <CheckBadgeIcon className="h-5 w-5 mr-2" />
                Book Verified Helper Now
              </a>
              <a 
                href="tel:+918031411776" 
                className="inline-flex items-center bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call: 080-31411776
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
