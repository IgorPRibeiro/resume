import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "pt";

interface Translations {
  [key: string]: {
    en: string;
    pt: string;
  };
}

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  // Navigation
  "nav.about": {
    en: "About",
    pt: "Sobre",
  },
  "nav.experience": {
    en: "Experience",
    pt: "Experiência",
  },
  "nav.skills": {
    en: "Skills",
    pt: "Habilidades",
  },
  "nav.tools": {
    en: "Tools",
    pt: "Ferramentas",
  },
  "nav.services": {
    en: "What I Do",
    pt: "O Que Eu Faço",
  },
  "nav.portfolio": {
    en: "Portfolio",
    pt: "Portfólio",
  },
  "nav.contact": {
    en: "Contact",
    pt: "Contato",
  },

  // Hero Section
  "hero.greeting": {
    en: "Hello, I'm",
    pt: "Olá, eu sou",
  },
  "hero.title": {
    en: "Full-stack Developer",
    pt: "Desenvolvedor Full-stack",
  },
  "hero.description": {
    en: "I build exceptional digital experiences with cutting-edge technologies, focusing on performance and user experience. I work remotely, from scoping to store release.",
    pt: "Eu construo experiências digitais excepcionais com tecnologias de ponta, focando em desempenho e experiência do usuário. Trabalho remoto, do escopo à publicação nas lojas.",
  },
  "hero.available": {
    en: "Available for freelance projects",
    pt: "Disponível para projetos freelance",
  },
  "hero.cta": {
    en: "Contact Me",
    pt: "Fale Comigo",
  },
  "hero.cta.secondary": {
    en: "View projects",
    pt: "Ver projetos",
  },

  // Hero — os três números de rodapé do letreiro
  "hero.stat.years.value": {
    en: "4+",
    pt: "4+",
  },
  "hero.stat.years.label": {
    en: "Years of experience",
    pt: "Anos de experiência",
  },
  "hero.stat.platforms.value": {
    en: "iOS · Android · Web",
    pt: "iOS · Android · Web",
  },
  "hero.stat.platforms.label": {
    en: "Platforms",
    pt: "Plataformas",
  },
  "hero.stat.remote.value": {
    en: "Remote",
    pt: "Remoto",
  },
  "hero.stat.remote.label": {
    en: "Brazil and abroad",
    pt: "Brasil e exterior",
  },

  // Hero — painéis laterais
  "hero.process.title": {
    en: "How I work",
    pt: "Como eu trabalho",
  },
  "hero.process.step1": {
    en: "Scoping and estimate before any code is written.",
    pt: "Levantamento de escopo e estimativa antes de começar.",
  },
  "hero.process.step2": {
    en: "Delivery in cycles, with a test build at every stage.",
    pt: "Entregas em ciclos, com build para teste a cada etapa.",
  },
  "hero.process.step3": {
    en: "Store release and post-launch support.",
    pt: "Publicação nas lojas e acompanhamento pós-lançamento.",
  },
  "hero.stack.title": {
    en: "Core stack",
    pt: "Stack principal",
  },
  "hero.tools.title": {
    en: "Free tools",
    pt: "Ferramentas grátis",
  },
  "hero.tools.description": {
    en: "CPF, CNPJ and password generators for testing.",
    pt: "Geradores de CPF, CNPJ e senha para testes.",
  },

  // About Section
  "about.title": {
    en: "About Me",
    pt: "Sobre Mim",
  },
  "about.p1": {
    en: "Full-stack developer with over 4 years of experience, focused on mobile applications that have to work outside the ideal scenario: offline first architectures, automatic data sync, robust caches and audio streaming through native bridges. I also handle what comes after the code — App Store and Google Play releases, OTA updates and bundle security.",
    pt: "Desenvolvedor full-stack com mais de 4 anos de experiência, com foco em aplicativos móveis que precisam funcionar bem fora do cenário ideal: arquiteturas offline first, sincronização automática de dados, caches robustos e streaming de áudio via bridges nativas. Também cuido do que vem depois do código — publicação na App Store e no Google Play, atualizações OTA e segurança do bundle.",
  },
  "about.p2": {
    en: "Today I'm a Front End Developer at Globalsys Soluções em TI and an undergraduate student at Multivix. I take on freelance projects 100% remotely, from scoping to release.",
    pt: "Hoje sou Front End Developer na Globalsys Soluções em TI e curso Bacharelado na Multivix. Atendo projetos freelance de forma 100% remota, do escopo à publicação.",
  },
  "about.fact.email": {
    en: "Email",
    pt: "Email",
  },
  "about.fact.base": {
    en: "Based in",
    pt: "Base",
  },
  "about.fact.base.value": {
    en: "Espírito Santo, Brazil · 100% remote",
    pt: "Espírito Santo, Brasil · 100% remoto",
  },
  "about.fact.education": {
    en: "Education",
    pt: "Formação",
  },
  "about.fact.education.value": {
    en: "Bachelor's at Multivix · Technical degree at SENAI",
    pt: "Bacharelado na Multivix · Técnico no SENAI",
  },
  "about.fact.languages": {
    en: "Languages",
    pt: "Idiomas",
  },
  "about.fact.languages.value": {
    en: "Native Portuguese · American Sign Language (intermediate)",
    pt: "Português nativo · Libras americana (intermediário)",
  },

  // Experience Section
  "experience.title": {
    en: "Experience",
    pt: "Experiência",
  },
  "experience.globalsys.role": {
    en: "Front End Developer",
    pt: "Front End Developer",
  },
  "experience.globalsys.period": {
    en: "Nov 2021 — present",
    pt: "Nov 2021 — atual",
  },
  "experience.globalsys.item1": {
    en: "Native bridges for audio streaming in radio-style applications.",
    pt: "Bridges nativas para streaming de áudio em aplicativos no formato de rádio.",
  },
  "experience.globalsys.item2": {
    en: "Robust cache architectures to optimize performance.",
    pt: "Arquiteturas de cache robustas para otimizar desempenho.",
  },
  "experience.globalsys.item3": {
    en: "Scalable offline first architectures, handling and storing large volumes of data with automatic sync on reconnect.",
    pt: "Arquiteturas offline first escaláveis, com manipulação e armazenamento de grandes volumes de dados e sincronização automática ao reconectar.",
  },
  "experience.globalsys.item4": {
    en: "JavaScript bundle obfuscation in React Native, plus method and class obfuscation with ProGuard on Android.",
    pt: "Ofuscação do bundle JavaScript em React Native e de métodos e classes com ProGuard no Android.",
  },
  "experience.globalsys.item5": {
    en: "App releases on the App Store and Google Play.",
    pt: "Publicação de aplicativos na App Store e no Google Play.",
  },
  "experience.globalsys.item6": {
    en: "In-house OTA update solution replacing a discontinued tool, making it possible to ship new bundles quickly.",
    pt: "Solução própria de atualização OTA para substituir uma ferramenta descontinuada, permitindo publicar novos bundles rapidamente.",
  },
  "experience.easyfarm.role": {
    en: "Flutter Developer",
    pt: "Flutter Developer",
  },
  "experience.easyfarm.period": {
    en: "Jun 2021 — Nov 2021",
    pt: "Jun 2021 — Nov 2021",
  },
  "experience.easyfarm.item1": {
    en: "Background geolocation and route mapping between points.",
    pt: "Geolocalização em background e mapeamento de rotas entre pontos.",
  },
  "experience.easyfarm.item2": {
    en: "Fixed drifts ranging from meters to kilometers in background point logging, raising accuracy to practically 100%.",
    pt: "Correção de desvios de metros a quilômetros no registro de pontos em background, elevando a precisão para praticamente 100%.",
  },
  "experience.easyfarm.item3": {
    en: "Offline data handling and synchronization.",
    pt: "Tratamento e sincronização de dados offline.",
  },
  "experience.multivix.period": {
    en: "Jun 2021 — present",
    pt: "Jun 2021 — atual",
  },
  "experience.multivix.title": {
    en: "Bachelor's degree — Multivix",
    pt: "Bacharelado — Multivix",
  },
  "experience.multivix.description": {
    en: "Mathematical logic, business process modeling, data structures and computer networks, with mobile projects built as an internship requirement.",
    pt: "Lógica matemática, modelagem de processos de negócio, estruturas de dados e redes de computadores, com projetos mobile desenvolvidos como requisito de estágio.",
  },
  "experience.senai.period": {
    en: "Jan 2019 — Jan 2021",
    pt: "Jan 2019 — Jan 2021",
  },
  "experience.senai.title": {
    en: "Technical degree — SENAI, Vitória",
    pt: "Ensino técnico — SENAI, Vitória",
  },
  "experience.senai.description": {
    en: "Programming logic and applied mathematics with Python, operating systems and computing fundamentals, plus a project applying SOLID principles with C# and ASP.NET.",
    pt: "Lógica de programação e matemática aplicada com Python, sistemas operacionais e fundamentos de computação, além de um projeto aplicando princípios SOLID com C# e ASP.NET.",
  },

  // Skills Section
  "skills.title": {
    en: "My Skills",
    pt: "Minhas Habilidades",
  },
  "skills.languages.title": {
    en: "Languages",
    pt: "Linguagens",
  },
  "skills.languages.value": {
    en: "JavaScript · TypeScript · Java · Swift · Python · Go",
    pt: "JavaScript · TypeScript · Java · Swift · Python · Go",
  },
  "skills.tech.title": {
    en: "Technologies and tools",
    pt: "Tecnologias e ferramentas",
  },
  "skills.tech.value": {
    en: "React Native · Expo · Flutter · Android · Swift StoryBoard · React · Next.js · Node.js · Realm · Docker · .NET Core",
    pt: "React Native · Expo · Flutter · Android · Swift StoryBoard · React · Next.js · Node.js · Realm · Docker · .NET Core",
  },
  "skills.specialties.title": {
    en: "Specialties",
    pt: "Especialidades",
  },
  "skills.specialties.value": {
    en: "Offline first · Data sync · Native bridges · OTA updates · Store releases · Bundle obfuscation and security",
    pt: "Offline first · Sincronização de dados · Bridges nativas · Atualizações OTA · Publicação nas lojas · Ofuscação e segurança de bundle",
  },

  // What I Do Section
  "services.title": {
    en: "What I Do",
    pt: "O Que Eu Faço",
  },
  "services.frontend.title": {
    en: "Frontend Development",
    pt: "Desenvolvimento Frontend",
  },
  "services.frontend.description": {
    en: "Building responsive, accessible web applications with modern frameworks like React, Vue, and Angular.",
    pt: "Construção de aplicações web responsivas e acessíveis com frameworks modernos como React, Vue e Angular.",
  },
  "services.backend.title": {
    en: "Backend Development",
    pt: "Desenvolvimento Backend",
  },
  "services.backend.description": {
    en: "Creating robust, scalable server-side applications with Node.js, Express, and various databases.",
    pt: "Criação de aplicações server-side robustas e escaláveis com Node.js, Express e diferentes bancos de dados.",
  },
  "services.mobile.title": {
    en: "Mobile Development",
    pt: "Desenvolvimento Mobile",
  },
  "services.mobile.description": {
    en: "Specialist in developing cross-platform mobile applications using React Native and native technologies.",
    pt: "Especialista no desenvolvimento de aplicativos móveis multiplataforma com React Native e tecnologias nativas.",
  },

  // Portfolio Section
  "portfolio.title": {
    en: "Types of Systems I Built",
    pt: "Tipos de sistemas que construí",
  },
  "portfolio.intro": {
    en: "Client deliverables are covered by confidentiality agreements, so I describe them by the type of system, the problem solved and the technical decisions — with no client names, brands or product screenshots. Details can be discussed in an interview, within what my agreements allow.",
    pt: "As entregas para clientes são cobertas por acordos de confidencialidade, então descrevo por tipo de sistema, problema resolvido e decisões técnicas — sem nome de cliente, marca ou captura de tela de produto. Detalhes podem ser conversados em entrevista, no limite do que meus acordos permitem.",
  },
  "portfolio.system1.title": {
    en: "B2B mobile commerce app for tablet",
    pt: "App de compras B2B para tablet",
  },
  "portfolio.system1.scope": {
    en: "Android · in-store sales",
    pt: "Android · venda em loja",
  },
  "portfolio.system1.description": {
    en: "Sales application for use at the counter, with heavy business rules: price and interest calculation by payment terms, order editing, instant payment, receipt generation and payment-status monitoring. Global state with Redux and over-the-air releases to fix issues without waiting for store review.",
    pt: "Aplicação de vendas para uso no balcão, com forte carga de regras de negócio: cálculo de preço e juros por condição de pagamento, edição de pedido, pagamento instantâneo, geração de comprovante e monitoramento do status do pagamento. Estado global com Redux e publicação over-the-air para corrigir falhas sem esperar revisão de loja.",
  },
  "portfolio.system2.title": {
    en: "Self-service SuperApp",
    pt: "SuperApp de autoatendimento",
  },
  "portfolio.system2.scope": {
    en: "Android + iOS · relationship and services",
    pt: "Android + iOS · relacionamento e serviços",
  },
  "portfolio.system2.description": {
    en: "Multi-profile app joining content, purchases and document handling in one place: news and events feed from a headless CMS, purchase flow with several payment methods, price lookup, contract signing and download, transaction history, sign-up and social login, plus segmented push notifications.",
    pt: "App multiperfil que reúne conteúdo, compras e documentos em um só lugar: feed de notícias e eventos vindo de CMS headless, fluxo de compra com vários meios de pagamento, consulta de preços, assinatura e download de contratos, histórico de transações, cadastro e login social, além de notificações push segmentadas.",
  },
  "portfolio.system3.title": {
    en: "Offline-first field inspection app",
    pt: "App de inspeção de campo offline-first",
  },
  "portfolio.system3.scope": {
    en: "Android + iOS · field operations and safety",
    pt: "Android + iOS · operação de campo e segurança",
  },
  "portfolio.system3.description": {
    en: "Tool for filling in inspections and safety reports in areas with no connectivity. All the data needed for the day is pre-loaded at login into a local database; forms, photos and evidence are stored on the device and synced when the connection returns, with conflict and retry handling.",
    pt: "Ferramenta para preencher inspeções e relatórios de segurança em áreas sem conectividade. Todos os dados necessários para o dia são pré-carregados no login em banco local; formulários, fotos e evidências ficam no dispositivo e sincronizam quando a conexão volta, com tratamento de conflito e reenvio.",
  },
  "portfolio.system4.title": {
    en: "Prepaid card balance and statement app",
    pt: "App de saldo e extrato de cartão pré-pago",
  },
  "portfolio.system4.scope": {
    en: "Android + iOS · benefits and payments",
    pt: "Android + iOS · benefícios e pagamentos",
  },
  "portfolio.system4.description": {
    en: "Consumer app for cardholders to check available balance, daily limits and recent transactions. Focus on a light onboarding, clear reading of financial data on small screens and reactive state so balance and statement stay consistent after each refresh.",
    pt: "App de consumo para portadores consultarem saldo disponível, limites diários e últimas transações. Foco em onboarding leve, leitura clara de dado financeiro em tela pequena e estado reativo para manter saldo e extrato consistentes após cada atualização.",
  },

  // Open Source Section
  "opensource.title": {
    en: "Open source projects",
    pt: "Projetos abertos",
  },
  "opensource.all": {
    en: "See everything on GitHub",
    pt: "Ver tudo no GitHub",
  },
  "opensource.ota.description": {
    en: "Local OTA updates for React Native: swap the bundle without going through a new store review.",
    pt: "Atualização OTA local para React Native: troca do bundle sem passar por nova revisão nas lojas.",
  },
  "opensource.jwt.description": {
    en: "macOS app that generates the Sign in with Apple Client Secret, signing an ES256 JWT for server authentication.",
    pt: "App macOS que gera o Client Secret do Sign in with Apple, assinando um JWT em ES256 para autenticação de servidores.",
  },
  "opensource.overlay.description": {
    en: "60 FPS animated overlay combining Skia and Reanimated in React Native.",
    pt: "Overlay animado a 60 FPS combinando Skia e Reanimated em React Native.",
  },
  "opensource.iphost.description": {
    en: "Command line application for discovering public IPs and hosts.",
    pt: "Aplicação de linha de comando para descobrir IPs públicos e hosts.",
  },
  "opensource.coins.description": {
    en: "Back office for the Coins project, for managing products and orders.",
    pt: "Back office do projeto Coins, para gerenciar produtos e pedidos.",
  },
  "opensource.pusher.description": {
    en: "Contribution to the official Pusher SDK for React Native, covering real-time WebSockets.",
    pt: "Contribuição no SDK oficial do Pusher para React Native, sobre WebSockets em tempo real.",
  },

  // Contact Section
  "contact.title": {
    en: "Get In Touch",
    pt: "Entre Em Contato",
  },
  "contact.description": {
    en: "Feel free to reach out for collaborations or just a friendly chat.",
    pt: "Sinta-se à vontade para entrar em contato para colaborações ou apenas para uma conversa amigável.",
  },
  "contact.email": {
    en: "Email",
    pt: "E-mail",
  },
  "contact.phone": {
    en: "Phone",
    pt: "Telefone",
  },
  "contact.workModel": {
    en: "Work model",
    pt: "Modelo de trabalho",
  },
  "contact.workModel.value": {
    en: "100% remote, across Brazil and abroad",
    pt: "100% remoto, para todo o Brasil e exterior",
  },
  "contact.form.name": {
    en: "Name",
    pt: "Nome",
  },
  "contact.form.email": {
    en: "Email",
    pt: "E-mail",
  },
  "contact.form.message": {
    en: "Message",
    pt: "Mensagem",
  },
  "contact.form.submit": {
    en: "Send Message",
    pt: "Enviar Mensagem",
  },

  // Tools Page
  "tools.title": {
    en: "Tools",
    pt: "Ferramentas",
  },
  "tools.description": {
    en: "Test-data generators for developers: documents with valid check digits to exercise form validation, and random passwords for staging accounts.",
    pt: "Geradores de dado de teste para quem desenvolve: documentos com dígitos verificadores válidos para exercitar a validação de formulário, e senha sorteada para conta de homologação.",
  },
  "tools.privacy": {
    en: "Everything is generated in your browser. No value leaves this page and nothing is stored.",
    pt: "Tudo é gerado no seu navegador. Nenhum valor sai desta página e nada é armazenado.",
  },
  "tools.back": {
    en: "Back to the start",
    pt: "Voltar ao início",
  },
  "tools.generate": {
    en: "Generate",
    pt: "Gerar",
  },
  "tools.copy": {
    en: "Copy",
    pt: "Copiar",
  },
  "tools.copied": {
    en: "Copied",
    pt: "Copiado",
  },
  "tools.format": {
    en: "Format",
    pt: "Formato",
  },
  "tools.format.masked": {
    en: "Punctuated",
    pt: "Com pontuação",
  },
  "tools.format.plain": {
    en: "No punctuation",
    pt: "Sem pontuação",
  },

  "tools.cpf.title": {
    en: "CPF generator",
    pt: "Gerador de CPF",
  },
  "tools.cpf.description": {
    en: "A CPF with valid check digits. Sequences of a single repeated digit are never produced — they satisfy the formula but any real registry rejects them.",
    pt: "Um CPF com dígitos verificadores válidos. Sequências de um dígito repetido nunca saem — elas fecham a fórmula, mas qualquer cadastro real recusa.",
  },

  "tools.cnpj.title": {
    en: "CNPJ generator",
    pt: "Gerador de CNPJ",
  },
  "tools.cnpj.description": {
    en: "The alphanumeric format from IN RFB 2.229/2024, in force from July 2026 — and the legacy numeric one, which keeps working alongside it.",
    pt: "O formato alfanumérico da IN RFB 2.229/2024, em vigor a partir de julho de 2026 — e o numérico antigo, que segue valendo ao lado dele.",
  },
  "tools.cnpj.standard": {
    en: "Standard",
    pt: "Padrão",
  },
  "tools.cnpj.alphanumeric": {
    en: "Alphanumeric (new)",
    pt: "Alfanumérico (novo)",
  },
  "tools.cnpj.numeric": {
    en: "Numeric (legacy)",
    pt: "Numérico (antigo)",
  },

  "tools.password.title": {
    en: "Password generator",
    pt: "Gerador de senha",
  },
  "tools.password.description": {
    en: "Drawn from the browser's cryptographic source, with at least one character from every set you keep on.",
    pt: "Sorteada pela fonte criptográfica do navegador, com pelo menos um caractere de cada conjunto que você deixar ligado.",
  },
  "tools.password.length": {
    en: "Length",
    pt: "Comprimento",
  },
  "tools.password.sets": {
    en: "Character sets",
    pt: "Conjuntos",
  },
  "tools.password.readability": {
    en: "Readability",
    pt: "Leitura",
  },
  "tools.password.ambiguous": {
    en: "Avoid ambiguous characters",
    pt: "Evitar caracteres ambíguos",
  },
  "tools.password.bits": {
    en: "bits of entropy",
    pt: "bits de entropia",
  },
  "tools.password.set.lowercase": {
    en: "Lowercase",
    pt: "Minúsculas",
  },
  "tools.password.set.uppercase": {
    en: "Uppercase",
    pt: "Maiúsculas",
  },
  "tools.password.set.digits": {
    en: "Digits",
    pt: "Números",
  },
  "tools.password.set.symbols": {
    en: "Symbols",
    pt: "Símbolos",
  },
  "tools.password.strength.weak": {
    en: "Weak",
    pt: "Fraca",
  },
  "tools.password.strength.fair": {
    en: "Fair",
    pt: "Razoável",
  },
  "tools.password.strength.strong": {
    en: "Strong",
    pt: "Forte",
  },
  "tools.password.strength.excellent": {
    en: "Excellent",
    pt: "Excelente",
  },

  // Footer
  "footer.rights": {
    en: "All Rights Reserved",
    pt: "Todos os Direitos Reservados",
  },

  // Acessibilidade
  "a11y.skip": {
    en: "Skip to content",
    pt: "Pular para o conteúdo",
  },

  // 404
  "notFound.code": {
    en: "404",
    pt: "404",
  },
  "notFound.title": {
    en: "This page doesn't exist",
    pt: "Esta página não existe",
  },
  "notFound.description": {
    en: "The address you followed doesn't lead anywhere on this site.",
    pt: "O endereço que você seguiu não leva a lugar nenhum neste site.",
  },
  "notFound.cta": {
    en: "Back to the start",
    pt: "Voltar ao início",
  },
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getBrowserLanguage = (): Language => {
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language.split("-")[0];
      return browserLang === "pt" ? "pt" : "en";
    }
    return "en";
  };

  // Resolvido no primeiro render: iniciar em "en" e corrigir depois faz o
  // visitante brasileiro ver a vitrine em inglês por um quadro.
  const [language, setLanguage] = useState<Language>(getBrowserLanguage);

  // O idioma do documento acompanha o da vitrine: é o que faz o navegador
  // hifenizar, ler em voz alta e escolher a forma certa da letra.
  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
