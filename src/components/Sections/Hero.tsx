import classNames from 'classnames';
import {FC, memo, useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {Github, Linkedin, Mail, ArrowDown} from 'lucide-react';

import {heroData, SectionId, socialLinks} from '../../data/data';
import Section from '../Layout/Section';
import {ImgWithFallback} from '../ImageWithFallback';
import {useLanguage} from '../../context/LanguageContext';
import useMouseParallax from '../../hooks/useMouseParallax';

// Background image from newstyle
const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';

// Floating particles component
const FloatingParticles: FC = () => {
  const [particles, setParticles] = useState<{x: number; y: number; delay: number; duration: number}[]>([]);

  useEffect(() => {
    const newParticles = [...Array(30)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

const Hero: FC = memo(() => {
  const {actions} = heroData;
  const parallax = useMouseParallax(20);
  const {t} = useLanguage();

  // Map social links to icons
  const socialIcons: {[key: string]: React.ElementType} = {
    Github: Github,
    LinkedIn: Linkedin,
    Email: Mail,
  };

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black sm:min-h-screen">
        {/* Animated Background Image with Parallax - usando imagem do newstyle */}
        <motion.div className="absolute inset-0" style={{...parallax, scale: 1.1}}>
          <ImgWithFallback
            src={BACKGROUND_IMAGE}
            alt=""
            className="absolute z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </motion.div>

        {/* Floating particles */}
        <FloatingParticles />

        {/* Content */}
        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 sm:min-h-screen sm:px-6">
          <motion.div
            className="max-w-4xl w-full space-y-6 sm:space-y-8"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, ease: 'easeOut'}}>
            {/* Small intro text */}
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.3, duration: 0.8}}
              className="overflow-hidden">
              <span className="inline-block text-sm uppercase tracking-[0.3em] text-white/60 border-l-2 border-white/40 pl-4">
                
              </span>
            </motion.div>

            {/* Main Name with stagger effect */}
            <div className="overflow-hidden">
              <motion.h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter text-white leading-[0.9] font-bold">
                {'Luis Lopes'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block cursor-default"
                    initial={{y: 100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                      delay: 0.5 + i * 0.05,
                      duration: 0.8,
                      ease: 'easeOut',
                    }}
                    whileHover={{
                      y: -10,
                      color: '#60a5fa',
                      transition: {duration: 0.2},
                    }}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Subtitle with line animation */}
            <motion.div
              className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1.2, duration: 0.8}}>
              <motion.div
                className="h-px bg-white/40"
                initial={{width: 0}}
                animate={{width: 60}}
                transition={{delay: 1.4, duration: 0.8}}
              />
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 tracking-wide">{t('hero.subtitle')}</p>
            </motion.div>

            {/* Description */}
            <motion.div
  className="font-mono text-sm md:text-base bg-black/30 border border-white/10 p-4 rounded-lg backdrop-blur-md w-full max-w-xl shadow-lg"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 0.8 }}
>
  {/* Linha 1: Declaração */}
  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-1">
    <span className="text-purple-400">let</span>
    <span className="text-blue-400">hw</span>
    <span className="text-white">=</span>
    <span className="text-green-300">"{t('hero.greeting')}"</span>
  </div>

  {/* Linha 2: Console.log */}
  <div className="flex gap-0.5 md:gap-1 mb-3">
    <span className="text-blue-300">console</span>
    <span className="text-white/60">.</span>
    <span className="text-yellow-200">log</span>
    <span className="text-white/60">(</span>
    <span className="text-blue-400">hw</span>
    <span className="text-white/60">)</span>
  </div>

  {/* Linha 3: O Resultado (Output) */}
  <div className="border-t border-white/10 pt-2 mt-2 text-white/80 flex items-center gap-2">
    <span className="text-green-500 text-xs">➜</span>
    <span>"{t('hero.greeting')}"</span>
  </div>
</motion.div>

            {/* Social Links with hover effects */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 pt-4 sm:justify-start sm:gap-4"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 1.8, duration: 0.8}}>
              {socialLinks.map((social, index) => {
                const IconComponent = socialIcons[social.label] || Github;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group relative h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 overflow-hidden sm:h-14 sm:w-14"
                    whileHover={{scale: 1.1, borderColor: 'rgba(255,255,255,0.6)'}}
                    whileTap={{scale: 0.95}}>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{scale: 0}}
                      whileHover={{scale: 1}}
                      transition={{duration: 0.3}}
                    />
                    <IconComponent className="w-5 h-5 relative z-10 group-hover:text-black transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Action buttons */}
            <motion.div
              className="flex w-full flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap sm:gap-4"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 2, duration: 0.8}}>
              {actions.map(({href, text, primary, Icon}) => (
                <motion.a
                  key={text}
                  href={href}
                  className={classNames(
                    'flex w-full justify-center gap-x-2 items-center px-6 py-3 rounded-full text-sm font-medium transition-all sm:w-auto',
                    primary
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'border border-white/30 text-white hover:bg-white/10',
                  )}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}>
                  {t(`hero.${text.toLowerCase()}`)}
                  {Icon && <Icon className="h-5 w-5" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:bottom-12"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 2.2, duration: 0.8}}>
            <span className="text-xs text-white/40 uppercase tracking-widest">{t('hero.scroll')}</span>
            <motion.a
              aria-label={t('hero.scroll')}
              href={`/#${SectionId.About}`}
              animate={{y: [0, 10, 0]}}
              transition={{duration: 1.5, repeat: Infinity}}>
              <ArrowDown className="w-4 h-4 text-white/40" />
            </motion.a>
          </motion.div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-white/40 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-white/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-px h-32 bg-gradient-to-t from-white/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-white/40 to-transparent"></div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
