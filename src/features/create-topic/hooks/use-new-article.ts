import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { md } from '@/lib/markdown'

export const useNewArticle = defineStore('newArticle', () => {
  /** 书写的 Markdown */
  const source = ref<string>('')
  const setSource = (value: string) => (source.value = value)

  /** 被解析后渲染的 Markown */
  const preview = computed<string>(() => md.render(source.value))

  return { source, setSource, preview }
})
