
import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next"
import XHR from "i18next-xhr-backend";
import en from '../translations/en';
import ua from '../translations/ua';

i18n
    .use(initReactI18next)
    .use(XHR)
    .use(LanguageDetector)
    .init({
        resources: {
            en,
            ua,
        },
        fallbackLng: 'en',
        debug: true,
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        react: {
            wait: true,
            useSuspense: false,
        },
    });
export default i18n;
