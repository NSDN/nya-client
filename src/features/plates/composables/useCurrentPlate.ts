import { usePlatesStore } from '../stores/plates'
import { storage } from '@/shared/services/storage'
import { PageType, STORAGE_KEYS } from '@/shared/constants'
import type { Plate, PlateId } from '../types'
import { toOption } from '@/shared/utils/useful'
import { computed } from 'vue'

export function useCurrentPlate() {
  const platesStore = usePlatesStore()

  const isCurrentPlate = (id: PlateId) => {
    return platesStore.currentPlate.match({
      some: plate => plate.id === id,
      none: () => false
    })
  }

  const isComicPlate = computed<boolean>(() =>
    platesStore.currentPlate.match({
      some: plate => plate.pageType === PageType.COMIC,
      none: () => false
    })
  )

  const setCurrentPlateById = (id: PlateId) => {
    const target = toOption(platesStore.plates.find(plate => plate.id === id))

    target.match({
      some: plate => {
        platesStore.setCurrentPlate(target)
        storage.set<Plate>(STORAGE_KEYS.CURRENT_PLATE, plate)
      },

      none: () => {}
    })
  }

  const initCurrentPlateWithStorage = () => {
    storage.get<Plate>(STORAGE_KEYS.CURRENT_PLATE).match({
      ok: plate => platesStore.setCurrentPlate(plate),
      err: error => error.notify()
    })
  }

  return {
    isCurrentPlate,
    isComicPlate,
    setCurrentPlateById,
    initCurrentPlateWithStorage
  }
}
