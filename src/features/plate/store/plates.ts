import type { Plate } from '../types'

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { queryPlateList } from '../services'
import { compareObject, storage } from '@/utils'
import { STORAGE_KEYS, STORE_ID } from '@/constant'
import { PageType } from '@/constant/enums'
import { type RouteLocationNormalized, useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/constant/router'

export const usePlateStore = defineStore(STORE_ID.PALTE, () => {
  /** 分区版块列表 */
  const plates = ref<Plate.List | null>(
    storage.get<Plate.List>(STORAGE_KEYS.PLATES) ?? [],
  )

  /** @description 设置分区版块列表 */
  const setPlates = (list: Plate.List | null) => {
    storage.set(STORAGE_KEYS.PLATES, list)
    plates.value = list
  }

  /**
   * @description 请求分区版块列表
   */
  const queryPlates = async (): Promise<void> => {
    const list = await queryPlateList()

    // 如果请求回来的版块信息与当前无变化，则不更新
    const platesUnchanged = compareObject(list, plates.value)

    if (platesUnchanged) {
      return
    }

    list && setPlates(list)
  }

  /** 当前板块 */
  const currentPlate = ref<Plate.Item | null>(
    storage.get<Plate.Item>(STORAGE_KEYS.CURRENT_PLATE),
  )

  /**
   * 设置当前板块
   * @param info 版块信息
   */
  const setCurrentPlate = (item?: Plate.Item) => {
    storage.set<Plate.Item | null>(STORAGE_KEYS.CURRENT_PLATE, item ?? null)
    currentPlate.value = item ?? null
  }

  /**
   * 设置初始板块
   * @param info 版块信息
   */
  const setupCurrentPlate = (route: RouteLocationNormalized) => {
    const current = plates.value?.find(
      (item) => item.routeName === route.params.routeName,
    )

    setCurrentPlate(current)
  }

  const router = useRouter()

  /** 切换至指定的版块 */
  const transferToSpecifyPalte = async (plate: Plate.Item) => {
    await router.push({
      name: ROUTE_NAME.PLATE_ITEM,
      params: { routeName: plate.routeName },
    })

    setCurrentPlate(plate)
  }

  /** 当前版块是否为漫画版块 */
  const isCommicPlate = computed(
    () => currentPlate.value?.pageType === PageType.COMMIC,
  )

  return {
    plates,
    setPlates,
    queryPlates,
    currentPlate,
    setCurrentPlate,
    setupCurrentPlate,
    isCommicPlate,
    transferToSpecifyPalte,
  }
})
