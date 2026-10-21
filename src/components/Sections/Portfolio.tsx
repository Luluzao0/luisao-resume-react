import {motion} from 'framer-motion';
import {ArrowUpRight, Github} from 'lucide-react';
import {FC, memo} from 'react';

import {links, portfolio, Project, SectionId} from '../../data/content';
import {useLanguage} from '../../context/LanguageContext';
import Section, {card, chip, reveal} from '../Layout/Section';

const languageColors: Record<Project['language'], string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
};

const Portfolio: FC = memo(() => {
  const {t} = useLanguage();

  return (
    <Section eyebrow={portfolio.eyebrow} id={SectionId.Portfolio} title={portfolio.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map(({name, url, language, text, tags}) => (
          <motion.a
            className={`${card} group flex flex-col p-6 transition-colors hover:border-white/30 hover:bg-white/10`}
            href={url}
            key={name}
            rel="noopener noreferrer"
            target="_blank"
            {...reveal}>
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="break-all text-lg font-semibold text-white">{name}</h3>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </div>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-white/60">{t(text)}</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 flex items-center gap-1.5 text-xs text-white/60">
                <span className="h-2.5 w-2.5 rounded-full" style={{backgroundColor: languageColors[language]}} />
                {language}
              </span>
              {tags.map(tag => (
                <span className={chip} key={tag.en}>
                  {t(tag)}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div className="mt-10 flex justify-center" {...reveal}>
        <a
          className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
          href={links.github}
          rel="noopener noreferrer"
          target="_blank">
          <Github className="h-5 w-5" />
          {t(portfolio.all)}
          <ArrowUpRight className="h-4 w-4 opacity-60" />
        </a>
      </motion.div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
