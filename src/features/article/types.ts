import type { AxiosResponse } from 'axios'
import type { Article } from '../topic/types'

/** 文章列表 */
export type Articles = Article[]

/** 帖文列表请求 API 的应答 */
export type QueryArticlesResponse = AxiosResponse<Articles, string>
