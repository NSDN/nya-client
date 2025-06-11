import type { Result, Option } from '@/shared/utils/rust'
import type { ApiError } from '@/shared/errors'
import { request } from '@/shared/services/request'
import { API_URLS } from '@/shared/constants'
import type { Plate } from '../types'

export async function getPlates(): Promise<
  Result<Option<Option<Plate>[]>, ApiError>
> {
  return request({
    url: API_URLS.PLATES,
    method: 'GET',
  })
}
