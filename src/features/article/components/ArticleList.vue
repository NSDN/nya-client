<script setup lang="ts">
import type { Articles } from '../types'

import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/constant/router'
import { ref, watchEffect } from 'vue'
import { queryArticles } from '../services'
import { useCurrentPlateStore } from '@/features/plate/store'

const router = useRouter()

function transfer() {
  router.push({ name: ROUTE_NAME.ARTICLE, params: { id: 0 } })
}

const articles = ref<Articles>([])

const setArticles = (list: Articles | undefined) => {
  articles.value = list ?? []
}

watchEffect(async () => {
  const currentPlateStore = useCurrentPlateStore()
  const list = await queryArticles(currentPlateStore.currentPlate?.routeName)
  setArticles(list)
})
</script>

<template>
  <div id="article-list">
    <button
      class="article-item"
      v-for="item of articles"
      :key="item.title"
      @click="transfer"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<style scoped>
#article-list {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  box-shadow: 0 1px 8px 0 #888;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  margin: 1rem 0 0;
  overflow: auto;
}

.article-item {
  background: none;
  border: none;
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  padding: 0;
  text-align: start;
}
</style>
