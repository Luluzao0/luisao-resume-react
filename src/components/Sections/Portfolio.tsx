import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';
import {useLanguage} from '../../context/LanguageContext';

// Same background as Hero for consistency
const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';

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
            className="max-w-6xl w-full"
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

            {/* Portfolio Grid */}
            <motion.div
              className="columns-2 md:columns-3 lg:columns-4 gap-6"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.3, duration: 0.8}}>
              {portfolioItems.map((item, index) => {
                const {title, image} = item;
                return (
                  <motion.div 
                    className="pb-6 break-inside-avoid" 
                    key={`${title}-${index}`}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.1 * index, duration: 0.6}}>
                    <motion.div
                      className="relative h-max w-full overflow-hidden rounded-2xl border border-white/10 group"
                      whileHover={{scale: 1.03, y: -5, borderColor: 'rgba(255,255,255,0.3)'}}>
                      <Image 
                        alt={title} 
                        className="h-full w-full transition-transform duration-500 group-hover:scale-110" 
                        placeholder="blur" 
                        src={image} 
                      />
                      <ItemOverlay item={item} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300',
        {'opacity-0 hover:opacity-100': !mobile},
        showOverlay ? 'opacity-100' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <h3 className="text-center text-xl font-bold text-white px-4">{title}</h3>
      <p className="mt-2 text-center text-sm text-white/70 px-4">{description}</p>
      <ArrowTopRightOnSquareIcon className="mt-4 h-5 w-5 text-white/80" />
    </a>
  );
});
