import { useLanguage } from "@/context/LanguageContext";

import i from "@/assets/images/i.png";
const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section bg-secondary/20 py-16 md:py-24">
      <div className="container">
        <h2 className="section-title">{t("about.title")}</h2>

        <div className="flex flex-col md:flex-row items-center gap-10 mt-16">
          <div className="md:w-1/3">
            <div className="rounded-md overflow-hidden">
              <img src={i} alt="About me" className="w-full h-auto" />
            </div>
          </div>

          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed">{t("about.description")}</p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="text-highlight font-medium">Email</h4>
                <p>iguprcarrer@gmail.com</p>
              </div>
              <div>
                <h4 className="text-highlight font-medium">Location</h4>
                <p>Espírito Santo, Brazil</p>
              </div>
              <div>
                <h4 className="text-highlight font-medium">Study</h4>
                <p>Multivix</p>
              </div>
              <div>
                <h4 className="text-highlight font-medium">Employment</h4>
                <p>Globalsys Soluções em T.I</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
