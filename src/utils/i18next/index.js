import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ua from '../../common/locales/ua/translation.json';
import en from '../../common/locales/en/translation.json';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua',
    resources: {
      en: {
        translation: en,
      },
      ua: {
        translation: ua,
      },
    },
    whitelist: ['en', 'ua'],
    debug: false,
    detection: {
      order: ['cookie'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
