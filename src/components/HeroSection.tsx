import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

import i from "@/assets/images/i.png";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <p className="text-highlight text-lg">{t("hero.greeting")}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Igor P. Ribeiro
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
                {t("hero.title")}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              {t("hero.description")}
            </p>
            <div className="pt-4">
              <Button
                variant="default"
                onClick={scrollToContact}
                className="bg-highlight hover:bg-highlight/90"
              >
                {t("hero.cta")}
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-highlight">
              <img
                src={i}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Button
            variant="outline"
            size="icon"
            className="animate-bounce"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
