import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../components/pages/HomePage.vue') },
    { path: '/check-vehicle', component: () => import('../components/pages/HomePage.vue') },
    { path: '/about', component: () => import('../components/pages/HomePage.vue') },
    { path: '/owners', component: () => import('../components/pages/OwnersPage.vue') },
    {
      path: '/auto-manufacturers',
      component: () => import('../components/pages/AutoManufPage.vue'),
    },
    { path: '/installers', component: () => import('../components/pages/InstallersPage.vue') },
    { path: '/importers', component: () => import('../components/pages/ImportersPage.vue') },
    { path: '/news', component: () => import('../components/pages/NewsPage.vue') },
    { path: '/contacts', component: () => import('../components/pages/ContactsPage.vue') },
    {
      path: '/manufacturers',
      component: () => import('../components/pages/ManufacturersPage.vue'),
    },
    { path: '/profile', component: () => import('../components/pages/ProfilePage.vue') },
  ],
  async scrollBehavior(to, from, savedPosition) {
    if (to.path === '/check-vehicle' || to.path === '/about') {
      const anchor = to.path === '/about' ? '#about' : '#check-vehicle'
      await new Promise((resolve) => setTimeout(resolve, 100))
      const el = document.querySelector<HTMLElement>(anchor)
      if (el) {
        const rect = el.getBoundingClientRect()
        const top = window.scrollY + rect.top - (window.innerHeight - rect.height) / 2
        return { left: 0, top: Math.max(0, Math.round(top)) }
      }
      return { left: 0, top: 0 }
    }
    if (savedPosition) return savedPosition
    return { left: 0, top: 0 }
  },
})

export default router
