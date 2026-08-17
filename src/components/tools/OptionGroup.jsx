/**
 * Um grupo de opções dentro de um painel de ferramenta: etiqueta em caixa
 * alta acima, controles abaixo. Nunca placeholder no lugar de rótulo — o
 * que vale para campo vale para grupo de fichas.
 */
const OptionGroup = ({ label, children }) => (
  <div>
    <p className="type-label mb-3 text-muted-dim">{label}</p>
    <div className="flex flex-wrap items-center gap-2">{children}</div>
  </div>
);

export default OptionGroup;
