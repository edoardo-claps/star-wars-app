import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import eng from './eng';
import ita from './ita';



i18next.use(initReactI18next)
.init({
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: eng},
    it: {translation: ita},
  },
  fallbackLng: ['en','it'],
  interpolation: {escapeValue: false},
});


export default i18next;
