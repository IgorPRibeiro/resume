import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Âncoras de verdade, não botões: o teclado, o meio do mouse e o histórico
  // do navegador esperam um link quando o destino é uma seção da própria
  // página. O recorte sob o cabeçalho fixo é do `scroll-padding-top`.
  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.tools"), href: "/ferramentas", accent: true },
    { label: t("nav.portfolio"), href: "#portfolio" },
  ];

  // O seletor de idioma é um par segmentado, não um menu: são duas opções e
  // o estado atual precisa ser legível sem abrir nada.
  const languageToggle = (
    <div
      className="inline-flex flex-none items-center gap-0.5 rounded-full border border-white/[0.14] p-[3px]"
      role="group"
      aria-label={language === "pt" ? "Idioma" : "Language"}
    >
      {(["pt", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={cn(
            "type-micro rounded-full px-3 py-[7px] font-semibold uppercase tracking-[0.08em]",
            "transition-colors duration-200 ease-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            language === code
              ? "bg-primary/[0.16] text-foreground"
              : "text-muted-dim hover:bg-white/[0.06] hover:text-foreground"
          )}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header className="fixed left-0 top-0 z-50 h-[72px] w-full border-b border-white/[0.07] bg-background/[0.72] backdrop-blur-[14px]">
      <div className="container flex h-full items-center justify-between gap-6">
        <a
          href="#top"
          className="type-title whitespace-nowrap rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Igor P. Ribeiro
        </a>

        {/* Navegação em etiqueta — recua para Ash, acende em Bone */}
        <nav className="hidden min-w-0 items-center gap-[clamp(10px,1.5vw,26px)] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "type-label whitespace-nowrap rounded-sm transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                item.accent
                  ? "text-primary hover:text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}

          {languageToggle}

          <a
            href="#contact"
            className="type-label flex-none whitespace-nowrap rounded-full border border-white/[0.16] px-4 py-2.5 text-foreground transition-[border-color,background-color,box-shadow] duration-200 hover:border-primary/60 hover:bg-primary/10 hover:shadow-accent-bloom focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t("hero.cta")}
          </a>
        </nav>

        {/* Barra reduzida */}
        <div className="flex items-center gap-2 lg:hidden">
          {languageToggle}

          <Button
            variant="ghost"
            size="pane-icon"
            onClick={() => setMobileMenuOpen((open) => !open)}
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

      {/* Menu de tela cheia: mesmos itens, mesma ordem, mesmo texto */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="animate-fade-in fixed inset-0 top-[72px] z-40 bg-background lg:hidden"
        >
          <nav className="container flex h-full flex-col items-center justify-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={cn(
                  "type-display-sub rounded-sm transition-colors duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  item.accent
                    ? "text-primary hover:text-foreground"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="type-label rounded-full border border-white/[0.16] px-6 py-3.5 text-foreground transition-[border-color,background-color] duration-200 hover:border-primary/60 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t("hero.cta")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
