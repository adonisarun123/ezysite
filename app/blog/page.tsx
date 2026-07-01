import { Metadata } from 'next'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UrgencyCTA from '@/components/UrgencyCTA';
import Link from 'next/link';

// ISR: revalidate hourly
export const revalidate = 3600
import Image from 'next/image';
import {
  CalendarDaysIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

import { getAllBlogPosts } from '@/lib/blogSource';
import BlogList from '@/components/BlogList';

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

export default async function BlogIndex() {
  const posts = await getAllBlogPosts();
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

      {/* All posts grid with category filters (client component) */}
      <BlogList posts={others} />

      <Footer />
    </main>
  );
} 