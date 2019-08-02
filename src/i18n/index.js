// @flow

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import { languageCookie } from '../helpers/cookies';
// import Cookies from 'js-cookie';

// the translations
// (tip move them in a JSON file and import them)
const resources = {};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    // detection: { // LanguageDetector
    //   lookupCookie: languageCookie
    // }
  });

// i18n.on('languageChanged', function(lang) {
//   Cookies.set(languageCookie, lang, { expires: 60 });
// });

export default i18n;
