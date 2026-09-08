import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Services from '@/components/Services';
import OurWork from '@/components/OurWork';
import Teams from '@/components/Teams';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden">
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
    </main>
  );
}
