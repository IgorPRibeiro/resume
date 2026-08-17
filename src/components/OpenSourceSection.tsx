import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/use-in-view";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const GITHUB_PROFILE = "https://github.com/IgorPRibeiro?tab=repositories";

const OpenSourceSection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView<HTMLDivElement>(0.05);

  const repositories = [
    {
      name: "react-native-local-OTA",
      href: "https://github.com/IgorPRibeiro/react-native-local-OTA",
      description: t("opensource.ota.description"),
      tags: ["React Native", "OTA"],
    },
    {
      name: "JWT-ClientSecret-generator",
      href: "https://github.com/IgorPRibeiro/JWT-ClientSecret-generator",
      description: t("opensource.jwt.description"),
      tags: ["Swift", "macOS", "JWT"],
    },
    {
      name: "AnimationOverlay",
      href: "https://github.com/IgorPRibeiro/AnimationOverlay",
      description: t("opensource.overlay.description"),
      tags: ["Skia", "Reanimated"],
    },
    {
      name: "IpAndHost",
      href: "https://github.com/IgorPRibeiro/IpAndHost",
      description: t("opensource.iphost.description"),
      tags: ["CLI", "Go"],
    },
    {
      name: "CoinsWeb",
      href: "https://github.com/IgorPRibeiro/CoinsWeb",
      description: t("opensource.coins.description"),
      tags: ["Web", "Full-stack"],
    },
    {
      name: "pusher-websocket-react-native",
      href: "https://github.com/IgorPRibeiro/pusher-websocket-react-native",
      description: t("opensource.pusher.description"),
      tags: ["Open source", "WebSocket"],
    },
  ];

  return (
    <section id="opensource" className="section">
      <div className="container">
        {/* O título divide a linha com a saída para o GitHub: quem já se
            convenceu não precisa ler os seis cards para chegar lá. */}
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <SectionTitle className="mb-0">{t("opensource.title")}</SectionTitle>

          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="type-label border-b border-white/20 pb-1 text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t("opensource.all")}
          </a>
        </div>

        <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repository, index) => (
            <a
              key={repository.name}
              href={repository.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "reveal pane pane-interactive flex flex-col p-7",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                inView && "is-in"
              )}
              style={{ transitionDelay: `${Math.min(index, 6) * 80}ms` }}
            >
              <div className="flex items-center justify-between gap-4">
                {/* Nome de repositório é endereço, não título: vai na voz
                    monoespaçada, como se lê no terminal. */}
                <h3 className="font-mono text-base font-medium">
                  {repository.name}
                </h3>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-[18px] w-[18px] shrink-0 text-primary"
                />
              </div>

              <p className="type-body-sm mb-6 mt-3.5 flex-1 text-muted-foreground">
                {repository.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {repository.tags.map((tag) => (
                  <li key={tag}>
                    <span className="chip chip-caps">{tag}</span>
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
