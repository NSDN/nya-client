<script setup lang="ts">
import { computed, ref } from 'vue'
import { type RouteLocationRaw, useRoute } from 'vue-router'
import { ROUTE_NAME } from '@/constant/router'

const route = useRoute()

const buttonDisplayed = computed<boolean>(
  () => route.meta.displayCreateTopicButton as boolean,
)

const to = ref<RouteLocationRaw>({ name: ROUTE_NAME.NEW_TOPIC })
</script>

<template>
  <RouterLink v-if="buttonDisplayed" :to="to" id="create-topic-button">
    <img class="icon" src="@/assets/img/icon/note.svg" alt="note" />
  </RouterLink>
</template>

<style scoped>
#create-topic-button {
  align-items: center;
  background: var(--common-block-background);
  border: none;
  border-radius: 50%;
  box-shadow: var(--common-block-box-shadow);
  bottom: 2.5rem;
  display: flex;
  outline: none;
  padding: 0;
  position: fixed;
  right: 2.5rem;
  height: 3rem;
  justify-content: center;
  width: 3rem;
}

#create-topic-button:active {
  background: rgba(204, 204, 204, 0.8);
}

.icon {
  height: 1.5rem;
  margin: 0 0 0 0.3rem;
}
</style>
