import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import EditorialSite from "@/pages/EditorialSite";
import "@/components/portfolio-visual.css";

export default function Index() {
  const { t } = useLanguage();
  const { hash } = useLocation();
  const [entryState, setEntryState] = useState<"intro" | "zoom" | "done">(hash ? "done" : "intro");

  useEffect(() => {
    if (entryState !== "intro") return undefined;
    const enterOnKey = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setEntryState("zoom");
      }
    };
    window.addEventListener("keydown", enterOnKey);
    return () => window.removeEventListener("keydown", enterOnKey);
  }, [entryState]);

  useEffect(() => {
    if (entryState !== "zoom") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEntryState("done");
    }
    return undefined;
  }, [entryState]);


  useEffect(() => {
    if (entryState === "done") {
      document.getElementById("content")?.focus({ preventScroll: true });
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [entryState]);
  return <>
      {entryState !== "done" && (
        <button
          type="button"
          className="portfolio-entry"
          data-state={entryState}
          onAnimationEnd={(event) => {
            if (event.animationName === "device-enter") setEntryState("done");
          }}
          onClick={() => setEntryState((state) => state === "intro" ? "zoom" : state)}
          aria-label={t("entry.action")}
        >
          <span className="portfolio-entry-name">Igor P. Ribeiro<span>.</span></span>
          <span className="portfolio-entry-phone" aria-hidden="true">
            <span className="portfolio-entry-speaker" />
            <span className="portfolio-entry-mark">IPR</span>
            <span className="portfolio-entry-copy">{t("visual.specialty")}<br />{t("visual.foundation")}</span>
            <span className="portfolio-entry-tap">{t("entry.prompt")} <span>↗</span></span>
            <span className="portfolio-entry-home" />
          </span>
          <span className="portfolio-entry-hint">{t("entry.hint")}</span>
        </button>
      )}

    <div {...(entryState !== "done" ? { inert: "" } : {})}>
      <EditorialSite home />
    </div>
  </>;
}
