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

  /** 创建文章帖子 API */
  CREATE_ARTICLE_TOPIC: '/article',

  /**
   * 帖文列表获取 API
   * @param plateID 版块ID
   */
  QUERY_ARTICLES: (plateID: string) => `/articles/${plateID}`,

  /**
   * 帖子楼层列表获取 API
   * @param topicID 帖子ID
   */
  QUERY_TOPIC_FLOORS: (topicID: string) => `/floors/${topicID}`,
}
