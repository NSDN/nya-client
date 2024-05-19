<script setup lang="ts">
const title = defineModel()
</script>

<template>
  <input class="topic-title" placeholder="标题" v-model="title" />
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
