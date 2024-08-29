<script setup lang="ts">
import type { Commic } from '../types'

import { PictureListTypeEnum } from '../enums'
import { computed } from 'vue'
import { NImage } from 'naive-ui'
const props = withDefaults(
  defineProps<{
    list: Commic.PictureItem[]
    listType?: PictureListTypeEnum
  }>(),

  { listType: PictureListTypeEnum.COMMIC }
)

enum Emits {
  CLICK_ITEM = 'clickItem',
}

const emit = defineEmits<{
  (event: Emits.CLICK_ITEM, itemID: string): void
}>()

const isPageType = computed<boolean>(
  () => props.listType === PictureListTypeEnum.PAGE
)

function clickItem(id: string): void {
  emit(Emits.CLICK_ITEM, id)
}
</script>

<template>
  <div class="commic-list">
    <button
      class="commic-item"
      v-for="item of list"
      :key="item.id"
      @click="clickItem(item.id)"
    >
      <n-image
        class="n-image"
        :src="item.thumbnail"
        :alt="item.title"
        preview-disabled
        lazy
        :intersection-observer-options="{
          root: '#image-scroll-container',
        }"
      />
      <span :class="{ 'page-type-title': isPageType }">{{ item.title }}</span>
    </button>
  </div>
</template>

<style scoped>
.commic-list {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  box-shadow: 0 1px 8px 0 #888;
  display: grid;
  flex: 1 1 0;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, 8rem);
  justify-content: center;
  margin: 1rem 0 0;
  overflow: auto;
  padding: 2rem 1rem;
}

.commic-item {
  background: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  outline: none;
  padding: 0;
  text-align: start;
}

.commic-item .n-image {
  height: 10rem;
  object-fit: cover;
  width: 8rem;
}

.commic-item span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 8rem;
}

.page-type-title {
  text-align: center;
}
</style>
