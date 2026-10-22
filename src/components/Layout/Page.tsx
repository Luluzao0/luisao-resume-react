import Head from 'next/head';
import {FC, memo, PropsWithChildren, useEffect} from 'react';

import {links, meta, siteUrl} from '../../data/content';

// Animated aurora + grid background, pure CSS (see globals.css): no image download.
const Background: FC = () => (
  <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-[#06040d]">
    <div className="aurora aurora-1" />
    <div className="aurora aurora-2" />
    <div className="aurora aurora-3" />
    <div className="grid-bg absolute inset-0" />
  </div>
);

// Feeds the cursor position to the hovered .spotlight card (CSS draws the glow).
const useSpotlight = () =>
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element).closest?.<HTMLElement>('.spotlight');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, {passive: true});
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Luis Lopes',
    alternateName: ['Luis Guilherme Lopes', 'Luís Lopes'],
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    jobTitle: 'Desenvolvedor Full Stack',
    worksFor: [
      {'@type': 'Organization', name: 'IMESC'},
      {'@type': 'Organization', name: 'LAPS - Laboratório de Processamento de Sinais'},
    ],
    alumniOf: {'@type': 'EducationalOrganization', name: 'Universidade Estadual do Maranhão (UEMA)'},
    address: {'@type': 'PostalAddress', addressLocality: 'São Luís', addressRegion: 'MA', addressCountry: 'BR'},
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'Machine Learning', 'Docker', 'AWS'],
    sameAs: [links.github, links.linkedin],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Luis Lopes - Portfolio',
    url: siteUrl,
    description: meta.description,
  },
];

const Page: FC<PropsWithChildren> = memo(({children}) => {
  useSpotlight();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={meta.description} name="description" />
        <meta content="Luis Lopes" name="author" />
        <link href={`${siteUrl}/`} rel="canonical" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph: https://ogp.me/ */}
        <meta content="website" property="og:type" />
        <meta content="Luis Lopes - Portfolio" property="og:site_name" />
        <meta content={meta.title} property="og:title" />
        <meta content={meta.description} property="og:description" />
        <meta content={`${siteUrl}/`} property="og:url" />
        <meta content="pt_BR" property="og:locale" />
        <meta content="en_US" property="og:locale:alternate" />
        <meta content={`${siteUrl}/og-image.jpg`} property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content="Luis Lopes - Desenvolvedor Full Stack" property="og:image:alt" />
        <meta content="summary_large_image" name="twitter:card" />

        <script dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} type="application/ld+json" />
      </Head>
      <Background />
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
