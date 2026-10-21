import {motion} from 'framer-motion';
import {Briefcase, GraduationCap, LucideIcon, Wrench} from 'lucide-react';
import {FC, memo} from 'react';

import {L, resume, SectionId, TimelineEntry} from '../../data/content';
import {useLanguage} from '../../context/LanguageContext';
import Section, {card, chip, reveal} from '../Layout/Section';

const SubHeading: FC<{Icon: LucideIcon; title: L}> = ({Icon, title}) => {
  const {t} = useLanguage();
  return (
    <h3 className="mb-8 flex items-center gap-4 text-2xl font-bold text-white">
      <span className="rounded-xl border border-white/20 bg-white/10 p-3">
        <Icon className="h-5 w-5" />
      </span>
      {t(title)}
      <span className="h-px flex-1 bg-white/20" />
    </h3>
  );
};

const Timeline: FC<{entries: TimelineEntry[]}> = ({entries}) => {
  const {t} = useLanguage();
  return (
    <ol className="space-y-4 border-l-2 border-white/20 pl-6">
      {entries.map(({title, place, date, text, tags}) => (
        <motion.li className={`${card} relative p-5 sm:p-6`} key={place + date.en} {...reveal}>
          <span className="absolute -left-[33px] top-7 h-4 w-4 rounded-full border-4 border-black bg-white" />
          <div className="mb-1 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h4 className="text-lg font-bold text-white">{t(title)}</h4>
            <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-sm text-white/60">{t(date)}</span>
          </div>
          <p className="mb-3 text-sm font-medium text-white/50">{place}</p>
          <p className="text-sm leading-relaxed text-white/70">{t(text)}</p>
          {tags && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.map(tag => (
                <li className={chip} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </motion.li>
      ))}
    </ol>
  );
};

const Resume: FC = memo(() => {
  const {t} = useLanguage();

  return (
    <Section eyebrow={resume.eyebrow} id={SectionId.Resume} title={resume.title}>
      <div className="space-y-16">
        <div>
          <SubHeading Icon={Briefcase} title={resume.experienceTitle} />
          <Timeline entries={resume.experience} />
        </div>

        <div>
          <SubHeading Icon={GraduationCap} title={resume.educationTitle} />
          <Timeline entries={resume.education} />
        </div>

        <div>
          <SubHeading Icon={Wrench} title={resume.skillsTitle} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resume.skills.map(({name, items}) => (
              <motion.div className={`${card} p-5`} key={name.en} {...reveal}>
                <h4 className="mb-3 font-bold text-white">{t(name)}</h4>
                <ul className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <li className={chip} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
