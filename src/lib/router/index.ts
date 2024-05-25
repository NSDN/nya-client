import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { afterEachHook, beforeEachGuard, beforeResolveGuard } from './guards'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(beforeEachGuard)
router.beforeResolve(beforeResolveGuard)
router.afterEach(afterEachHook)

export default router
