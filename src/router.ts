import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { ref } from 'vue'
import routes from '~pages'

export const APP_NAME = document.title ?? ''
export const title = ref('')
export const titleTemplate = computed(() => [title.value ? '%s -' : '', APP_NAME].join(' '))

const router = createRouter({
  history: createRouteHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'auto' }
  },
})

router.beforeEach((to) => {
  title.value = to.meta.title ?? ''
})

export default router

function createRouteHistory() {
  const base = import.meta.env.BASE_URL

  if (import.meta.env.VITE_ROUTER_HISTORY === 'hash')
    return createWebHashHistory(base)

  return createWebHistory(base)
}
