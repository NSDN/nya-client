<script setup lang="ts">
import { usePlateStore } from './features/plate/store'

import { NConfigProvider } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'
const plate = usePlateStore()
plate.queryPlates().then()
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <div class="app">
      <RouterView />
    </div>
  </n-config-provider>
</template>
