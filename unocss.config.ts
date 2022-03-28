import { defineConfig, presetAttributify, presetIcons, presetWind } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import presetUser from './src/utils/unocss-preset-user'

export default defineConfig({
  shortcuts: [{ 'theme-container': 'text-gray-700 bg-white dark:bg-dark-800 dark:text-light-700' }],
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
    presetWind(),
    presetUser()
  ],
  transformers: [transformerDirective()],
  safelist: []
})
