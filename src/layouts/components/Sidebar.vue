<script setup lang="ts">
import PlateOnSidebar from '@/features/plate/components/PlateOnSidebar.vue'

import { usePlateStore } from '@/features/plate/store'
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const plate = usePlateStore()
const route = useRoute()

onBeforeMount(async () => {
  await plate.queryPlates()
  plate.setupCurrentPlate(route.params.routeName as string)
})
</script>

<template>
  <div class="sidebar">
    <div class="plate-group">
      <PlateOnSidebar
        class="plate-item"
        v-for="(item, index) of plate.plates"
        :key="index.toString()"
        :item="item"
      />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  box-shadow: 4px 0 5px 0 #888;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 20rem;
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
