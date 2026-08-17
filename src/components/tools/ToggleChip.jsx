import { cn } from "@/lib/utils";

/**
 * Ficha de opção: a mesma pílula do sistema, agora com estado ligado.
 *
 * O estado aceso é uma lavagem de vermelho a 16% com a aresta a 40%, e não
 * um preenchimento cheio — é o mesmo tratamento do par de idioma no
 * cabeçalho, e é o que permite ter seis opções ligadas num painel sem que
 * nenhuma delas dispute com o letreiro da página.
 */
const ToggleChip = ({ pressed, onClick, disabled, children }) => (
  <button
    type="button"
    aria-pressed={pressed}
    disabled={disabled}
    onClick={onClick}
    className={cn(
      "type-micro rounded-full border px-3.5 py-2 font-medium",
      "transition-colors duration-200 ease-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed disabled:opacity-50",
      pressed
        ? "border-primary/40 bg-primary/[0.16] text-foreground"
        : "border-white/[0.12] text-muted-foreground hover:border-white/25 hover:text-foreground"
    )}
  >
    {children}
  </button>
);

export default ToggleChip;
