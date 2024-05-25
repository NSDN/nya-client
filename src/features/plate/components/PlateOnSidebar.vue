<script setup lang="ts">
import type { Plate } from '../types'

import { computed } from 'vue'
import { usePlateStore } from '../store'

const props = defineProps<{
  item: Plate
}>()

const background = computed<string>(() => `url(${props.item.background})`)

const plate = usePlateStore()

const border = computed<string>(() => {
  return props.item.id === plate.currentPlate?.id ? '0.3rem solid red' : 'none'
})

async function transfer(): Promise<void> {
  await plate.transferToSpecifyPalte(props.item)
}
</script>

<template>
  <button class="plate-on-sidebar" @click="transfer">
    <span class="title">{{ item.name }}</span>
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
  height: 5rem;
  justify-content: center;
  outline: none;
  padding: 0;
  width: 100%;
}

.title {
  align-items: center;
  background: transparent;
  border: v-bind('border');
  color: var(--plate-name-color);
  display: flex;
  font-size: var(--plate-name-font-size);
  height: 100%;
  justify-content: center;
  text-shadow: var(--plate-name-text-shadow);
  width: 100%;
}

.plate-on-sidebar:active .title {
  background: rgba(0, 0, 0, 0.2);
}
</style>
