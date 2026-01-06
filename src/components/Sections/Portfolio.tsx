import {ArrowTopRightOnSquareIcon, StarIcon, CodeBracketIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';
import {motion} from 'framer-motion';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import {useLanguage} from '../../context/LanguageContext';

// Same background as Hero for consistency
const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';

// GitHub username
const GITHUB_USERNAME = 'Luluzao0';

// Interface para repositório
interface RepoItem {
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  tags: string[];
}

// Repositórios selecionados manualmente (os melhores)
const selectedRepos: RepoItem[] = [
  {
    name: 'tsminicompiler',
    description: 'Mini compilador desenvolvido em TypeScript - demonstra conhecimentos de teoria da computação e compiladores',
    url: 'https://github.com/Luluzao0/tsminicompiler',
    language: 'TypeScript',
    stars: 1,
    tags: ['Compilador', 'Teoria da Computação'],
  },
  {
    name: 'fipy',
    description: 'Previsão de ações usando redes neurais ADAM e deep learning para prever preços com base em dados históricos',
    url: 'https://github.com/Luluzao0/fipy',
    language: 'Python',
    stars: 1,
    tags: ['Machine Learning', 'Deep Learning'],
  },
  {
    name: 'LapsIA-Machinelearning',
    description: 'Repositório de estudos e projetos de Machine Learning no LAPS - Laboratório de Processamento de Sinais',
    url: 'https://github.com/Luluzao0/LapsIA-Machinelearning',
    language: 'Python',
    stars: 1,
    tags: ['Machine Learning', 'Pesquisa'],
  },
  {
    name: 'EiEstoque',
    description: 'Sistema completo de gestão de estoque empresarial com controle de inventário e relatórios',
    url: 'https://github.com/Luluzao0/EiEstoque',
    language: 'TypeScript',
    stars: 0,
    tags: ['Full Stack', 'Gestão'],
  },
  {
    name: 'LipoMed',
    description: 'Sistema médico para gestão de pacientes e acompanhamento de tratamentos',
    url: 'https://github.com/Luluzao0/LipoMed',
    language: 'TypeScript',
    stars: 0,
    tags: ['Saúde', 'Full Stack'],
  },
  {
    name: 'ImescAmploModern',
    description: 'Plataforma moderna do IMESC - Instituto Maranhense de Estudos Socioeconômicos e Cartográficos',
    url: 'https://github.com/Luluzao0/ImescAmploModern',
    language: 'TypeScript',
    stars: 0,
    tags: ['IMESC', 'Governo'],
  },
  {
    name: 'PressureApp',
    description: 'CardioTrack - Aplicativo de monitoramento de pressão arterial em tempo real',
    url: 'https://github.com/Luluzao0/PressureApp',
    language: 'TypeScript',
    stars: 0,
    tags: ['Saúde', 'Mobile'],
  },
  {
    name: 'App-project-ceuma',
    description: 'MedQuiz - Quiz de Medicina para estudantes, ajudando a estudar de forma divertida',
    url: 'https://github.com/Luluzao0/App-project-ceuma',
    language: 'JavaScript',
    stars: 0,
    tags: ['Educação', 'Mobile'],
  },
  {
    name: 'csec-solutions',
    description: 'Soluções e desafios de segurança cibernética - CTF e hacking ético',
    url: 'https://github.com/Luluzao0/csec-solutions',
    language: 'JavaScript',
    stars: 1,
    tags: ['Cybersecurity', 'CTF'],
  },
  {
    name: 'chatbotIA',
    description: 'Chatbot inteligente utilizando Inteligência Artificial para conversação natural',
    url: 'https://github.com/Luluzao0/chatbotIA',
    language: 'JavaScript',
    stars: 1,
    tags: ['IA', 'Chatbot'],
  },
  {
    name: 'HomeAI',
    description: 'Projeto de automação residencial com Inteligência Artificial para casas inteligentes',
    url: 'https://github.com/Luluzao0/HomeAI',
    language: 'Python',
    stars: 0,
    tags: ['IoT', 'Automação'],
  },
  {
    name: 'digitalrepo-uema',
    description: 'Sistema de Repositório Digital para a UEMA - Universidade Estadual do Maranhão',
    url: 'https://github.com/Luluzao0/digitalrepo-uema',
    language: 'TypeScript',
    stars: 1,
    tags: ['Full Stack', 'Educação'],
  },
];

// Mapeamento de cores para linguagens
const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
  HTML: '#e34c26',
  CSS: '#563d7c',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  Shell: '#89e051',
  Kotlin: '#A97BFF',
  Swift: '#ffac45',
  Dart: '#00B4AB',
  TeX: '#3D6117',
};

const Portfolio: FC = memo(() => {
  const {t} = useLanguage();
  
  return (
    <Section noPadding sectionId={SectionId.Portfolio}>
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background Image - same as Hero */}
        <div className="absolute inset-0">
          <img
            src={BACKGROUND_IMAGE}
            alt="Background"
            className="absolute z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
          <motion.div
            className="max-w-7xl w-full"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: 'easeOut'}}>
            
            {/* Section Header */}
            <motion.div
              className="mb-12 text-center"
              initial={{opacity: 0, y: -20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2, duration: 0.8}}>
              <span className="inline-block text-sm uppercase tracking-[0.3em] text-white/60 border-l-2 border-white/40 pl-4 mb-4">
                {t('portfolio.section')}
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                {t('portfolio.title')}
              </h2>
              <motion.div
                className="mt-4 flex items-center justify-center gap-4"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{delay: 0.4, duration: 0.8}}>
                <div className="h-px w-16 bg-white/40"></div>
                <p className="text-white/60 max-w-md">
                  {t('portfolio.subtitle')}
                </p>
                <div className="h-px w-16 bg-white/40"></div>
              </motion.div>
            </motion.div>

            {/* GitHub Profile Link */}
            <motion.div
              className="mb-10 flex justify-center"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.3, duration: 0.6}}>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 group">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Ver todos os repositórios no GitHub</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>

            {/* Repository Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.3, duration: 0.8}}>
              {selectedRepos.map((repo, index) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  initial={{opacity: 0, y: 30}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.1 * index, duration: 0.6}}
                  whileHover={{scale: 1.02, y: -5}}>
                  
                  {/* Repo Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <CodeBracketIcon className="w-6 h-6 text-white/60" />
                      <h3 className="text-lg font-semibold text-white truncate max-w-[200px]">
                        {repo.name}
                      </h3>
                    </div>
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/60 text-sm mb-4 line-clamp-2 min-h-[40px]">
                    {repo.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/70 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Footer Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      {/* Language */}
                      {repo.language && (
                        <div className="flex items-center gap-2">
                          <span 
                            className="w-3 h-3 rounded-full"
                            style={{backgroundColor: languageColors[repo.language] || '#8b8b8b'}}
                          />
                          <span className="text-white/60 text-sm">{repo.language}</span>
                        </div>
                      )}
                      
                      {/* Stars */}
                      {repo.stars > 0 && (
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-4 h-4 text-yellow-400/80" />
                          <span className="text-white/60 text-sm">{repo.stars}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
