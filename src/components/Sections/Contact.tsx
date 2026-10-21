import {motion} from 'framer-motion';
import {Github, Linkedin, Mail, MapPin} from 'lucide-react';
import {FC, memo} from 'react';

import {contact, links, SectionId} from '../../data/content';
import {useLanguage} from '../../context/LanguageContext';
import Section, {card, reveal} from '../Layout/Section';

const Contact: FC = memo(() => {
  const {t} = useLanguage();

  const items = [
    {Icon: Mail, text: 'devluisao@gmail.com', href: links.email},
    {Icon: Linkedin, text: 'LinkedIn', href: links.linkedin},
    {Icon: Github, text: 'Luluzao0', href: links.github},
    {Icon: MapPin, text: t(contact.location), href: links.map},
  ];

  return (
    <Section eyebrow={contact.eyebrow} id={SectionId.Contact} title={contact.title}>
      <motion.div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between" {...reveal}>
        <p className="max-w-xl text-lg text-white/70">{t(contact.text)}</p>
        <a
          className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
          href={links.email}>
          <Mail className="h-5 w-5" />
          {t(contact.cta)}
        </a>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(({Icon, text, href}) => (
          <motion.a
            className={`${card} group flex items-center gap-4 p-5 text-white/80 transition-colors hover:border-white/30 hover:bg-white/10`}
            href={href}
            key={href}
            rel="noopener noreferrer"
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            {...reveal}>
            <span className="rounded-xl bg-white/10 p-3 transition-colors group-hover:bg-white/20">
              <Icon className="h-5 w-5" />
            </span>
            <span className="font-medium">{text}</span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
