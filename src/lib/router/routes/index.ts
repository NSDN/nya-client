import type { RouteRecordRaw } from 'vue-router'

import {
  MAIN_LAYOUT,
  NONE_SIDEBAR_LAYOUT,
  ROUTE_NAME,
  ROUTE_PATH,
} from '@/constant/router'
import plates from './plates'
import topic from '@/lib/router/routes/topic'

const routes: RouteRecordRaw[] = [
  {
    path: ROUTE_PATH.HOME,
    component: MAIN_LAYOUT,

    children: [
      {
        path: '',
        name: ROUTE_NAME.HOME,
        redirect: ROUTE_PATH.PLATE,
      },

      {
        path: ROUTE_PATH.NEW_TOPIC,
        name: ROUTE_NAME.NEW_TOPIC,
        component: () => import('@/views/computer/NewTopic.vue'),
        meta: { requiresAuthorization: true },
      },

      ...topic,
    ],
  },

  {
    path: ROUTE_PATH.AUTHORIZATION,
    component: NONE_SIDEBAR_LAYOUT,
    redirect: ROUTE_PATH.LOGIN,

    children: [
      {
        path: ROUTE_PATH.LOGIN,
        name: ROUTE_NAME.LOGIN,
        component: () => import('@/views/computer/Login.vue'),
      },

      {
        path: ROUTE_PATH.REGISTER,
        name: ROUTE_NAME.REGISTER,
        component: () => import('@/views/computer/Register.vue'),
      },

      {
        path: ROUTE_PATH.NOT_FOUND,
        name: ROUTE_NAME.NOT_FOUND,
        component: () => import('@/views/computer/NotFound.vue'),
      },
    ],
  },

  ...plates,
]

export default routes
