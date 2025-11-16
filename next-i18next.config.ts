import type { UserConfig } from 'next-i18next';
import path from 'path';

const config: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  localePath: path.resolve('./public/locales'),
  ns: ['common'],
};

export default config;