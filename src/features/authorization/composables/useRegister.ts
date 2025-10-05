import type { AuthorizationServices } from '../types'

import { reactive } from 'vue'
import { updateObjectValue } from '@/shared/utils/useful'
import { register } from '../apis/register'
import { useRouter } from 'vue-router'
import { ROUTE_NAMES } from '@/shared/constants'

/** @description 注册功能 */
export function useRegister() {
  const router = useRouter()

  /** @description 注册信息 */
  const info = reactive<AuthorizationServices.RegisterInfo>({
    username: '',
    password: '',
    confirmPassword: ''
  })

  /** @description 注册信息错误 */
  const formError = reactive<AuthorizationServices.RegisterInfoError>({
    username: '',
    password: '',
    confirmPassword: ''
  })

  /** @description 确认注册 */
  const confirmRegister = async () => {
    // 表单验证
    const e = validateRegisterInfo(info)
    updateObjectValue(formError, e)
    const hasError = Object.values(formError).some(value => !!value)

    // 如表单验证失败则不执行注册
    if (hasError) {
      return
    }

    const maybeSuccess = await register(info)

    const success = maybeSuccess.match({
      ok: result => result,

      err: error => {
        error.notify()
        return false
      }
    })

    // 成功注册则跳转至登入画面
    if (success) {
      await router.push({ name: ROUTE_NAMES.LOGIN })
    }
  }

  return {
    info,
    confirmRegister,
    formError
  }
}

/** @description 验证注册信息 */
function validateRegisterInfo(
  info: AuthorizationServices.RegisterInfo
): AuthorizationServices.RegisterInfoError {
  const error: AuthorizationServices.RegisterInfoError = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  if (info.username.length < 6) {
    error.username = '用户名至少为 6 位'
  }

  if (info.password.length < 6) {
    error.password = '密码至少为 6 位'
  }

  if (info.confirmPassword.length < 6) {
    error.confirmPassword = '密码至少为 6 位'
  }

  if (info.confirmPassword !== info.password) {
    error.password = '密码不一致'
    error.confirmPassword = '密码不一致'
  }

  return error
}
