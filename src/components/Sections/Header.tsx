import classNames from 'classnames';
import {AnimatePresence, motion, useScroll} from 'framer-motion';
import {Globe, Menu, X} from 'lucide-react';
import {FC, memo, useEffect, useState} from 'react';

import {nav, SectionId} from '../../data/content';
import {useLanguage} from '../../context/LanguageContext';

const Header: FC = memo(() => {
  const {language, toggleLanguage, t} = useLanguage();
  const [active, setActive] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const {scrollYProgress} = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The active section is the one crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id as SectionId)),
      {rootMargin: '-50% 0px -50% 0px'},
    );
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const languageLabel = language === 'pt' ? 'Switch to English' : 'Mudar para Português';

  return (
    <header
      className={classNames(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled || open ? 'border-b border-white/10 bg-black/70 backdrop-blur-xl' : 'bg-transparent',
      )}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a className="text-xl font-bold tracking-tighter text-white" href={`#${SectionId.Hero}`}>
          Luis <span className="text-white/60">Lopes</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map(({id, label}) => (
              <li key={id}>
                <a
                  className={classNames(
                    'relative block rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    id === active ? 'text-white' : 'text-white/60 hover:text-white',
                  )}
                  href={`#${id}`}>
                  {id === active && (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-white/20 bg-white/10"
                      layoutId="nav-indicator"
                      transition={{type: 'spring', stiffness: 500, damping: 30}}
                    />
                  )}
                  <span className="relative">{t(label)}</span>
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-label={languageLabel}
            className="ml-2 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium uppercase text-white/80 transition hover:bg-white/20 hover:text-white"
            onClick={toggleLanguage}
            title={languageLabel}>
            <Globe className="h-4 w-4" />
            {language === 'pt' ? 'EN' : 'PT'}
          </button>

          <button
            aria-expanded={open}
            aria-label="Menu"
            className="ml-2 rounded-full border border-white/20 bg-white/10 p-2 text-white md:hidden"
            onClick={() => setOpen(o => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            animate={{opacity: 1, height: 'auto'}}
            className="overflow-hidden px-4 md:hidden"
            exit={{opacity: 0, height: 0}}
            initial={{opacity: 0, height: 0}}>
            {nav.map(({id, label}) => (
              <li key={id}>
                <a
                  className={classNames(
                    'block py-3 text-2xl font-bold tracking-tighter',
                    id === active ? 'text-white' : 'text-white/60',
                  )}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}>
                  {t(label)}
                </a>
              </li>
            ))}
            <li className="h-4" />
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Reading progress */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-violet-400 via-fuchsia-400 to-teal-300"
        style={{scaleX: scrollYProgress}}
      />
    </header>
  );
});

Header.displayName = 'Header';
export default Header;
