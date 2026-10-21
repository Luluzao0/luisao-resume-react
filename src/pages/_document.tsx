import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Google Translate breaks React: https://github.com/facebook/react/issues/11538 */}
        <meta content="notranslate" name="google" />
        <meta content="#000000" name="theme-color" />
        <meta content="telephone=no" name="format-detection" />
        <link href="https://images.unsplash.com" rel="preconnect" />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
