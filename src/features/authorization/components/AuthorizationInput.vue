<script setup lang="ts">
import BaseError from '@/shared/components/errors/BaseError.vue'

defineProps<{
  title: string
  type: string
  modelValue: string
  error: string
}>()

const value = defineModel<string>({ required: true })
</script>

<template>
  <form class="login-input" onsubmit="return false;">
    <span class="title">{{ title }}：</span>

    <div class="input-wrapper">
      <input :type="type" class="input" v-model="value" autocomplete="on" />
      <BaseError class="error" :error="error" />
    </div>
  </form>
</template>

<style scoped>
.login-input {
  display: flex;
}

.title {
  text-align: justify;
  text-align-last: justify;
  min-width: 5rem;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 0 0 0.5rem;
  position: relative;
}

.error {
  position: absolute;
  top: 1.6rem;
}
</style>
