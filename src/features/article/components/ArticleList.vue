<script setup lang="ts">
import type { Article, Articles } from '../types'

import useArticleStore from '../hooks/use-article-store'

defineProps<{
  list: Articles
}>()

const articleStore = useArticleStore()

const transfer = async (item: Article) => {
  await articleStore.goToArticle(item.topicID)
}
</script>

<template>
  <div id="article-list">
    <button
      class="article-item markdwon-body"
      v-for="item of list"
      :key="item.topicID"
      @click="() => transfer(item)"
    >
      <span v-html="item.title" />
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
