import { defineConfig, presetAttributify, presetIcons, presetWind } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import { createMixins } from './src/utils/unocss'

const mixins = createMixins({
  button: 'cursor-pointer disabled:pointer-events-none select-none transition duration-100 px-4 py-1 rounded disabled:cursor-default disabled:bg-opacity-25 disabled:dark:bg-opacity-25 disabled:text-opacity-95 disabled:dark:text-opacity-30'
})

export default defineConfig({
  theme: {
    colors: {
      vue: '#42b983'
    }
  },
  shortcuts: [
    {
      'theme-container': 'text-gray-700 bg-white dark:bg-dark-800 dark:text-light-700'
    },
    [
      /^btn$/, () =>
        mixins('button', 'bg-{c}-600 text-white hover:bg-{c}-700 active:bg-{c}-800 disabled:bg-gray-500'.replace(/{c}/g, 'teal'))
    ],
    [
      /^btn-(.*)$/, ([, color]) =>
        mixins('button', 'bg-{c}-600 text-{c}-50 dark:text-{c}-50 hover:bg-{c}-700 active:bg-{c}-800 disabled:bg-{c}-600').replace(/{c}/g, color)
    ],
    [
      /^icon-btn$/, () =>
        'cursor-pointer transition duration-250 disabled:cursor-default opacity-75 hover:opacity-100 disabled:opacity-25 disabled:pointer-events-none'
    ]
  ],
  presets: [
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        width: '1.2em',
        height: '1.2em',
        verticalAlign: 'middle'
      }
    }),
    presetWind()
  ],
  transformers: [transformerDirective()],
  safelist: []
})
