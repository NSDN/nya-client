import { useUserStore } from '@/store/user'
import { computed } from 'vue'
import { ONE_SECOND } from '../constants'

/** 简易个人信息 */
export function useUserSimpleInfo() {
  const userStore = useUserStore()

  const username = computed<string>(() => userStore.username)
  const userIcon = computed<string>(() => userStore.userIcon)

  /** 点击简易个人信息面板 */
  const handleClickSimpleInfo = async () => {
    // TODO: 点击简易个人信息图标跳转至登入页。
    // if (!userStore.loggedIn) {
    //   await router.push({ name: ROUTE_NAMES.LOGIN })
    // } else {
    //   // TODO: 登入后改为跳转到个人信息页（等待个人信息页的实装）
    //   console.warn('TODO: 登入后改为跳转到个人信息页（等待个人信息页的实装）')
    // }
  }

  let timer: number
  const clearTimer = () => timer && clearInterval(timer)

  /** 长按简易个人信息面板以登出 */
  const handleLongTimePushSimpleInfo = () => {
    // 未登入时不使长按生效
    // if (!userStore.loggedIn) {
    //   return
    // }

    // 清除可能存在的计时器
    clearTimer()

    // 计时超过 n 秒则登出，不到时间放开则会清除计时器
    timer = setTimeout((): void => {
      // userStore.logout()
      clearTimer()
    }, 1 * ONE_SECOND)
  }

  /** @description 放开按键 */
  const handleReleaseKey = () => {
    clearTimer()
  }

  return {
    username,
    userIcon,
    handleClickSimpleInfo,
    handleLongTimePushSimpleInfo,
    handleReleaseKey,
  }
}
