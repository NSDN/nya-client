<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'

import { computed, onMounted, ref } from 'vue'
import { useModal } from '../stores'
import { Modal } from '../types'

const modalStore = useModal()

const modal = ref<HTMLDialogElement | undefined>()

onMounted(() => (modalStore.modal = modal.value))

const options = computed<Modal.ModalOptions>(() => modalStore.modalOptions)

const handleConfirm = () => {
  modalStore.closeModal()
  options.value.confirmCallback?.()
}

const handleCancel = () => {
  modalStore.closeModal()
  options.value.cancelCallback?.()
}
</script>

<template>
  <dialog id="modal" ref="modal" class="global-block-wrapper">
    <p class="info">{{ options.info }}</p>

    <div class="button-group">
      <BaseButton
        v-focus
        :label="options.buttonLabel![0]"
        @click="handleConfirm"
      />

      <BaseButton
        v-show="options.useSecondButton"
        :label="options.buttonLabel![1]"
        @click="handleCancel"
      />
    </div>
  </dialog>
</template>

<style scoped>
#modal[open] {
  align-items: center;
  background: #fff;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  min-height: 196px;
  min-width: 350px;
  padding: 0 1rem;
  z-index: 100;
}

.info {
  font-size: 18px;
}

.button-group {
  display: flex;
  gap: 3rem;
  justify-content: center;
}

.button-group button {
  width: 5rem;
}
</style>
