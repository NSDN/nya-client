import type { RouteRecordRaw } from 'vue-router'

import {
  PLATE_ROOT_REDIRECT,
  ROUTE_NAMES,
  ROUTE_PATHS
} from '@/shared/constants'
import plates from './plates'
import authorization from './authorization'

export const routes: RouteRecordRaw[] = [
  {
    path: ROUTE_PATHS.HOME,
    name: ROUTE_NAMES.HOME,
    redirect: PLATE_ROOT_REDIRECT
  },

  ...plates,
  ...authorization
]
