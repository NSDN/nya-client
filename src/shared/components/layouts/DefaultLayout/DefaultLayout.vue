<script setup lang="ts">
import { CONFIG } from '@/shared/constants'
import { ref, Transition } from 'vue'

// import CreateTopicButton from '@/features/create-topic/components/CreateTopicButton.vue'
import Sidebar from './Sidebar.vue'
import SidebarController from './SidebarController.vue'
import Header from './Header.vue'

const displaySidebar = ref<boolean>(true)
const controlSidebar = () => (displaySidebar.value = !displaySidebar.value)
</script>

<template>
  <div
    id="main-layout"
    :style="`background-image: url(${CONFIG.BASE_BACKGROUND})`"
  >
    <Header />

    <div class="middle">
      <Transition name="slide">
        <Sidebar v-show="displaySidebar" />
      </Transition>

      <div class="content">
        <SidebarController @click="controlSidebar" />
        <slot />
      </div>
    </div>

    <footer>footer</footer>
    <!-- <CreateTopicButton /> -->
  </div>
</template>

<style scoped>
#main-layout {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  background: var(--color-layout-content-background);
  box-sizing: border-box;
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: var(--common-content-padding);
  position: relative;
}

#main-layout footer {
  align-items: center;
  background: var(--color-footer-background);
  display: flex;
  height: 2rem;
  justify-content: center;
}
</style>
