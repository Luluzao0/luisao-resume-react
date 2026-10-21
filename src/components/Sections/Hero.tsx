import {ArrowDown, Download, Github, Linkedin, Mail} from 'lucide-react';
import {FC, memo} from 'react';

import {hero, links, SectionId} from '../../data/content';
import {useLanguage} from '../../context/LanguageContext';

// Entrance animations are pure CSS (see globals.css) so the hero is visible before JS hydrates.
const delay = (s: number) => ({animationDelay: `${s}s`});

export const socials = [
  {label: 'GitHub', href: links.github, Icon: Github},
  {label: 'LinkedIn', href: links.linkedin, Icon: Linkedin},
  {label: 'Email', href: links.email, Icon: Mail},
];

const Hero: FC = memo(() => {
  const {t} = useLanguage();

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center px-4 sm:px-6" id={SectionId.Hero}>
      <div className="w-full max-w-4xl space-y-6 sm:space-y-8">
        <h1 className="text-5xl font-bold leading-[0.9] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-9xl">
          {hero.name.split('').map((char, i) => (
            <span
              className="rise inline-block transition duration-200 hover:-translate-y-2 hover:text-blue-400"
              key={i}
              style={delay(0.2 + i * 0.04)}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <div className="rise flex items-center gap-4" style={delay(0.7)}>
          <span className="h-px w-14 bg-white/40" />
          <p className="text-lg tracking-wide text-white/80 sm:text-2xl">{t(hero.role)}</p>
        </div>

        <div
          className="rise w-full max-w-xl rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-sm shadow-lg backdrop-blur-md md:text-base"
          style={delay(0.85)}>
          <p>
            <span className="text-purple-400">let</span> <span className="text-blue-400">hw</span>{' '}
            <span className="text-white">=</span> <span className="text-green-300">"{t(hero.greeting)}"</span>
          </p>
          <p>
            <span className="text-blue-300">console</span>
            <span className="text-white/60">.</span>
            <span className="text-yellow-200">log</span>
            <span className="text-white/60">(</span>
            <span className="text-blue-400">hw</span>
            <span className="text-white/60">)</span>
          </p>
          <p className="mt-3 border-t border-white/10 pt-3 text-white/80">
            <span className="text-xs text-green-500">➜</span> "{t(hero.greeting)}"
          </p>
        </div>

        <div className="rise flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4" style={delay(1)}>
          <a
            className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            href={links.resume}
            rel="noopener noreferrer"
            target="_blank">
            {t(hero.resume)}
            <Download className="h-4 w-4" />
          </a>
          <a
            className="flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            href={`#${SectionId.Contact}`}>
            {t(hero.contact)}
          </a>
          <div className="flex justify-center gap-3 sm:ml-2">
            {socials.map(({label, href, Icon}) => (
              <a
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white hover:bg-white hover:text-black"
                href={href}
                key={label}
                rel="noopener noreferrer"
                target="_blank">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        aria-label={t(hero.scroll)}
        className="fade absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition hover:text-white"
        href={`#${SectionId.About}`}
        style={delay(1.4)}>
        <span className="text-xs uppercase tracking-widest">{t(hero.scroll)}</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
