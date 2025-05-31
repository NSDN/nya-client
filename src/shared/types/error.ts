import type { ErrorLevel } from '../constants/enum/error'

export interface ErrorConfig {
  level: ErrorLevel

  // TODO: 未定
  code?: string

  message: string
}
