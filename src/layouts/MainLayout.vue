<script setup lang="ts">
import CreateTopicButton from '@/features/create-topic/components/CreateTopicButton.vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'

import { BASE_BACKGROUND, BASE_BACKGROUND_SIZE } from '@/config'

import { ref } from 'vue'
const isSidebar = ref<boolean>(true)
</script>

<template>
  <div id="main-layout" :style="`background-image: url(${BASE_BACKGROUND})`">
    <Header v-model:isSidebar="isSidebar" />

    <div class="middle">
      <Sidebar v-model:isSidebar="isSidebar" />
      <div class="content" ><RouterView /></div>
    </div>

    <footer >footer</footer>
    <CreateTopicButton />
  </div>
</template>

<style scoped>
#main-layout {
  background-size: v-bind('BASE_BACKGROUND_SIZE');
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.middle {
  display: flex;
  flex: 1;
  overflow: auto;
}

.middle .content {
  background: rgba(255, 192, 203, 0.8);
  box-sizing: border-box;
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: var(--common-content-padding);
}

#main-layout footer {
  align-items: center;
  background: rgba(0, 128, 0, 0.8);
  display: flex;
  height: 2rem;
  justify-content: center;
}
</style>
