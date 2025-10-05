import { PLATE_IDS } from '@/features/plates'
import type { RouteRecordRedirectOption } from 'vue-router'

export const ROUTE_PATHS = {
  /** 首页 */
  HOME: '/',
  /** 版块 */
  PLATE: '/plates/:id',
  /** 授权 */
  AUTHORIZATION: '/authorization',
  /** 登入 */
  LOGIN: '/authorization/login',
  /** 注册 */
  REGISTER: '/authorization/register',
  /** 404 */
  NOT_FOUND: '/:pathMatch(.*)*'
} as const

export const ROUTE_NAMES = {
  /** 首页 */
  HOME: 'Home',
  /** 版块 */
  PLATE: 'Plate',
  /** 登入 */
  LOGIN: 'Login',
  /** 注册 */
  REGISTER: 'Register',
  /** 404 */
  NOT_FOUND: 'NotFound'
} as const

/** 版块根目录重定向 */
export const PLATE_ROOT_REDIRECT: RouteRecordRedirectOption = {
  name: ROUTE_NAMES.PLATE,
  params: { id: PLATE_IDS.LOCALIZATION }
} as const
