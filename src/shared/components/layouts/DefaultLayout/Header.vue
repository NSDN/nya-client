<script setup lang="ts">
import UserSimpleInfo from './UserSimpleInfo.vue'

import { ROUTE_NAMES } from '@/shared/constants'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClickLogo = () => {
  router.push({ name: ROUTE_NAMES.HOME })
}
</script>

<template>
  <header id="header">
    <span id="logo" @click="handleClickLogo">
      喵玉殿 | 东方 Project 主题论坛
    </span>

    <UserSimpleInfo />
  </header>
</template>

<style scoped>
#header {
  align-items: center;
  background: var(--color-header-background);
  box-sizing: border-box;
  display: flex;
  font-size: var(--text-logo-size);
  font-weight: 600;
  height: 5rem;
  justify-content: space-between;
  padding: 1rem;
}

#logo {
  cursor: default;
}
</style>
