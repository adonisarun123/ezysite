import Link from 'next/link'
import Image from 'next/image'
import { posts, BlogPost } from '@/lib/blogData'
import { ArrowRightIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline'

interface RelatedPostsProps {
  currentPostId: string
  max?: number
}

/**
 * Picks related posts by shared tags first, then same category,
 * then falls back to most recent posts. Ensures every blog post
 * links to at least `max` other posts for strong interlinking.
 */
function getRelatedPosts(currentPostId: string, max: number): BlogPost[] {
  const current = posts.find((p) => p.id === currentPostId)
  if (!current) return posts.slice(0, max)

  const currentTags = new Set((current.tags ?? []).map((t) => t.toLowerCase()))

  const scored = posts
    .filter((p) => p.id !== currentPostId)
    .map((p) => {
      const sharedTags = (p.tags ?? []).filter((t) => currentTags.has(t.toLowerCase())).length
      const sameCategory = p.category === current.category ? 1 : 0
      return { post: p, score: sharedTags * 2 + sameCategory }
    })
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, max).map((s) => s.post)
}

export default function RelatedPosts({ currentPostId, max = 3 }: RelatedPostsProps) {
  const related = getRelatedPosts(currentPostId, max)
  if (related.length === 0) return null

  return (
    <section className="section-padding bg-gray-50 border-t border-gray-100">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Related Guides</h2>
          <p className="text-lg text-gray-600 font-medium">
            More guides on hiring trusted home help
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {related.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl ring-1 ring-gray-100 transition-all duration-300"
            >
              {post.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <span className="inline-block mb-3 text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                  <span className="flex items-center gap-1">
                    <CalendarDaysIcon className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
                <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm">
                  Read Guide
                  <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
