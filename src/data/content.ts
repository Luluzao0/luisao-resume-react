import {Briefcase, Calendar, Flag, GraduationCap, MapPin, Sparkles} from 'lucide-react';

// All site content lives here. Every user-facing string is {pt, en}.
export type L = {pt: string; en: string};

const l = (pt: string, en: string = pt): L => ({pt, en});

// Public URL of the site (no trailing slash). The old devluisao.tech domain no longer resolves.
export const siteUrl = 'https://luisao-resume-react.vercel.app';

export const meta = {
  title: 'Luis Lopes | Desenvolvedor Full Stack & Engenheiro de Computação',
  description:
    'Luis Lopes - Desenvolvedor Full Stack, Engenheiro de Computação, especialista em React, Python, Machine Learning e IA. Portfolio profissional com projetos de desenvolvimento web, mobile e inteligência artificial. São Luís, Maranhão, Brasil.',
};

export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Resume: 'resume',
  Portfolio: 'portfolio',
  Testimonials: 'testimonials',
  Contact: 'contact',
} as const;
export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const nav: {id: SectionId; label: L}[] = [
  {id: SectionId.About, label: l('Sobre', 'About')},
  {id: SectionId.Resume, label: l('Currículo', 'Resume')},
  {id: SectionId.Portfolio, label: l('Projetos', 'Projects')},
  {id: SectionId.Testimonials, label: l('Depoimentos', 'Testimonials')},
  {id: SectionId.Contact, label: l('Contato', 'Contact')},
];

export const links = {
  github: 'https://github.com/luluzao0',
  linkedin: 'https://www.linkedin.com/in/1Lgl/',
  resume: 'https://drive.google.com/file/d/15yDpAIwycrXCuKfVmUlLFVQAQAOpnvCd/view?usp=sharing',
  map: 'https://maps.app.goo.gl/azXPCz153u4pRs4W7',
};

export const hero = {
  name: 'Luis Lopes',
  role: l('Desenvolvedor Full Stack', 'Full Stack Developer'),
  greeting: l('Olá mundo, eu sou Luis!', "Hello world, I'm Luis!"),
  resume: l('Currículo', 'Resume'),
  contact: l('Contato', 'Contact'),
};

export const about = {
  eyebrow: l('Conheça', 'Get to know'),
  title: l('Sobre mim', 'About me'),
  text: l(
    'Olá! Sou Luis Guilherme, Desenvolvedor Full Stack e formando em Engenharia da Computação pela UEMA. Atuo como Desenvolvedor de Software no IMESC, modernizando plataformas como IMESC Amplo, GeoportalSEI e DATA-IMESC, e como Pesquisador Científico no LAPS, desenvolvendo soluções em Machine Learning, IA e sistemas web escaláveis. Tenho experiência internacional na TELUS International (Vancouver) e trabalhei na Technos Engenharia com sistemas financeiros e algoritmos para mercado de ações. Meu stack inclui React, Next.js, TypeScript, Python e Node.js, além de Cloud (AWS, GCP, Azure) e DevOps (Docker, Kubernetes).',
    "Hi! I'm Luis Guilherme, a Full Stack Developer and Computer Engineering undergraduate at UEMA. I work as a Software Developer at IMESC, modernizing platforms like IMESC Amplo, GeoportalSEI and DATA-IMESC, and as a Scientific Researcher at LAPS, building Machine Learning, AI and scalable web solutions. I have international experience at TELUS International (Vancouver) and worked at Technos Engenharia on financial systems and stock market algorithms. My stack includes React, Next.js, TypeScript, Python and Node.js, plus Cloud (AWS, GCP, Azure) and DevOps (Docker, Kubernetes).",
  ),
  facts: [
    {Icon: MapPin, label: l('Localização', 'Location'), value: l('São Luís, MA')},
    {Icon: Calendar, label: l('Idade', 'Age'), value: l('22')},
    {Icon: Flag, label: l('Nacionalidade', 'Nationality'), value: l('Brasileiro', 'Brazilian')},
    {
      Icon: Sparkles,
      label: l('Interesses', 'Interests'),
      value: l('Tecnologia, Física, Matemática', 'Tech, Physics, Math'),
    },
    {
      Icon: GraduationCap,
      label: l('Formação', 'Education'),
      value: l('Universidade Estadual do Maranhão', 'State University of Maranhão'),
    },
    {Icon: Briefcase, label: l('Trabalho', 'Work'), value: l('IMESC · LAPS')},
  ],
};

export interface TimelineEntry {
  title: L;
  place: string;
  date: L;
  text: L;
  tags?: string[];
}

export const resume = {
  eyebrow: l('Minha trajetória', 'My journey'),
  title: l('Currículo', 'Resume'),
  experienceTitle: l('Experiência', 'Experience'),
  educationTitle: l('Formação', 'Education'),
  skillsTitle: l('Habilidades', 'Skills'),
  // Most recent first.
  experience: [
    {
      title: l('Desenvolvedor de Software', 'Software Developer'),
      place: 'IMESC · São Luís, MA',
      date: l('Jan 2024 – Presente', 'Jan 2024 – Present'),
      text: l(
        'Modernização dos produtos digitais do Instituto Maranhense de Estudos Socioeconômicos e Cartográficos: app IMESC, plataforma IMESC Amplo, GeoportalSEI ZEE-MA e DATA-IMESC.',
        'Modernizing the digital products of the Maranhão Institute of Socio-Economic and Cartographic Studies: the IMESC app, IMESC Amplo, GeoportalSEI ZEE-MA and DATA-IMESC.',
      ),
      tags: ['Cloud', 'Web'],
    },
    {
      title: l('Pesquisador Científico', 'Scientific Researcher'),
      place: 'LAPS · UEMA',
      date: l('Set 2023 – Presente', 'Sep 2023 – Present'),
      text: l(
        'Pesquisa e desenvolvimento no Laboratório de Aquisição e Processamento de Sinais: aplicações web e soluções de Machine Learning e IA.',
        'Research and development at the Signal Acquisition and Processing Laboratory: web applications and Machine Learning and AI solutions.',
      ),
      tags: ['Java', 'Python', 'Machine Learning', 'Full Stack'],
    },
    {
      title: l('Desenvolvedor de Software', 'Software Developer'),
      place: 'TELUS International · Vancouver',
      date: l('Jan 2023 – Set 2023', 'Jan 2023 – Sep 2023'),
      text: l(
        'Nova interface para o site de um cliente de e-commerce, com foco em performance e responsividade.',
        'Built a new user interface for an e-commerce client’s website, focused on performance and responsiveness.',
      ),
      tags: ['Frontend', 'Backend', 'Web'],
    },
    {
      title: l('Desenvolvedor Financeiro', 'Financial Developer'),
      place: 'Technos Engenharia · São Luís, MA',
      date: l('Jan 2022 – Ago 2024', 'Jan 2022 – Aug 2024'),
      text: l(
        'Sistemas de pagamento e algoritmos de coleta e análise de dados para aplicações no mercado de ações.',
        'Payment systems and data collection algorithms for stock market applications.',
      ),
      tags: ['Backend', 'IA', 'Machine Learning'],
    },
  ] as TimelineEntry[],
  education: [
    {
      title: l('Engenharia da Computação', 'Computer Engineering'),
      place: 'UEMA',
      date: l('Ago 2022 – Presente', 'Aug 2022 – Present'),
      text: l(
        'Pesquisa no LAPS sobre performance, segurança e eficiência de sistemas web e bancos de dados.',
        'Research at LAPS on the performance, security and efficiency of web systems and databases.',
      ),
    },
  ] as TimelineEntry[],
  skills: [
    {name: l('Frontend'), items: ['React', 'Next.js', 'TypeScript', 'SCSS']},
    {name: l('Backend'), items: ['Node.js', 'Python', 'Java · Spring', 'PHP · Laravel', 'REST', 'GraphQL']},
    {name: l('Mobile'), items: ['React Native', 'Flutter', 'Kotlin']},
    {name: l('IA & ML', 'AI & ML'), items: ['TensorFlow', 'PyTorch', 'OpenCV']},
    {name: l('Dados', 'Data'), items: ['MySQL', 'MongoDB', 'Redis']},
    {name: l('Cloud & DevOps'), items: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Gradle']},
    {
      name: l('Idiomas', 'Languages'),
      items: ['Português', 'English', 'Español', 'Français', 'Deutsch'],
    },
  ],
};

export interface Project {
  name: string;
  url: string;
  language: 'TypeScript' | 'JavaScript' | 'Python';
  text: L;
  tags: L[];
}

export const portfolio = {
  eyebrow: l('Meus trabalhos', 'My work'),
  title: l('Projetos', 'Projects'),
  all: l('Ver todos no GitHub', 'See everything on GitHub'),
  projects: [
    {
      name: 'tsminicompiler',
      url: 'https://github.com/Luluzao0/tsminicompiler',
      language: 'TypeScript',
      text: l(
        'Mini compilador em TypeScript, explorando teoria da computação e compiladores.',
        'A mini compiler in TypeScript, exploring theory of computation and compilers.',
      ),
      tags: [l('Compiladores', 'Compilers')],
    },
    {
      name: 'fipy',
      url: 'https://github.com/Luluzao0/fipy',
      language: 'Python',
      text: l(
        'Previsão de preços de ações com redes neurais (ADAM) e deep learning a partir de dados históricos.',
        'Stock price prediction with neural networks (ADAM) and deep learning on historical data.',
      ),
      tags: [l('Deep Learning')],
    },
    {
      name: 'LapsIA-Machinelearning',
      url: 'https://github.com/Luluzao0/LapsIA-Machinelearning',
      language: 'Python',
      text: l(
        'Estudos e projetos de Machine Learning no LAPS, o Laboratório de Processamento de Sinais.',
        'Machine Learning studies and projects at LAPS, the Signal Processing Laboratory.',
      ),
      tags: [l('Machine Learning'), l('Pesquisa', 'Research')],
    },
    {
      name: 'ImescAmploModern',
      url: 'https://github.com/Luluzao0/ImescAmploModern',
      language: 'TypeScript',
      text: l(
        'Nova versão da plataforma IMESC Amplo, do Instituto Maranhense de Estudos Socioeconômicos e Cartográficos.',
        'New version of the IMESC Amplo platform for the Maranhão Institute of Socio-Economic and Cartographic Studies.',
      ),
      tags: [l('Governo', 'Government')],
    },
    {
      name: 'EiEstoque',
      url: 'https://github.com/Luluzao0/EiEstoque',
      language: 'TypeScript',
      text: l(
        'Gestão de estoque empresarial com controle de inventário e relatórios.',
        'Business inventory management with stock control and reports.',
      ),
      tags: [l('Full Stack')],
    },
    {
      name: 'LipoMed',
      url: 'https://github.com/Luluzao0/LipoMed',
      language: 'TypeScript',
      text: l(
        'Sistema médico para gestão de pacientes e acompanhamento de tratamentos.',
        'Medical system for patient management and treatment tracking.',
      ),
      tags: [l('Saúde', 'Health')],
    },
    {
      name: 'digitalrepo-uema',
      url: 'https://github.com/Luluzao0/digitalrepo-uema',
      language: 'TypeScript',
      text: l(
        'Repositório digital para a Universidade Estadual do Maranhão.',
        'Digital repository for the State University of Maranhão.',
      ),
      tags: [l('Educação', 'Education')],
    },
    {
      name: 'PressureApp',
      url: 'https://github.com/Luluzao0/PressureApp',
      language: 'TypeScript',
      text: l(
        'CardioTrack: app de monitoramento de pressão arterial em tempo real.',
        'CardioTrack: a real-time blood pressure monitoring app.',
      ),
      tags: [l('Mobile'), l('Saúde', 'Health')],
    },
    {
      name: 'App-project-ceuma',
      url: 'https://github.com/Luluzao0/App-project-ceuma',
      language: 'JavaScript',
      text: l(
        'MedQuiz: quiz de Medicina para estudar de forma divertida.',
        'MedQuiz: a fun medicine quiz for students.',
      ),
      tags: [l('Mobile'), l('Educação', 'Education')],
    },
    {
      name: 'chatbotIA',
      url: 'https://github.com/Luluzao0/chatbotIA',
      language: 'JavaScript',
      text: l('Chatbot com IA para conversação natural.', 'AI chatbot for natural conversation.'),
      tags: [l('IA', 'AI')],
    },
    {
      name: 'HomeAI',
      url: 'https://github.com/Luluzao0/HomeAI',
      language: 'Python',
      text: l('Automação residencial com Inteligência Artificial.', 'Home automation powered by AI.'),
      tags: [l('IoT')],
    },
    {
      name: 'csec-solutions',
      url: 'https://github.com/Luluzao0/csec-solutions',
      language: 'JavaScript',
      text: l('Soluções de desafios de segurança cibernética (CTF).', 'Cybersecurity challenge solutions (CTF).'),
      tags: [l('Cybersecurity')],
    },
  ] as Project[],
};

export const testimonials = {
  eyebrow: l('O que dizem', 'What they say'),
  title: l('Depoimentos', 'Testimonials'),
  items: [
    {
      name: 'Suami Gomes Santos',
      text: l(
        'Use esta oportunidade para testemunhar a eficiência perfeita do nosso Sistema de Registro de Clientes, um componente chave do compromisso da Technos com a excelência. Nosso sistema CRUD para gerenciamento de clientes define o padrão ouro, revolucionando como empresas interagem com seus dados de clientes.',
        'Use this opportunity to witness the seamless efficiency of our Customer Registration System, a key component of Technos commitment to excellence. Our CRUD system for client management sets the gold standard, revolutionizing how businesses engage with their customer data.',
      ),
    },
    {
      name: 'Matheus Machado Santos',
      text: l(
        'Se você está procurando mergulhar no mundo de sistemas inteligentes, confie em mim, Luis Lopes, Python é seu guia para aprender. Tem as bibliotecas, a comunidade, e o toque mágico para fazer seus projetos decolarem! 🚀',
        "If you are looking to dive into the world of intelligent systems, trust me, Luis Lopes, Python is your guide to learn. It's got the libraries, the community, and the magic touch to make your projects soar! 🚀",
      ),
    },
    {
      name: 'Patrick Melo',
      text: l(
        'Luis Lopes é um profissional multifacetado e dinâmico que opera na interseção de desenvolvimento web, machine learning e inteligência artificial. Com uma paixão por aproveitar tecnologias de ponta para criar soluções inovadoras, Luis Lopes estabeleceu uma reputação por entregar projetos de alta qualidade que integram perfeitamente esses diversos campos.',
        'Luis Lopes is a multifaceted and dynamic professional who operates at the intersection of web development, machine learning, and artificial intelligence. With a passion for leveraging cutting-edge technologies to create innovative solutions, Luis Lopes has established a reputation for delivering high-quality projects that seamlessly integrate these diverse fields.',
      ),
    },
  ],
};

export const contact = {
  eyebrow: l('Vamos conversar', "Let's talk"),
  title: l('Contato', 'Contact'),
  heading: l('Vamos construir algo juntos?', "Let's build something together?"),
  text: l(
    'Tem um projeto, uma vaga ou só quer trocar uma ideia? Me chama no LinkedIn ou dá uma olhada no meu GitHub.',
    'Have a project, a role, or just want to chat? Reach out on LinkedIn or check out my GitHub.',
  ),
  cta: l('Falar no LinkedIn', 'Message me on LinkedIn'),
  location: l('São Luís, Brasil', 'São Luís, Brazil'),
};

export const footer = {
  rights: l('Todos os direitos reservados.', 'All rights reserved.'),
  top: l('Voltar ao topo', 'Back to top'),
};
