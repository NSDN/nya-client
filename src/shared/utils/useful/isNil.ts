/**
 * 値が undefined か null である。
 *
 * @param payload 任意の値
 * @returns payload が未定義であるかどうか
 */
export function isNil(payload: unknown): payload is undefined | null {
  return payload === undefined || payload === null
}
