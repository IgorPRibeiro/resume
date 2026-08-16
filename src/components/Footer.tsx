import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const links = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/IgorPRibeiro?tab=repositories",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/igorpr1202/",
    },
  ];

  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="type-fine text-muted-foreground text-center sm:text-left">
          &copy; {currentYear} Igor P. Ribeiro {t("footer.rights")}.
        </p>

        <div className="flex items-center gap-2">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
