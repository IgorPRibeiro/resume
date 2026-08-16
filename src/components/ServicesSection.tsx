import { useLanguage } from "@/context/LanguageContext";
import { Monitor, Server, Smartphone } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
      icon: Smartphone,
    },
    {
      title: t("services.frontend.title"),
      description: t("services.frontend.description"),
      icon: Monitor,
    },
    {
      title: t("services.backend.title"),
      description: t("services.backend.description"),
      icon: Server,
    },
  ];

  return (
    <section id="services" className="section bg-secondary/20">
      <div className="container">
        <SectionTitle>{t("services.title")}</SectionTitle>

        {/* Um registro, não uma fileira de cards: cada linha é uma
            competência e a linha de razão acende sob ela. */}
        <div className="border-t border-border">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="row-rule group grid gap-4 lg:grid-cols-12 lg:gap-8 py-10 lg:py-12"
            >
              <div className="lg:col-span-4 flex items-start gap-4">
                <Icon className="h-5 w-5 mt-1 shrink-0 text-muted-foreground transition-colors duration-300 ease-out group-hover:text-foreground" />
                <h3 className="type-title">{title}</h3>
              </div>
              <p className="lg:col-span-8 type-body text-muted-foreground measure">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
