# Vue 3 + TypeScript + Vite + UnoCSS

> Refer to the README of [template-vue-ts](https://github.com/vitejs/vite/blob/main/packages/create-vite/template-vue-ts/README.md) and [vitesse](https://github.com/antfu/vitesse/blob/main/README.md)

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) + [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)+ [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Features

- [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [esbuild](https://github.com/evanw/esbuild)
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

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit byyuurin/starter-vue my-vue-app
cd my-vue-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
