import type { AuthorizationServices } from '../authorization/types'

/** 帖子共通信息 */
export interface TopicCommon {
  /** 帖子ID（由数据库自增生成） */
  topicID: string
  /** 作者 */
  author: AuthorizationServices.UserInfo
  /** 版块ID */
  plate: string
  /** 标题 */
  title: string
  /** TAG */
  tag: string[]
  /** 创建日 */
  creationDate: Date
}
