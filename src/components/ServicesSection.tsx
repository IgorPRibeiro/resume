import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/use-in-view";
import SectionTitle from "@/components/SectionTitle";

const ServicesSection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  const services = [
    {
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
    },
    {
      title: t("services.frontend.title"),
      description: t("services.frontend.description"),
    },
    {
      title: t("services.backend.title"),
      description: t("services.backend.description"),
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle>{t("services.title")}</SectionTitle>

        {/* Um registro, não uma fileira de cards: cada linha é uma
            competência e a linha de razão acende sob ela. O numeral entrou
            no lugar do ícone — três serviços numerados se leem como oferta,
            três ícones genéricos se leem como enfeite. */}
        <div
          ref={ref}
          className={cn("reveal border-t border-white/[0.08]", inView && "is-in")}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="row-slide grid gap-8 py-11 lg:grid-cols-12"
            >
              <div className="flex items-baseline gap-[18px] lg:col-span-4">
                <span aria-hidden="true" className="type-mono text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="type-title">{service.title}</h3>
              </div>
              <p className="type-body max-w-[62ch] text-muted-foreground lg:col-span-8">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
