// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en_US/translation.json';
import esTranslation from './locales/es_ES/translation.json';
import arTranslation from './locales/ar_AR/translation.json';
import deTranslation from './locales/de_DE/translation.json';
import frTranslation from './locales/fr_FR/translation.json';
import idTranslation from './locales/id_ID/translation.json';
import itTranslation from './locales/it_IT/translation.json';
import jaTranslation from './locales/ja_JP/translation.json';
import koTranslation from './locales/ko_KR/translation.json';
import nlTranslation from './locales/nl_NL/translation.json';
import ptBrTranslation from './locales/pt_BR/translation.json';
import ruTranslation from './locales/ru_RU/translation.json';
import thTranslation from './locales/th_TH/translation.json';
import tlTranslation from './locales/tl_PH/translation.json';
import trTranslation from './locales/tr_TR/translation.json';
import ukTranslation from './locales/uk_UA/translation.json';
import viTranslation from './locales/vi_VN/translation.json';
import zhCnTranslation from './locales/zh_CN/translation.json';
import huTranslation from './locales/hu_HU/translation.json'; // Hungarian
import elTranslation from './locales/el_GR/translation.json'; // Greek
import hiTranslation from './locales/hi_IN/translation.json'; // Hindi
import srTranslation from './locales/sr_RS/translation.json'; // Serbian
import faTranslation from './locales/fa_IR/translation.json'; // Persian
import plTranslation from './locales/pl_PL/translation.json'; // Polish
import zhTwTranslation from './locales/zh_TW/translation.json'; // Traditional Chinese

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
      sr_RS: {
        translation: srTranslation,
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
      'hu_HU', 'el_GR', 'hi_IN', 'sr_RS', 'fa_IR', 'pl_PL', 'zh_TW'
    ], // List of languages
    fallbackLng: 'en_US', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
