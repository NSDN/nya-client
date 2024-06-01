import type { AuthorizationServices } from '../authorization/types'

import { ArticleType } from '../article/types'

/** 楼层单元 */
export interface FloorItem {
  // 层数
  level: number
  // 作者
  author: AuthorizationServices.UserInfo
  // 创建日
  creationDate: Date
  // 回帖文章类型
  bodyType: ArticleType
  // 回帖正文
  body: string
}

/** 楼层列表 */
export interface TopicFloors {
  // 帖文ID（由 topics 数据库自增生成后手动添加至 floors 数据库里）
  topicID: string
  // 楼层列表
  list: FloorItem[]
}
