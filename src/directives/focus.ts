import { type App, nextTick } from 'vue'

export const setupFocusDirectives = (app: App) => {
  app.directive<HTMLElement>('focus', {
    mounted: (el) => {
      nextTick(() => el.focus())
    },
  })
}
