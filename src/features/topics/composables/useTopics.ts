import { PLATE_IDS } from '@/features/plates'
import { ArticleType, TopicType, type Article } from '../types'

export function useTopics() {
  const articles: Article[] = Array.from({ length: 10 }, (_, index) => {
    return {
      id: index.toString(),
      authorId: '001',
      plateId: PLATE_IDS.CHAT,
      title: '青年在选择职业时的考虑',
      topicType: TopicType.ARTICLE,
      contentType: ArticleType.MARKDOWN,
      content:
        '如果我们选择了最能为人类而工作的职业，那么，重担就不能把我们压倒，因为这是为大家作出的牺牲；那时我们所享受的就不是可怜的、有限的、自私的乐趣，我们的幸福将属于千百万人，我们的事业将悄然无声地存在下去，但是它会永远发挥作用，而面对我们的骨灰，高尚的人们将洒下热泪。',
      tag: ['马克思'],
      createdAt: new Date('2025-06-11 05:56').toISOString(),
      updatedAt: new Date('2025-06-11 05:56').toISOString()
    }
  })

  return {
    articles
  }
}
