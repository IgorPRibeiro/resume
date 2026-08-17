import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  generatePassword,
  PASSWORD_CLASSES,
  PASSWORD_LENGTH,
} from "@/lib/generators";
import ToolPane from "./ToolPane";
import OptionGroup from "./OptionGroup";
import ToggleChip from "./ToggleChip";

/** Faixas de entropia. Sorteio uniforme, então bits medem o que dizem medir. */
function strengthKey(entropy) {
  if (entropy >= 128) return "excellent";
  if (entropy >= 90) return "strong";
  if (entropy >= 60) return "fair";
  return "weak";
}

/**
 * Gerador de senha.
 *
 * Mudar uma opção sorteia de novo, sem passar pelo botão: a senha na tela é
 * sempre a resposta às opções visíveis. Deixar a senha antiga sob opções
 * novas seria mostrar um resultado que não corresponde ao formulário.
 */
const PasswordTool = () => {
  const { t } = useLanguage();

  const [length, setLength] = useState(PASSWORD_LENGTH.default);
  const [avoidAmbiguous, setAvoidAmbiguous] = useState(false);
  const [classes, setClasses] = useState({
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true,
  });

  const regenerate = useCallback(
    () => generatePassword({ length, avoidAmbiguous, ...classes }),
    [length, avoidAmbiguous, classes]
  );

  const [result, setResult] = useState(regenerate);

  // O primeiro sorteio já saiu do `useState` acima; sortear de novo no mesmo
  // mount trocaria a senha depois do primeiro quadro, sem motivo visível.
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    setResult(regenerate());
  }, [regenerate]);

  const enabledCount = PASSWORD_CLASSES.filter((name) => classes[name]).length;

  const toggleClass = (name) => {
    setClasses((current) => {
      const next = { ...current, [name]: !current[name] };
      // Uma classe precisa sobrar: alfabeto vazio não gera senha, gera vazio.
      return PASSWORD_CLASSES.some((key) => next[key]) ? next : current;
    });
  };

  return (
    <ToolPane
      title={t("tools.password.title")}
      description={t("tools.password.description")}
      value={result.value}
      meta={`${result.entropy} ${t("tools.password.bits")} · ${t(
        `tools.password.strength.${strengthKey(result.entropy)}`
      )}`}
      onGenerate={() => setResult(regenerate())}
    >
      <OptionGroup label={t("tools.password.length")}>
        <input
          type="range"
          min={PASSWORD_LENGTH.min}
          max={PASSWORD_LENGTH.max}
          value={length}
          onChange={(event) => setLength(Number(event.target.value))}
          aria-label={t("tools.password.length")}
          className="h-1.5 w-full max-w-[18rem] cursor-pointer accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        />
        <span className="type-mono ml-1 tabular-nums text-foreground">
          {length}
        </span>
      </OptionGroup>

      <OptionGroup label={t("tools.password.sets")}>
        {PASSWORD_CLASSES.map((name) => (
          <ToggleChip
            key={name}
            pressed={classes[name]}
            // A última classe ligada não desliga: em vez de aceitar o clique e
            // devolver um campo vazio, o controle diz de antemão que não vai.
            disabled={classes[name] && enabledCount === 1}
            onClick={() => toggleClass(name)}
          >
            {t(`tools.password.set.${name}`)}
          </ToggleChip>
        ))}
      </OptionGroup>

      <OptionGroup label={t("tools.password.readability")}>
        <ToggleChip
          pressed={avoidAmbiguous}
          onClick={() => setAvoidAmbiguous((value) => !value)}
        >
          {t("tools.password.ambiguous")}
        </ToggleChip>
      </OptionGroup>
    </ToolPane>
  );
};

export default PasswordTool;
