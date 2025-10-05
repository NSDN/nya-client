import type { RouteRecordRaw } from 'vue-router'

import { ROUTE_NAMES, ROUTE_PATHS } from '@/shared/constants'
import NoneSidebarLayout from '@/shared/components/layouts/NoneSidebarLayout.vue'

const authorization: RouteRecordRaw[] = [
  {
    path: ROUTE_PATHS.REGISTER,
    name: ROUTE_NAMES.REGISTER,
    meta: { layout: NoneSidebarLayout },
    component: () => import('@/features/authorization/views/Register.vue')
  },
  {
    path: ROUTE_PATHS.LOGIN,
    name: ROUTE_NAMES.LOGIN,
    meta: { layout: NoneSidebarLayout },
    component: () => import('@/features/authorization/views/Login.vue')
  }
]

export default authorization
