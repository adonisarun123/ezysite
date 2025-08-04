'use client';

import { 
  UserGroupIcon, 
  HeartIcon, 
  StarIcon, 
  MapPinIcon,
  BriefcaseIcon,
  CurrencyRupeeIcon,
  UsersIcon,
  BuildingOfficeIcon,
  ClockIcon,
  HomeIcon,
  CheckBadgeIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

interface StatItem {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
  gradient: string;
  available: boolean; // true if data is available, false if planned for future
  category: 'impact' | 'quality' | 'reach' | 'partners';
}

const stats: StatItem[] = [
  // Current Available Stats
  {
    label: 'Trusted Families',
    value: '10,000+',
    icon: HeartIcon,
    description: 'Happy families trust our service',
    color: 'text-pink-600',
    gradient: 'from-pink-500 to-rose-500',
    available: true,
    category: 'impact'
  },
  {
    label: 'Verified Helpers',
    value: '5,000+',
    icon: UsersIcon,
    description: 'Background checked professionals',
    color: 'text-blue-600',
    gradient: 'from-blue-500 to-indigo-500',
    available: true,
    category: 'quality'
  },
  {
    label: 'Service Locations',
    value: '250+',
    icon: MapPinIcon,
    description: 'Across major Indian cities',
    color: 'text-emerald-600',
    gradient: 'from-emerald-500 to-teal-500',
    available: true,
    category: 'reach'
  },
  {
    label: 'Customer Rating',
    value: '4.8★',
    icon: StarIcon,
    description: 'Average customer satisfaction',
    color: 'text-yellow-600',
    gradient: 'from-yellow-500 to-orange-500',
    available: true,
    category: 'quality'
  },
  {
    label: 'Hours of Work',
    value: '8,000+',
    icon: ClockIcon,
    description: 'Total work hours completed',
    color: 'text-purple-600',
    gradient: 'from-purple-500 to-violet-500',
    available: true,
    category: 'impact'
  },
  {
    label: 'Helpers Placed',
    value: '1,500+',
    icon: CheckBadgeIcon,
    description: 'Successfully placed professionals',
    color: 'text-green-600',
    gradient: 'from-green-500 to-emerald-500',
    available: true,
    category: 'impact'
  },

  // Future Planned Stats
  {
    label: 'Unique Job Roles',
    value: '12+',
    icon: BriefcaseIcon,
    description: 'Specialized service categories offered',
    color: 'text-indigo-600',
    gradient: 'from-indigo-500 to-blue-500',
    available: false, // Will be available when service categorization is complete
    category: 'reach'
  },
  {
    label: 'Women Helpers',
    value: '3,200+',
    icon: HandRaisedIcon,
    description: 'Women helpers empowered through placement',
    color: 'text-rose-600',
    gradient: 'from-rose-500 to-pink-500',
    available: false, // Needs data collection from helper demographics
    category: 'impact'
  },
  {
    label: 'Income Generated',
    value: '₹2.5Cr+',
    icon: CurrencyRupeeIcon,
    description: 'Total income generated for helpers',
    color: 'text-green-600',
    gradient: 'from-green-600 to-emerald-600',
    available: false, // Requires financial tracking system
    category: 'impact'
  },
  {
    label: 'Active Partners',
    value: '25+',
    icon: BuildingOfficeIcon,
    description: 'NGOs, KSDC & institutional partners',
    color: 'text-cyan-600',
    gradient: 'from-cyan-500 to-blue-500',
    available: false, // Needs partner management system
    category: 'partners'
  }
];

interface EnhancedStatsGridProps {
  showAll?: boolean;
  category?: 'impact' | 'quality' | 'reach' | 'partners' | 'all';
  showFutureStats?: boolean;
  gridCols?: 2 | 3 | 4 | 5;
  variant?: 'default' | 'compact' | 'detailed';
}

export default function EnhancedStatsGrid({ 
  showAll = false, 
  category = 'all',
  showFutureStats = false,
  gridCols = 4,
  variant = 'default'
}: EnhancedStatsGridProps) {
  const filteredStats = stats.filter(stat => {
    // Filter by availability
    if (!showFutureStats && !stat.available) return false;
    if (!showAll && !stat.available) return false;
    
    // Filter by category
    if (category !== 'all' && stat.category !== category) return false;
    
    return true;
  });

  const getGridClass = () => {
    const baseClass = "grid gap-4 md:gap-6";
    switch (gridCols) {
      case 2: return `${baseClass} grid-cols-2`;
      case 3: return `${baseClass} grid-cols-2 md:grid-cols-3`;
      case 4: return `${baseClass} grid-cols-2 md:grid-cols-4`;
      case 5: return `${baseClass} grid-cols-2 md:grid-cols-3 lg:grid-cols-5`;
      default: return `${baseClass} grid-cols-2 md:grid-cols-4`;
    }
  };

  const renderStat = (stat: StatItem, index: number) => {
    const IconComponent = stat.icon;
    const isCompact = variant === 'compact';
    const isDetailed = variant === 'detailed';
    
    return (
      <div
        key={stat.label}
        className={`
          group relative overflow-hidden rounded-xl bg-white border border-gray-200 
          hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105
          ${isCompact ? 'p-4' : 'p-6'}
          ${!stat.available ? 'opacity-75 ring-2 ring-gray-300 ring-dashed' : ''}
        `}
      >
        {/* Future stat indicator */}
        {!stat.available && (
          <div className="absolute top-2 right-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
            Planned
          </div>
        )}
        
        {/* Icon */}
        <div className={`
          ${isCompact ? 'w-10 h-10 mb-3' : 'w-12 h-12 mb-4'} 
          bg-gradient-to-r ${stat.gradient} rounded-lg flex items-center justify-center mx-auto
          group-hover:scale-110 transition-transform duration-300
        `}>
          <IconComponent className="h-6 w-6 text-white" />
        </div>

        {/* Value */}
        <div className={`
          font-bold text-center mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent
          group-hover:scale-110 transition-transform duration-300
          ${isCompact ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}
        `}>
          {stat.value}
        </div>

        {/* Label */}
        <div className={`
          font-semibold text-gray-900 text-center mb-1
          ${isCompact ? 'text-sm' : 'text-sm md:text-base'}
        `}>
          {stat.label}
        </div>

        {/* Description */}
        {isDetailed && (
          <div className="text-xs text-gray-600 text-center leading-relaxed">
            {stat.description}
          </div>
        )}

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
      </div>
    );
  };

  if (filteredStats.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No statistics available for the selected criteria.
      </div>
    );
  }

  return (
    <div className={getGridClass()}>
      {filteredStats.map(renderStat)}
      
      {/* Future Stats Notice */}
      {showFutureStats && (
        <div className="col-span-full mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center text-blue-800 text-sm">
            <MapPinIcon className="h-4 w-4 mr-2" />
            <span className="font-medium">Future Metrics:</span>
            <span className="ml-2">Statistics marked as "Planned" will be available as our data collection systems expand.</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Export individual stat categories for specific use cases
export const getCurrentStats = () => stats.filter(s => s.available);
export const getFutureStats = () => stats.filter(s => !s.available);
export const getStatsByCategory = (category: StatItem['category']) => 
  stats.filter(s => s.category === category);

// Development roadmap for future stats
export const developmentRoadmap = {
  uniqueJobRoles: {
    description: "Track and categorize all service types offered",
    requirements: ["Service taxonomy system", "Job role classification"],
    estimatedImplementation: "Q2 2024",
    dataSources: ["Service bookings", "Helper profiles", "Customer requests"]
  },
  womenHelpers: {
    description: "Track gender demographics of helper workforce",
    requirements: ["Helper demographics collection", "Privacy-compliant tracking"],
    estimatedImplementation: "Q1 2024", 
    dataSources: ["Helper registration", "Profile data", "Placement records"]
  },
  incomeGenerated: {
    description: "Calculate total income facilitated for helpers",
    requirements: ["Payment tracking integration", "Income calculation system"],
    estimatedImplementation: "Q3 2024",
    dataSources: ["Payment records", "Service completion data", "Helper earnings"]
  },
  activePartners: {
    description: "Track institutional partnerships and collaborations",
    requirements: ["Partner management system", "Collaboration tracking"],
    estimatedImplementation: "Q2 2024",
    dataSources: ["Partnership agreements", "KSDC collaborations", "NGO partnerships"]
  }
}; 