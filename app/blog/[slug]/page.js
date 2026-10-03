// app/blog/[slug]/page.js — strona pojedynczego wpisu
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost } from '../../../lib/wp';
import { decodeHtml } from '../../../lib/decodeHtml';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: 'Nie znaleziono wpisu | Deployance' };

  const title = decodeHtml(post.title);
  const excerpt = decodeHtml(post.excerpt);

  return {
    title: `${title} | Deployance`,
    description: excerpt?.slice(0, 160) || undefined,
    openGraph: {
      title,
      description: excerpt?.slice(0, 160) || undefined,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function SinglePostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const title = decodeHtml(post.title);
  const excerpt = decodeHtml(post.excerpt);

  const date = new Date(post.date).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt?.slice(0, 160) || undefined,
    datePublished: post.date,
    image: post.image ? [post.image] : undefined,
  };

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
      >
        <span aria-hidden="true">←</span> Wróć do bloga
      </Link>

      <header className="mb-8">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          {post.category && (
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
              {post.category}
            </span>
          )}
          <time dateTime={post.date}>{date}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} min czytania</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {title}
        </h1>
      </header>

      {post.image && (
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <div
        className="prose prose-lg max-w-none dark:prose-invert prose-img:rounded-xl prose-a:text-indigo-600 dark:prose-a:text-indigo-400"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="mt-12 border-t border-gray-200 pt-8 dark:border-white/10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
        >
          <span aria-hidden="true">←</span> Zobacz pozostałe wpisy
        </Link>
      </footer>
    </article>
  );
}