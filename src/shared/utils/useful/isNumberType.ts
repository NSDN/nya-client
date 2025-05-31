/**
 * 数字型かどうか。
 *
 * @param payload 任意の値。
 * @returns payload が数字かどうか。
 */
export function isNumberType(payload: unknown): payload is number {
  return typeof payload === 'number'
}
