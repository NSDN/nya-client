import { STORE_ID } from '@/shared/constants'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Plate } from '../types'
import { Option, type Optionable } from '@/shared/utils/rust'
import { toOption } from '@/shared/utils/useful'

export const usePlatesStore = defineStore(STORE_ID.PLATES, () => {
  const plates = ref<Plate[]>([])

  const setPlates = (payload: Plate[]) => {
    plates.value = payload
  }

  const currentPlate = ref<Option<Plate>>(Option.none())

  const setCurrentPlate = (payload: Optionable<Plate>) => {
    currentPlate.value = toOption(payload)
  }

  return { plates, setPlates, currentPlate, setCurrentPlate }
})
