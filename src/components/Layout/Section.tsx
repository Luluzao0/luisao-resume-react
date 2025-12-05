import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';
import {motion} from 'framer-motion';

import {SectionId} from '../../data/data';

const Section: FC<
  PropsWithChildren<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string}>
> = memo(({children, sectionId, noPadding = false, className}) => {
  return (
    <motion.section 
      className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding})} 
      id={sectionId}
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, margin: '-50px'}}
      transition={{duration: 0.8, ease: 'easeOut' as const}}>
      <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
    </motion.section>
  );
});

Section.displayName = 'Section';
export default Section;
