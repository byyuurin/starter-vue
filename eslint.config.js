import { byyuurin } from '@byyuurin/eslint-config'

export default byyuurin(
  {
    formatters: {
      prettierOptions: {
        singleQuote: false,
      },
    },
  },
  {
    files: ['src/*.d.ts'],
    rules: {
      'ts/no-empty-object-type': 'off',
    },
  },
)
