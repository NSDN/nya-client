import { computed } from 'vue'
import { usePlatesStore } from '../stores/plates'
import { getPlates } from '../apis/plates'
import type { Plates } from '../types'
import { ResponsError } from '@/shared/errors'
import { ErrorLevel } from '@/shared/constants'

export function usePlates() {
  const platesStore = usePlatesStore()

  const handleGetPlates = async () => {
    const result = await getPlates()

    result.match({
      ok: (data) => {
        data.match({
          some: (plates) => platesStore.setPlates(plates),

          none: () => {
            const error = new ResponsError({
              level: ErrorLevel.Error,
              message: '[Plates]: 没有取到版块列表。',
            })

            error.notify()
          },
        })
      },

      err: (error) => error.notify(),
    })
  }

  return {
    plates: computed<Plates>(() => platesStore.plates),
    handleGetPlates,
  }
}
