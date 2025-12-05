import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';
import {motion} from 'framer-motion';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
import {useLanguage} from '../../../context/LanguageContext';

// Same background as Hero for consistency
const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {items} = contact;
  const {t} = useLanguage();

  return (
    <Section noPadding sectionId={SectionId.Contact}>
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background Image - same as Hero */}
        <div className="absolute inset-0">
          <img
            src={BACKGROUND_IMAGE}
            alt="Background"
            className="absolute z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
          <motion.div
            className="max-w-4xl w-full text-center"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: 'easeOut'}}>
            
            {/* Section Header */}
            <motion.div
              className="mb-12"
              initial={{opacity: 0, y: -20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2, duration: 0.8}}>
              <motion.div 
                className="inline-flex p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm mb-6"
                whileHover={{scale: 1.1, rotate: 5}}>
                <EnvelopeIcon className="h-12 w-12 text-white/80" />
              </motion.div>
              <span className="block text-sm uppercase tracking-[0.3em] text-white/60 mb-4">
                {t('contact.section')}
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                {t('contact.title')}
              </h2>
              <motion.div
                className="mt-4 flex items-center justify-center gap-4"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{delay: 0.4, duration: 0.8}}>
                <div className="h-px w-16 bg-white/40"></div>
                <p className="text-white/60 max-w-md">
                  {t('contact.subtitle')}
                </p>
                <div className="h-px w-16 bg-white/40"></div>
              </motion.div>
            </motion.div>

            {/* Contact Items Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.4, duration: 0.8}}>
              {items.map(({type, text, href}, index) => {
                const {Icon, srLabel} = ContactValueMap[type];
                return (
                  <motion.a
                    key={srLabel}
                    href={href}
                    target="_blank"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-white/80 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.1 * index, duration: 0.6}}
                    whileHover={{scale: 1.03, y: -5}}>
                    <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Icon className="h-6 w-6 text-white/80" />
                    </div>
                    <span className="text-left font-medium">{text}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
