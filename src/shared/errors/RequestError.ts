import { BaseError } from './BaseError'
import type { ErrorConfig } from '../types'

/** API 実行前にパラメータ用意失敗のエラー型である。 */
export class RequestError extends BaseError {
  constructor(public config: ErrorConfig) {
    super(config)
    this.name = 'RequestError'
  }
}
