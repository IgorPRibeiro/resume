import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import i from "@/assets/images/i-portrait.webp";

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Com o menu de tela cheia aberto, a rua atrás dele não rola — e Esc fecha.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  const navItems = [
    { label: t("nav.about"), section: "about" },
    { label: t("nav.skills"), section: "skills" },
    { label: t("nav.services"), section: "services" },
    { label: t("nav.portfolio"), section: "portfolio" },
    { label: t("nav.contact"), section: "contact" },
  ];

  const languageMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="pane-icon"
          aria-label={language === "pt" ? "Mudar idioma" : "Change language"}
        >
          <Globe className="h-[18px] w-[18px]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={language === "en" ? "bg-muted" : ""}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("pt")}
          className={language === "pt" ? "bg-muted" : ""}
        >
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="fixed top-0 left-0 w-full h-[72px] bg-background/90 backdrop-blur-sm z-50 border-b border-border">
      <div className="container h-full flex justify-between items-center">
        {/* Nome e retrato */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-muted overflow-hidden shrink-0">
            <img src={i} alt="" className="h-full w-full object-cover" />
          </div>
          <span className="type-title">Igor P. Ribeiro</span>
        </div>

        {/* Navegação em etiqueta — recua para Ash, acende em Bone */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className="type-label text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              {item.label}
            </button>
          ))}

          {languageMenu}
        </nav>

        {/* Barra reduzida */}
        <div className="flex lg:hidden items-center gap-2">
          {languageMenu}

          <Button
            variant="ghost"
            size="pane-icon"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={
              mobileMenuOpen
                ? language === "pt"
                  ? "Fechar menu"
                  : "Close menu"
                : language === "pt"
                ? "Abrir menu"
                : "Open menu"
            }
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Menu de tela cheia: mesmos itens, mesma ordem */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-0 top-[72px] bg-background z-40 animate-fade-in"
        >
          <nav className="container flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="type-display-sub text-foreground hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
