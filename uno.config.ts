import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetDaisy } from 'unocss-preset-daisy'
import { OctivTheme } from './themes/uno.config.octiv'

export default defineConfig({

  theme: {
    colors: {
      extraCool: '#cc0000', // class="text-another-cool-one"
      anotherCoolOne: '#cc0000', // class='text-another-cool-one
      veryCool: '#0000ff', // class="text-very-cool"
      brand: {
        primary: 'hsla(var(--hue, 155), 78%, 51%)', // class="bg-brand-primary"
      },
      myFunky: '#00ff00', // class="text-my-funky"
    },

    ...OctivTheme,

  },

  shortcuts: [
    // defaults, for future ref... off, not dS ready...
    // ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    // ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],

  presets: [
    presetUno({
      darkMode: ['class', '[data-theme="dark"]'],
    }),
    presetDaisy({
      themes: [
        {
          light: {
            'primary': '#057aff', // text-primary
            'secondary': '#463aa1', // class="text-secondary"
            'accent': '#c149ad', // class="text-accent"
            'neutral': '#021431',
            'base-100': '#ffffff',
            'info': '#93e6fb',
            'success': '#80ced1',
            'warning': '#efd8bd',
            'error': '#e58b8b',
            'primary-content': '#efd8bd',
            // get full list of support attributes
          },
          dark: {
            'primary': '#057aff',
            'secondary': '#463aa1',
            'accent': '#c149ad',
            'neutral': '#021431',
            'base-100': '#ffffff',
            'info': '#93e6fb',
            'success': '#80ced1',
            'warning': '#efd8bd',
            'error': '#e58b8b',
            'primary-content': '#efd8bd',
          },
        },
      ],
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

})

/*

export default defineConfig({

  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})

*/
