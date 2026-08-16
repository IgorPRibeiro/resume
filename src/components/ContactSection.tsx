import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const ContactSection = () => {
  const { t } = useLanguage();

  const channels = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "iguprcarrer@gmail.com",
      href: "mailto:iguprcarrer@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+55 27 99516-2238",
      href: "tel:+5527995162238",
    },
    {
      icon: MapPin,
      label: t("contact.address"),
      value: "Vila Velha, ES, Brasil",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section bg-secondary/20">
      <div className="container">
        <SectionTitle>{t("contact.title")}</SectionTitle>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="type-body measure">{t("contact.description")}</p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Button
                asChild
                variant="outline"
                size="pane"
                className="rounded-full"
              >
                <a
                  href="https://www.linkedin.com/in/igorpr1202/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-1" /> LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="pane"
                className="rounded-full"
              >
                <a
                  href="https://github.com/IgorPRibeiro?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-1" /> GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Os canais como registro: etiqueta acima, valor abaixo. */}
          <div className="lg:col-span-7 lg:col-start-6 border-t border-border">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <Icon className="h-5 w-5 mt-1 shrink-0 text-muted-foreground transition-colors duration-300 ease-out group-hover:text-foreground" />
                  <div className="min-w-0">
                    <p className="type-label text-muted-foreground">{label}</p>
                    <p className="mt-2 type-body break-words">{value}</p>
                  </div>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="row-rule group flex items-start gap-4 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="row-rule group flex items-start gap-4 py-6"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
