import { Metadata } from 'next';
import { posts } from '@/lib/blogData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UrgencyCTA from '@/components/UrgencyCTA';
import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarDaysIcon,
  ClockIcon,
  TagIcon,
  ArrowLeftIcon,
  MapPinIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Live-In Maid Bangalore: Complete Salary Guide & Hiring Tips (2024)',
  description: 'Looking for a live-in maid in Bangalore? Get detailed salary information, hiring tips, and safety guidelines. Find reliable, verified help for your home.',
  keywords: ['live in maid bangalore', 'maid salary bangalore', 'hire maid bangalore', 'domestic help bangalore', 'full time maid', 'live in helper'],
  openGraph: {
    title: 'Live-In Maid Bangalore: Salary Guide & Hiring Tips',
    description: 'Complete guide to hiring live-in maids in Bangalore with current salary ranges, roles, and verified hiring process.',
    url: 'https://ezyhelpers.com/blog/live-in-maid-salary-roles-hiring-guide-bangalore',
    type: 'article',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/blog/live-in-maid-salary-roles-hiring-guide-bangalore'
  }
}

export default function LiveInMaidGuide() {
  const post = posts.find(p => p.id === 'live-in-maid-salary-roles-hiring-guide-bangalore');

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="min-h-screen scroll-smooth">
      <UrgencyCTA />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-white pt-24 pb-16">
        <div className="absolute inset-0 pointer-events-none select-none opacity-20 [mask-image:radial-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:200px_200px]"></div>
        </div>
        <div className="container-custom relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 mb-6"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-1" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              <TagIcon className="w-4 h-4" /> {post.category}
            </span>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CalendarDaysIcon className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <MapPinIcon className="w-4 h-4" />
                Bangalore
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {post.excerpt}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <CurrencyRupeeIcon className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Salary Range</h3>
              </div>
              <p className="text-gray-600">₹15,000 - ₹30,000/month based on area and role</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <UserGroupIcon className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Popular Areas</h3>
              </div>
              <p className="text-gray-600">Koramangala, Indiranagar, Whitefield, HSR Layout</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Safety First</h3>
              </div>
              <p className="text-gray-600">Complete verification & background checks included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg prose-blue mx-auto">
            {/* Featured Image */}
            {post.image && (
              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12 shadow-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Article Content */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Author Info */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">Written by</p>
              <h3 className="text-lg font-semibold text-gray-900">{post.author}</h3>
              <p className="text-gray-600">Hiring and Placement Expert at EzyHelpers</p>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Hire a Live-In Maid in Bangalore?
              </h3>
              <p className="text-gray-600 mb-6">
                Let EzyHelpers find you verified, reliable live-in help that matches your requirements and budget.
              </p>
              <Link
                href="/hire-helper"
                className="btn-primary inline-block"
              >
                Hire Verified Help Now
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
