/** @description 浏览器 storage 键名 */
export const STORAGE_KEYS = {
  TOKEN_INFO: 'tokenInfo',
  USER_INFO: 'userInfo',
  PLATES: 'plates',
  COMMIC_TOPIC: 'commicTopic',
  CURRENT_PLATE: 'currentPlate',
} as const

/** @description 状态库模块 ID（`defineStore` 所需的第一个参数） */
export const STORE_ID = {
  LOGIN: 'login',
  LOGIN_REDIRECT: 'loginRedirect',
  JWT: 'jwt',
  USER: 'user',
  PALTE: 'plate',
  MODAL: 'modal',
  NEW_TOPIC_COMMON: 'newTopicCommon',
  NEW_ARTICLE: 'newArticle',
} as const

export { EMIT_EVENTS } from './emit-events'
