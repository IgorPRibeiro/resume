import { useEffect, useRef } from "react";

const AmbientBackground = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motion = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame: number | null = null;
    let visible = false;

    const hide = () => {
      visible = false;
      if (glowRef.current) glowRef.current.style.opacity = "0";
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
    };
    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      const settled = Math.abs(targetX - currentX) <= 0.5 && Math.abs(targetY - currentY) <= 0.5;
      frame = settled ? null : requestAnimationFrame(tick);
    };
    const move = (event: PointerEvent) => {
      if (!motion.matches || event.pointerType === "touch") return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!visible) {
        currentX = targetX;
        currentY = targetY;
        visible = true;
      }
      if (glowRef.current) glowRef.current.style.opacity = "1";
      if (frame === null) frame = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    motion.addEventListener("change", hide);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      motion.removeEventListener("change", hide);
      hide();
    };
  }, []);

  return <div className="ambient-background" aria-hidden="true"><div ref={glowRef} className="ambient-cursor-glow" /></div>;
};

export default AmbientBackground;
