import type { PlateList } from '../types'
import type { AxiosResponse } from 'axios'

import { API_URL } from '@/config'
import { HTTPMethods } from '@/constant/enums'
import { http } from '@/lib/http/axios'

export async function queryPlateList(): Promise<PlateList | undefined> {
  try {
    const response: AxiosResponse<PlateList, null> = await http({
      url: API_URL.GET_PLATE_LIST,
      method: HTTPMethods.GET,
    })

    return response.data
  } catch (error) {
    console.error(error)
    return
  }
}
