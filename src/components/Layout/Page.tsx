import {motion, useMotionValue, useSpring} from 'framer-motion';
import Head from 'next/head';
import {FC, memo, PropsWithChildren, useEffect} from 'react';

import {links, meta, siteUrl} from '../../data/content';

const BACKGROUND =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75';

// One fixed background for the whole page, with a subtle mouse parallax driven by motion values (no re-renders).
const Background: FC = memo(() => {
  const spring = {stiffness: 50, damping: 30};
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, spring);
  const y = useSpring(my, spring);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 20);
      my.set((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener('mousemove', onMove, {passive: true});
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <motion.img
        alt=""
        className="h-full w-full object-cover"
        sizes="100vw"
        src={`${BACKGROUND}&w=1920`}
        srcSet={[828, 1280, 1920, 2560].map(w => `${BACKGROUND}&w=${w} ${w}w`).join(', ')}
        style={{x, y, scale: 1.1}}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-black/90" />
    </div>
  );
});

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

const Page: FC<PropsWithChildren> = memo(({children}) => (
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
));

Page.displayName = 'Page';
export default Page;
