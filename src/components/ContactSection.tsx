import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section bg-secondary/20 py-16 md:py-24">
      <div className="container">
        <h2 className="section-title">{t("contact.title")}</h2>

        <div className="flex flex-col items-center mt-16 space-y-10">
          <p className="text-lg text-center max-w-2xl mx-auto mb-8">
            {t("contact.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-4xl mx-auto">
            <a
              href="mailto:iguprcarrer@gmail.com"
              className="flex items-center space-x-4 group"
            >
              <div className="p-4 bg-secondary rounded-full group-hover:bg-highlight/20 transition-colors">
                <Mail className="h-6 w-6 text-highlight" />
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground">
                  {t("contact.email")}
                </h4>
                <p className="font-medium">iguprcarrer@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+551198765-4321"
              className="flex items-center space-x-4 group"
            >
              <div className="p-4 bg-secondary rounded-full group-hover:bg-highlight/20 transition-colors">
                <Phone className="h-6 w-6 text-highlight" />
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground">
                  {t("contact.phone")}
                </h4>
                <p className="font-medium">+55 27 99516-2238</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-secondary rounded-full">
                <MapPin className="h-6 w-6 text-highlight" />
              </div>
              <div>
                <h4 className="text-sm text-muted-foreground">
                  {t("contact.address")}
                </h4>
                <p className="font-medium">Vila Velha, ES, Brasil</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-highlight"
            >
              <a
                href="https://www.linkedin.com/in/igorpr1202/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2" /> LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-highlight"
            >
              <a
                href="https://github.com/IgorPRibeiro?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
