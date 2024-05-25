import type {
  NavigationGuardWithThis,
  NavigationHookAfter,
  RouteLocationNormalized,
} from 'vue-router'

import { ROUTE_NAME } from '@/constant/router'
import { useUserStore } from '@/features/authorization/store'
import { useLoginRedirect } from '@/features/temporary-storage/store'
import { usePlateStore } from '@/features/plate/store'

// [[导航守卫]]
export const beforeEachGuard: NavigationGuardWithThis<undefined> = (
  to,
  from,
) => {
  setNormalLoginRedirect(to, from)

  // 如果版块需要验证，则进入 login 画面
  const unauthorizedRedirect = checkAuthorization(to)
  if (unauthorizedRedirect) {
    return unauthorizedRedirect
  }
}

export const beforeResolveGuard: NavigationGuardWithThis<undefined> = (to) => {
  // 进入版块时设置保存当前版块信息至 session storage
  // 写在 resolve 里是因为 resolve 的发生时机在渲染 vue 组件之后
  // 而版块列表的请求发生在 vue 组件里
  setupCurrentplate(to)
}

export const afterEachHook: NavigationHookAfter = (_, from) => {
  resetLoginRedirect(from)
}

// [[导航守卫用到的函数]]
const checkAuthorization = (to: RouteLocationNormalized) => {
  const user = useUserStore()
  const unauthorized = to.meta.requiresAuthorization && !user.loggedIn

  if (unauthorized) {
    const loginRedirect = useLoginRedirect()
    loginRedirect.saveRedirect(to)
    return { name: ROUTE_NAME.LOGIN }
  }
}

const setNormalLoginRedirect = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
) => {
  if (to.name === ROUTE_NAME.LOGIN) {
    const loginRedirect = useLoginRedirect()

    if (!loginRedirect.redirect) {
      loginRedirect.saveRedirect(from)
    }
  }
}

const setupCurrentplate = (to: RouteLocationNormalized) => {
  if (to.name === ROUTE_NAME.PLATE_ITEM) {
    const plate = usePlateStore()
    plate.setupCurrentPlate(to)
  }
}

const resetLoginRedirect = (from: RouteLocationNormalized) => {
  if (from.name === ROUTE_NAME.LOGIN) {
    const loginRedirect = useLoginRedirect()
    loginRedirect.resetRedirect()
  }
}
