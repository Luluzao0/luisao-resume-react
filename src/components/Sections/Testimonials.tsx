import {motion} from 'framer-motion';
import {Quote} from 'lucide-react';
import {FC, memo} from 'react';

import {SectionId, testimonials} from '../../data/content';
import {useLanguage} from '../../context/LanguageContext';
import Section, {card, reveal} from '../Layout/Section';

const Testimonials: FC = memo(() => {
  const {t} = useLanguage();

  return (
    <Section eyebrow={testimonials.eyebrow} id={SectionId.Testimonials} title={testimonials.title}>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.items.map(({name, text}) => (
          <motion.figure className={`${card} flex flex-col p-6`} key={name} {...reveal}>
            <Quote className="mb-4 h-8 w-8 text-white/30" />
            <blockquote className="flex-1 leading-relaxed text-white/80">{t(text)}</blockquote>
            <figcaption className="mt-6 border-t border-white/10 pt-4 font-semibold text-white/60">{name}</figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
});

Testimonials.displayName = 'Testimonials';
export default Testimonials;
