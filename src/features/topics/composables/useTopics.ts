import { type TopicListItem } from '../types'
// import { useRouter } from 'vue-router'
import { getTopics } from '../apis/topics'
import { useCurrentPlate } from '@/features/plates/composables/useCurrentPlate'
import { Option } from '@/shared/utils/rust'
import { useTopicsStore } from '../stores/topics'
import { computed } from 'vue'

export function useTopics() {
  // const router = useRouter()
  const { currentPlateId } = useCurrentPlate()
  const topicsStore = useTopicsStore()

  const handleGetTopics = async () => {
    const result = await getTopics(currentPlateId.value)

    const optionalTopics = result.match({
      ok: inner =>
        inner.andThen(topics => {
          const computedTopics = topics.flatMap(topic =>
            topic.match({
              some: value => [value],
              none: () => []
            })
          )

          return Option.some(computedTopics)
        }),

      err: error => {
        error.notify()
        return Option.none()
      }
    })

    topicsStore.setTopics(optionalTopics)
  }

  const topics = computed<TopicListItem[]>(() => topicsStore.topics)

  const goToTopic = async (id: string) => {
    // TODO: 跳转至帖子画面。
    console.log({ id })
    // await router.push({
    // name: ROUTE_NAMES.PLATE,
    //   params: { id }
    // })
  }

  return {
    handleGetTopics,
    topics,
    goToTopic
  }
}
