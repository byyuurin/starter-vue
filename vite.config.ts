/// <reference types="vitest" />
/// <reference types="vite-ssg" />

import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import vueComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'
import build from './vite.build'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/antfu/unplugin-auto-import
    autoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
      dts: './src/auto-imports.d.ts',
    }),
    // https://github.com/unocss/unocss
    unocss(),
    // https://github.com/hannoeru/vite-plugin-pages
    pages(),
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    vue(),
    // https://github.com/antfu/unplugin-vue-components
    vueComponents({ dts: './src/components.d.ts' }),
  ],
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, './src')}/`,
      '@/': `${resolve(__dirname, './src')}/`,
    },
  },
  build,
  ssgOptions: {
    dirStyle: 'nested',
  },
})
