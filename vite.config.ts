import { defineConfig } from 'vite'

import autoImport from 'unplugin-auto-import/vite'
import unocss from 'unocss/vite'
import pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'
import vueComponents from 'unplugin-vue-components/vite'
import build from './vite.build'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    autoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
      dts: './src/auto-imports.d.ts',
    }),
    unocss(),
    pages(),
    vue(),
    vueComponents({ dts: './src/components.d.ts' }),
  ],
  build,
})
