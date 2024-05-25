<script setup lang="ts">
import { usePlateStore } from './features/plate/store'

const plate = usePlateStore()
plate.queryPlates().then()
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>
