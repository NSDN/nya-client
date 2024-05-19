import {
  LOGOUT_LONG_PRESS_SECONDS,
  USER_SIMPLE_INFO_NAME_BEFORE_LOGIN,
  VISITOR_ICON,
} from '@/config'
import { ONE_SECOND } from '@/constant/enums'
import { ROUTE_NAME } from '@/constant/router'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useLogin } from '.'
import { useUserStore } from '../store'

export default function useUserSimpleInfo() {
  const user = useUserStore()
  const router = useRouter()
  const { logout } = useLogin()

  /** @description 简易个人信息表示名 */
  const username = computed<string>(
    () => user.userInfo?.nickname ?? USER_SIMPLE_INFO_NAME_BEFORE_LOGIN,
  )

  /** @description 简易个人信息用户头像 */
  const userIcon = computed<string>(() => user.userInfo?.icon ?? VISITOR_ICON)

  /** @description 点击简易个人信息面板 */
  const handleClick = async () => {
    if (!user.loggedIn) {
      await router.push({ name: ROUTE_NAME.LOGIN })
    } else {
      // TODO: 登入后改为跳转到个人信息页（等待个人信息页的实装）
      console.warn('TODO: 登入后改为跳转到个人信息页（等待个人信息页的实装）')
    }
  }

  let timer: NodeJS.Timeout
  const clearTimer = () => timer && clearInterval(timer)

  /** @description 长按简易个人信息面板以登出 */
  const handleLongTimePush = () => {
    // 未登入时不使长按生效
    if (!user.loggedIn) {
      return
    }

    // 清除可能存在的计时器
    clearTimer()

    // 计时超过 n 秒则登出，不到时间放开则会清除计时器
    timer = setTimeout((): void => {
      logout()
      clearTimer()
    }, LOGOUT_LONG_PRESS_SECONDS * ONE_SECOND)
  }

  /** @description 放开按键 */
  const handleReleaseKey = () => {
    clearTimer()
  }

  return {
    username,
    userIcon,
    handleClick,
    handleLongTimePush,
    handleReleaseKey,
  }
}
