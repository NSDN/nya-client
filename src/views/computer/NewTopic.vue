<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import UploadCommicWrapper from '@/features/create-topic/components/UploadCommicWrapper.vue'
import ArticleTopicCreater from '@/features/create-topic/components/ArticleTopicCreater.vue'
import NewTopicTitle from '@/features/create-topic/components/NewTopicTitle.vue'

import { usePlateStore } from '@/features/plate/store'
import { ref } from 'vue'

const plate = usePlateStore()
const title = ref<{ titleRef?: HTMLElement }>()
const creater = ref<{ bodyRef?: HTMLElement }>()
</script>

<template>
  <div id="new-topic">
    <BackButton class="back" />
    <NewTopicTitle ref="title" :body-ref="creater?.bodyRef" />
    <UploadCommicWrapper v-if="plate.isCommicPlate" />
    <ArticleTopicCreater v-else ref="creater" :title-ref="title?.titleRef" />
  </div>
</template>

<style scoped>
#new-topic {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.back {
  align-self: flex-start;
  margin: -1rem 0 0;
}
</style>
