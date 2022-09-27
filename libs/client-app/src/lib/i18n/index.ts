import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

import { NamespacesEnum } from '../types/enums';
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
      ns: [
        NamespacesEnum.Common,
        NamespacesEnum.Home,
        NamespacesEnum.Launch,
        NamespacesEnum.Rocket,
        NamespacesEnum.Event,
        NamespacesEnum.NotFound,
      ],
      defaultNS: NamespacesEnum.Common,
      fallbackNS: NamespacesEnum.Common,
      interpolation: {
        escapeValue: false,
      },
      debug: process.env.NODE_ENV !== 'production',
    });
};

export const i18n = initI18n();
