import { STORE_ID } from '@/shared/constants'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { TopicListItem } from '../types'
import type { Optionable } from '@/shared/utils/rust'
import { toOption } from '@/shared/utils/useful'

export const useTopicsStore = defineStore(STORE_ID.TOPICS, () => {
  const topics = ref<TopicListItem[]>([])

  const setTopics = (payload: Optionable<TopicListItem[]>) => {
    toOption(payload).match({
      some: value => (topics.value = value),
      none: () => (topics.value = [])
    })
  }

  return { topics, setTopics }
})
