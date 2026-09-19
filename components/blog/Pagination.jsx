// components/blog/Pagination.jsx — paginacja (server component)
import Link from 'next/link';

function getPageList(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  if (start > 2) pages.push('…');
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push('…');
  pages.push(total);

  return pages;
}

const baseClasses =
  'inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors';
const activeClasses = 'bg-indigo-600 text-white';
const idleClasses =
  'border border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:text-gray-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400';

export default function Pagination({ page, totalPages }) {
  if (totalPages <= 1) return null;

  const href = (p) => (p === 1 ? '/blog' : `/blog?page=${p}`);
  const pages = getPageList(page, totalPages);

  return (
    <nav aria-label="Paginacja" className="mt-12 flex items-center justify-center gap-2">
      {page > 1 && (
        <Link href={href(page - 1)} className={`${baseClasses} ${idleClasses}`}>
          ← Poprzednia
        </Link>
      )}

      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} className="px-1 text-gray-400">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={href(p)}
            aria-current={p === page ? 'page' : undefined}
            className={`${baseClasses} ${p === page ? activeClasses : idleClasses}`}
          >
            {p}
          </Link>
        ),
      )}

      {page < totalPages && (
        <Link href={href(page + 1)} className={`${baseClasses} ${idleClasses}`}>
          Następna →
        </Link>
      )}
    </nav>
  );
}
