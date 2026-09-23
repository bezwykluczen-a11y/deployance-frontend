// app/dedykowane-oprogramowanie/page.jsx
import ServiceView from '../../components/services/ServiceView';

export const metadata = {
  title: 'Dedykowane Oprogramowanie dla Firm | Deployance ',
  description:
    'Tworzymy dedykowane oprogramowanie na zamówienie: systemy wewnętrzne, automatyzacja procesów, integracje systemów i wdrożenia AI. Software szyty na miarę Twojej firmy.',
};

const content = {
  kicker: 'Dedykowane oprogramowanie',
  title: 'Software szyty',
  highlight: 'na miarę Twojej firmy',
  lead: 'Gotowe narzędzia nie pasują do Twoich procesów? Budujemy oprogramowanie na zamówienie — dopasowane do tego, jak naprawdę pracuje Twoja firma, a nie odwrotnie.',
  features: [
    {
      title: 'Systemy wewnętrzne',
      description:
        'Panele zarządzania, systemy CRM, narzędzia operacyjne — zbudowane wokół Twoich procesów. Koniec z Excelami rozjeżdżającymi się między działami.',
    },
    {
      title: 'Automatyzacja procesów',
      description:
        'Identyfikujemy powtarzalne, ręczne zadania i zamieniamy je w automatyczne przepływy. Mniej błędów, więcej czasu na pracę, która ma znaczenie.',
    },
    {
      title: 'Integracje systemów',
      description:
        'Łączymy to, co masz — księgowość, magazyn, e-commerce, narzędzia marketingu. Dane płyną między systemami bez ręcznego przeklejania.',
    },
    {
      title: 'Wdrożenia AI',
      description:
        'Wykorzystujemy sztuczną inteligencję tam, gdzie przynosi realny zysk: klasyfikacja dokumentów, chatboty, analiza danych, generowanie treści.',
    },
    {
      title: 'Migracje i modernizacja',
      description:
        'Przenosimy stare systemy na nowoczesne technologie — bez zatrzymywania firmy. Stopniowo, z zachowaniem danych i ciągłości działania.',
    },
    {
      title: 'Wsparcie i rozwój',
      description:
        'Nie znikamy po wdrożeniu. Utrzymanie, monitoring i rozwój systemu w modelu, który pasuje do Twojego zespołu.',
    },
  ],
  cta: {
    title: 'Porozmawiajmy o Twoich procesach',
    text: 'Opowiedz nam, co spowalnia Twoją firmę — zaproponujemy rozwiązanie i bezpłatnie wycenimy projekt.',
  },
};

export default function DedykowaneOprogramowaniePage() {
  return <ServiceView {...content} />;
}
