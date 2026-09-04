import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import SectionTitle from "@/components/SectionTitle";

type SystemType = {
  id: number;
  title: string;
  scope: string;
  description: string;
  tags: string[];
};

const PortfolioSection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  // Entregas para clientes sao cobertas por sigilo contratual: esta secao
  // descreve a natureza dos sistemas e as decisoes tecnicas, sem nome de
  // cliente, marca ou captura de tela de produto de terceiros.
  const systems: SystemType[] = [
    {
      id: 1,
      title: t("portfolio.system1.title"),
      scope: t("portfolio.system1.scope"),
      description: t("portfolio.system1.description"),
      tags: ["React Native", "Redux", "Node.js", "Firebase", "CodePush"],
    },
    {
      id: 2,
      title: t("portfolio.system2.title"),
      scope: t("portfolio.system2.scope"),
      description: t("portfolio.system2.description"),
      tags: ["React Native", "Redux", "Contentful", "OneSignal", "OAuth"],
    },
    {
      id: 3,
      title: t("portfolio.system3.title"),
      scope: t("portfolio.system3.scope"),
      description: t("portfolio.system3.description"),
      tags: ["React Native", "RealmDB", "Zustand", "Offline-first"],
    },
    {
      id: 4,
      title: t("portfolio.system4.title"),
      scope: t("portfolio.system4.scope"),
      description: t("portfolio.system4.description"),
      tags: ["React Native", "MobX", "Firebase", "REST"],
    },
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <SectionTitle>{t("portfolio.title")}</SectionTitle>

        <p className="type-body text-muted-foreground measure">
          {t("portfolio.intro")}
        </p>

        <div
          ref={ref}
          className="mt-10 lg:mt-12 grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {systems.map((system, index) => (
            <article
              key={system.id}
              className={cn(
                "pane p-6 sm:p-8 reveal-lit",
                inView && "is-in"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <p className="type-label text-muted-dim">{system.scope}</p>
              <h3 className="mt-2.5 type-title">{system.title}</h3>

              <p className="mt-4 type-body text-muted-foreground">
                {system.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {system.tags.map((tag) => (
                  <li key={tag}>
                    <span className="chip chip-caps">{tag}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
