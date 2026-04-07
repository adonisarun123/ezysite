import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import {
    PhoneIcon,
    CheckCircleIcon,
    SparklesIcon,
    HeartIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    ClockIcon,
    HomeIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    HomeModernIcon,
    ArrowRightIcon,
    StarIcon,
    MapPinIcon,
    SunIcon,
    PlusCircleIcon,
    HandThumbUpIcon,
    BanknotesIcon,
    GlobeAltIcon,
    LifebuoyIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Hire Dog Pet Sitters | Walking, Feeding & Home Care',
    description: 'Hire trusted dog pet sitters for safe home care. From daily walking and feeding to live-in sitting, we care for your dog with love and attention.',
    openGraph: {
        title: 'Hire Dog Pet Sitters | Walking, Feeding & Home Care',
        description: 'Hire trusted dog pet sitters for safe home care. From daily walking and feeding to live-in sitting, we care for your dog with love and attention.',
        url: 'https://www.ezyhelpers.com/services/dog-pet-sitters',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/services/dog-pet-sitters'
    }
}

export default function DogPetSittersPage() {
    const faqs: FAQItem[] = [
        {
            question: 'What is the difference between a dog sitter and a dog walker?',
            answer: 'A dog walker mainly takes your dog for walks. A dog sitter provides full care, including feeding, playtime, medicines, and staying at home if needed. EzyHelpers provides caregivers who can manage both, ensuring a complete care routine.'
        },
        {
            question: 'Is dog sitting suitable for puppies?',
            answer: 'Yes. Dog sitters help with puppy feeding, potty timing, play, and basic training routines. They provide the extra patience and frequent supervision that puppies need to feel safe and learn routines.'
        },
        {
            question: 'Can I book a dog sitter for a few hours?',
            answer: 'Yes. Hourly dog sitting is available for short errands, meetings, or events. We offer flexible scheduling to match your specific needs, whether it\'s just for a morning or an entire afternoon.'
        },
        {
            question: 'What if my dog doesn’t like strangers?',
            answer: 'No problem. Our sitters are experienced dog lovers who introduce themselves slowly. They let your dog get used to their voice and presence, building trust through gentle interaction before starting regular care.'
        },
        {
            question: 'Can Dog sitters help with grooming?',
            answer: 'Yes. Home dog sitters can help with light grooming like brushing and paw cleaning. For full grooming (like haircuts or nail clipping), we recommend professional groomers, but our sitters keep your pet clean and comfortable daily.'
        },
        {
            question: 'Are sitters available in my city?',
            answer: 'Our dog sitters are available in major Indian cities, depending on caregiver availability. We are constantly expanding our network of verified pet lovers to serve more families locally.'
        },
        {
            question: 'How long will it take for my dog to bond with the sitter?',
            answer: 'Most dogs take a few days to a week to get comfortable. Gentle introductions, regular playtime, and consistent routine care help your dog feel secure and build a bond with the sitter faster.'
        }
    ]

    const whyChooseFeatures = [
        { title: 'Verified Dog Sitters', description: 'All our dog sitters are background-checked and experienced in handling dogs safely, calmly, and lovingly.', icon: ShieldCheckIcon, bg: 'bg-orange-50', color: 'text-orange-600' },
        { title: 'Flexible Care Options', description: 'Choose daily dog walking, short-hour sitting, or live-in dog care based on your schedule and pet’s needs.', icon: ClockIcon, bg: 'bg-amber-50', color: 'text-amber-600' },
        { title: 'Personalised Dog Care', description: 'We follow your dog’s feeding times, walking habits, play routine, and special instructions carefully.', icon: HeartIcon, bg: 'bg-yellow-50', color: 'text-yellow-600' },
        { title: 'Local & Reliable Care', description: 'Our sitters know nearby parks, walking routes, and pet-friendly areas for smooth and comfortable care.', icon: MapPinIcon, bg: 'bg-orange-50', color: 'text-orange-600' },
        { title: 'Affordable Pricing', description: 'Fair, transparent pricing for professional dog care services that deliver quality without stretching your budget.', icon: BanknotesIcon, bg: 'bg-amber-50', color: 'text-amber-600' }
    ]

    const serviceCategories = [
        { title: 'Daily Dog Walking', desc: 'Taking your dog for regular walks to give them exercise, fresh air, and healthy routines, designed to match their energy levels.', icon: SunIcon, color: 'text-orange-600', bg: 'bg-orange-50' },
        { title: 'Feeding & Fresh Water', desc: 'Making sure your dog gets their meals on time and maintaining their diet schedule exactly as per your instructions.', icon: HeartIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
        { title: 'Playtime & Companionship', desc: 'Spending quality time through interactive play and affection to keep them happy, active, and emotionally engaged.', icon: FaceSmileIcon, color: 'text-yellow-600', bg: 'bg-yellow-50' },
        { title: 'Grooming Support & Clean-Up', desc: 'Brushing your dog, cleaning their paws, and tidying up their area to maintain cleanliness and comfort at home.', icon: SparklesIcon, color: 'text-orange-600', bg: 'bg-orange-50' },
        { title: 'Medication & Basic Care', desc: 'Administering prescribed medicines or supplements gently and with careful supervision, especially for older dogs.', icon: PlusCircleIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
        { title: 'Potty Breaks & Waste Cleanup', desc: 'Taking your dog outside frequently for potty breaks or cleaning their relief area thoroughly for a clean home.', icon: HomeIcon, color: 'text-yellow-600', bg: 'bg-yellow-50' }
    ]

    const whoNeedsSection = [
        { title: 'Working Professionals', desc: 'Perfect for long office hours needing daily home dog sitter support and walks.', icon: BriefcaseIcon },
        { title: 'Frequent Travellers', desc: 'Ideal for pet parents who want trusted live-in dog sitter care in their absence.', icon: GlobeAltIcon },
        { title: 'Elderly Pet Owners', desc: 'Support for seniors who love their pets but find daily walks or cleaning challenging.', icon: LifebuoyIcon },
        { title: 'Families with Multiple Pets', desc: 'Extra helping hand for feeding, bathing, or walking routines for multiple dogs.', icon: UserGroupIcon }
    ]

    const carePlans = [
        { title: 'Hourly Dog Sitting', sub: 'Short-term care', desc: 'Best for errands, meetings, or short outings needing 2–4 hours of care.', icon: ClockIcon, color: 'text-orange-600', bg: 'bg-orange-50' },
        { title: 'Daily Dog Walking', sub: 'Regular visits', desc: 'Perfect for office-goers needing 1–2 outdoor walks for their dog daily.', icon: SunIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
        { title: 'Part-Time Dog Care', sub: 'Selected hours', desc: 'Flexible support for 4–6 hours daily to manage specific daily routines.', icon: UserGroupIcon, color: 'text-yellow-600', bg: 'bg-yellow-50' },
        { title: 'Full-Time Home Sitting', sub: 'Daily complete care', desc: 'Daily care including walks, meals, and play for consistent supervision.', icon: HomeModernIcon, color: 'text-orange-600', bg: 'bg-orange-50' },
        { title: 'Live-In Dog Sitter', sub: '24/7 Home Support', desc: 'Best for long trips or vacations needing round-the-clock companionship.', icon: HomeIcon, color: 'text-amber-600', bg: 'bg-amber-50' },
        { title: 'Weekend Dog Sitting', sub: 'Events or Short Trips', desc: 'Short-term care for weekends or family events away from home.', icon: StarIcon, color: 'text-yellow-600', bg: 'bg-yellow-50' }
    ]

    const exploreServices = [
        { title: 'Patient & Nursing Care', desc: 'Attendants help with hygiene, medicines, and daily support at home with care.', href: '/services/patient-care-services-at-home', icon: HeartIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Travel Nanny Services', desc: 'Nannies who travel with families and take care of children during trips.', href: '/services/travel-nanny', icon: GlobeAltIcon, color: 'text-rose-600', bg: 'bg-rose-50' },
        { title: 'Special-Needs Nanny', desc: 'Trained caregivers supporting children with special needs and daily routines.', href: '/services/special-needs-caregiver', icon: ShieldCheckIcon, color: 'text-teal-600', bg: 'bg-teal-50' }
    ]

    return (
        <main className="min-h-screen font-sans">
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                        "@type": "Question",
                        "name": "What is the difference between a dog sitter and a dog walker?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A dog walker mainly takes your dog for walks. A dog sitter provides full care, including feeding, playtime, medicines, and staying at home if needed."
                        }
                    },{
                        "@type": "Question",
                        "name": "Is dog sitting suitable for puppies?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Dog sitters help with puppy feeding, potty timing, play, and basic training routines."
                        }
                    },{
                        "@type": "Question",
                        "name": "Can I book a dog sitter for a few hours?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Hourly dog sitting is available for short errands or events."
                        }
                    },{
                        "@type": "Question",
                        "name": "What if my dog doesn’t like strangers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No problem. Sitters introduce themselves slowly, let your dog get used to their voice and presence, and build trust before starting regular care."
                        }
                    },{
                        "@type": "Question",
                        "name": "Can Dog sitters help with grooming?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Home dog sitters can help with light grooming like brushing and paw cleaning."
                        }
                    },{
                        "@type": "Question",
                        "name": "Are sitters available in my city?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our dog sitters are available in major Indian cities, depending on caregiver availability."
                        }
                    },{
                        "@type": "Question",
                        "name": "How long will it take for my dog to bond with the sitter?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most dogs take a few days to a week to get comfortable. Gentle introductions, play, and routine care help your dog feel secure faster."
                        }
                    }]
                })
            }}
        />
        <Navbar />

            <Breadcrumb
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Dog Pet Sitters' }
                ]}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden px-4 md:px-0">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-24 right-20 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-24 left-20 w-56 h-56 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 font-display tracking-tight leading-tight uppercase">Trusted Dog Pet Sitters for Your Furry Family</h1>

                        <p className="text-xl lg:text-2xl text-white/95 mb-10 leading-relaxed max-w-4xl mx-auto font-medium shadow-sm">
                            Our experienced dog pet sitters provide safe, loving, and reliable care at home. From daily walks to regular feeding, we keep your dog happy, healthy, and cared for.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12 justify-center">
                            <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm font-bold tracking-widest border border-white/20">✓ Verified Dog Caregivers</div>
                            <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm font-bold tracking-widest border border-white/20">✓ Experienced Dog Lovers</div>
                            <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm font-bold tracking-widest border border-white/20">✓ Safe, Home-Based Care</div>
                            <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm font-bold tracking-widest border border-white/20">✓ Gentle & Responsible Handling</div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center w-full bg-white text-orange-900 font-black text-xl py-5 rounded-2xl shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all"
                            >
                                Book Your Dog Sitter Today
                            </Link>

                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center w-full bg-transparent text-white font-black text-xl py-5 rounded-2xl border-2 border-white/50 hover:bg-white/10 transition-all transform hover:scale-105"
                            >
                                <PhoneIcon className="h-6 w-6 mr-3" />
                                Call Us Now
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20 max-w-3xl mx-auto items-baseline">
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-black mb-1">500+</div>
                                <div className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] opacity-90">Happy Pet Owners</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-black mb-1 text-amber-50">4.8★</div>
                                <div className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] opacity-90">Owner Ratings</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-black mb-1 text-amber-50">100%</div>
                                <div className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] opacity-90">Trusted Dog Sitters</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase">Why Choose EzyHelpers for Dog Pet Sitting?</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold max-w-4xl mx-auto italic">Because your dog deserves care that feels like family.</p>
                        <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                                <div className={`${feature.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm`}>
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">{feature.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16 px-4 md:px-0">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase">Our Dog Sitting Services</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold italic mb-4 max-w-4xl mx-auto">Complete care for your furry companion — at home, daily, or long-term</p>
                        <div className="w-24 h-1.5 bg-amber-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {serviceCategories.map((service, index) => (
                            <div key={index} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                                <div className={`${service.bg} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${service.color} group-hover:rotate-6 transition-all duration-500`}>
                                    <service.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">{service.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed mb-8 flex-grow">{service.desc}</p>
                                <div className={`flex items-center font-black ${service.color} text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform`}>
                                    Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/hire-helper"
                            className="inline-flex items-center justify-center bg-orange-700 text-white font-black text-xl py-5 px-12 rounded-2xl hover:bg-orange-800 shadow-xl transition-all transform hover:scale-105"
                        >
                            Hire Dog Sitter
                            <ArrowRightIcon className="h-5 w-5 ml-3" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who Benefits Section */}
            <section className="section-padding bg-orange-900 text-white">
                <div className="container-custom px-4 md:px-0">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display tracking-tight uppercase">Who Benefits from Our Dog Pet Sitting Services?</h2>
                        <p className="text-orange-100 text-lg md:text-xl font-bold italic">Hiring a dog caretaker makes life easier for those who love pets but lead busy lives.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whoNeedsSection.map((item, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 flex flex-col items-center text-center group hover:bg-white/20 transition-all">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-amber-300 group-hover:scale-110 group-hover:rotate-12 transition-all">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-xs text-orange-50 font-bold leading-relaxed opacity-90">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flexible Plans Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16 px-4">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase text-center">Flexible Dog Sitting Plans to Match Your Lifestyle</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold text-center italic mb-4">Care options that fit your time and your dog’s needs.</p>
                        <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {carePlans.map((plan, index) => (
                            <div key={index} className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 text-center flex flex-col group hover:shadow-2xl hover:border-orange-100 transition-all duration-500">
                                <div className={`${plan.bg} rounded-3xl w-24 h-24 flex items-center justify-center mb-10 mx-auto ${plan.color} group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500`}>
                                    <plan.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-2 font-display uppercase tracking-tight">{plan.title}</h3>
                                <p className={`${plan.color} font-black text-xs mb-8 uppercase tracking-widest`}>{plan.sub}</p>
                                <p className="text-gray-600 font-bold leading-relaxed mb-0">{plan.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How To Hire Process */}
            <section className="section-padding bg-gray-50 relative overflow-hidden px-4 md:px-0">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase">Your Easy 4-Step Dog Sitter Hiring Process</h2>
                        <p className="text-gray-600 text-lg md:text-xl font-bold italic">Simple, transparent booking that connects you with the perfect dog caretaker quickly</p>
                        <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto items-start">
                        {[
                            { step: 1, title: 'Book a Consultation', desc: 'Tell us about your dog and your specific care needs via our website or phone call.' },
                            { step: 2, title: 'Meet Your Match', desc: 'We connect you with trained, background-checked dog caretakers who fit your requirements.' },
                            { step: 3, title: 'Finalize Care Plan', desc: 'Discuss and confirm the schedule, duties, and routines with your assigned sitter.' },
                            { step: 4, title: 'Enjoy Your Peace of Mind', desc: 'Enjoy your day with peace of mind, knowing your pet is cared for with love and attention.' }
                        ].map((item, index) => (
                            <div key={index} className="text-center group relative">
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-orange-200 -z-10"></div>
                                )}
                                <div className="w-24 h-24 bg-orange-800 text-white rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-10 shadow-2xl transform group-hover:scale-110 transition-all duration-300 border-[8px] border-white ring-4 ring-orange-50">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4 px-4 font-display uppercase tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed px-4">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="section-padding bg-orange-900 text-white relative overflow-hidden px-4 md:px-0">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600 rounded-full blur-[160px] opacity-30 -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-700 rounded-full blur-[140px] opacity-30 translate-y-1/2 -translate-x-1/4 animate-pulse delay-1000"></div>
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 font-display tracking-tight leading-[1.1] uppercase">Ready to Give Your Dog the Care They Deserve?</h2>
                            <p className="text-orange-100/90 text-xl md:text-2xl mb-10 font-bold leading-relaxed italic max-w-2xl mx-auto lg:mx-0">
                                Don’t let a busy schedule stop you from giving your dog the care they deserve. Book today for loving and reliable dog sitting at home.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center py-6 px-5 bg-white text-orange-900 font-black text-lg rounded-2xl hover:bg-orange-50 shadow-2xl transition-all transform hover:scale-105"
                                >
                                    Book Your Dog Sitter Now
                                    <ArrowRightIcon className="h-6 w-6 ml-3" />
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center py-6 px-10 bg-white/10 backdrop-blur-md text-white font-black text-xl rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all transform hover:scale-105"
                                >
                                    <PhoneIcon className="h-7 w-7 mr-3" />
                                    Call Today
                                </Link>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-[4rem] p-16 border border-white/20 shadow-2xl group transition-all duration-500 hover:bg-white/15">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-400/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h3 className="text-3xl font-black text-white mb-12 border-b border-white/10 pb-8 font-display uppercase tracking-wider text-center">Pet Care Excellence</h3>
                                <div className="space-y-10">
                                    {[
                                        { icon: ShieldCheckIcon, title: 'Background Verified', desc: 'Every dog sitter is strictly background-checked for safety and trust.' },
                                        { icon: HandThumbUpIcon, title: 'Gentle Handling', desc: 'Caregivers trained in responsible and gentle handling of all breeds.' },
                                        { icon: HeartIcon, title: 'Loving Companionship', desc: 'Expert sitters who truly love dogs and prioritize their happiness.' }
                                    ].map((benefit, idx) => (
                                        <div key={idx} className="flex gap-6 items-start group/item">
                                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover/item:bg-orange-600 transition-all duration-500 group-hover/item:scale-110">
                                                <benefit.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-xl text-white mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h4>
                                                <p className="text-sm text-orange-100/70 font-bold leading-relaxed">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-16 pt-10 border-t border-white/10 text-center uppercase">
                                    <div className="text-4xl font-black text-white mb-2">4.8★</div>
                                    <div className="text-xs uppercase font-black text-amber-300 tracking-[0.3em]">Owner Trust Rating</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Other Services Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase text-center">Explore Other Services</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold text-center italic">Because your home deserves complete care, beyond pet sitting</p>
                        <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {exploreServices.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className={`${service.bg} p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full`}
                            >
                                <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform ${service.color}`}>
                                    <service.icon className="h-8 w-8" />
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight leading-tight">{service.title}</h4>
                                <p className="text-gray-600 font-bold leading-relaxed mb-10 flex-grow text-sm">{service.desc}</p>
                                <div className={`flex items-center font-black ${service.color} group-hover:translate-x-3 transition-all uppercase tracking-widest text-xs`}>
                                    Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom max-w-4xl px-4 md:px-0">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display text-center uppercase tracking-tight">Frequently Asked Questions</h2>
                        <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-4 rounded-full"></div>
                    </div>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    )
}

function FaceSmileIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
    )
}
