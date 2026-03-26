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
    url: 'https://ezyhelpers.com/blog',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/blog'
  }
}

// ── Unified blog shape ─────────────────────────────────────────────────────
interface UnifiedBlog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  source: 'directus' | 'local';
}

async function getDirectusBlogs(): Promise<UnifiedBlog[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'}/items/blogs?fields=*,category.name&filter[status][_eq]=published&sort=-date_created`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    const json = await res.json();
    const data = json?.data ?? [];

    return data.map((blog: any) => ({
      id: blog.id,
      slug: blog.slug,
      title: blog.title,
      excerpt: blog.excerpt ?? '',
      image: blog.featured_image_url || '/images/blog-fallback.jpg',
      category: blog.category?.name ?? '',
      date: new Date(blog.date_created).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'long', day: 'numeric',
      }),
      readTime: `${blog.reading_time || 5} min read`,
      source: 'directus',
    }));
  } catch {
    return [];
  }
}

function getLocalBlogs(): UnifiedBlog[] {
  return posts.map((post) => ({
    id: post.id,
    slug: post.id,          // old posts use id as slug
    title: post.title,
    excerpt: post.excerpt,
    image: post.image || '/images/blog-fallback.jpg',
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    source: 'local',
  }));
}

export default async function BlogIndex() {
  const directusBlogs = await getDirectusBlogs();
  const localBlogs = getLocalBlogs();

  // Directus blogs first, then local blogs
  // Remove local blogs that have been migrated to Directus (match by slug)
  const directusSlugs = new Set(directusBlogs.map((b) => b.slug));
  const filteredLocalBlogs = localBlogs.filter((b) => !directusSlugs.has(b.slug));

  const allBlogs = [...directusBlogs, ...filteredLocalBlogs];

  return (
    <main className="min-h-screen scroll-smooth">
      <UrgencyCTA />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-white pt-24 pb-32">
        <div className="container-custom text-center">
          <div className="absolute inset-0 pointer-events-none select-none opacity-20 [mask-image:radial-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:200px_200px]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            Insights, Advice & Stories
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Practical tips and inspiration to help you hire, manage and care for your home.
          </p>
        </div>
      </section>

      {/* ALL BLOGS */}
      <section className="section-padding">
        <div className="container-custom space-y-12">
          {allBlogs.map((blog) => (
            <Link
              key={`${blog.source}-${blog.id}`}
              href={`/blog/${blog.slug}`}
              className="group block rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="grid md:grid-cols-2 min-h-[320px] md:min-h-[360px]">

                {/* IMAGE */}
                <div className="relative w-full h-64 md:h-auto">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-12 bg-white flex flex-col justify-between">
                  <div>
                    {blog.category && (
                      <span className="inline-flex items-center gap-1 mb-3 text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        <TagIcon className="w-4 h-4" />
                        {blog.category}
                      </span>
                    )}

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <CalendarDaysIcon className="w-4 h-4" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {blog.readTime}
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}