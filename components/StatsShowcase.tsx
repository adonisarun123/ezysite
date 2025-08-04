'use client';

import EnhancedStatsGrid, { getCurrentStats, getFutureStats, getStatsByCategory, developmentRoadmap } from './EnhancedStatsGrid';
import { useState } from 'react';
import { 
  ChevronDownIcon, 
  ChevronUpIcon, 
  InformationCircleIcon,
  CalendarDaysIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

export default function StatsShowcase() {
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [selectedView, setSelectedView] = useState<'current' | 'all' | 'future'>('current');

  const views = [
    { key: 'current', label: 'Current Stats', description: 'Available metrics' },
    { key: 'all', label: 'Complete View', description: 'Current + planned metrics' },
    { key: 'future', label: 'Future Stats', description: 'Planned metrics only' }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Our <span className="text-gradient">Impact Metrics</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Track our growth and impact across various dimensions. From current achievements 
            to future goals - transparency in our journey to serve more families and empower more helpers.
          </p>
        </div>

        {/* View Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 shadow-sm border border-gray-200">
            {views.map((view) => (
              <button
                key={view.key}
                onClick={() => setSelectedView(view.key as any)}
                className={`
                  px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${selectedView === view.key 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }
                `}
              >
                <div className="flex flex-col items-center">
                  <span>{view.label}</span>
                  <span className={`text-xs mt-1 ${
                    selectedView === view.key ? 'text-primary-200' : 'text-gray-500'
                  }`}>
                    {view.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-12">
          {selectedView === 'current' && (
            <EnhancedStatsGrid 
              showFutureStats={false}
              variant="detailed"
              gridCols={4}
            />
          )}
          
          {selectedView === 'all' && (
            <EnhancedStatsGrid 
              showAll={true}
              showFutureStats={true}
              variant="detailed"
              gridCols={5}
            />
          )}
          
          {selectedView === 'future' && (
            <EnhancedStatsGrid 
              showFutureStats={true}
              variant="detailed"
              gridCols={4}
            />
          )}
        </div>

        {/* Category Breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {(['impact', 'quality', 'reach', 'partners'] as const).map((category) => {
            const categoryStats = getStatsByCategory(category);
            const availableCount = categoryStats.filter(s => s.available).length;
            const totalCount = categoryStats.length;
            
            return (
              <div key={category} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 capitalize">
                  {category} Metrics
                </h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {availableCount}/{totalCount}
                </div>
                <p className="text-sm text-gray-600">
                  {availableCount} available, {totalCount - availableCount} planned
                </p>
                
                {/* Mini grid for category */}
                <div className="mt-4">
                  <EnhancedStatsGrid 
                    category={category}
                    showFutureStats={true}
                    variant="compact"
                    gridCols={2}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Development Roadmap */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div 
            className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setShowRoadmap(!showRoadmap)}
          >
            <div className="flex items-center">
              <CalendarDaysIcon className="h-6 w-6 text-primary-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Development Roadmap</h3>
                <p className="text-sm text-gray-600">Implementation timeline for future metrics</p>
              </div>
            </div>
            {showRoadmap ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            )}
          </div>
          
          {showRoadmap && (
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {Object.entries(developmentRoadmap).map(([key, roadmap]) => (
                  <div key={key} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {roadmap.estimatedImplementation}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      {roadmap.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-gray-700">Requirements:</div>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {roadmap.requirements.map((req, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-xs font-medium text-gray-700 pt-2">Data Sources:</div>
                      <div className="flex flex-wrap gap-1">
                        {roadmap.dataSources.map((source, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {source}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Implementation Guide */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Implementation Status</h3>
              <div className="text-blue-800 space-y-2">
                <p className="text-sm">
                  <strong>Currently Available:</strong> {getCurrentStats().length} metrics tracking basic business performance and customer satisfaction.
                </p>
                <p className="text-sm">
                  <strong>In Development:</strong> {getFutureStats().length} advanced metrics for social impact, gender empowerment, and partnership tracking.
                </p>
                <p className="text-sm">
                  <strong>Next Steps:</strong> The enhanced statistics system is ready to be integrated. Future metrics will be automatically enabled as data collection systems come online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 