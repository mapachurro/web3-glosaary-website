// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './i18n/locales/en_US/translation.json';
import esTranslation from './i18n/locales/es_ES/translation.json';
import arTranslation from './i18n/locales/ar_AR/translation.json';
import deTranslation from './i18n/locales/de_DE/translation.json';
import frTranslation from './i18n/locales/fr_FR/translation.json';
import idTranslation from './i18n/locales/id_ID/translation.json';
import itTranslation from './i18n/locales/it_IT/translation.json';
import jaTranslation from './i18n/locales/ja_JP/translation.json';
import koTranslation from './i18n/locales/ko_KR/translation.json';
import nlTranslation from './i18n/locales/nl_NL/translation.json';
import ptBrTranslation from './i18n/locales/pt_BR/translation.json';
import ruTranslation from './i18n/locales/ru_RU/translation.json';
import thTranslation from './i18n/locales/th_TH/translation.json';
import tlTranslation from './i18n/locales/tl_PH/translation.json';
import trTranslation from './i18n/locales/tr_TR/translation.json';
import ukTranslation from './i18n/locales/uk_UA/translation.json';
import viTranslation from './i18n/locales/vi_VN/translation.json';
import zhCnTranslation from './i18n/locales/zh_CN/translation.json';
import huTranslation from './i18n/locales/hu_HU/translation.json'; // Hungarian
import elTranslation from './i18n/locales/el_GR/translation.json'; // Greek
import hiTranslation from './i18n/locales/hi_IN/translation.json'; // Hindi
import faTranslation from './i18n/locales/fa_IR/translation.json'; // Persian
import plTranslation from './i18n/locales/pl_PL/translation.json'; // Polish
import zhTwTranslation from './i18n/locales/zh_TW/translation.json'; // Traditional Chinese

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en_US: {
        translation: enTranslation,
      },
      es_ES: {
        translation: esTranslation,
      },
      ar_AR: {
        translation: arTranslation,
      },
      de_DE: {
        translation: deTranslation,
      },
      fr_FR: {
        translation: frTranslation,
      },
      id_ID: {
        translation: idTranslation,
      },
      it_IT: {
        translation: itTranslation,
      },
      ja_JP: {
        translation: jaTranslation,
      },
      ko_KR: {
        translation: koTranslation,
      },
      nl_NL: {
        translation: nlTranslation,
      },
      pt_BR: {
        translation: ptBrTranslation,
      },
      ru_RU: {
        translation: ruTranslation,
      },
      th_TH: {
        translation: thTranslation,
      },
      tl_PH: {
        translation: tlTranslation,
      },
      tr_TR: {
        translation: trTranslation,
      },
      uk_UA: {
        translation: ukTranslation,
      },
      vi_VN: {
        translation: viTranslation,
      },
      zh_CN: {
        translation: zhCnTranslation,
      },
      hu_HU: {
        translation: huTranslation,
      },
      el_GR: {
        translation: elTranslation,
      },
      hi_IN: {
        translation: hiTranslation,
      },
      fa_IR: {
        translation: faTranslation,
      },
      pl_PL: {
        translation: plTranslation,
      },
      zh_TW: {
        translation: zhTwTranslation,
      },
    },
    lng: 'en_US', // default language
    lngs: [
      'en_US', 'es_ES', 'ar_AR', 'de_DE', 'fr_FR', 'id_ID',
      'it_IT', 'ja_JP', 'ko_KR', 'nl_NL', 'pt_BR', 'ru_RU',
      'th_TH', 'tl_PH', 'tr_TR', 'uk_UA', 'vi_VN', 'zh_CN',
      'hu_HU', 'el_GR', 'hi_IN', 'fa_IR', 'pl_PL', 'zh_TW'
    ], // List of languages
    fallbackLng: 'en_US', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
