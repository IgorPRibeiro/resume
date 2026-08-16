import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/SectionTitle";

import i from "@/assets/images/i-portrait.webp";

const AboutSection = () => {
  const { t } = useLanguage();

  const facts = [
    { label: "Email", value: "iguprcarrer@gmail.com" },
    { label: "Location", value: "Espírito Santo, Brazil" },
    { label: "Study", value: "Multivix" },
    { label: "Employment", value: "Globalsys Soluções em T.I" },
  ];

  return (
    <section id="about" className="section bg-secondary/20">
      <div className="container">
        <SectionTitle>{t("about.title")}</SectionTitle>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-start">
          <div className="lg:col-span-5">
            <div className="pane overflow-hidden">
              <img
                src={i}
                alt="Igor P. Ribeiro"
                loading="lazy"
                width={1200}
                height={802}
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="type-body measure">{t("about.description")}</p>

            <dl className="mt-12 grid sm:grid-cols-2 gap-x-8">
              {facts.map((fact) => (
                <div key={fact.label} className="row-rule py-5">
                  <dt className="type-label text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 type-body break-words">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
