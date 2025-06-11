import { ChatBubbleLeftRightIcon, UserGroupIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Tell Us Your Needs',
    description: 'Share your detailed requirements with our team of experts. We\'ll help you choose the right service based on your needs.',
    features: ['Free expert guidance', 'Personalized service matching']
  },
  {
    icon: UserGroupIcon,
    title: 'We Match You',
    description: 'Receive a selection of carefully screened helper profiles. Choose from the best available options.',
    features: ['Profiles shared with full transparency', 'Skills and personality matching']
  },
  {
    icon: CheckBadgeIcon,
    title: 'Interview & Placement',
    description: 'Shortlist candidates as per your requirement, conduct interviews, and select the ideal helper.',
    features: ['Thorough Background Verification', 'Guidance and support through every step']
  }
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-background-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Effortless Home Help in <span className="text-gradient">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Booking EzyHelpers is simple and hassle-free. Follow these three easy steps to find reliable home helpers customised to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                {index + 1}
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group-hover:bg-primary-50/50 mt-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
                  <step.icon className="h-8 w-8 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-display">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 