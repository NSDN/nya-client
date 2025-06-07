import { PageType } from '@/shared/constants/enum'
import { Option } from '@/shared/utils/rust'

/** 版块 */
export interface Plate {
  /** 版块 ID（兼路由名） */
  id: string
  /** 版块名 */
  name: string
  /** 背景图片（图床地址） */
  background: string
  /** 画面类型 */
  pageType: PageType
}

/** 版块列表 */
export type Plates = Option<Plate>[]
