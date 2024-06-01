import type { Articles } from '../types'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { queryArticles } from '../services'
import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/constant/router'
import { STORE_ID } from '@/constant'

const useArticleStore = defineStore(STORE_ID.ARTICLE, () => {
  const router = useRouter()

  /** 文章列表 */
  const list = ref<Articles>([])

  /**
   * 设置文章列表
   * @param _list 文章列表
   */
  const setList = (_list: Articles | undefined) => (list.value = _list ?? [])

  /**
   * 点击文章
   * @param commicID 文章 ID
   */
  const goToArticle = async (articleID: string): Promise<void> => {
    await router.push({
      name: ROUTE_NAME.ARTICLE,
      params: { id: articleID },
    })
  }

  /**
   * 请求文章列表
   */
  const queryList = async () => {
    const routeID = router.currentRoute.value.params.id.toString()
    const articles = await queryArticles(routeID)
    setList(articles)
  }

  return {
    list,
    setList,
    goToArticle,
    queryList,
  }
})

export default useArticleStore
