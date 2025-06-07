import { Option, type Optionable } from '../rust'
import { isNil } from './isNil'
import { isNumber } from './isNumber'
import { isOption } from './isOption'

/**
 * 空の可能性のある値を Option に変換する。
 *
 * - 文字列ではない型で値が '' の場合は `none` になる。
 * - 数字ではない型で値が 0 以下の場合は `none` になる。
 *
 * @param value - 任意の値。
 * @returns Option に変換された `value`。
 */
export function toOption<Value>(
  value: Optionable<Value> | undefined | null,
): Option<Value> {
  if (isOption<Value>(value)) {
    return value
  }

  if (isNil(value)) {
    return Option.none()
  }

  if (isNumber(value) && Number.isNaN(value)) {
    return Option.none()
  }

  return Option.some(value)
}
