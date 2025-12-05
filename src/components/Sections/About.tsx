import Image from 'next/image';
import {FC, memo, useMemo} from 'react';
import {motion} from 'framer-motion';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import {useLanguage} from '../../context/LanguageContext';

// Same background as Hero for consistency
const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';

// Mapeamento de labels para chaves de tradução
const labelTranslationMap: Record<string, string> = {
  'Location': 'about.location',
  'Age': 'about.age',
  'Nationality': 'about.nationality',
  'Interests': 'about.interests',
  'Study': 'about.study',
  'Employment': 'about.employment',
};

const valueTranslationMap: Record<string, string> = {
  'Location': 'about.location.value',
  'Nationality': 'about.nationality.value',
  'Interests': 'about.interests.value',
  'Study': 'about.study.value',
};

const About: FC = memo(() => {
  const {profileImageSrc, aboutItems} = aboutData;
  const {t} = useLanguage();

  // Traduzir os items do about
  const translatedItems = useMemo(() => {
    return aboutItems.map(item => ({
      ...item,
      label: t(labelTranslationMap[item.label] || item.label),
      text: valueTranslationMap[item.label] ? t(valueTranslationMap[item.label]) : item.text,
    }));
  }, [aboutItems, t]);

  return (
    <Section noPadding sectionId={SectionId.About}>
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background Image - same as Hero */}
        <div className="absolute inset-0">
          <img
            src={BACKGROUND_IMAGE}
            alt="Background"
            className="absolute z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
          <motion.div
            className="max-w-5xl w-full"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: 'easeOut'}}>
            
            {/* Section Header */}
            <motion.div
              className="mb-12"
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2, duration: 0.8}}>
              <span className="inline-block text-sm uppercase tracking-[0.3em] text-white/60 border-l-2 border-white/40 pl-4 mb-4">
                {t('about.section')}
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                {t('about.title')}
              </h2>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              {/* Profile Image */}
              {profileImageSrc && (
                <motion.div
                  className="flex justify-center md:justify-start"
                  initial={{opacity: 0, scale: 0.9}}
                  whileInView={{opacity: 1, scale: 1}}
                  viewport={{once: true}}
                  transition={{delay: 0.3, duration: 0.8}}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-xl"></div>
                    <div className="relative h-56 w-56 md:h-64 md:w-64 overflow-hidden rounded-2xl ring-2 ring-white/30">
                      <Image 
                        alt="about-me-image" 
                        className="h-full w-full object-cover" 
                        src={profileImageSrc} 
                        fill 
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Description & Info */}
              <div className="md:col-span-2 space-y-8">
                <motion.p
                  className="text-lg md:text-xl text-white/70 leading-relaxed"
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.4, duration: 0.8}}>
                  {t('about.description')}
                </motion.p>

                {/* Info Items */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.5, duration: 0.8}}>
                  {translatedItems.map(({label, text, Icon}, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      whileHover={{x: 5, scale: 1.02}}>
                      {Icon && (
                        <div className="p-3 rounded-xl bg-white/10">
                          <Icon className="h-5 w-5 text-white/80" />
                        </div>
                      )}
                      <div>
                        <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{label}</span>
                        <p className="text-white font-medium">{text}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
