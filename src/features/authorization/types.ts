import type { AxiosResponse } from 'axios'

export namespace AuthorizationServices {
  /** 令牌信息 */
  export interface Token {
    accessToken: string
  }

  /** 登录信息 */
  export type LoginInfo = Record<'username' | 'password', string>
  /** 登录信息错误 */
  export type LoginInfoError = LoginInfo

  /** 用户信息 */
  export interface UserInfo {
    uid: number
    username: string
    nickname: string
    userGroup: string
    mail: string
    icon: string
  }

  /** 注册信息 */
  export interface RegisterInfo {
    /** 用户名 */
    username: string
    /** 密码 */
    password: string
    /** 确认密码 */
    confirmPassword: string
  }

  /** 注册信息错误 */
  export type RegisterInfoError = RegisterInfo

  /** 请求 jwt 的响应 */
  export type LoginResponse = AxiosResponse<Token, LoginInfo>
}
