import { BaseError } from './BaseError'
import type { ErrorConfig } from '../types'

/** API 実行成功後の予期せぬ返り値のエラー型である。 */
export class ResponsError extends BaseError {
  constructor(public config: ErrorConfig) {
    super(config)
    this.name = 'ResponseError'
  }
}
