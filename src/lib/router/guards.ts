import type {
  NavigationGuardWithThis,
  RouteLocationNormalized,
  RouteLocationRaw,
} from 'vue-router'

import { ROUTE_NAME } from '@/constant/router'
import { useUserStore } from '@/features/authorization/store'

type NavigationGuardReturn = void | Error | RouteLocationRaw | boolean

export const beforeEachGuard: NavigationGuardWithThis<undefined> = (to) => {
  let navigation: NavigationGuardReturn

  navigation = checkAuthorization(to)

  return navigation
}

const checkAuthorization = (to: RouteLocationNormalized) => {
  const user = useUserStore()
  const unauthorized = to.meta.requiresAuthorization && !user.loggedIn

  if (unauthorized) {
    return { name: ROUTE_NAME.LOGIN }
  }
}
