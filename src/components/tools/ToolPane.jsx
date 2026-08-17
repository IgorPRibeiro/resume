import { useEffect, useState } from "react";
import { Check, Copy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

/**
 * Copia para a área de transferência, com uma saída pelo caminho antigo.
 *
 * A Clipboard API só existe em contexto seguro: aberto por IP na rede local
 * para testar no celular — que é exatamente o uso desta página — o objeto
 * some, e sem o `execCommand` o botão viraria enfeite justamente ali.
 */
async function writeToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Cai para o caminho antigo em vez de desistir.
    }
  }

  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.top = "0";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }

  document.body.removeChild(field);
  return copied;
}

/**
 * O painel de uma ferramenta: título, valor gerado, opções e as duas ações.
 *
 * A montagem é a mesma nas três ferramentas de propósito — o que muda entre
 * elas é o cálculo e o conjunto de opções, não o desenho. Três painéis com
 * layouts diferentes fariam a página parecer três páginas.
 */
const ToolPane = ({ title, description, value, meta, onGenerate, children }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  // O aviso de cópia se apaga sozinho: é confirmação, não estado.
  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    if (!value) return;
    if (await writeToClipboard(value)) setCopied(true);
  };

  return (
    <article className="pane flex flex-col p-7 lg:p-8">
      <h3 className="type-title">{title}</h3>
      <p className="type-body-sm measure mt-2.5 text-muted-strong">
        {description}
      </p>

      {/* O valor gerado: campo de leitura sobre Void, com a cópia ancorada
          à direita. `output` já é uma região viva para o leitor de tela, então
          cada novo sorteio é anunciado sem `aria-live` explícito. */}
      <div className="mt-7 flex items-stretch gap-2">
        <output
          className={cn(
            "type-data flex min-h-12 flex-1 items-center rounded-md border border-input bg-background px-4 py-3",
            !value && "text-muted-dim"
          )}
        >
          {value || "—"}
        </output>

        <Button
          type="button"
          variant="outline"
          size="pane-icon"
          onClick={handleCopy}
          disabled={!value}
          aria-label={copied ? t("tools.copied") : t("tools.copy")}
          className="h-auto self-stretch border-input"
        >
          {copied ? (
            <Check aria-hidden="true" className="text-primary" />
          ) : (
            <Copy aria-hidden="true" />
          )}
        </Button>
      </div>

      {/* A confirmação em texto, e não só no ícone: trocar um desenho por
          outro não é feedback para quem não distingue os dois. */}
      <p
        className={cn(
          "type-micro mt-2 h-4 text-muted-dim transition-opacity duration-200",
          copied ? "opacity-100" : "opacity-0"
        )}
      >
        {t("tools.copied")}
      </p>

      {children ? <div className="mt-6 flex flex-col gap-5">{children}</div> : null}

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        {/* Sem botão vermelho: o acento da página já está no filete do
            título, e três painéis com botão primário fariam três letreiros. */}
        <Button
          type="button"
          variant="outline"
          size="pane"
          onClick={onGenerate}
          className="border-input"
        >
          <RefreshCw aria-hidden="true" />
          {t("tools.generate")}
        </Button>

        {meta ? <p className="type-micro text-muted-dim">{meta}</p> : null}
      </div>
    </article>
  );
};

export default ToolPane;
