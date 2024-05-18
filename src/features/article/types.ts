import type { AxiosResponse } from 'axios'

/** 帖文列表 */
export type Articles = Article[]

/** 帖文 */
export interface Article {
  /** 标题 */
  title: string
}

/** 帖文列表请求 API 的应答 */
export type QueryArticlesResponse = AxiosResponse<Articles, string>
