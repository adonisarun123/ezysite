import Link from 'next/link';
import { TagIcon, MapPinIcon, BarChart3 } from 'lucide-react';
import { CaseStudy } from '../data/caseStudies';

interface CaseStudyCardProps {
    caseStudy: CaseStudy;
    featured?: boolean;
}

export default function CaseStudyCard({ caseStudy, featured = false }: CaseStudyCardProps) {
    return (
        <Link
            href={`/case-studies/${caseStudy.slug}`}
            className={`group block bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
        >
            <div className={`flex flex-col h-full ${featured ? 'md:flex-row' : ''}`}>
                {/* Card Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col">
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                        <span className="inline-flex items-center gap-1 bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-full font-medium">
                            {caseStudy.clientType}
                        </span>
                        {caseStudy.city && (
                            <span className="flex items-center gap-1">
                                <MapPinIcon className="w-3.5 h-3.5" /> {caseStudy.city}
                            </span>
                        )}
                    </div>

                    <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-xl'
                        }`}>
                        {caseStudy.shortTitle || caseStudy.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                        {caseStudy.summary}
                    </p>

                    {/* Metrics Row */}
                    {caseStudy.heroMetricLabel && (
                        <div className="flex items-center gap-4 mb-6 p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2 text-primary-600">
                                <BarChart3 className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">{caseStudy.heroMetricLabel}</p>
                                <p className="font-bold text-gray-900">{caseStudy.heroMetricValue}</p>
                            </div>
                        </div>
                    )}

                    {/* Footer Tags */}
                    <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                        {caseStudy.serviceTypes.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                        {caseStudy.serviceTypes.length > 3 && (
                            <span className="text-xs text-gray-400 px-1 self-center">+{caseStudy.serviceTypes.length - 3} more</span>
                        )}

                        <span className="ml-auto text-primary-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                            Read Story &rarr;
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
