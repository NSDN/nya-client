import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const useUncommitTopicStore = defineStore('uncommit-topic', () => {
  const route = useRoute()

  /** @description 主题标题 */
  const title = ref<string>('')

  /**
   * @description 设置主题标题
   * @param _title
   */
  const setTitle = (_title: string) => (title.value = _title)

  /** @description 主题版块路由名 */
  const plateRouteName = computed<string>(() => {
    const result = route.meta.plateRouteName

    if (typeof result !== 'string') {
      console.error('`route.meta.plateRouteName` should be string type.')
      return ''
    }

    return result
  })

  return { title, setTitle, plateRouteName }
})

export default useUncommitTopicStore
