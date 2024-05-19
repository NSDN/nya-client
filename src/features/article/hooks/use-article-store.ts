import type { Articles } from '../types'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { queryArticles } from '../services'
import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/constant/router'

const useArticleStore = defineStore('article', () => {
  const router = useRouter()

  /** @description 文章列表 */
  const list = ref<Articles>([])

  /**
   * @description 设置文章列表
   * @param _list 文章列表
   */
  const setList = (_list: Articles | undefined) => (list.value = _list ?? [])

  /**
   * @description 点击文章
   * @param commicID 文章 ID
   */
  const clickListItem = async (articleID: string): Promise<void> => {
    await router.push({
      name: ROUTE_NAME.ARTICLE,
      params: { id: articleID },
    })
  }

  /**
   * @description 请求文章列表
   */
  const queryList = async () => {
    const plateRouteName = router.currentRoute.value.params.routeName.toString()
    const articles = await queryArticles(plateRouteName)
    setList(articles)
  }

  return {
    list,
    setList,
    clickListItem,
    queryList,
  }
})

export default useArticleStore
