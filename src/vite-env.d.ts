/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

// https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
interface ImportMetaEnv {
  VITE_ROUTER_HISTORY?: 'hash' | 'history'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
