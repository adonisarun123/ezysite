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
    StarIcon,
    ClockIcon,
    HomeIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    HomeModernIcon,
    ArrowRightIcon,
    FaceSmileIcon,
    GlobeAltIcon,
    LifebuoyIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Special Needs Caregiver for Special Kids at Home',
    description: 'Special needs caregiver services for differently-abled children. Background-verified caregivers offer daily support, therapy assistance & emotional care at home.',
    openGraph: {
        title: 'Special Needs Caregiver for Special Kids at Home',
        description: 'Special needs caregiver services for differently-abled children. Background-verified caregivers offer daily support, therapy assistance & emotional care at home.',
        url: 'https://www.ezyhelpers.com/services/special-needs-caregiver',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/services/special-needs-caregiver'
    }
}

export default function SpecialNeedsCaregiverPage() {
    const faqs: FAQItem[] = [
        {
            question: 'Can you provide Special Needs caregivers for specific conditions?',
            answer: 'We do not provide medical or specialised disability caregivers. However, we offer trained Nanny helpers who assist children with special needs like autism, ADHD, Down syndrome, speech delay, learning difficulties, and mild physical challenges by supporting daily routines, hygiene, meals, supervision, and emotional comfort at home.'
        },
        {
            question: 'What is a special needs Nanny at EzyHelpers?',
            answer: 'A special needs Nanny at EzyHelpers is a trained home helper, not a therapist or medical professional. They support the child’s daily care, routines, and emotional well-being under the guidance of parents and doctors.'
        },
        {
            question: 'What is the role of a special needs assistant?',
            answer: 'A special needs assistant supports a Special Child by helping with daily activities, therapy routines, learning tasks, mobility, and behaviour management. Their role is to encourage independence while maintaining a calm, safe, and nurturing home environment for children with special abilities.'
        },
        {
            question: 'How can parents get help for a special needs child?',
            answer: 'Parents can hire a trained nanny helper who understands their child’s daily needs. EzyHelpers provides background-verified helpers who support routines, emotional care, and basic therapy activities at home.'
        },
        {
            question: 'How long will it take for my child to bond with the caregiver?',
            answer: 'Most children take a few weeks to feel comfortable. Regular routines, kind talking, and daily care help build trust slowly.'
        },
        {
            question: 'What if the child resists routines or caregiver support?',
            answer: 'Caregivers handle this calmly with patience and gentle encouragement. No force is used. The child’s comfort always comes first.'
        },
        {
            question: 'Are female caregivers available for girl children?',
            answer: 'Yes. Families can request female caregivers for comfort and privacy. We ensure respectful, safe, and professional special needs home care based on every family’s preference.'
        },
        {
            question: 'Do caregivers provide therapy or medical treatment?',
            answer: 'No. Our nanny helpers do not provide therapy or medical treatment. They only assist with exercises, routines, and care as instructed by parents or healthcare professionals.'
        }
    ]

    const whyChooseFeatures = [
        { title: 'Trained for Special Care Support', description: 'Helpers are trained to support children with special needs or mild physical challenges through patience and engagement.', icon: AcademicCapIcon, bg: 'bg-teal-50', color: 'text-teal-600' },
        { title: 'Flexible Timing Options', description: 'Choose full-time, part-time, or live-in Nanny helpers who support your child\'s daily schedule and home routine.', icon: ClockIcon, bg: 'bg-cyan-50', color: 'text-cyan-600' },
        { title: 'Affordable Home-Based Support', description: 'Cost-effective compared to therapy centres, offering consistent home support for daily needs.', icon: HomeIcon, bg: 'bg-emerald-50', color: 'text-emerald-600' },
        { title: 'Verified & Trustworthy', description: 'All helpers are background-verified, police-checked, and trained in child safety responsibilities.', icon: ShieldCheckIcon, bg: 'bg-teal-50', color: 'text-teal-600' },
        { title: 'Routine-Based Care', description: 'Care is provided based on parent instructions and doctor-advised routines for comfort and familiarity.', icon: CheckCircleIcon, bg: 'bg-cyan-50', color: 'text-cyan-600' },
        { title: 'Experience with Special Needs', description: 'Our helpers support children with speech delay, learning difficulty, mild mobility, and supervision needs.', icon: UserGroupIcon, bg: 'bg-emerald-50', color: 'text-emerald-600' }
    ]

    const whatCaregiversDo = [
        { title: 'Hygiene Assistance', desc: 'Daily hygiene assistance in a patient and careful way.', icon: SparklesIcon },
        { title: 'Meal Support', desc: 'Meal preparation and feeding support tailored to child needs.', icon: HeartIcon },
        { title: 'Therapy Helpers', desc: 'Helping during therapy exercises as guided by parents.', icon: AcademicCapIcon },
        { title: 'Educational Play', desc: 'Playtime and basic learning activities for engagement.', icon: FaceSmileIcon },
        { title: 'Mobility Assistance', desc: 'Mobility assistance (non-medical) within the home.', icon: GlobeAltIcon },
        { title: 'Emotional Comfort', desc: 'Emotional comfort and companionship for your child.', icon: LifebuoyIcon },
        { title: 'Routine Habit Support', desc: 'Support with eating, dressing, and toileting routines.', icon: UserGroupIcon },
        { title: 'Behaviour Support', desc: 'Managing behaviour support with patience and kindness.', icon: ChatBadgeIcon },
        { title: 'Comm. Encouragement', desc: 'Encouraging communication through daily interaction.', icon: SparklesIcon },
        { title: 'Medicine Reminders', desc: 'Reminding for non-medical medicine dosage strictly.', icon: ClockIcon },
        { title: 'Home Supervision', desc: 'Continuous home supervision for safety and security.', icon: ShieldCheckIcon },
        { title: 'Outdoor Visit Support', desc: 'Support during outdoor or therapy visit sessions.', icon: HomeModernIcon }
    ]

    const whoNeedsSection = [
        { title: 'Daily Support Needs', desc: 'Parents needing daily home support for children with special care needs.', icon: HomeIcon },
        { title: 'Diverse Care Needs', desc: 'Families managing autism, ADHD, slow learning, or mild physical challenges.', icon: SparklesIcon },
        { title: 'Busy Working Parents', desc: 'Working parents needing reliable and patient supervision at home.', icon: BriefcaseIcon },
        { title: 'Solo Families', desc: 'Families without nearby relatives for regular childcare support.', icon: UserGroupIcon },
        { title: 'Non-Medical Focus', desc: 'Parents looking for routine-based, non-medical care at home.', icon: ShieldCheckIcon }
    ]

    const benefitCards = [
        { title: 'Comfortable Home Environment', desc: 'Your child feels safe and calm at home with familiar people, toys, and routines.', icon: HomeIcon, color: 'text-teal-600', bg: 'bg-teal-50' },
        { title: 'Complete Personal Attention', desc: 'A full-time caregiver gives your child full attention with patience and care.', icon: HeartIcon, color: 'text-cyan-600', bg: 'bg-cyan-50' },
        { title: 'Less Chance of Falling Sick', desc: 'Home care reduces infections and ensures good hygiene and regular meals.', icon: ShieldCheckIcon, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { title: 'Follows Daily Routines', desc: 'Caregivers follow medicine, therapy, and food routines as advised by parents or doctors.', icon: CheckCircleIcon, color: 'text-teal-600', bg: 'bg-teal-50' },
        { title: 'No Language Barrier', desc: 'Caregivers speak your language and prepare familiar home-style food.', icon: GlobeAltIcon, color: 'text-cyan-600', bg: 'bg-cyan-50' }
    ]

    const personalisedOptions = [
        {
            title: 'Live-In Special Needs Nanny',
            sub: '24/7 Full Support',
            desc: 'Best for children who need full-day care and regular support at home. Includes medicine reminders and therapy support.',
            includes: ['24/7 supervision', 'Help with daily routines', 'Medicine/Therapy reminders', 'Emotional care'],
            icon: HomeModernIcon,
            color: 'text-teal-600',
            bg: 'bg-teal-50'
        },
        {
            title: 'Full-Time Special Needs Nanny',
            sub: '8-10 Hours Daytime',
            desc: 'Ideal for daytime support during working hours. Manages meals, play, and hygiene routines effectively.',
            includes: ['Daytime supervision', 'Help with meals, play, learning', 'Support with hygiene'],
            icon: ClockIcon,
            color: 'text-cyan-600',
            bg: 'bg-cyan-50'
        },
        {
            title: 'Part-Time Special Needs Nanny',
            sub: 'Flexible Hours',
            desc: 'For families who need help for a few hours only. Perfect for specific time blocks or weekend support.',
            includes: ['Care for selected hours', 'Help with homework/therapy', 'Weekend/Evening support'],
            icon: SparklesIcon,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50'
        }
    ]

    const relatedServices = [
        { title: 'Elderly Care at Home', desc: 'Trained attendants help seniors with medicines, meals, and mobility.', href: '#', icon: HeartIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { title: 'Newborn & Baby Care', desc: 'Japa maids and nannies support mothers with feeding and routines.', href: '/services/japa-nanny-services', icon: SparklesIcon, color: 'text-rose-600', bg: 'bg-rose-50' },
        { title: 'Patient Care Attendants', desc: 'Bedside support, hygiene care, and home help for patients.', href: '#', icon: ShieldCheckIcon, color: 'text-blue-600', bg: 'bg-blue-50' }
    ]

    return (
        <main className="min-h-screen">
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                        "@type": "Question",
                        "name": "Can you provide Special Needs caregivers for specific conditions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We do not provide medical or specialised disability caregivers. However, we offer trained Nanny helpers who assist children with special needs like autism, ADHD, Down syndrome, speech delay, learning difficulties, and mild physical challenges by supporting daily routines, hygiene, meals, supervision, and emotional comfort at home."
                        }
                    },{
                        "@type": "Question",
                        "name": "What is a special needs Nanny at EzyHelpers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A special needs Nanny at EzyHelpers is a trained home helper, not a therapist or medical professional. They support the child’s daily care, routines, and emotional well-being under the guidance of parents and doctors."
                        }
                    },{
                        "@type": "Question",
                        "name": "What is the role of a special needs assistant?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A special needs assistant supports a Special Child by helping with daily activities, therapy routines, learning tasks, mobility, and behaviour management. Their role is to encourage independence while maintaining a calm, safe, and nurturing home environment for children with special abilities."
                        }
                    },{
                        "@type": "Question",
                        "name": "How can parents get help for a special needs child?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Parents can hire a trained nanny helper who understands their child’s daily needs. EzyHelpers provides background-verified helpers who support routines, emotional care, and basic therapy activities at home."
                        }
                    },{
                        "@type": "Question",
                        "name": "How long will it take for my child to bond with the caregiver?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most children take a few weeks to feel comfortable. Regular routines, kind talking, and daily care help build trust slowly."
                        }
                    },{
                        "@type": "Question",
                        "name": "What if the child resists routines or caregiver support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Caregivers handle this calmly with patience and gentle encouragement. No force is used. The child’s comfort always comes first."
                        }
                    },{
                        "@type": "Question",
                        "name": "Are female caregivers available for girl children?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Families can request female caregivers for comfort and privacy. We ensure respectful, safe, and professional special needs home care based on every family’s preference."
                        }
                    },{
                        "@type": "Question",
                        "name": "Do caregivers provide therapy or medical treatment?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Our nanny helpers do not provide therapy or medical treatment. They only assist with exercises, routines, and care as instructed by parents or healthcare professionals."
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
                    { label: 'Special Needs Caregiver' }
                ]}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-teal-700 via-cyan-600 to-emerald-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-24 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-24 left-20 w-56 h-56 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 font-display tracking-tight leading-tight">Expert Special Needs Caregiver for Your Child</h1>

                        <p className="text-xl lg:text-2xl text-teal-50 mb-4 font-bold italic opacity-90 tracking-wide">Every child deserves patient and understanding care.</p>

                        <p className="text-lg lg:text-xl text-white/95 mb-10 leading-relaxed max-w-4xl mx-auto font-medium">
                            At EzyHelpers, we provide trained Nanny helpers who support children with special needs in their daily home routines. Our caregivers are non-medical helpers, assisting with hygiene, meals, supervision, emotional care, and therapy support as guided by parents or doctors.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10 justify-center">
                            <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm tracking-widest border border-white/20">✓ Trained Caregivers</div>
                            <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm tracking-widest border border-white/20">✓ Child-Safe & Home-Based Care</div>
                            <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm tracking-widest border border-white/20">✓ Trained in Special Care</div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center w-full bg-white text-teal-800 font-black text-xl py-5 rounded-2xl shadow-xl hover:shadow-white/20 transform hover:scale-105 transition-all"
                            >
                                Book a Caregiver Today
                            </Link>

                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center w-full bg-transparent text-white font-black text-xl py-5 rounded-2xl border-2 border-white/50 hover:bg-white/10 transition-all transform hover:scale-105"
                            >
                                <PhoneIcon className="h-6 w-6 mr-3" />
                                Call Now
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20 max-w-3xl mx-auto items-baseline">
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-black mb-1">4.9★</div>
                                <div className="text-xs lg:text-sm font-black uppercase tracking-widest opacity-80">Happy Parents</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-black mb-1 text-teal-50">100%</div>
                                <div className="text-xs lg:text-sm font-black uppercase tracking-widest opacity-80">Safe & Secure</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-black mb-1 text-teal-50">100%</div>
                                <div className="text-xs lg:text-sm font-black uppercase tracking-widest opacity-80">Verified Staff</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="section-padding bg-gray-50 border-b border-gray-100 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight">Why Choose EzyHelpers’ Special Needs Nanny?</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold max-w-4xl mx-auto italic">Because we believe children with special needs deserve love, respect, and proper care, right at home.</p>
                        <div className="w-24 h-1.5 bg-teal-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center">
                                <div className={`${feature.bg} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                    <feature.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Caregivers Do Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase">What Our Special Needs Caregivers Do</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold italic mb-4 max-w-3xl mx-auto">Our Nanny helpers focus on daily care and emotional support, not medical treatment.</p>
                        <div className="w-24 h-1.5 bg-cyan-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
                        {whatCaregiversDo.map((item, index) => (
                            <div key={index} className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100 flex flex-col items-center text-center group hover:bg-teal-600 hover:border-teal-700 transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-teal-700 group-hover:scale-110 transition-transform shadow-sm">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-sm font-black text-gray-900 group-hover:text-white transition-colors">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/hire-helper"
                            className="inline-flex items-center justify-center bg-teal-700 text-white font-black text-xl py-5 px-12 rounded-2xl hover:bg-teal-800 shadow-xl transition-all transform hover:scale-105"
                        >
                            Book Special Needs Nanny
                            <ArrowRightIcon className="h-5 w-5 ml-3" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who Needs Section */}
            <section className="section-padding bg-gray-50 relative">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight">Who Needs Special Needs Nanny Services?</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold max-w-3xl mx-auto">Our special needs Nanny agency supports all kinds of families who need reliable, patient, and trained helpers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {whoNeedsSection.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                    <item.icon className="h-7 w-7" />
                                </div>
                                <p className="text-sm text-gray-900 font-black leading-tight">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight">Benefits of Home Care for Special Children</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold max-w-3xl mx-auto italic">Home-based care for special needs keeps children happy, safe, and emotionally secure.</p>
                        <div className="w-24 h-1.5 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {benefitCards.map((benefit, index) => (
                            <div key={index} className="flex flex-col items-start px-4">
                                <div className={`${benefit.bg} ${benefit.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                                    <benefit.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight">{benefit.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personalized Options Section */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight">Personalised Special Needs Care Options</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold italic">Flexible Nanny support to match your child’s needs and your daily routine.</p>
                        <div className="w-24 h-1.5 bg-cyan-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {personalisedOptions.map((option, index) => (
                            <div key={index} className="bg-white rounded-[3rem] p-12 shadow-sm border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500">
                                <div className={`${option.bg} w-24 h-24 rounded-3xl flex items-center justify-center mb-10 mx-auto ${option.color} group-hover:scale-110 transition-transform duration-500`}>
                                    <option.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-2 font-display text-center uppercase tracking-tight">{option.title}</h3>
                                <p className={`${option.color} font-black text-sm mb-6 text-center tracking-widest uppercase`}>{option.sub}</p>
                                <p className="text-gray-600/90 font-bold leading-relaxed mb-8 text-center">{option.desc}</p>
                                <ul className="space-y-4 border-t border-gray-100 pt-8 mt-auto">
                                    {option.includes.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-bold">
                                            <div className={`w-2 h-2 rounded-full ${option.color.replace('text', 'bg')}`}></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="section-padding bg-teal-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-400 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl text-white font-black mb-10 font-display tracking-tight leading-tight text-center md:text-left">Understanding the Need for a Special Needs Nanny (Babysitter)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl font-bold opacity-90 italic text-teal-50">
                            <div className="space-y-8 leading-relaxed">
                                <p>In India, every parent wants the best for their child. But when your child has special needs such as autism, Down syndrome, learning difficulties, or a physical disability, they need extra care, patience, and understanding.</p>
                                <p>A special needs Nanny or babysitter from EzyHelpers is not just another helper; they are trained caregivers who truly understand your child. They assist with daily routines, therapy activities, and playtime in ways that support your child’s unique growth.</p>
                            </div>
                            <div className="space-y-8 leading-relaxed">
                                <p>Many parents today have demanding jobs and limited time. Sometimes, all you need is someone trustworthy to help with your child’s needs while you handle other responsibilities.</p>
                                <p>That’s where a full-time special needs Nanny becomes part of your extended family, giving your child personal attention and helping you manage life with confidence and peace.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How To Book Segment */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight uppercase">How To Book Full-Time Special Needs Nanny</h2>
                        <p className="text-gray-600 text-lg md:text-xl font-bold italic">A clear, reliable process to find the right caregiver who truly understands your child’s needs.</p>
                        <div className="w-24 h-1.5 bg-teal-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                        {[
                            { step: 1, title: 'Share Your Need', desc: 'Call us or fill the form with your child\'s age and care needs.' },
                            { step: 2, title: 'Choose a Caregiver', desc: 'We send verified Nanny profiles for you to select.' },
                            { step: 3, title: 'Confirm Details', desc: 'Fix work hours, duties, and salary after discussion.' },
                            { step: 4, title: 'Start Care', desc: 'The Nanny starts work, and our team supports you anytime.' }
                        ].map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 bg-teal-800 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-xl transform group-hover:scale-110 transition-all duration-300 border-4 border-white ring-2 ring-teal-50">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4 px-4">{item.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed px-4">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Redesign */}
            <section className="section-padding bg-teal-900 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-600 rounded-full blur-[160px] opacity-30 -translate-y-1/2 translate-x-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-700 rounded-full blur-[140px] opacity-30 translate-y-1/2 -translate-x-1/4"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-display tracking-tight leading-[1.1]">Book Your Special Needs Caregiver Now</h2>
                            <p className="text-teal-100/90 text-xl md:text-2xl mb-8 font-bold leading-relaxed italic max-w-xl">
                                Every special child deserves patient, loving, and trained care.
                            </p>
                            <p className="text-white/80 text-lg md:text-xl mb-12 font-bold leading-[1.6] max-w-2xl">
                                Don't struggle alone, let our expert caregivers support your child's growth and give your family the peace of mind you deserve.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center py-5 px-12 bg-white text-teal-900 font-black text-xl rounded-2xl hover:bg-teal-50 transition-all shadow-2xl transform hover:scale-105"
                                >
                                    Book Your Caregiver
                                    <ArrowRightIcon className="h-5 w-5 ml-3" />
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center py-5 px-10 bg-white/10 backdrop-blur-md text-white font-black text-xl rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all transform hover:scale-105"
                                >
                                    <PhoneIcon className="h-6 w-6 mr-3" />
                                    Call Now
                                </Link>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-[3rem] p-12 border border-white/20 shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h3 className="text-2xl font-black text-white mb-10 border-b border-white/10 pb-6 font-display uppercase tracking-wider text-center">Safe Home Care Excellence</h3>
                                <div className="space-y-8">
                                    {[
                                        { icon: HeartIcon, title: 'Patient & Loving Care', desc: 'Expert helpers who prioritize child comfort and emotional safety.' },
                                        { icon: ShieldCheckIcon, title: 'Verified Backgrounds', desc: 'Aadhaar, address, and local verification for every single staff.' },
                                        { icon: ClockIcon, title: 'Transparent Booking', desc: 'No hidden fees. Full support from hiring to daily service.' }
                                    ].map((benefit, idx) => (
                                        <div key={idx} className="flex gap-5 items-start px-4">
                                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-teal-600 transition-all duration-300">
                                                <benefit.icon className="h-7 w-7 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-lg text-white mb-1 leading-tight">{benefit.title}</h4>
                                                <p className="text-sm text-teal-100/70 font-bold leading-relaxed">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                                    <div className="text-3xl font-black text-white mb-1 uppercase tracking-widest">100%</div>
                                    <div className="text-xs uppercase font-black text-teal-300 tracking-widest">Child-Safe Professionals</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase">Explore Our Related Home Care Services</h2>
                        <div className="w-24 h-1.5 bg-teal-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {relatedServices.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className={`${service.bg} p-10 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all group flex flex-col h-full`}
                            >
                                <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform ${service.color}`}>
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h4>
                                <p className="text-gray-600 font-bold leading-relaxed mb-10 flex-grow">{service.desc}</p>
                                <div className={`flex items-center font-black ${service.color} group-hover:translate-x-2 transition-transform uppercase tracking-widest text-sm`}>
                                    Learn More <ArrowRightIcon className="h-5 w-5 ml-2" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-display">FAQs</h2>
                        <div className="w-24 h-1 bg-teal-600 mx-auto mt-4 rounded-full"></div>
                    </div>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    )
}

function ChatBadgeIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.303.025-.607.038-.913.038a45.65 45.65 0 01-1.353-.02c-.303-.005-.606-.013-.907-.024a.75.75 0 00-.51.18l-2.003 1.648a.75.75 0 01-1.212-.584v-1.124a.75.75 0 00-.75-.75H5.45c-1.133 0-1.98-.964-1.98-2.1v-4.286c0-.969.616-1.813 1.5-2.097a44.82 44.82 0 0115.275 0z" />
        </svg>
    )
}
