import { computed } from 'vue'
import { usePlatesStore } from '../stores/plates'
import { getPlates } from '../apis/plates'
import { ResponsError } from '@/shared/errors'
import { ErrorLevel, ROUTE_NAMES } from '@/shared/constants'
import { PLATE_IDS, type Plate, type PlateId } from '../types'
import { Option, Result } from '@/shared/utils/rust'
import { useCurrentPlate } from './useCurrentPlate'
import { useRouter } from 'vue-router'

export function usePlates() {
  const router = useRouter()
  const platesStore = usePlatesStore()
  const { setCurrentPlateById } = useCurrentPlate()

  const plates = computed<Plate[]>(() => platesStore.plates)

  const handleGetPlates = async () => {
    const result = await getPlates()

    result
      .andThen(data =>
        data
          .andThen(plates => {
            const computedPlates = plates.flatMap(plate =>
              plate.match({
                some: value => [value],
                none: () => []
              })
            )

            if (computedPlates.length === 0) {
              return Option.none()
            }

            return Option.some(computedPlates)
          })
          .match({
            some: plates => Result.ok(plates),

            none: () => {
              const error = new ResponsError({
                level: ErrorLevel.Error,
                message: '[Plates]: 没有取到版块列表。'
              })

              return Result.err(error)
            }
          })
      )
      .match({
        ok: plates => {
          platesStore.setPlates(
            plates.sort((previous, next) => previous.sortOrder - next.sortOrder)
          )

          if (platesStore.currentPlate.isSome()) {
            return
          }

          setCurrentPlateById(PLATE_IDS.LOCALIZATION)
        },

        err: error => error.notify()
      })
  }

  const goToPlate = async (id: PlateId) => {
    await router.push({
      name: ROUTE_NAMES.PLATE,
      params: { id }
    })

    setCurrentPlateById(id)
  }

  return {
    plates,
    handleGetPlates,
    goToPlate
  }
}
