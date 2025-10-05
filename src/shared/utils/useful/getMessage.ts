import { useModalStore } from '@/features/modal'

export enum MessageKeys {
  /** 无预制信息 */
  NO_MESSAGE = 'NO MESSAGE',
  /** 请输入用户名 */
  NEED_USERNAME = 'NEED_USERNAME',
  /** 请输入用户名 */
  NEED_PASSWORD = 'NEED_PASSWORD',
  /** 已登出 */
  LOGGED_OUT = 'LOGGED_OUT',
  /** 缺少版块 ID */
  MISSING_PLATE_ID = 'MISSING_PLATE_ID',
  /** 缺少用户信息 */
  MISSING_USER_INFO = 'MISSING_USER_INFO',
  /** 缺少标题 */
  MISSING_TITLE = 'MISSING_TITLE',
  /** 缺少帖文 */
  MISSING_BODY = 'MISSING_BODY',
  /** 是否确认上传帖文 */
  CONFIRM_SUBMIT_TOPIC = 'CONFIRM_SUBMIT_TOPIC'
}

export const messages = {
  zh: {
    [MessageKeys.NO_MESSAGE]: 'NO MESSAGE',
    [MessageKeys.NEED_USERNAME]: '请输入用户名',
    [MessageKeys.NEED_PASSWORD]: '请输入密码',
    [MessageKeys.LOGGED_OUT]: '已登出',
    [MessageKeys.MISSING_PLATE_ID]: '缺少版块 ID',
    [MessageKeys.MISSING_USER_INFO]: '缺少用户信息',
    [MessageKeys.MISSING_TITLE]: '缺少标题',
    [MessageKeys.MISSING_BODY]: '缺少帖文',
    [MessageKeys.CONFIRM_SUBMIT_TOPIC]: '是否确认上传帖文'
  }
} as const

export function getMessage(
  key: MessageKeys,
  params: Record<string, string> = {},
  locale: string = 'zh'
) {
  const localizedMessages: Record<string, string> =
    messages[locale as keyof typeof messages]

  let message = localizedMessages[key]

  if (message) {
    for (const p in params) {
      message = message.replace(`{${p}}`, params[p])
    }

    return message
  } else {
    return messages.zh[MessageKeys.NO_MESSAGE]
  }
}

/** 发生错误时弹窗提示信息 */
export const openMessageModal = (
  key: MessageKeys,
  params?: Record<string, string>,
  locale?: string
) => {
  const modalStore = useModalStore()
  const message = getMessage(key, params, locale)
  modalStore.showModal({ info: message })
}

/** 打开确认操作弹窗 */
export const openConfirmModal = (
  confirmCallback: Function,
  options: {
    key: MessageKeys
    params?: Record<string, string>
    locale?: string
  } = { key: MessageKeys.CONFIRM_SUBMIT_TOPIC }
) => {
  const modalStore = useModalStore()
  const message = getMessage(options.key, options.params, options.locale)

  modalStore.showModal({
    info: message,
    confirmCallback,
    useSecondButton: true
  })
}
