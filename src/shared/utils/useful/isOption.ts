import { Option } from '../rust'
import { isObject } from './isObject'

/**
 * 判断是否为 `Option` 类型。
 *
 * @param value - 任意値。
 * @returns 是否为 `Option` 类型。
 */
export function isOption<Value>(value: unknown): value is Option<Value> {
  return (
    isObject(value) &&
    Object.prototype.hasOwnProperty.call(value, '_optionValue')
  )
}
