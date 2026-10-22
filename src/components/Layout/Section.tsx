import classNames from 'classnames';
import {motion} from 'framer-motion';
import {FC, memo, PropsWithChildren} from 'react';

import {L, SectionId} from '../../data/content';
import {useLanguage} from '../../context/LanguageContext';

export const reveal = {
  initial: {opacity: 0, y: 24},
  whileInView: {opacity: 1, y: 0},
  viewport: {once: true, margin: '-60px'},
  transition: {duration: 0.6, ease: 'easeOut'},
} as const;

export const card = 'spotlight rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm';
export const chip = 'rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-white/70';

const Section: FC<PropsWithChildren<{id: SectionId; eyebrow: L; title: L; className?: string}>> = memo(
  ({id, eyebrow, title, className, children}) => {
    const {t} = useLanguage();
    return (
      <section className={classNames('scroll-mt-16 px-4 py-24 sm:px-6 sm:py-32', className)} id={id}>
        <div className="mx-auto max-w-5xl">
          <motion.header className="mb-12 sm:mb-16" {...reveal}>
            <p className="mb-4 border-l-2 border-violet-400/70 pl-4 text-sm uppercase tracking-[0.3em] text-white/60">
              {t(eyebrow)}
            </p>
            <h2 className="bg-gradient-to-br from-white via-white to-violet-300/70 bg-clip-text pb-1 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-7xl">
              {t(title)}
            </h2>
          </motion.header>
          {children}
        </div>
      </section>
    );
  },
);

Section.displayName = 'Section';
export default Section;
