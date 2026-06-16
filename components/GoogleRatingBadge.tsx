/**
 * Verified Google-review trust strip (server component).
 * Figures come from the June 2026 analysis of 528 public Google reviews —
 * only use ratings that are genuinely supported by that data.
 */
import { StarIcon } from '@heroicons/react/24/solid'

interface GoogleRatingBadgeProps {
  /** e.g. "4.93" — shown as {rating}/5 */
  rating: string
  /** Short, truthful supporting line, e.g. "Zero negative reviews across driver placements" */
  detail: string
}

export default function GoogleRatingBadge({ rating, detail }: GoogleRatingBadgeProps) {
  return (
    <section aria-label="Google rating" className="bg-white border-b border-gray-100">
      <div className="container-custom py-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="flex items-center" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
            ))}
          </span>
          <span className="text-sm font-semibold text-gray-900">
            {rating}/5 on Google
          </span>
          <span className="text-sm text-gray-600">{detail}</span>
        </div>
      </div>
    </section>
  )
}
