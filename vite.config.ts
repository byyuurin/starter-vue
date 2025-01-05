import { resolve } from 'node:path'
import { unheadVueComposablesImports } from '@unhead/vue'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import vueComponents from 'unplugin-vue-components/vite'
import vueRouter from 'unplugin-vue-router/vite'
import type { BuildOptions } from 'vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/antfu/unplugin-auto-import
    autoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', unheadVueComposablesImports],
      dts: './src/typed-imports.d.ts',
    }),
    // https://github.com/unocss/unocss
    unocss(),
    // https://github.com/posva/unplugin-vue-router
    vueRouter({
      dts: './src/typed-routes.d.ts',
    }),
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    vue(),
    // https://github.com/antfu/unplugin-vue-components
    vueComponents({ dts: './src/typed-components.d.ts' }),
  ],
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, './src')}/`,
      '@/': `${resolve(__dirname, './src')}/`,
    },
  },
  build: createViteBuildOptions(),
  ssgOptions: {
    dirStyle: 'nested',
  },
})

// for gh-pages
function createViteBuildOptions() {
  const nameREG = /([_])(?:[.]{3})?([^.]+)\1(.css)?/
  const replace = (template: string, value: string) => template.replace(/\[name\]/, value.replace(nameREG, '$2'))

  const buildOptions: BuildOptions = {
    rollupOptions: {
      output: {
        // https://rollupjs.org/guide/en/#outputassetfilenames
        assetFileNames: (info) => {
          const template = 'assets/[name].[hash][extname]'

          if (info.name && nameREG.test(info.name))
            return replace(template, info.name)

          return template
        },
        // https://rollupjs.org/guide/en/#outputchunkfilenames
        chunkFileNames: (info) => {
          const template = '[name].[hash].js'

          if (nameREG.test(info.name))
            return replace(template, info.name)

          return template
        },
      },
    },
  }

  return buildOptions
}
