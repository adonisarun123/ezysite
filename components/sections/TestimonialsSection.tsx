import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Bangalore',
    service: 'Live-in Maid',
    rating: 5,
    text: 'EzyHelpers provided us with an amazing live-in maid who has become part of our family. The screening process was thorough and the service is exceptional.',
    avatar: 'PS'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    service: 'Elderly Care',
    rating: 5,
    text: 'The elderly care service for my father has been outstanding. The caretaker is professional, caring, and gives us complete peace of mind.',
    avatar: 'RK'
  },
  {
    name: 'Anita Desai',
    location: 'Delhi',
    service: 'Part-time Maid',
    rating: 5,
    text: 'Quick, reliable, and trustworthy. The part-time maid service fits perfectly with my schedule. Highly recommend EzyHelpers to everyone.',
    avatar: 'AD'
  },
  {
    name: 'Vikram Singh',
    location: 'Noida',
    service: 'Cook',
    rating: 5,
    text: 'Our cook prepares delicious, healthy meals every day. The booking process was smooth and the replacement guarantee gives us confidence.',
    avatar: 'VS'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-background-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Service That <span className="text-gradient">Speaks for Itself</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—read what our satisfied customers are saying about their experience 
            with our exceptional house helper services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-gray-600 font-medium">{testimonial.service}</span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-trust-50 px-6 py-3 rounded-full">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
            <span className="text-trust-700 font-semibold">4.8/5 rating from 10,000+ families</span>
          </div>
        </div>
      </div>
    </section>
  )
} 