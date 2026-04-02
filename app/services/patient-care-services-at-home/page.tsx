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
    FaceSmileIcon,
    ExclamationTriangleIcon,
    PlusCircleIcon,
    HandThumbUpIcon,
    ScaleIcon,
    StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Reliable Home Patient Care Services You Can Trust',
    description: 'Reliable Patient Care Services at home, providing comfort, recovery, and personalised attention from trained, verified home caregivers.',
    openGraph: {
        title: 'Reliable Home Patient Care Services You Can Trust',
        description: 'Reliable Patient Care Services at home, providing comfort, recovery, and personalised attention from trained, verified home caregivers.',
        url: 'https://www.ezyhelpers.com/services/patient-care-services-at-home',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/services/patient-care-services-at-home'
    }
}

export default function PatientCareServicesPage() {
    const faqs: FAQItem[] = [
        {
            question: 'What is a Patient care taker at home?',
            answer: 'A Patient care taker is a trained caregiver who helps with daily activities such as feeding, bathing, dressing, mobility, and medicine reminders. They are not nurses but provide supportive, non-medical home care for comfort and recovery.'
        },
        {
            question: 'Can your caregivers provide support for specific conditions?',
            answer: 'Yes. Our caregivers assist patients recovering from surgery, those bedridden, elderly individuals, or anyone needing daily support. Care is tailored according to the patient’s health condition and family requirements.'
        },
        {
            question: 'Are your Patient caregivers nurses?',
            answer: 'No. Our in-home patient helpers are non-medical, trained attendants who help with daily activities. They do not have nursing licenses and cannot give injections or manage IVs. Their main role is to keep patients safe, comfortable, and cared for at home.'
        },
        {
            question: 'When should I hire a Patient care taker at home?',
            answer: 'Hire a caregiver if your loved one has an ongoing illness, post-surgery recovery, or struggles with everyday tasks like dressing, bathing, or moving. They are also useful for immobile patients and families needing professional support.'
        },
        {
            question: 'Is elderly Patient care at home necessary?',
            answer: 'Yes. Home care ensures older patients receive help with daily activities, medicine reminders, and emotional support. It helps them maintain independence, dignity, and comfort at home.'
        },
        {
            question: 'Why hire a professional caregiver instead of managing care yourself?',
            answer: 'Professional caregivers provide skilled, considerate, and consistent support, helping with faster recovery, reducing family stress, and ensuring dignity and comfort for patients.'
        },
        {
            question: 'Are male Patient caretakers available?',
            answer: 'Yes. We provide both male and female caregivers. Male attendants are often preferred for physically demanding care or elder male patients. All caregivers are trained, respectful, and professional.'
        },
        {
            question: 'Will the caregiver administer medication?',
            answer: 'Our Patient caregivers provide medicine reminders and help track schedules. They do not make medical decisions or administer treatments independently.'
        },
        {
            question: 'Are your Patient care services available in multiple cities?',
            answer: 'Yes. Our Patient caregivers are available in major Indian cities, depending on caregiver availability. This ensures future flexibility for local AI searches and broader service reach.'
        }
    ]

    const whyChooseFeatures = [
        { title: 'Affordable & Transparent', description: 'Flexible care plans with clear pricing, no hidden costs, and affordable home-based services.', icon: BanknotesIcon, bg: 'bg-blue-50', color: 'text-blue-600' },
        { title: 'Trained Specialists', description: 'Caregivers trained in hygiene, feeding, and mobility, skilled for post-surgery or long-term care.', icon: AcademicCapIcon, bg: 'bg-cyan-50', color: 'text-cyan-600' },
        { title: 'Stress-Free Placement', description: 'Background-verified caregivers introduced quickly for urgent Patient care needs.', icon: ClockIcon, bg: 'bg-indigo-50', color: 'text-indigo-600' },
        { title: 'Customized Matching', description: 'Matched to patient needs and family environment for the most effective home care.', icon: UserGroupIcon, bg: 'bg-blue-50', color: 'text-blue-600' },
        { title: 'Skilled Non-Medical Aid', description: 'Full support in hygiene, feeding, mobility and routines, non-medical but dedicated.', icon: ShieldCheckIcon, bg: 'bg-cyan-50', color: 'text-cyan-600' }
    ]

    const serviceCategories = [
        { title: 'Grooming & Hygiene', desc: 'Assisting with bathing, oral care, and sponging or bed baths to maintain cleanliness and dignity.', icon: SparklesIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Medication Reminders', desc: 'Medicine reminders, insulin assistance if needed, and keeping records following family instructions.', icon: ClockIcon, color: 'text-cyan-600', bg: 'bg-cyan-50' },
        { title: 'Mobility & Positioning', desc: 'Helping patients stand, sit, walk, and change positions to avoid discomfort or bedsores.', icon: HomeModernIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { title: 'Feeding & Nutrition', desc: 'Helping patients eat and drink according to dietary needs and physician guidelines.', icon: HeartIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Toileting Support', desc: 'Helping immobile patients with diapers, catheter bags, and hygiene needs respectfully.', icon: UserGroupIcon, color: 'text-cyan-600', bg: 'bg-cyan-50' },
        { title: 'Dressing & Wound Care', desc: 'Changing bandages, observing for infection, and informing family of any issues.', icon: PlusCircleIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { title: 'Urine Bags & Tubes', desc: 'Cleaning and monitoring urine tubes and bags to prevent infections effectively.', icon: ShieldCheckIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Household Support', desc: 'Maintaining a clean environment by changing bed linens, laundry, and other tasks.', icon: HomeIcon, color: 'text-cyan-600', bg: 'bg-cyan-50' }
    ]

    const whoNeedsSection = [
        { title: 'Post-Surgery Recovery', icon: PlusCircleIcon },
        { title: 'Elderly Family Members', icon: HeartIcon },
        { title: 'Bedridden Patients', icon: HomeIcon },
        { title: 'Busy Working Families', icon: BriefcaseIcon },
        { title: 'Knee-Replacement Elders', icon: ShieldCheckIcon },
        { title: 'Night-Time Care Needs', icon: ClockIcon }
    ]

    const benefitsSection = [
        { title: 'Cost-Effective Choice', desc: 'Home care is more affordable and comfortable than long-term hospital stays or private nurses.', icon: BanknotesIcon },
        { title: 'Professional Base Support', desc: 'Trained caregivers provide skilled assistance without complex medical procedures.', icon: AcademicCapIcon },
        { title: 'Improved Family Balance', desc: 'Family members can focus on work while your loved one receives dedicated care.', icon: UserGroupIcon },
        { title: 'Faster Home Recovery', desc: 'Home care ensures patients stay comfortable, supported, and stress-free during healing.', icon: SparklesIcon },
        { title: 'Reduced Infection Risk', desc: 'Being in a familiar home environment lowers exposure to common hospital infections.', icon: ShieldCheckIcon },
        { title: 'Maintained Involvement', desc: 'Keep families connected with loved ones through professional non-medical support.', icon: HeartIcon },
        { title: 'Preserved Dignity', desc: 'Patients feel respected and retain their personal routines and independence.', icon: UserGroupIcon },
        { title: 'One-on-One Attention', desc: 'Each patient receives the dedicated attention they deserve according to their needs.', icon: StarIcon }
    ]

    const carePlans = [
        { title: '12-Hour Daytime Care', schedule: 'Morning to Evening', desc: 'Supervision during business hours, covering morning to evening routines.', icon: ClockIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: '12-Hour Nighttime Care', schedule: 'Evening to Morning', desc: 'Overnight assistance for medicine, toileting, and monitoring while family rests.', icon: ClockIcon, color: 'text-indigo-700', bg: 'bg-indigo-50' },
        { title: '24-Hour Live-In Care', schedule: 'Round-the-clock', desc: 'Round-the-clock support for patients needing continuous attention and safety.', icon: HomeIcon, color: 'text-cyan-600', bg: 'bg-cyan-50' },
        { title: 'Respite Care', schedule: 'Short-Term Support', desc: 'Temporary support for emergencies, vacations, or post-hospitalization transition.', icon: HeartIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Part-Time Support', schedule: '4-6 Hours Daily', desc: 'Limited daily assistance for independent patients needing help with specific tasks.', icon: UserGroupIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' }
    ]

    const exploreServices = [
        { title: 'English-Speaking Babysitters', desc: 'Verified babysitters who help children build confidence, manners, and fluent communication.', href: '/services/english-speaking-babysitters', icon: AcademicCapIcon, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { title: 'Japa (Postpartum Care)', desc: 'Expert support for mother and newborn care during the recovery phase.', href: '/services/japa-nanny-services', icon: HeartIcon, color: 'text-rose-600', bg: 'bg-rose-50' },
        { title: 'Professional Chefs', desc: 'Expert chefs craft delicious, custom meals for your daily home needs.', href: '/services/professional-chef-for-home', icon: SparklesIcon, color: 'text-orange-600', bg: 'bg-orange-50' }
    ]

    return (
        <main className="min-h-screen">
            <Navbar />

            <Breadcrumb
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Patient Care Services' }
                ]}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden px-4 md:px-0">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-24 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-24 left-20 w-56 h-56 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 font-display tracking-tight leading-tight text-white uppercase">Compassionate Patient Care Services at Home, Day & Night</h1>

                        <p className="text-xl lg:text-2xl text-white/95 mb-10 leading-relaxed max-w-4xl mx-auto font-medium">
                            Looking for trusted Patient care at home? EzyHelpers offers caring, non-medical support covering feeding, bathing, dressing, and medicine reminders, helping your loved ones recover comfortably in their own home.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10 justify-center">
                            <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm tracking-widest border border-white/20">✓ Background-Verified Caregivers</div>
                            <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm tracking-widest border border-white/20">✓ Daily Health Monitoring</div>
                            <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm tracking-widest border border-white/20">✓ Trained in Patient Assistance</div>
                            <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm tracking-widest border border-white/20">✓ Flexible Care Plans</div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center w-full bg-white text-blue-900 font-black text-xl py-5 rounded-2xl shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all"
                            >
                                Book a Patient caretaker Today
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
                                <div className="text-3xl lg:text-4xl font-black mb-1">500+</div>
                                <div className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] opacity-80">Families Served</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-black mb-1 text-cyan-50">98%</div>
                                <div className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] opacity-80">Positive Ratings</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl lg:text-4xl font-black mb-1 text-cyan-50">100+</div>
                                <div className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] opacity-80">Trained caregivers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase">Why Choose EzyHelpers for Patient Care Services?</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold max-w-4xl mx-auto italic">Quality care that brings comfort, dignity, and peace of mind to your home</p>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                                <div className={`${feature.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm`}>
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Services Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16 px-4 md:px-0">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase">What Services Do Our Patient Caregivers Provide?</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold italic mb-4 max-w-4xl mx-auto">Our helpers focus on daily routines to ensure the patient’s comfort, hygiene, and safety.</p>
                        <div className="w-24 h-1.5 bg-cyan-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {serviceCategories.map((service, index) => (
                            <div key={index} className={`${service.bg} rounded-[2rem] p-10 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center`}>
                                <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm ${service.color} group-hover:scale-110 transition-transform`}>
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-lg font-black text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-xs text-gray-700 font-bold leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/hire-helper"
                            className="inline-flex items-center justify-center bg-blue-700 text-white font-black text-xl py-5 px-12 rounded-2xl hover:bg-blue-800 shadow-xl transition-all transform hover:scale-105"
                        >
                            Book Patient caregiver
                            <ArrowRightIcon className="h-5 w-5 ml-3" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who Needs Section */}
            <section className="section-padding bg-blue-900 text-white">
                <div className="container-custom px-4 md:px-0">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl text-white font-black mb-6 font-display tracking-tight uppercase">Who Needs Patient Care Services at Home?</h2>
                        <p className="text-blue-100 text-lg md:text-xl font-bold italic">Special support for families during health challenges</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                        {whoNeedsSection.map((item, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 flex flex-col items-center text-center group hover:bg-white/20 transition-all">
                                <item.icon className="h-10 w-10 text-cyan-300 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-sm font-black text-white leading-tight tracking-wide uppercase">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-gray-50 border-y border-gray-100">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase text-center">Benefits of Choosing Ezyhelpers’ Patient Care Services</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold italic text-center">Why home-based care creates better outcomes for patients and families</p>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefitsSection.map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full group hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <benefit.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-black text-gray-900 mb-3 leading-tight">{benefit.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scope Section: Can vs Cannot */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase">What Our Patient Caregivers Can and Cannot Do</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold italic">Understanding the scope of our assistance services</p>
                        <div className="w-24 h-1.5 bg-cyan-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        {/* Can Do */}
                        <div className="bg-white border-2 border-blue-100 rounded-[3rem] p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <h3 className="text-2xl font-black text-blue-800 mb-10 flex items-center uppercase tracking-tight">
                                <CheckCircleIcon className="h-8 w-8 mr-4 text-blue-600" />
                                Our Caregivers Provide
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    'Daily hygiene assistance (bathing, grooming, etc.)',
                                    'Diaper changing & incontinence management',
                                    'Feeding and nutrition help',
                                    'Medication reminders and support',
                                    'Mobility and position assistance',
                                    'Basic wound care and bandage changes',
                                    'Vital signs monitoring (temp, pulse)',
                                    'Emotional support & companionship',
                                    'Light housekeeping related to care',
                                    'Communication with family about status'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-700 font-bold text-sm">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cannot Do */}
                        <div className="bg-gray-50 border-2 border-gray-200 rounded-[3rem] p-10 md:p-12 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <h3 className="text-2xl font-black text-gray-800 mb-10 flex items-center uppercase tracking-tight">
                                <ExclamationTriangleIcon className="h-8 w-8 mr-4 text-red-500" />
                                Our Caregivers Do Not
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    'Perform medical procedures needing a nursing license',
                                    'Administer injections or IV medications (except simple insulin)',
                                    'Make medical diagnoses or treatment decisions',
                                    'Handle complex medical equipment without training',
                                    'Provide physical therapy or specialized rehab',
                                    'Manage emergencies independently'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-700 font-bold text-sm">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-red-400 shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flexible Plans Section */}
            <section className="section-padding bg-gray-50 relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight text-center uppercase">Flexible Care Plans to Match Your Needs</h2>
                        <p className="text-lg md:text-xl text-gray-600 font-bold text-center italic">Choose the support level that works for your situation</p>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                        {carePlans.map((plan, index) => (
                            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 text-center flex flex-col group hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                                <div className={`${plan.bg} rounded-3xl w-16 h-16 flex items-center justify-center mb-8 mx-auto ${plan.color} group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                                    <plan.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight uppercase tracking-tight">{plan.title}</h3>
                                <p className="text-blue-600 font-black text-[10px] mb-6 uppercase tracking-[0.2em]">{plan.schedule}</p>
                                <p className="text-gray-600 font-bold leading-relaxed text-xs">{plan.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How To Hire Segment */}
            <section className="section-padding bg-white relative overflow-hidden px-4 md:px-0">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight uppercase">How To Hire Patient Helpers Through EzyHelpers</h2>
                        <p className="text-gray-600 text-lg md:text-xl font-bold italic">Simple, transparent steps to get the right caregiver for your loved one</p>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                        {[
                            { step: 1, title: 'Share Your Requirements', desc: 'Call, WhatsApp, or fill out our form with patient details and needs.' },
                            { step: 2, title: 'Meet Verified Caregivers', desc: 'We share suitable caregiver profiles. You can interview them before deciding.' },
                            { step: 3, title: 'Finalise Care Plan', desc: 'Confirm routine, schedule, and transparent pricing with no hidden costs.' },
                            { step: 4, title: 'Begin Care Services', desc: 'Your chosen caregiver starts, and our support team stays in touch.' }
                        ].map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 bg-blue-800 text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-xl transform group-hover:scale-110 transition-all duration-300 border-4 border-white ring-2 ring-blue-50">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4 px-4 font-display uppercase tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-sm text-gray-600 font-bold leading-relaxed px-4">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Redesign */}
            <section className="section-padding bg-blue-900 text-white relative overflow-hidden px-4">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[160px] opacity-30 -translate-y-1/2 translate-x-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-700 rounded-full blur-[140px] opacity-30 translate-y-1/2 -translate-x-1/4"></div>
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-display tracking-tight leading-[1.1] uppercase">Ready to Bring Quality Care Home?</h2>
                            <p className="text-blue-100/90 text-xl md:text-2xl mb-8 font-bold leading-relaxed italic max-w-xl">
                                Don't let caregiving stress overwhelm your family.
                            </p>
                            <p className="text-white/80 text-lg md:text-xl mb-12 font-bold leading-[1.6] max-w-2xl">
                                Our trained caregivers provide reliable daily assistance to make recovery comfortable, dignified, and stress-free.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center py-5 px-12 bg-white text-blue-900 font-black text-lg rounded-2xl hover:bg-white/90 shadow-2xl transition-all transform hover:scale-105"
                                >
                                    Book Your Patient caregiver
                                    <ArrowRightIcon className="h-5 w-5 ml-3" />
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center py-5 px-4 bg-white/10 backdrop-blur-md text-white font-black text-xl rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all transform hover:scale-105"
                                >
                                    <PhoneIcon className="h-6 w-6 mr-3" />
                                    Call Now
                                </Link>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-[3rem] p-12 border border-white/20 shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h3 className="text-2xl font-black text-white mb-10 border-b border-white/10 pb-6 font-display uppercase tracking-wider text-center">Quality Care Excellence</h3>
                                <div className="space-y-8">
                                    {[
                                        { icon: ShieldCheckIcon, title: 'Background Verified', desc: 'Secure and trustworthy caregivers for your home and family.' },
                                        { icon: HeartIcon, title: 'Compassionate Aid', desc: 'Nurturing assistance that preserves Dignity and Independence.' },
                                        { icon: ScaleIcon, title: 'Transparent Support', desc: 'Clear pricing, flexible schedules, and zero hidden costs.' }
                                    ].map((benefit, idx) => (
                                        <div key={idx} className="flex gap-5 items-start px-4">
                                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-blue-600 transition-all duration-300">
                                                <benefit.icon className="h-7 w-7 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-lg text-white mb-1 leading-tight uppercase tracking-tight">{benefit.title}</h4>
                                                <p className="text-sm text-blue-100/70 font-bold leading-relaxed">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 pt-8 border-t border-white/10 text-center uppercase">
                                    <div className="text-3xl font-black text-white mb-1 uppercase tracking-widest">98%</div>
                                    <div className="text-xs uppercase font-black text-blue-300 tracking-widest">Positive Family Ratings</div>
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
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase text-center">Explore Our Other Home Care Services</h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {exploreServices.map((service, index) => (
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
                                <div className={`flex items-center font-black ${service.color} group-hover:translate-x-2 transition-transform uppercase tracking-[0.2em] text-xs`}>
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
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-display text-center uppercase tracking-tight">FAQs</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    )
}

function BanknotesIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.501c-.134.004-.268.01-.402.016a3.298 3.298 0 00-3.03 3.03c-.015.405-.02 3.395.035 3.73a4.01 4.01 0 001.077 2.65c.348.337.818.528 1.303.53l14.24-.04c.594-.002 1.164-.254 1.574-.698a3.155 3.155 0 00.704-2.482c-.035-.335-.04-3.325.02-3.73a3.298 3.298 0 00-3.03-3.03c-.134-.006-.268-.012-.402-.016M15.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
    )
}
