// components/blog/Pagination.jsx
import Link from 'next/link';


function getPageList(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  if (start > 2) pages.push('…');

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < total - 1) pages.push('…');

  pages.push(total);

  return pages;
}


const baseClasses =
  'inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors';

const activeClasses = 'bg-indigo-600 text-white';

const idleClasses =
  'border border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:text-gray-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400';


export default function Pagination({ page, totalPages }) {
  if (totalPages <= 1) return null;

  const href = (p) => (p === 1 ? '/blog' : `/blog?page=${p}`);
  const pages = getPageList(page, totalPages);

  const previousLink =
    page > 1 ? (
      <Link
        href={href(page - 1)}
        className={`${baseClasses} ${idleClasses} flex-1 sm:flex-none`}
      >
        ← <span className="ml-1">Poprzednia</span>
      </Link>
    ) : (
      <span className="hidden sm:block sm:w-[128px]" aria-hidden="true" />
    );

  const nextLink =
    page < totalPages ? (
      <Link
        href={href(page + 1)}
        className={`${baseClasses} ${idleClasses} flex-1 sm:flex-none`}
      >
        <span className="mr-1">Następna</span> →
      </Link>
    ) : (
      <span className="hidden sm:block sm:w-[128px]" aria-hidden="true" />
    );

  return (
    <nav aria-label="Paginacja" className="mt-12">
      {/* Mobile: numery stron */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:hidden">
        {pages.map((p, i) =>
          p === '…' ? (
            <span
              key={`mobile-ellipsis-${i}`}
              className="inline-flex min-h-11 items-center px-1 text-gray-400"
              aria-hidden="true"
            >
              …
            </span>
          ) : (
            <Link
              key={`mobile-${p}`}
              href={href(p)}
              aria-current={p === page ? 'page' : undefined}
              className={`${baseClasses} ${
                p === page ? activeClasses : idleClasses
              }`}
            >
              {p}
            </Link>
          ),
        )}
      </div>

      {/* Mobile: poprzednia / następna w osobnym rzędzie */}
      <div className="mt-3 flex w-full gap-2 sm:hidden">
        {previousLink}
        {nextLink}
      </div>

      {/* Desktop: pełna paginacja w jednym wierszu */}
      <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-2">
        {previousLink}

        {pages.map((p, i) =>
          p === '…' ? (
            <span
              key={`desktop-ellipsis-${i}`}
              className="inline-flex min-h-11 items-center px-1 text-gray-400"
              aria-hidden="true"
            >
              …
            </span>
          ) : (
            <Link
              key={`desktop-${p}`}
              href={href(p)}
              aria-current={p === page ? 'page' : undefined}
              className={`${baseClasses} ${
                p === page ? activeClasses : idleClasses
              }`}
            >
              {p}
            </Link>
          ),
        )}

        {nextLink}
      </div>
    </nav>
  );
}