import { useEffect, useRef } from "react";

/**
 * O fio de 2px no topo: a única medida de "quanto falta" da página. Escreve
 * direto no nó em vez de passar por estado, porque a cada quadro de rolagem
 * um re-render do site inteiro custaria mais que o fio vale.
 */
const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const node = barRef.current;
      if (!node) return;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      node.style.width = `${ratio * 100}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-0.5 w-0 bg-primary transition-[width] duration-100 ease-linear"
    />
  );
};

export default ScrollProgress;
