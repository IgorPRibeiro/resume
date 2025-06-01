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
  "nav.skills": {
    en: "Skills",
    pt: "Habilidades",
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
    en: "I build exceptional digital experiences with cutting-edge technologies, focusing on performance and user experience.",
    pt: "Eu construo experiências digitais excepcionais com tecnologias de ponta, focando em desempenho e experiência do usuário.",
  },
  "hero.cta": {
    en: "Contact Me",
    pt: "Fale Comigo",
  },

  // About Section
  "about.title": {
    en: "About Me",
    pt: "Sobre Mim",
  },
  "about.description": {
    en: "With over 4 years of experience in software development, I specialize in building modern web and mobile applications. I'm passionate about clean code, performance optimization, and creating intuitive user interfaces. My expertise spans the entire development stack, from designing responsive frontends to implementing robust backend systems.",
    pt: "Com mais de 4 anos de experiência em desenvolvimento de software, sou especialista na construção de aplicativos web e mobile modernos. Sou apaixonado por código limpo, otimização de desempenho e criação de interfaces intuitivas. Minha expertise abrange todo o stack de desenvolvimento, desde o design de frontends responsivos até a implementação de sistemas de backend robustos.",
  },

  // Skills Section
  "skills.title": {
    en: "My Skills",
    pt: "Minhas Habilidades",
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
    en: "Work Projects",
    pt: "Projetos de trabalho",
  },
  "portfolio.project1.title": {
    en: "Loja Conceito ( Android - Tablet)",
    pt: "Loja Conceito ( Android - Tablet)",
  },
  "portfolio.project1.description": {
    en: "E-Commerce built in React-Native. Created to meet the rules of a cooperative,this e-commerce has several business rules, from interest calculations for products based on payment condition, order editing, to payment with PIX. Using technologies like Redux for global app data management, order receipt download, and Firebase for monitoring payment status; Main technologies: Redux; Firebase; CodePush (instant updates)",
    pt: "E-commerce desenvolvido em React-Native. Criado para atender às regras de uma cooperativa, este e-commerce possui diversas regras de negócio, desde cálculos de juros para produtos com base na condição de pagamento, edição de pedidos, até pagamento com PIX.Uso de tecnologias como Redux para gerenciamento de dados globais do app, download de comprovante de pedido e Firebase para monitoramento do status de pagamento. Principais tecnologias: Redux, Firebase, CodePush (atualizações instantâneas)",
  },
  "portfolio.project1.company": {
    en: "Globasys",
    pt: "Globasys",
  },
  "portfolio.project2.title": {
    en: "ICoop ( Android - IOS )",
    pt: "ICoop ( Android - IOS )",
  },
  "portfolio.project2.company": {
    en: "Globalsys",
    pt: "Globalsys",
  },
  "portfolio.project2.description": {
    en: "Support in a SuperApp created in React-Native, for both Android and iOS. Inthis application, the user will receive fresh news about the cooperative,including events, and can make purchases with various payment methods through the app, as well as get information about coffee prices. The user can create a new account or log in via social networks (Facebook or Gmail). The app is also aimed at company employees, who can sign and download contracts, view purchase history, and make payments. Several technologies were used, such as Redux for global information management, CodePush for immediate updates, OneSignal for notifications, among others.Main technologies used: Redux,Firebase, CodePush, OneSignal.",
    pt: "Suporte em um SuperApp criado em React-Native, tanto para Android quanto iOS. Neste aplicativo, o usuário recebe notícias atualizadas sobre a cooperativa, incluindo eventos, e pode realizar compras com diversos métodos de pagamento, além de consultar preços do café. O usuário pode criar uma nova conta ou fazer login via redes sociais (Facebook ou Gmail). O app também é voltado para colaboradores da empresa, que podem assinar e baixar contratos, visualizar histórico de compras e efetuar pagamentos. Principais tecnologias utilizadas: Redux, Firebase, CodePush, OneSignal.",
  },
  "portfolio.project3.title": {
    en: "Plamont (Android - IOS)",
    pt: "Plamont (Android - IOS)",
  },
  "portfolio.project3.company": {
    en: "Globalsys",
    pt: "Globalsys",
  },
  "portfolio.project3.description": {
    en: "It is used for creating inspections and security reportis in online and offline mode, loading all necessary information upon logging into the app, so that the user can go to an area without internet access and then send this data.",
    pt: "Ele é usado para criar inspeções e relatórios de segurança no modo online e offline, carregando todas as informações necessárias ao efetuar login no aplicativo, para que o usuário possa ir até uma área sem acesso à internet e então enviar esses dados.",
  },
  "portfolio.project4.title": {
    en: "LeCard Estudante (Android - IOS)",
    pt: "LeCard Estudante (Android - IOS)",
  },
  "portfolio.project4.company": {
    en: "Globalsys",
    pt: "Globalsys",
  },
  "portfolio.project4.description": {
    en: "The Estudante - Le Card app was developed using React Native to deliver a native-like, cross-platform experience for users. The app allows students who use the Le Card Student Card to easily check their balance and view their recent transactions.",
    pt: "O aplicativo Estudante - Le Card foi desenvolvido utilizando React Native para proporcionar uma experiência nativa e multiplataforma aos usuários. A aplicação permite que estudantes que utilizam o cartão Le Card Estudante consultem o saldo e as últimas transações realizadas com seu cartão, de forma prática e acessível.",
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
  "contact.address": {
    en: "Address",
    pt: "Endereço",
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

  // Footer
  "footer.rights": {
    en: "All Rights Reserved",
    pt: "Todos os Direitos Reservados",
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

  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    setLanguage(getBrowserLanguage());
  }, []);

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
