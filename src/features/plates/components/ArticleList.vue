<script setup lang="ts">
import type { Article } from '@/features/topics/types'

defineProps<{
  list: Article[]
}>()
</script>

<template>
  <div id="article-list">
    <button
      class="article-item markdwon-body"
      v-for="item of list"
      :key="item.id"
    >
      <span v-html="item.title" />
    </button>
  </div>
</template>

<style scoped>
#article-list {
  background: var(--color-normal-box-background);
  border-radius: 3px;
  box-shadow: var(--shadow-normal-box-shadow);
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
  font-size: 1rem;
  outline: none;
  padding: 1rem;
  text-align: start;
}
</style>
