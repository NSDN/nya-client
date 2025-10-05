<script setup lang="ts">
defineProps<{
  direction: 'column' | 'row'
  height: string
  width: string
}>()
</script>

<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoed>
.base-card {
  align-items: center;
  background: var(--common-block-background);
  border-radius: 5px;
  box-shadow: var(--common-block-box-shadow);
  display: flex;
  flex-direction: v-bind('direction');
  gap: 1rem;
  height: v-bind('height');
  justify-content: center;
  width: v-bind('width');
}
</style>
