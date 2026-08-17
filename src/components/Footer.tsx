import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const links = [
    {
      label: "GitHub",
      href: "https://github.com/IgorPRibeiro?tab=repositories",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/igorpr1202/",
    },
  ];

  return (
    <footer className="relative z-10 border-t border-white/[0.08] py-10">
      <div className="container flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="type-fine text-center text-muted-dim sm:text-left">
          &copy; {currentYear} Igor P. Ribeiro {t("footer.rights")}.
        </p>

        {/* Etiquetas, não ícones: no rodapé o alvo é o nome do lugar, e um
            glifo de 20px sem rótulo é a pior isca de toda a página. */}
        <div className="flex items-center gap-5">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label rounded-sm text-muted-dim transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
