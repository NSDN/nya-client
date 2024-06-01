import type { AxiosResponse } from 'axios'
import type { TopicFloors } from './types'

import { API_URL } from '@/config'
import { HTTPMethods } from '@/constant/enums'
import { http } from '@/lib/http/axios'

export const queryTopicFloors = async (topicID: string) => {
  try {
    const resposne: AxiosResponse<TopicFloors, null> = await http({
      url: API_URL.QUERY_TOPIC_FLOORS(topicID),
      method: HTTPMethods.GET,
    })

    return resposne.data
  } catch (error) {
    console.error(error)
  }
}
