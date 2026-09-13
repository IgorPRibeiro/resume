import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import MobileComposition from "@/components/MobileComposition";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section id="top" className="portfolio-hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-intro">
            <h1 className="hero-name">Igor P.<br />Ribeiro<span className="text-primary">.</span></h1>
            <p className="hero-specialty">{t("visual.specialty")}<br /><span>{t("visual.foundation")}</span></p>
            <p className="hero-description">{t("visual.intro")}</p>
            <div className="hero-actions">
              <a className="hero-primary" href="#portfolio">{t("hero.cta.secondary")}<ArrowDown size={18} aria-hidden="true" /></a>
              <a className="hero-contact" href="#contact">{t("hero.cta")}<ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
            <p className="hero-location">{t("about.fact.base.value")}</p>
          </div>
          <MobileComposition />
        </div>
        <div className="hero-bottom">
          <span>React Native <span aria-hidden="true">/</span> TypeScript <span aria-hidden="true">/</span> Expo</span>
          <a href="#portfolio">{t("visual.follow")}<ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
