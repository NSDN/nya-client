import { STORE_ID } from '@/constant'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNewTopicCommon = defineStore(STORE_ID.NEW_TOPIC_COMMON, () => {
  const title = ref<string>('')
  const setTitle = (payload: string) => (title.value = payload)
  return { title, setTitle }
})
