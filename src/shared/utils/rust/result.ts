import { ErrorLevel } from '@/shared/constants'
import { BaseError } from '@/shared/errors'

export class Result<Value, Err extends BaseError> {
  private constructor(
    private readonly _ok: boolean,
    private readonly _value?: Value,
    private readonly _error?: Err,
  ) {}

  static ok<Value, Err extends BaseError>(value: Value): Result<Value, Err> {
    return new Result<Value, Err>(true, value)
  }

  static err<Err extends BaseError>(error: Err): Result<never, Err> {
    return new Result<never, Err>(false, undefined, error)
  }

  get value(): Value {
    if (!this._ok) {
      throw new BaseError({
        level: ErrorLevel.Error,
        message: '[Result]: 无法中错误中获取值。',
      })
    }

    return this._value!
  }

  get error(): Err {
    if (this._ok) {
      throw new BaseError({
        level: ErrorLevel.Error,
        message: '[Result]: 无法从值中获取错误。',
      })
    }

    return this._error!
  }

  isOk(): boolean {
    return this._ok
  }

  isErr(): boolean {
    return !this._ok
  }

  map<Transformed>(
    callback: (vaule: Value) => Transformed,
  ): Result<Transformed, Err> {
    if (!this._ok) {
      return Result.err(this._error!)
    }

    return Result.ok(callback(this._value!))
  }

  andThen<Transformed>(
    callback: (value: Value) => Result<Transformed, Err>,
  ): Result<Transformed, Err> {
    if (!this._ok) {
      return Result.err(this._error!)
    }

    return callback(this._value!)
  }

  unwrapOr(defaultValue: Value): Value {
    return this._ok ? this._value! : defaultValue
  }

  match<Transformed>(handlers: {
    ok: (value: Value) => Transformed
    err: (error: Err) => Transformed
  }): Transformed {
    if (!this._ok) {
      return handlers.err(this._error!)
    }

    return handlers.ok(this._value!)
  }
}
