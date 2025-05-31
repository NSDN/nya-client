import type { RouteRecordRedirectOption } from 'vue-router'

export const ROUTE_PATHS = {
  /** 首页 */
  HOME: '/',
  /** 版块 */
  PLATE: '/plate',
} as const

export const ROUTE_NAMES = {
  /** 首页 */
  HOME: 'Home',
  /** 版块 */
  PLATE: 'Plate',
} as const

/** 版块根目录重定向 */
export const PLATE_ROOT_REDIRECT: RouteRecordRedirectOption = {
  name: ROUTE_NAMES.PLATE,
  params: { id: 'localization' },
} as const
