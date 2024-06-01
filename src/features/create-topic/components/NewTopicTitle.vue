<script setup lang="ts">
import { ref } from 'vue'
import { useNewTopicCommon } from '../hooks/use-new-topic-common'

defineProps<{
  /** 文章体输入框节点 */
  bodyRef?: HTMLElement
}>()

const titleRef = ref<HTMLInputElement>()
const newTopic = useNewTopicCommon()

defineExpose({ titleRef })
</script>

<template>
  <input
    ref="titleRef"
    class="topic-title"
    v-focus
    v-tabdown="bodyRef"
    v-model="newTopic.title"
    placeholder="标题"
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
