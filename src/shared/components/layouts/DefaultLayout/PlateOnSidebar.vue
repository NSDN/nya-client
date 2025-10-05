<script setup lang="ts">
import { computed } from 'vue'
import type { Plate } from '@/features/plates/types'

const props = defineProps<{
  item: Plate
  actived: boolean
}>()

const background = computed<string>(() => {
  return `url('https://i.pixiv.cat/img-master/img/2025/07/20/19/53/22/132915510_p1_master1200.jpg')`
  // return `url(${props.item.background})`
})

const title = computed<string>(() => {
  return props.item.name
})
</script>

<template>
  <button class="plate-on-sidebar" :class="{ actived }">
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

.plate-on-sidebar.actived {
  border: 0.3rem solid var(--color-pink);
}

.title {
  align-items: center;
  background: transparent;
  color: var(--color-white);
  display: flex;
  font-size: 1.25rem;
  height: 100%;
  justify-content: center;
  text-shadow: 1px 1px 8px #000;
  width: 100%;
}
</style>
