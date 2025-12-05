import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

//Icons
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';

//images
import heroImage from '../images/luisao-dev.webp';
import porfolioImage1 from '../images/portfolio/porfolioImage1.webp';
import porfolioImage2 from '../images/portfolio/porfolioImage2.webp';
import artigoiniciante from '../images/portfolio/artigoiniciante.webp';
import login from '../images/portfolio/login.webp'
import emc from '../images/portfolio/emc.webp';
import postgresql from '../images/portfolio/postgresql.webp'
import sistemavenda from '../images/portfolio/sistemavenda.webp'
import botvotacao from '../images/portfolio/botvotacao.webp';
import appceuma from '../images/portfolio/appceuma.webp'
import profilepic from '../images/minhafoto.webp';
import testimonialImage from '../images/luisao-dev.webp';
import pycalculus from '../images/portfolio/pycalculus.webp';
import fipy from '../images/portfolio/fipy.webp';
import currency from '../images/portfolio/currency.webp';
import cardiotrack from '../images/portfolio/cardiotrack.webp';
import stocktrack from '../images/portfolio/stocktrack.webp';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Luis Lopes | Desenvolvedor Full Stack & Engenheiro de Computação',
  description: "Luis Lopes - Desenvolvedor Full Stack, Engenheiro de Computação, especialista em React, Python, Machine Learning e IA. Portfolio profissional com projetos de desenvolvimento web, mobile e inteligência artificial. São Luís, Maranhão, Brasil.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Luis Guilherme.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a São Luís based <strong className="text-stone-100">Computer Engineer</strong>, currently working
        at <strong className="text-stone-100">Signal Processing Laboratory (LAPS) & IMESC</strong> helping build a modern, mobile-first, Web | Machine Learning | IA project in UEMA.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">studying</strong>,
        reading <strong className="text-stone-100">books</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">São Luís Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/15yDpAIwycrXCuKfVmUlLFVQAQAOpnvCd/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Luis Lopes. Welcome to my corner of the web! With years in professional journey, I specialize in crafting innovative solutions to software challenges. Proficient in agile methodologies, I possess extensive knowledge of leading web development languages and technologies. Worked as a Software Developer at Technos Engenharia, São Luís / TELUS International, Vancouver, focusing on responsive page development, performance optimization, and rigorous testing. Holds a degree in Computer Engineering from Universidade Estadual Do Maranhão, with a current research focus on enhancing web system and database performance at the Signal Processing Laboratory (LAPS).
`,
  aboutItems: [
    { label: 'Location', text: 'São Luís, MA', Icon: MapIcon },
    { label: 'Age', text: '20', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Brazilian', Icon: FlagIcon },
    { label: 'Interests', text: 'Tech, Physics, Math', Icon: SparklesIcon },
    { label: 'Study', text: 'State University of Maranhão', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'LAPS', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Portuguese',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 3,
      },
      {
        name: 'Français',
        level: 2, 
      },
      {
        name: 'Deustch',
        level: 1,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'SCSS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'Java(JSE, JEE, MVC, Data, JPA, Spring)',
        level: 6,
      },
      {
        name: 'PHP(Laravel, Blade Template, Composer)',
        level: 10,
      },

    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 10,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Kotlin',
        level: 1,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        level: 10,
      },
      {
        name: 'Kubernetes',
        level: 6,
      },
      {
        name: 'Gradle',
        level: 6,
      },
      {
        name: 'Jira',
        level: 2,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'MySQL',
        level: 10,
      },
      {
        name: 'MongoDB',
        level: 8,
      },
      {
        name: 'Redis',
        level: 4,
      },
    ],
  },
  {
    name: 'Clouding',
    skills: [
      {
        name: 'AWS',
        level: 10,
      },
      {
        name: 'Google Clouding System ',
        level: 8,
      },
      {
        name: 'Azure',
        level: 3,
      },
    ],
  },
  {
    name: 'APIs',
    skills: [
      {
        name: 'REST APIs',
        level: 10,
      },
      {
        name: 'GraphQL',
        level: 10,
      },
    ],
  },
  {
    name: 'IA & ML',
    skills: [
      {
        name: 'TensorFlow',
        level: 10,
      },
      {
        name: 'PyTorch ',
        level: 5,
      },
      {
        name: 'OpenCV',
        level: 5,
      },
    ],
  },

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Site Devlopment for Lab',
    description: 'site of laps',
    url: 'https://lablaps.vercel.app/news',
    image: porfolioImage1,
  },
  {
    title: 'Simple CRUD for client register',
    description: 'Technos Company',
    url: 'https://techdata.streamlit.app/',
    image: porfolioImage2,
  },
  {
    title: 'Article',
    description: 'Teaching how starts in programming',
    url: 'https://medium.com/@1LgL/iniciante-na-programa%C3%A7%C3%A3o-siga-essas-dicas-31df215dffa6',
    image: artigoiniciante,
  },
  {
    title: 'Teaching Language C',
    description: 'All about C',
    url: 'https://www.notion.so/luisaodev/Estudos-em-C-dc4be0bd099e4f6bb31d25955353cca6?pvs=4',
    image: emc,
  },
  {
    title: 'Login Page 3D animation',
    description: 'project',
    url: 'https://github.com/Luluzao0/TestingFlask-Site-Python',
    image: login,
  },
  {
    title: 'sales management system',
    description: 'project',
    url: 'https://github.com/Luluzao0/cellphone-sales-management-system',
    image: sistemavenda,
  },
  {
    title: 'Aula PostgreSQL',
    description:'breve estudo sobre um dos SGDB mais famosos do mundo',
    url:'https://youtu.be/q_q6Jn5XDaQ?si=EIAFbU98wndKpMAN',
    image: postgresql,
  },
  {
    title: 'Bot ',
    description: 'Bot para votações',
    url: 'https://github.com/Luluzao0/bot_vota--o',
    image: botvotacao,
  },
  {
    title: 'MedQuiz',
    description: 'O Quiz de Medicina que vai te ajudar a estudar de forma divertida!', 
    url: 'https://github.com/Luluzao0/App-project-ceuma',
    image: appceuma,
  },
  {
    title: 'PyCalculus',
    description: 'Os cálculos mais complexos de forma simples',
    url: 'https://github.com/Luluzao0/PyCalculus',
    image: pycalculus,
  },
  {
    title: 'Fipy',
    description: 'Previsão de ações usando modelos(ADAM) de redes neurais e deep learning para prever o preço de ações com base em dados históricos.', 
    url: 'https://github.com/Luluzao0/fipy',
    image: fipy,
  },
  {
    title: 'Currency Rate App',
    description: 'Aplicativo para coverter moedas em tempo real, utilizando a API da ExchangeRateAPI', 
    url: 'https://github.com/Luluzao0/Currency-rate-app',
    image: currency,
  },
  {
    title: 'CardioTrack',
    description: 'CardioTrack é um aplicativo de monitoramento de saúde que permite aos usuários acompanhar sua pressão arterial em tempo real.', 
    url: 'https://github.com/Luluzao0/PressureApp',
    image: cardiotrack,
  },
  {
    title: 'StockTrack',
    description: 'StokTrack é um site para controle de estoque de produtos, com funcionalidades de CRUD e autenticação de usuários, tudo em nuvem.', 
    url: 'https://github.com/Luluzao0/',
    image: stocktrack,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2022 - Present',
    location: 'UEMA',
    title: 'Computer Engenieering',
    content: <p>I am a passionate and dedicated researcher at the Signal Processing Laboratory (LAPS) with a strong focus on
    the intersection between web technology and databases. My research involves exploring new approaches to
    improving the performance, security and efficiency of web systems and databases by leveraging the latest
    technology and innovation</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2023 - Present',
    location: 'LAPS',
    title: 'Scientific Researcher',
    content: (
      <p>
        Researcher and developer at the Signal Acquisition and Processing Laboratory (LAPS).
        <strong>Skills: Researcher · Java · Back-end development · Front-end development · Web development </strong>
      </p>
    ),
  },
  {
    date: 'January 2022 - August 2024',
    location: 'TECHNOS ENGENHARIA',
    title: 'Financial Developer',
    content: (
      <p>
        Financial developer of payment systems using algorithms to collect and use data for applications on stock <br></br>
        <strong>Skills: Researcher · Stock Market  · Back-end development · AI · Machine Learning · Economics </strong>
      </p>
    ),
  },
  {
    date: 'January 2023 - September 2023',
    location: 'TELUS International, Vancouver',
    title: 'Software Developer',
    content: (
      <p>
        I would highlight my work on a web development project for an e-commerce client. In this project, I was tasked with creating a new user interface for the existing website, with an emphasis on optimizing performance and making it fully responsive. <br></br>
        <strong>Skills: Back-end development · Front-end development · Web development </strong> 

      </p>
    ),
  },
  {
    date: 'January 2024 - Present',
    location: 'IMESC',
    title: 'Software Developer',
    content: (
      <p>a dedicated professional who works at IMESC, the Maranhão Institute of Socio-Economic and Cartographic
Socioeconomic and Cartographic Studies. My mission is to promote the socio-economic
development of Maranhão through research, studies and analysis. To this end, we are
modernizing our digital products, such as the IMESC app, the IMESC Amplo platform,
the GeoportalSEI ZEE-Ma and the DATA-IMESC platform. <br></br>
      <strong>Skills: Clouding · Web development </strong>

      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Suami Gomes Santos',
      text: 'Use this opportunity to witness the seamless efficiency of our Customer Registration System, a key component of Technos commitment to excellence. Our CRUD system for client management sets the gold standard, revolutionizing how businesses engage with their customer data',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Matheus Machado Santos',
      text: 'If you are looking to dive into the world of intelligent systems, trust me, Luis Lopes, Python is your guide to learn. Its got the libraries, the community, and the magic touch to make your projects soar! 🚀',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Patrick Melo',
      text: 'Luis Lopes is a multifaceted and dynamic professional who operates at the intersection of web development, machine learning, and artificial intelligence. With a passion for leveraging cutting-edge technologies to create innovative solutions, Luis Lopes has established a reputation for delivering high-quality projects that seamlessly integrate these diverse fields.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
}; 
/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Enter in contact with Me.',
  description: 'Enjoyed my content?',

  items: [
    {
      type: ContactType.Email,
      text: 'Email',
      href: 'mailto:devluisao@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'São Luís, Brasil',
      href: 'https://maps.app.goo.gl/azXPCz153u4pRs4W7',
    },
    /*
        {
      type: ContactType.Instagram,
      text: '@',
      href: 'https://www.instagram.com/',
    },
     */

    {
      type: ContactType.Github,
      text: 'Luluzao0',
      href: 'https://github.com/luluzao0',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/luluzao0'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/1Lgl/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
