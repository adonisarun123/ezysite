'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = buildPageList(currentPage, totalPages)

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-center"
    >
      <ul className="flex flex-wrap items-center justify-center gap-2">
        <li>
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </li>

        {pages.map((page, idx) =>
          page === '…' ? (
            <li key={`ellipsis-${idx}`} aria-hidden="true">
              <span className="inline-flex h-10 w-10 items-center justify-center text-gray-400 sm:h-11 sm:w-11">
                …
              </span>
            </li>
          ) : (
            <li key={page}>
              <button
                type="button"
                onClick={() => onPageChange(page)}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors sm:h-11 sm:w-11 ${
                  page === currentPage
                    ? 'border-primary-500 bg-primary-500 text-white shadow-md'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            </li>
          )
        )}

        <li>
          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

function buildPageList(current: number, total: number): (number | '…')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages: (number | '…')[] = [1]

  if (current > 3) pages.push('…')

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  for (let i = start; i <= end; i++) pages.push(i)

  if (current < total - 2) pages.push('…')

  pages.push(total)
  return pages
}
