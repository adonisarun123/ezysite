import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UrgencyCTA from '@/components/UrgencyCTA';
import { injectHeadingIds } from '@/lib/toc';
import TableOfContents from '@/components/TableOfContentNew';
import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarDaysIcon,
  ClockIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import { MapPin, TagIcon } from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const DIRECTUS_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';

async function getBlog(slug: string) {
  try {
    const res = await fetch(
      `${DIRECTUS_URL}/items/blogs?filter[slug][_eq]=${slug}&fields=*,category.name&limit=1`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data?.[0] ?? null;
  } catch {
    return null;
  }
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug);

  if (!post) {
    return {
      title: 'Post Not Found | EzyHelpers Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.meta_title
      ? `${post.meta_title} | EzyHelpers Blog`
      : `${post.title} | EzyHelpers Blog`,
    description: post.meta_description || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.meta_description || post.excerpt,
      url: `https://ezyhelpers.com/blog/${post.slug}`,
      type: 'article',
      siteName: 'EzyHelpers',
      locale: 'en_IN',
      publishedTime: post.date_created,
      authors: ['EzyHelpers'],
      images: post.featured_image_url
        ? [{ url: post.featured_image_url, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    alternates: {
      canonical: `https://ezyhelpers.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) return notFound();

  const image = blog.featured_image_url || '/images/blog-fallback.jpg';
  const contentWithIds = injectHeadingIds(blog.content ?? '');

  return (
    <main className="min-h-screen">
      <UrgencyCTA />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-white pt-24 pb-16">
        <div className="absolute inset-0 pointer-events-none select-none opacity-20 [mask-image:radial-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:200px_200px]" />
        </div>

        <div className="container-custom relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 mb-6"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-1" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            {blog.category?.name && (
              <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                <TagIcon className="w-4 h-4" />
                {blog.category.name}
              </span>
            )}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CalendarDaysIcon className="w-4 h-4" />
                {new Date(blog.date_created).toLocaleDateString('en-IN', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                {blog.reading_time || 5} min read
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Bangalore
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              {blog.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding">
        <div className="container-custom max-w-7xl">

          {/* Mobile TOC — above grid on small screens */}
          <div className="lg:hidden mb-6">
            <TableOfContents content={blog.content ?? ''} isMobile />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* Sidebar — desktop only */}
            <div className="hidden lg:block lg:col-span-1">
              <TableOfContents content={blog.content ?? ''} />
            </div>

            {/* Main content */}
            <div className="col-span-1 lg:col-span-3">
              <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-10">
                <Image src={image} alt={blog.title} fill className="object-cover" priority />
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-gray-900
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-li:text-gray-700 prose-a:text-blue-600
          prose-strong:text-gray-900 prose-img:rounded-xl">
                <div dangerouslySetInnerHTML={{ __html: contentWithIds }} />
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">Written by</p>
                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.author || 'EzyHelpers Team'}
                </h3>
                <p className="text-gray-600">Hiring and Placement Expert at EzyHelpers</p>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Hire a Live-In Maid in Bangalore?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let EzyHelpers find you verified, reliable live-in help that matches your requirements and budget.
                </p>
                <Link href="/hire-helper" className="btn-primary inline-block">
                  Hire Verified Help Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}