import type { AuthorizationServices } from '../types'

import { STORAGE_KEYS, STORE_ID } from '@/constant'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getMessage, storage } from '@/utils'
import { getUserInfo } from '../services'
import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/constant/router'

/** 用户 */
const useUserStore = defineStore(STORE_ID.USER, () => {
  /** 用户信息 */
  const userInfo = ref<AuthorizationServices.UserInfo | null>(
    storage.get<AuthorizationServices.UserInfo>(STORAGE_KEYS.USER_INFO),
  )

  /** 设置用户信息 */
  const setUserInfo = (info: AuthorizationServices.UserInfo | null) => {
    userInfo.value = info

    if (info) {
      storage.set(STORAGE_KEYS.USER_INFO, info)
    } else {
      storage.remove(STORAGE_KEYS.USER_INFO)
    }
  }

  /** 获取用户信息 */
  const queryUserInfo = async () => {
    const userInfo = await getUserInfo()
    userInfo && setUserInfo(userInfo)
  }

  /** 是否已经登入 */
  const loggedIn = computed<boolean>(() => !!userInfo.value)

  const router = useRouter()

  /**  登出 */
  const logout = (): void => {
    setUserInfo(null)
    storage.clear()
    window.alert(getMessage('LOGGED_OUT'))
    router.push({ name: ROUTE_NAME.HOME })
  }

  return { userInfo, setUserInfo, queryUserInfo, loggedIn, logout }
})

export default useUserStore
