import { 
  CurrencyRupeeIcon, 
  ShieldCheckIcon, 
  UsersIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ArrowRightIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function TransparencySection() {
  const benefits = [
    {
      icon: CurrencyRupeeIcon,
      title: "Fair Payment Model",
      description: "Pay directly to your helper after our simple one-time commission. No ongoing fees or hidden charges.",
      highlights: ["One-time commission", "Direct payment to helper", "No hidden fees"],
      color: "emerald"
    },
    {
      icon: UsersIcon, 
      title: "Win-Win for Everyone",
      description: "Our transparent model ensures helpers receive fair compensation while customers get clear, upfront pricing.",
      highlights: ["Fair helper compensation", "Clear customer pricing", "Mutual trust"],
      color: "blue"
    },
    {
      icon: ShieldCheckIcon,
      title: "Complete Transparency",
      description: "Every cost is explained upfront. Know exactly what you're paying for with no surprise charges later.",
      highlights: ["Upfront pricing", "No surprise charges", "Full cost breakdown"],
      color: "purple"
    }
  ]

  const stats = [
    { label: "Customer Satisfaction", value: "98%", desc: "Love our transparent pricing" },
    { label: "Helper Retention", value: "95%", desc: "Stay longer due to fair pay" },
    { label: "Repeat Customers", value: "87%", desc: "Choose us again and again" }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 rounded-full px-4 py-2 mb-6">
            <HeartIcon className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">Fair for Everyone</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Transparency</span> in Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our transparent payment model ensures fairness for both families and helpers. 
            Pay a simple one-time commission, then deal directly with your helper—no ongoing fees, no hidden charges.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const colors = {
              emerald: {
                bg: 'bg-emerald-50',
                icon: 'text-emerald-600',
                accent: 'text-emerald-700',
                border: 'border-emerald-200',
                gradient: 'from-emerald-500 to-teal-600'
              },
              blue: {
                bg: 'bg-blue-50',
                icon: 'text-blue-600', 
                accent: 'text-blue-700',
                border: 'border-blue-200',
                gradient: 'from-blue-500 to-indigo-600'
              },
              purple: {
                bg: 'bg-purple-50',
                icon: 'text-purple-600',
                accent: 'text-purple-700', 
                border: 'border-purple-200',
                gradient: 'from-purple-500 to-violet-600'
              }
            }
            const colorScheme = colors[benefit.color as keyof typeof colors]
            
            return (
              <div 
                key={index}
                className={`group relative ${colorScheme.bg} rounded-2xl p-8 border-2 ${colorScheme.border} hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}

              >
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colorScheme.bg} group-hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border ${colorScheme.border} group-hover:border-white/20`}>
                    <benefit.icon className={`h-8 w-8 ${colorScheme.icon} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 font-display transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                    {benefit.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-2">
                    {benefit.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircleIcon className={`h-4 w-4 ${colorScheme.icon} group-hover:text-white/90 mr-2 transition-colors duration-300`} />
                        <span className={`${colorScheme.accent} group-hover:text-white/90 transition-colors duration-300 font-medium`}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              Transparency That Delivers Results
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our transparent approach builds trust and creates better outcomes for everyone involved
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <UserGroupIcon className="w-16 h-16 text-emerald-200 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display">
              How Our Fair Payment Model Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto text-sm font-bold">1</div>
                <h4 className="font-semibold">Simple Commission</h4>
                <p className="text-emerald-100 text-sm">Pay our one-time commission when you hire</p>
              </div>
              <div className="space-y-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto text-sm font-bold">2</div>
                <h4 className="font-semibold">Direct Payment</h4>
                <p className="text-emerald-100 text-sm">Pay your helper directly - no middleman</p>
              </div>
              <div className="space-y-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto text-sm font-bold">3</div>
                <h4 className="font-semibold">Ongoing Support</h4>
                <p className="text-emerald-100 text-sm">Free support and replacements if needed</p>
              </div>
            </div>
            <p className="text-lg text-emerald-100 mb-6">
              This model ensures helpers receive fair wages while keeping costs transparent for families. 
              Everyone wins when there's trust and fairness.
            </p>
            <button className="inline-flex items-center bg-white text-emerald-600 hover:bg-emerald-50 font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
              <span>Learn More About Our Pricing</span>
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 