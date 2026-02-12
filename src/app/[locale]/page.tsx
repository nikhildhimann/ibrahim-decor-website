import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import CraftsmanshipMarquee from '@/components/sections/CraftsmanshipMarquee';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import StatsCounter from '@/components/sections/StatsCounter';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CraftsmanshipMarquee />
      <Services />
      <Projects />
      <StatsCounter />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
