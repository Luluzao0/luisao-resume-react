import {Bars3BottomRightIcon, XMarkIcon, GlobeAltIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, memo, useCallback, useMemo, useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';
import {useLanguage} from '../../context/LanguageContext';

export const headerID = 'headerNav';

// Nav labels translation map
const navLabels: Record<SectionId, {pt: string; en: string}> = {
  [SectionId.Hero]: {pt: 'Início', en: 'Home'},
  [SectionId.About]: {pt: 'Sobre', en: 'About'},
  [SectionId.Resume]: {pt: 'Currículo', en: 'Resume'},
  [SectionId.Portfolio]: {pt: 'Portfólio', en: 'Portfolio'},
  [SectionId.Testimonials]: {pt: 'Depoimentos', en: 'Testimonials'},
  [SectionId.Contact]: {pt: 'Contato', en: 'Contact'},
  [SectionId.Skills]: {pt: 'Habilidades', en: 'Skills'},
  [SectionId.Stats]: {pt: 'Estatísticas', en: 'Stats'},
};

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Resume, SectionId.Portfolio, SectionId.Testimonials, SectionId.Contact],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} scrolled={scrolled} />
      <DesktopNav currentSection={currentSection} navSections={navSections} scrolled={scrolled} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null; scrolled: boolean}> = memo(
  ({navSections, currentSection, scrolled}) => {
    const {language, toggleLanguage} = useLanguage();
    
    return (
      <motion.header
        className={classNames(
          'fixed top-0 z-50 hidden w-full sm:block transition-all duration-500',
          scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        )}
        id={headerID}
        initial={{y: -100}}
        animate={{y: 0}}
        transition={{duration: 0.6, ease: 'easeOut'}}>
        <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
          {/* Logo */}
          <motion.a
            href={`/#${SectionId.Hero}`}
            className="text-white font-bold text-xl tracking-tighter"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}>
            Luis <span className="text-white/60">Lopes</span>
          </motion.a>
          
          {/* Nav Items */}
          <div className="flex items-center gap-1">
            {navSections.map((section, index) => (
              <NavItem
                key={section}
                section={section}
                current={section === currentSection}
                index={index}
              />
            ))}
            
            {/* Language Toggle Button */}
            <motion.button
              onClick={toggleLanguage}
              className="ml-4 flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}>
              <GlobeAltIcon className="h-4 w-4" />
              <span className="text-sm font-medium uppercase">{language === 'pt' ? 'EN' : 'PT'}</span>
            </motion.button>
          </div>
        </nav>
      </motion.header>
    );
  },
);

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null; scrolled: boolean}> = memo(
  ({navSections, currentSection, scrolled}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {language, toggleLanguage} = useLanguage();

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    return (
      <>
        {/* Language Button - Mobile (top left) */}
        <motion.button
          onClick={toggleLanguage}
          className={classNames(
            'fixed left-4 top-4 z-50 rounded-full p-3 sm:hidden transition-all duration-300 flex items-center gap-1',
            scrolled || isOpen ? 'bg-white/10 backdrop-blur-xl border border-white/20' : 'bg-black/30 backdrop-blur-sm'
          )}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}>
          <GlobeAltIcon className="h-5 w-5 text-white" />
          <span className="text-xs font-medium text-white uppercase">{language === 'pt' ? 'EN' : 'PT'}</span>
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          aria-label="Menu Button"
          className={classNames(
            'fixed right-4 top-4 z-50 rounded-full p-3 sm:hidden transition-all duration-300',
            scrolled || isOpen ? 'bg-white/10 backdrop-blur-xl border border-white/20' : 'bg-black/30 backdrop-blur-sm'
          )}
          onClick={toggleOpen}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}>
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{rotate: -90, opacity: 0}}
                animate={{rotate: 0, opacity: 1}}
                exit={{rotate: 90, opacity: 0}}
                transition={{duration: 0.2}}>
                <XMarkIcon className="h-6 w-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{rotate: 90, opacity: 0}}
                animate={{rotate: 0, opacity: 1}}
                exit={{rotate: -90, opacity: 0}}
                transition={{duration: 0.2}}>
                <Bars3BottomRightIcon className="h-6 w-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-40 sm:hidden"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3}}>
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                onClick={toggleOpen}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
              />
              
              {/* Menu Content */}
              <motion.nav
                className="relative h-full flex flex-col items-center justify-center gap-8"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 20}}
                transition={{delay: 0.1, duration: 0.3}}>
                {navSections.map((section, index) => (
                  <motion.div
                    key={section}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.1 + index * 0.05, duration: 0.3}}>
                    <Link
                      href={`/#${section}`}
                      onClick={toggleOpen}
                      className={classNames(
                        'text-3xl font-bold tracking-tighter transition-colors',
                        section === currentSection ? 'text-white' : 'text-white/60 hover:text-white'
                      )}>
                      {navLabels[section][language]}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  },
);

const NavItem: FC<{
  section: SectionId;
  current: boolean;
  index: number;
}> = memo(({section, current, index}) => {
  const {language} = useLanguage();
  
  return (
    <motion.div
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.1 + index * 0.05, duration: 0.5}}>
      <Link
        className={classNames(
          'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full',
          current 
            ? 'text-white' 
            : 'text-white/60 hover:text-white'
        )}
        href={`/#${section}`}>
        {current && (
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
            layoutId="navbar-indicator"
            transition={{type: 'spring', stiffness: 500, damping: 30}}
          />
        )}
        <span className="relative z-10">{navLabels[section][language]}</span>
      </Link>
    </motion.div>
  );
});

Header.displayName = 'Header';
export default Header;
