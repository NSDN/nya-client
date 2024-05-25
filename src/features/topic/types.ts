/** 文章类型 */
export enum ArticleType {
  RICH_TEXT = 'rich-text',
  MARKDOWN = 'markdown',
}

/** 帖子共通信息 */
export interface TopicCommon {
  /** 作者 */
  author: string
  /** 版块 ID */
  plate: string
  /** 标题 */
  title: string
  /** TAG */
  tag: string[]
  /** 创建日 */
  creationDate: Date
}

/** 楼层 */
export interface Floor {
  /** 层数 */
  level: number
  /** 作者 */
  author: string
  /** 帖文类型 */
  bodyType: ArticleType
  /** 帖文 */
  body: string
}

/** 文章帖子 */
export interface Article {
  /** 帖子共通信息 */
  common: TopicCommon
  /** 楼层 */
  floors: Floor[]
}
