import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type SystemType = {
  id: number;
  title: string;
  scope: string;
  description: string;
  tags: string[];
};

const PortfolioSection = () => {
  const { t } = useLanguage();

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
    <section id="portfolio" className="work-section">
      <div className="container">
        <div className="work-introduction">
          <h2>{t("work.heading")}</h2>
          <p>{t("work.intro")}</p>
        </div>
        <div className="work-list">
          {systems.map((system) => (
            <article id={`system-${system.id}`} key={system.id} className="work-item">
              <div className="work-item-heading">
                <h3>{system.title}</h3>
                <p className="type-label text-muted-foreground mt-4">{system.scope}</p>
                <ul className="work-tags">
                  {system.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              <div className="work-item-body">
                <p className="work-summary">{t(`work.${system.id}.summary`)}</p>
                <details className="work-details" open={system.id === 3}>
                  <summary>{t("work.details")}<ChevronDown size={18} aria-hidden="true" /></summary>
                  <p>{system.description}</p>
                </details>
                <a className="work-contact" href="#contact">{t("work.discuss")}<ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
        <details className="work-confidential">
          <summary>{t("work.confidential")}<ChevronDown size={16} aria-hidden="true" /></summary>
          <p>{t("portfolio.intro")}</p>
        </details>
      </div>
    </section>
  );
};
export default PortfolioSection;
