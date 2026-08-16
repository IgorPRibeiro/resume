import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center">
      <div className="container py-20">
        <div className="max-w-2xl">
          {/* A vitrine com a luz apagada: o número é a etiqueta, não o letreiro. */}
          <p className="type-label text-muted-foreground">
            {t("notFound.code")}
          </p>

          <h1 className="mt-6 type-display">{t("notFound.title")}</h1>

          <p className="mt-8 type-body text-muted-foreground measure">
            {t("notFound.description")}
          </p>

          <div className="mt-10">
            <Button
              asChild
              size="pane"
              className="transition-[background-color,box-shadow] duration-200 hover:shadow-accent-bloom"
            >
              <Link to="/">{t("notFound.cta")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
