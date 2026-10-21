import '../globals.css';

import {MotionConfig} from 'framer-motion';
import type {AppProps} from 'next/app';

import {LanguageProvider} from '../context/LanguageContext';

const App = ({Component, pageProps}: AppProps) => (
  <MotionConfig reducedMotion="user">
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  </MotionConfig>
);

export default App;
