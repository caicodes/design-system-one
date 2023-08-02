import { acceptHMRUpdate, defineStore } from '@pinia/nuxt/dist/runtime/composables'

export const useTheme = defineStore('theme', {
  state: () => ({
    colorScheme: 100,
    settings: 100,
    typography: 100,
    spacing: 100,
    count: 500,
  }),
  actions: {
    increment() {
      this.count += 1
    },
  },
  getters: {
    getCount: state => state.count,
    getColorScheme: state => state.colorScheme,
    getSettings: state => state.settings,
    getTypography: state => state.typography,
    getSpacing: state => state.spacing,
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
