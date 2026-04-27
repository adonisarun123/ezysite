'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  jobs as allJobs,
  type Job,
  type JobCategory,
  type JobLocation,
  type JobType,
} from '@/lib/jobsData'
import JobCard from './components/JobCard'
import JobFilters from './components/JobFilters'
import JobDetailsModal from './components/JobDetailsModal'
import Pagination from './components/Pagination'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

const PAGE_SIZE = 9

export default function JobsPageClient() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<JobCategory | 'All'>('All')
  const [location, setLocation] = useState<JobLocation | 'All'>('All')
  const [jobType, setJobType] = useState<JobType | 'All'>('All')
  const [page, setPage] = useState(1)

  const [activeJob, setActiveJob] = useState<Job | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return allJobs.filter((job) => {
      if (category !== 'All' && job.category !== category) return false
      if (location !== 'All' && job.area !== location) return false
      if (jobType !== 'All' && job.jobType !== jobType) return false
      if (term) {
        const haystack = `${job.title} ${job.location} ${job.category}`.toLowerCase()
        if (!haystack.includes(term)) return false
      }
      return true
    })
  }, [search, category, location, jobType])

  useEffect(() => {
    setPage(1)
  }, [search, category, location, jobType])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const startIdx = (safePage - 1) * PAGE_SIZE
  const endIdx = Math.min(startIdx + PAGE_SIZE, filtered.length)
  const visibleJobs = filtered.slice(startIdx, endIdx)

  const handleClear = () => {
    setSearch('')
    setCategory('All')
    setLocation('All')
    setJobType('All')
  }

  const handleKnowMore = (job: Job) => {
    setActiveJob(job)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handlePageChange = (next: number) => {
    if (next < 1 || next > totalPages) return
    setPage(next)
    if (typeof window !== 'undefined') {
      const grid = document.getElementById('jobs-grid')
      if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="container-custom py-8 sm:py-10">
      <JobFilters
        search={search}
        category={category}
        location={location}
        jobType={jobType}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onLocationChange={setLocation}
        onJobTypeChange={setJobType}
        onClear={handleClear}
      />

      <div
        id="jobs-grid"
        className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-sm text-gray-600" aria-live="polite">
          {filtered.length === 0 ? (
            <>No jobs match your filters.</>
          ) : (
            <>
              Showing{' '}
              <span className="font-semibold text-gray-900">
                {startIdx + 1}-{endIdx}
              </span>{' '}
              jobs of{' '}
              <span className="font-semibold text-gray-900">{filtered.length} total</span>
            </>
          )}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white px-6 py-14 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
            <BriefcaseIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">No matching jobs found</h3>
          <p className="mt-1 max-w-md text-sm text-gray-600">
            Try removing a filter or searching with a different keyword.
          </p>
          <button
            type="button"
            onClick={handleClear}
            className="mt-4 rounded-full border-2 border-primary-500 px-5 py-2 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-50"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleJobs.map((job) => (
            <JobCard key={job.id} job={job} onKnowMore={handleKnowMore} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={safePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <JobDetailsModal job={activeJob} open={modalOpen} onClose={handleCloseModal} />
    </div>
  )
}
