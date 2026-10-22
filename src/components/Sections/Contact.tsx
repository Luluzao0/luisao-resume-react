import {motion} from 'framer-motion';
import {ArrowUpRight, Github, Linkedin, MapPin} from 'lucide-react';
import {FC, memo} from 'react';

import {contact, links, SectionId} from '../../data/content';
import {useLanguage} from '../../context/LanguageContext';
import Section, {card, reveal} from '../Layout/Section';

const Contact: FC = memo(() => {
  const {t} = useLanguage();

  return (
    <Section eyebrow={contact.eyebrow} id={SectionId.Contact} title={contact.title}>
      <motion.div
        className={`${card} overflow-hidden bg-gradient-to-br from-violet-500/20 via-white/5 to-teal-500/20 p-8 sm:p-12`}
        {...reveal}>
        <h3 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">{t(contact.heading)}</h3>
        <p className="mt-4 max-w-xl text-lg text-white/70">{t(contact.text)}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
            href={links.linkedin}
            rel="noopener noreferrer"
            target="_blank">
            <Linkedin className="h-5 w-5" />
            {t(contact.cta)}
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            href={links.github}
            rel="noopener noreferrer"
            target="_blank">
            <Github className="h-5 w-5" />
            Luluzao0
          </a>
        </div>

        <a
          className="mt-8 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          href={links.map}
          rel="noopener noreferrer"
          target="_blank">
          <MapPin className="h-4 w-4" />
          {t(contact.location)}
        </a>
      </motion.div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
