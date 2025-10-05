<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function handleBack(): void {
  router.back()
}
</script>

<template>
  <button class="back-button" @click="handleBack">く 返回</button>
</template>

<style scoped>
.back-button {
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  outline: none;
  padding: 0;
}
</style>
