export const state = () => ({
  locales: ['en', 'es', 'fr'],
  locale: 'en'
})

export const mutations = {
  setLang (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
