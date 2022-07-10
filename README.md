# Vue 3 + TypeScript + Vite + UnoCSS

> Refer to the README of [template-vue-ts](https://github.com/vitejs/vite/blob/main/packages/create-vite/template-vue-ts/README.md) and [vitesse-lite](https://github.com/antfu/vitesse-lite/blob/main/README.md)

This template should help get you started developing with Vue 3, TypeScript and UnoCSS in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) + [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

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

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/byyuurin/starter-vue/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit byyuurin/starter-vue my-vue-app
cd my-vue-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
