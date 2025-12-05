import classNames from 'classnames';
import {FC, memo, UIEventHandler, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {Quote, ChevronLeft, ChevronRight} from 'lucide-react';

import {SectionId, testimonial} from '../../data/data';
import {Testimonial as TestimonialType} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import Section from '../Layout/Section';
import {useLanguage} from '../../context/LanguageContext';

// Same background as Hero for consistency
const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';

// Floating particles component - same as Hero
const FloatingParticles: FC = () => {
  const [particles, setParticles] = useState<{x: number; y: number; delay: number; duration: number}[]>([]);

  useEffect(() => {
    const newParticles = [...Array(25)].map(() => ({
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
            y: [0, -80, 0],
            opacity: [0, 0.8, 0],
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

const Testimonials: FC = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const {t} = useLanguage();

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();

  const {imageSrc, testimonials: originalTestimonials} = testimonial;

  // Traduzir os depoimentos
  const testimonials = useMemo(() => {
    return originalTestimonials.map((item, index) => ({
      ...item,
      text: t(`testimonial.${index + 1}`),
    }));
  }, [originalTestimonials, t]);

  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  useEffect(() => {
    if (scrollContainer.current) {
      const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
      setActiveIndex(newIndex);
    }
  }, [scrollValue]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const setTestimonial = useCallback(
    (index: number) => () => {
      if (scrollContainer.current !== null) {
        scrollContainer.current.scrollLeft = itemWidth.current * index;
      }
    },
    [],
  );

  const next = useCallback(() => {
    if (activeIndex + 1 === testimonials.length) {
      setTestimonial(0)();
    } else {
      setTestimonial(activeIndex + 1)();
    }
  }, [activeIndex, setTestimonial, testimonials.length]);

  const prev = useCallback(() => {
    if (activeIndex === 0) {
      setTestimonial(testimonials.length - 1)();
    } else {
      setTestimonial(activeIndex - 1)();
    }
  }, [activeIndex, setTestimonial, testimonials.length]);

  const handleScroll: UIEventHandler<HTMLDivElement> = event => {
    setScrollValue(event.currentTarget.scrollLeft);
  };

  useInterval(next, 10000);

  if (!testimonials.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div className="relative min-h-[700px] w-full overflow-hidden bg-black">
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
            src={resolveSrc || BACKGROUND_IMAGE}
            alt="Background"
            className="absolute z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>
        </motion.div>

        {/* Floating particles */}
        <FloatingParticles />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[700px] px-6 py-20">
          <motion.div
            className="max-w-5xl w-full"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: 'easeOut'}}>
            
            {/* Section Header - same style as Hero */}
            <motion.div
              className="mb-16"
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2, duration: 0.8}}>
              <span className="inline-block text-sm uppercase tracking-[0.3em] text-white/60 border-l-2 border-white/40 pl-4 mb-4">
                {t('testimonials.section')}
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                {t('testimonials.title').split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block cursor-default"
                    initial={{y: 50, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{
                      delay: 0.3 + i * 0.03,
                      duration: 0.6,
                      ease: 'easeOut',
                    }}
                    whileHover={{
                      y: -5,
                      color: '#60a5fa',
                      transition: {duration: 0.2},
                    }}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h2>
            </motion.div>

            {/* Testimonial Card with glassmorphism */}
            <motion.div
              className="relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden"
              initial={{opacity: 0, scale: 0.95}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{delay: 0.3, duration: 0.8}}
              whileHover={{borderColor: 'rgba(255,255,255,0.2)'}}>
              
              {/* Large Quote Icon Background */}
              <motion.div
                className="absolute -top-4 -left-4 opacity-10"
                initial={{scale: 0, rotate: -20}}
                whileInView={{scale: 1, rotate: 0}}
                viewport={{once: true}}
                transition={{delay: 0.5, duration: 0.8}}>
                <Quote className="w-32 h-32 text-white" />
              </motion.div>
              
              {/* Testimonials Carousel */}
              <div
                className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
                onScroll={handleScroll}
                ref={scrollContainer}>
                {testimonials.map((testimonialItem, index) => (
                  <TestimonialItem
                    key={`${testimonialItem.name}-${index}`}
                    testimonial={testimonialItem}
                    isActive={index === activeIndex}
                    index={index}
                  />
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-10">
                {/* Navigation Arrows */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:border-white/40 transition-all"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}>
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:border-white/40 transition-all"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}>
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Dots */}
                <div className="flex gap-3">
                  {testimonials.map((_, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <motion.button
                        key={`dot-${index}`}
                        className={classNames(
                          'h-2.5 rounded-full transition-all duration-500',
                          isActive ? 'w-10 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/50',
                        )}
                        disabled={isActive}
                        onClick={setTestimonial(index)}
                        whileHover={{scale: isActive ? 1 : 1.2}}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Corner accents - same as Hero */}
        <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-white/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-px h-32 bg-gradient-to-t from-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
      </div>
    </Section>
  );
});

// Testimonial Item Component
const TestimonialItem: FC<{testimonial: TestimonialType; isActive: boolean; index: number}> = memo(
  ({testimonial: {text, name, image}, isActive, index}) => (
    <motion.div
      className={classNames(
        'flex w-full shrink-0 snap-start snap-always flex-col items-center gap-y-6 p-4 transition-all duration-500',
        isActive ? 'opacity-100' : 'opacity-0',
      )}
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: isActive ? 1 : 0, y: 0}}
      viewport={{once: true}}
      transition={{delay: index * 0.1, duration: 0.6}}>
      
      {/* Profile Image */}
      {image && (
        <motion.div 
          className="relative"
          whileHover={{scale: 1.05}}>
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-white/20">
            <img
              className="h-full w-full object-cover"
              src={image}
              alt={name}
            />
          </div>
          <motion.div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur-md"
            whileHover={{opacity: 0.3}}
            transition={{duration: 0.3}}
          />
        </motion.div>
      )}
      
      {/* Quote Text */}
      <div className="text-center max-w-2xl">
        <p className="text-lg md:text-xl lg:text-2xl font-medium italic text-white/80 leading-relaxed">
          "{text}"
        </p>
      </div>
      
      {/* Name */}
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-white/30"></div>
        <p className="text-base md:text-lg text-white/60 font-semibold tracking-wide">{name}</p>
        <div className="h-px w-8 bg-white/30"></div>
      </div>
    </motion.div>
  ),
);

Testimonials.displayName = 'Testimonials';
export default Testimonials;
