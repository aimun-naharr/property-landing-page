import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import Sponsors from "@/components/home/Sponsors";
import AwardSection from "@/components/home/AwardSection";
import Footer from "@/layouts/Footer";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-conic">
      {/* navbar */}

      {/* hero section */}
      <HeroSection />
      {/* about */}
      <AboutSection />
      {/* service */}
      {/* portfolio gallery */}
      <PortfolioSection />
      {/* sponsors */}
      <Sponsors />
      {/* awards */}
      <AwardSection />
      {/* contact */}
      {/* minimum footer */}
      <Footer />
    </main>
  );
}
