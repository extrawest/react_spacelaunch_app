import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

import { enResource } from './en';

export const initI18n = () => {
  return i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
      resources: {
        en: enResource,
      },
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      debug: process.env.NODE_ENV !== 'production',
    });
};

export const i18n = initI18n();
