import type { AuthorizationServices } from '../types'

import { http } from '@/lib/http/axios'
import { HTTPMethods } from '@/constant/enums'
import { API_URL } from '@/config'
import { hashSecreate } from '@/utils'

/**
 * @description 登入 API
 * @param loginInfo 登入信息
 * @param loginInfo.username 用户名
 * @param loginInfo.password 密码
 * @returns 返回令牌或 undefined
 */
export async function login({
  username,
  password,
}: AuthorizationServices.LoginInfo): Promise<
  AuthorizationServices.TokenInfo | undefined
> {
  try {
    const response: AuthorizationServices.LoginResponse = await http({
      url: API_URL.LOGIN,
      method: HTTPMethods.POST,
      data: { username, password: password && hashSecreate(password) },
    })

    return response.data
  } catch (error) {
    console.error(error)
  }
}
