import { BaseError } from '@/shared/errors'
import { isNil } from '../useful/isNil'
import { ErrorLevel } from '@/shared/constants'

export class Option<Value> {
  private constructor(
    /**
     * 被 Option 包装的值。
     * 为了避免在 JSON 化过程中丢失类信息而导致识别不出是什么对象，
     * 所以采用辨识度更高的命名。
     */
    private readonly _optionValue?: Value,
  ) {}

  static some<Value>(value: Value): Option<Value> {
    return new Option(value)
  }

  static none<Value = never>(): Option<Value> {
    return new Option<Value>()
  }

  isSome(): boolean {
    return !isNil(this._optionValue)
  }

  isNone(): boolean {
    return isNil(this._optionValue)
  }

  map<Transformed>(
    callback: (value: Value) => Transformed,
  ): Option<Transformed> {
    if (this.isNone()) {
      return Option.none()
    }

    return Option.some(callback(this._optionValue!))
  }

  andThen<Transformed>(
    callback: (value: Value) => Option<Transformed>,
  ): Option<Transformed> {
    if (this.isNone()) {
      return Option.none()
    }

    return callback(this._optionValue!)
  }

  unwrap(): Value {
    if (this.isNone()) {
      throw new BaseError({
        level: ErrorLevel.Error,
        message: 'None は取り出せません。',
      })
    }

    return this._optionValue!
  }

  unwrapOr(defaultValue: Value): Value {
    return this.isSome() ? this._optionValue! : defaultValue
  }

  match<Transformed>(handlers: {
    some: (value: Value) => Transformed
    none: () => Transformed
  }): Transformed {
    if (this.isNone()) {
      return handlers.none()
    }

    return handlers.some(this._optionValue!)
  }
}

/** 获取被 Option 包裏的类型。 */
export type UnwrapOption<Item> = Item extends Option<infer Inner> ? Inner : Item
