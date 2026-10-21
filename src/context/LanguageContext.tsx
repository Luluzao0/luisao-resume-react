import {createContext, FC, ReactNode, useCallback, useContext, useEffect, useState} from 'react';

import type {L} from '../data/content';

type Language = keyof L;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (text: L) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: FC<{children: ReactNode}> = ({children}) => {
  const [language, setLanguage] = useState<Language>('pt');

  // SSR renders 'pt'; on the client, restore the saved choice or fall back to the browser language.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('language');
    } catch {}
    const preferred = saved ?? (navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en');
    setLanguage(preferred === 'en' ? 'en' : 'pt');
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => {
      const next = prev === 'pt' ? 'en' : 'pt';
      try {
        localStorage.setItem('language', next);
      } catch {}
      return next;
    });
  }, []);

  const t = useCallback((text: L) => text[language], [language]);

  return <LanguageContext.Provider value={{language, toggleLanguage, t}}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
