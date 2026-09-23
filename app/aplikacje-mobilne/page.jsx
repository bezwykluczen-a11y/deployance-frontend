// app/aplikacje-mobilne/page.jsx
import ServiceView from '../../components/services/ServiceView';

export const metadata = {
  title: 'Tworzenie Aplikacji Mobilnych | Deployance ',
  description:
    'Tworzymy aplikacje mobilne na iOS i Android z jednej bazy kodu. Szybciej, taniej, bez kompromisów w jakości. Sprawdź nasze podejście do aplikacji mobilnych.',
};

const content = {
  kicker: 'Aplikacje mobilne',
  title: 'Aplikacje mobilne na',
  highlight: 'iOS i Android',
  lead: 'Budujemy aplikacje mobilne dostępne na iOS i Android — a dzięki technologiom cross-platform robimy to z jednej bazy kodu. Krótszy czas realizacji, niższy koszt, jedna jakość.',
  features: [
    {
      title: 'Jedna baza kodu',
      description:
        'Zamiast pisać dwie osobne aplikacje, tworzymy jedną — działającą na iOS i Androidzie. Realnie skraca to czas developmentu i obniża koszty utrzymania.',
    },
    {
      title: 'Publikacja w sklepach',
      description:
        'Przeprowadzamy Cię przez cały proces App Store i Google Play — od kont deweloperskich, przez recenzję, po publikację i aktualizacje.',
    },
    {
      title: 'Powiadomienia push',
      description:
        'Dotrzyj do użytkowników nawet, gdy nie korzystają z aplikacji. Powiadomienia o nowościach, statusach i ofertach — z pełną kontrolą po Twojej stronie.',
    },
    {
      title: 'Tryb offline',
      description:
        'Aplikacja działa także bez internetu — dane synchronizują się automatycznie po odzyskaniu połączenia. Użytkownik nigdy nie traci swojej pracy.',
    },
    {
      title: 'PWA jako alternatywa',
      description:
        'Nie każdy projekt potrzebuje sklepu z aplikacjami. Progressive Web App to lekka, szybka aplikacja dostępna z przeglądarki — bez instalacji.',
    },
    {
      title: 'Wersje desktopowe',
      description:
        'Ta sama technologia pozwala dostarczyć aplikację na Windows, macOS i Linux. Jeden projekt, wszystkie platformy.',
    },
  ],
  cta: {
    title: 'Chcesz zbudować aplikację mobilną?',
    text: 'Porozmawiajmy o Twoim pomyśle — doradzimy, czy lepsza będzie aplikacja natywna, cross-platform czy PWA, i wycenimy projekt.',
  },
};

export default function AplikacjeMobilnePage() {
  return <ServiceView {...content} />;
}
