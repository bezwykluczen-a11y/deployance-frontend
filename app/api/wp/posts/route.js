import { getPosts, mapPost } from '../../../../lib/wp';

export async function GET() {
  try {
    const { posts } = await getPosts({ page: 1, perPage: 100 });
    return Response.json({ posts: posts.map(p => ({ ...p, title: p.title })) });
  } catch {
    return Response.json({ error: 'Błąd połączenia z WP' }, { status: 502 });
  }
}