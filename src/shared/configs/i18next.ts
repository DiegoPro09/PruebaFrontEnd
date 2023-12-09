import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import englobal from '../../translations/en/global.json';
import esglobal from '../../translations/es/global.json';

i18next
    .use(initReactI18next)
    .init({
        resources: {
            es:{
                global: esglobal
              },
            en:{
                global: englobal
            }
        },
        lng: 'es',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18next
