import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/main.css'

import { ViteSSG } from 'vite-ssg'
import type { AppPlugin } from '~/types'
import routes from '~pages'
import App from './App.vue'

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
