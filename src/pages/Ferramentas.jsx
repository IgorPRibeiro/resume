import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AmbientBackground from "@/components/AmbientBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import CpfTool from "@/components/tools/CpfTool";
import CnpjTool from "@/components/tools/CnpjTool";
import PasswordTool from "@/components/tools/PasswordTool";

/**
 * A página de ferramentas: a mesma rua, a mesma vitrine, outro conteúdo
 * atrás do vidro. Um painel só — as três ferramentas são peças de uma
 * montagem, não três painéis disputando o campo de visão.
 */
const Ferramentas = () => {
  const { t, language } = useLanguage();

  // O título da aba é parte da tela. Sem isto a rota se anuncia no histórico
  // e na barra de abas com o nome da página inicial.
  useEffect(() => {
    const previous = document.title;
    document.title = `${t("tools.title")} · Igor P. Ribeiro`;
    return () => {
      document.title = previous;
    };
  }, [language]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <a
        href="#content"
        className="type-label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-5 focus:py-3 focus:text-primary-foreground focus:shadow-accent-bloom"
      >
        {t("a11y.skip")}
      </a>

      <AmbientBackground />
      <Header />

      <main id="content" className="relative z-10">
        {/* O cabeçalho fixo tem 72px: o primeiro painel compensa no topo. */}
        <section className="section pt-32 lg:pt-40">
          <div className="container">
            <Link
              to="/"
              className="type-label inline-flex items-center gap-2 rounded-sm text-muted-dim transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              {t("tools.back")}
            </Link>

            <SectionTitle className="mt-8">{t("tools.title")}</SectionTitle>

            <p className="type-body measure text-muted-foreground">
              {t("tools.description")}
            </p>
            <p className="type-fine measure mt-4 text-muted-dim">
              {t("tools.privacy")}
            </p>

            {/* CPF e CNPJ dividem a linha porque têm a mesma forma; a senha
                ocupa a largura inteira porque carrega três grupos de opção e
                um valor que pode passar de 60 caracteres. */}
            <div className="mt-16 grid gap-5 lg:grid-cols-2">
              <CpfTool />
              <CnpjTool />
              <div className="lg:col-span-2">
                <PasswordTool />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ferramentas;
