import type { Article } from '../topic/types'
import type { AxiosResponse } from 'axios'

import { http } from '@/lib/http/axios'
import { API_URL } from '@/config'
import { HTTPMethods } from '@/constant/enums'

export const createArticleTopic = async (
  article: Article,
): Promise<boolean> => {
  try {
    const response: AxiosResponse<boolean, Article> = await http({
      url: API_URL.CREATE_ARTICLE_TOPIC,
      method: HTTPMethods.POST,
      data: article,
    })

    return response.data
  } catch (error) {
    console.error(error)
    return false
  }
}
