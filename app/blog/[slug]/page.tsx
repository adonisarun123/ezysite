import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UrgencyCTA from '@/components/UrgencyCTA';
import { posts } from '@/lib/blogData';
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.id }));
}

export default function BlogPost({ params }: PageProps) {
  const post = posts.find((p) => p.id === params.slug);
  if (!post) return notFound();

  const markdown = post.content;

  return (
    <main className="min-h-screen">
      <UrgencyCTA />
      <Navbar />

      {/* Header */}
      <header className="section-padding bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 text-sm font-medium text-blue-600 uppercase tracking-wide">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display text-gray-900">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <CalendarDaysIcon className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="prose prose-indigo mx-auto px-4 py-16 max-w-3xl dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-display">Need Trusted Help at Home?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <a href="/hire-helper" className="btn-secondary bg-white text-indigo-600 hover:bg-gray-100 w-full">
              Book a Helper Now
            </a>
            <a href="tel:+919972571005" className="btn-secondary border-white text-white hover:bg-white/10 w-full">
              Call +91 99725 71005
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 