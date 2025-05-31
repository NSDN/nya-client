import {
  useOsTheme,
  type GlobalTheme,
  darkTheme,
  lightTheme,
  useMessage,
} from 'naive-ui'
import { computed } from 'vue'
import type { OsTheme } from '../types'
import { isNil } from '../utils/useful'

export function useNaiveUIGlobalConfig() {
  const themeMap: Record<OsTheme, GlobalTheme> = {
    dark: darkTheme,
    light: lightTheme,
  }

  const osTheme = useOsTheme()

  const theme = computed<GlobalTheme>(() => {
    if (isNil(osTheme)) {
      return themeMap['dark']
    }

    return themeMap[osTheme.value!]
  })

  const initMessager = () => {
    window.$message = useMessage()
  }

  return {
    theme,

    /**
     * `setup` 外で利用する可能性を考慮して `window` にマウントする。
     *
     * @see https://www.naiveui.com/zh-CN/dark/components/message#%E5%9C%A8-setup-%E5%A4%96%E4%BD%BF%E7%94%A8
     */
    initMessager,
  }
}
