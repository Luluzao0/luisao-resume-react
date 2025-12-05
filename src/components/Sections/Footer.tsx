import {FC, memo, useState, useEffect} from 'react';
import {ChevronUpIcon} from '@heroicons/react/24/solid';
import {motion} from 'framer-motion';
import {Github, Linkedin, Mail, Heart} from 'lucide-react';

import {SectionId, socialLinks} from '../../data/data';
import {useLanguage} from '../../context/LanguageContext';

// Same background as Hero for consistency
const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';

const currentYear = new Date().getFullYear();

// Floating particles component - same as Hero
const FloatingParticles: FC = () => {
  const [particles, setParticles] = useState<{x: number; y: number; delay: number; duration: number}[]>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
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
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.6, 0],
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

const Footer: FC = memo(() => {
  const {t} = useLanguage();
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialIcons: {[key: string]: React.ElementType} = {
    Github: Github,
    LinkedIn: Linkedin,
    Email: Mail,
  };

  return (
    <div className="relative overflow-visible min-h-[400px] pt-16">
      {/* Animated Background Image with Parallax - same as Hero */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: 1.1,
        }}
        transition={{type: 'spring', stiffness: 50, damping: 30}}>
        <img
          src={BACKGROUND_IMAGE}
          alt="Background"
          className="absolute z-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/85"></div>
      </motion.div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Back to top button - VISÍVEL */}
      <div className="absolute inset-x-0 -top-6 flex justify-center z-20">
        <motion.a
          className="rounded-full bg-white p-3 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 transition-shadow"
          href={`/#${SectionId.Hero}`}
          whileHover={{scale: 1.15, y: -5}}
          whileTap={{scale: 0.9}}>
          <ChevronUpIcon className="h-5 w-5 text-black" />
        </motion.a>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 pb-10 pt-20 sm:px-8 sm:pb-12 sm:pt-24">
        <motion.div
          className="flex flex-col items-center gap-y-10"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}>
          
          {/* Logo/Name */}
          <motion.div 
            className="text-center"
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{delay: 0.2, duration: 0.8}}>
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
              whileHover={{scale: 1.05}}>
              {'Luis Lopes'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block cursor-default"
                  whileHover={{
                    y: -5,
                    color: '#60a5fa',
                    transition: {duration: 0.2},
                  }}>
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h3>
            <motion.div
              className="flex items-center justify-center gap-3 mt-3"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.4, duration: 0.8}}>
              <div className="h-px w-12 bg-white/30"></div>
              <p className="text-sm text-white/50 tracking-widest uppercase">Full Stack Developer</p>
              <div className="h-px w-12 bg-white/30"></div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-x-5"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.3, duration: 0.8}}>
            {socialLinks.map((social, index) => {
              const IconComponent = socialIcons[social.label] || Github;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/60 overflow-hidden backdrop-blur-sm"
                  whileHover={{scale: 1.15, borderColor: 'rgba(255,255,255,0.6)'}}
                  whileTap={{scale: 0.95}}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{delay: 0.4 + index * 0.1, duration: 0.5}}>
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

          {/* Divider */}
          <motion.div 
            className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{scaleX: 0}}
            whileInView={{scaleX: 1}}
            viewport={{once: true}}
            transition={{delay: 0.5, duration: 0.8}}
          />

          {/* Copyright */}
          <motion.div
            className="text-center"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: 0.6, duration: 0.8}}>
            <p className="text-sm text-white/40 flex items-center gap-2 justify-center">
              © {currentYear} Luis Lopes. {t('footer.rights')}
            </p>
            <p className="text-xs text-white/30 mt-2 flex items-center gap-1 justify-center">
              <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by Luis Lopes
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner accents - same as Hero */}
      <div className="absolute top-0 right-0 w-px h-24 bg-gradient-to-b from-white/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-24 h-px bg-gradient-to-l from-white/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-px h-24 bg-gradient-to-t from-white/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-24 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
    </div>
  );
});

Footer.displayName = 'Footer';
export default Footer;
