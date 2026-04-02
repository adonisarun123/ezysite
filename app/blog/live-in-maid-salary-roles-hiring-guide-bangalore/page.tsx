import { Metadata } from 'next';
import { posts } from '@/lib/blogData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UrgencyCTA from '@/components/UrgencyCTA';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl font-medium">
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
        <div className="container-custom max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="prose-blog">
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
            <div className="prose-blog max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8 first:mt-0">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 mt-6">{children}</h3>,
                  h4: ({ children }) => <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 mt-4">{children}</h4>,
                  p: ({ children }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="text-gray-700 leading-relaxed">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                  em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
                  blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6">{children}</blockquote>,
                  code: ({ children }) => <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">{children}</code>,
                  pre: ({ children }) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                  a: ({ href, children }) => <a href={href} className="text-blue-600 hover:text-blue-800 underline font-medium">{children}</a>,
                  table: ({ children }) => <div className="overflow-x-auto mb-4"><table className="min-w-full border border-gray-200 rounded-lg">{children}</table></div>,
                  th: ({ children }) => <th className="bg-gray-50 px-4 py-2 text-left font-semibold text-gray-900 border-b">{children}</th>,
                  td: ({ children }) => <td className="px-4 py-2 text-gray-700 border-b border-gray-100">{children}</td>,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Author Info */}
            <div className="mt-12 py-8 border-t border-gray-100">
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
            <div className="mt-20 p-10 bg-blue-700 rounded-3xl text-center text-white shadow-xl shadow-blue-100">
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                Ready to Hire a Live-In Maid in Bangalore?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let EzyHelpers find you verified, reliable live-in help that matches your unique household requirements and budget perfectly.
              </p>
              <Link
                href="/hire-helper"
                className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Start Your Search Today
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
