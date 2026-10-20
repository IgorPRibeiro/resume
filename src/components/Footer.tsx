import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
export default function Footer() {
  const { t } = useLanguage();
  return <footer className="editorial-footer">
    <div className="editorial-footer-cta"><h2>{t("ed.cta")}</h2><div><p>{t("ed.ctabody")}</p><Link className="ed-button orange" to="/contact">{t("ed.contact")}<ArrowUpRight size={18} aria-hidden="true" /></Link></div></div>
    <div className="editorial-footer-links"><nav aria-label={t("ed.links")}><Link to="/work">{t("ed.projects")}</Link><Link to="/about">{t("nav.about")}</Link><Link to="/process">{t("ed.process")}</Link></nav><div><a href="mailto:iguprcarrer@gmail.com">iguprcarrer@gmail.com</a><a href="tel:+5527995162238">+55 27 99516-2238</a></div><div><a href="https://github.com/IgorPRibeiro" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a><a href="https://www.linkedin.com/in/igorpr1202/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a></div></div>
    <p className="editorial-footer-wordmark" aria-hidden="true">RIBEIRO.</p>
    <div className="editorial-colophon"><span>© {new Date().getFullYear()} IGOR P. RIBEIRO</span><span>{t("ed.location")}</span><span>{t("ed.remote")}</span></div>
  </footer>;
}
