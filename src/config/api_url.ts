/** API URL */
export const API_URL = {
  /** For test */
  TEST: '/ping',

  /** 登入 API */
  LOGIN: '/login',
  /** 注册 API */
  REGISTER: '/register',
  /** 获取用户信息 */
  GET_USER_INFO: '/user',

  /** 版块列表获取 API */
  GET_PLATE_LIST: '/plates',

  /**
   * 帖文列表获取 API
   * @param routeID 版块 ID
   */
  QUERY_ARTICLES: (routeID: string | undefined) => `/articles/${routeID ?? ''}`,
}
