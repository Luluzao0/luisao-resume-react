import {motion} from 'framer-motion';
import Image from 'next/image';
import {FC, memo} from 'react';

import {about, SectionId} from '../../data/content';
import profilePic from '../../images/minhafoto.webp';
import {useLanguage} from '../../context/LanguageContext';
import Section, {card, reveal} from '../Layout/Section';

const About: FC = memo(() => {
  const {t} = useLanguage();

  return (
    <Section eyebrow={about.eyebrow} id={SectionId.About} title={about.title}>
      <div className="grid items-start gap-10 md:grid-cols-3 md:gap-12">
        <motion.div className="relative mx-auto w-56 md:mx-0 md:w-full" {...reveal}>
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/20 to-transparent blur-xl" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-2 ring-white/30">
            <Image
              alt="Luis Lopes"
              className="object-cover"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 320px, 224px"
              src={profilePic}
            />
          </div>
        </motion.div>

        <div className="space-y-8 md:col-span-2">
          <motion.p className="text-lg leading-relaxed text-white/70" {...reveal}>
            {t(about.text)}
          </motion.p>
          <motion.dl className="grid gap-3 sm:grid-cols-2" {...reveal}>
            {about.facts.map(({Icon, label, value}) => (
              <div className={`${card} flex items-center gap-4 p-4`} key={label.en}>
                <div className="rounded-xl bg-white/10 p-3">
                  <Icon className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-white/40">{t(label)}</dt>
                  <dd className="font-medium text-white">{t(value)}</dd>
                </div>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
