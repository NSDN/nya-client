import { computed, type Component } from 'vue'

import DefaultLayout from '../components/layouts/DefaultLayout/DefaultLayout.vue'

export function useLayout() {
  const layout = computed<Component>(() => DefaultLayout)

  return { layout }
}
