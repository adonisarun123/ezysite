import { Metadata } from 'next'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UrgencyCTA from '@/components/UrgencyCTA';
import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarDaysIcon,
  ClockIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

import { posts } from '@/lib/blogData';

export const metadata: Metadata = {
  title: 'Blog | Home Services Tips & Insights | EzyHelpers',
  description: 'Expert tips, guides & insights about domestic help services. Learn about hiring, managing & getting the best from your home service professionals.',
  keywords: 'domestic help blog, home services tips, maid hiring guide, household management, domestic staff management',
  openGraph: {
    title: 'EzyHelpers Blog - Home Services Insights & Tips',
    description: 'Get expert advice on managing your home with professional help. Tips on hiring, training, and working with domestic staff.',
    url: 'https://www.ezyhelpers.com/blog',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/blog'
  }
}

export default function BlogIndex() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const others = posts.filter((p) => p.id !== featured.id);

  return (
    <main className="min-h-screen scroll-smooth">
      <UrgencyCTA />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-white pt-24 pb-32">
        <div className="absolute inset-0 pointer-events-none select-none opacity-20 [mask-image:radial-gradient(white,transparent)]">
          {/* subtle pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:200px_200px]"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Insights, Advice & Stories
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Practical tips and inspiration to help you hire, manage and care for the people who make your home run smoothly.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="section-padding">
        <div className="container-custom">
          <Link
            href={`/blog/${featured.id}`}
            className="group block rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-shadow"
          >
            <div className="md:grid md:grid-cols-2">
              {featured.image ? (
                <div className="relative h-64 md:h-auto">
                  <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                </div>
              ) : null}
              <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
                <span className="inline-block mb-3 text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  {featured.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">{featured.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <CalendarDaysIcon className="w-4 h-4" />
                    {featured.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {featured.readTime}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((post) => (
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
        </div>
      </section>

      <Footer />
    </main>
  );
} 