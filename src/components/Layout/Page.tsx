import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();
  const siteUrl = 'https://www.devluisao.tech/'; // Atualize para seu domínio real

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        
        {/* SEO Meta Tags */}
        <meta name="author" content="Luis Lopes" />
        <meta name="keywords" content="Luis Lopes, Luis Guilherme Lopes, Desenvolvedor Full Stack, Full Stack Developer, Engenheiro de Computação, Computer Engineer, React Developer, Python Developer, Machine Learning, Inteligência Artificial, IA, AI, Web Developer, São Luís, Maranhão, Brasil, Frontend, Backend, Node.js, TypeScript, JavaScript, Portfolio, UEMA, LAPS" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="Portuguese, English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="BR-MA" />
        <meta name="geo.placename" content="São Luís" />
        <meta name="geo.position" content="-2.5307;-44.3068" />
        <meta name="ICBM" content="-2.5307, -44.3068" />

        {/* Canonical URL */}
        <link href={`${siteUrl}${pathname}`} key="canonical" rel="canonical" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Luis Lopes - Portfolio" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`${siteUrl}${pathname}`} property="og:url" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Luis Lopes - Desenvolvedor Full Stack" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
        <meta name="twitter:creator" content="@luislopes" />

        {/* Schema.org structured data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Luis Lopes",
              "alternateName": ["Luis Guilherme Lopes", "Luis Guilherme", "Luís Lopes", "Luís Guilherme Lopes"],
              "url": siteUrl,
              "image": `${siteUrl}/profile-image.jpg`,
              "jobTitle": ["Desenvolvedor Full Stack", "Full Stack Developer", "Engenheiro de Computação", "Computer Engineer", "Software Developer"],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "LAPS - Laboratório de Processamento de Sinais"
                },
                {
                  "@type": "Organization",
                  "name": "IMESC"
                }
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Universidade Estadual do Maranhão (UEMA)"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Luís",
                "addressRegion": "Maranhão",
                "addressCountry": "Brasil"
              },
              "knowsAbout": ["React", "Python", "JavaScript", "TypeScript", "Node.js", "Machine Learning", "Inteligência Artificial", "Web Development", "Mobile Development", "Docker", "AWS"],
              "sameAs": [
                "https://github.com/luluzao0",
                "https://www.linkedin.com/in/1Lgl/"
              ]
            })
          }}
        />

        {/* Schema.org for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Luis Lopes - Portfolio",
              "alternateName": ["Luis Lopes Dev", "Luis Guilherme Lopes Portfolio"],
              "url": siteUrl,
              "description": description,
              "author": {
                "@type": "Person",
                "name": "Luis Lopes"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${siteUrl}/?s={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
