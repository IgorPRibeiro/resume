import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { generateCPF, formatCPF } from "@/lib/generators";
import ToolPane from "./ToolPane";
import OptionGroup from "./OptionGroup";
import ToggleChip from "./ToggleChip";

/**
 * Gerador de CPF.
 *
 * A pontuação é decisão de exibição, não de sorteio: alternar a máscara não
 * troca o documento, só a forma de escrevê-lo. Quem está colando num campo
 * que recusa ponto precisa do mesmo CPF que acabou de conferir na tela.
 */
const CpfTool = () => {
  const { t } = useLanguage();
  const [raw, setRaw] = useState(generateCPF);
  const [masked, setMasked] = useState(true);

  return (
    <ToolPane
      title={t("tools.cpf.title")}
      description={t("tools.cpf.description")}
      value={masked ? formatCPF(raw) : raw}
      onGenerate={() => setRaw(generateCPF())}
    >
      <OptionGroup label={t("tools.format")}>
        <ToggleChip pressed={masked} onClick={() => setMasked(true)}>
          {t("tools.format.masked")}
        </ToggleChip>
        <ToggleChip pressed={!masked} onClick={() => setMasked(false)}>
          {t("tools.format.plain")}
        </ToggleChip>
      </OptionGroup>
    </ToolPane>
  );
};

export default CpfTool;
