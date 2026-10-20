import { useEffect, useState, type CSSProperties } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Database, Layers, Radio, Smartphone, Upload, WifiOff, Server, Cloud } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SceneDeck from "@/components/SceneDeck";
import "@/components/scene-deck.css";
import portrait from "@/assets/images/i-portrait.webp";
import reactNativeLogo from "@/assets/icons/rnIcon.png";
import expoLogo from "@/assets/icons/expoIcon.png";
import androidLogo from "@/assets/icons/android.png";
import javaLogo from "@/assets/icons/java.svg";
import tailwindcssLogo from "@/assets/icons/technologies/tailwindcss.svg";
import styledcomponentsLogo from "@/assets/icons/technologies/styledcomponents.svg";
import appleLogo from "@/assets/icons/technologies/apple.svg";
import kotlinLogo from "@/assets/icons/technologies/kotlin.svg";
import swiftLogo from "@/assets/icons/technologies/swift.svg";
import reduxLogo from "@/assets/icons/technologies/redux.svg";
import mobxLogo from "@/assets/icons/technologies/mobx.svg";
import sqliteLogo from "@/assets/icons/technologies/sqlite.svg";
import appstoreLogo from "@/assets/icons/technologies/appstore.svg";
import googleplayLogo from "@/assets/icons/technologies/googleplay.svg";
import nodedotjsLogo from "@/assets/icons/technologies/nodedotjs.svg";
import oracleLogo from "@/assets/icons/technologies/oracle.svg";
import "@/components/editorial.css";

const projects = [
  { id: 1, slug: "mobile-commerce", category: "ed.commerce", stack: "React Native / Redux / Node.js / Firebase / CodePush" },
  { id: 2, slug: "self-service-superapp", category: "SUPERAPP", stack: "React Native / Redux / Contentful / OneSignal / OAuth" },
  { id: 3, slug: "offline-field-inspection", category: "OFFLINE-FIRST", stack: "React Native / RealmDB / Zustand" },
  { id: 4, slug: "prepaid-card", category: "FINTECH", stack: "React Native / MobX / Firebase / REST" },
];
const specialties = [
  { key: "visual.interface", body: "ed.interfacebody", tech: "React Native / Tailwind CSS / StyleSheet / styled-components", icon: Smartphone, logos: [["React Native", reactNativeLogo], ["Tailwind CSS", tailwindcssLogo], ["StyleSheet", reactNativeLogo], ["styled-components", styledcomponentsLogo]] },
  { key: "ed.native", body: "ed.nativebody", tech: "Android / iOS / Java / Kotlin / Swift", icon: Layers, logos: [["Android", androidLogo], ["iOS", appleLogo], ["Java", javaLogo], ["Kotlin", kotlinLogo], ["Swift", swiftLogo]] },
  { key: "visual.offline", body: "ed.offlinebody", tech: "Redux / MobX / Zustand / SQLite / Async Storage", icon: Database, logos: [["Redux", reduxLogo], ["MobX", mobxLogo], ["SQLite", sqliteLogo]] },
  { key: "visual.delivery", body: "ed.releasebody", tech: "App Store / Google Play / Expo", icon: Upload, logos: [["App Store", appstoreLogo], ["Google Play", googleplayLogo], ["Expo", expoLogo]] },
  { key: "ed.backend", body: "ed.backendbody", tech: "Node.js / Java", icon: Server, logos: [["Node.js", nodedotjsLogo], ["Java", javaLogo]] },
  { key: "ed.infra", body: "ed.infrabody", tech: "Oracle Cloud Infrastructure (OCI)", icon: Cloud, logos: [["Oracle OCI", oracleLogo]] },
];

function ProjectVisual({ id = 3, large = false }: { id?: number; large?: boolean }) {
  const { t } = useLanguage();
  return <div className={`project-visual visual-${id}${large ? " visual-large" : ""}`}>
    <div className="visual-coordinates" aria-hidden="true"><span>{t("ed.mobileSystems")}</span><span>iOS + Android</span></div>
    <div className="visual-orbit" aria-hidden="true" />
    <div className="concept-device" aria-hidden="true">
      <div className="concept-status"><span>9:41</span><i /><Radio size={14} /></div>
      <div className="concept-app"><div className="concept-app-top"><Layers size={22} /><span>IPR</span></div>
        <h3>{t(id === 1 ? "ed.payment" : id === 2 ? "ed.document" : id === 4 ? "ed.balance" : "ed.inspection")}</h3>
        <p>{t("ed.example")}</p>
        <div className="concept-record"><span /><span /><span /></div>
        <div className="concept-row"><Check size={18} /><span>{t("ed.local")}</span></div>
        <div className="concept-row"><Database size={18} /><span>{t("ed.records")}</span></div>
        <div className="concept-progress"><i /><i /><i /></div>
        <div className="concept-action">{t(id === 1 ? "ed.paymentaction" : "ed.approved")}<ArrowRight size={16} /></div>
      </div><div className="concept-home" />
    </div>
    <div className="visual-data" aria-hidden="true"><WifiOff size={18} /><span>{t("ed.sync")}</span><span>React Native<br />TypeScript / Expo</span></div>
    <p className="visual-caption">{t("ed.concept")}</p>
  </div>;
}

function WorkGrid({ all = false, exclude }: { all?: boolean; exclude?: number }) {
  const { t } = useLanguage();
  return <div className="editorial-work-grid">{(all ? projects : [projects[2], projects[0], projects[1], projects[3]].filter(p => p.id !== exclude).slice(0, 2)).map(project => <Link className="editorial-project" to={`/work/${project.slug}`} key={project.id}>
    <ProjectVisual id={project.id} />
    <div className="project-copy"><div className="ed-meta"><span>{project.category.startsWith("ed.") ? t(project.category) : project.category}</span><span>REACT NATIVE</span></div><h3>{t(`portfolio.system${project.id}.title`)}</h3><p>{t(`work.${project.id}.summary`)}</p><span className="ed-text-link">{t("ed.case")}<ArrowUpRight size={18} aria-hidden="true" /></span></div>
  </Link>)}</div>;
}

function Expertise({ full = false }: { full?: boolean }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const current = specialties[selected]; const Icon = current.icon;
  return <section className="editorial-expertise" id="services"><div className="expertise-index"><h2>{t("ed.services")}</h2><p>{t("ed.expertiseintro")}</p><div className="expertise-options" role="group" aria-label={t("ed.services")}>{specialties.map((item,index) => <button key={item.key} onClick={() => setSelected(index)} aria-pressed={selected === index} aria-controls="expertise-detail"><span>{t(item.key)}</span><ArrowUpRight size={19} aria-hidden="true" /></button>)}</div>{!full && <Link className="ed-text-link" to="/services">{t("ed.services")}<ArrowRight size={16} aria-hidden="true" /></Link>}</div>
    <div className="expertise-detail" id="expertise-detail" aria-live="polite" aria-atomic="true"><div className="expertise-diagram" aria-hidden="true"><div className="diagram-ring ring-one" /><div className="diagram-ring ring-two" /><div className="diagram-ring ring-three" /><div className="technology-orbits" key={current.key}>{current.logos.map(([name, src], index) => {
      const animationDelay = `${-index * 28 / current.logos.length}s`;
      return <div className="technology-carrier" key={name} style={{ animationDelay, "--orbit-angle": `${index * 360 / current.logos.length}deg` } as CSSProperties}><div className="technology-position"><div className="technology-logo" style={{ animationDelay }}><img src={src} alt="" /><span>{name}</span></div></div></div>;
    })}</div><Icon size={64} strokeWidth={1} /><span>{current.tech}</span></div><div className="expertise-description"><h3>{t(current.key)}</h3><p>{t(current.body)}</p><span className="ed-meta">{current.tech}</span></div></div>
  </section>;
}

function Process({ full = false }: { full?: boolean }) {
  const { t } = useLanguage();
  return <section className="editorial-process" id="process"><div className="ed-section-heading"><div><h2>{t("ed.process")}</h2><p>{t("ed.processintro")}</p></div>{!full && <Link className="ed-button" to="/process">{t("ed.process")}<ArrowUpRight size={17} aria-hidden="true" /></Link>}</div><div className="process-steps">{[1,2,3].map(n => <article key={n}><span className="process-number">0{n}</span><h3>{t(`ed.step${n}`)}</h3><p>{t(`hero.process.step${n}`)}</p><dl><dt>{t("ed.output")}</dt><dd>{t(`ed.output${n}`)}</dd></dl></article>)}</div></section>;
}

function Home() {
  const { t } = useLanguage();
  return <SceneDeck labels={["ed.home", "ed.system", "ed.statement", "ed.selected", "ed.services", "ed.principle", "ed.process", "nav.contact"].map(t)}>
    <section className="editorial-hero" id="top"><div className="ed-meta hero-meta"><span>{t("ed.discipline")}</span><span>{t("ed.location")}</span><span>{t("ed.remote")}</span></div><div className="hero-editorial-top"><div className="platform-seal"><span>iOS<br />Android</span></div><p className="hero-engineering">{t("ed.fromto")}<span>{t("ed.system")}</span></p><div><p className="editorial-intro">{t("ed.intro")}</p><Link className="ed-button orange" to="/work">{t("ed.herocta")}<ArrowUpRight size={18} aria-hidden="true" /></Link></div></div><h1 className="editorial-wordmark"><span>IGOR P.</span><span>RIBEIRO<span className="wordmark-dot">.</span></span></h1><div className="hero-rule"><span>REACT NATIVE / TYPESCRIPT / EXPO</span><a href="#selected-work">{t("visual.follow")}<ArrowDown size={16} aria-hidden="true" /></a></div></section>
    <section className="editorial-demonstration"><div className="demo-orange"><p>{t("ed.platforms")}</p><Smartphone size={52} strokeWidth={1} aria-hidden="true" /><span>ANDROID<br />iOS</span></div><ProjectVisual large /><div className="demo-data"><h2>{t("ed.system")}</h2><dl><div><dt>{t("visual.interface")}</dt><dd>React Native</dd></div><div><dt>{t("visual.offline")}</dt><dd>RealmDB</dd></div><div><dt>{t("visual.delivery")}</dt><dd>OTA / Store</dd></div></dl><p>{t("ed.specialist")}</p></div></section>
    <section className="editorial-statement"><h2>{t("ed.statement")}</h2><div><p>{t("ed.statementbody")}</p><Link className="ed-button" to="/about">{t("nav.about")}<ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>
    <section id="selected-work"><div className="ed-section-heading"><div><h2>{t("ed.selected")}</h2><p>{t("work.intro")}</p></div><Link className="ed-button" to="/work">{t("ed.allwork")}<ArrowUpRight size={17} aria-hidden="true" /></Link></div><WorkGrid /></section>
    <Expertise />
    <section className="editorial-principle"><h2>{t("ed.principle")}</h2><p>{t("ed.principlebody")}</p></section>
    <Process />
    <Footer />
  </SceneDeck>;
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
  else if (pathname === '/services') content = <><div className="ed-page-heading"><h1>{t("ed.services")}</h1><p>{t("ed.expertiseintro")}</p></div><Expertise full />{specialties.map(item => <section className="expertise-expanded" key={item.key}><h2>{t(item.key)}</h2><div><p>{t(item.body)}</p><span className="ed-meta">{item.tech}</span></div></section>)}</>;
  else if (pathname === '/process') content = <><div className="ed-page-heading"><h1>{t("ed.process")}</h1><p>{t("ed.processintro")}</p></div><Process full /></>;
  else if (pathname === '/contact') content = <Contact />;
  else if (slug && !project) content = <div className="ed-page-heading"><h1>{t("notFound.title")}</h1><Link className="ed-button" to="/work">{t("ed.allwork")}<ArrowRight size={18} aria-hidden="true" /></Link></div>;
  else if (project) content = <><div className="ed-case-heading"><div className="ed-meta"><Link to="/work">{t("ed.projects")}</Link><span>{project.category.startsWith("ed.") ? t(project.category) : project.category}</span></div><h1>{t(`portfolio.system${project.id}.title`)}</h1><p>{t(`work.${project.id}.summary`)}</p></div><ProjectVisual id={project.id} large /><div className="case-facts"><div><span>{t("ed.context")}</span><p>{t(`portfolio.system${project.id}.scope`)}</p></div><div><span>STACK</span><p>{project.stack}</p></div></div><section className="editorial-case-story"><article><h2>{t("ed.role")}</h2><p>{t("ed.rolebody")}</p></article><article><h2>{t("ed.decisions")}</h2><p>{t(`portfolio.system${project.id}.description`)}</p></article><details><summary>{t("work.confidential")}</summary><p>{t("portfolio.intro")}</p></details></section><div className="ed-section-heading"><h2>{t("ed.next")}</h2><Link className="ed-button" to="/work">{t("ed.allwork")}<ArrowRight size={18} aria-hidden="true" /></Link></div><WorkGrid exclude={project.id} /></>;
  else content = <><div className="ed-page-heading"><h1>{t("ed.projects")}</h1><p>{t("work.intro")}</p></div><WorkGrid all /><div className="editorial-disclosure"><h2>{t("work.confidential")}</h2><p>{t("portfolio.intro")}</p></div></>;
  return <div className={home ? "editorial-shell editorial-home-shell" : "editorial-shell"}><a className="editorial-skip" href="#content">{t("a11y.skip")}</a><Header /><main id="content" tabIndex={-1}>{content}</main>{!home && <Footer />}</div>;
}
