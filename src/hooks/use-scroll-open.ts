import { RefObject, useEffect } from "react";

/**
 * Progresso de abertura de uma seção, de 0 a 1: zero enquanto o topo dela
 * ainda está uma tela abaixo, um quando ele chega ao terço superior da tela.
 *
 * O valor é escrito direto na variável CSS `--open` do próprio elemento, e
 * não em estado de React: quem manda no quadro é o scroll, e re-renderizar a
 * árvore a cada quadro para mover uma opacidade seria pagar caro por nada.
 */
export function useScrollOpen<T extends HTMLElement>(ref: RefObject<T>) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame: number | null = null;
    let last = -1;

    const measure = () => {
      frame = null;

      const { top } = node.getBoundingClientRect();
      const viewport = window.innerHeight || 1;

      // A abertura consome 70% de uma tela de rolagem: menos que isso e a
      // cortina pisca; mais e ela nunca termina de acender.
      const raw = (viewport - top) / (viewport * 0.7);
      const progress = Math.min(1, Math.max(0, raw));

      // Smoothstep: a cortina demora a pegar e chega inteira, em vez de
      // acender linearmente junto com o primeiro pixel de rolagem.
      const eased = progress * progress * (3 - 2 * progress);

      // Três casas bastam para o olho e evitam reescrever o estilo a cada
      // quadro quando o scroll anda meio pixel.
      const value = Math.round(eased * 1000) / 1000;
      if (value === last) return;

      last = value;
      node.style.setProperty("--open", String(value));
    };

    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [ref]);
}
