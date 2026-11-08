import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import androidLogo from "@/assets/icons/technologies/android.svg";
import appleLogo from "@/assets/icons/technologies/apple.svg";
import javaLogo from "@/assets/icons/java.svg";
import kotlinLogo from "@/assets/icons/technologies/kotlin.svg";
import swiftLogo from "@/assets/icons/technologies/swift.svg";
import reactLogo from "@/assets/icons/technologies/react.svg";
import tailwindLogo from "@/assets/icons/technologies/tailwindcss.svg";
import reduxLogo from "@/assets/icons/technologies/redux.svg";
import sqliteLogo from "@/assets/icons/technologies/sqlite.svg";
import expoLogo from "@/assets/icons/technologies/expo.svg";
import nodeLogo from "@/assets/icons/technologies/nodedotjs.svg";
import oracleLogo from "@/assets/icons/technologies/oracle.svg";
import electronLogo from "@/assets/icons/technologies/electron.svg";
import portrait from "@/assets/images/i-portrait.webp";
import "@/components/editorial.css";

const projects = [
  { id: 1, slug: "mobile-commerce", category: "ed.commerce", stack: "React Native / Redux / Node.js / Firebase / CodePush" },
  { id: 2, slug: "self-service-superapp", category: "SUPERAPP", stack: "React Native / Redux / Contentful / OneSignal / OAuth" },
  { id: 3, slug: "offline-field-inspection", category: "OFFLINE-FIRST", stack: "React Native / RealmDB / Zustand" },
  { id: 4, slug: "prepaid-card", category: "FINTECH", stack: "React Native / MobX / Firebase / REST" },
  { id: 5, slug: "satro-desktop", category: "DESKTOP", stack: "Electron" },
];
const specialties = [
  { key: "ed.native", body: "ed.nativebody", tech: "Android / iOS / Java / Kotlin / Swift", logos: [["Android", androidLogo], ["iOS", appleLogo], ["Java", javaLogo], ["Kotlin", kotlinLogo], ["Swift", swiftLogo]] },
  { key: "visual.interface", body: "ed.interfacebody", tech: "React Native / Tailwind CSS / StyleSheet / styled-components", logos: [["React Native", reactLogo], ["Tailwind CSS", tailwindLogo]] },
  { key: "ed.web", body: "ed.webbody", tech: "React", logos: [["React", reactLogo]] },
  { key: "ed.desktop", body: "ed.desktopbody", tech: "Electron", logos: [["Electron", electronLogo]] },
  { key: "visual.offline", body: "ed.offlinebody", tech: "Redux / MobX / Zustand / SQLite / Async Storage", logos: [["Redux", reduxLogo], ["SQLite", sqliteLogo]] },
  { key: "visual.delivery", body: "ed.releasebody", tech: "App Store / Google Play / Expo", logos: [["Expo", expoLogo]] },
  { key: "ed.backend", body: "ed.backendbody", tech: "Node.js / Java", logos: [["Node.js", nodeLogo], ["Java", javaLogo]] },
  { key: "ed.infra", body: "ed.infrabody", tech: "Oracle Cloud Infrastructure (OCI)", logos: [["Oracle OCI", oracleLogo]] },
];

function ProjectVisual({ id = 3 }: { id?: number; large?: boolean }) {
  const { t } = useLanguage();
  return <div className="project-visual"><span>{t(`portfolio.system${id}.scope`)}</span><p>{projects.find(project => project.id === id)?.stack}</p></div>;
}

function WorkGrid({ all = false, exclude }: { all?: boolean; exclude?: number }) {
  const { t } = useLanguage();
  return <div className="editorial-work-grid">{(all ? projects : [projects[2], ...projects.filter(p => p.id !== 3)].filter(p => p.id !== exclude).slice(0, 2)).map(project => <Link className="editorial-project" to={`/work/${project.slug}`} key={project.id}>
    <ProjectVisual id={project.id} />
    <div className="project-copy"><div className="ed-meta"><span>{project.category.startsWith("ed.") ? t(project.category) : project.category}</span><span>{project.stack.split(" / ")[0]}</span></div><h3>{t(`portfolio.system${project.id}.title`)}</h3><p>{t(`work.${project.id}.summary`)}</p><span className="ed-text-link">{t("ed.case")}<ArrowUpRight size={18} aria-hidden="true" /></span></div>
  </Link>)}</div>;
}

function Expertise() {
  const { t } = useLanguage();
  return <section className="technology-section" id="services"><h2>{t("home.technologies")}</h2><p className="section-description">{t("home.techintro")}</p><div className="technology-groups">{specialties.map(item => <article className={item.key === "ed.native" ? "technology-native" : undefined} key={item.key}><h3>{t(item.key)}</h3><p className="technology-description">{t(item.body)}</p><div className="technology-logos">{item.logos.map(([name, src]) => <figure key={name}><span className="technology-mark"><img className={name === "iOS" || name === "Expo" ? "technology-logo-dark" : undefined} src={src} alt="" loading="lazy" width="64" height="64" /></span><figcaption>{name}</figcaption></figure>)}</div><p className="technology-stack">{item.tech}</p></article>)}</div></section>;
}

function Experience() {
  const { t } = useLanguage();
  return <section className="home-experience" id="experience"><h2>{t("experience.title")}</h2>{["globalsys", "easyfarm"].map(company => <article className="experience-entry" key={company}><div><h3>{company === "globalsys" ? "Globalsys Soluções em TI" : "EasyFarm"}</h3><p>{t(`experience.${company}.role`)}</p><span>{t(`experience.${company}.period`)}</span></div><ul>{(company === "globalsys" ? [1, 3, 5, 6] : [1, 3]).map(n => <li key={n}>{t(`experience.${company}.item${n}`)}</li>)}</ul>{company === "globalsys" && <div className="experience-projects"><h4>{t("home.companyprojects")}</h4>{projects.map(project => <Link key={project.id} to={`/work/${project.slug}`}>{t(`portfolio.system${project.id}.title`)}<ArrowUpRight size={16} aria-hidden="true" /></Link>)}</div>}</article>)}</section>;
}

function Process({ full = false }: { full?: boolean }) {
  const { t } = useLanguage();
  return <section className="editorial-process" id="process"><div className="ed-section-heading"><div><h2>{t("ed.process")}</h2><p>{t("ed.processintro")}</p></div>{!full && <Link className="ed-button" to="/process">{t("ed.process")}<ArrowUpRight size={17} aria-hidden="true" /></Link>}</div><div className="process-steps">{[1,2,3].map(n => <article key={n}><span className="process-number">0{n}</span><h3>{t(`ed.step${n}`)}</h3><p>{t(`hero.process.step${n}`)}</p><dl><dt>{t("ed.output")}</dt><dd>{t(`ed.output${n}`)}</dd></dl></article>)}</div></section>;
}

function Home() {
  const { t } = useLanguage();
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;
    const targets = document.querySelectorAll<HTMLElement>(
      ".profile-content h2, .home-summary > p, .summary-stack, .home-section-heading > p, .home-project, .technology-groups > article, .experience-entry, .home-education > div"
    );
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("content-arrived");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);
  return <><div className="profile-layout">
    <aside className="profile-identity"><img src={portrait} alt="Igor P. Ribeiro" /><h1>Igor P. Ribeiro<span>.</span></h1><p>{t("home.role")}</p><span className="profile-location">{t("ed.location")}</span><nav aria-label={t("home.sections")}><a href="#summary">{t("home.summary")}</a><a href="#services">{t("home.technologies")}</a><a href="#selected-work">{t("ed.projects")}</a><a href="#experience">{t("experience.title")}</a></nav><a className="profile-email" href="mailto:iguprcarrer@gmail.com">{t("ed.contact")} <ArrowUpRight size={17} aria-hidden="true" /></a><div className="profile-socials"><a href="https://github.com/IgorPRibeiro" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/igorpr1202/" target="_blank" rel="noreferrer">LinkedIn</a></div></aside>
    <div className="profile-content">
      <section className="home-summary" id="summary"><h2>{t("home.headline")}</h2><p className="summary-lead">{t("home.summaryintro")}</p><p>{t("home.summarypractice")}</p><p>{t("home.summarydelivery")}</p><div className="summary-stack"><span>React Native</span><span>TypeScript</span><span>Android & iOS</span><span>Node.js</span></div></section>
      <Expertise />
      <section className="home-work" id="selected-work"><div className="home-section-heading"><h2>{t("ed.selected")}</h2><p>{t("home.partnership")}</p></div><div className="home-projects">{projects.map(project => <Link className="home-project" to={`/work/${project.slug}`} key={project.id}><div className="project-heading"><h3>{t(`portfolio.system${project.id}.title`)}</h3><ArrowUpRight size={22} aria-hidden="true" /></div><p>{t(`work.${project.id}.summary`)}</p><span className="project-stack">{project.stack}</span></Link>)}</div><p className="confidential-note">{t("home.confidential")}</p></section>
      <Experience />
      <section className="home-education"><h2>{t("about.fact.education")}</h2>{["multivix","senai"].map(key => <div key={key}><h3>{t(`experience.${key}.title`)}</h3><p>{t(`experience.${key}.period`)} · {t(`experience.${key}.description`)}</p></div>)}</section>
    </div>
  </div><Footer /></>;
}

function About() {
  const { t } = useLanguage();
  return <><div className="ed-page-heading"><h1>{t("nav.about")}</h1><p>{t("ed.aboutintro")}</p></div><section className="editorial-about"><img src={portrait} alt="Igor P. Ribeiro" /><div><h2>{t("ed.abouttitle")}</h2><p>{t("ed.statementbody")}</p><dl>{["base","education","languages"].map(key => <div key={key}><dt>{t(`about.fact.${key}`)}</dt><dd>{t(`about.fact.${key}.value`)}</dd></div>)}</dl></div></section><section className="editorial-history"><h2>{t("experience.title")}</h2>{["globalsys","easyfarm"].map(company => <article key={company}><div><h3>{company === "globalsys" ? "Globalsys Soluções em TI" : "EasyFarm"}</h3><span>{t(`experience.${company}.period`)}</span></div><div><h3>{t(`experience.${company}.role`)}</h3><ul>{Array.from({length:company === "globalsys" ? 6 : 3},(_,i) => <li key={i}>{t(`experience.${company}.item${i+1}`)}</li>)}</ul></div></article>)}</section><section className="editorial-history"><h2>{t("about.fact.education")}</h2>{["multivix","senai"].map(key => <article key={key}><span>{t(`experience.${key}.period`)}</span><div><h3>{t(`experience.${key}.title`)}</h3><p>{t(`experience.${key}.description`)}</p></div></article>)}</section><section className="editorial-history"><h2>{t("opensource.title")}</h2>{[["react-native-local-OTA","ota"],["JWT-ClientSecret-generator","jwt"],["AnimationOverlay","overlay"],["IpAndHost","iphost"],["CoinsWeb","coins"],["pusher-websocket-react-native","pusher"]].map(([name,key]) => <a className="editorial-repo" key={key} href={`https://github.com/IgorPRibeiro/${name}`} target="_blank" rel="noreferrer"><h3>{name}</h3><p>{t(`opensource.${key}.description`)}</p><ArrowUpRight size={20} aria-hidden="true" /></a>)}</section></>;
}

function Contact() {
  const { t } = useLanguage();
  return <><div className="ed-page-heading"><h1>{t("nav.contact")}</h1><p>{t("ed.contactintro")}</p></div><section className="editorial-contact"><div><h2>{t("ed.contact")}</h2><p>{t("contact.workModel.value")}</p><a className="ed-button orange" href="mailto:iguprcarrer@gmail.com">{t("ed.write")}<ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="contact-register">{[["contact.email","iguprcarrer@gmail.com","mailto:iguprcarrer@gmail.com"],["contact.phone","+55 27 99516-2238","tel:+5527995162238"],["LinkedIn","igorpr1202","https://www.linkedin.com/in/igorpr1202/"],["GitHub","IgorPRibeiro","https://github.com/IgorPRibeiro"]].map(([key,value,href]) => <a href={href} key={key}><span>{key.includes('.') ? t(key) : key}</span><strong>{value}</strong><ArrowUpRight size={20} aria-hidden="true" /></a>)}</div></section></>;
}

export default function EditorialSite({ home = false }: { home?: boolean }) {
  const { t, language } = useLanguage();
  const { pathname, hash } = useLocation();
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const pageKey = pathname.startsWith('/work') ? 'ed.projects' : pathname === '/about' ? 'nav.about' : pathname === '/services' ? 'ed.services' : pathname === '/process' ? 'ed.process' : 'nav.contact';
  useEffect(() => {
    document.title = `${home ? 'Igor P. Ribeiro — React Native' : project ? t(`portfolio.system${project.id}.title`) : t(pageKey)}${home ? '' : ' · Igor P. Ribeiro'}`;
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView(); else window.scrollTo({top:0,behavior:'instant'});
  }, [pathname, hash, language]); // eslint-disable-line react-hooks/exhaustive-deps
  let content;
  if (home) content = <Home />;
  else if (pathname === '/about') content = <About />;
  else if (pathname === '/services') content = <Expertise />;
  else if (pathname === '/process') content = <><div className="ed-page-heading"><h1>{t("ed.process")}</h1><p>{t("ed.processintro")}</p></div><Process full /></>;
  else if (pathname === '/contact') content = <Contact />;
  else if (slug && !project) content = <div className="ed-page-heading"><h1>{t("notFound.title")}</h1><Link className="ed-button" to="/work">{t("ed.allwork")}<ArrowRight size={18} aria-hidden="true" /></Link></div>;
  else if (project) content = <><div className="ed-case-heading"><div className="ed-meta"><Link to="/work">{t("ed.projects")}</Link><span>{project.category.startsWith("ed.") ? t(project.category) : project.category}</span></div><h1>{t(`portfolio.system${project.id}.title`)}</h1><p>{t(`work.${project.id}.summary`)}</p></div><ProjectVisual id={project.id} large /><div className="case-facts"><div><span>{t("ed.context")}</span><p>{t(`portfolio.system${project.id}.scope`)}</p></div><div><span>STACK</span><p>{project.stack}</p></div></div><section className="editorial-case-story"><article><h2>{t("ed.role")}</h2><p>{t("ed.rolebody")}</p></article><article><h2>{t("ed.decisions")}</h2><p>{t(`portfolio.system${project.id}.description`)}</p></article><details><summary>{t("work.confidential")}</summary><p>{t("portfolio.intro")}</p></details></section><div className="ed-section-heading"><h2>{t("ed.next")}</h2><Link className="ed-button" to="/work">{t("ed.allwork")}<ArrowRight size={18} aria-hidden="true" /></Link></div><WorkGrid exclude={project.id} /></>;
  else content = <><div className="ed-page-heading"><h1>{t("ed.projects")}</h1><p>{t("work.intro")}</p></div><WorkGrid all /><div className="editorial-disclosure"><h2>{t("work.confidential")}</h2><p>{t("portfolio.intro")}</p></div></>;
  return <div className={home ? "editorial-shell editorial-home-shell" : "editorial-shell"}><a className="editorial-skip" href="#content">{t("a11y.skip")}</a><Header /><main id="content" tabIndex={-1}>{content}</main>{!home && <Footer />}</div>;
}
