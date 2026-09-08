import { ThemeProvider } from '../components/ThemeProvider'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Make sure you import your Tailwind CSS file here!
import './globals.css'; 

export const metadata = {
  title: 'SEO Masters',
  description: 'Deployance Frontend built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning is required by next-themes
    <html lang="en" suppressHydrationWarning> 
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          
          {/* This is where your page.js content will be injected */}
          <main className="min-h-screen">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
