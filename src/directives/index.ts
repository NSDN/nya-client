import type { App } from 'vue'
import { setupFocusDirectives } from './focus'
import { setupTabdownDirectives } from './tabdown'

export const setupDirectives = (app: App) => {
  setupFocusDirectives(app)
  setupTabdownDirectives(app)
}
