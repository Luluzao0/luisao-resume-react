import {FC, memo, useMemo} from 'react';
import {motion} from 'framer-motion';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import {useLanguage} from '../../../context/LanguageContext';

// Same background as Hero for consistency
const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';

// Mapeamento de títulos para chaves de tradução
const educationTranslationMap: Record<string, {title: string; date: string; content: string}> = {
  'Computer Engineering': {
    title: 'education.computereng.title',
    date: 'education.computereng.date',
    content: 'education.computereng.content',
  },
};

// Mapeamento especial para experiências com mesmo título
const experienceByLocation: Record<string, {title: string; date: string; content: string}> = {
  'LAPS, Maranhão': {
    title: 'experience.laps.title',
    date: 'experience.laps.date',
    content: 'experience.laps.content',
  },
  'Technos Engenharia, São Luís': {
    title: 'experience.technos.title',
    date: 'experience.technos.date',
    content: 'experience.technos.content',
  },
  'TELUS International, Vancouver': {
    title: 'experience.telus.title',
    date: 'experience.telus.date',
    content: 'experience.telus.content',
  },
  'IMESC, Maranhão': {
    title: 'experience.imesc.title',
    date: 'experience.imesc.date',
    content: 'experience.imesc.content',
  },
};

const skillsTranslationMap: Record<string, string> = {
  'Spoken languages': 'skills.spoken',
  'Frontend development': 'skills.frontend',
  'Backend development': 'skills.backend',
  'Mobile development': 'skills.mobile',
  'DevOps': 'skills.devops',
  'Database': 'skills.database',
  'Clouding': 'skills.cloud',
  'APIs': 'skills.apis',
  'IA & ML': 'skills.aiml',
};

const Resume: FC = memo(() => {
  const {t} = useLanguage();

  // Traduzir educação
  const translatedEducation = useMemo(() => {
    return education.map(item => {
      const keys = educationTranslationMap[item.title];
      if (keys) {
        return {
          ...item,
          title: t(keys.title),
          date: t(keys.date),
          content: <p>{t(keys.content)}</p>,
        };
      }
      return item;
    });
  }, [t]);

  // Traduzir experiência (usando location como chave única)
  const translatedExperience = useMemo(() => {
    return experience.map(item => {
      const keys = experienceByLocation[item.location];
      if (keys) {
        return {
          ...item,
          title: t(keys.title),
          date: t(keys.date),
          content: <p>{t(keys.content)}</p>,
        };
      }
      return item;
    });
  }, [t]);

  // Traduzir skills
  const translatedSkills = useMemo(() => {
    return skills.map(skillGroup => ({
      ...skillGroup,
      name: skillsTranslationMap[skillGroup.name] ? t(skillsTranslationMap[skillGroup.name]) : skillGroup.name,
    }));
  }, [t]);
  
  return (
    <Section noPadding sectionId={SectionId.Resume}>
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background Image - same as Hero */}
        <div className="absolute inset-0">
          <img
            src={BACKGROUND_IMAGE}
            alt="Background"
            className="absolute z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 py-20">
          <motion.div
            className="max-w-5xl w-full"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: 'easeOut'}}>
            
            {/* Section Header */}
            <motion.div
              className="mb-16 text-center"
              initial={{opacity: 0, y: -20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2, duration: 0.8}}>
              <span className="inline-block text-sm uppercase tracking-[0.3em] text-white/60 border-l-2 border-white/40 pl-4 mb-4">
                {t('resume.section')}
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                {t('resume.title')}
              </h2>
            </motion.div>

            {/* Education Section */}
            <motion.div
              className="mb-16"
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{delay: 0.3, duration: 0.8}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/10 border border-white/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">{t('resume.education')}</h3>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>
              <div className="space-y-4 pl-4 border-l-2 border-white/20">
                {translatedEducation.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              className="mb-16"
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{delay: 0.4, duration: 0.8}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/10 border border-white/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">{t('resume.experience')}</h3>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>
              <div className="space-y-4 pl-4 border-l-2 border-white/20">
                {translatedExperience.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{delay: 0.5, duration: 0.8}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/10 border border-white/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">{t('resume.skills')}</h3>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {translatedSkills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.1 * index, duration: 0.6}}
                    whileHover={{borderColor: 'rgba(255,255,255,0.3)', y: -5}}>
                    <h4 className="text-lg font-bold text-white mb-4">{skillGroup.name}</h4>
                    <div className="space-y-3">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-white/70">{skill.name}</span>
                            <span className="text-xs text-white/50">{Math.round((skill.level / (skill.max || 10)) * 100)}%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-white/80 rounded-full"
                              initial={{width: 0}}
                              whileInView={{width: `${(skill.level / (skill.max || 10)) * 100}%`}}
                              viewport={{once: true}}
                              transition={{delay: 0.5 + skillIndex * 0.1, duration: 1, ease: 'easeOut'}}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
});

// Timeline Item Component
const TimelineItem: FC<{item: {title: string; date: string; location: string; content: React.ReactNode}; index: number}> = ({item, index}) => {
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm ml-4 group"
      initial={{opacity: 0, x: -20}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      transition={{delay: 0.1 * index, duration: 0.6}}
      whileHover={{borderColor: 'rgba(255,255,255,0.3)', x: 5}}>
      {/* Dot */}
      <div className="absolute -left-[26px] top-8 w-4 h-4 rounded-full bg-white border-4 border-black"></div>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
        <h4 className="text-lg font-bold text-white">{item.title}</h4>
        <span className="text-sm text-white/50 px-3 py-1 bg-white/10 rounded-full w-fit">{item.date}</span>
      </div>
      <p className="text-sm text-white/40 mb-3 flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {item.location}
      </p>
      <div className="text-sm text-white/60">{item.content}</div>
    </motion.div>
  );
};

Resume.displayName = 'Resume';
export default Resume;
