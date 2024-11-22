import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection ';
import NoticesSection from './components/NoticesSection';
import CompaniesSection from './components/CompaniesSection ';
import VideoSection from './components/VideoSection';
import ContactLinksSection from './components/ContactLinksSection';
import Footer from './components/Footer';

import banners from './data/banner';
import empresas from './data/empresas';
import Divisor from './components/Divisor';

export default function HomePage() {
  return (
    <div className="bg-background text-foreground font-sans">
      <TopBar />
      <Header />
      <HeroSection banners={banners} />
      <NoticesSection banners={banners} />
      <Divisor/>
      <CompaniesSection empresas={empresas} />
      <VideoSection />
      <ContactLinksSection />
      <Footer />
    </div>
  );
}
