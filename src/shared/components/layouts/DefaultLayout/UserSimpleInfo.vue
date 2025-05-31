<script setup lang="ts">
import DefaultHint from '@/shared/components/hints/DefaultHint.vue'
import { useUserSimpleInfo } from '@/shared/composables'

const {
  handleClickSimpleInfo,
  handleLongTimePushSimpleInfo,
  handleReleaseKey,
  username,
  userIcon,
} = useUserSimpleInfo()
</script>

<template>
  <div id="user-simple-info">
    <button
      class="login-button"
      @click="handleClickSimpleInfo"
      @pointerdown="handleLongTimePushSimpleInfo"
      @pointerup="handleReleaseKey"
    >
      {{ username }}
    </button>

    <button
      class="login-button"
      @click="handleClickSimpleInfo"
      @pointerdown="handleLongTimePushSimpleInfo"
      @pointerup="handleReleaseKey"
    >
      <img :src="userIcon" alt="长按登出" />
    </button>

    <DefaultHint margin-left="0.3rem" hint="长按登出" />
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
