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
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Maid Verification in India: Safe & Trusted Domestic Help | EzyHelpers',
  description: 'Maid verification is crucial for your family\'s safety. Learn the risks of unverified hires and how to protect your home with proper verification.',
  keywords: ['maid verification', 'domestic help safety', 'background check', 'helper verification', 'domestic worker security'],
  openGraph: {
    title: 'Maid Verification in India: Safe & Trusted Domestic Help',
    description: 'Learn how to verify and hire trusted domestic help safely.',
    url: 'https://ezyhelpers.com/blog/complete-guide-to-maid-verification-and-background-check-in-india',
    type: 'article',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/blog/complete-guide-to-maid-verification-and-background-check-in-india'
  }
}

export default function MaidVerificationGuide() {
  const post = posts.find(p => p.id === 'complete-guide-to-maid-verification-and-background-check-in-india');

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
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {post.excerpt}
          </p>
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
              <p className="text-gray-600">Security and Verification Expert at EzyHelpers</p>
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
                Need Help with Maid Verification?
              </h3>
              <p className="text-gray-600 mb-6">
                Let EzyHelpers handle the verification process for you. We ensure thorough background checks and documentation for your peace of mind.
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
