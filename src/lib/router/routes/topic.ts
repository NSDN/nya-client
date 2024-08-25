import type { RouteRecordRaw } from 'vue-router'

import { ROUTE_NAME, ROUTE_PATH } from '@/constant/router'

const topic: RouteRecordRaw[] = [
  {
    path: ROUTE_PATH.COMMIC,
    name: ROUTE_NAME.COMMIC,
    // component: () => import('@/views/computer/Commic.vue'),
    component: () => import('@/views/computer/Commic-temp.vue'),
  },
  {
    path: ROUTE_PATH.ARTICLE,
    name: ROUTE_NAME.ARTICLE,
    component: () => import('@/views/computer/Article.vue'),
  },
]

export default topic
