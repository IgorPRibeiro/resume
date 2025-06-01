import { useLanguage } from "@/context/LanguageContext";

import rnIcon from "@/assets/icons/rnIcon.png";
import node from "@/assets/icons/node.png";
import android from "@/assets/icons/android.png";
import iphone from "@/assets/icons/iphone.png";
import next from "@/assets/icons/next.png";
import ts from "@/assets/icons/ts.png";
import java from "@/assets/icons/java.svg";
import golang from "@/assets/icons/golang.png";

const SkillItem = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center bg-secondary p-6 rounded-lg card-hover">
      <div className="h-10 w-auto mb-4">
        <img src={icon} className="w-auto h-10" />
      </div>
      <h3 className="font-medium">{name}</h3>
    </div>
  );
};

const SkillsSection = () => {
  const { t } = useLanguage();

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

  return (
    <section id="skills" className="section py-16 md:py-24">
      <div className="container">
        <h2 className="section-title">{t("skills.title")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-16">
          {skills.map((skill, index) => (
            <SkillItem key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
