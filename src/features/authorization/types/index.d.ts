import type { AxiosResponse } from 'axios'

export namespace AuthorizationServices {
  /** 令牌信息 */
  interface TokenInfo {
    accessToken: string
  }

  /** 登录信息 */
  type LoginInfo = Record<'username' | 'password', string>
  /** 登录信息错误 */
  type LoginInfoError = LoginInfo

  /** 用户信息 */
  interface UserInfo {
    uid: number
    username: string
    nickname: string
    userGroup: string
    mail: string
    icon: string
  }

  /** 注册信息 */
  interface RegisterInfo {
    /** 用户名 */
    username: string
    /** 密码 */
    password: string
    /** 确认密码 */
    confirmPassword: string
  }

  /** 注册信息错误 */
  type RegisterInfoError = RegisterInfo

  /** 请求 jwt 的响应 */
  type LoginResponse = AxiosResponse<TokenInfo, LoginInfo>

  /** 注册用户的响应 */
  type RegisterResponse = AxiosResponse<boolean, RegisterInfo>
}
