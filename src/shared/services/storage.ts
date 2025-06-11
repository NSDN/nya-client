import { ErrorLevel } from '../constants'
import { StorageError } from '../errors/StorageError'
import { Option, Result } from '../utils/rust'
import { isNil, optionizeDeep } from '../utils/useful'

export const storage = {
  get<Value>(key: string): Result<Option<Value>, StorageError> {
    const rawValue = localStorage.getItem(key)

    if (isNil(rawValue)) {
      return Result.ok(Option.none())
    }

    try {
      const value = JSON.parse(rawValue)
      return Result.ok(optionizeDeep(value) as Option<Value>)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)

      const err = new StorageError({
        level: ErrorLevel.Error,
        message: `[Storage]: 获取数据失败： ${message}`,
      })

      return Result.err(err)
    }
  },

  set<Value>(key: string, value: Value) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  remove(key: string) {
    localStorage.removeItem(key)
  },
}
