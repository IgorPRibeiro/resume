import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Database, Layers, Radio, Smartphone, Upload, WifiOff } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const modes = ["interface", "offline", "delivery"] as const;

/** Pointer and scroll write only CSS variables; React updates on explicit selection. */
export default function MobileComposition() {
  const { t } = useLanguage();
  const [active, setActive] = useState<(typeof modes)[number]>("interface");
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let x = 0;
    let y = 0;
    const paint = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const progress = motion.matches ? 0 : Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      node.style.setProperty("--pointer-x", `${motion.matches ? 0 : x}deg`);
      node.style.setProperty("--pointer-y", `${motion.matches ? 0 : y}deg`);
      node.style.setProperty("--unfold", String(progress));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const move = (event: PointerEvent) => {
      if (!fine.matches || motion.matches || event.pointerType === "touch") return;
      const rect = node.getBoundingClientRect();
      x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
      y = -((event.clientY - rect.top) / rect.height - 0.5) * 9;
      schedule();
    };
    const reset = () => { x = 0; y = 0; schedule(); };
    node.addEventListener("pointermove", move);
    node.addEventListener("pointerleave", reset);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    motion.addEventListener("change", reset);
    paint();
    return () => {
      cancelAnimationFrame(frame);
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerleave", reset);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", reset);
    };
  }, []);
  const project = active === "interface" ? 2 : active === "offline" ? 3 : 1;
  return (
    <div ref={root} className="mobile-composition" data-mode={active}>
      <div className="composition-stage" aria-hidden="true">
        <div className="stage-cross stage-cross-a" /><div className="stage-cross stage-cross-b" />
        <span className="stage-caption">iOS / Android</span>
        <div className="device-assembly">
          <div className="architecture-plane plane-back">
            <div className="plane-header"><Upload size={16} /><span>{t("visual.delivery")}</span></div>
            <div className="release-path"><span>TypeScript</span><i /><span>React Native</span><i /><span>iOS + Android</span></div>
            <div className="plane-footer"><Check size={14} />{t("visual.release")}</div>
          </div>
          <div className="architecture-plane plane-middle">
            <div className="plane-header"><Database size={16} /><span>{t("visual.offline")}</span></div>
            <div className="data-lines">{["inspection", "attachment", "sync_queue"].map((label) => <div key={label}><span>{label}</span><Check size={14} /></div>)}</div>
            <div className="plane-footer"><WifiOff size={14} />{t("visual.local")}</div>
          </div>
          <div className="device-shell">
            <div className="device-top"><span>9:41</span><span className="device-island" /><Radio size={15} /></div>
            <div className="device-content">
              <div className="device-app-mark"><Layers size={21} /><span>IPR</span></div>
              <p className="device-heading">{t(`visual.screen.${active}`)}</p>
              <p className="device-subtitle">{t("visual.screen.subtitle")}</p>
              <div className="device-route"><span /><i /><span /><i /><span /></div>
              <div className="device-record"><span className="record-icon"><Check size={18} /></span><div><strong>{t("visual.record")}</strong><span>{t(`visual.record.${active}`)}</span></div></div>
              <div className="device-action">{t(`visual.action.${active}`)}<Check size={16} /></div>
              <div className="device-home" />
            </div>
          </div>
        </div>
      </div>
      <p className="stage-note">{t("visual.illustration")}</p>
      <div className="composition-controls" role="group" aria-label={t("visual.explore")}>
        {modes.map((mode, index) => {
          const Icon = [Smartphone, Database, Upload][index];
          return <button key={mode} type="button" aria-pressed={active === mode} aria-controls="composition-description" onClick={() => setActive(mode)}><Icon size={16} aria-hidden="true" />{t(`visual.${mode}`)}</button>;
        })}
      </div>
      <div id="composition-description" className="composition-description" aria-live="polite" aria-atomic="true">
        <p>{t(`visual.description.${active}`)}</p>
        <a href={`#system-${project}`}>{t("visual.related")}<ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
    </div>
  );
}
