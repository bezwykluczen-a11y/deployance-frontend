// app/blog/page.jsx — landing bloga
import { getPosts } from '../../lib/wp';
import PostCard from '../../components/blog/PostCard';
import Pagination from '../../components/blog/Pagination';

export const metadata = {
  title: 'Blog | Deployance',
  description:
    'Artykuły o tworzeniu stron, automatyzacji i AI w biznesie. Praktyczna wiedza od zespołu Deployance.',
};

const PER_PAGE = 9;

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const page = Math.max(1, Number.parseInt(params?.page ?? '1', 10) || 1);

  let posts = [];
  let total = 0;
  let totalPages = 0;
  let fetchError = false;

  try {
    ({ posts, total, totalPages } = await getPosts({ page, perPage: PER_PAGE }));
  } catch {
    fetchError = true;
  }

  const featured = page === 1 && posts.length > 0 ? posts[0] : null;
  const rest = featured ? posts.slice(1) : posts;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Hero */}
      <header className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Blog
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Wiedza, która pracuje na Twój biznes
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Tworzenie stron, automatyzacja, AI i marketing — bez żargonu, za to z praktyki.
          {total > 0 && (
            <span className="ml-1 text-gray-400 dark:text-gray-500">
              ({total} {total === 1 ? 'wpis' : total < 5 ? 'wpisy' : 'wpisów'})
            </span>
          )}
        </p>
      </header>

      {fetchError ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/50 dark:bg-red-950/30">
          <h2 className="text-lg font-semibold text-red-700 dark:text-red-400">
            Nie udało się załadować wpisów
          </h2>
          <p className="mt-2 text-sm text-red-600 dark:text-red-300">
            Wystąpił chwilowy problem z połączeniem. Odśwież stronę za moment.
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div className="rounded-xl border border-gray-200 p-12 text-center dark:border-white/10">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Jeszcze tu pusto
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Pierwsze artykuły są już w przygotowaniu. Zajrzyj wkrótce.
          </p>
        </div>
      ) : (
        <>
          {/* Wyróżniony najnowszy wpis — tylko na 1. stronie */}
          {featured && <PostCard post={featured} featured priority />}

          {/* Siatka pozostałych wpisów */}
          {rest.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          <Pagination page={page} totalPages={totalPages} />
        </>
      )}
    </section>
  );
}
