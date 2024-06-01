import { STORE_ID } from '@/constant'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { queryTopicFloors } from './services'
import { TopicFloors } from './types'

export const useTopicFloorsStore = defineStore(STORE_ID.FLOOR, () => {
  const content = ref<TopicFloors>()

  const getTopicFloors = async (topicID: string) => {
    const result = await queryTopicFloors(topicID)
    content.value = result
  }

  return { content, getTopicFloors }
})
