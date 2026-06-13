'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CalendarDaysIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline'
import { BLOG_FILTER_GROUPS, blogFilterGroup, type BlogPost } from '@/lib/blogData'

const ALL = 'All'

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<string>(ALL)

  // Only show filter tabs that actually have posts, in the defined order.
  const tabs = useMemo(() => {
    const counts = new Map<string, number>()
    for (const p of posts) {
      const g = blogFilterGroup(p.category)
      counts.set(g, (counts.get(g) ?? 0) + 1)
    }
    const present = BLOG_FILTER_GROUPS.filter((g) => counts.has(g))
    return [
      { label: ALL, count: posts.length },
      ...present.map((g) => ({ label: g, count: counts.get(g)! })),
    ]
  }, [posts])

  const visible = useMemo(
    () => (active === ALL ? posts : posts.filter((p) => blogFilterGroup(p.category) === active)),
    [posts, active]
  )

  return (
    <section className="section-padding pt-0">
      <div className="container-custom">
        {/* Filter bar */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {tabs.map((t) => {
            const isActive = t.label === active
            return (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(t.label)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {t.label}
                <span
                  className={`rounded-full px-1.5 text-xs ${
                    isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {t.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow bg-white"
            >
              {post.image && (
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 inline-flex items-center gap-1 text-xs font-medium text-blue-600">
                  <TagIcon className="w-4 h-4" /> {post.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 flex-1 mb-4 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <CalendarDaysIcon className="w-4 h-4 text-gray-400" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ClockIcon className="w-4 h-4 text-gray-400" />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-gray-500 py-12">No posts in this category yet.</p>
        )}
      </div>
    </section>
  )
}
