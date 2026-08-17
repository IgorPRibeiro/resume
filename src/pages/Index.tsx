import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import AmbientBackground from "@/components/AmbientBackground";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useLanguage();
  const { hash } = useLocation();

  // Voltando das ferramentas por `/#about`, quem entrega o endereço é o
  // roteador, e não o navegador: o recorte precisa acontecer depois que a
  // página existe. O respiro sob o cabeçalho fixo é do `scroll-padding-top`.
  useEffect(() => {
    if (!hash) return undefined;

    const target = document.querySelector(hash);
    if (!target) return undefined;

    const frame = requestAnimationFrame(() => target.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Cinco itens de navegação antes do conteúdo: o teclado precisa de
          um atalho, e ele só aparece quando recebe foco. */}
      <a
        href="#content"
        className="type-label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-5 focus:py-3 focus:text-primary-foreground focus:shadow-accent-bloom"
      >
        {t("a11y.skip")}
      </a>

      <AmbientBackground />
      <ScrollProgress />

      <Header />

      {/* A rua fica em z-0; tudo que se lê passa por cima dela. */}
      <main id="content" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <OpenSourceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
