<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useNewTopicCommon } from '../hooks/use-new-topic-common'

// 进入创建帖文画面时默认聚焦在标题上
const inputRef = ref<HTMLInputElement>()
onMounted(() => inputRef.value?.focus())

const newTopic = useNewTopicCommon()
</script>

<template>
  <input
    ref="inputRef"
    class="topic-title"
    placeholder="标题"
    v-model="newTopic.title"
  />
</template>

<style scoped>
.topic-title {
  background: var(--common-block-background);
  border: none;
  border-radius: var(--common-block-radius);
  box-sizing: border-box;
  box-shadow: var(--common-block-box-shadow);
  font-size: 16px;
  margin: 1rem 0 0;
  padding: 0.4rem 0.5rem;
}
</style>
