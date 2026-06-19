import { posts, type BlogPost } from '@/lib/blogData';

/**
 * Blog data-access layer. Pages import from here rather than reaching into
 * blogData directly, so the backing store (currently the static `posts`
 * array) can be swapped for a database without touching the pages.
 */

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return posts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  return posts.find((p) => p.id === slug);
}
