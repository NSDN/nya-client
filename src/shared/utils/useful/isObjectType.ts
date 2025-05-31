/**
 * 対象型かどうか。
 *
 * @param payload 任意の値。
 * @returns payload が対象型かどうか。
 */
export function isObjectType(payload: unknown): payload is object {
  const isNotNull = payload !== null
  const isNotArray = !Array.isArray(payload)
  const isObject = typeof payload === 'object'
  return isNotNull && isNotArray && isObject
}
