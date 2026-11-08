import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "@/components/editorial.css";
import AmbientBackground from "@/components/AmbientBackground";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 851px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    const background = [...document.querySelectorAll<HTMLElement>("main, footer")];
    const previousInert = background.map(node => node.inert);
    background.forEach(node => { node.inert = true; });
    document.querySelector<HTMLElement>(".editorial-nav a")?.focus();
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); menuRef.current?.focus(); } };
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = previous; background.forEach((node, index) => { node.inert = previousInert[index]; }); window.removeEventListener("keydown", close); };
  }, [open]);
  const links = [["/work", "ed.projects"], ["/about", "nav.about"], ["/services", "ed.services"], ["/process", "ed.process"], ["/ferramentas", "nav.tools"]];
  return <><AmbientBackground /><header className="editorial-header">
    <Link className="editorial-brand" to="/" aria-label="Igor P. Ribeiro">IPR<span aria-hidden="true">.</span></Link>
    <nav className={open ? "editorial-nav is-open" : "editorial-nav"} aria-label={t("ed.menu")} id="editorial-navigation">
      {links.map(([href, key]) => <NavLink key={href} to={href}>{t(key)}</NavLink>)}
      <NavLink to="/contact" className="nav-contact">{t("ed.contact")}<ArrowUpRight size={15} aria-hidden="true" /></NavLink>
    </nav>
    <div className="editorial-languages" role="group" aria-label={t("ed.languages")}>
      {(["pt", "en"] as const).map(code => <button key={code} onClick={() => setLanguage(code)} aria-pressed={language === code}>{code}</button>)}
    </div>
    <button ref={menuRef} className="editorial-menu" aria-expanded={open} aria-controls="editorial-navigation" aria-label={t(open ? "ed.close" : "ed.menu")} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header></>;
}
