<script setup lang="ts">
import UserSimpleInfo from '@/features/authorization/components/UserSimpleInfo.vue'
import BaseModal from '@/features/modal/components/BaseModal.vue'

import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/constant/router'

const router = useRouter()

const handleClickLogo = () => {
  router.push({ name: ROUTE_NAME.HOME })
}
</script>

<template>
  <header id="header">
    <span id="logo" @click="handleClickLogo">
      喵玉殿 | 东方 Project 主题论坛
    </span>

    <UserSimpleInfo />
  </header>

  <BaseModal />
</template>

<style scoped>
#header {
  align-items: center;
  background: rgba(255, 100, 100, 0.6);
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
