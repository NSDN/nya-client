import type { AxiosResponse } from 'axios'
import type { TopicCommon } from '../topic/types'

/** 文章类型 */
export enum ArticleType {
  RICH_TEXT = 'rich-text',
  MARKDOWN = 'markdown',
}

/** 文章 */
export interface Article extends TopicCommon {
  /** 帖文类型 */
  bodyType: ArticleType
  /** 帖文 */
  body: string
}

/** 文章列表 */
export type Articles = Article[]

/** 帖文列表请求 API 的应答 */
export type QueryArticlesResponse = AxiosResponse<Articles, string>
