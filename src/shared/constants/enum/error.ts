export enum ErrorLevel {
  Info = 'info',

  /** 主に開発者が読むエラーである。 */
  Error = 'error',

  /** 主に利用者が読むエラーである。例えば利用者の入力ミス等である。 */
  Warning = 'warning',

  Success = 'success',
  Loading = 'loading'
}
