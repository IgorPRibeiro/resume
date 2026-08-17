import { useEffect, useRef } from "react";

/**
 * A rua ao fundo: duas manchas de luz que respiram, uma grade que desliza e
 * um halo que segue o ponteiro. Tudo atrás de um véu que escurece para baixo,
 * porque o texto só é legível se o fundo perder força onde ele começa.
 *
 * Nada aqui é interativo e nada aqui carrega informação — em movimento
 * reduzido o halo simplesmente não existe.
 */
const AmbientBackground = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame: number | null = null;

    // O halo persegue o ponteiro com atraso: chegar junto denunciaria que é
    // um elemento colado no cursor, e não luz atravessando a vitrine.
    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      const node = glowRef.current;
      if (node) {
        node.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      const settled =
        Math.abs(targetX - currentX) <= 0.5 && Math.abs(targetY - currentY) <= 0.5;
      frame = settled ? null : requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      const node = glowRef.current;
      if (node) node.style.opacity = "1";
      if (frame === null) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Mancha quente, alta e à esquerda: é ela que dá o vermelho do letreiro
          ao ar da página. */}
      <div
        className="absolute h-[70vw] w-[70vw] animate-aurora-a"
        style={{
          left: "-10vw",
          top: "-14vw",
          background:
            "radial-gradient(closest-side, hsl(var(--primary) / 0.16), transparent 70%)",
        }}
      />

      {/* Mancha fria, baixa e à direita: existe só para o vermelho ter um
          contraponto e a rua não virar monocromia. */}
      <div
        className="absolute h-[62vw] w-[62vw] animate-aurora-b"
        style={{
          right: "-12vw",
          top: "34vh",
          background:
            "radial-gradient(closest-side, rgb(90 110 255 / 0.10), transparent 70%)",
        }}
      />

      <div
        className="absolute -inset-[72px] animate-grid-drift opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 0.028) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.028) 1px, transparent 1px)",
          backgroundSize: "72px 72px, 72px 72px",
        }}
      />

      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[640px] w-[640px] -ml-80 -mt-80 rounded-full opacity-0 transition-opacity duration-500 ease-out will-change-transform"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--primary) / 0.13), transparent 72%)",
        }}
      />

      {/* O véu: sem ele o texto disputa leitura com a aurora. */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/35 to-background/[0.86]" />
    </div>
  );
};

export default AmbientBackground;
