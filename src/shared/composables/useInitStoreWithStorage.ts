import { useCurrentPlate } from '@/features/plates/composables/useCurrentPlate'

export function useInitStoreWithStorage() {
  const { initCurrentPlateWithStorage } = useCurrentPlate()

  const initStoreWithStorage = () => {
    initCurrentPlateWithStorage()
  }

  return { initStoreWithStorage }
}
