/**
 * Geradores de dado de teste — CPF, CNPJ e senha.
 *
 * Módulo puro de propósito: nenhuma referência a React, a DOM ou ao sistema
 * de design. Entra opção, sai string. É o que permite testar a regra dos
 * dígitos verificadores sem montar uma tela.
 */

/**
 * Sorteio uniforme de 0 a `max - 1`.
 *
 * `getRandomValues` entrega bytes uniformes, mas o resto de uma divisão não
 * é: se 2³² não é múltiplo de `max`, os primeiros valores da faixa saem com
 * probabilidade maior. Descartar o pedaço incompleto custa uma repetição
 * rara e devolve a uniformidade — e para senha isso não é preciosismo.
 */
function randomInt(max) {
  if (!Number.isInteger(max) || max < 1) {
    throw new RangeError("randomInt espera um inteiro positivo");
  }

  const ceiling = Math.floor(0x100000000 / max) * max;
  const buffer = new Uint32Array(1);

  let value;
  do {
    crypto.getRandomValues(buffer);
    value = buffer[0];
  } while (value >= ceiling);

  return value % max;
}

/** Um caractere sorteado de um alfabeto. */
function randomChar(alphabet) {
  return alphabet[randomInt(alphabet.length)];
}

/**
 * O dígito verificador dos dois documentos: resto da divisão por 11, com a
 * mesma convenção da Receita — resto 0 ou 1 não vira 10 nem 11, vira zero.
 */
function mod11(sum) {
  const rest = sum % 11;
  return rest < 2 ? 0 : 11 - rest;
}

/* ── CPF ────────────────────────────────────────────────────────────────
   Nove dígitos de base e dois verificadores, com pesos decrescentes a
   partir de 10 e de 11. */

function cpfCheckDigit(digits, firstWeight) {
  let sum = 0;
  for (let i = 0; i < digits.length; i += 1) {
    sum += digits[i] * (firstWeight - i);
  }
  return mod11(sum);
}

/**
 * CPF válido, sem pontuação.
 *
 * A base é sorteada até não sair com os nove dígitos iguais: 111.111.111-11
 * fecha a conta dos verificadores, mas é rejeitado por qualquer cadastro
 * sério — um gerador que os produz entrega dado que não passa no destino.
 */
export function generateCPF() {
  let base;
  do {
    base = Array.from({ length: 9 }, () => randomInt(10));
  } while (base.every((digit) => digit === base[0]));

  const first = cpfCheckDigit(base, 10);
  const second = cpfCheckDigit([...base, first], 11);

  return [...base, first, second].join("");
}

export function formatCPF(raw) {
  return `${raw.slice(0, 3)}.${raw.slice(3, 6)}.${raw.slice(6, 9)}-${raw.slice(9)}`;
}

/* ── CNPJ ───────────────────────────────────────────────────────────────
   O formato alfanumérico da IN RFB 2.229/2024: doze caracteres de base,
   que podem ser letras, e dois verificadores que continuam numéricos. */

const CNPJ_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * O valor de um caractere no cálculo: o código ASCII menos 48. É o que faz
 * "0" valer 0 e "A" valer 17, e é por essa conversão que o CNPJ numérico
 * antigo continua fechando a conta pela mesma fórmula — ele é um caso
 * particular do novo, não um formato paralelo.
 */
function cnpjValue(char) {
  return char.charCodeAt(0) - 48;
}

/** Pesos de 2 a 9, da direita para a esquerda, reiniciando após o 9. */
function cnpjCheckDigit(chars) {
  let sum = 0;
  let weight = 2;

  for (let i = chars.length - 1; i >= 0; i -= 1) {
    sum += cnpjValue(chars[i]) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }

  return mod11(sum);
}

/**
 * CNPJ válido, sem pontuação.
 *
 * @param {{ alphanumeric?: boolean }} [options] `alphanumeric` liga o formato
 *   novo (letras permitidas na base). Desligado, sorteia só dígitos e o
 *   resultado é um CNPJ do formato antigo — os dois convivem em produção a
 *   partir de julho de 2026, e teste precisa dos dois.
 */
export function generateCNPJ({ alphanumeric = true } = {}) {
  const alphabet = alphanumeric ? CNPJ_ALPHABET : "0123456789";
  const base = Array.from({ length: 12 }, () => randomChar(alphabet));

  const first = String(cnpjCheckDigit(base));
  const second = String(cnpjCheckDigit([...base, first]));

  return [...base, first, second].join("");
}

export function formatCNPJ(raw) {
  return `${raw.slice(0, 2)}.${raw.slice(2, 5)}.${raw.slice(5, 8)}/${raw.slice(8, 12)}-${raw.slice(12)}`;
}

/* ── Senha ──────────────────────────────────────────────────────────────
   Sorteio por classe, com garantia de pelo menos um caractere de cada
   classe pedida e embaralhamento no fim. */

const POOLS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digits: "0123456789",
  symbols: "!@#$%&*+-=?_~()[]{}<>.,:;/|",
};

/** Os pares que se confundem em fonte de tela e em papel impresso. */
const AMBIGUOUS = new Set(["I", "l", "1", "|", "O", "0", "o", "S", "5", "B", "8"]);

export const PASSWORD_CLASSES = Object.keys(POOLS);

export const PASSWORD_LENGTH = { min: 8, max: 64, default: 20 };

function withoutAmbiguous(pool) {
  return [...pool].filter((char) => !AMBIGUOUS.has(char)).join("");
}

/** Embaralhamento de Fisher-Yates, sorteado pela mesma fonte da senha. */
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = randomInt(i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Senha sorteada a partir das classes escolhidas.
 *
 * Cada classe ligada contribui com pelo menos um caractere antes do
 * preenchimento livre — sem isso, uma senha de 8 posições com quatro
 * classes ligadas sai sem símbolo com frequência incômoda, e o usuário
 * descobre isso só quando o formulário do outro lado recusa.
 *
 * @returns {{ value: string, poolSize: number, entropy: number }}
 */
export function generatePassword({
  length = PASSWORD_LENGTH.default,
  lowercase = true,
  uppercase = true,
  digits = true,
  symbols = true,
  avoidAmbiguous = false,
} = {}) {
  const enabled = { lowercase, uppercase, digits, symbols };

  const pools = PASSWORD_CLASSES.filter((name) => enabled[name])
    .map((name) => (avoidAmbiguous ? withoutAmbiguous(POOLS[name]) : POOLS[name]))
    .filter((pool) => pool.length > 0);

  if (pools.length === 0) {
    return { value: "", poolSize: 0, entropy: 0 };
  }

  const size = Math.min(
    Math.max(Math.trunc(length), PASSWORD_LENGTH.min),
    PASSWORD_LENGTH.max
  );
  const combined = pools.join("");

  // A garantia só cabe enquanto houver posição para ela. Pedir 8 caracteres
  // com mais de 8 classes é impossível por definição, então o excedente
  // simplesmente não é garantido.
  const guaranteed = pools.slice(0, size).map(randomChar);
  const rest = Array.from({ length: size - guaranteed.length }, () =>
    randomChar(combined)
  );

  return {
    value: shuffle([...guaranteed, ...rest]).join(""),
    poolSize: combined.length,
    // Entropia de sorteio uniforme: cada posição vale log2 do alfabeto. É a
    // medida honesta aqui porque a senha é sorteada, não escolhida.
    entropy: Math.round(size * Math.log2(combined.length)),
  };
}
