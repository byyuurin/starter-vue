import { byyuurin } from '@byyuurin/eslint-config'

export default byyuurin({
  overrides: {
    vue: {
      'no-undef': 'off',
      'vue/html-self-closing': [
        'warn',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  },
})
