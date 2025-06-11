import type { AxiosResponse } from 'axios'
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

/** 文章类型 */
export enum ArticleType {
  RICH_TEXT = 'rich-text',
  MARKDOWN = 'markdown'
}

/** 文章 */
export interface Article extends TopicCore {
  /** 帖子类型 */
  topicType: TopicType.ARTICLE
  /** 帖文类型 */
  contentType: ArticleType
  /** 帖文正文 */
  content: string
}

// TODO: 等做到漫画功能时具体确定剩余字段。
/** 漫画 */
export interface Comic extends TopicCore {
  /** 帖子类型 */
  topicType: TopicType.COMIC
}

export type Topic = Article | Comic

/** 帖文列表请求 API 的应答 */
export type QueryArticlesResponse = AxiosResponse<Article[], string>
