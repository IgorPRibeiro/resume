import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Cinco itens de navegação antes do conteúdo: o teclado precisa de
          um atalho, e ele só aparece quando recebe foco. */}
      <a
        href="#content"
        className="type-label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-5 focus:py-3 focus:text-primary-foreground focus:shadow-accent-bloom"
      >
        {t("a11y.skip")}
      </a>

      <Header />
      <main id="content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
