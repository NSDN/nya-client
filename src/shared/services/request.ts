import { AxiosError, type AxiosRequestConfig } from 'axios'
import { http } from './axios'
import { Result } from '../utils/rust'
import { ApiError } from '../errors'
import { ErrorLevel } from '../constants'

export async function request<Response, Payload = unknown>(
  config: AxiosRequestConfig<Payload>
): Promise<Result<Response, ApiError>> {
  try {
    const response = await http.request<Response>(config)

    if (response.status !== 200) {
      return Result.err(
        new ApiError({
          level: ErrorLevel.Error,
          message: `[API]: 请求失败，请求参数为：${config}`
        })
      )
    }

    return Result.ok(response.data)
  } catch (error) {
    let message = '未知类型的错误'

    if (error instanceof AxiosError) {
      message = `[${error.status}]: ${error.response?.data}`
    } else if (error instanceof Error) {
      message = `[API]: 请求失败，响应为： ${error.message}`
    } else {
      message = String(error)
    }

    const err = new ApiError({ level: ErrorLevel.Error, message })
    return Result.err(err)
  }
}
