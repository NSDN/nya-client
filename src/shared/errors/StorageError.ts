import { BaseError } from './BaseError'
import type { ErrorConfig } from '../types'

/** Storage から値の取得時に使うエラー型である。 */
export class StorageError extends BaseError {
  constructor(public config: ErrorConfig) {
    super(config)
    this.name = 'StorageError'
  }
}
