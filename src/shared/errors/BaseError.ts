import { ErrorLevel } from '../constants/enum'
import type { ErrorConfig } from '../types'

export const errorLoggerMap: Record<ErrorLevel, (...data: any[]) => void> = {
  [ErrorLevel.Error]: console.error,
  [ErrorLevel.Warning]: console.warn,
  [ErrorLevel.Success]: console.log,
  [ErrorLevel.Info]: console.info,
  [ErrorLevel.Loading]: console.log,
}

export const toasterTypeMap: Record<
  ErrorLevel,
  'success' | 'error' | 'warning' | 'info'
> = {
  [ErrorLevel.Error]: 'error',
  [ErrorLevel.Warning]: 'warning',
  [ErrorLevel.Success]: 'success',
  [ErrorLevel.Info]: 'info',
  [ErrorLevel.Loading]: 'info',
}

/** このアプリケーションのベースエラー型である。 */
export class BaseError extends Error {
  constructor(public config: ErrorConfig) {
    super(config.message)
    this.name = 'BaseError'
  }

  notify() {
    const level = this.config.level
    errorLoggerMap[level](this)
    window.$message[level](this.config.message, { closable: true })
  }

  notifySilently() {
    const level = this.config.level
    errorLoggerMap[level](this)
  }
}
