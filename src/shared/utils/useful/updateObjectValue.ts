/**
 * @description 更新对象的值
 * @param target 目标对象
 * @param source 源对象
 */
export function updateObjectValue<
  Target extends Record<string, any>,
  Source extends Record<string, any>
>(target: Target, source: Source) {
  for (const key in target) {
    if (target.hasOwnProperty(key) && source.hasOwnProperty(key)) {
      target[key] = source[key as Extract<keyof Record<string, any>, string>]
    }
  }
}
