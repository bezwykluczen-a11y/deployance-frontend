// lib/wp.js — wspólna warstwa dostępu do WordPressa (REST API)
const WP_DOMAIN = process.env.NEXT_PUBLIC_WP_DOMAIN || 'deployance.online';
const WP_API = `https://${WP_DOMAIN}/wp-json/wp/v2`;

const stripHtml = (html = '') =>
  html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export function mapPost(post) {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  const terms = post._embedded?.['wp:term']?.flat?.() ?? [];
  const category = terms.find((t) => t.taxonomy === 'category');

  const plainText = stripHtml(post.content?.rendered || post.excerpt?.rendered || '');
  const wordCount = plainText.split(' ').filter(Boolean).length;

  return {
    id: post.id,
    slug: post.slug,
    title: stripHtml(post.title?.rendered),
    excerpt: stripHtml(post.excerpt?.rendered),
    content: post.content?.rendered ?? '',
    date: post.date,
    readingTime: Math.max(1, Math.round(wordCount / 200)),
    image: media?.source_url ?? null,
    imageAlt: media?.alt_text || stripHtml(post.title?.rendered),
    category: category?.name ?? null,
  };
}

export async function getPosts({ page = 1, perPage = 9 } = {}) {
  const url = `${WP_API}/posts?_embed&status=publish&orderby=date&order=desc&per_page=${perPage}&page=${page}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  // WP zwraca 400, gdy strona paginacji nie istnieje — traktujemy jako brak wyników
  if (!res.ok) {
    if (res.status === 400 || res.status === 404) {
      return { posts: [], total: 0, totalPages: 0, page };
    }
    throw new Error(`WordPress API error: ${res.status}`);
  }

  return {
    posts: (await res.json()).map(mapPost),
    total: Number(res.headers.get('X-WP-Total') ?? 0),
    totalPages: Number(res.headers.get('X-WP-TotalPages') ?? 1),
    page,
  };
}

export async function getPost(slug) {
  const url = `${WP_API}/posts?_embed&status=publish&slug=${encodeURIComponent(slug)}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`WordPress API error: ${res.status}`);
  const posts = await res.json();
  return posts.length > 0 ? mapPost(posts[0]) : null;
}
