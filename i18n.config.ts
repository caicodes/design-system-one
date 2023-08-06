export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      distance: 'Miles from home...',
    },
    en_metric: {
      welcome: 'yo metric sys',
      distance: 'Kilometers from home...',
    },
    fr: {
      welcome: 'Bienvenue',
      distance: 'À des kilomètres de chez moi...',
    },
    jp: {
      welcome: 'いらっしゃいませ',
      distance: '自宅から数マイル...',
    },

  },
}))
