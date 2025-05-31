import { BaseError } from '@/shared/errors'
import { Result } from '../rust'
import { ErrorLevel } from '@/shared/constants'

/**
 * 有効な日付かどうかを判定する。
 *
 * @param maybeDate - 日付の可能性のあるものである。
 * @returns 有効な日付であれば true、そうでなければ false である。
 */
export function isValidDate(maybeDate: Date | string): boolean {
  const date = new Date(maybeDate)
  return !isNaN(date.getTime())
}

/**
 * 日付から年月日の文字列を分けた状態で取得する。
 *
 * @param maybeDate - 日付の可能性のあるものである。
 * @returns `{ year: string, month: string, day: string}`。
 */
export function parseDateParts(
  maybeDate: Date | string
): Result<Record<'year' | 'month' | 'day', string>, BaseError> {
  if (!isValidDate(maybeDate)) {
    const error = new BaseError({
      level: ErrorLevel.Error,
      message: `[Date]: \`${maybeDate}\`有効な日付ではありません。`
    })

    return Result.err(error)
  }

  const date = new Date(maybeDate)
  const year = String(date.getFullYear()).padStart(4, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return Result.ok({ year, month, day })
}

/**
 * 今月最後の週かどうかを判定する。
 *
 * @returns 最後の週でれば true、 そうでなければ false である。
 */
export function isLastWeekOfMonth(): boolean {
  const today = new Date()
  const year = today.getFullYear()
  const nextMonthIndex = today.getMonth() + 1

  // 0 日は存在しないため、前の月の最後の日が返される。
  const lastDay = new Date(year, nextMonthIndex, 0)

  const lastWeek = lastDay.getDate() - 6

  return lastWeek <= today.getDate() && today.getDate() <= lastDay.getDate()
}

/**
 * 指定された日付又は時刻を人が読める文字列に整形する。
 *
 * @param maybeDateTime - 日付型の値若しくは `yyyyMMddHHmm` である。
 * @param isDate - 日付の場合は true、数字の場合は false である。
 * @returns 人が読める日付又は時刻である。
 */
export function formatDateTime(
  maybeDateTime: Date | string,
  isDate: boolean = false
): Result<string, BaseError> {
  let date: Date = new Date()
  if (maybeDateTime instanceof Date) {
    date = maybeDateTime
  } else {
    const year = Number(maybeDateTime.slice(0, 4))
    const month = Number(maybeDateTime.slice(4, 6)) - 1
    const day = Number(maybeDateTime.slice(6, 8))
    const hour = Number(maybeDateTime.slice(8, 10))
    const minute = Number(maybeDateTime.slice(10, 12))
    date = new Date(year, month, day, hour, minute)
  }

  if (!isValidDate(date)) {
    const error = new BaseError({
      level: ErrorLevel.Error,
      message: `[Date]: \`${maybeDateTime}\`有効な日付ではありません。`
    })

    return Result.err(error)
  }

  let formatted: string = ''
  if (isDate) {
    formatted = new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  } else {
    formatted = new Intl.DateTimeFormat('ja-JP', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      timeZone: '+0900'
    }).format(date)
  }

  return Result.ok(formatted)
}
