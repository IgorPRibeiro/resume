import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/use-in-view";
import SectionTitle from "@/components/SectionTitle";

const AboutSection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  const facts = [
    { label: t("about.fact.email"), value: "iguprcarrer@gmail.com" },
    { label: t("about.fact.base"), value: t("about.fact.base.value") },
    {
      label: t("about.fact.education"),
      value: t("about.fact.education.value"),
    },
    {
      label: t("about.fact.languages"),
      value: t("about.fact.languages.value"),
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle>{t("about.title")}</SectionTitle>

        <div
          ref={ref}
          className={cn("reveal max-w-[980px]", inView && "is-in")}
        >
          <p className="type-body max-w-[68ch]">{t("about.p1")}</p>
          <p className="type-body mt-5 max-w-[68ch] text-muted-foreground">
            {t("about.p2")}
          </p>

          <dl className="mt-12 grid gap-x-8 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="row-rule py-5">
                <dt className="type-label text-muted-dim">{fact.label}</dt>
                <dd className="type-body mt-2 break-words">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
