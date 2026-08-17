import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/use-in-view";
import { Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const ContactSection = () => {
  const { t } = useLanguage();
  const invitation = useInView<HTMLDivElement>(0.2);
  const channels = useInView<HTMLDivElement>(0.15);

  const rows = [
    {
      label: t("contact.email"),
      value: "iguprcarrer@gmail.com",
      href: "mailto:iguprcarrer@gmail.com",
    },
    {
      label: t("contact.phone"),
      value: "+55 27 99516-2238",
      href: "tel:+5527995162238",
    },
    {
      label: t("contact.workModel"),
      value: t("contact.workModel.value"),
      href: null,
    },
  ];

  return (
    <section id="contact" className="section pb-32">
      <div className="container">
        <SectionTitle>{t("contact.title")}</SectionTitle>

        <div className="grid gap-14 lg:grid-cols-12">
          <div
            ref={invitation.ref}
            className={cn(
              "reveal lg:col-span-5",
              invitation.inView && "is-in"
            )}
          >
            <p className="type-body max-w-[46ch]">{t("contact.description")}</p>

            <div className="mt-10 flex flex-wrap gap-3.5">
              <Button
                asChild
                variant="outline"
                size="pane"
                className="rounded-full transition-[transform,border-color,background-color] duration-200 hover:-translate-y-[3px] hover:border-primary/55 hover:bg-primary/10"
              >
                <a
                  href="https://www.linkedin.com/in/igorpr1202/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin aria-hidden="true" /> LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="pane"
                className="rounded-full transition-[transform,border-color,background-color] duration-200 hover:-translate-y-[3px] hover:border-primary/55 hover:bg-primary/10"
              >
                <a
                  href="https://github.com/IgorPRibeiro?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github aria-hidden="true" /> GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Os canais como registro: etiqueta acima, valor abaixo. Os ícones
              saíram — o rótulo já diz o que cada linha é, e três ícones
              genéricos só repetiam a informação em desenho. */}
          <div
            ref={channels.ref}
            className={cn(
              "reveal border-t border-white/[0.08] lg:col-span-7",
              channels.inView && "is-in"
            )}
          >
            {rows.map(({ label, value, href }) => {
              const content = (
                <>
                  <p className="type-label text-muted-dim">{label}</p>
                  <p className="type-body mt-2 break-words">{value}</p>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="row-slide block py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="row-rule px-2 py-6">
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
