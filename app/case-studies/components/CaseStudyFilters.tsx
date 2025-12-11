'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';

interface CaseStudyFiltersProps {
    clientTypes: string[];
    serviceTypes: string[];
    selectedClientType: string | null;
    selectedServiceType: string | null;
    onClientTypeChange: (type: string | null) => void;
    onServiceChange: (service: string | null) => void;
    onClear: () => void;
}

export default function CaseStudyFilters({
    clientTypes,
    serviceTypes,
    selectedClientType,
    selectedServiceType,
    onClientTypeChange,
    onServiceChange,
    onClear
}: CaseStudyFiltersProps) {
    const hasActiveFilters = selectedClientType || selectedServiceType;

    return (
        <div className="z-30 bg-white border-y border-gray-200 sticky top-[70px] md:top-[80px]">
            <div className="container mx-auto px-4 py-4 md:py-6 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                        {/* Client Type Filter (Pills) */}
                        <div className="flex items-center space-x-2 shrink-0">
                            <span className="text-sm font-semibold text-gray-700 mr-2">Client:</span>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => onClientTypeChange(null)}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${!selectedClientType
                                            ? 'bg-primary-600 text-white shadow-md'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    All
                                </button>
                                {clientTypes.map(type => (
                                    <button
                                        key={type}
                                        onClick={() => onClientTypeChange(type === selectedClientType ? null : type)}
                                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${selectedClientType === type
                                                ? 'bg-primary-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-6 bg-gray-300 mx-2"></div>

                        {/* Service Type Filter (Dropdown or Pills if few) */}
                        <div className="flex items-center space-x-2 shrink-0">
                            <span className="text-sm font-semibold text-gray-700 mr-2">Service:</span>
                            <select
                                value={selectedServiceType || ''}
                                onChange={(e) => onServiceChange(e.target.value || null)}
                                className="form-select text-sm border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 py-1.5 pl-3 pr-8 bg-gray-50 text-gray-900"
                            >
                                <option value="">All Services</option>
                                {serviceTypes.map(service => (
                                    <option key={service} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Clear Button */}
                    {hasActiveFilters && (
                        <button
                            onClick={onClear}
                            className="flex items-center text-sm text-red-600 font-medium hover:text-red-800 transition-colors ml-auto md:ml-0"
                        >
                            <XMarkIcon className="w-4 h-4 mr-1" />
                            Clear Filters
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
