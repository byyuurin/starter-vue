import { defineConfig, presetAttributify, presetIcons, presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      vue: '#42b983',
    },
  },
  shortcuts: [
    ['border-base', 'border-gray-200 dark:border-dark-200'],
    ['bg-base', 'bg-white dark:bg-dark-800'],
    ['color-base', 'text-gray-700 dark:text-light-700'],
    ['btn', 'transition duration-100 cursor-pointer select-none disabled:cursor-default disabled:pointer-events-none px-4 py-1 rounded text-teal-50 dark:text-teal-50 bg-teal-600 hover:bg-teal-700 active:bg-teal-800'],
    ['icon-btn', 'transition duration-100 cursor-pointer select-none disabled:cursor-default disabled:pointer-events-none opacity-75 hover:opacity-100 disabled:opacity-25'],
  ],
  presets: [
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        width: '1.2em',
        height: '1.2em',
        verticalAlign: 'middle',
      },
    }),
    presetWind(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [],
})
