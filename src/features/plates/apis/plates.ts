import type { Result, Option } from '@/shared/utils/rust'
import type { Plates } from '../types'
import type { ApiError } from '@/shared/errors'
import { request } from '@/shared/services/request'
import { API_URLS } from '@/shared/constants'

export async function getPlates(): Promise<Result<Option<Plates>, ApiError>> {
  return request({
    url: API_URLS.PLATES,
    method: 'GET',
  })
}
