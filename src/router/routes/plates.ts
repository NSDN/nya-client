import type { RouteRecordRaw } from 'vue-router'

import { ROUTE_NAMES, ROUTE_PATHS } from '@/shared/constants'

const plates: RouteRecordRaw[] = [
  {
    path: ROUTE_PATHS.PLATE,
    name: ROUTE_NAMES.PLATE,
    meta: { displayCreateTopicButton: true },
    component: () => import('@/features/plate/views/PlateContent.vue'),
  },
]

export default plates
