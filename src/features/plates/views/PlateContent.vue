<script setup lang="ts">
import { useTopics } from '@/features/topics'

import Announcement from '../components/Announcement.vue'
import ArticleList from '../components/ArticleList.vue'
import { useCurrentPlate } from '../composables/useCurrentPlate'
import { onMounted } from 'vue'
// import PictureList from '@/features/commic/components/PictureList.vue'

const { handleGetTopics, topics, goToTopic } = useTopics()
const { isComicPlate } = useCurrentPlate()

onMounted(async () => {
  await handleGetTopics()
})
</script>

<template>
  <div id="plate-content">
    <Announcement />

    <div class="search">筛选 / 检索</div>

    <div v-if="isComicPlate">漫画列表</div>
    <!-- 
    <PictureList
      v-if="plate.isCommicPlate"
      :list="commic.list"
      @click-item="commic.clickListItem"
    />
    -->
    <ArticleList v-else :list="topics" @click="goToTopic" />
  </div>
</template>

<style scoped>
#plate-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem;
}

.search {
  align-items: center;
  background: var(--color-normal-box-background);
  display: flex;
  height: 5rem;
  justify-content: center;
  margin: 1rem 0 0;
}
</style>
