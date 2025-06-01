import { useLanguage } from "@/context/LanguageContext";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground mt-2">
              &copy; {currentYear} Igor P. Ribeiro {t("footer.rights")}.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
