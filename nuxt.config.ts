import * as process from 'node:process'
import { presetUno } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@pinia/nuxt', '@nuxtjs/color-mode', '@vite-pwa/nuxt', 'nuxt-vuefire'],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/theme.scss',
  ],

  unocss: {
    presets: <object | any>[presetUno(), presetDaisy()],
  },

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    public: {
      // cms/api
      wpUri: process.env.WP_URI,
      datoCmsPublicReadOnlyToken: 'ae0eac9bea14dc97db0d82dcffd1a2',
    },
  },

  vuefire: {
    config: {
      apiKey: 'AIzaSyCs4Ogm7exYrsH0y4Nh5r7SyHqzYCqw1fI',
      authDomain: 'phoenix-unleashed.firebaseapp.com',
      projectId: 'phoenix-unleashed',
      storageBucket: 'phoenix-unleashed.appspot.com',
      messagingSenderId: '520189661205',
      appId: '1:520189661205:web:ed31e59a5ae9dce05d7e1c',
      measurementId: 'G-G2PF1V52T1',
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: { // to use color vars and sass vars in components...
          additionalData: '@use "@/assets/colors/_octivOne.scss" as *;',
        },
      },
    },
  },

})
