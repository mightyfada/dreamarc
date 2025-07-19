import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BuildingSystems from '@/components/BuildingSystems';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <BuildingSystems />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
