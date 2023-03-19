import { parseColor } from '@unocss/preset-mini/utils'
import { defineConfig, presetAttributify, presetIcons, presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'

const buttonUnsupportedColors = new Set(['vue', 'black', 'dark', 'white', 'light'])
function resolveColor(name: string, no: number, prefix?: string) {
  const temp = [prefix, name]

  if (!buttonUnsupportedColors.has(name))
    temp.push(String(no))

  return temp.filter(Boolean).join('-')
}

export default defineConfig({
  theme: {
    colors: {
      vue: '#42b983',
    },
  },
  shortcuts: [
    // base
    ['border-base', 'border-gray-200 dark:border-dark-200'],
    ['bg-base', 'bg-white dark:bg-dark-800'],
    [/^(color|text)-base$/, () => 'text-gray-700 dark:text-light-700'],

    // button
    ['btn', 'px-4 py-1 rounded transition duration-100 cursor-pointer select-none outline-none disabled:cursor-default disabled:pointer-events-none'],
    ['btn-group', 'flex flex-wrap justify-center items-center'],
    ['btn-iconify', '!p-0 btn-true-gray-50'],
    ['btn-base', 'btn-teal'],
    [
      /^btn-(.+)$/, ([match, c], { theme }) => {
        const { color, no, opacity } = parseColor(c, theme)!
        const themeColor = match.replace(/^btn-(.+)$/, '$1').replace(/([-:/]\d+)+$/, '')
        const themeColorRank = no === 'DEFAULT' ? 400 : Number(no)

        if (!color || color === c)
          return // invalid color
        if (buttonUnsupportedColors.has(themeColor))
          return // unsupported

        const colorRank = themeColorRank >= 700
          ? { background: 700, hover: 800, active: 900, text: 200 }
          : (themeColorRank <= 200
              ? { background: 400, hover: 500, active: 600, text: 100 }
              : { background: 600, hover: 700, active: 800, text: 50 })

        const applies = ['disabled:opacity-50']

        applies.push(
          resolveColor(themeColor, colorRank.text, 'text'),
          resolveColor(themeColor, colorRank.background, 'bg'),
          resolveColor(themeColor, colorRank.hover, 'hover:bg'),
          resolveColor(themeColor, colorRank.active, 'active:bg'),
        )

        if (opacity)
          applies.push(`text-opacity-${opacity}`, `bg-opacity-${opacity}`)

        return applies.join(' ')
      },
    ],
  ],
  presets: [
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'width': '1.2em',
        'height': '1.2em',
        'vertical-align': 'middle',
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
