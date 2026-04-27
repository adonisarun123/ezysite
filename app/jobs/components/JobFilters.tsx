'use client'

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { JOB_CATEGORIES, JOB_LOCATIONS, JOB_TYPES, type JobCategory, type JobType, type JobLocation } from '@/lib/jobsData'

interface JobFiltersProps {
  search: string
  category: JobCategory | 'All'
  location: JobLocation | 'All'
  jobType: JobType | 'All'
  onSearchChange: (value: string) => void
  onCategoryChange: (value: JobCategory | 'All') => void
  onLocationChange: (value: JobLocation | 'All') => void
  onJobTypeChange: (value: JobType | 'All') => void
  onClear: () => void
}

export default function JobFilters({
  search,
  category,
  location,
  jobType,
  onSearchChange,
  onCategoryChange,
  onLocationChange,
  onJobTypeChange,
  onClear,
}: JobFiltersProps) {
  const hasActiveFilters =
    search.trim() !== '' || category !== 'All' || location !== 'All' || jobType !== 'All'

  return (
    <section
      aria-label="Search and filter jobs"
      className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6"
    >
      <div className="grid gap-3 md:grid-cols-12">
        <div className="md:col-span-12 lg:col-span-4">
          <label htmlFor="job-search" className="sr-only">
            Search jobs
          </label>
          <div className="relative">
            <MagnifyingGlassIcon
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="job-search"
              type="search"
              inputMode="search"
              placeholder="Search by job title, location or category"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 transition-colors focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
            />
          </div>
        </div>

        <div className="md:col-span-4 lg:col-span-3">
          <label htmlFor="filter-category" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Category
          </label>
          <select
            id="filter-category"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value as JobCategory | 'All')}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-900 transition-colors focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
          >
            <option value="All">All categories</option>
            {JOB_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-4 lg:col-span-3">
          <label htmlFor="filter-location" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Location
          </label>
          <select
            id="filter-location"
            value={location}
            onChange={(e) => onLocationChange(e.target.value as JobLocation | 'All')}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-900 transition-colors focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
          >
            <option value="All">All locations</option>
            {JOB_LOCATIONS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-4 lg:col-span-2">
          <label htmlFor="filter-type" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Job Type
          </label>
          <select
            id="filter-type"
            value={jobType}
            onChange={(e) => onJobTypeChange(e.target.value as JobType | 'All')}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-900 transition-colors focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
          >
            <option value="All">All types</option>
            {JOB_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <XMarkIcon className="h-4 w-4" aria-hidden="true" />
            Clear filters
          </button>
        </div>
      )}
    </section>
  )
}
