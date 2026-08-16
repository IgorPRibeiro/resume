import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

import i from "@/assets/images/i-portrait.webp";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-[152px] lg:pt-[232px] pb-20 lg:pb-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-center">
          {/* O letreiro */}
          <div className="lg:col-span-7 text-center sm:text-left">
            <h1 className="type-display animate-pane-rise">
              Igor P. Ribeiro
              <span className="block mt-3 type-display-sub text-muted-foreground">
                {t("hero.title")}
              </span>
            </h1>

            <p
              className="mt-8 type-body text-muted-foreground measure mx-auto sm:mx-0 animate-pane-rise"
              style={{ animationDelay: "120ms" }}
            >
              {t("hero.description")}
            </p>

            <div
              className="mt-10 animate-pane-rise"
              style={{ animationDelay: "220ms" }}
            >
              <Button
                size="pane"
                onClick={() => scrollTo("contact")}
                className="transition-[background-color,box-shadow] duration-200 hover:shadow-accent-bloom"
              >
                {t("hero.cta")}
              </Button>
            </div>
          </div>

          {/* O objeto atrás do vidro */}
          <div
            className="lg:col-span-5 animate-pane-rise"
            style={{ animationDelay: "80ms" }}
          >
            <div className="pane flex items-center justify-center p-10 lg:p-12">
              <img
                src={i}
                alt="Igor P. Ribeiro"
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-[300px] lg:h-[300px] rounded-full object-cover border-4 border-primary"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 lg:mt-28">
          <Button
            variant="outline"
            size="pane-icon"
            onClick={() => scrollTo("about")}
            aria-label={t("nav.about")}
            className="rounded-full transition-transform duration-300 ease-out hover:translate-y-1"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
