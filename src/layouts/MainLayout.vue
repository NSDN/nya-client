<script setup lang="ts">
import CreateTopicButton from '@/features/create-topic/components/CreateTopicButton.vue'
import Sidebar from './components/Sidebar.vue'
import SidebarController from './components/SidebarController.vue'
import Header from './components/Header.vue'

import { BASE_BACKGROUND, BASE_BACKGROUND_SIZE } from '@/config'
import { ref, Transition } from 'vue'

const displaySidebar = ref<boolean>(true)
const controlSidebar = () => (displaySidebar.value = !displaySidebar.value)
</script>

<template>
  <div id="main-layout" :style="`background-image: url(${BASE_BACKGROUND})`">
    <Header />

    <div class="middle">
      <Transition name="slide">
        <Sidebar v-show="displaySidebar" />
      </Transition>

      <!-- TODO: 边栏开关时的内容块动画 -->
      <div class="content">
        <SidebarController @click="controlSidebar" />
        <RouterView />
      </div>
    </div>

    <footer>footer</footer>
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

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.middle .content {
  background: rgba(255, 192, 203, 0.8);
  box-sizing: border-box;
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: var(--common-content-padding);
  position: relative;
}

#main-layout footer {
  align-items: center;
  background: rgba(0, 128, 0, 0.8);
  display: flex;
  height: 2rem;
  justify-content: center;
}
</style>
