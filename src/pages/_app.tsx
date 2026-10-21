import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import {MotionConfig} from 'framer-motion';
import type {AppProps} from 'next/app';
import {memo} from 'react';

import {LanguageProvider} from '../context/LanguageContext';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </MotionConfig>
  );
});

export default MyApp;
