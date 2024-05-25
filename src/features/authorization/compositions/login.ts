import type { AuthorizationServices } from '../types'

import { useRouter } from 'vue-router'
import { useJWTStore, useUserStore } from '../store'
import { reactive } from 'vue'
import { getMessage, updateObjectValue } from '@/utils'
import { useLoginRedirect } from '@/features/temporary-storage/store'
import { ROUTE_NAME } from '@/constant/router'

export function useLogin() {
  const userStore = useUserStore()
  const jwtStore = useJWTStore()
  const router = useRouter()

  /** @description 登入信息 */
  const loginInfo = reactive<AuthorizationServices.LoginInfo>({
    username: '',
    password: '',
  })

  const formError = reactive<AuthorizationServices.LoginInfoError>({
    username: '',
    password: '',
  })

  /** @description 登入 */
  const login = async () => {
    // 表单验证
    const error = validateLoginForm(loginInfo)
    updateObjectValue(formError, error)
    const hasError = Object.values(formError).some((value) => !!value)

    // 表单验证失败则不执行登入
    if (hasError) {
      return
    }

    // 请求到的 token 会存入 storage
    await jwtStore.queryToken(loginInfo)
    // API 调用时会通过 axios 请求拦截器将 jwt 写入表头以在后端进行验证
    await userStore.queryUserInfo()

    // 登入成功则跳转到指定的重定向画面或首页
    if (userStore.loggedIn) {
      const loginRedirect = useLoginRedirect()
      await router.push(loginRedirect.redirect ?? { name: ROUTE_NAME.HOME })
    }
  }

  return { loginInfo, formError, login }
}

/** @description 验证登录表单 */
function validateLoginForm(
  info: AuthorizationServices.LoginInfo,
): AuthorizationServices.LoginInfoError {
  const error: AuthorizationServices.LoginInfoError = {
    username: '',
    password: '',
  }

  if (info.username.length < 1) {
    error.username = getMessage('NEED_USERNAME')
  }

  if (info.password.length < 1) {
    error.password = getMessage('NEED_PASSWORD')
  }

  return error
}
