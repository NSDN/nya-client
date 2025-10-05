import { computed, type Component } from 'vue'

import DefaultLayout from '../components/layouts/DefaultLayout/DefaultLayout.vue'
import { useRoute } from 'vue-router'

export function useLayout() {
  const route = useRoute()

  const layout = computed<Component>(() => {
    return route.meta.layout ?? DefaultLayout
  })

  return { layout }
}
