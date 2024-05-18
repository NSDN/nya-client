export function getMessage(
  key: string,
  params: Record<string, string> = {},
  locale: string = 'zh',
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
    return messages.zh.NO_MESSAGE
  }
}

export const messages = {
  zh: {
    /** @description 无预制信息 */
    NO_MESSAGE: 'NO MESSAGE',
    /** @description 请输入用户名 */
    NEED_USERNAME: '请输入用户名',
    /** @description 请输入用户名 */
    NEED_PASSWORD: '请输入密码',
    /** @description 已登出 */
    LOGGED_OUT: '已登出',
  },
}
