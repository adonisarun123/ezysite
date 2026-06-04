import Link from 'next/link'
import { posts } from '@/lib/blogData'
import { ArrowRightIcon, BookOpenIcon } from '@heroicons/react/24/outline'

interface CityBlogLinksProps {
  /** Tags to match against blog posts (case-insensitive), e.g. ['live-in maid', 'bangalore'] */
  tags: string[]
  /** Section heading */
  title?: string
  /** Section subheading */
  subtitle?: string
  max?: number
}

/**
 * Service/city page -> blog interlinking.
 * Surfaces the most relevant guides for a service or city page,
 * matched by tags, so commercial pages pass authority to content
 * and visitors in research mode find their answers on-site.
 */
export default function CityBlogLinks({
  tags,
  title = 'Helpful Guides Before You Hire',
  subtitle = 'Expert advice from the EzyHelpers team — costs, comparisons, and safety checklists.',
  max = 3
}: CityBlogLinksProps) {
  const wanted = tags.map((t) => t.toLowerCase())

  const scored = posts
    .map((p) => {
      const postTags = (p.tags ?? []).map((t) => t.toLowerCase())
      const score = wanted.filter((t) => postTags.includes(t)).length
      return { post: p, score }
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)

  if (scored.length === 0) return null

  return (
    <section className="section-padding bg-blue-50/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {scored.map(({ post }) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg ring-1 ring-gray-100 transition-all"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <BookOpenIcon className="h-6 w-6 text-blue-600" />
              </div>
              <span className="inline-block mb-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
              <span className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                Read Guide
                <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
