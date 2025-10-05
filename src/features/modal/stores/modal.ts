import type { Modal } from '../types'

import { defineStore } from 'pinia'
import { STORE_ID } from '@/shared/constants'
import { ref } from 'vue'

export const useModalStore = defineStore(STORE_ID.MODAL, () => {
  /** 模态框节点 */
  const modal = ref<HTMLDialogElement | undefined>()

  const defaultOptions: Modal.ModalOptions = {
    info: 'Confirm?',
    buttonLabel: ['确认', '取消'],
    useSecondButton: false
  }

  /** 模态框选项 */
  const modalOptions = ref<Modal.ModalOptions>(defaultOptions)

  /** 显示模态框 */
  const showModal = (options?: Modal.ModalOptions) => {
    modalOptions.value = { ...defaultOptions, ...options }
    modal.value?.showModal()
  }

  /** 关闭模态框 */
  const closeModal = () => {
    modal.value?.close()
  }

  return { modal, showModal, closeModal, modalOptions }
})
