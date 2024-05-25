import type { RouteRecordRedirectOption } from 'vue-router'

/** 主要布局式样 */
export const MAIN_LAYOUT = () => import('@/layouts/MainLayout.vue')

/** 无边栏布局样式 */
export const NONE_SIDEBAR_LAYOUT = () =>
  import('@/layouts/NoneSidebarLayout.vue')

/** 路由路径 */
export const ROUTE_PATH = {
  /** 首页 */
  HOME: '/',
  /** 授权 */
  AUTHORIZATION: '/authorization',
  /** 登入 */
  LOGIN: '/authorization/login',
  /** 注册 */
  REGISTER: '/authorization/register',
  /** 404 */
  NOT_FOUND: '/:pathMatch(.*)*',

  /** 新建帖文 */
  NEW_TOPIC: 'new-topic',

  /** 版块 */
  PLATE: '/plate',
  /** 版块 - 具体某一版块 */
  PLATE_ITEM: '/plate/:id',

  /** 漫画 */
  COMMIC: '/commic/:id',
  /** 文章 */
  ARTICLE: '/article/:id',
}

/** 路由名 */
export const ROUTE_NAME = {
  /** 首页 */
  HOME: 'Home',
  /** 登入 */
  LOGIN: 'Login',
  /** 注册 */
  REGISTER: 'Register',
  /** 404 */
  NOT_FOUND: 'NotFound',

  /** 新建帖文 */
  NEW_TOPIC: 'NewTopic',

  /** 版块 */
  PLATE_ITEM: 'PlateItem',

  /** 漫画 */
  COMMIC: 'Commic',
  /** 文章 */
  ARTICLE: 'Article',
}

/** 版块根目录重定向 */
export const PLATE_ROOT_REDIRECT: RouteRecordRedirectOption = {
  name: ROUTE_NAME.PLATE_ITEM,
  params: { id: 'localization' },
}
