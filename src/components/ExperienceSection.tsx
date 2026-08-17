import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/use-in-view";
import SectionTitle from "@/components/SectionTitle";

const ExperienceSection = () => {
  const { t } = useLanguage();
  const roles = useInView<HTMLDivElement>(0.05);
  const education = useInView<HTMLDivElement>(0.1);

  const positions = [
    {
      role: t("experience.globalsys.role"),
      company: "Globalsys Soluções em TI",
      period: t("experience.globalsys.period"),
      items: [
        t("experience.globalsys.item1"),
        t("experience.globalsys.item2"),
        t("experience.globalsys.item3"),
        t("experience.globalsys.item4"),
        t("experience.globalsys.item5"),
        t("experience.globalsys.item6"),
      ],
    },
    {
      role: t("experience.easyfarm.role"),
      company: "EasyFarm",
      period: t("experience.easyfarm.period"),
      items: [
        t("experience.easyfarm.item1"),
        t("experience.easyfarm.item2"),
        t("experience.easyfarm.item3"),
      ],
    },
  ];

  const studies = [
    {
      period: t("experience.multivix.period"),
      title: t("experience.multivix.title"),
      description: t("experience.multivix.description"),
    },
    {
      period: t("experience.senai.period"),
      title: t("experience.senai.title"),
      description: t("experience.senai.description"),
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle>{t("experience.title")}</SectionTitle>

        {/* Um registro, não uma pilha de cards: o cargo à esquerda, o que foi
            feito à direita, e a linha de razão separando um do outro. */}
        <div ref={roles.ref} className="border-t border-white/[0.08]">
          {positions.map((position, index) => (
            <div
              key={position.company}
              className={cn(
                "reveal row-slide grid gap-8 py-11 lg:grid-cols-12",
                roles.inView && "is-in"
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="lg:col-span-4">
                <h3 className="type-title">{position.role}</h3>
                <p className="type-body mt-2.5 text-muted-strong">
                  {position.company}
                </p>
                <p className="type-mono mt-2 text-muted-dim">
                  {position.period}
                </p>
              </div>

              <ul className="flex max-w-[68ch] flex-col gap-3 lg:col-span-8">
                {position.items.map((item) => (
                  <li
                    key={item}
                    className="type-body flex gap-3.5 text-muted-foreground"
                  >
                    {/* O travessão é a marca da lista: em Signal Red sobre a
                        rua, onde o vermelho mede 5,1:1 e pode ser texto. */}
                    <span aria-hidden="true" className="text-primary">
                      —
                    </span>
                    <span className="[text-wrap:pretty]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* A formação não é cargo: sai do registro e vira par de painéis. */}
        <div ref={education.ref} className="mt-14 grid gap-5 sm:grid-cols-2">
          {studies.map((study, index) => (
            <div
              key={study.title}
              className={cn(
                "reveal pane pane-interactive p-7",
                education.inView && "is-in"
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <p className="type-mono text-muted-dim">{study.period}</p>
              <h3 className="mt-3 text-xl font-semibold">{study.title}</h3>
              <p className="type-body-sm mt-3 text-muted-foreground">
                {study.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
