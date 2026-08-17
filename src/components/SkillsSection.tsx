import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import SectionTitle from "@/components/SectionTitle";

import rnIcon from "@/assets/icons/rnIcon.png";
import node from "@/assets/icons/node.png";
import android from "@/assets/icons/android.png";
import iphone from "@/assets/icons/iphone.png";
import next from "@/assets/icons/next.png";
import ts from "@/assets/icons/ts.png";
import java from "@/assets/icons/java.svg";
import golang from "@/assets/icons/golang.png";

const skills = [
  { name: "React Native + Expo", icon: rnIcon },
  { name: "Android", icon: android },
  { name: "IOS", icon: iphone },
  { name: "Next.js", icon: next },
  { name: "Node.js", icon: node },
  { name: "TypeScript", icon: ts },
  { name: "Java", icon: java },
  { name: "Go Lang", icon: golang },
];

const SkillsSection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const summary = useInView<HTMLDivElement>(0.2);

  // O que a grade de ícones não diz: a lista completa, em três colunas de
  // leitura. A grade é reconhecimento, isto aqui é inventário.
  const groups = [
    { title: t("skills.languages.title"), value: t("skills.languages.value") },
    { title: t("skills.tech.title"), value: t("skills.tech.value") },
    {
      title: t("skills.specialties.title"),
      value: t("skills.specialties.value"),
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle>{t("skills.title")}</SectionTitle>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "reveal group pane pane-interactive rounded-tile flex flex-col items-center px-5 py-8",
                inView && "is-in"
              )}
              style={{ transitionDelay: `${Math.min(index, 7) * 60}ms` }}
            >
              {/* Cinza em repouso: só as capturas dos apps são saturadas.
                  A cor é a recompensa do hover. */}
              <img
                src={skill.icon}
                alt=""
                loading="lazy"
                className="h-10 w-auto mb-5 grayscale opacity-70 transition-[filter,opacity] duration-300 ease-out group-hover:grayscale-0 group-hover:opacity-100"
              />
              <h3 className="type-label text-center">{skill.name}</h3>
            </div>
          ))}
        </div>

        <div
          ref={summary.ref}
          className={cn(
            "reveal mt-10 grid gap-8 border-t border-white/[0.08] pt-10 lg:grid-cols-3",
            summary.inView && "is-in"
          )}
        >
          {groups.map((group) => (
            <div key={group.title}>
              <p className="type-label mb-3.5 text-muted-dim">{group.title}</p>
              <p className="type-body text-muted-strong">{group.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
