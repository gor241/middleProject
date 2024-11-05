import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',

    // иметь общее пространство имен, используемое для всего приложения
    ns: ['translationsNS'],
    defaultNS: 'translationsNS',

    debug: false,

    interpolation: {
        escapeValue: false, // не требуется для react!!
    },

    resources: { ru: { translations: {} } },
});

export default i18n;
