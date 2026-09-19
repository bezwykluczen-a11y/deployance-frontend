import { unstable_noStore as noStore } from 'next/cache';

export const dynamic = 'force-dynamic';

// WordPress CMS — ten sam, co w lib/wp.js
const WP_API = 'http://deployance.online/wp-json/wp/v2';

function toDateOnly(value) {
  if (!value) return '2026-09-19';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '2026-09-19';
  return date.toISOString().slice(0, 10);
}

async function getAllPosts() {
  noStore();
  const allPosts = [];
  let page = 1;

  while (true) {
    const res = await fetch(
      `${WP_API}/posts?status=publish&per_page=100&page=${page}&_fields=slug,modified`,
      { cache: 'no-store' }
    );

    if (!res.ok) break;
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;

    allPosts.push(...batch);
    page++;

    const totalPages = Number(res.headers.get('X-WP-TotalPages') || 0);
    if (totalPages && page > totalPages) break;
  }

  return allPosts;
}

export default async function sitemap() {
  noStore();
  const baseUrl = 'https://deployance.pl';
  const posts = await getAllPosts();

  const staticPages = [
    { url: `${baseUrl}/`, lastModified: '2026-09-19', changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: '2026-09-19', changeFrequency: 'weekly', priority: 0.9 },
    // Później tu dodasz: /oferta, /kontakt, /o-nas, jak powstaną
  ];

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: toDateOnly(post.modified),
    changeFrequency: 'weekly', // albo monthly, jak wolisz
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}