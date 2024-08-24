const path = require('path');

module.exports = {
  input: ['src/**/*.{js,jsx}'], // Specify the input files to scan
  output: 'src/locales/', // Specify the output directory for the translation files
  options: {
    debug: true, // Enable debugging
    removeUnusedKeys: false, // Remove unused translation keys
    func: {
      list: ['i18next.t', 'i18n.t'], // List of functions to scan for translation keys
      extensions: ['.js', '.jsx'] // File extensions to scan
    },
    lngs: ['en', 'es', 'ar', 'de', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pt-br', 'ru', 'th', 'tl', 'tr', 'uk', 'vi', 'zh-cn'], // List of languages to generate translation files for
    ns: ['translation'], // Namespace to use for translation keys
    defaultLng: 'en', // Default language
    resource: {
      loadPath: 'src/i18n/locales/{{lng}}/{{ns}}.json', // Path to load existing translation files
      savePath: 'src/i18n/locales/{{lng}}/{{ns}}.json', // Path to save updated translation files
      jsonIndent: 2 // Indentation for the JSON files
    }
  }
};