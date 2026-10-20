import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
export default function NotFound() {
  const { t } = useLanguage();
  return <div className="editorial-shell"><Header /><main id="content"><div className="ed-page-heading"><h1>404</h1><div><h2>{t("notFound.title")}</h2><p>{t("notFound.description")}</p><Link className="ed-button orange" to="/">{t("notFound.cta")}<ArrowUpRight size={18} aria-hidden="true" /></Link></div></div></main><Footer /></div>;
}
