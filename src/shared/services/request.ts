import type { AxiosRequestConfig } from 'axios'
import { http } from './axios'
import { Result } from '../utils/rust'
import { ApiError } from '../errors'
import { ErrorLevel } from '../constants'

export async function request<Response, Payload = unknown>(
  config: AxiosRequestConfig<Payload>,
): Promise<Result<Response, ApiError>> {
  try {
    const response = await http.request<Response>(config)

    if (response.status !== 200) {
      return Result.err(
        new ApiError({
          level: ErrorLevel.Error,
          message: `[API]: 请求失败，请求参数为：${config}`,
        }),
      )
    }

    return Result.ok(response.data)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)

    const err = new ApiError({
      level: ErrorLevel.Error,
      message: `[API]: 请求失败，响应为： ${message}`,
    })

    return Result.err(err)
  }
}
