
import BlogPostViewer from '@/components/BlogPostViewer';
import { notFound } from 'next/navigation';

// Disable caching for demo purposes to see new posts immediately
export const dynamic = 'force-dynamic';

async function getPost(slug: string) {
  // SSR Fetch
  const res = await fetch(`http://localhost:3001/api/posts/${slug}`, {
    cache: 'no-store',
  });
  
  if (!res.ok) return null;
  
  return res.json();
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug }  = await params; // Next.js 15+ await params
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-8 border-b pb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-500 text-sm">
          <time dateTime={post.publishedAt}>
            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
          </time>
          <span className="mx-2">•</span>
          <span>By Admin</span>
        </div>
      </header>
      
      <BlogPostViewer content={post.content} />
    </article>
  );
}
