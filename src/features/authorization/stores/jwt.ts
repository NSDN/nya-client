import type { AuthorizationServices } from '../types'

import { storage } from '@/shared/services/storage'
import { STORAGE_KEYS, STORE_ID } from '@/shared/constants'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login } from '../services'
import { Option } from '@/shared/utils/rust'

/** @description JWT 状态库 */
const useJWTStore = defineStore(STORE_ID.JWT, () => {
  /** @description JWT 令牌 */
  const jwt = ref<Option<AuthorizationServices.Token>>(
    storage.get<AuthorizationServices.Token>(STORAGE_KEYS.TOKEN).match({
      ok: value => value,
      err: error => {
        console.log(error)
        return Option.none()
      }
    })
  )

  /**
   * @description 设置令牌
   * @param token 从后端获取到的令牌
   */
  const setJWT = (token: Option<AuthorizationServices.Token>) => {
    jwt.value = token

    // 在浏览器的 storage 中保存 token
    if (token) {
      storage.set(STORAGE_KEYS.TOKEN, token)
    } else {
      storage.remove(STORAGE_KEYS.TOKEN)
    }
  }

  /**
   * @description 请求令牌
   * @param info 登入信息
   */
  const queryToken = async (
    info: AuthorizationServices.LoginInfo
  ): Promise<AuthorizationServices.Token | undefined> => {
    const tokenInfo = await login(info)

    if (tokenInfo) {
      setJWT(tokenInfo)
      return tokenInfo
    }
  }

  return { jwt, setJWT, queryToken }
})

export default useJWTStore
