<script setup lang="ts">
defineProps<{
  error: string
}>()
</script>

<template>
  <span class="error">{{ error }}</span>
</template>

<style scoped>
.error {
  color: var(--error-color);
}
</style>
