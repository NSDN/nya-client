<script setup lang="ts">
import { usePlates } from '@/features/plates/composables/usePlates'
import { useCurrentPlate } from '@/features/plates/composables/useCurrentPlate'
import { onMounted } from 'vue'

import PlateOnSidebar from './PlateOnSidebar.vue'

const { plates, handleGetPlates, goToPlate } = usePlates()
const { isCurrentPlate } = useCurrentPlate()

onMounted(async () => {
  await handleGetPlates()
})
</script>

<template>
  <div class="sidebar">
    <div class="plate-group">
      <PlateOnSidebar
        class="plate-item"
        v-for="(item, index) of plates"
        :key="index.toString()"
        :item="item"
        :actived="isCurrentPlate(item.id)"
        @click="() => goToPlate(item.id)"
      />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  background: var(--color-sidebar-background);
  box-sizing: border-box;
  box-shadow: 4px 0 5px 0 #888;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 24rem;
}

.plate-group {
  flex: 1;
  box-sizing: border-box;
  margin: 1rem -1rem 0;
  overflow: auto;
  padding: 0.3rem 1rem;
}

.plate-item {
  margin: 1rem 0 0;
}

.plate-item:first-child {
  margin: 0;
}
</style>
