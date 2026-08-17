import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { generateCNPJ, formatCNPJ } from "@/lib/generators";
import ToolPane from "./ToolPane";
import OptionGroup from "./OptionGroup";
import ToggleChip from "./ToggleChip";

/**
 * Gerador de CNPJ no formato alfanumérico da IN RFB 2.229/2024.
 *
 * O formato antigo continua no ar ao lado do novo, e é por isso que ele fica
 * como opção em vez de sair: um sistema que só recebeu CNPJ numérico até
 * hoje precisa ser testado com os dois para se descobrir onde ele quebra.
 */
const CnpjTool = () => {
  const { t } = useLanguage();
  const [alphanumeric, setAlphanumeric] = useState(true);
  const [raw, setRaw] = useState(() => generateCNPJ({ alphanumeric: true }));
  const [masked, setMasked] = useState(true);

  // Trocar o formato sorteia de novo: manter na tela um CNPJ numérico com o
  // seletor marcado em alfanumérico seria mostrar uma coisa e dizer outra.
  const switchFormat = (next) => {
    setAlphanumeric(next);
    setRaw(generateCNPJ({ alphanumeric: next }));
  };

  return (
    <ToolPane
      title={t("tools.cnpj.title")}
      description={t("tools.cnpj.description")}
      value={masked ? formatCNPJ(raw) : raw}
      onGenerate={() => setRaw(generateCNPJ({ alphanumeric }))}
    >
      <OptionGroup label={t("tools.cnpj.standard")}>
        <ToggleChip pressed={alphanumeric} onClick={() => switchFormat(true)}>
          {t("tools.cnpj.alphanumeric")}
        </ToggleChip>
        <ToggleChip pressed={!alphanumeric} onClick={() => switchFormat(false)}>
          {t("tools.cnpj.numeric")}
        </ToggleChip>
      </OptionGroup>

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

export default CnpjTool;
