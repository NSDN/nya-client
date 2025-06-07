<script setup lang="ts">
import { computed } from 'vue'
import type { Plate } from '@/features/plates/types'
import type { Option } from '@/shared/utils/rust'
import { BaseError } from '@/shared/errors'
import { ErrorLevel } from '@/shared/constants'

const props = defineProps<{
  item: Option<Plate>
}>()

const background = computed<string>(() => {
  return props.item.match({
    some: (plate) => `url(${plate.background})`,

    none: () => {
      const error = new BaseError({
        level: ErrorLevel.Error,
        message: `[Sidebar]: 没有获取到块版信息。`,
      })

      error.notifySilently()
      return ''
    },
  })
})

const title = computed<string>(() => {
  return props.item.match({
    some: (plate) => plate.name,

    none: () => {
      const error = new BaseError({
        level: ErrorLevel.Error,
        message: `[Sidebar]: 没有获取到块版信息。`,
      })

      error.notifySilently()
      return ''
    },
  })
})

// const border = computed<string>(() => {
//   return props.item.id === plate.currentPlate?.id ? '0.3rem solid red' : 'none'
// })

async function handleClick(): Promise<void> {
  // await plate.transferToSpecifyPalte(props.item)
}
</script>

<template>
  <button class="plate-on-sidebar" @click="handleClick">
    <span class="title">{{ title }}</span>
  </button>
</template>

<style scoped>
.plate-on-sidebar {
  align-items: center;
  background: v-bind(background);
  background-size: cover;
  border: none;
  border-radius: 3px;
  box-shadow: var(--common-block-box-shadow);
  box-sizing: border-box;
  display: flex;
  height: 6rem;
  justify-content: center;
  outline: none;
  padding: 0;
  width: 100%;
}

.title {
  align-items: center;
  background: transparent;
  /* border: v-bind('border'); */
  color: var(--color-white);
  display: flex;
  font-size: 1.25rem;
  height: 100%;
  justify-content: center;
  text-shadow: 1px 1px 8px #000;
  width: 100%;
}

.plate-on-sidebar:active .title {
  background: rgba(0, 0, 0, 0.2);
}
</style>
