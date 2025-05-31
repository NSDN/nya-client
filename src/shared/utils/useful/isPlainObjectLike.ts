import { isObjectType } from './isObjectType'

/**
 * 回帰処理が可能な対象型かどうか。
 *
 * @param payload - 任意の値。
 * @returns `payload` が回帰初期可能な対象型かどうか。
 */
export function isPlainObjectLike(
  payload: unknown
): payload is Record<string, unknown> {
  const specialTypes: Function[] = [ArrayBuffer, Date, Map, Set, Blob]
  const isSpecialType = specialTypes.some(type => payload instanceof type)
  return isObjectType(payload) && !isSpecialType
}
