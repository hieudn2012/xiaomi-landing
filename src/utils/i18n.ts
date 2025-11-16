import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '@/public/locales/en/common.json';
import jaTranslations from '@/public/locales/ja/common.json';
import { setLanguage } from '@/src/utils/localStorage';

const resources = {
  en: {
    common: enTranslations,
  },
  ja: {
    common: jaTranslations,
  },
};

// Always initialize with 'en' to avoid hydration mismatch
// Language will be restored from localStorage on client side after mount

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ja'],
    defaultNS: 'common',
    ns: ['common'],
    resources,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Save language preference to localStorage when changed
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    setLanguage(lng);
  }
});

export default i18n;

