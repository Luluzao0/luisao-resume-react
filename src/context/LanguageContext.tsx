import {createContext, useContext, useEffect, useState, FC, ReactNode, useCallback} from 'react';

type Language = 'pt' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

// All site translations
export const translations: Translations = {
  // Hero
  'hero.title': {pt: 'Luis Lopes', en: 'Luis Lopes'},
  'hero.subtitle': {pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer'},
  'hero.scroll': {pt: 'Rolar', en: 'Scroll'},
  'hero.resume': {pt: 'Currículo', en: 'Resume'},
  'hero.contact': {pt: 'Contato', en: 'Contact'},
  'hero.greeting': {pt: 'Olá mundo, eu sou Luis!', en: "Hello world, I'm Luis!"},
  
  // About
  'about.section': {pt: 'Conheça', en: 'Get to Know'},
  'about.title': {pt: 'Sobre Mim', en: 'About Me'},
  'about.description': {
    pt: 'Olá! Sou Luis Guilherme, Desenvolvedor Full Stack e formando em Engenharia da Computação pela UEMA. Atuo como Desenvolvedor de Software no IMESC (Instituto Maranhense de Estudos Socioeconômicos e Cartográficos), modernizando plataformas como IMESC Amplo, GeoportalSEI e DATA-IMESC. Também sou Pesquisador Científico no LAPS (Laboratório de Processamento de Sinais), desenvolvendo soluções em Machine Learning, IA e sistemas web escaláveis. Possuo experiência internacional na TELUS International (Vancouver) e nacional na Technos Engenharia, onde trabalhei com desenvolvimento full stack, otimização de performance, sistemas financeiros e algoritmos para mercado de ações. Meu stack inclui React, Next.js, TypeScript, Python, Node.js, além de tecnologias de Cloud (AWS, GCP, Azure), DevOps (Docker, Kubernetes) e bancos de dados. Sempre em busca de novos desafios e aprendizado contínuo em arquitetura cloud, IA/ML e tecnologias emergentes.',
    en: "Hi! I'm Luis Guilherme, a Full Stack Developer and Computer Engineering undergraduate at UEMA. I work as a Software Developer at IMESC (Maranhão Institute of Socio-Economic and Cartographic Studies), modernizing platforms like IMESC Amplo, GeoportalSEI, and DATA-IMESC. I'm also a Scientific Researcher at LAPS (Signal Processing Laboratory), developing Machine Learning, AI, and scalable web solutions. I have international experience at TELUS International (Vancouver) and national experience at Technos Engenharia, where I worked with full stack development, performance optimization, financial systems, and stock market algorithms. My stack includes React, Next.js, TypeScript, Python, Node.js, plus Cloud technologies (AWS, GCP, Azure), DevOps (Docker, Kubernetes), and databases. Always seeking new challenges and continuous learning in cloud architecture, AI/ML, and emerging technologies."
  },
  'about.location': {pt: 'Localização', en: 'Location'},
  'about.age': {pt: 'Idade', en: 'Age'},
  'about.nationality': {pt: 'Nacionalidade', en: 'Nationality'},
  'about.interests': {pt: 'Interesses', en: 'Interests'},
  'about.study': {pt: 'Estudo', en: 'Study'},
  'about.employment': {pt: 'Emprego', en: 'Employment'},
  'about.location.value': {pt: 'São Luís, MA', en: 'São Luís, MA'},
  'about.nationality.value': {pt: 'Brasileiro', en: 'Brazilian'},
  'about.interests.value': {pt: 'Tecnologia, Física, Matemática', en: 'Tech, Physics, Math'},
  'about.study.value': {pt: 'Universidade Estadual do Maranhão', en: 'State University of Maranhão'},
  
  // Portfolio
  'portfolio.section': {pt: 'Meus Trabalhos', en: 'My Works'},
  'portfolio.title': {pt: 'Portfólio', en: 'Portfolio'},
  'portfolio.subtitle': {pt: 'Confira alguns dos meus projetos e trabalhos recentes', en: 'Check out some of my recent projects and works'},
  
  // Resume
  'resume.section': {pt: 'Minha Trajetória', en: 'My Journey'},
  'resume.title': {pt: 'Currículo', en: 'Resume'},
  'resume.education': {pt: 'Educação', en: 'Education'},
  'resume.experience': {pt: 'Experiência', en: 'Experience'},
  'resume.skills': {pt: 'Habilidades', en: 'Skills'},
  
  // Education
  'education.computereng.title': {pt: 'Engenharia da Computação', en: 'Computer Engineering'},
  'education.computereng.date': {pt: 'Agosto 2022 - Presente', en: 'August 2022 - Present'},
  'education.computereng.content': {
    pt: 'Sou um pesquisador apaixonado e dedicado no Laboratório de Processamento de Sinais (LAPS) com forte foco na interseção entre tecnologia web e bancos de dados. Minha pesquisa envolve explorar novas abordagens para melhorar a performance, segurança e eficiência de sistemas web e bancos de dados, aproveitando as mais recentes tecnologias e inovações.',
    en: 'I am a passionate and dedicated researcher at the Signal Processing Laboratory (LAPS) with a strong focus on the intersection between web technology and databases. My research involves exploring new approaches to improving the performance, security and efficiency of web systems and databases by leveraging the latest technology and innovation.'
  },
  
  // Experience
  'experience.laps.title': {pt: 'Pesquisador Científico', en: 'Scientific Researcher'},
  'experience.laps.date': {pt: 'Setembro 2023 - Presente', en: 'September 2023 - Present'},
  'experience.laps.content': {
    pt: 'Pesquisador e desenvolvedor no Laboratório de Aquisição e Processamento de Sinais (LAPS). Habilidades: Pesquisador · Java · Desenvolvimento back-end · Desenvolvimento front-end · Desenvolvimento web',
    en: 'Researcher and developer at the Signal Acquisition and Processing Laboratory (LAPS). Skills: Researcher · Java · Back-end development · Front-end development · Web development'
  },
  
  'experience.technos.title': {pt: 'Desenvolvedor Financeiro', en: 'Financial Developer'},
  'experience.technos.date': {pt: 'Janeiro 2022 - Agosto 2024', en: 'January 2022 - August 2024'},
  'experience.technos.content': {
    pt: 'Desenvolvedor financeiro de sistemas de pagamento usando algoritmos para coletar e usar dados para aplicações no mercado de ações. Habilidades: Pesquisador · Mercado de Ações · Desenvolvimento back-end · IA · Machine Learning · Economia',
    en: 'Financial developer of payment systems using algorithms to collect and use data for applications on stock market. Skills: Researcher · Stock Market · Back-end development · AI · Machine Learning · Economics'
  },
  
  'experience.telus.title': {pt: 'Desenvolvedor de Software', en: 'Software Developer'},
  'experience.telus.date': {pt: 'Janeiro 2023 - Setembro 2023', en: 'January 2023 - September 2023'},
  'experience.telus.content': {
    pt: 'Destaco meu trabalho em um projeto de desenvolvimento web para um cliente de e-commerce. Neste projeto, fui responsável por criar uma nova interface de usuário para o site existente, com ênfase na otimização de performance e responsividade completa. Habilidades: Desenvolvimento back-end · Desenvolvimento front-end · Desenvolvimento web',
    en: 'I would highlight my work on a web development project for an e-commerce client. In this project, I was tasked with creating a new user interface for the existing website, with an emphasis on optimizing performance and making it fully responsive. Skills: Back-end development · Front-end development · Web development'
  },
  
  'experience.imesc.title': {pt: 'Desenvolvedor de Software', en: 'Software Developer'},
  'experience.imesc.date': {pt: 'Janeiro 2024 - Presente', en: 'January 2024 - Present'},
  'experience.imesc.content': {
    pt: 'Profissional dedicado que trabalha no IMESC, Instituto Maranhense de Estudos Socioeconômicos e Cartográficos. Minha missão é promover o desenvolvimento socioeconômico do Maranhão através de pesquisas, estudos e análises. Para isso, estamos modernizando nossos produtos digitais, como o app IMESC, a plataforma IMESC Amplo, o GeoportalSEI ZEE-Ma e a plataforma DATA-IMESC. Habilidades: Cloud · Desenvolvimento web',
    en: 'A dedicated professional who works at IMESC, the Maranhão Institute of Socio-Economic and Cartographic Studies. My mission is to promote the socio-economic development of Maranhão through research, studies and analysis. To this end, we are modernizing our digital products, such as the IMESC app, the IMESC Amplo platform, the GeoportalSEI ZEE-Ma and the DATA-IMESC platform. Skills: Clouding · Web development'
  },
  
  // Skills
  'skills.spoken': {pt: 'Idiomas', en: 'Spoken languages'},
  'skills.frontend': {pt: 'Desenvolvimento Frontend', en: 'Frontend development'},
  'skills.backend': {pt: 'Desenvolvimento Backend', en: 'Backend development'},
  'skills.mobile': {pt: 'Desenvolvimento Mobile', en: 'Mobile development'},
  'skills.devops': {pt: 'DevOps', en: 'DevOps'},
  'skills.database': {pt: 'Banco de Dados', en: 'Database'},
  'skills.cloud': {pt: 'Cloud', en: 'Clouding'},
  'skills.apis': {pt: 'APIs', en: 'APIs'},
  'skills.aiml': {pt: 'IA & ML', en: 'IA & ML'},
  
  // Contact
  'contact.section': {pt: 'Entre em Contato', en: 'Get in Touch'},
  'contact.title': {pt: 'Contato', en: 'Contact'},
  'contact.subtitle': {pt: 'Gostou do meu conteúdo? Entre em contato!', en: 'Enjoyed my content? Get in touch!'},
  
  // Testimonials
  'testimonials.section': {pt: 'O Que Dizem', en: 'What They Say'},
  'testimonials.title': {pt: 'Depoimentos', en: 'Testimonials'},
  'testimonial.1': {
    pt: 'Use esta oportunidade para testemunhar a eficiência perfeita do nosso Sistema de Registro de Clientes, um componente chave do compromisso da Technos com a excelência. Nosso sistema CRUD para gerenciamento de clientes define o padrão ouro, revolucionando como empresas interagem com seus dados de clientes.',
    en: 'Use this opportunity to witness the seamless efficiency of our Customer Registration System, a key component of Technos commitment to excellence. Our CRUD system for client management sets the gold standard, revolutionizing how businesses engage with their customer data.'
  },
  'testimonial.2': {
    pt: 'Se você está procurando mergulhar no mundo de sistemas inteligentes, confie em mim, Luis Lopes, Python é seu guia para aprender. Tem as bibliotecas, a comunidade, e o toque mágico para fazer seus projetos decolarem! 🚀',
    en: 'If you are looking to dive into the world of intelligent systems, trust me, Luis Lopes, Python is your guide to learn. Its got the libraries, the community, and the magic touch to make your projects soar! 🚀'
  },
  'testimonial.3': {
    pt: 'Luis Lopes é um profissional multifacetado e dinâmico que opera na interseção de desenvolvimento web, machine learning e inteligência artificial. Com uma paixão por aproveitar tecnologias de ponta para criar soluções inovadoras, Luis Lopes estabeleceu uma reputação por entregar projetos de alta qualidade que integram perfeitamente esses diversos campos.',
    en: 'Luis Lopes is a multifaceted and dynamic professional who operates at the intersection of web development, machine learning, and artificial intelligence. With a passion for leveraging cutting-edge technologies to create innovative solutions, Luis Lopes has established a reputation for delivering high-quality projects that seamlessly integrate these diverse fields.'
  },
  
  // Footer
  'footer.rights': {pt: 'Todos os direitos reservados.', en: 'All rights reserved.'},
  'footer.made': {pt: 'Feito com', en: 'Made with'},
  'footer.top': {pt: 'Voltar ao topo', en: 'Back to top'},
  
  // Navigation
  'nav.about': {pt: 'Sobre', en: 'About'},
  'nav.resume': {pt: 'Currículo', en: 'Resume'},
  'nav.portfolio': {pt: 'Portfólio', en: 'Portfolio'},
  'nav.testimonials': {pt: 'Depoimentos', en: 'Testimonials'},
  'nav.contact': {pt: 'Contato', en: 'Contact'},
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: FC<{children: ReactNode}> = ({children}) => {
  const [language, setLanguage] = useState<Language>('pt');

  // SSR renders 'pt'; on the client, restore the saved choice or fall back to the browser language.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('language');
    } catch {}
    const preferred = saved ?? (navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en');
    setLanguage(preferred === 'en' ? 'en' : 'pt');
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => {
      const next = prev === 'pt' ? 'en' : 'pt';
      try {
        localStorage.setItem('language', next);
      } catch {}
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string): string => {
      const translation = translations[key];
      if (!translation) {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
      return translation[language];
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{language, toggleLanguage, t}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
