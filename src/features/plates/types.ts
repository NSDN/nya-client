import { PageType } from '@/shared/constants/enum'

export const PLATE_IDS = {
  LOCALIZATION: 'localization',
  MUSIC: 'music',
  CHAT: 'chat'
} as const

export type PlateId = (typeof PLATE_IDS)[keyof typeof PLATE_IDS]

/** 版块 */
export interface Plate {
  /** 版块 ID（兼路由名） */
  id: PlateId
  /** 版块名 */
  name: string
  /** 背景图片（图床地址） */
  background: string
  /** 画面类型 */
  pageType: PageType
  /** 排序锚点 */
  sortOrder: number
}
