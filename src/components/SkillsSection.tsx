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
                "reveal group pane pane-interactive flex flex-col items-center p-8",
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
      </div>
    </section>
  );
};

export default SkillsSection;
