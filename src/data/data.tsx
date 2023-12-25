import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/luisao-dev.png';
import porfolioImage1 from '../images/portfolio/porfolioImage1.png';
import porfolioImage2 from '../images/portfolio/porfolioImage2.png';
import profilepic from '../images/minhafoto.jpg';
import testimonialImage from '../images/luisao-dev.png';

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
  title: 'Luisao Dev ',
  description: "this is a portfolio website",
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
        at <strong className="text-stone-100">Signal Processing Laboratory (LAPS)</strong> helping build a modern, mobile-first, Web | Machine Learning | IA project in UEMA.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me studying in <strong className="text-stone-100">dio.me</strong>,
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
  description: `Welcome to my corner of the web! With a robust 5-year professional journey, I specialize in crafting innovative solutions to software challenges. Proficient in agile methodologies, I possess extensive knowledge of leading web development languages and technologies. Worked as a Software Developer at TELUS International, Vancouver, focusing on responsive page development, performance optimization, and rigorous testing. Holds a degree in Computer Engineering from Universidade Estadual Do Maranhão, with a current research focus on enhancing web system and database performance at the Signal Processing Laboratory (LAPS).
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
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
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
        level: 8,
      },
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'Java',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
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
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Site Devlopment for Lab',
    description: 'site of laps',
    url: 'https://laps.up.railway.app/',
    image: porfolioImage1,
  },
  {
    title: 'Simple CRUD for client register',
    description: 'Technos Company',
    url: 'https://technos-clientes-cadastro.streamlit.app/',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 26',
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
    date: 'January 2023 - September 2023',
    location: 'TELUS International, Vancouver',
    title: 'Software Developer',
    content: (
      <p>
        I would highlight my work on a web development project for an e-commerce client. In this project, I was tasked with creating a new user interface for the existing website, with an emphasis on optimizing performance and making it fully responsive.
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
      name: 'Suami Santos',
      text: 'Use this opportunity to witness the seamless efficiency of our Customer Registration System, a key component of Technos commitment to excellence. Our CRUD system for client management sets the gold standard, revolutionizing how businesses engage with their customer data',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Matheus Santos',
      text: 'If you are looking to dive into the world of intelligent systems, trust me, Luisao Dev, Python is your guide to learn. Its got the libraries, the community, and the magic touch to make your projects soar! 🚀',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Patrick Melo',
      text: 'Luisao Dev is a multifaceted and dynamic professional who operates at the intersection of web development, machine learning, and artificial intelligence. With a passion for leveraging cutting-edge technologies to create innovative solutions, Luisao Dev has established a reputation for delivering high-quality projects that seamlessly integrate these diverse fields.',
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
      href: 'mailto:luis.20220086977@aluno.uema.br',
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
