import { BaseError } from './BaseError'
import type { ErrorConfig } from '../types'

/** API 定義時に使うエラー型である。 */
export class ApiError extends BaseError {
  constructor(public config: ErrorConfig) {
    super(config)
    this.name = 'ApiError'
  }
}
