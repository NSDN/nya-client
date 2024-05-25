import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { md } from '@/lib/markdown'
import { STORE_ID } from '@/constant'
import { useNewTopicCommon } from './use-new-topic-common'
import { usePlateStore } from '@/features/plate/store'
import { MessageKeys, openMessageModal } from '@/utils/messages'
import { createArticleTopic } from '../services'
import { type Article, ArticleType } from '@/features/topic/types'
import { useUserStore } from '@/features/authorization/store'
import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/constant/router'

export const useNewArticle = defineStore(STORE_ID.NEW_ARTICLE, () => {
  /** 书写的 Markdown */
  const source = ref<string>('')
  const setSource = (value: string) => (source.value = value)

  const articleType = ref<ArticleType>(ArticleType.MARKDOWN)

  /** 被解析后渲染的 Markown */
  const rendered = computed<string>(() => {
    const renderMap = {
      [ArticleType.RICH_TEXT]: '',
      [ArticleType.MARKDOWN]: md.render(source.value),
    }

    return renderMap[articleType.value]
  })

  const newTopic = useNewTopicCommon()
  const router = useRouter()

  /** 提交新建帖文 */
  const submitArticle = async () => {
    const author = getAuthor()
    if (!author) return

    const plate = getPlateID()
    if (!plate) return

    if (!validateArticle()) return

    const article: Article = {
      common: {
        author,
        plate,
        title: newTopic.title,
        tag: [],
        creationDate: new Date(),
      },

      floors: [
        { level: 1, author, bodyType: articleType.value, body: rendered.value },
      ],
    }

    const succeed = await createArticleTopic(article)

    if (succeed) {
      clearCacheWhenSumbitSucceed()
      await router.push({ name: ROUTE_NAME.PLATE_ITEM, params: { id: plate } })
    }
  }

  /** 验证文章信息 */
  const validateArticle = () => {
    if (!newTopic.title) {
      openMessageModal(MessageKeys.MISSING_TITLE)
      return false
    }

    if (!rendered.value) {
      openMessageModal(MessageKeys.MISSING_BODY)
      return false
    }

    return true
  }

  const clearCacheWhenSumbitSucceed = () => {
    newTopic.setTitle('')
    setSource('')
  }

  return { source, setSource, rendered, submitArticle }
})

const getAuthor = () => {
  const user = useUserStore()
  const author = user.userInfo?.nickname

  if (!author) {
    openMessageModal(MessageKeys.MISSING_USER_INFO)
  }

  return author
}

const getPlateID = () => {
  const plate = usePlateStore()
  const plateID = plate.currentPlate?.id

  if (!plateID) {
    openMessageModal(MessageKeys.MISSING_PLATE_ID)
  }

  return plateID
}
