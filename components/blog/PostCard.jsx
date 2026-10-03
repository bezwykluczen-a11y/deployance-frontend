// components/blog/PostCard.jsx — karta wpisu (klient: animacje motion)
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { decodeHtml } from '../../lib/decodeHtml';

const dateFormatter = new Intl.DateTimeFormat('pl-PL', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

function CardImage({ post, priority, sizes }) {
  if (!post.image) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600 text-5xl font-bold text-white/30">
        {decodeHtml(post.title).charAt(0)}
      </div>
    );
  }
  return (
    <Image
      src={post.image}
      alt={post.imageAlt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

function Meta({ post, date }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
      {post.category && (
        <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
          {post.category}
        </span>
      )}
      <time dateTime={post.date}>{date}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readingTime} min</span>
    </div>
  );
}

export default function PostCard({ post, featured = false, priority = false }) {
  const date = dateFormatter.format(new Date(post.date));
  const title = decodeHtml(post.title);
  const excerpt = decodeHtml(post.excerpt);

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="group mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5"
      >
        <Link href={`/blog/${post.slug}`} className="grid md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[320px]">
            <CardImage post={post} priority={priority} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Najnowszy wpis
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 sm:text-3xl">
              {title}
            </h2>
            <p className="line-clamp-3 text-gray-600 dark:text-gray-300">{excerpt}</p>
            <Meta post={post} date={date} />
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:shadow-white/5"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <CardImage post={post} priority={false} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <Meta post={post} date={date} />
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
            {title}
          </h3>
          <p className="line-clamp-3 flex-1 text-sm text-gray-600 dark:text-gray-400">
            {excerpt}
          </p>
          <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            Czytaj dalej
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}