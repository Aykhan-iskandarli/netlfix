import i18n from 'i18next';
import translationAZ from "src/assets/locale/az/translation.json";
import translationEN from "src/assets/locale/en/translation.json";
import translationRU from "src/assets/locale/ru/translation.json";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  az: {
    translation: translationAZ
  },
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)

  .init({
    fallbackLng: 'az',
    debug: false,
    resources,

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;