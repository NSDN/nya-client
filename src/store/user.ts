import { STORE_ID } from '@/shared/constants'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(STORE_ID.USER, () => {
  const username = ref<string>('游客')
  const setUsername = (name: string) => (username.value = name)

  const userIcon = ref<string>('https://i.imgur.com/SH1uR3f.png')
  const setUserIcon = (icon: string) => (userIcon.value = icon)

  return { username, setUsername, userIcon, setUserIcon }
})
