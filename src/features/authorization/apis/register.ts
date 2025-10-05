import type { AuthorizationServices } from '../types'

import { API_URLS } from '@/shared/constants'
import { HTTPMethods } from '@/shared/constants/enum'
import type { ApiError } from '@/shared/errors'
import { request } from '@/shared/services/request'
import type { Result } from '@/shared/utils/rust'
import { hashSecreate } from '@/shared/utils/useful'

/**
 * 注册 API
 * @param registerInfo 注测信息
 * @param registerInfo.username 用户名
 * @param registerInfo.password 确认密码
 * @param registerInfo.confrimPassword 密码
 * @returns 返回注册成功与否或 undefined
 */
export async function register({
  username,
  password,
  confirmPassword
}: AuthorizationServices.RegisterInfo): Promise<Result<boolean, ApiError>> {
  return await request({
    url: API_URLS.REGISTER,
    method: HTTPMethods.POST,
    data: {
      username,
      password: password && hashSecreate(password),
      confirmPassword: confirmPassword && hashSecreate(confirmPassword)
    }
  })
}
