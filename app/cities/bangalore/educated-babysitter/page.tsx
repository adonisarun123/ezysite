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
    CalendarDaysIcon,
    ClipboardDocumentListIcon,
    GlobeAsiaAustraliaIcon,
    HeartIcon,
    ClockIcon,
    ShieldCheckIcon,
    FireIcon,
    UserGroupIcon,
    BriefcaseIcon,
    ClockIcon as TimeIcon,
    HomeModernIcon,
    BoltIcon,
    TruckIcon,
    MapPinIcon,
    AcademicCapIcon,
    CurrencyDollarIcon,
    StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Educated Babysitter in Bangalore | Child Development Focus',
    description: 'Book an Educated Babysitter in Bangalore for safe, verified childcare focused on homework help, English fluency, and child development.',
    openGraph: {
        title: 'Educated Babysitter in Bangalore | Child Development Focus',
        description: 'Book an Educated Babysitter in Bangalore for safe, verified childcare focused on homework help, English fluency, and child development.',
        url: 'https://www.ezyhelpers.com/cities/bangalore/educated-babysitter',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/cities/bangalore/educated-babysitter'
    }
}

export default function BangaloreEducatedBabysitter() {
    const faqs: FAQItem[] = [
        { question: 'How is an Educated Babysitter different from a regular Babysitter?', answer: 'Unlike regular Babysitters who mainly supervise children, an Educated Babysitter actively supports learning, homework, communication skills, and emotional growth. They are trained to engage children intellectually and socially, not just keep them safe.' },
        { question: 'Are Educated Babysitters suitable for school-going children?', answer: 'Yes. Educated Babysitters are well-suited for school-going children. They help children complete homework on time, revise lessons, read textbooks, and practise English speaking. They also maintain a proper after-school routine, limit distractions, and guide children with discipline, focus, and good study habits in a calm and patient manner.' },
        { question: 'What age groups are covered under Educated Babysitter services?', answer: 'Educated Babysitters support infants, toddlers, preschoolers, and school-age children, adapting care, learning activities, and communication based on the child’s age and needs.' },
        { question: 'What qualifications do your Educated Babysitters have, and what can they realistically do?', answer: 'Our Educated Babysitters have enough education to understand children’s needs, follow routines, and communicate clearly with parents. In urban households, they help children with homework, reading books, basic English-speaking practice, and school revision. They manage daily routines like study time, playtime, meals, hygiene, and sleep schedules. They also encourage good manners, reduce screen time, engage children in learning games, and provide emotional support. They do not do household work and focus fully on the child’s growth and safety.' },
        { question: 'How fluent are your Educated Babysitters in English?', answer: 'Our Educated Babysitters are comfortable speaking and understanding English for daily communication with children. They can read English storybooks, help with homework, explain lessons in simple words, and encourage children to speak English confidently through regular conversation, play, and learning activities at home.' },
        { question: 'Do Educated Babysitters help with household work?', answer: 'No. Our English-speaking Babysitters in Bangalore are assigned only for childcare. They focus on your child’s learning, daily routine, safety, and emotional support. They do not clean the house, cook for adults, or handle any household chores.' },
        { question: 'How much does an Educated Babysitter in Bangalore cost?', answer: 'The cost depends on working hours, service type, and duration. Full-time, part time, live-in, and hourly options are priced differently. EzyHelpers shares all charges clearly in advance, with no hidden or unexpected costs.' },
        { question: 'How quickly can I get an Educated Babysitter?', answer: 'In many cases, families receive suitable profiles in a few days, between 3 and 7 days. Final availability depends on your location, working hours, and requirements, but EzyHelpers ensures quick matching and smooth onboarding.' },
        { question: 'Why should I choose a Babysitter agency over finding one independently?', answer: 'Choosing a Babysitter agency gives you safety, reliability, and peace of mind. Domestic Helper companies like EzyHelpers verify Aadhaar details, local addresses, and skills before onboarding Babysitters. You also get screened profiles, support, and replacement assistance if needed, which is often missing when hiring independently.' },
    ]

    const whatwedo = [
        'Supports homework using simple explanations',
        'Reads storybooks and builds reading habits',
        'Clear, calm, and child-friendly communication',
        'Helps improve manners, confidence, and discipline',
        'Engages children in educational play activities',
        'Assists with school readiness routines',
        'Encourages English conversation through daily interaction',
        'Supports emotional development and social skills',
        'Maintains child hygiene and routine care',
        'Focuses only on child development, not housework'
    ]

    const needs = [
        'Toddlers needing early learning and language exposure',
        'School-going children needing homework help',
        'Working parents requiring structured childcare',
        'Families focused on English communication skills',
        'Children needing confidence and personality development'
    ]

    const whyChooseFeatures = [
        {
            title: 'Verified & Trusted Professionals',
            description: 'All EzyHelpers Babysitters are verified, identity checked, and background verified to ensure your family’s complete safety.',
            icon: ShieldCheckIcon,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Flexible Care Options',
            description: 'Choose an hourly, part-time, full-time, live-in, or weekend Educated Babysitter for home childcare support based on your family’s needs.',
            icon: TruckIcon,
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Transparent Pricing',
            description: 'We share clear pricing before onboarding with no hidden costs or sudden payment changes at all.',
            icon: ClockIcon,
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600'
        },
        {
            title: 'Quick Matching',
            description: 'Families are quickly matched with qualified Babysitters based on child age, routine, and language preferences.',
            icon: CurrencyDollarIcon,
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600'
        }, {
            title: 'Age-Appropriate Care Expertise',
            description: 'Caregivers handle infants, toddlers, preschoolers, and school-age children with proper knowledge for each stage.',
            icon: BriefcaseIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }, {
            title: 'Replacement Guarantee',
            description: 'If the Babysitter doesn’t meet expectations, a free replacement is provided on prior notice without additional cost.',
            icon: MapPinIcon,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        }
    ]

    const whoneeds = [
        {
            title: 'IT and Tech Professionals with Long Commutes',
            description: 'Parents facing long Bangalore traffic rely on an English-speaking Nanny in Bangalore to manage learning, routines, and emotional care reliably.',
            icon: FireIcon,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Dual-Income Households with Late Evenings',
            description: 'When both parents work late, Educated Babysitters ensure homework completion, reading time, and calm evening routines.',
            icon: FireIcon,
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Parents Managing Hybrid Work from Home',
            description: 'Educated Babysitters keep children engaged in quiet learning, helping parents attend meetings without interruptions.',
            icon: GlobeAsiaAustraliaIcon,
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600'
        },
        {
            title: 'Parents Worried About Excess Screen Time',
            description: 'Educated Babysitters replace mobile usage with reading, conversations, and structured activities that improve focus and behaviour.',
            icon: FireIcon,
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600'
        }, {
            title: 'School-Going Children Needing Homework Supervision',
            description: "Parents can depend on Babysitters who patiently explain lessons and support daily homework completion.",
            icon: SparklesIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }, {
            title: 'Families New to Bangalore City Life',
            description: "Newly relocated families prefer an English-speaking Nanny in Bangalore, helping children adapt socially, emotionally, and academically.",
            icon: SparklesIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }, {
            title: 'Parents Seeking Better English Communication',
            description: "Educated Babysitters help children improve spoken English naturally through daily conversations and stories.",
            icon: SparklesIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }
    ];


    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Bangalore', href: '/cities/bangalore' },
                        { label: 'Educated Babysitter' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-600 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">

                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-7xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Educated Babysitter in Bangalore Professional Childcare You Can Trust</h1>

                            <p className="text-lg lg:text-xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">Our Educated Babysitter in Bangalore supports busy families with safe childcare focused on learning, English communication, homework help, and flexible schedules, ensuring trusted home care for children of all ages.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-3xl mx-auto">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-center">✓ Background-checked Babysitters</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-center">✓ Trained in child safety and daily care</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-center">✓ Age-appropriate care</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-center">✓ Bangalore-Wide Availability</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Book Now
                                </Link>

                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Call Us
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-7xl mx-auto">
                                <div className="text-center">
                                    <div className="text-xl font-bold">Quick Onboarding Support</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold">Reliable Short-Term Care</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold">Fast Profile Matching</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose EzyHelpers for Home Chef Services in Bangalore? */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers' Educated Babysitter in Bangalore?</h2>
                            <p className="text-lg text-gray-600">Trusted learning-focused childcare for modern Bangalore families</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyChooseFeatures.map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                                    <div className={`${feature.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.iconColor}`}>
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* What do we do*/}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Does an Educated Babysitter Do?</h2>
                            <p className="text-gray-600">Daily childcare tasks focused on learning and development</p>
                        </div>
                        <div className="bg-blue-100/50 rounded-2xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                {whatwedo.map((item, idx) => (
                                    <div key={idx} className="bg-white rounded-lg py-4 px-2 text-center shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium text-gray-700 cursor-default">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* Services Provided */}
                <section className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-200 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Types of Educated Babysitter Services Are Available in Bangalore?</h2>
                            <p className="text-lg text-gray-600">Flexible childcare options based on your family’s daily needs</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                            {/* Card 1 - Live-in Chauffeur Service */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Live-in Educated Babysitter</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Best for families needing full-day and night support at home. Helps with daily routines, basic learning, communication, and emotional care.
                                    </p>
                                </div>

                                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Stays at home full-time</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Follows the child’s daily routine</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Supports learning and language practice</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 2 - Placeholder */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Full-Time Educated Babysitter</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Ideal for working parents who need regular daytime childcare and learning support.
                                    </p>
                                </div>

                                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Fixed daily 8-10 working hours</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Helps with homework and reading</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Manages daily childcare routine</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 3 - Placeholder */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Part-Time Educated Babysitter</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Suitable for short daily needs like study time, reading, and guided play.
                                    </p>
                                </div>

                                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Limited 4-6 daily hours</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Focus on learning and activities</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Flexible timing options</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 4 - Placeholder */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Hourly or Weekend Educated Babysitter</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Best for occasional help during weekends, functions, or busy days.
                                    </p>
                                </div>

                                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Short-hour support</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Available on weekends</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">Book as and when needed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* What needs */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Age and Need Specific Educated Babysitter Support</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Childcare adapted to different stages</p>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {needs.map((item, idx) => (
                                    <div key={idx} className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                                                    <CheckCircleIcon className="h-4 w-4 text-white" />
                                                </div>
                                            </div>
                                            <p className="text-gray-800 font-medium leading-relaxed">{item}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-6">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Hire an Educated Nanny
                            </Link>
                        </div>

                    </div>
                </section>

                {/* Who Needs Educated Babysitter */}
                <section className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-200 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Should Hire an Educated Babysitter in Bangalore?</h2>
                            <p className="text-lg text-gray-600">Families who benefit most from this service</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-5xl mx-auto">
                            {whoneeds.map((feature, index) => (
                                <div key={index} className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                                    <div className={`${feature.bgColor} rounded-xl w-16 h-16 flex items-center justify-center mb-6 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Book Our Educated Babysitter Services in Bangalore */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Hire an English-Speaking Nanny in Bangalore</h2>
                            <p className="text-lg text-gray-600">Simple and transparent onboarding</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Requirements</h3>
                                <p className="text-gray-600">Tell us your child’s age, schedule, and type of Educated Babysitter you need.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Matched Profiles</h3>
                                <p className="text-gray-600">Receive verified profiles of qualified Babysitters matching your needs.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm & Onboard</h3>
                                <p className="text-gray-600">Interact, finalise, and confirm the Babysitter you are comfortable with.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Enjoy Stress-Free Support</h3>
                                <p className="text-gray-600">Your Babysitter starts work while our team remains available for assistance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Families Hire in Bangalore*/}
                <section className="section-padding bg-gray-20">
                    <div className="container-custom text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">Why Families in Bangalore Choose an Educated Babysitter</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
                            <p>Many parents try hiring Babysitters through informal references. While this may seem convenient, it often leads to unreliable availability, poor communication, and no learning support. Children miss structured routines, and parents feel stressed managing everything alone.</p>
                            <p>An Educated Babysitter in Bangalore changes this experience. Instead of basic supervision, children receive guided learning, English-speaking interaction, and emotional support daily. Homework becomes easier. Reading becomes a habit. Communication improves naturally.</p>
                            <p>EzyHelpers ensures each Educated Babysitter focuses only on the child. They do not handle household chores. Their full attention stays on your child’s growth, safety, and routine.</p>
                            <p>Families feel relieved knowing their child is learning in a safe environment while they focus on work, health, or personal time.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-10">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-blue-800 hover:shadow-xl transition-all duration-300"
                            >
                                Book Now
                            </Link>

                            <Link
                                href="tel:+919972571005"
                                className="inline-flex items-center justify-center bg-transparent text-blue-600 font-semibold text-lg py-4 px-8 rounded-xl border-2 border-blue-600 hover:bg-gray-100 transition-all duration-300"
                            >
                                <PhoneIcon className="h-5 w-5 mr-2" />
                                Call Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Explore Other Services */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
                            <p className="text-lg text-gray-600">Trusted premium services for your family by EzyHelpers.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Link href="/cities/bangalore/travel-nanny" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                                <SparklesIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Travel Nanny Services</h3>
                                <p className="text-gray-600 mb-4">On-demand childcare support for vacations, holidays, and short family trips, ensuring children remain safe, engaged, and comfortable.</p>
                                <div className="flex items-center text-blue-600 font-semibold">Learn More</div>
                            </Link>

                            <Link href="/cities/bangalore/home-chef" className="group bg-gradient-to-br from-pink-50 to-violet-50 rounded-2xl p-8 border border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
                                <FireIcon className="h-12 w-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Home Chefs Services</h3>
                                <p className="text-gray-600 mb-4">Experienced Home chefs who prepare hygienic, customised, and nutritious meals suited to your family’s daily preferences.</p>
                                <div className="flex items-center text-pink-600 font-semibold">Learn More</div>
                            </Link>

                            <Link href="/cities/bangalore/chauffeur-service" className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                                <AcademicCapIcon className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Chauffeur Services</h3>
                                <p className="text-gray-600 mb-4">Verified professional chauffeurs for premium vehicles, ensuring safe, punctual, and comfortable travel across Bangalore.</p>
                                <div className="flex items-center text-yellow-600 font-semibold">Learn More</div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section-padding bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Trusted Educated Babysitter Services by EzyHelpers</h2>
                            <p className="text-xl mb-8 text-purple-100">Get reliable childcare with learning support from verified, English-speaking Educated babysitters suited to your family’s daily schedule.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Hire Educated Babysitter
                                </Link>

                                <Link
                                    href="tel:+919972571005"
                                    className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Talk to Our Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
