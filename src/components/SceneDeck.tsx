import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/** A scene leaves completely before the next one enters the opaque stage. */
export default function SceneDeck({ children, labels }: { children: ReactNode; labels: string[] }) {
  const scenes = Children.toArray(children);
  const { t } = useLanguage();
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const destination = useRef(0);
  const blockedUntil = useRef(0);
  const go = useCallback((next: number) => {
    if (phase !== "idle" || next === active || next < 0 || next >= scenes.length) return;
    destination.current = next;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setActive(next);
    else setPhase("exit");
    blockedUntil.current = performance.now() + 1050;
  }, [active, phase, scenes.length]);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const panel = () => node.querySelector<HTMLElement>(".scene-panel:not([hidden])")!;
    const unavailable = () => !!node.closest("[inert]") || document.querySelector("main")?.inert;
    const atEdge = (direction: number) => direction > 0
      ? panel().scrollTop + panel().clientHeight >= panel().scrollHeight - 2
      : panel().scrollTop <= 1;
    let distance = 0;
    let previous = 0;
    const wheel = (event: WheelEvent) => {
      if (unavailable() || event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (phase !== "idle" || performance.now() < blockedUntil.current) { event.preventDefault(); return; }
      const direction = Math.sign(event.deltaY);
      if (!direction || !atEdge(direction)) return;
      event.preventDefault();
      const now = performance.now();
      if (now - previous > 180 || Math.sign(distance) !== direction) distance = 0;
      previous = now;
      distance += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? panel().clientHeight : 1);
      if (Math.abs(distance) >= 55) { go(active + direction); distance = 0; }
    };
    const keyboard = (event: KeyboardEvent) => {
      if (unavailable() || event.altKey || event.ctrlKey || event.metaKey || (event.target as HTMLElement).closest("input,textarea,select,[contenteditable=true]")) return;
      if (event.key === " " && (event.target as HTMLElement).closest("a,button")) return;
      if (!["ArrowDown","ArrowUp","PageDown","PageUp"," ","Home","End"].includes(event.key)) return;
      event.preventDefault();
      if (phase !== "idle") return;
      if (event.key === "Home") { go(0); return; }
      if (event.key === "End") { go(scenes.length - 1); return; }
      const direction = ["ArrowUp","PageUp"].includes(event.key) || (event.key === " " && event.shiftKey) ? -1 : 1;
      if (!atEdge(direction)) panel().scrollBy({ top: direction * panel().clientHeight * .75, behavior: "smooth" });
      else go(active + direction);
    };
    let touchY = 0;
    let touchTop = false;
    let touchBottom = false;
    const start = (event: TouchEvent) => {
      touchY = event.touches[0].clientY;
      touchTop = panel().scrollTop <= 1;
      touchBottom = panel().scrollTop + panel().clientHeight >= panel().scrollHeight - 2;
    };
    const end = (event: TouchEvent) => {
      if (unavailable() || phase !== "idle" || performance.now() < blockedUntil.current) return;
      const distance = touchY - event.changedTouches[0].clientY;
      if (Math.abs(distance) > 60 && (distance > 0 ? touchBottom : touchTop) && atEdge(Math.sign(distance))) go(active + Math.sign(distance));
    };
    const hash = () => {
      const target = document.getElementById(location.hash.slice(1));
      const section = target?.closest<HTMLElement>(".scene-panel");
      if (section) { setActive(Number(section.dataset.index)); setPhase("idle"); }
    };
    node.addEventListener("wheel", wheel, { passive: false });
    node.addEventListener("touchstart", start, { passive: true });
    node.addEventListener("touchend", end, { passive: true });
    window.addEventListener("keydown", keyboard);
    window.addEventListener("hashchange", hash);
    return () => {
      node.removeEventListener("wheel", wheel);
      node.removeEventListener("touchstart", start);
      node.removeEventListener("touchend", end);
      window.removeEventListener("keydown", keyboard);
      window.removeEventListener("hashchange", hash);
    };
  }, [active, phase, go, scenes.length]);

  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const reduce = () => {
      if (motion.matches && phase !== "idle") { setActive(destination.current); setPhase("idle"); }
    };
    motion.addEventListener("change", reduce);
    return () => motion.removeEventListener("change", reduce);
  }, [phase]);

  useEffect(() => {
    const target = document.getElementById(location.hash.slice(1))?.closest<HTMLElement>(".scene-panel");
    if (target) setActive(Number(target.dataset.index));
  }, []);

  useEffect(() => {
    const panel = root.current?.querySelector<HTMLElement>(".scene-panel:not([hidden])");
    if (panel) {
      panel.scrollTop = 0;
      if ((document.activeElement as HTMLElement)?.closest(".scene-panel")) panel.focus({ preventScroll: true });
    }
  }, [active]);

  return <div className="scene-deck" ref={root} data-phase={phase} data-scene={active}>
    <div className="scene-stage" onAnimationEnd={event => {
      if (event.target !== event.currentTarget) return;
      if (phase === "exit") { setActive(destination.current); setPhase("enter"); }
      else if (phase === "enter") setPhase("idle");
    }}>
      {scenes.map((scene, index) => <div className="scene-panel" data-index={index} key={index} hidden={index !== active} role="region" aria-label={labels[index]} tabIndex={-1}>{scene}</div>)}
    </div>
    <div className="scene-controls"><nav aria-label={t("scene.navigation")}>{labels.map((label,index) => <button key={label} aria-label={label} aria-current={index === active ? "step" : undefined} onClick={() => go(index)}><span aria-hidden="true" /><span className="scene-nav-label">{label}</span></button>)}</nav><div className="scene-position" aria-live="polite" aria-atomic="true"><span>{String(active + 1).padStart(2,"0")} / {String(scenes.length).padStart(2,"0")}</span><strong>{labels[active]}</strong></div><div className="scene-arrows"><button onClick={() => go(active-1)} disabled={active === 0 || phase !== "idle"} aria-label={t("scene.previous")}><ArrowUp size={18} /></button><button onClick={() => go(active+1)} disabled={active === scenes.length-1 || phase !== "idle"} aria-label={t("scene.next")}><ArrowDown size={18} /></button></div></div>
  </div>;
}
