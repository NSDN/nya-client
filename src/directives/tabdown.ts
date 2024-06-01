import { type App, type Directive, nextTick } from 'vue'

export const setupTabdownDirectives = (app: App) => {
  const KEYDOWN = 'keydown'

  // 当指令用在多个组件上时需要区分它们的目标节点，
  // 只用一个变量保存所有用到指令的组件的目标节点都会成为最后一个调用指令的组件的目标节点。
  const targetMap = new Map<HTMLElement, HTMLElement | undefined>()
  const shiftTargetMap = new Map<HTMLElement, HTMLElement | undefined>()

  // 监听器的挂载和卸载需要调用同一个函数
  const handleTabdown = (event: KeyboardEvent) => {
    const isTab = event.key === 'Tab'

    const tabHandler = (_target?: HTMLElement) => {
      event.preventDefault()
      nextTick(() => _target?.focus())
    }

    // 需要区分 tab 和 shift + tab 的情况
    const target = targetMap.get(event.target as HTMLElement)
    const isTabOnly = !event.shiftKey && isTab && target
    isTabOnly && tabHandler(target)

    const shiftTarget = shiftTargetMap.get(event.target as HTMLElement)
    const isShiftTab = event.shiftKey && isTab && shiftTarget
    isShiftTab && tabHandler(shiftTarget)
  }

  const directive: Directive<HTMLElement, HTMLElement | undefined> = {
    mounted: (el) => {
      el.addEventListener(KEYDOWN, handleTabdown)
    },

    // mounted 里可以用 querySelector 拿到 DOM， 但拿不到作为参数传入的 DOM。
    updated: (el, binding) => {
      if (binding.modifiers.shift) {
        shiftTargetMap.set(el, binding.value)
      } else {
        targetMap.set(el, binding.value)
      }
    },

    unmounted: (el) => {
      el.removeEventListener(KEYDOWN, handleTabdown)
    },
  }

  app.directive('tabdown', directive)
}
