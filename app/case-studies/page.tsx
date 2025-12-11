'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MainContent from '@/components/MainContent';
import CaseStudyCard from './components/CaseStudyCard';
import CTASection from '@/components/sections/CTASection';
import { caseStudies } from './data/caseStudies';

export default function CaseStudiesPage() {
    const filteredCaseStudies = caseStudies;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "EzyHelpers Case Studies",
        "description": "Real stories of families and helpers finding success with EzyHelpers.",
        "url": "https://www.ezyhelpers.com/case-studies",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": filteredCaseStudies.map((cs, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://www.ezyhelpers.com/case-studies/${cs.slug}`,
                "name": cs.title
            }))
        }
    };

    return (
        <>
            <Navbar />
            <MainContent>
                {/* JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24 relative overflow-hidden">
                    {/* Background pattern decorative element */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-50 opacity-50 skew-x-12 transform translate-x-20"></div>

                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="max-w-3xl">
                            <span className="text-primary-600 font-semibold text-sm md:text-base tracking-wide uppercase mb-3 block">
                                Success Stories
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight">
                                Real Stories from <br />
                                <span className="text-gradient">Indian Homes & Helpers</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                Discover how families, seniors, and communities found peace of mind with EzyHelpers.
                                Trusted by 10,000+ families and 5,000+ verified helpers.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="/hire-helper" className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Talk to Our Team
                                </a>
                                <a href="/services" className="px-6 py-3 rounded-xl border-2 border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition-colors">
                                    See All Services
                                </a>
                            </div>
                        </div>

                        {/* Trust Badges - Desktop */}
                        <div className="hidden md:flex gap-8 mt-12 pt-8 border-t border-gray-200/60">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-success-50 flex items-center justify-center text-success-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">24-72 Hours</p>
                                    <p className="text-xs text-gray-500">Fast Placement</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Background Verified</p>
                                    <p className="text-xs text-gray-500">100% Reliable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="pt-10 md:pt-12 pb-12 bg-white min-h-[500px]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        {filteredCaseStudies.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredCaseStudies.map((cs) => (
                                    <CaseStudyCard
                                        key={cs.slug}
                                        caseStudy={cs}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-xl text-gray-500">No case studies are available right now. Check back soon.</p>
                            </div>
                        )}
                    </div>
                </section>

                <CTASection />
                <Footer />
            </MainContent>
        </>
    );
}
