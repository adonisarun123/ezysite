import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MainContent from '@/components/MainContent';
import CTASection from '@/components/sections/CTASection';
import CaseStudyCard from '../components/CaseStudyCard';
import { getCaseStudy, getRelatedCaseStudies, caseStudies } from '../data/caseStudies';
import { CheckCircleIcon, StarIcon, ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return caseStudies.map((cs) => ({
        slug: cs.slug,
    }));
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const caseStudy = getCaseStudy(params.slug);

    if (!caseStudy) {
        return {
            title: 'Case Study Not Found | EzyHelpers',
        };
    }

    return {
        title: caseStudy.seoTitle || `${caseStudy.title} | EzyHelpers Case Study`,
        description: caseStudy.seoDescription || caseStudy.summary,
        openGraph: {
            title: caseStudy.seoTitle || caseStudy.title,
            description: caseStudy.summary,
            type: 'article',
            url: `https://www.ezyhelpers.com/case-studies/${caseStudy.slug}`,
            publishedTime: caseStudy.publishedAt,
            modifiedTime: caseStudy.updatedAt,
        },
        twitter: {
            card: 'summary_large_image',
            title: caseStudy.seoTitle || caseStudy.title,
            description: caseStudy.summary,
        },
        alternates: {
            canonical: `https://www.ezyhelpers.com/case-studies/${caseStudy.slug}`,
        }
    };
}

export default function CaseStudyDetailPage({ params }: Props) {
    const caseStudy = getCaseStudy(params.slug);

    if (!caseStudy) {
        notFound();
    }

    const related = getRelatedCaseStudies(params.slug, 3);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": caseStudy.title,
        "description": caseStudy.summary,
        "author": {
            "@type": "Organization",
            "name": "EzyHelpers"
        },
        "publisher": {
            "@type": "Organization",
            "name": "EzyHelpers",
            "logo": {
                "@type": "ImageObject",
                "url": "https://ezyhelpers.com/ezyhelper_logo_new.png"
            }
        },
        "datePublished": caseStudy.publishedAt || "2023-01-01",
        "dateModified": caseStudy.updatedAt || caseStudy.publishedAt || "2023-01-01",
        "mainEntityOfPage": `https://www.ezyhelpers.com/case-studies/${caseStudy.slug}`,
        "keywords": [...caseStudy.serviceTypes, ...caseStudy.segmentTags].join(", ")
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.ezyhelpers.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Case Studies",
                "item": "https://www.ezyhelpers.com/case-studies"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": caseStudy.shortTitle || caseStudy.title,
                "item": `https://www.ezyhelpers.com/case-studies/${caseStudy.slug}`
            }
        ]
    };

    return (
        <>
            <Navbar />
            <MainContent>
                {/* Schema Scripts */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                />

                <article>
                    {/* Header / Hero */}
                    <header className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-16 pb-24 md:pt-24 md:pb-32 px-4 relative overflow-hidden">
                        {/* Abstract circular shapes for visual interest */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                        <div className="container mx-auto max-w-5xl relative z-10">
                            <Link href="/case-studies" className="inline-flex items-center text-primary-100 hover:text-white mb-8 transition-colors text-sm font-medium">
                                <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Case Studies
                            </Link>

                            <div className="flex flex-wrap gap-3 mb-6">
                                {caseStudy.serviceTypes.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-sm">
                                    {caseStudy.city}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight mb-8">
                                {caseStudy.title}
                            </h1>

                            {/* Hero Metrics Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/20">
                                <div>
                                    <div className="text-primary-200 text-sm uppercase tracking-wider font-semibold mb-1">{caseStudy.heroMetricLabel || 'Outcome'}</div>
                                    <div className="text-2xl md:text-3xl font-bold">{caseStudy.heroMetricValue}</div>
                                </div>
                                {caseStudy.metrics?.map(m => (
                                    <div key={m.label}>
                                        <div className="text-primary-200 text-sm uppercase tracking-wider font-semibold mb-1">{m.label}</div>
                                        <div className="text-2xl md:text-3xl font-bold">{m.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </header>

                    {/* At A Glance & Content */}
                    <div className="container mx-auto px-4 max-w-5xl -mt-16 relative z-20 pb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">At a Glance</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Client</span>
                                    <span className="font-semibold text-gray-900">{caseStudy.clientType} {caseStudy.clientName ? `- ${caseStudy.clientName}` : ''}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Location</span>
                                    <span className="font-semibold text-gray-900">{caseStudy.city}, {caseStudy.state}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Service</span>
                                    <span className="font-semibold text-gray-900">{caseStudy.serviceTypes[0]}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Results</span>
                                    <span className="font-semibold text-success-600">Verified & Placed</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-12 gap-12">
                            {/* Main Content Column */}
                            <div className="md:col-span-8 prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900">

                                {/* Challenge */}
                                <section className="mb-12">
                                    <h2>The Challenge</h2>
                                    {caseStudy.context && <p className="italic text-gray-500 mb-4">{caseStudy.context}</p>}
                                    <p>{caseStudy.challenge}</p>
                                </section>

                                {/* Approach */}
                                <section className="mb-12 bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500 not-prose">
                                    <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">The EzyHelpers Approach</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">{caseStudy.approach}</p>
                                    <div className="grid gap-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                                            <span className="text-gray-800">In-depth requirement analysis</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                                            <span className="text-gray-800">Strict background verification</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                                            <span className="text-gray-800">Personalized matching & trial</span>
                                        </div>
                                    </div>
                                </section>

                                {/* Solution */}
                                <section className="mb-12">
                                    <h2>Solution Implemented</h2>
                                    <p>{caseStudy.solution}</p>
                                </section>

                                {/* Results */}
                                <section className="mb-12">
                                    <h2>Key Results & Outcomes</h2>
                                    <p>{caseStudy.results}</p>
                                    {caseStudy.keyOutcomes && (
                                        <div className="grid gap-4 mt-6">
                                            {caseStudy.keyOutcomes.map((outcome, idx) => (
                                                <div key={idx} className="flex items-start gap-4 p-4 bg-success-50 rounded-lg">
                                                    <div className="w-8 h-8 rounded-full bg-success-100 flex items-center justify-center text-success-600 font-bold shrink-0">
                                                        {idx + 1}
                                                    </div>
                                                    <p className="font-medium text-gray-900 m-0">{outcome}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            </div>

                            {/* Sidebar Column */}
                            <div className="md:col-span-4 space-y-8">
                                {/* Testimonial Card */}
                                {caseStudy.testimonial && (
                                    <div className="bg-secondary-50 p-8 rounded-2xl relative">
                                        <div className="text-4xl text-primary-300 absolute top-4 left-6">"</div>
                                        <p className="text-gray-700 italic relative z-10 mb-6 font-medium">
                                            {caseStudy.testimonial.quote}
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold">
                                                {caseStudy.testimonial.name ? caseStudy.testimonial.name[0] : 'C'}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{caseStudy.testimonial.name || 'Happy Customer'}</div>
                                                <div className="text-xs text-gray-500">{caseStudy.testimonial.roleOrRelation}</div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Mini CTA */}
                                <div className="bg-gray-900 text-white p-6 rounded-xl text-center">
                                    <h4 className="font-bold text-lg mb-2">Need a similar helper?</h4>
                                    <p className="text-gray-400 text-sm mb-6">We can help you find verified support in 24 hours.</p>
                                    <a href="/hire-helper" className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Case Studies */}
                {related.length > 0 && (
                    <section className="bg-gray-50 py-16 border-t border-gray-200">
                        <div className="container mx-auto px-4 max-w-7xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center font-display">Similar Success Stories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {related.map(cs => (
                                    <CaseStudyCard key={cs.slug} caseStudy={cs} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Main CTA */}
                <CTASection />
                <Footer />
            </MainContent>
        </>
    );
}
