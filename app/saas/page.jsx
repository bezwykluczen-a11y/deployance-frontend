// app/saas/page.jsx
import ServiceView from '../../components/services/ServiceView';

export const metadata = {
  title: 'Tworzenie Produktów SaaS | Deployance',
  description:
    'Budujemy produkty SaaS od MVP po skalowanie: subskrypcje i płatności, multi-tenancy, analityka, infrastruktura chmurowa. Zamień pomysł w działający produkt.',
};

const content = {
  kicker: 'Produkty SaaS',
  title: 'Od pomysłu do',
  highlight: 'działającego SaaS-a',
  lead: 'Specjalizujemy się w budowie produktów Software as a Service. Zaczynamy od MVP, które weryfikuje pomysł na rynku, a kończymy na skalowalnym produkcie z płacącymi klientami.',
  features: [
    {
      title: 'MVP w tygodnie, nie miesiące',
      description:
        'Wycinamy wszystko, co zbędne na start, i dowozimy minimalną wersję produktu, którą możesz pokazać pierwszym klientom i inwestorom.',
    },
    {
      title: 'Subskrypcje i płatności',
      description:
        'Wdrażamy Stripe z planami, okresami próbnymi, fakturami i obsługą kart. Model subskrypcyjny gotowy do zarabiania od pierwszego dnia.',
    },
    {
      title: 'Multi-tenancy',
      description:
        'Wiele firm na jednej platformie — z izolacją danych, własnymi ustawieniami i uprawnieniami dla każdego tenanta. Fundament każdego SaaS-a B2B.',
    },
    {
      title: 'Analityka produktu',
      description:
        'Mierzysz, co użytkownicy faktycznie robią w produkcie: aktywację, retencję, konwersję planów. Decyzje na danych, nie na przeczuciach.',
    },
    {
      title: 'Infrastruktura chmurowa',
      description:
        'Skalowalna architektura, która rośnie razem z liczbą klientów. Monitoring, backupy i wysoka dostępność w standardzie.',
    },
    {
      title: 'CI/CD i jakość',
      description:
        'Automatyczne testy i wdrożenia. Nowe funkcje trafiają do klientów szybko i bez niedzielnych awarii.',
    },
  ],
  cta: {
    title: 'Masz pomysł na produkt SaaS?',
    text: 'Umów się na bezpłatną konsultację — przejdziemy przez Twój pomysł, oszacujemy MVP i zaproponujemy plan działania.',
  },
};

export default function SaasPage() {
  return <ServiceView {...content} />;
}
