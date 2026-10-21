import {ArrowUp} from 'lucide-react';
import {FC, memo} from 'react';

import {footer, hero, SectionId} from '../../data/content';
import {useLanguage} from '../../context/LanguageContext';
import {socials} from './Hero';

const Footer: FC = memo(() => {
  const {t} = useLanguage();

  return (
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-2xl font-bold tracking-tighter text-white">{hero.name}</p>
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} · {t(footer.rights)}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({label, href, Icon}) => (
            <a
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white hover:bg-white hover:text-black"
              href={href}
              key={label}
              rel="noopener noreferrer"
              target="_blank">
              <Icon className="h-5 w-5" />
            </a>
          ))}
          <a
            aria-label={t(footer.top)}
            className="ml-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:-translate-y-1"
            href={`#${SectionId.Hero}`}>
            <ArrowUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
