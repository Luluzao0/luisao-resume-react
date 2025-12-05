import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';

import {LanguageProvider} from '../context/LanguageContext';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
});

export default MyApp;
