<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from 'naive-ui'

// import { onMounted } from 'vue'
// import { useInitStoreWithStorage } from './shared/composables'
import { useNaiveUIGlobalConfig } from './shared/composables'
import { useLayout } from './shared/composables'
//
const { theme } = useNaiveUIGlobalConfig()
const { layout } = useLayout()

// const { initStoreWithStorage } = useInitStoreWithStorage()
// onMounted(() => initStoreWithStorage())
</script>

<template>
  <NConfigProvider :theme="theme">
    <NMessageProvider>
      <component :is="layout">
        <RouterView />
      </component>
    </NMessageProvider>
  </NConfigProvider>
</template>
