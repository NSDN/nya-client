import type { PlateId } from '../plates'

/** 帖子共通信息 */
export interface TopicCore {
  /** 帖子ID（由数据库自增生成） */
  id: string
  /** 作者 */
  // author: AuthorizationServices.UserInfo
  authorId: string
  /** 版块ID */
  plateId: PlateId
  /** 标题 */
  title: string
  /** 预览图链接 */
  thumbnail_link: string
  /** TAG */
  tag: string[]
  /** 创建时间 */
  createdAt: string
  /** 更新时间 */
  updatedAt: string
}

export enum TopicType {
  ARTICLE = 'article',
  COMIC = 'comic'
}

/** 文章 */
export interface Article extends TopicCore {
  /** 帖子类型 */
  topicType: TopicType.ARTICLE
}

// TODO: 等做到漫画功能时具体确定剩余字段。
/** 漫画 */
export interface Comic extends TopicCore {
  /** 帖子类型 */
  topicType: TopicType.COMIC
}

export type Topic = Article | Comic

/** 帖子列表元素 */
export interface TopicListItem {
  /** 帖子ID（经过编码的） */
  id: string
  /** 标题 */
  title: string
  /** 预览图链接 */
  thumbnailLink: string
  /** 更新时间 */
  updatedAt: string
}
