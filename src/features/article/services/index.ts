import { http } from '@/lib/http/axios'
import type { QueryArticlesResponse } from '../types'
import { API_URL } from '@/config'
import { HTTPMethods } from '@/constant/enums'

/**
 * 请求帖文列表 API
 * @param plateRouteName 版块名称
 * @returns 帖文列表
 */
export const queryArticles = async (plateRouteName: string | undefined) => {
  try {
    const resonse: QueryArticlesResponse = await http({
      url: API_URL.QUERY_ARTICLES(plateRouteName),
      method: HTTPMethods.GET,
    })

    return resonse.data
  } catch (error) {
    console.error(error)
  }
}
