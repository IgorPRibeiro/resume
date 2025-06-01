import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import i from "@/assets/images/i.png";
const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

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

  return (
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm z-50 border-b border-border py-4">
      <div className="container flex justify-between items-center">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
            <img src={i} alt="Profile" className="h-full w-full object-cover" />
          </div>
          <h2 className="text-xl font-bold ">Igor P. Ribeiro</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.section)}
              className="text-foreground hover:text-highlight transition-colors"
            >
              {item.label}
            </button>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-4 w-4" />
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
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-4 w-4" />
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

          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in">
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className="text-xl font-medium text-foreground hover:text-highlight transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
