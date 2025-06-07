/**
 * 文字列型かどうか。
 *
 * @param payload 任意の値。
 * @returns payload が文字列かどうか。
 */
export function isString(payload: unknown): payload is string {
  return typeof payload === 'string'
}
