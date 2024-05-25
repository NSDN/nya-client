import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { beforeEachGuard } from './guards'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(beforeEachGuard)

export default router
