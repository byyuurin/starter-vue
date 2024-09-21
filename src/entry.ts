import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/main.css'

import routes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import type { AppPlugin } from './types'

export const createApp = ViteSSG(
  App,
  {
    base: import.meta.env.BASE_URL,
    routes,
    scrollBehavior: () => ({ top: 0, left: 0, behavior: 'auto' }),
  },
  (context) => {
    // install plugins
    Object.values(import.meta.glob<{ install?: AppPlugin }>('./plugins/*.ts', { eager: true }))
      .forEach((plugin) => plugin.install?.(context))
  },
)
