// app/aplikacje-webowe/page.jsx
import ServiceView from '../../components/services/ServiceView';

export const metadata = {
  title: 'Tworzenie Aplikacji Webowych | Deployance',
  description:
    'Projektujemy i budujemy nowoczesne aplikacje webowe: panele klienta, systemy SaaS, aplikacje SPA i PWA. Next.js, React, Node.js. Sprawdź, co możemy dla Ciebie zbudować.',
};

const content = {
  kicker: 'Aplikacje webowe',
  title: 'Aplikacje webowe',
  highlight: 'szyte na miarę',
  lead: 'Projektujemy i wdrażamy skalowalne aplikacje internetowe — od prostych paneli klienta po złożone systemy biznesowe. Pracujemy w Next.js, React i Node.js, z naciskiem na wydajność i doświadczenie użytkownika.',
  features: [
    {
      title: 'Single Page Application',
      description:
        'Błyskawiczne działanie bez przeładowań strony. Użytkownik dostaje płynne doświadczenie jak w aplikacji desktopowej, a Ty krótszy czas ładowania i wyższą konwersję.',
    },
    {
      title: 'Pełna responsywność',
      description:
        'Aplikacja wygląda i działa równie dobrze na telefonie, tablecie i komputerze. Projektujemy zgodnie z zasadami User Experience, zaczynając od wersji mobilnej.',
    },
    {
      title: 'Integracje API',
      description:
        'Łączymy aplikację z płatnościami, CRM-ami, systemami księgowymi i dowolnymi usługami zewnętrznymi. Automatyzacja przepływu danych w całej firmie.',
    },
    {
      title: 'Wydajność i SEO',
      description:
        'Renderowanie po stronie serwera i optymalizacja Core Web Vitals. Twoja aplikacja ładuje się szybko i jest przyjazna wyszukiwarkom.',
    },
    {
      title: 'Skalowalna architektura',
      description:
        'Budujemy tak, aby aplikacja rosła razem z biznesem — bez konieczności przepisywania jej od zera po roku. Czysty kod i dokumentacja w standardzie.',
    },
    {
      title: 'Bezpieczeństwo',
      description:
        'Uwierzytelnianie, uprawnienia, szyfrowanie danych i zgodność z RODO. Bezpieczeństwo projektujemy od pierwszego dnia, nie doklejamy na końcu.',
    },
  ],
  cta: {
    title: 'Masz pomysł na aplikację webową?',
    text: 'Opowiedz nam o swoim projekcie — bezpłatnie wycenimy realizację i zaproponujemy najlepsze podejście technologiczne.',
  },
};

export default function AplikacjeWebowePage() {
  return <ServiceView {...content} />;
}
