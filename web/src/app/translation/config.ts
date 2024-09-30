import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translation from './translations/fr.json'

i18next.use(initReactI18next).init({
  resources: {
    fr: {
      translation,
    },
  },
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
})
