// app/mvp/page.jsx — strona usługi: Tworzenie MVP
import Link from 'next/link';

export const metadata = {
  title: 'Tworzenie MVP | Deployance',
  description:
    'Zbudujemy Twoje Minimum Viable Product: od analizy pomysłu, przez prototyp, po wdrożenie i zbieranie feedbacku. Szybko, skalowalnie, gotowe na inwestorów.',
  openGraph: {
    title: 'Tworzenie MVP | Deployance',
    description:
      'Od pomysłu do działającego MVP — analiza, prototyp, wdrożenie i walidacja rynkowa.',
    type: 'website',
  },
};

const benefits = [
  {
    title: 'Szybsze wejście na rynek',
    text: 'Skupiamy się na funkcjach, które realnie weryfikują pomysł — resztę odsuwamy na później.',
  },
  {
    title: 'Niższe ryzyko inwestycji',
    text: 'Zanim zainwestujesz w pełny produkt, testujesz założenia na realnych użytkownikach.',
  },
  {
    title: 'Gotowość dla inwestorów',
    text: 'Działające MVP z metrykami to mocny argument w rozmowach o finansowaniu.',
  },
  {
    title: 'Baza do skalowania',
    text: 'Architektura projektowana tak, aby MVP mogło spokojnie urosnąć do pełnego produktu.',
  },
];

const process = [
  {
    step: '01',
    title: 'Analiza pomysłu',
    text: 'Definiujemy problem, grupę docelową i najważniejsze funkcje, które muszą znaleźć się w pierwszej wersji.',
  },
  {
    step: '02',
    title: 'Prototyp i UX',
    text: 'Projektujemy przepływy użytkownika i klikalny prototyp, aby zwizualizować produkt przed kodowaniem.',
  },
  {
    step: '03',
    title: 'Budowa MVP',
    text: 'Wdrażamy kluczowe funkcjonalności w krótkich iteracjach, z regularnymi demo i feedbackiem.',
  },
  {
    step: '04',
    title: 'Launch i walidacja',
    text: 'Publikujemy produkt, podłączamy analitykę i zbieramy dane, które wskazują kierunek dalszego rozwoju.',
  },
];

const tech = [
  'Next.js / React',
  'Node.js',
  'Flutter / React Native',
  'Firebase / Supabase',
  'PostgreSQL',
  'Serverless / Vercel',
];

const faq = [
  {
    q: 'Ile trwa budowa MVP?',
    a: 'Typowo 4–12 tygodni, zależnie od zakresu. Na pierwszym spotkaniu określamy realny harmonogram dla Twojego pomysłu.',
  },
  {
    q: 'Ile kosztuje MVP?',
    a: 'Koszt zależy od zakresu funkcji i integracji. Po krótkiej analizie przygotowujemy wycenę i harmonogram.',
  },
  {
    q: 'Czy MVP nadaje się do prezentacji inwestorom?',
    a: 'Tak. Budujemy je tak, aby pokazywało realną wartość produktu i zbierało pierwsze metryki użycia.',
  },
  {
    q: 'Co jeśli pomysł będzie wymagał zmian?',
    a: 'To normalna część procesu. MVP jest projektowane tak, aby tanio i szybko weryfikować założenia oraz iterować.',
  },
];

export default function MvpPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Hero */}
      <section className="mb-20 text-center">
        <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
          Usługa
        </span>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Tworzenie MVP — od pomysłu do działającego produktu
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Pomagamy startupom i firmom zbudować Minimum Viable Product, które szybko weryfikuje
          pomysł, ogranicza ryzyko i otwiera drogę do skalowania.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/#contact-us"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Porozmawiajmy o Twoim MVP <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:border-indigo-600 hover:text-indigo-600 dark:border-white/20 dark:text-gray-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            Wpisy o MVP na blogu
          </Link>
        </div>
      </section>

      {/* Korzyści */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Dlaczego warto zbudować MVP?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {b.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proces */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Jak wygląda proces?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div
              key={p.step}
              className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
            >
              <span className="mb-3 inline-block text-sm font-bold text-indigo-600 dark:text-indigo-400">
                {p.step}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologie */}
      <section className="mb-20">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Technologie, których używamy
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Najczęstsze pytania
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {faq.map((f) => (
            <details
              key={f.q}
              className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
            >
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                {f.q}
              </summary>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-indigo-600 p-10 text-center text-white sm:p-14">
        <h2 className="mb-4 text-3xl font-bold">Masz pomysł na produkt?</h2>
        <p className="mx-auto mb-8 max-w-xl text-indigo-100">
          Opowiedz nam o nim — pomożemy określić zakres MVP, oszacować koszt i czas oraz
          zaproponować drogę do pierwszych użytkowników.
        </p>
        <Link
          href="/#contact-us"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
        >
          Skontaktuj się z nami <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}