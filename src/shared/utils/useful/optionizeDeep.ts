import { Option } from '../rust'
import { isNil } from './isNil'
import { isObject } from './isObject'
import { isPlainObjectLike } from './isPlainObjectLike'

type OptionizeArray<Item> =
  Item extends Array<infer E> ? Option<Optionized<E>[]> : Option<never>

type OptionizeObject<Item> = Item extends object
  ? Option<{ [Key in keyof Item]: Optionized<Item[Key]> }>
  : never

type Optionized<Item> = Item extends null | undefined
  ? Option<never>
  : Item extends Array<any>
    ? OptionizeArray<Item>
    : Item extends object
      ? OptionizeObject<Item>
      : Item

/**
 * 空の可能性のある値を回帰的に Option に変換する。
 *
 * - 文字列ではない型で値が '' の場合は `none` になる。
 * - 数字ではない型で値が 0 以下の場合は `none` になる。
 *
 * @param item - 任意の値。
 * @returns 回帰的に Option に変換された `item`。
 */
export function optionizeDeep<Item>(item: Item): Optionized<Item> {
  // 既に Option 型の場合に重ねた包装を防ぐための処理である。
  if (Object.prototype.hasOwnProperty.call(item, '_optionValue')) {
    item = (item as any)._optionValue
  }

  if (isNil(item)) {
    return Option.none<Item>() as Optionized<Item>
  }

  if (Array.isArray(item)) {
    return Option.some(item.map(optionizeDeep)) as Optionized<Item>
  }

  if (!isPlainObjectLike(item)) {
    return item as Optionized<Item>
  }

  const newItem: Record<string, Option<unknown> | unknown> = {}

  for (const key in item) {
    const value = item[key]

    if (isNil(value)) {
      newItem[key] = Option.none()
      continue
    }

    if (isObject(value)) {
      newItem[key] = optionizeDeep(value)
      continue
    }

    newItem[key] = value
  }

  return Option.some(newItem) as Optionized<Item>
}
