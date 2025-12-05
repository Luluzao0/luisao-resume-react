import {FC, memo} from 'react';
import {motion} from 'framer-motion';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItemComponent: FC<{item: TimelineItem; index: number}> = memo(({item, index}) => {
  const {title, date, location, content} = item;
  return (
    <motion.div
      className="relative flex flex-col p-6 rounded-2xl bg-gradient-to-br from-cyan-500/[0.08] to-teal-500/[0.05] border border-cyan-500/10 mb-5 last:mb-0 backdrop-blur-sm group"
      initial={{opacity: 0, x: -40, scale: 0.95}}
      whileInView={{opacity: 1, x: 0, scale: 1}}
      viewport={{once: true, margin: '-50px'}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        borderColor: 'rgba(34, 211, 238, 0.4)',
        x: 10,
      }}>
      {/* Timeline connector */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden md:flex items-center">
        <motion.div 
          className="w-6 h-6 rounded-full bg-cyan-400 border-4 border-neutral-950 shadow-lg shadow-cyan-500/30"
          initial={{scale: 0}}
          whileInView={{scale: 1}}
          viewport={{once: true}}
          transition={{delay: index * 0.15 + 0.3, type: 'spring', stiffness: 300}}
        />
        <motion.div 
          className="h-px bg-cyan-400/50"
          initial={{width: 0}}
          whileInView={{width: 20}}
          viewport={{once: true}}
          transition={{delay: index * 0.15 + 0.4, duration: 0.3}}
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <motion.h3 
            className="text-xl font-bold text-white group-hover:text-white/80 transition-colors"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: index * 0.15 + 0.2}}>
            {title}
          </motion.h3>
          <motion.span 
            className="text-sm text-cyan-300 font-semibold px-3 py-1 bg-cyan-500/15 rounded-full w-fit border border-cyan-500/20"
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{delay: index * 0.15 + 0.3}}>
            {date}
          </motion.span>
        </div>
        <motion.span 
          className="text-sm text-white/40 font-medium flex items-center gap-2"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{delay: index * 0.15 + 0.35}}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </motion.span>
      </div>
      <motion.div 
        className="mt-4 text-white/60 text-sm leading-relaxed prose-strong:text-white/80"
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{delay: index * 0.15 + 0.4}}>
        {content}
      </motion.div>
    </motion.div>
  );
});

TimelineItemComponent.displayName = 'TimelineItem';
export default TimelineItemComponent;
