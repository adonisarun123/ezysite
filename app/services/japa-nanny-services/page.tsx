import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import {
    PhoneIcon,
    CheckCircleIcon,
    HomeIcon,
    SparklesIcon,
    HeartIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    StarIcon,
    BanknotesIcon,
    ClockIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    HomeModernIcon,
    ArrowRightIcon,
    CheckBadgeIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Japa Nanny Services for Newborn & Mother Care',
    description: 'Hire trained Japa Nannies for postpartum recovery and newborn care. Gentle routines, massages, and mother care your family can trust.',
    openGraph: {
        title: 'Japa Nanny Services for Newborn & Mother Care',
        description: 'Hire trained Japa Nannies for postpartum recovery and newborn care. Gentle routines, massages, and mother care your family can trust.',
        url: 'https://www.ezyhelpers.com/services/japa-nanny-services',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/services/japa-nanny-services'
    }
}

export default function JapaNannyServicesPage() {
    const faqs: FAQItem[] = [
        {
            question: 'What does a Postpartum Care maid do at home?',
            answer: 'A Postpartum Care maid helps new mothers with gentle massages, rest routines, nutrition help, hygiene support, and daily recovery tasks after delivery, making the mother feel comfortable and supported every day at home.'
        },
        {
            question: 'What distinguishes postpartum aftercare from general Childcare services?',
            answer: 'Postpartum aftercare focuses on the mother’s healing, emotions, and recovery, plus newborn care, while general childcare focuses mainly on supervising children and taking care of their daily activities.'
        },
        {
            question: 'Is a Japa Maid a nurse or medical professional?',
            answer: 'No. Japa Maids are non-medical caregivers. They help with newborn routines and mother care but do not perform medical procedures because they are trained for support, not medical tasks.'
        },
        {
            question: 'Why should families choose a professional Japa Nanny?',
            answer: 'Japa Nanny services offer specialized postnatal recovery support, ensuring mothers heal well physically and emotionally, with expert attention to infant and maternal needs.'
        },
        {
            question: 'Will a Japa Maid cook or do housekeeping?',
            answer: 'She will only do light chores like preparing simple food for the mother, washing baby items, and keeping the nursery clean. Heavy cleaning or complete cooking is not included as part of her duties.'
        },
        {
            question: 'How long should I hire a Japa nanny?',
            answer: 'Most families hire for 4–6 weeks. Some extend to 8–12 weeks for full support during recovery and newborn adjustment, depending on the mother’s comfort and healing needs.'
        },
        {
            question: 'How is Japa Nanny pricing structured?',
            answer: 'Pricing depends on duty type (live-in, day, or night), experience, and roles. We offer clear pricing with no hidden charges, so families know exactly what they are paying for.'
        },
        {
            question: 'How is traditional Postpartum Care beneficial for new mothers?',
            answer: 'Traditional care uses massages, warm oils, herbal methods, and special diets that strengthen recovery. Our Japa maids mix tradition with modern hygiene to support healing safely and effectively.'
        },
        {
            question: 'Can I hire a newborn caretaker for only night duty?',
            answer: 'Yes. A night-duty Japa Maid handles feeding, diaper changes, and soothing so the mother gets proper rest during the night without disturbance.'
        }
    ]

    const whyChooseFeatures = [
        {
            title: 'Verified Helpers Only',
            description: 'Our Japa Maids are fully trained and verified, ensuring every family receives safe, trusted care.',
            icon: ShieldCheckIcon,
            bgColor: 'bg-rose-50',
            iconColor: 'text-rose-600'
        },
        {
            title: 'Specialized Training',
            description: 'They follow newborn routines, hygiene steps, and postnatal care methods to support mothers after delivery.',
            icon: AcademicCapIcon,
            bgColor: 'bg-pink-50',
            iconColor: 'text-pink-600'
        },
        {
            title: 'Traditional & Gentle Methods',
            description: 'They use warm massages, natural remedies, and slow routines that help mothers heal faster daily.',
            icon: SparklesIcon,
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Affordable Packages',
            description: 'We provide transparent pricing plans suitable for all families needing newborn and mother care support.',
            icon: BanknotesIcon,
            bgColor: 'bg-rose-50',
            iconColor: 'text-rose-600'
        },
        {
            title: 'Dedicated Professional Care',
            description: 'They focus on mother and baby, giving comfort, rest, and emotional support throughout recovery weeks.',
            icon: HeartIcon,
            bgColor: 'bg-pink-50',
            iconColor: 'text-pink-600'
        },
        {
            title: 'Flexible Scheduling',
            description: 'Choose part-time, full-time, or 24-hour help based on your home needs, comfort everyday easily too.',
            icon: ClockIcon,
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        }
    ]

    const motherCarePoints = [
        { title: 'Gentle Postpartum Massage', desc: 'Helps the mother recover faster, improves blood flow, and reduces pain and tiredness after delivery.' },
        { title: 'Nutritional Support', desc: 'Prepares simple, healthy meals that help with recovery and support good breastmilk production.' },
        { title: 'Diet & Lifestyle Advice', desc: 'Gives basic suggestions on rest, food, hydration, and simple habits that support speedy healing.' },
        { title: 'Physical Recovery Exercises', desc: 'Supports mothers with light stretches and easy movements that keep the body active and improve recovery.' },
        { title: 'Emotional Support', desc: 'Offers comfort, positivity, and guidance during emotional or overwhelming moments after childbirth.' },
        { title: 'Rest Management', desc: 'Helps create a calm atmosphere and supports routines that help the mother get proper sleep.' },
        { title: 'Monitoring the Baby', desc: 'Watches the baby while the mother rests, helping her relax peacefully without worry.' },
        { title: 'Night Care Assistance', desc: 'Handles night feeding, diaper changes, and soothing so mothers get better sleep.' }
    ]

    const newbornCarePoints = [
        { title: 'Safe Baby Bathing', desc: 'Bathes the baby gently using clean methods and mild products.' },
        { title: 'Infant Massage & Soothing', desc: 'Gives warm oil massages and gentle touch therapy to support sleep and healthy growth.' },
        { title: 'Changing Nappies', desc: 'Keeps the baby clean and rash-free with regular diaper changes.' },
        { title: 'Feeding and Burping Support', desc: 'Helps with feeding and makes sure the baby burps properly.' },
        { title: 'Swaddling the Baby', desc: 'Wraps the baby safely to keep them warm, calm, and comfortable.' },
        { title: 'Monitoring Health', desc: 'Observes any discomfort, unusual crying, or behaviour changes and informs the family.' }
    ]

    const additionalSupportPoints = [
        { title: 'Sterilisation of Feeding Equipment', desc: 'Cleans and sterilises bottles, nipples, and utensils to maintain hygiene.' },
        { title: 'Light Household Support', desc: 'Washes baby clothes, cleans the nursery, and prepares simple food for the mother.' }
    ]

    const specializedSkills = [
        { title: 'Knowledge of Traditional Remedies', desc: 'Follows time-tested herbal and natural methods to support healing, rest, and good milk flow, based on your family’s culture.' },
        { title: "Understanding Baby's Communication", desc: 'Quickly recognises why a baby is crying, whether hungry, sleepy, or uncomfortable, and responds calmly.' },
        { title: 'Establishing Healthy Routines', desc: 'Helps create steady feeding, sleeping, and soothing routines that make life easier for both parents and the newborn.' },
        { title: 'Cultural Sensitivity & Traditions', desc: 'Respects your cultural values, food habits, traditional rituals, and personal beliefs during postpartum care.' }
    ]

    const whoNeedsPoints = [
        { title: 'New Parents with First Baby', desc: 'First-time parents get guidance on feeding, sleep, newborn handling, and recovery, making the early days easier.' },
        { title: 'Working Couples Returning to Jobs', desc: 'Ideal for parents balancing work and childcare, ensuring the mother and baby receive consistent help.' },
        { title: 'Families Without Local Support', desc: 'Perfect for those living away from elders or relatives who need dependable hands-on care during recovery.' },
        { title: 'Mothers Recovering from C-Section', desc: 'Special support for mothers after C-section, including help with movement, rest, and gradual healing.' }
    ]

    const exploreServices = [
        { title: 'Professional Chefs', desc: 'Expert chefs craft nutritious, delicious meals tailored to your family’s dietary needs.', href: '/services/professional-chef-for-home', icon: SparklesIcon, color: 'text-orange-600', bg: 'bg-orange-50' },
        { title: 'Chauffeurs for Luxury Cars', desc: 'Professional chauffeurs provide safe, discreet travel in premium vehicles with utmost comfort.', href: '/services/premium-chauffeur-service', icon: BriefcaseIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Travel Nanny', desc: 'Experienced nannies travel with you, ensuring consistent, loving care for your child.', href: '/services/travel-nanny', icon: HeartIcon, color: 'text-pink-600', bg: 'bg-pink-50' }
    ]

    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/services' },
                        { label: 'Japa Nanny Services' }
                    ]}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [{
                                "@type": "Question",
                                "name": "What does a Postpartum Care maid do at home?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A Postpartum Care maid helps new mothers with gentle massages, rest routines, nutrition help, hygiene support, and daily recovery tasks after delivery, making the mother feel comfortable and supported every day at home."
                                }
                            },{
                                "@type": "Question",
                                "name": "What distinguishes postpartum aftercare from general Childcare services?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Postpartum aftercare focuses on the mother’s healing, emotions, and recovery, plus newborn care, while general childcare focuses mainly on supervising children and taking care of their daily activities."
                                }
                            },{
                                "@type": "Question",
                                "name": "Is a Japa Maid a nurse or medical professional?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. Japa Maids are non-medical caregivers. They help with newborn routines and mother care but do not perform medical procedures because they are trained for support, not medical tasks."
                                }
                            },{
                                "@type": "Question",
                                "name": "Why should families choose a professional Japa Nanny?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Japa Nanny services offer specialized postnatal recovery support, ensuring mothers heal well physically and emotionally, with expert attention to infant and maternal needs."
                                }
                            },{
                                "@type": "Question",
                                "name": "Will a Japa Maid cook or do housekeeping?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "She will only do light chores like preparing simple food for the mother, washing baby items, and keeping the nursery clean. Heavy cleaning or complete cooking is not included as part of her duties."
                                }
                            },{
                                "@type": "Question",
                                "name": "How long should I hire a Japa nanny?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most families hire for 4–6 weeks. Some extend to 8–12 weeks for full support during recovery and newborn adjustment, depending on the mother’s comfort and healing needs."
                                }
                            },{
                                "@type": "Question",
                                "name": "How is Japa Nanny pricing structured?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Pricing depends on duty type (live-in, day, or night), experience, and roles. We offer clear pricing with no hidden charges, so families know exactly what they are paying for."
                                }
                            },{
                                "@type": "Question",
                                "name": "How is traditional Postpartum Care beneficial for new mothers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Traditional care uses massages, warm oils, herbal methods, and special diets that strengthen recovery. Our Japa maids mix tradition with modern hygiene to support healing safely and effectively."
                                }
                            },{
                                "@type": "Question",
                                "name": "Can I hire a newborn caretaker for only night duty?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. A night-duty Japa Maid handles feeding, diaper changes, and soothing so the mother gets proper rest during the night without disturbance."
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-rose-700 via-pink-600 to-rose-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-24 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-24 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-5xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Expert Japa Nanny Services for Newborn & Mother Care</h1>

                            <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">Experience expert postpartum support with trained Japa Nannies. They follow traditional methods, gentle routines, and provide complete newborn and mother care to help your recovery after delivery.</p>

                            <div className="flex flex-wrap gap-3 mb-8 justify-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Verified & Trained Japa Maids</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Hygienic Care Practices</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Trusted for Postpartum Care</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Trained in Postnatal & Newborn Care</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center w-full bg-white text-rose-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Book a Japa Maid Today
                                </Link>

                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Call Now
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">1K+</div>
                                    <div className="text-rose-100 text-sm">Families Served</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold flex items-center justify-center">
                                        4.8 <StarIcon className="h-6 w-6 text-white fill-yellow-500 ml-1" />
                                    </div>
                                    <div className="text-rose-100 text-sm">Average Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">350+</div>
                                    <div className="text-rose-100 text-sm">Japa Nannies Engaged</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers’ Japa Maid Service?</h2>
                            <p className="text-lg text-gray-600">Compassionate Postpartum Support You Can Trust</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyChooseFeatures.map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                                    <div className={`${feature.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-6 ${feature.iconColor}`}>
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What to Expect Section */}
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight">What to Expect from a Japa Maid?</h2>
                            <p className="text-lg md:text-xl text-gray-600 font-bold italic">Comprehensive Postpartum and Newborn Care Services</p>
                            <div className="w-24 h-1.5 bg-rose-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-7xl mx-auto">
                            {/* Mother Care - Full Height Column */}
                            <div className="bg-white rounded-[2.5rem] p-10 border border-rose-100 shadow-[0_10px_40px_-15px_rgba(225,29,72,0.1)] flex flex-col h-full relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0 text-rose-600">
                                        <HeartIcon className="h-9 w-9" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 font-display">
                                        Post-Delivery Mother Care
                                    </h3>
                                </div>
                                <ul className="space-y-8 flex-grow">
                                    {motherCarePoints.map((point, index) => (
                                        <li key={index} className="flex gap-5 group/item">
                                            <div className="mt-1.5 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 group-hover/item:bg-rose-500 transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-rose-500 group-hover/item:bg-white"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-black text-gray-900 text-lg mb-1 leading-tight">{point.title}</h4>
                                                <p className="text-sm text-gray-600 font-bold leading-relaxed">{point.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Column - Stacked Care Cards */}
                            <div className="flex flex-col gap-8">
                                {/* Newborn Care */}
                                <div className="bg-white rounded-[2.5rem] p-10 border border-pink-100 shadow-[0_10px_40px_-15px_rgba(236,72,153,0.1)] relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center shrink-0 text-pink-600">
                                            <SparklesIcon className="h-9 w-9" />
                                        </div>
                                        <h3 className="text-2xl font-black text-gray-900 font-display">
                                            Newborn Care After Delivery
                                        </h3>
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                                        {newbornCarePoints.map((point, index) => (
                                            <li key={index} className="flex gap-4 group/item">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center shrink-0 group-hover/item:bg-pink-500 transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 group-hover/item:bg-white"></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-gray-900 text-base mb-1 leading-tight">{point.title}</h4>
                                                    <p className="text-xs text-gray-600 font-bold leading-relaxed">{point.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Additional Support */}
                                <div className="bg-white rounded-[2.5rem] p-10 border border-purple-100 shadow-[0_10px_40px_-15px_rgba(147,51,234,0.1)] relative overflow-hidden group flex-grow">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0 text-purple-600">
                                            <HomeModernIcon className="h-9 w-9" />
                                        </div>
                                        <h3 className="text-2xl font-black text-gray-900 font-display">
                                            Additional Support Services
                                        </h3>
                                    </div>
                                    <ul className="space-y-8">
                                        {additionalSupportPoints.map((point, index) => (
                                            <li key={index} className="flex gap-5 group/item">
                                                <div className="mt-1.5 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 group-hover/item:bg-purple-500 transition-colors">
                                                    <div className="w-2 h-2 rounded-full bg-purple-500 group-hover/item:bg-white"></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-gray-900 text-lg mb-1 leading-tight">{point.title}</h4>
                                                    <p className="text-sm text-gray-600 font-bold leading-relaxed">{point.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Centered CTA */}
                        <div className="text-center mt-12">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center bg-rose-600 text-white font-black text-xl py-5 px-12 rounded-2xl hover:bg-rose-700 hover:shadow-2xl transition-all transform hover:scale-105"
                            >
                                Book Japa Maid Now
                                <ArrowRightIcon className="h-5 w-5 ml-3" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Specialized Skills */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Specialized Skills of a Japa Nanny</h2>
                            <p className="text-lg text-gray-600">Unique expertise that makes the postpartum period easier and healthier.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {specializedSkills.map((skill, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center shrink-0 text-rose-600">
                                        <div className="font-display font-bold text-xl">{index + 1}</div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium">{skill.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who Needs Postpartum Care */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Needs Postpartum Care Service?</h2>
                            <p className="text-lg text-gray-600">Professional support for families during the early newborn phase</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {whoNeedsPoints.map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col group">
                                    <div className="w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center mb-6 mx-auto text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                        <UserGroupIcon className="h-7 w-7" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Flexible Care Options */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Flexible Care Options: Live-in or Day/Night Japa Maids</h2>
                            <p className="text-lg text-gray-600">Choose the Best Care Schedule for Your Family</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {[
                                { title: 'Live-in Japa Maid', sub: '24-Hour Support for Mother & Baby', desc: 'Ideal for families needing round-the-clock care, including feeding, bathing, massage, and light chores. A separate room is provided.', icon: HomeIcon, color: 'text-rose-600', bg: 'bg-rose-100' },
                                { title: 'Day Duty Japa Maid', sub: 'Daytime Assistance (8 AM–8 PM)', desc: 'Perfect for daytime newborn and mother care, including feeding, massage, and household help.', icon: ClockIcon, color: 'text-pink-600', bg: 'bg-pink-100' },
                                { title: 'Night Duty Japa Maid', sub: 'Overnight Support (8 PM–8 AM)', desc: 'Helps with night feeding, diaper changes, and soothing, allowing the mother to rest fully.', icon: ClockIcon, color: 'text-purple-600', bg: 'bg-purple-100' }
                            ].map((option, index) => (
                                <div key={index} className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 text-center flex flex-col">
                                    <div className={`${option.bg} rounded-2xl w-20 h-20 flex items-center justify-center mb-8 mx-auto ${option.color}`}>
                                        <option.icon className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">{option.title}</h3>
                                    <p className="text-rose-600 font-bold text-sm mb-6 uppercase tracking-wider">{option.sub}</p>
                                    <p className="text-gray-600 leading-relaxed font-bold">{option.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Boundaries Section */}
                        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-3xl p-10 border border-rose-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display text-center">Boundaries & Non-Medical Scope</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <div className="bg-rose-50 text-rose-700 px-6 py-3 rounded-full font-bold text-sm border border-rose-100">
                                    Japa Maids, Postpartum Maids, and Newborn Nannies are non-medical caregivers.
                                </div>
                                <div className="bg-rose-50 text-rose-700 px-6 py-3 rounded-full font-bold text-sm border border-rose-100 text-center">
                                    They do not diagnose, give medicines, or perform medical work.
                                </div>
                            </div>
                            <p className="text-center mt-8 text-gray-600 font-bold leading-relaxed max-w-2xl mx-auto">
                                Their focus is daily newborn care, mother support, hygiene, massage, rest routines, and emotional comfort.
                            </p>
                        </div>
                    </div>
                </section>

                {/* How to Hire Segment */}
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight">How To Hire Japa Maids Through EzyHelpers</h2>
                            <p className="text-gray-600 text-lg md:text-xl font-bold">Simple, quick, and hassle-free booking for your postpartum care needs</p>
                            <div className="w-24 h-1.5 bg-rose-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {[
                                { step: 1, title: 'Share Your Requirements', desc: 'Call or book online with your care needs, start date, and Japa maid experience preference.' },
                                { step: 2, title: 'Meet Shortlisted Maids', desc: 'We send 2–3 verified Japa maids for you to interview and choose the best fit.' },
                                { step: 3, title: 'Start the Service', desc: 'Once confirmed, your selected Japa caretaker begins the service on the agreed date.' }
                            ].map((item, index) => (
                                <div key={index} className="text-center group">
                                    <div className="w-20 h-20 bg-rose-700 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-xl transform group-hover:scale-110 transition-transform duration-300 border-4 border-white ring-2 ring-rose-50">
                                        {item.step}
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 px-4">{item.title}</h3>
                                    <p className="text-gray-600 font-bold leading-relaxed px-6">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bonding Info Section */}
                <section className="section-padding bg-rose-50 border-y border-rose-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center px-4">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">How Japa Maids Help Build Early Parent-Child Bonding</h2>
                            <div className="bg-white rounded-3xl p-10 shadow-sm border border-rose-100">
                                <p className="text-lg text-gray-600 font-bold leading-relaxed mb-6">
                                    The early weeks after childbirth are a crucial time for establishing a strong emotional connection between parents and their newborn. Japa caretakers play an essential role in fostering this bond through compassionate, attentive care tailored to support both mother and baby. By gently assisting with newborn routines such as feeding, bathing, and soothing, Japa maids create a calm environment that encourages relaxed and positive interactions.
                                </p>
                                <p className="text-lg text-gray-600 font-bold leading-relaxed italic border-t border-rose-50 pt-6">
                                    Moreover, Japa Nannies provide emotional support and reassurance to new mothers, helping them navigate postpartum challenges and encouraging skin-to-skin contact and responsive feeding practices. This holistic approach nurtures the mother’s well-being, which directly benefits the quality of bonding.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Redesign */}
                <section className="section-padding bg-rose-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-600 rounded-full blur-[160px] opacity-20 -translate-y-1/2 translate-x-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-700 rounded-full blur-[140px] opacity-20 translate-y-1/2 -translate-x-1/4"></div>
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content Column */}
                            <div className="text-center lg:text-left">
                                <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/20">
                                    <SparklesIcon className="h-5 w-5 text-rose-300 mr-2" />
                                    <span className="text-sm font-black uppercase tracking-widest text-rose-100">Premium Postpartum Help</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-display tracking-tight leading-[1.1]">Ready to Welcome Expert Postpartum Care?</h2>
                                <p className="text-rose-100/90 text-xl md:text-2xl mb-6 font-bold leading-relaxed italic max-w-xl">
                                    Don’t handle the postpartum phase alone.
                                </p>
                                <p className="text-white/80 text-lg md:text-xl mb-12 font-bold leading-[1.6] max-w-2xl">
                                    Our trained Japa Maids offer the gentle, professional care every new mother deserves.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                    <Link
                                        href="/hire-helper"
                                        className="inline-flex items-center justify-center py-5 px-10 bg-white text-rose-900 font-black text-xl rounded-2xl hover:bg-rose-50 transition-all shadow-2xl hover:shadow-rose-500/20 transform hover:scale-105"
                                    >
                                        Book Japa Maid Now
                                        <ArrowRightIcon className="h-5 w-5 ml-3" />
                                    </Link>
                                    <Link
                                        href="tel:+918031411776"
                                        className="inline-flex items-center justify-center py-5 px-10 bg-white/10 backdrop-blur-md text-white font-black text-xl rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all transform hover:scale-105"
                                    >
                                        <PhoneIcon className="h-6 w-6 mr-3" />
                                        Call Us
                                    </Link>
                                </div>
                            </div>

                            {/* Right Trust Card Column */}
                            <div className="relative hidden lg:block">
                                <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-[3rem] p-12 border border-white/20 shadow-2xl overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                    <h3 className="text-2xl font-black text-white mb-10 border-b border-white/10 pb-6">Why Families Trust EzyHelpers</h3>

                                    <div className="space-y-8">
                                        {[
                                            { icon: CheckBadgeIcon, title: '24/7 Expert Support', desc: 'Continuous care for mother and newborn whenever you need it.' },
                                            { icon: HeartIcon, title: 'Traditional Healing', desc: 'Combining time-tested rituals with modern hygiene standards.' },
                                            { icon: ShieldCheckIcon, title: 'Verified Specialists', desc: 'Every Japa Nanny undergoes rigorous background and skill checks.' }
                                        ].map((benefit, idx) => (
                                            <div key={idx} className="flex gap-5 group items-center">
                                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-rose-600 group-hover:scale-110 transition-all duration-300">
                                                    <benefit.icon className="h-7 w-7 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-lg text-white mb-1">{benefit.title}</h4>
                                                    <p className="text-sm text-rose-100/70 font-bold leading-relaxed">{benefit.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/10 text-center">
                                        <div className="text-3xl font-black text-white mb-1 tracking-widest">1,000+</div>
                                        <div className="text-xs uppercase font-black text-rose-300 tracking-widest">Happy Families Supported</div>
                                    </div>
                                </div>

                                {/* Floating Decorative Elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-500/30 rounded-full blur-2xl animate-pulse"></div>
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rose-500/30 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Explore Other Services */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
                            <div className="w-24 h-1.5 bg-rose-600 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                            {exploreServices.map((service, index) => (
                                <Link
                                    key={index}
                                    href={service.href}
                                    className={`${service.bg} p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full`}
                                >
                                    <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform ${service.color}`}>
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 font-bold leading-relaxed mb-10 flex-grow">{service.desc}</p>
                                    <div className={`flex items-center font-black ${service.color} group-hover:translate-x-2 transition-transform`}>
                                        Learn More <ArrowRightIcon className="h-5 w-5 ml-2" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
                            <div className="w-24 h-1 bg-rose-600 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
