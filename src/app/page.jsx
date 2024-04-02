import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import Sponsors from "@/components/home/Sponsors";
import AwardSection from "@/components/home/AwardSection";
import ArticleSection from "@/components/home/ArticleSection";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-conic">
      {/* navbar */}
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <Sponsors />
      <AwardSection />
      <ArticleSection />
      <Footer />
    </main>
  );
}
