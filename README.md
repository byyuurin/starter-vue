# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Features

- [Vue3](https://github.com/vuejs/core), [Vite2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [esbuild](https://github.com/evanw/esbuild)
- File based routing
- Components auto importing
- [UnoCSS](https://github.com/unocss/unocss)
- Use icons from any icon sets in [Pure CSS](https://github.com/unocss/unocss/tree/main/packages/preset-icons)
- Use [`<script setup>` style](https://github.com/vuejs/rfcs/pull/227)
- Use TypeScript

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/unocss/unocss) - the instant on-demand atomic CSS engine
  - [@unocss/transformer-directives](https://github.com/unocss/unocss/tree/main/packages/transformer-directives) - UnoCSS transformer for `@apply` directive

### Icons [🔍](https://icones.netlify.app/)

- [Iconify](https://iconify.design/) - use icons from any icon sets
- [Pure CSS Icons via UnoCSS](https://github.com/unocss/unocss/tree/main/packages/preset-icons)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - directly use Vue Composition API and others without importing
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - components auto import
- [VueUse](https://github.com/antfu/vueuse) - collection of essential Vue Composition Utilities
  - [@vueuse/head](https://github.com/vueuse/head) - document head manager for Vue 3
