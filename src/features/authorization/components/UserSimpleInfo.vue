<script setup lang="ts">
import BaseHint from '@/components/BaseHint.vue'

import { reactive } from 'vue'
import { useUserSimpleInfo } from '../compositions'

const info = reactive(useUserSimpleInfo())
</script>

<template>
  <div id="user-simple-info">
    <button
      class="login-button"
      @click="info.handleClick"
      @pointerdown="info.handleLongTimePush"
      @pointerup="info.handleReleaseKey"
    >
      {{ info.username }}
    </button>

    <button
      class="login-button"
      @click="info.handleClick"
      @pointerdown="info.handleLongTimePush"
      @pointerup="info.handleReleaseKey"
    >
      <img :src="info.userIcon" alt="长按登出" />
    </button>

    <BaseHint margin-left="0.3rem" hint="长按登出" />
  </div>
</template>

<style scoped>
#user-simple-info {
  align-items: center;
  display: flex;
}

.login-button {
  all: unset;
  box-sizing: border-box;
  font-size: inherit;
  font-weight: inherit;
  padding: 0.3rem 0.7rem;
}

.login-button img {
  align-items: center;
  border-radius: 50%;
  border: var(--simple-info_icon-border);
  display: flex;
  height: 3.5rem;
  justify-content: center;
  width: 3.5rem;
}
</style>
