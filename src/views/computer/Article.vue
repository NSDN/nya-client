<script setup lang="ts">
import Floor from '@/features/floor/components/Floor.vue'
import MarkdownSample from '@/components/MarkdownSample.vue'
import BackButton from '@/components/BackButton.vue'

import { onMounted } from 'vue'
import { useTopicFloorsStore } from '@/features/floor/stores'
import { useRoute } from 'vue-router'

const route = useRoute()
const topicFloors = useTopicFloorsStore()

onMounted(async () => {
  await topicFloors.getTopicFloors(route.params.id.toString())
})

// FIXME: 用正式 md 替换
function submit(article: string): void {
  if (article) {
  }
}
</script>

<template>
  <div id="article">
    <BackButton class="back" />

    <div class="building">
      <Floor
        v-for="item of topicFloors.content?.list"
        :key="item.level.toString()"
        :icon="item.author.icon"
        :nickname="item.author.nickname"
        :body-type="item.bodyType"
        :body="item.body"
        :level="item.level"
      />
    </div>

    <!-- FIXME: 用正式 md 替换 -->
    <MarkdownSample @submit="submit" />
  </div>
</template>

<style scoped>
#article {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}

.back {
  align-self: flex-start;
  margin: -1rem 0 0;
}

.building {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 1rem 0 0;
  overflow: auto;
  gap: 1rem;
}
</style>
