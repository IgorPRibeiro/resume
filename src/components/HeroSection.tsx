import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stack = [
  "React Native",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Kotlin",
  "Swift",
  "Flutter",
  "Java",
];

const HeroSection = () => {
  const { t } = useLanguage();

  const process = [
    t("hero.process.step1"),
    t("hero.process.step2"),
    t("hero.process.step3"),
  ];

  const stats = [
    { value: t("hero.stat.years.value"), label: t("hero.stat.years.label") },
    {
      value: t("hero.stat.platforms.value"),
      label: t("hero.stat.platforms.label"),
    },
    { value: t("hero.stat.remote.value"), label: t("hero.stat.remote.label") },
  ];

  return (
    <section id="top" className="pb-24 pt-[136px] lg:pb-24 lg:pt-[168px]">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* O letreiro */}
          <div className="lg:col-span-7">
            <p className="type-label animate-pane-rise mb-5 inline-flex items-center gap-2.5 tracking-[0.12em] text-primary">
              <span
                aria-hidden="true"
                className="inline-block h-[7px] w-[7px] rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.18)]"
              />
              {t("hero.available")}
            </p>

            <h1 className="type-display animate-pane-rise">
              Igor P. Ribeiro
              <span className="type-display-sub mt-3.5 block text-muted-foreground">
                {t("hero.title")}
              </span>
            </h1>

            <p
              className="type-body animate-pane-rise mt-8 max-w-[58ch] text-muted-foreground"
              style={{ animationDelay: "120ms" }}
            >
              {t("hero.description")}
            </p>

            <div
              className="animate-pane-rise mt-10 flex flex-wrap gap-3.5"
              style={{ animationDelay: "220ms" }}
            >
              <Button
                asChild
                size="pane"
                className="transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-accent-bloom"
              >
                <a href="#contact">{t("hero.cta")}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="pane"
                className="transition-[transform,border-color,background-color] duration-200 hover:-translate-y-[3px]"
              >
                <a href="#portfolio">{t("hero.cta.secondary")}</a>
              </Button>
            </div>

            {/* Os três números: o resumo do currículo antes do currículo. */}
            <dl
              className="animate-pane-rise mt-16 grid gap-6 border-t border-white/[0.08] pt-9 sm:grid-cols-3"
              style={{ animationDelay: "300ms" }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="m-0">
                    <p className="type-stat">
                      {stat.value}
                    </p>
                    <p className="type-label mt-1.5 text-muted-dim">
                      {stat.label}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* A coluna de apoio: como eu trabalho, com o que, e o atalho para as
              ferramentas. Três painéis, do processo ao convite. */}
          <div
            className="animate-pane-rise flex flex-col gap-4 lg:col-span-5"
            style={{ animationDelay: "160ms" }}
          >
            <div className="pane pane-interactive p-7">
              <p className="type-label mb-5 text-muted-dim">
                {t("hero.process.title")}
              </p>
              <ol className="flex flex-col gap-3.5">
                {process.map((step, index) => (
                  <li key={step} className="flex items-baseline gap-3.5">
                    {/* Ordinal decorativo: a ordem já está na lista, então ele
                        não precisa ser lido em voz alta — e é por ser
                        decorativo que pode ficar em vermelho miúdo. */}
                    <span
                      aria-hidden="true"
                      className="type-mono text-primary"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="type-body-sm text-muted-strong">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="pane pane-interactive p-7">
              <p className="type-label mb-[18px] text-muted-dim">
                {t("hero.stack.title")}
              </p>
              <ul className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <li key={item}>
                    <span className="chip chip-interactive">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* O único painel vermelho em repouso da página — e por isso o
                único que pode ganhar o halo do mesmo vermelho. */}
            <a
              href="/ferramentas"
              className="pane-interactive flex items-center justify-between gap-5 rounded-pane border border-primary/[0.28] bg-primary/[0.08] px-7 py-6 hover:border-primary/50 hover:bg-primary/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>
                <span className="block text-base font-semibold">
                  {t("hero.tools.title")}
                </span>
                <span className="type-fine mt-1.5 block text-muted-foreground">
                  {t("hero.tools.description")}
                </span>
              </span>
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-primary"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
