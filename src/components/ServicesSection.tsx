import { useLanguage } from "@/context/LanguageContext";
import { Monitor, Server, Smartphone } from "lucide-react";

const ServiceCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <div className="bg-secondary rounded-lg p-6 card-hover border border-border">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-secondary/50 rounded-full">
          <Icon className="h-8 w-8 text-highlight" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
};

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
    <section id="services" className="section bg-secondary/20 py-16 md:py-24">
      <div className="container">
        <h2 className="section-title">{t("services.title")}</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
