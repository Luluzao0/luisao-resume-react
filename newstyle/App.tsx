import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated Background Image */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: 1.1,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div 
          className="max-w-4xl w-full space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Small intro text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="overflow-hidden"
          >
            <span className="inline-block text-sm uppercase tracking-[0.3em] text-white/60 border-l-2 border-white/40 pl-4">
              Portfolio 2025
            </span>
          </motion.div>

          {/* Main Name with stagger effect */}
          <div className="overflow-hidden">
            <motion.h1 
              className="text-7xl md:text-9xl tracking-tighter text-white leading-[0.9]"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {'Luis Lopes'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.5 + i * 0.05,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    y: -10,
                    color: '#60a5fa',
                    transition: { duration: 0.2 }
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subtitle with line animation */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div 
              className="h-px bg-white/40"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            />
            <p className="text-xl md:text-2xl text-white/80 tracking-wide">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Criando experiências digitais únicas através de código elegante, 
            design intuitivo e atenção aos detalhes.
          </motion.p>

          {/* Social Links with hover effects */}
          <motion.div 
            className="flex gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="group relative w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/60 overflow-hidden"
                whileHover={{ scale: 1.1, borderColor: 'rgba(255,255,255,0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <social.icon className="w-5 h-5 relative z-10 group-hover:text-black transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-white/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-white/40 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-white/40 to-transparent"></div>
    </div>
  );
}
