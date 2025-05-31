import { Option } from '../rust'
import { isNil } from './isNil'
import { isNumberType } from './isNumberType'
import { isStringType } from './isStringType'

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
  value: Value | undefined | null
): Option<Value> {
  if (isNil(value)) {
    return Option.none()
  }

  if (!isStringType(value) && value === '') {
    return Option.none()
  }

  if (!isNumberType(value) && Number(value) <= 0) {
    return Option.none()
  }

  return Option.some(value)
}
