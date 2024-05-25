import type { RouteLocationNormalized, RouteLocationRaw } from 'vue-router'

import { STORE_ID } from '@/constant'
import { defineStore } from 'pinia'
import { ref } from 'vue'

/** 管理登入后的重定向 */
export const useLoginRedirect = defineStore(STORE_ID.LOGIN_REDIRECT, () => {
  const redirect = ref<RouteLocationRaw>()

  const saveRedirect = (route: RouteLocationNormalized) => {
    redirect.value = route
  }

  const resetRedirect = () => {
    redirect.value = undefined
  }

  return { redirect, saveRedirect, resetRedirect }
})
