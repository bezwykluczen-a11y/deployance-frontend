import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getPost(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch post');
  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);
  
  if (!post) return { title: 'Post not found' };
  return { title: `${post.title.rendered} | Deployance` };
}

export default async function SinglePost({ params }) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);
  
  if (!post) notFound();

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const date = new Date(post.date).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <article className="min-h-screen py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-800 dark:text-gray-200">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-primary hover:underline mb-8 inline-block">&larr; Wróć do bloga</Link>
        <h1 className="text-3xl sm:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <p className="text-gray-500 dark:text-gray-400 mb-8">{date}</p>
        {featuredImage && (
          <div className="relative w-full h-[400px] sm:h-[500px] mb-10 rounded-2xl overflow-hidden">
            <Image src={featuredImage} alt={post.title.rendered} fill className="object-cover" priority />
          </div>
        )}
        <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </article>
  );
}
