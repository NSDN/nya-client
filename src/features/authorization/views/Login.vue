<script setup lang="ts">
import AuthorizationInput from '../components/AuthorizationInput.vue'
import BackButton from '@/shared/components/buttons/BackButton.vue'
import BaseCard from '@/shared/components/cards/BaseCard.vue'

import { useLogin } from '../composables/useLogin'
import { useRouter } from 'vue-router'
import { ROUTE_NAMES } from '@/shared/constants'
import type { AuthorizationServices } from '../types'

const router = useRouter()
const { loginInfo, formError, login } = useLogin()

const formList: Record<'title' | 'type' | 'key', string>[] = [
  { title: '用户名', type: 'text', key: 'username' },
  { title: '密码', type: 'password', key: 'password' }
]

function moveToRegister() {
  router.push({ name: ROUTE_NAMES.REGISTER })
}

const handleEnter = (inputType: string) => {
  if (inputType === 'password') {
    login()
  }
}
</script>

<template>
  <div id="login">
    <BackButton />

    <BaseCard class="card" direction="column" height="20rem" width="30rem">
      <AuthorizationInput
        v-for="item in formList"
        :key="item.key"
        :title="item.title"
        :type="item.type"
        v-model="loginInfo[item.key as keyof AuthorizationServices.LoginInfo]"
        :error="
          formError[item.key as keyof AuthorizationServices.LoginInfoError]
        "
        @keydown.enter="() => handleEnter(item.type)"
      />

      <div class="button-group">
        <button class="button" @click="login">登入</button>
        <button class="button" @click="moveToRegister">注册</button>
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
#login {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
}

.back-button {
  left: 0;
  position: absolute;
  top: 0;
}

.card {
  gap: 2.5rem;
}

.button-group {
  align-self: center;
  display: flex;
  gap: 2rem;
  margin: 0.5rem 0 0;
}

.button {
  width: 3.5rem;
}
</style>
