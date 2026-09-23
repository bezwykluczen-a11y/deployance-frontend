import { ThemeProvider } from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './globals.css';

export const metadata = {
  title: {
    default: 'Software House | Tworzenie Aplikacji Webowych i Mobilnych | Deployance',
    template: '%s | Deployance',
  },
  description:
    'Deployance to software house tworzący aplikacje webowe i mobilne, produkty SaaS oraz dedykowane oprogramowanie dla firm. Next.js, React, Node.js, chmura i AI.',
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning jest wymagany przez next-themes
    <html lang="pl" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          {/* Tu wstrzykiwana jest treść page.js */}
          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
